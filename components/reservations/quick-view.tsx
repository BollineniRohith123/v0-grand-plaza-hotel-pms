import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Bed, Users, DollarSign, TrendingUp } from "lucide-react"

export function QuickView() {
  return (
    <div className="space-y-6">
      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Occupancy Rate</CardTitle>
            <Bed className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">20%</div>
            <Progress value={20} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Today's Arrivals</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <div className="text-xs text-muted-foreground">guests expected</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Today's Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1,250</div>
            <div className="text-xs text-muted-foreground">from 2 bookings</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$125</div>
            <div className="text-xs text-muted-foreground">per night</div>
          </CardContent>
        </Card>
      </div>

      {/* Room Status Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Room Status Overview</CardTitle>
          <CardDescription>Current status of all rooms</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-green-500/10 rounded-lg border border-green-500/20">
              <div className="text-2xl font-bold text-green-600">5</div>
              <div className="text-sm text-green-600">Available</div>
            </div>
            <div className="text-center p-4 bg-red-500/10 rounded-lg border border-red-500/20">
              <div className="text-2xl font-bold text-red-600">2</div>
              <div className="text-sm text-red-600">Occupied</div>
            </div>
            <div className="text-center p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
              <div className="text-2xl font-bold text-blue-600">4</div>
              <div className="text-sm text-blue-600">Reserved</div>
            </div>
            <div className="text-center p-4 bg-gray-500/10 rounded-lg border border-gray-500/20">
              <div className="text-2xl font-bold text-gray-600">1</div>
              <div className="text-sm text-gray-600">Out of Order</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Arrivals */}
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Arrivals</CardTitle>
          <CardDescription>Guests checking in today</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { name: "Sarah Johnson", room: "103", time: "2:00 PM", status: "confirmed" },
              { name: "Emma Wilson", room: "203", time: "4:30 PM", status: "confirmed" },
              { name: "Tom Brown", room: "303", time: "6:00 PM", status: "pending" },
            ].map((arrival, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div>
                  <div className="font-medium">{arrival.name}</div>
                  <div className="text-sm text-muted-foreground">
                    Room {arrival.room} • {arrival.time}
                  </div>
                </div>
                <Badge variant={arrival.status === "confirmed" ? "default" : "secondary"}>{arrival.status}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
