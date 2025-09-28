import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Bed, User, Settings } from "lucide-react"

export function RoomView() {
  const rooms = [
    { number: "101", type: "Standard", status: "available", floor: 1 },
    { number: "102", type: "Standard", status: "occupied", floor: 1, guest: "John Smith" },
    { number: "103", type: "Deluxe", status: "reserved", floor: 1, guest: "Sarah Johnson" },
    { number: "201", type: "Standard", status: "available", floor: 2 },
    { number: "202", type: "Deluxe", status: "occupied", floor: 2, guest: "Mike Davis" },
    { number: "203", type: "Suite", status: "reserved", floor: 2, guest: "Emma Wilson" },
    { number: "301", type: "Standard", status: "available", floor: 3 },
    { number: "302", type: "Deluxe", status: "available", floor: 3 },
    { number: "303", type: "Suite", status: "reserved", floor: 3, guest: "Tom Brown" },
    { number: "401", type: "Standard", status: "out-of-order", floor: 4 },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "available":
        return "bg-green-500/10 border-green-500 text-green-700"
      case "occupied":
        return "bg-red-500/10 border-red-500 text-red-700"
      case "reserved":
        return "bg-blue-500/10 border-blue-500 text-blue-700"
      case "out-of-order":
        return "bg-gray-500/10 border-gray-500 text-gray-700"
      default:
        return "bg-muted border-border"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "available":
        return <Bed className="h-4 w-4 text-green-600" />
      case "occupied":
        return <User className="h-4 w-4 text-red-600" />
      case "reserved":
        return <User className="h-4 w-4 text-blue-600" />
      case "out-of-order":
        return <Settings className="h-4 w-4 text-gray-600" />
      default:
        return <Bed className="h-4 w-4" />
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Room View</CardTitle>
        <CardDescription>Grid display of all rooms with current status</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {rooms.map((room) => (
            <Card
              key={room.number}
              className={`cursor-pointer transition-all hover:shadow-md ${getStatusColor(room.status)}`}
            >
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Room {room.number}</CardTitle>
                  {getStatusIcon(room.status)}
                </div>
                <CardDescription className="flex items-center justify-between">
                  <span>{room.type}</span>
                  <Badge variant="outline">Floor {room.floor}</Badge>
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-2">
                  <Badge variant={room.status === "available" ? "secondary" : "default"} className="capitalize">
                    {room.status.replace("-", " ")}
                  </Badge>
                  {room.guest && (
                    <div className="text-sm text-muted-foreground">
                      <User className="h-3 w-3 inline mr-1" />
                      {room.guest}
                    </div>
                  )}
                  <div className="flex gap-1 mt-2">
                    <Button size="sm" variant="outline" className="flex-1 text-xs bg-transparent">
                      View
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 text-xs bg-transparent">
                      Edit
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
