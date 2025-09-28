"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp } from "lucide-react"

// Mock data for revenue chart
const revenueData = [
  { date: "2024-01-01", revenue: 1200 },
  { date: "2024-01-02", revenue: 1800 },
  { date: "2024-01-03", revenue: 1500 },
  { date: "2024-01-04", revenue: 2200 },
  { date: "2024-01-05", revenue: 1900 },
  { date: "2024-01-06", revenue: 2500 },
  { date: "2024-01-07", revenue: 2100 },
]

export function RevenueChart() {
  return (
    <Card className="lg:col-span-2">
      <CardHeader>
        <CardTitle>Revenue Overview</CardTitle>
        <CardDescription>Daily revenue trends for the past 30 days</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-64 relative">
          {/* Simple SVG chart representation */}
          <svg className="w-full h-full" viewBox="0 0 400 200">
            <defs>
              <linearGradient id="revenueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.05" />
              </linearGradient>
            </defs>

            {/* Grid lines */}
            <g stroke="hsl(var(--border))" strokeWidth="1" opacity="0.3">
              <line x1="0" y1="40" x2="400" y2="40" />
              <line x1="0" y1="80" x2="400" y2="80" />
              <line x1="0" y1="120" x2="400" y2="120" />
              <line x1="0" y1="160" x2="400" y2="160" />
            </g>

            {/* Revenue line */}
            <path
              d="M 0 120 L 60 80 L 120 100 L 180 60 L 240 70 L 300 40 L 360 50"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              fill="none"
            />

            {/* Area under curve */}
            <path
              d="M 0 120 L 60 80 L 120 100 L 180 60 L 240 70 L 300 40 L 360 50 L 360 200 L 0 200 Z"
              fill="url(#revenueGradient)"
            />

            {/* Data points */}
            {[0, 60, 120, 180, 240, 300, 360].map((x, i) => {
              const y = [120, 80, 100, 60, 70, 40, 50][i]
              return (
                <circle
                  key={i}
                  cx={x}
                  cy={y}
                  r="3"
                  fill="hsl(var(--primary))"
                  className="hover:r-4 transition-all cursor-pointer"
                />
              )
            })}
          </svg>

          {/* Chart labels */}
          <div className="absolute bottom-2 left-0 right-0 flex justify-between text-xs text-muted-foreground px-4">
            <span>7 days ago</span>
            <span>Today</span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4 pt-4 border-t">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-green-500" />
            <span className="text-sm text-muted-foreground">+12.5% from last week</span>
          </div>
          <div className="text-sm font-medium">Total: $12,200</div>
        </div>
      </CardContent>
    </Card>
  )
}
