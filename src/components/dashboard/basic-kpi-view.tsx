"use client"

import * as React from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card } from "@/components/ui/card"
import { Map, ShieldCheck, Users, UserCheck, Leaf, MessagesSquare, HeartPulse, Banknote, Building, Award } from 'lucide-react'
import { kpiData, trainedFarmerData, kpiDataByDistrict, trainedFarmerDataByDistrict } from "@/lib/restrict-data/data-farmer"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { FarmerLandChart } from "@/components/dashboard/farmer-land-chart"

export function BasicKpiView({ breadcrumb }: { breadcrumb?: React.ReactNode }) {
  const [district, setDistrict] = React.useState("all")

  const currentKpiData = kpiDataByDistrict[district] || kpiDataByDistrict['all'];
  const currentTrainedData = trainedFarmerDataByDistrict[district] || trainedFarmerDataByDistrict['all'];

  // Icon mapping
  const iconMap: any = {
    Map: Map,
    ShieldCheck: ShieldCheck,
    Users: Users,
    UserCheck: UserCheck,
    Leaf: Leaf,
    MessagesSquare: MessagesSquare,
    HeartPulse: HeartPulse,
    Banknote: Banknote,
    Building: Building,
    Award: Award
  };

  const renderKpiGrid = (data: typeof kpiData, title: string, id: string) => (
    <AccordionItem value={id} className="border-none">
      <AccordionTrigger className="hover:no-underline py-2">
        <h2 className="text-xl font-bold tracking-tight text-emerald-950 dark:text-emerald-50">{title}</h2>
      </AccordionTrigger>
      <AccordionContent className="pt-4 space-y-6">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {data.map((item) => {
              const IconComponent = iconMap[item.icon] || Users;
              return (
              <Card key={item.id} className="overflow-hidden">
                <div className="flex items-center p-6 gap-4">
                    <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
                      <IconComponent className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div className="space-y-1 min-w-0">
                      <p className="text-sm font-medium text-muted-foreground leading-none truncate" title={item.label}>
                        {item.label}
                      </p>
                        <h3 className="text-2xl font-bold tracking-tight">
                          {typeof item.value === 'number' ? item.value.toLocaleString() : item.value}
                        </h3>
                    </div>
                </div>
              </Card>
            );
            })}
        </div>
        {id === "item-1" && <FarmerLandChart />}
      </AccordionContent>
    </AccordionItem>
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
         <div className="flex-1">
            {breadcrumb}
         </div>
         {/* Filter */}
         <div className="w-[200px]">
            <Select value={district} onValueChange={setDistrict}>
              <SelectTrigger>
                <SelectValue placeholder="Select District" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All District</SelectItem>
                <SelectItem value="kampar">Kampar</SelectItem>
                <SelectItem value="rokan-hulu">Rokan Hulu</SelectItem>
                <SelectItem value="siak">Siak</SelectItem>
                <SelectItem value="pelalawan">Pelalawan</SelectItem>
              </SelectContent>
            </Select>
         </div>
      </div>

      <div className="space-y-8">
        <Accordion type="multiple" defaultValue={["item-1", "item-2"]} className="space-y-8">
            {/* Section 1 */}
            {renderKpiGrid(currentKpiData, "Farmer, Land and Groups", "item-1")}
            
            {/* Section 2 */}
            {renderKpiGrid(currentTrainedData, "Trained Farmer", "item-2")}
        </Accordion>
      </div>
    </div>
  )
}
