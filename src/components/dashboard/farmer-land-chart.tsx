"use client"

import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { chartData } from "@/lib/restrict-data/data-farmer";

export function FarmerLandChart() {
  const formatYAxis = (value: number) => {
    if (value >= 1000) return `${(value / 1000).toFixed(0)}k`;
    return value.toString();
  };

  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Target Achievement Trend</CardTitle>
      </CardHeader>
      <CardContent className="pl-2">
        <ResponsiveContainer width="100%" height={350}>
          <ComposedChart
            data={chartData}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#e5e7eb" vertical={false} strokeDasharray="3 3" />
            <XAxis 
              dataKey="name" 
              tickLine={false} 
              axisLine={false} 
              tickMargin={10} 
              interval={0}
            />
            <YAxis 
              yAxisId="left" 
              orientation="left" 
              label={{ value: 'Total Farmer', angle: -90, position: 'insideLeft' }} 
              tickFormatter={formatYAxis}
              axisLine={false}
              tickLine={false}
            />
            <YAxis 
              yAxisId="right" 
              orientation="right" 
              label={{ value: 'Total Ha Mapped', angle: 90, position: 'insideRight' }} 
              tickFormatter={formatYAxis}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip 
              cursor={{ fill: 'transparent' }}
              content={({ active, payload, label }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-white dark:bg-neutral-950 p-3 border border-border rounded-lg shadow-md">
                      <p className="font-semibold text-foreground mb-2">{label}</p>
                      <div className="space-y-1">
                        {payload.map((entry: any, index: number) => (
                          <div key={index} className="flex items-center gap-2 text-sm">
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }} />
                            <span className="text-muted-foreground">{entry.name}:</span>
                            <span className="font-medium text-foreground">{entry.value.toLocaleString()}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Legend wrapperStyle={{ paddingTop: '20px' }} />
            <Bar yAxisId="left" dataKey="farmer_ul" barSize={20} fill="#3b82f6" radius={[4, 4, 0, 0]} name="Farmer (By UL)" />
            <Bar yAxisId="left" dataKey="farmer_wri" barSize={20} fill="#10b981" radius={[4, 4, 0, 0]} name="Farmer (Verified WRI)" />
            <Line yAxisId="right" type="monotone" dataKey="mapped_ul" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} name="Ha Mapped (By UL)" />
            <Line yAxisId="right" type="monotone" dataKey="mapped_wri" stroke="#10b981" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} name="Ha Mapped (Verified WRI)" />
          </ComposedChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
