"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface RevenueReportProps {
  dateRange: { from: Date; to: Date }
  period: string
}

export function RevenueReport({ dateRange, period }: RevenueReportProps) {
  const revenueData = [
    { month: "Jan", rooms: 45000, food: 12000, spa: 3000, other: 2000 },
    { month: "Feb", rooms: 48000, food: 13500, spa: 3200, other: 2100 },
    { month: "Mar", rooms: 52000, food: 15000, spa: 3800, other: 2300 },
    { month: "Apr", rooms: 49000, food: 14200, spa: 3500, other: 2200 },
    { month: "May", rooms: 55000, food: 16000, spa: 4200, other: 2500 },
    { month: "Jun", rooms: 58000, food: 17500, spa: 4500, other: 2800 },
  ]

  const revenueBreakdown = [
    { category: "Room Revenue", amount: 307000, percentage: 78, color: "bg-blue-500" },
    { category: "Food & Beverage", amount: 88200, percentage: 22, color: "bg-emerald-500" },
    { category: "Spa & Wellness", amount: 22200, percentage: 6, color: "bg-purple-500" },
    { category: "Other Services", amount: 13900, percentage: 4, color: "bg-orange-500" },
  ]

  return (
    <div className="space-y-6">
      {/* Revenue Chart */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Revenue Trend</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {revenueData.map((data, index) => {
              const total = data.rooms + data.food + data.spa + data.other
              return (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">{data.month}</span>
                    <span className="text-white font-semibold">${total.toLocaleString()}</span>
                  </div>
                  <div className="flex h-3 bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className="bg-blue-500"
                      style={{ width: `${(data.rooms / total) * 100}%` }}
                      title={`Rooms: $${data.rooms.toLocaleString()}`}
                    />
                    <div
                      className="bg-emerald-500"
                      style={{ width: `${(data.food / total) * 100}%` }}
                      title={`F&B: $${data.food.toLocaleString()}`}
                    />
                    <div
                      className="bg-purple-500"
                      style={{ width: `${(data.spa / total) * 100}%` }}
                      title={`Spa: $${data.spa.toLocaleString()}`}
                    />
                    <div
                      className="bg-orange-500"
                      style={{ width: `${(data.other / total) * 100}%` }}
                      title={`Other: $${data.other.toLocaleString()}`}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Revenue Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Revenue by Category</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {revenueBreakdown.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">{item.category}</span>
                    <span className="text-white font-semibold">${item.amount.toLocaleString()}</span>
                  </div>
                  <div className="flex h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div className={`${item.color}`} style={{ width: `${item.percentage}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Financial Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-slate-700/50 rounded-lg">
                <span className="text-slate-300">Total Revenue</span>
                <span className="text-white font-semibold">$431,300</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-700/50 rounded-lg">
                <span className="text-slate-300">Average Daily Rate</span>
                <span className="text-white font-semibold">$142.50</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-700/50 rounded-lg">
                <span className="text-slate-300">RevPAR</span>
                <span className="text-white font-semibold">$112.80</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-700/50 rounded-lg">
                <span className="text-slate-300">GOPPAR</span>
                <span className="text-white font-semibold">$89.20</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
