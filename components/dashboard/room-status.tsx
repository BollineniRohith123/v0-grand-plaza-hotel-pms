import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export function RoomStatus() {
  const roomStats = [
    { status: "Available", count: 5, color: "secondary", percentage: 50 },
    { status: "Occupied", count: 2, color: "default", percentage: 20 },
    { status: "Reserved", count: 4, color: "outline", percentage: 40 },
    { status: "Out of Order", count: 1, color: "destructive", percentage: 10 },
    { status: "Maintenance", count: 0, color: "secondary", percentage: 0 },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Room Status</CardTitle>
        <CardDescription>Current room availability overview</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {roomStats.map((stat) => (
          <div key={stat.status} className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">{stat.status}</span>
              <Badge variant={stat.color as any}>{stat.count} rooms</Badge>
            </div>
            <Progress value={stat.percentage} className="h-2" />
          </div>
        ))}

        <div className="pt-4 border-t">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Total Rooms</span>
            <span className="font-medium">10</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Occupancy Rate</span>
            <span className="font-medium text-primary">20%</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
