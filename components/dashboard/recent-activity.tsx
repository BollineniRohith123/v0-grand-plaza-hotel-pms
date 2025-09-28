import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User } from "lucide-react"

interface ActivityItem {
  id: string
  type: "checkin" | "checkout" | "reservation" | "cancellation"
  guest: string
  room?: string
  time: string
  status: "completed" | "pending" | "cancelled"
}

const mockActivities: ActivityItem[] = [
  {
    id: "1",
    type: "reservation",
    guest: "John Smith",
    room: "101",
    time: "2 hours ago",
    status: "completed",
  },
  {
    id: "2",
    type: "checkin",
    guest: "Sarah Johnson",
    room: "205",
    time: "4 hours ago",
    status: "completed",
  },
  {
    id: "3",
    type: "checkout",
    guest: "Mike Davis",
    room: "103",
    time: "6 hours ago",
    status: "completed",
  },
  {
    id: "4",
    type: "cancellation",
    guest: "Emma Wilson",
    room: "301",
    time: "1 day ago",
    status: "cancelled",
  },
]

function getActivityIcon(type: ActivityItem["type"]) {
  switch (type) {
    case "checkin":
      return <User className="h-4 w-4 text-green-500" />
    case "checkout":
      return <User className="h-4 w-4 text-blue-500" />
    case "reservation":
      return <Calendar className="h-4 w-4 text-primary" />
    case "cancellation":
      return <Calendar className="h-4 w-4 text-red-500" />
  }
}

function getActivityText(activity: ActivityItem) {
  switch (activity.type) {
    case "checkin":
      return `checked into room ${activity.room}`
    case "checkout":
      return `checked out of room ${activity.room}`
    case "reservation":
      return `made a reservation for room ${activity.room}`
    case "cancellation":
      return `cancelled reservation for room ${activity.room}`
  }
}

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest reservations and check-ins</CardDescription>
      </CardHeader>
      <CardContent>
        {mockActivities.length > 0 ? (
          <div className="space-y-4">
            {mockActivities.map((activity) => (
              <div key={activity.id} className="flex items-center gap-3 p-3 rounded-lg border">
                <div className="flex-shrink-0">{getActivityIcon(activity.type)}</div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-sm">{activity.guest}</span>
                    <Badge variant={activity.status === "completed" ? "secondary" : "destructive"} className="text-xs">
                      {activity.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{getActivityText(activity)}</p>
                </div>

                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  {activity.time}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-muted-foreground">
            <Calendar className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>No recent activity</p>
            <p className="text-sm">New reservations and check-ins will appear here</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
