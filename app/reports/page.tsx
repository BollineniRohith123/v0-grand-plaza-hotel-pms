"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Download, Filter, TrendingUp, DollarSign, Users, Bed } from "lucide-react"
import { format } from "date-fns"
import { OccupancyReport } from "@/components/reports/occupancy-report"
import { RevenueReport } from "@/components/reports/revenue-report"
import { GuestReport } from "@/components/reports/guest-report"
import { OperationalReport } from "@/components/reports/operational-report"

export default function ReportsPage() {
  const [dateRange, setDateRange] = useState<{ from: Date; to: Date }>({
    from: new Date(2024, 0, 1),
    to: new Date(),
  })
  const [reportPeriod, setReportPeriod] = useState("monthly")
  const [activeTab, setActiveTab] = useState("occupancy")

  const reportStats = [
    {
      title: "Average Occupancy",
      value: "78.5%",
      change: "+5.2%",
      icon: Bed,
      color: "text-blue-400",
    },
    {
      title: "Total Revenue",
      value: "$124,580",
      change: "+12.8%",
      icon: DollarSign,
      color: "text-emerald-400",
    },
    {
      title: "Guest Satisfaction",
      value: "4.6/5",
      change: "+0.3",
      icon: Users,
      color: "text-purple-400",
    },
    {
      title: "RevPAR",
      value: "$98.20",
      change: "+8.5%",
      icon: TrendingUp,
      color: "text-orange-400",
    },
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Reports & Analytics</h1>
          <p className="text-slate-400 mt-1">Comprehensive business intelligence and performance metrics</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Date Range and Period Selection */}
      <Card className="bg-slate-800 border-slate-700">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <label className="text-slate-300 text-sm font-medium">Period:</label>
              <Select value={reportPeriod} onValueChange={setReportPeriod}>
                <SelectTrigger className="w-32 bg-slate-700 border-slate-600 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-slate-700 border-slate-600">
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                  <SelectItem value="quarterly">Quarterly</SelectItem>
                  <SelectItem value="yearly">Yearly</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-2">
              <label className="text-slate-300 text-sm font-medium">Date Range:</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="bg-slate-700 border-slate-600 text-white">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {dateRange.from && dateRange.to
                      ? `${format(dateRange.from, "MMM dd")} - ${format(dateRange.to, "MMM dd, yyyy")}`
                      : "Select date range"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-slate-800 border-slate-700" align="start">
                  <Calendar
                    mode="range"
                    selected={{ from: dateRange.from, to: dateRange.to }}
                    onSelect={(range) => range && setDateRange(range)}
                    numberOfMonths={2}
                    className="text-white"
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reportStats.map((stat, index) => (
          <Card key={index} className="bg-slate-800 border-slate-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm font-medium">{stat.title}</p>
                  <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
                  <p className="text-emerald-400 text-sm mt-1">{stat.change} from last period</p>
                </div>
                <div className={`p-3 bg-slate-700/50 rounded-lg`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Report Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="bg-slate-800 border-slate-700">
          <TabsTrigger value="occupancy">Occupancy</TabsTrigger>
          <TabsTrigger value="revenue">Revenue</TabsTrigger>
          <TabsTrigger value="guest">Guest Analytics</TabsTrigger>
          <TabsTrigger value="operational">Operational</TabsTrigger>
        </TabsList>

        <TabsContent value="occupancy" className="space-y-6">
          <OccupancyReport dateRange={dateRange} period={reportPeriod} />
        </TabsContent>

        <TabsContent value="revenue" className="space-y-6">
          <RevenueReport dateRange={dateRange} period={reportPeriod} />
        </TabsContent>

        <TabsContent value="guest" className="space-y-6">
          <GuestReport dateRange={dateRange} period={reportPeriod} />
        </TabsContent>

        <TabsContent value="operational" className="space-y-6">
          <OperationalReport dateRange={dateRange} period={reportPeriod} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
