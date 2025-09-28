"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, Bed, Settings, Wrench, Sparkles, CheckCircle } from "lucide-react"

export function StatusBoardView() {
  const [selectedStatus, setSelectedStatus] = useState("all")

  const rooms = [
    { number: "101", type: "Standard", status: "available", floor: 1, guest: null, housekeeping: "clean" },
    { number: "102", type: "Standard", status: "occupied", floor: 1, guest: "John Smith", housekeeping: "dirty" },
    { number: "103", type: "Deluxe", status: "reserved", floor: 1, guest: "Sarah Johnson", housekeeping: "clean" },
    { number: "201", type: "Standard", status: "available", floor: 2, guest: null, housekeeping: "clean" },
    { number: "202", type: "Deluxe", status: "occupied", floor: 2, guest: "Mike Davis", housekeeping: "dirty" },
    { number: "203", type: "Suite", status: "reserved", floor: 2, guest: "Emma Wilson", housekeeping: "clean" },
    { number: "301", type: "Standard", status: "available", floor: 3, guest: null, housekeeping: "clean" },
    { number: "302", type: "Deluxe", status: "available", floor: 3, guest: null, housekeeping: "clean" },
    { number: "303", type: "Suite", status: "reserved", floor: 3, guest: "Tom Brown", housekeeping: "clean" },
    { number: "401", type: "Standard", status: "out-of-order", floor: 4, guest: null, housekeeping: "maintenance" },
  ]

  const statusCategories = [
    { key: "available", label: "Available", icon: Bed, color: "text-green-600", bgColor: "bg-green-500/10" },
    { key: "occupied", label: "Occupied", icon: User, color: "text-red-600", bgColor: "bg-red-500/10" },
    { key: "reserved", label: "Reserved", icon: User, color: "text-blue-600", bgColor: "bg-blue-500/10" },
    { key: "out-of-order", label: "Out of Order", icon: Settings, color: "text-gray-600", bgColor: "bg-gray-500/10" },
    { key: "maintenance", label: "Maintenance", icon: Wrench, color: "text-yellow-600", bgColor: "bg-yellow-500/10" },
  ]

  const housekeepingCategories = [
    { key: "clean", label: "Clean", icon: CheckCircle, color: "text-green-600", bgColor: "bg-green-500/10" },
    { key: "dirty", label: "Dirty", icon: Sparkles, color: "text-red-600", bgColor: "bg-red-500/10" },
    { key: "maintenance", label: "Maintenance", icon: Wrench, color: "text-yellow-600", bgColor: "bg-yellow-500/10" },
  ]

  const getRoomsByStatus = (status: string) => {
    return rooms.filter((room) => room.status === status)
  }

  const getRoomsByHousekeeping = (status: string) => {
    return rooms.filter((room) => room.housekeeping === status)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Status Board</CardTitle>
        <CardDescription>Filterable list of rooms organized by status and housekeeping</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="room-status" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="room-status">Room Status</TabsTrigger>
            <TabsTrigger value="housekeeping">Housekeeping Status</TabsTrigger>
          </TabsList>

          <TabsContent value="room-status" className="space-y-6">
            {statusCategories.map((category) => {
              const categoryRooms = getRoomsByStatus(category.key)

              return (
                <Card key={category.key} className={category.bgColor}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <category.icon className={`h-5 w-5 ${category.color}`} />
                        <CardTitle className="text-lg">{category.label}</CardTitle>
                        <Badge variant="secondary">{categoryRooms.length} rooms</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {categoryRooms.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {categoryRooms.map((room) => (
                          <div
                            key={room.number}
                            className="flex items-center justify-between p-3 bg-card rounded-lg border"
                          >
                            <div>
                              <div className="font-medium">Room {room.number}</div>
                              <div className="text-sm text-muted-foreground">
                                {room.type} • Floor {room.floor}
                              </div>
                              {room.guest && <div className="text-sm text-muted-foreground">{room.guest}</div>}
                            </div>
                            <div className="flex gap-1">
                              <Button size="sm" variant="outline" className="text-xs bg-transparent">
                                View
                              </Button>
                              <Button size="sm" variant="outline" className="text-xs bg-transparent">
                                Edit
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8 text-muted-foreground">
                        <category.icon className="h-12 w-12 mx-auto mb-4 opacity-50" />
                        <p>No rooms with {category.label.toLowerCase()} status</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )
            })}
          </TabsContent>

          <TabsContent value="housekeeping" className="space-y-6">
            {housekeepingCategories.map((category) => {
              const categoryRooms = getRoomsByHousekeeping(category.key)

              return (
                <Card key={category.key} className={category.bgColor}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <category.icon className={`h-5 w-5 ${category.color}`} />
                        <CardTitle className="text-lg">{category.label}</CardTitle>
                        <Badge variant="secondary">{categoryRooms.length} rooms</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {categoryRooms.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {categoryRooms.map((room) => (
                          <div
                            key={room.number}
                            className="flex items-center justify-between p-3 bg-card rounded-lg border"
                          >
                            <div>
                              <div className="font-medium">Room {room.number}</div>
                              <div className="text-sm text-muted-foreground">
                                {room.type} • Floor {room.floor}
                              </div>
                              <Badge variant="outline" className="text-xs mt-1 capitalize">
                                {room.status.replace("-", " ")}
                              </Badge>
                            </div>
                            <div className="flex gap-1">
                              <Button size="sm" variant="outline" className="text-xs bg-transparent">
                                Assign
                              </Button>
                              <Button size="sm" variant="outline" className="text-xs bg-transparent">
                                Complete
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8 text-muted-foreground">
                        <category.icon className="h-12 w-12 mx-auto mb-4 opacity-50" />
                        <p>No rooms requiring {category.label.toLowerCase()}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )
            })}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
