
"use client";

import { useState } from 'react';
import dynamic from 'next/dynamic';
import LeftSidebar from '@/components/dashboard/LeftSidebar';
import RightSidebar from '@/components/dashboard/RightSidebar';
import { FarmerGroupFeature, MillFeature } from '@/lib/public-dashboard';

// Dynamically import MapComponent with no SSR to avoid maplibre "window is not defined" error
const MapComponent = dynamic(() => import('@/components/dashboard/MapComponent'), {
    ssr: false,
    loading: () => <div className="w-full h-full bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center text-neutral-500">Loading Map...</div>
});

export default function DashboardPage() {
    // State for selected layers
    const [layers, setLayers] = useState({
        admin: true,
        farmers: true,
        mills: true
    });

    // State for map basemap
    const [basemap, setBasemap] = useState<'road' | 'satellite' | 'hybrid'>('road');

    // State for selected feature (Farmer Group / Mill) to show in Right Sidebar
    const [selectedFeature, setSelectedFeature] = useState<FarmerGroupFeature | MillFeature | null>(null);

    // State for right sidebar section (summary vs details)
    const [expandedSection, setExpandedSection] = useState<'summary' | 'details'>('summary');

    const handleFeatureSelect = (feature: FarmerGroupFeature | MillFeature | null) => {
        setSelectedFeature(feature);
        if (feature) {
            setExpandedSection('details');
        }
    };

    const toggleLayer = (layer: 'admin' | 'farmers' | 'mills') => {
        setLayers(prev => ({
            ...prev,
            [layer]: !prev[layer]
        }));
    };

    return (
        <div className="relative w-full h-[calc(100vh-64px)] overflow-hidden bg-neutral-100 dark:bg-neutral-900">
            {/* Left Sidebar: Layers */}
            <LeftSidebar layers={layers} toggleLayer={toggleLayer} />

            {/* Map Area */}
            <MapComponent
                onFeatureSelect={handleFeatureSelect}
                layers={layers}
                basemap={basemap}
                setBasemap={setBasemap}
            />

            {/* Right Sidebar: Summary & Details */}
            <RightSidebar
                selectedFeature={selectedFeature}
                expandedSection={expandedSection}
                setExpandedSection={setExpandedSection}
            />
        </div>
    );
}
