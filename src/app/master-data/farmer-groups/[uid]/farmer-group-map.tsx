"use client";

import { useMemo, useState, useEffect, useRef } from 'react';
import Map, { NavigationControl, Source, Layer, MapRef } from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
import maplibregl from 'maplibre-gl';
import bbox from '@turf/bbox';
import { featureCollection } from '@turf/helpers';
import centroid from '@turf/centroid';
import type { Feature, Polygon, MultiPolygon } from 'geojson';

interface LandParcel {
    uid: string;
    fid: string;
    fgName: string;
    displayLandParcelID: string;
    revision: number;
    polygon: any; // GeoJSON
    sizeHa: number;
    farmerName?: string;
    farmerStatus?: string;
    displayFarmerID?: string;
}

interface FarmerGroupMapProps {
    landParcels: LandParcel[];
    selectedFeatureId?: string;
    onFeatureClick?: (feature: any) => void;
}

export default function FarmerGroupMap({ landParcels, selectedFeatureId, onFeatureClick }: FarmerGroupMapProps) {
    const [viewState, setViewState] = useState({
        longitude: 101.4428,
        latitude: 0.5071,
        zoom: 8
    });
    const [basemap, setBasemap] = useState<'road' | 'satellite' | 'hybrid'>('satellite');
    const [hoverInfo, setHoverInfo] = useState<{
        longitude: number;
        latitude: number;
        feature: any;
    } | null>(null);

    // Helper to detect dummy polygons seeded at [101, 0]
    const isRealPolygon = (polygon: any) => {
        if (!polygon) return false;
        try {
            let coords;
            if (polygon.type === 'FeatureCollection') {
                coords = polygon.features[0]?.geometry?.coordinates;
            } else if (polygon.type === 'Feature') {
                coords = polygon.geometry?.coordinates;
            } else {
                coords = polygon.coordinates;
            }

            let isDummy = false;
            const extract = (arr: any) => {
                if (Array.isArray(arr) && Array.isArray(arr[0])) {
                    arr.forEach(extract);
                } else if (Array.isArray(arr) && arr.length >= 2) {
                    // Check if coordinate is exactly 101, 0 (or close enough realistically representing the dummy seed)
                    if (arr[0] === 101 && arr[1] === 0) {
                        isDummy = true;
                    }
                }
            };
            if (coords) extract(coords);
            return !isDummy;
        } catch (e) {
            return true; // Keep it if we can't parse it
        }
    };

    // Create a GeoJSON FeatureCollection from the land parcels
    const geojsonData = useMemo(() => {
        const features: Feature<Polygon | MultiPolygon>[] = landParcels
            .filter(lp => isRealPolygon(lp.polygon))
            .map(lp => {
                // Determine if lp.polygon is already a Feature or just the Geometry
                let geometry = lp.polygon;
                if (lp.polygon.type === 'Feature' && lp.polygon.geometry) {
                    geometry = lp.polygon.geometry;
                }
                
                return {
                    type: 'Feature',
                    geometry: geometry,
                    properties: {
                        id: lp.uid,
                        parcelId: lp.displayLandParcelID,
                        farmerGroupId: lp.fgName,
                        sizeHa: lp.sizeHa,
                        fid: lp.fid,
                        farmerName: lp.farmerName,
                        farmerStatus: lp.farmerStatus,
                        displayFarmerID: lp.displayFarmerID
                    }
                } as Feature<Polygon | MultiPolygon>;
            });
            
        return featureCollection(features);
    }, [landParcels]);

    // Create a Point FeatureCollection specifically for the center labels
    const labelData = useMemo(() => {
        const points = geojsonData.features.map(feature => {
            try {
                // Turf centroid gets the mathematical center of the polygon
                const centerPoint = centroid(feature);
                // Carry over the properties representing the label payload
                centerPoint.properties = feature.properties;
                return centerPoint;
            } catch (e) {
                return null;
            }
        }).filter(Boolean) as Feature<any>[];

        return featureCollection(points);
    }, [geojsonData]);

    const mapRef = useRef<MapRef | null>(null);

    const fitMapToBounds = () => {
        if (geojsonData.features.length > 0 && mapRef.current) {
            try {
                const [minX, minY, maxX, maxY] = bbox(geojsonData);
                if (minX !== Infinity && minY !== Infinity) {
                    mapRef.current.fitBounds(
                        [minX, minY, maxX, maxY],
                        { padding: 40, duration: 1000 }
                    );
                }
            } catch (err) {
                console.error("Error calculating bounding box:", err);
            }
        }
    };

    // Fit map bounds to the polygons when data changes
    useEffect(() => {
        fitMapToBounds();
    }, [geojsonData]);

    // Dynamic Map Style based on selection
    const mapStyle = useMemo(() => {
        switch (basemap) {
            case 'satellite':
                // Using a common free satellite placeholder or Google raster
                return {
                    version: 8,
                    sources: {
                        'google-satellite': {
                            type: 'raster',
                            tiles: [
                                'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
                            ],
                            tileSize: 256,
                            attribution: '&copy; Google Maps'
                        }
                    },
                    layers: [
                        {
                            id: 'google-satellite-layer',
                            type: 'raster',
                            source: 'google-satellite',
                            minzoom: 0,
                            maxzoom: 22
                        }
                    ]
                } as any;
            case 'hybrid':
                return {
                    version: 8,
                    sources: {
                        'google-hybrid': {
                            type: 'raster',
                            tiles: [
                                'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
                            ],
                            tileSize: 256,
                            attribution: '&copy; Google Maps'
                        }
                    },
                    layers: [
                        {
                            id: 'google-hybrid-layer',
                            type: 'raster',
                            source: 'google-hybrid',
                            minzoom: 0,
                            maxzoom: 22
                        }
                    ]
                } as any;
            case 'road':
            default:
                // Google Maps Raster Style
                return {
                    version: 8,
                    sources: {
                        'google-maps': {
                            type: 'raster',
                            tiles: [
                                'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
                            ],
                            tileSize: 256,
                            attribution: '&copy; Google Maps'
                        }
                    },
                    layers: [
                        {
                            id: 'google-maps-layer',
                            type: 'raster',
                            source: 'google-maps',
                            minzoom: 0,
                            maxzoom: 22
                        }
                    ]
                } as any;
        }
    }, [basemap]);

    const onHover = (event: any) => {
        const { features, lngLat } = event;
        const hoveredFeature = features && features[0];
        
        if (hoveredFeature) {
            setHoverInfo({
                longitude: lngLat.lng,
                latitude: lngLat.lat,
                feature: hoveredFeature.properties
            });
        } else {
            setHoverInfo(null);
        }
    };

    const onClick = (event: any) => {
        const { features } = event;
        const clickedFeature = features && features[0];
        if (clickedFeature && onFeatureClick) {
            onFeatureClick(clickedFeature.properties);
        }
    };

    return (
        <div className="w-full h-[500px] relative rounded-md overflow-hidden border border-border">
            <Map
                ref={mapRef}
                {...viewState}
                onMove={evt => setViewState(evt.viewState)}
                onLoad={fitMapToBounds}
                style={{ width: '100%', height: '100%' }}
                mapStyle={mapStyle}
                mapLib={maplibregl}
                interactiveLayerIds={['land-parcels-fill']}
                onMouseMove={onHover}
                onMouseLeave={() => setHoverInfo(null)}
                onClick={onClick}
                cursor={hoverInfo ? 'pointer' : 'grab'}
            >
                <NavigationControl position="bottom-right" />

                {geojsonData.features.length > 0 && (
                    <Source id="land-parcels" type="geojson" data={geojsonData}>
                        <Layer 
                            id="land-parcels-fill" 
                            type="fill" 
                            paint={{
                                'fill-color': [
                                    'case',
                                    ['==', ['get', 'id'], selectedFeatureId || ''],
                                    '#eab308', // Yellow-500
                                    '#3b82f6'  // Blue-500
                                ],
                                'fill-opacity': 0.5
                            }} 
                        />
                        <Layer 
                            id="land-parcels-outline" 
                            type="line" 
                            paint={{
                                'line-color': [
                                    'case',
                                    ['==', ['get', 'id'], selectedFeatureId || ''],
                                    '#ca8a04', // Yellow-600
                                    '#2563eb'  // Blue-600
                                ],
                                'line-width': [
                                    'case',
                                    ['==', ['get', 'id'], selectedFeatureId || ''],
                                    3,
                                    2
                                ]
                            }} 
                        />
                    </Source>
                )}

                {labelData.features.length > 0 && (
                    <Source id="land-parcels-labels" type="geojson" data={labelData}>
                        <Layer 
                            id="land-parcels-label" 
                            type="symbol" 
                            layout={{
                                'text-field': ['get', 'farmerName'],
                                'text-size': 11,
                                'text-anchor': 'center',
                                'text-justify': 'center',
                                'text-offset': [0, 0],
                                'text-allow-overlap': false // Hide if text overlaps
                            }}
                            paint={{
                                'text-color': '#ffffff',
                                'text-halo-color': '#000000',
                                'text-halo-width': 1.5,
                                'text-halo-blur': 1,
                                'text-opacity': [
                                    'interpolate',
                                    ['linear'],
                                    ['zoom'],
                                    12, 0, // completely transparent at zoom 12
                                    13, 1  // completely opaque at zoom 13
                                ]
                            }}
                        />
                    </Source>
                )}
            </Map>

            {/* Basemap Switcher - Bottom Right */}
            <div className="absolute bottom-6 right-12 z-10">
                <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-md border border-neutral-200 dark:border-neutral-700 p-1 flex gap-1">
                    <button
                        onClick={() => setBasemap('road')}
                        className={`px-3 py-1 text-xs font-medium rounded ${basemap === 'road' ? 'bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white' : 'text-neutral-500 hover:text-neutral-700'}`}
                    >
                        Road
                    </button>
                    <button
                        onClick={() => setBasemap('satellite')}
                        className={`px-3 py-1 text-xs font-medium rounded ${basemap === 'satellite' ? 'bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white' : 'text-neutral-500 hover:text-neutral-700'}`}
                    >
                        Satellite
                    </button>
                    <button
                        onClick={() => setBasemap('hybrid')}
                        className={`px-3 py-1 text-xs font-medium rounded ${basemap === 'hybrid' ? 'bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white' : 'text-neutral-500 hover:text-neutral-700'}`}
                    >
                        Hybrid
                    </button>
                </div>
            </div>
            
            {geojsonData.features.length === 0 && (
                <div className="absolute inset-0 bg-background/50 backdrop-blur-sm flex items-center justify-center z-20">
                    <div className="bg-card p-4 rounded-lg shadow-lg border text-center">
                        <p className="text-muted-foreground font-medium">No land parcel data available for this group</p>
                    </div>
                </div>
            )}
        </div>
    );
}
