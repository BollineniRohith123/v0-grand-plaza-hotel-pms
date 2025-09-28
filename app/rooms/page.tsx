"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RoomOverview } from "@/components/rooms/room-overview"
import { RoomGridView } from "@/components/rooms/room-grid-view"
import { RoomListView } from "@/components/rooms/room-list-view"
import { FloorPlanView } from "@/components/rooms/floor-plan-view"
import { StatusBoardView } from "@/components/rooms/status-board-view"
import { AddRoomModal } from "@/components/rooms/add-room-modal"
import { AddRoomTypeModal } from "@/components/rooms/add-room-type-modal"
import { HousekeepingModal } from "@/components/rooms/housekeeping-modal"
import { Plus, Home, ClipboardList } from "lucide-react"

export default function RoomsPage() {
  const [addRoomOpen, setAddRoomOpen] = useState(false)
  const [addRoomTypeOpen, setAddRoomTypeOpen] = useState(false)
  const [housekeepingOpen, setHousekeepingOpen] = useState(false)

  const quickActions = (
    <div className="flex gap-2">
      <Button onClick={() => setAddRoomOpen(true)} className="gap-2">
        <Plus className="h-4 w-4" />
        Add Room
      </Button>
      <Button variant="outline" onClick={() => setAddRoomTypeOpen(true)} className="gap-2 bg-transparent">
        <Home className="h-4 w-4" />
        Add Room Type
      </Button>
      <Button variant="outline" onClick={() => setHousekeepingOpen(true)} className="gap-2 bg-transparent">
        <ClipboardList className="h-4 w-4" />
        Housekeeping
      </Button>
    </div>
  )

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header
          title="Room Management"
          subtitle="Manage room inventory, status, and housekeeping operations"
          actions={quickActions}
        />

        <main className="flex-1 overflow-auto p-6 space-y-6">
          <RoomOverview />

          <Tabs defaultValue="grid-view" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="grid-view">Grid View</TabsTrigger>
              <TabsTrigger value="list-view">List View</TabsTrigger>
              <TabsTrigger value="floor-plan">Floor Plan</TabsTrigger>
              <TabsTrigger value="status-board">Status Board</TabsTrigger>
            </TabsList>

            <TabsContent value="grid-view">
              <RoomGridView />
            </TabsContent>

            <TabsContent value="list-view">
              <RoomListView />
            </TabsContent>

            <TabsContent value="floor-plan">
              <FloorPlanView />
            </TabsContent>

            <TabsContent value="status-board">
              <StatusBoardView />
            </TabsContent>
          </Tabs>
        </main>
      </div>

      <AddRoomModal open={addRoomOpen} onOpenChange={setAddRoomOpen} />
      <AddRoomTypeModal open={addRoomTypeOpen} onOpenChange={setAddRoomTypeOpen} />
      <HousekeepingModal open={housekeepingOpen} onOpenChange={setHousekeepingOpen} />
    </div>
  )
}
