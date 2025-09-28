import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Bed, Home, Wrench, AlertTriangle, Sparkles, CheckCircle } from "lucide-react"

export function RoomOverview() {
  const stats = [
    { label: "Total Rooms", value: 10, icon: Home, color: "text-blue-600" },
    { label: "Available", value: 5, icon: Bed, color: "text-green-600" },
    { label: "Occupied", value: 2, icon: Bed, color: "text-red-600" },
    { label: "Maintenance", value: 0, icon: Wrench, color: "text-yellow-600" },
    { label: "Out of Order", value: 1, icon: AlertTriangle, color: "text-gray-600" },
    { label: "Dirty", value: 0, icon: Sparkles, color: "text-orange-600" },
    { label: "Clean", value: 0, icon: CheckCircle, color: "text-purple-600" },
  ]

  const occupancyRate = 20.0

  return (
    <Card>
      <CardHeader>
        <CardTitle>Room Status Overview</CardTitle>
        <CardDescription>
          Current room inventory and status distribution - Occupancy Rate: {occupancyRate}%
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-4 bg-muted/50 rounded-lg">
              <stat.icon className={`h-6 w-6 mx-auto mb-2 ${stat.color}`} />
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Occupancy Rate</span>
            <Badge variant="secondary">{occupancyRate}%</Badge>
          </div>
          <Progress value={occupancyRate} className="h-2" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>Available (5)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span>Occupied (2)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span>Reserved (4)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
              <span>Out of Order (1)</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
