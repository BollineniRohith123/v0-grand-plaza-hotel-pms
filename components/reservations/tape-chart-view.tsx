import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function TapeChartView() {
  const rooms = [
    { number: "101", type: "Standard", status: "available" },
    { number: "102", type: "Standard", status: "occupied", guest: "John Smith", checkOut: "Dec 28" },
    { number: "103", type: "Deluxe", status: "reserved", guest: "Sarah Johnson", checkIn: "Dec 29" },
    { number: "201", type: "Standard", status: "available" },
    { number: "202", type: "Deluxe", status: "occupied", guest: "Mike Davis", checkOut: "Dec 30" },
    { number: "203", type: "Suite", status: "reserved", guest: "Emma Wilson", checkIn: "Dec 31" },
    { number: "301", type: "Standard", status: "available" },
    { number: "302", type: "Deluxe", status: "available" },
    { number: "303", type: "Suite", status: "reserved", guest: "Tom Brown", checkIn: "Jan 2" },
    { number: "401", type: "Standard", status: "out-of-order" },
  ]

  const dates = Array.from({ length: 14 }, (_, i) => {
    const date = new Date()
    date.setDate(date.getDate() + i)
    return date
  })

  return (
    <Card>
      <CardHeader>
        <CardTitle>Tape Chart View</CardTitle>
        <CardDescription>
          Visual timeline of room occupancy - Total: 10 rooms | Available: 5 | Occupied: 2 | Reserved: 4
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <div className="min-w-[800px]">
            {/* Header with dates */}
            <div className="grid grid-cols-[120px_repeat(14,1fr)] gap-1 mb-2">
              <div className="font-medium text-sm">Room</div>
              {dates.map((date, i) => (
                <div key={i} className="text-xs text-center p-1">
                  <div>{date.getDate()}</div>
                  <div className="text-muted-foreground">{date.toLocaleDateString("en-US", { weekday: "short" })}</div>
                </div>
              ))}
            </div>

            {/* Room rows */}
            <div className="space-y-1">
              {rooms.map((room) => (
                <div key={room.number} className="grid grid-cols-[120px_repeat(14,1fr)] gap-1">
                  <div className="flex items-center gap-2 p-2 bg-muted rounded text-sm">
                    <span className="font-medium">{room.number}</span>
                    <Badge variant="outline" className="text-xs">
                      {room.type}
                    </Badge>
                  </div>

                  {dates.map((date, i) => {
                    let cellContent = null
                    let cellClass = "h-8 border border-border rounded"

                    if (room.status === "occupied" && i < 3) {
                      cellClass += " bg-red-500/20 border-red-500"
                      if (i === 0) cellContent = <div className="text-xs p-1 truncate">{room.guest}</div>
                    } else if (room.status === "reserved" && i >= 3 && i < 7) {
                      cellClass += " bg-blue-500/20 border-blue-500"
                      if (i === 3) cellContent = <div className="text-xs p-1 truncate">{room.guest}</div>
                    } else if (room.status === "out-of-order") {
                      cellClass += " bg-gray-500/20 border-gray-500"
                      if (i === 0) cellContent = <div className="text-xs p-1">OOO</div>
                    } else {
                      cellClass += " bg-green-500/10 border-green-500/30"
                    }

                    return (
                      <div key={i} className={cellClass}>
                        {cellContent}
                      </div>
                    )
                  })}
                </div>
              ))}
            </div>

            {/* Legend */}
            <div className="flex gap-4 mt-4 text-xs">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-green-500/20 border border-green-500 rounded"></div>
                <span>Available</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-red-500/20 border border-red-500 rounded"></div>
                <span>Occupied</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-blue-500/20 border border-blue-500 rounded"></div>
                <span>Reserved</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-gray-500/20 border border-gray-500 rounded"></div>
                <span>Out of Order</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
