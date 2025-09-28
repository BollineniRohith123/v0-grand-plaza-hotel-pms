"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface GuestReportProps {
  dateRange: { from: Date; to: Date }
  period: string
}

export function GuestReport({ dateRange, period }: GuestReportProps) {
  const guestSegments = [
    { segment: "Business", count: 1250, percentage: 45, avgSpend: 180 },
    { segment: "Leisure", count: 980, percentage: 35, avgSpend: 145 },
    { segment: "Group", count: 420, percentage: 15, avgSpend: 120 },
    { segment: "VIP", count: 140, percentage: 5, avgSpend: 350 },
  ]

  const satisfactionData = [
    { category: "Overall Experience", rating: 4.6, responses: 1250 },
    { category: "Room Quality", rating: 4.5, responses: 1180 },
    { category: "Service", rating: 4.7, responses: 1200 },
    { category: "Food & Beverage", rating: 4.3, responses: 890 },
    { category: "Cleanliness", rating: 4.8, responses: 1220 },
  ]

  return (
    <div className="space-y-6">
      {/* Guest Segments */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Guest Segments</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {guestSegments.map((segment, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">{segment.segment}</span>
                  <div className="flex gap-4 text-sm">
                    <span className="text-white">{segment.count} guests</span>
                    <span className="text-emerald-400">Avg: ${segment.avgSpend}</span>
                  </div>
                </div>
                <Progress value={segment.percentage} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Guest Satisfaction */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Guest Satisfaction</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {satisfactionData.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">{item.category}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-white font-semibold">{item.rating}/5</span>
                      <span className="text-slate-400 text-sm">({item.responses})</span>
                    </div>
                  </div>
                  <Progress value={(item.rating / 5) * 100} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Guest Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-slate-700/50 rounded-lg">
                <span className="text-slate-300">Repeat Guest Rate</span>
                <span className="text-white font-semibold">42.3%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-700/50 rounded-lg">
                <span className="text-slate-300">Average Guest Age</span>
                <span className="text-white font-semibold">38 years</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-700/50 rounded-lg">
                <span className="text-slate-300">International Guests</span>
                <span className="text-white font-semibold">28.5%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-700/50 rounded-lg">
                <span className="text-slate-300">Group Bookings</span>
                <span className="text-white font-semibold">15.2%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
