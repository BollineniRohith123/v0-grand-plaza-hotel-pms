import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, Filter, Eye, Edit, Trash2, ClipboardList } from "lucide-react"

export function RoomListView() {
  const rooms = [
    {
      number: "101",
      type: "Standard",
      status: "available",
      floor: 1,
      guest: null,
      rate: 125,
      housekeeping: "clean",
      lastCleaned: "2024-12-27",
    },
    {
      number: "102",
      type: "Standard",
      status: "occupied",
      floor: 1,
      guest: "John Smith",
      rate: 125,
      housekeeping: "dirty",
      lastCleaned: "2024-12-25",
    },
    {
      number: "103",
      type: "Deluxe",
      status: "reserved",
      floor: 1,
      guest: "Sarah Johnson",
      rate: 175,
      housekeeping: "clean",
      lastCleaned: "2024-12-27",
    },
    {
      number: "201",
      type: "Standard",
      status: "available",
      floor: 2,
      guest: null,
      rate: 125,
      housekeeping: "clean",
      lastCleaned: "2024-12-27",
    },
    {
      number: "202",
      type: "Deluxe",
      status: "occupied",
      floor: 2,
      guest: "Mike Davis",
      rate: 175,
      housekeeping: "dirty",
      lastCleaned: "2024-12-26",
    },
    {
      number: "203",
      type: "Suite",
      status: "reserved",
      floor: 2,
      guest: "Emma Wilson",
      rate: 250,
      housekeeping: "clean",
      lastCleaned: "2024-12-27",
    },
    {
      number: "301",
      type: "Standard",
      status: "available",
      floor: 3,
      guest: null,
      rate: 125,
      housekeeping: "clean",
      lastCleaned: "2024-12-27",
    },
    {
      number: "302",
      type: "Deluxe",
      status: "available",
      floor: 3,
      guest: null,
      rate: 175,
      housekeeping: "clean",
      lastCleaned: "2024-12-27",
    },
    {
      number: "303",
      type: "Suite",
      status: "reserved",
      floor: 3,
      guest: "Tom Brown",
      rate: 250,
      housekeeping: "clean",
      lastCleaned: "2024-12-27",
    },
    {
      number: "401",
      type: "Standard",
      status: "out-of-order",
      floor: 4,
      guest: null,
      rate: 125,
      housekeeping: "maintenance",
      lastCleaned: "2024-12-20",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "available":
        return "secondary"
      case "occupied":
        return "destructive"
      case "reserved":
        return "default"
      case "out-of-order":
        return "outline"
      case "maintenance":
        return "outline"
      default:
        return "outline"
    }
  }

  const getHousekeepingColor = (status: string) => {
    switch (status) {
      case "clean":
        return "secondary"
      case "dirty":
        return "destructive"
      case "maintenance":
        return "outline"
      default:
        return "outline"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Room List View</CardTitle>
        <CardDescription>Detailed tabular view of all rooms with comprehensive information</CardDescription>
      </CardHeader>
      <CardContent>
        {/* Filters */}
        <div className="flex gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search by room number, type, or guest..." className="pl-10" />
          </div>
          <Select>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="available">Available</SelectItem>
              <SelectItem value="occupied">Occupied</SelectItem>
              <SelectItem value="reserved">Reserved</SelectItem>
              <SelectItem value="out-of-order">Out of Order</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Floor" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Floors</SelectItem>
              <SelectItem value="1">Floor 1</SelectItem>
              <SelectItem value="2">Floor 2</SelectItem>
              <SelectItem value="3">Floor 3</SelectItem>
              <SelectItem value="4">Floor 4</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="gap-2 bg-transparent">
            <Filter className="h-4 w-4" />
            More Filters
          </Button>
        </div>

        {/* Table */}
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Room</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Floor</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Guest</TableHead>
                <TableHead>Rate</TableHead>
                <TableHead>Housekeeping</TableHead>
                <TableHead>Last Cleaned</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rooms.map((room) => (
                <TableRow key={room.number}>
                  <TableCell className="font-medium">{room.number}</TableCell>
                  <TableCell>{room.type}</TableCell>
                  <TableCell>{room.floor}</TableCell>
                  <TableCell>
                    <Badge variant={getStatusColor(room.status) as any} className="capitalize">
                      {room.status.replace("-", " ")}
                    </Badge>
                  </TableCell>
                  <TableCell>{room.guest || "-"}</TableCell>
                  <TableCell>${room.rate}/night</TableCell>
                  <TableCell>
                    <Badge variant={getHousekeepingColor(room.housekeeping) as any} className="capitalize">
                      {room.housekeeping}
                    </Badge>
                  </TableCell>
                  <TableCell>{new Date(room.lastCleaned).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Button size="sm" variant="ghost">
                        <Eye className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="ghost">
                        <Edit className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="ghost">
                        <ClipboardList className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="ghost">
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
