"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Bed, User, Settings, Wrench, Eye, Edit, ClipboardList } from "lucide-react"

export function RoomGridView() {
  const [filterStatus, setFilterStatus] = useState("all")
  const [filterFloor, setFilterFloor] = useState("all")

  const rooms = [
    { number: "101", type: "Standard", status: "available", floor: 1, guest: null, rate: 125, housekeeping: "clean" },
    {
      number: "102",
      type: "Standard",
      status: "occupied",
      floor: 1,
      guest: "John Smith",
      rate: 125,
      housekeeping: "dirty",
    },
    {
      number: "103",
      type: "Deluxe",
      status: "reserved",
      floor: 1,
      guest: "Sarah Johnson",
      rate: 175,
      housekeeping: "clean",
    },
    { number: "201", type: "Standard", status: "available", floor: 2, guest: null, rate: 125, housekeeping: "clean" },
    {
      number: "202",
      type: "Deluxe",
      status: "occupied",
      floor: 2,
      guest: "Mike Davis",
      rate: 175,
      housekeeping: "dirty",
    },
    {
      number: "203",
      type: "Suite",
      status: "reserved",
      floor: 2,
      guest: "Emma Wilson",
      rate: 250,
      housekeeping: "clean",
    },
    { number: "301", type: "Standard", status: "available", floor: 3, guest: null, rate: 125, housekeeping: "clean" },
    { number: "302", type: "Deluxe", status: "available", floor: 3, guest: null, rate: 175, housekeeping: "clean" },
    {
      number: "303",
      type: "Suite",
      status: "reserved",
      floor: 3,
      guest: "Tom Brown",
      rate: 250,
      housekeeping: "clean",
    },
    {
      number: "401",
      type: "Standard",
      status: "out-of-order",
      floor: 4,
      guest: null,
      rate: 125,
      housekeeping: "maintenance",
    },
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
      case "maintenance":
        return "bg-yellow-500/10 border-yellow-500 text-yellow-700"
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
      case "maintenance":
        return <Wrench className="h-4 w-4 text-yellow-600" />
      default:
        return <Bed className="h-4 w-4" />
    }
  }

  const getHousekeepingBadge = (status: string) => {
    switch (status) {
      case "clean":
        return (
          <Badge variant="secondary" className="text-xs">
            Clean
          </Badge>
        )
      case "dirty":
        return (
          <Badge variant="destructive" className="text-xs">
            Dirty
          </Badge>
        )
      case "maintenance":
        return (
          <Badge variant="outline" className="text-xs">
            Maintenance
          </Badge>
        )
      default:
        return (
          <Badge variant="outline" className="text-xs">
            Unknown
          </Badge>
        )
    }
  }

  const filteredRooms = rooms.filter((room) => {
    if (filterStatus !== "all" && room.status !== filterStatus) return false
    if (filterFloor !== "all" && room.floor.toString() !== filterFloor) return false
    return true
  })

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Room Grid View</CardTitle>
            <CardDescription>Visual overview of all rooms with status indicators</CardDescription>
          </div>
          <div className="flex gap-2">
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="available">Available</SelectItem>
                <SelectItem value="occupied">Occupied</SelectItem>
                <SelectItem value="reserved">Reserved</SelectItem>
                <SelectItem value="out-of-order">Out of Order</SelectItem>
                <SelectItem value="maintenance">Maintenance</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterFloor} onValueChange={setFilterFloor}>
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
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredRooms.map((room) => (
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
              <CardContent className="pt-0 space-y-3">
                <div className="flex items-center justify-between">
                  <Badge variant={room.status === "available" ? "secondary" : "default"} className="capitalize">
                    {room.status.replace("-", " ")}
                  </Badge>
                  {getHousekeepingBadge(room.housekeeping)}
                </div>

                {room.guest && (
                  <div className="text-sm text-muted-foreground">
                    <User className="h-3 w-3 inline mr-1" />
                    {room.guest}
                  </div>
                )}

                <div className="text-sm font-medium">${room.rate}/night</div>

                <div className="flex gap-1">
                  <Button size="sm" variant="ghost" className="flex-1 text-xs">
                    <Eye className="h-3 w-3 mr-1" />
                    View
                  </Button>
                  <Button size="sm" variant="ghost" className="flex-1 text-xs">
                    <Edit className="h-3 w-3 mr-1" />
                    Edit
                  </Button>
                  <Button size="sm" variant="ghost" className="text-xs">
                    <ClipboardList className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
