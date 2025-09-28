"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface OperationalReportProps {
  dateRange: { from: Date; to: Date }
  period: string
}

export function OperationalReport({ dateRange, period }: OperationalReportProps) {
  const housekeepingMetrics = [
    { metric: "Room Cleaning Time", value: "28 min", target: "30 min", performance: 93 },
    { metric: "Checkout Processing", value: "12 min", target: "15 min", performance: 80 },
    { metric: "Maintenance Response", value: "45 min", target: "60 min", performance: 75 },
    { metric: "Guest Request Response", value: "8 min", target: "10 min", performance: 80 },
  ]

  const staffPerformance = [
    { department: "Front Desk", efficiency: 92, satisfaction: 4.6 },
    { department: "Housekeeping", efficiency: 88, satisfaction: 4.4 },
    { department: "Maintenance", efficiency: 85, satisfaction: 4.2 },
    { department: "Food Service", efficiency: 90, satisfaction: 4.5 },
  ]

  return (
    <div className="space-y-6">
      {/* Operational Metrics */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Operational Efficiency</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {housekeepingMetrics.map((metric, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">{metric.metric}</span>
                  <div className="flex gap-4 text-sm">
                    <span className="text-white">{metric.value}</span>
                    <span className="text-slate-400">Target: {metric.target}</span>
                  </div>
                </div>
                <Progress value={metric.performance} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Staff Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Department Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {staffPerformance.map((dept, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">{dept.department}</span>
                    <div className="flex gap-4 text-sm">
                      <span className="text-blue-400">Eff: {dept.efficiency}%</span>
                      <span className="text-emerald-400">Sat: {dept.satisfaction}/5</span>
                    </div>
                  </div>
                  <Progress value={dept.efficiency} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Key Performance Indicators</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-slate-700/50 rounded-lg">
                <span className="text-slate-300">Staff Utilization</span>
                <span className="text-white font-semibold">87.5%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-700/50 rounded-lg">
                <span className="text-slate-300">Energy Efficiency</span>
                <span className="text-white font-semibold">92.3%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-700/50 rounded-lg">
                <span className="text-slate-300">Maintenance Costs</span>
                <span className="text-white font-semibold">$12,450</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-700/50 rounded-lg">
                <span className="text-slate-300">Guest Complaints</span>
                <span className="text-white font-semibold">0.8%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
