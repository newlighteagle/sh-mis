"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { dashboardThemes } from "@/lib/restrict-data/dummy-dashboard"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"
import { ArrowUp, ArrowDown, Minus } from "lucide-react"

export function DashboardGenericView({ slug }: { slug: string }) {
  // Safe fallback to 'generic' if slug doesn't exist in dashboardThemes
  const themeKey = (slug in dashboardThemes) ? slug as keyof typeof dashboardThemes : 'generic';
  const data = dashboardThemes[themeKey];

  return (
    <div className="space-y-6">
      {/* Scorecards */}
      <div className="grid gap-4 md:grid-cols-3">
        {data.scorecards.map((item, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {item.label}
              </CardTitle>
              {item.trend === 'up' ? <ArrowUp className="h-4 w-4 text-green-500" /> :
               item.trend === 'down' ? <ArrowDown className="h-4 w-4 text-red-500" /> :
               <Minus className="h-4 w-4 text-gray-500" />}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{item.value}</div>
              <p className="text-xs text-muted-foreground">
                {item.change} from last period
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Chart */}
      <Card className="col-span-4">
        <CardHeader>
          <CardTitle>{data.chart.title}</CardTitle>
        </CardHeader>
        <CardContent className="pl-2">
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={data.chart.data}>
              <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
              <Tooltip cursor={{ fill: 'transparent' }} />
              <Bar dataKey="value" fill="#adfa1d" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}
