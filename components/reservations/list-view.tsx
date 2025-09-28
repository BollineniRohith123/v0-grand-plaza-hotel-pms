import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, Filter, Eye, Edit, Trash2 } from "lucide-react"

export function ListView() {
  const reservations = [
    {
      id: "RES001",
      guest: "John Smith",
      room: "102",
      checkIn: "2024-12-25",
      checkOut: "2024-12-28",
      adults: 2,
      children: 0,
      amount: "$375.00",
      status: "confirmed",
    },
    {
      id: "RES002",
      guest: "Sarah Johnson",
      room: "103",
      checkIn: "2024-12-29",
      checkOut: "2024-12-31",
      adults: 1,
      children: 1,
      amount: "$250.00",
      status: "confirmed",
    },
    {
      id: "RES003",
      guest: "Mike Davis",
      room: "202",
      checkIn: "2024-12-26",
      checkOut: "2024-12-30",
      adults: 2,
      children: 0,
      amount: "$500.00",
      status: "checked-in",
    },
    {
      id: "RES004",
      guest: "Emma Wilson",
      room: "203",
      checkIn: "2024-12-31",
      checkOut: "2025-01-03",
      adults: 2,
      children: 2,
      amount: "$450.00",
      status: "confirmed",
    },
    {
      id: "RES005",
      guest: "Tom Brown",
      room: "303",
      checkIn: "2025-01-02",
      checkOut: "2025-01-05",
      adults: 1,
      children: 0,
      amount: "$375.00",
      status: "pending",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "default"
      case "checked-in":
        return "secondary"
      case "pending":
        return "outline"
      case "cancelled":
        return "destructive"
      default:
        return "outline"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Reservations List</CardTitle>
        <CardDescription>All reservations with filters and search</CardDescription>
      </CardHeader>
      <CardContent>
        {/* Filters */}
        <div className="flex gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search by guest name or reservation ID..." className="pl-10" />
          </div>
          <Select>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="confirmed">Confirmed</SelectItem>
              <SelectItem value="checked-in">Checked In</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Date Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
              <SelectItem value="custom">Custom Range</SelectItem>
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
                <TableHead>Reservation ID</TableHead>
                <TableHead>Guest</TableHead>
                <TableHead>Room</TableHead>
                <TableHead>Check In</TableHead>
                <TableHead>Check Out</TableHead>
                <TableHead>Guests</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reservations.map((reservation) => (
                <TableRow key={reservation.id}>
                  <TableCell className="font-medium">{reservation.id}</TableCell>
                  <TableCell>{reservation.guest}</TableCell>
                  <TableCell>{reservation.room}</TableCell>
                  <TableCell>{new Date(reservation.checkIn).toLocaleDateString()}</TableCell>
                  <TableCell>{new Date(reservation.checkOut).toLocaleDateString()}</TableCell>
                  <TableCell>
                    {reservation.adults}A{reservation.children > 0 && `, ${reservation.children}C`}
                  </TableCell>
                  <TableCell>{reservation.amount}</TableCell>
                  <TableCell>
                    <Badge variant={getStatusColor(reservation.status) as any} className="capitalize">
                      {reservation.status.replace("-", " ")}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Button size="sm" variant="ghost">
                        <Eye className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="ghost">
                        <Edit className="h-3 w-3" />
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
