"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface OccupancyReportProps {
  dateRange: { from: Date; to: Date }
  period: string
}

export function OccupancyReport({ dateRange, period }: OccupancyReportProps) {
  const occupancyData = [
    { month: "Jan", occupancy: 72, adr: 125, revpar: 90 },
    { month: "Feb", occupancy: 78, adr: 130, revpar: 101 },
    { month: "Mar", occupancy: 85, adr: 135, revpar: 115 },
    { month: "Apr", occupancy: 82, adr: 140, revpar: 115 },
    { month: "May", occupancy: 88, adr: 145, revpar: 128 },
    { month: "Jun", occupancy: 92, adr: 150, revpar: 138 },
  ]

  const roomTypeOccupancy = [
    { type: "Standard", rooms: 50, occupied: 42, rate: 84 },
    { type: "Deluxe", rooms: 30, occupied: 24, rate: 80 },
    { type: "Suite", rooms: 15, occupied: 11, rate: 73 },
    { type: "Presidential", rooms: 5, occupied: 3, rate: 60 },
  ]

  return (
    <div className="space-y-6">
      {/* Occupancy Trend Chart */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Occupancy Trend</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {occupancyData.map((data, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">{data.month}</span>
                  <div className="flex gap-6 text-sm">
                    <span className="text-blue-400">Occ: {data.occupancy}%</span>
                    <span className="text-emerald-400">ADR: ${data.adr}</span>
                    <span className="text-purple-400">RevPAR: ${data.revpar}</span>
                  </div>
                </div>
                <Progress value={data.occupancy} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Room Type Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Room Type Occupancy</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {roomTypeOccupancy.map((room, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">{room.type}</span>
                    <span className="text-white">
                      {room.occupied}/{room.rooms} ({room.rate}%)
                    </span>
                  </div>
                  <Progress value={room.rate} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Key Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-slate-700/50 rounded-lg">
                <span className="text-slate-300">Average Length of Stay</span>
                <span className="text-white font-semibold">2.8 nights</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-700/50 rounded-lg">
                <span className="text-slate-300">No-Show Rate</span>
                <span className="text-white font-semibold">3.2%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-700/50 rounded-lg">
                <span className="text-slate-300">Cancellation Rate</span>
                <span className="text-white font-semibold">8.5%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-700/50 rounded-lg">
                <span className="text-slate-300">Walk-in Rate</span>
                <span className="text-white font-semibold">12.3%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
