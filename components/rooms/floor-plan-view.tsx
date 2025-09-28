import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function FloorPlanView() {
  const floors = [
    {
      number: 1,
      rooms: [
        { number: "101", status: "available", type: "Standard", position: { x: 20, y: 40 } },
        { number: "102", status: "occupied", type: "Standard", position: { x: 120, y: 40 } },
        { number: "103", status: "reserved", type: "Deluxe", position: { x: 220, y: 40 } },
      ],
    },
    {
      number: 2,
      rooms: [
        { number: "201", status: "available", type: "Standard", position: { x: 20, y: 40 } },
        { number: "202", status: "occupied", type: "Deluxe", position: { x: 120, y: 40 } },
        { number: "203", status: "reserved", type: "Suite", position: { x: 220, y: 40 } },
      ],
    },
    {
      number: 3,
      rooms: [
        { number: "301", status: "available", type: "Standard", position: { x: 20, y: 40 } },
        { number: "302", status: "available", type: "Deluxe", position: { x: 120, y: 40 } },
        { number: "303", status: "reserved", type: "Suite", position: { x: 220, y: 40 } },
      ],
    },
    {
      number: 4,
      rooms: [{ number: "401", status: "out-of-order", type: "Standard", position: { x: 120, y: 40 } }],
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "available":
        return "fill-green-500 stroke-green-600"
      case "occupied":
        return "fill-red-500 stroke-red-600"
      case "reserved":
        return "fill-blue-500 stroke-blue-600"
      case "out-of-order":
        return "fill-gray-500 stroke-gray-600"
      default:
        return "fill-gray-300 stroke-gray-400"
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Floor Plan View</CardTitle>
            <CardDescription>Visual layout of rooms by floor with interactive floor plans</CardDescription>
          </div>
          <Select defaultValue="1">
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Select floor" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Floor 1</SelectItem>
              <SelectItem value="2">Floor 2</SelectItem>
              <SelectItem value="3">Floor 3</SelectItem>
              <SelectItem value="4">Floor 4</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {floors.map((floor) => (
            <div key={floor.number} className="space-y-4">
              <h3 className="text-lg font-semibold">Floor {floor.number}</h3>

              <div className="relative bg-muted/30 rounded-lg p-4" style={{ height: "200px" }}>
                <svg className="w-full h-full" viewBox="0 0 400 120">
                  {/* Floor outline */}
                  <rect
                    x="10"
                    y="10"
                    width="380"
                    height="100"
                    fill="none"
                    stroke="hsl(var(--border))"
                    strokeWidth="2"
                    rx="8"
                  />

                  {/* Hallway */}
                  <rect
                    x="10"
                    y="70"
                    width="380"
                    height="20"
                    fill="hsl(var(--muted))"
                    stroke="hsl(var(--border))"
                    strokeWidth="1"
                  />

                  {/* Rooms */}
                  {floor.rooms.map((room) => (
                    <g key={room.number}>
                      <rect
                        x={room.position.x}
                        y={room.position.y}
                        width="80"
                        height="30"
                        className={`cursor-pointer hover:opacity-80 transition-opacity ${getStatusColor(room.status)}`}
                        strokeWidth="2"
                        rx="4"
                      />
                      <text
                        x={room.position.x + 40}
                        y={room.position.y + 20}
                        textAnchor="middle"
                        className="text-xs font-medium fill-white"
                      >
                        {room.number}
                      </text>
                    </g>
                  ))}

                  {/* Elevator */}
                  <rect
                    x="350"
                    y="20"
                    width="30"
                    height="50"
                    fill="hsl(var(--muted-foreground))"
                    stroke="hsl(var(--border))"
                    strokeWidth="1"
                    rx="4"
                  />
                  <text x="365" y="50" textAnchor="middle" className="text-xs fill-white">
                    E
                  </text>
                </svg>
              </div>

              <div className="flex gap-4 text-sm">
                {floor.rooms.map((room) => (
                  <div key={room.number} className="flex items-center gap-2">
                    <Badge variant={room.status === "available" ? "secondary" : "default"} className="capitalize">
                      {room.status.replace("-", " ")}
                    </Badge>
                    <span>
                      {room.number} - {room.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex gap-6 mt-8 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-500 rounded"></div>
            <span>Available</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-red-500 rounded"></div>
            <span>Occupied</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-blue-500 rounded"></div>
            <span>Reserved</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gray-500 rounded"></div>
            <span>Out of Order</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
