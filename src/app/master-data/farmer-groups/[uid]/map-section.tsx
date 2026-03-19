"use client";

import { useState } from "react";
import FarmerGroupMap from "./farmer-group-map";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function MapSection({ landParcels }: { landParcels: any[] }) {
    const [selectedFeature, setSelectedFeature] = useState<any | null>(null);

    return (
        <div className="p-4 pt-0 grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="w-full">
                <FarmerGroupMap 
                    landParcels={landParcels} 
                    selectedFeatureId={selectedFeature?.id}
                    onFeatureClick={(feature) => setSelectedFeature(feature)}
                />
            </div>
            <div className="w-full">
                {selectedFeature ? (
                    <Card className="h-full border">
                        <CardHeader className="bg-muted/30 border-b">
                            <CardTitle>Parcel Information</CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 space-y-4">
                            <div className="grid grid-cols-3 gap-y-4 border-b pb-4">
                                <div className="col-span-1 text-muted-foreground font-medium">Parcel ID</div>
                                <div className="col-span-2 font-mono">{selectedFeature.parcelId || '-'}</div>
                                
                                <div className="col-span-1 text-muted-foreground font-medium">Size (Ha)</div>
                                <div className="col-span-2">{selectedFeature.sizeHa?.toFixed(2) || '0.00'} Ha</div>

                                <div className="col-span-1 text-muted-foreground font-medium">Farmer ID</div>
                                <div className="col-span-2 text-sm max-w-full overflow-hidden text-ellipsis whitespace-nowrap" title={selectedFeature.displayFarmerID || selectedFeature.fid}>
                                    {selectedFeature.displayFarmerID || selectedFeature.fid || '-'}
                                </div>

                                <div className="col-span-1 text-muted-foreground font-medium">Farmer Name</div>
                                <div className="col-span-2 font-medium">{selectedFeature.farmerName || '-'}</div>

                                <div className="col-span-1 text-muted-foreground font-medium">Status</div>
                                <div className="col-span-2">
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                        selectedFeature.farmerStatus === 'Registered' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400' :
                                        selectedFeature.farmerStatus === 'Reserved' ? 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400' :
                                        'bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-400'
                                    }`}>
                                        {selectedFeature.farmerStatus || 'Pending'}
                                    </span>
                                </div>
                            </div>
                            
                            <div className="pt-2 text-center text-sm text-primary hover:underline cursor-pointer">
                                View full farmer profile &rarr;
                            </div>
                        </CardContent>
                    </Card>
                ) : (
                    <div className="w-full h-full min-h-[500px] border rounded-md p-4 bg-muted/10 flex flex-col items-center justify-center text-center space-y-3">
                        <div className="bg-primary/10 p-3 rounded-full text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                        </div>
                        <p className="text-muted-foreground font-medium">Click on a parcel polygon on the map<br/>to view its details here</p>
                    </div>
                )}
            </div>
        </div>
    );
}
