
"use client";

import { useMemo, useState } from 'react';
import Map, { NavigationControl, Marker, Source, Layer, Popup } from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
import maplibregl from 'maplibre-gl';
import { Layers, Factory, Users } from 'lucide-react';
import { FARMER_GROUPS, MILLS, FarmerGroupFeature, MillFeature } from '@/lib/public-dashboard';

interface MapComponentProps {
    onFeatureSelect: (feature: FarmerGroupFeature | MillFeature | null) => void;
    layers: {
        admin: boolean;
        farmers: boolean;
        mills: boolean;
    };
    basemap: 'road' | 'satellite' | 'hybrid';
    setBasemap: (style: 'road' | 'satellite' | 'hybrid') => void;
}

export default function MapComponent({ onFeatureSelect, layers, basemap, setBasemap }: MapComponentProps) {
    const [viewState, setViewState] = useState({
        longitude: 101.4428,
        latitude: 0.5071,
        zoom: 8
    });

    const [hoverInfo, setHoverInfo] = useState<{ feature: any, x: number, y: number } | null>(null);

    // Dynamic Map Style based on selection
    const mapStyle = useMemo(() => {
        switch (basemap) {
            case 'satellite':
                // Using MapTiler satellite or placeholder
                return "https://api.maptiler.com/maps/satellite/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL";
            case 'hybrid':
                return "https://api.maptiler.com/maps/hybrid/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL";
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


    return (
        <div className="w-full h-full relative">
            <Map
                {...viewState}
                onMove={evt => setViewState(evt.viewState)}
                style={{ width: '100%', height: '100%' }}
                // Note: In real app, use your own map style URL or MapTiler/Mapbox key
                // Ideally use a free open style for prototype like https://demotiles.maplibre.org/style.json
                mapStyle={mapStyle}
                mapLib={maplibregl}
            >
                <NavigationControl position="bottom-right" />

                {/* Markers: Farmer Groups (z-index: 10) */}
                {layers.farmers && FARMER_GROUPS.map((fg) => (
                    <Marker
                        key={fg.id}
                        longitude={fg.coordinates.lng}
                        latitude={fg.coordinates.lat}
                        anchor="bottom"
                        style={{ zIndex: 10 }}
                        onClick={e => {
                            e.originalEvent.stopPropagation();
                            onFeatureSelect(fg);
                        }}
                    >
                        <div className="group relative cursor-pointer hover:z-[60]">
                            <div className="bg-green-600 text-white p-2 rounded-full shadow-lg hover:scale-110 transition-transform">
                                <Users size={10} />
                            </div>
                            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 pointer-events-none">
                                {fg.name}
                            </div>
                        </div>
                    </Marker>
                ))}

                {/* Markers: Mills (z-index: 50 - Always on top) */}
                {layers.mills && MILLS.map((mill) => (
                    <Marker
                        key={mill.id}
                        longitude={mill.coordinates.lng}
                        latitude={mill.coordinates.lat}
                        anchor="bottom"
                        style={{ zIndex: 1 }}
                        onClick={e => {
                            e.originalEvent.stopPropagation();
                            onFeatureSelect(mill);
                        }}
                    >
                        <div className="group relative cursor-pointer hover:z-[60]">
                            <div className="bg-blue-600 text-white p-2 rounded-full shadow-lg hover:scale-110 transition-transform">
                                <Factory size={10} />
                            </div>
                            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 pointer-events-none">
                                {mill.name}
                            </div>
                        </div>
                    </Marker>
                ))}

            </Map>

            {/* Basemap Switcher - Bottom Right */}
            <div className="absolute bottom-8 right-12 z-10">
                <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-lg border border-neutral-200 dark:border-neutral-700 p-1 flex gap-1">
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
        </div>
    );
}
