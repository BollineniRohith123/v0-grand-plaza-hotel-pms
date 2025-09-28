"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TapeChartView } from "@/components/reservations/tape-chart-view"
import { RoomView } from "@/components/reservations/room-view"
import { QuickView } from "@/components/reservations/quick-view"
import { ListView } from "@/components/reservations/list-view"
import { CalendarView } from "@/components/reservations/calendar-view"
import { NewReservationModal } from "@/components/reservations/new-reservation-modal"
import { CheckInModal } from "@/components/reservations/check-in-modal"
import { CheckOutModal } from "@/components/reservations/check-out-modal"
import { Plus, Calendar, LogIn, LogOut } from "lucide-react"

export default function ReservationsPage() {
  const [newReservationOpen, setNewReservationOpen] = useState(false)
  const [checkInOpen, setCheckInOpen] = useState(false)
  const [checkOutOpen, setCheckOutOpen] = useState(false)

  const quickActions = (
    <div className="flex gap-2">
      <Button onClick={() => setNewReservationOpen(true)} className="gap-2">
        <Plus className="h-4 w-4" />
        New Reservation
      </Button>
      <Button variant="outline" className="gap-2 bg-transparent">
        <Calendar className="h-4 w-4" />
        Quick Book
      </Button>
      <Button variant="outline" onClick={() => setCheckInOpen(true)} className="gap-2 bg-transparent">
        <LogIn className="h-4 w-4" />
        Check In
      </Button>
      <Button variant="outline" onClick={() => setCheckOutOpen(true)} className="gap-2 bg-transparent">
        <LogOut className="h-4 w-4" />
        Check Out
      </Button>
    </div>
  )

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header
          title="Reservation Center"
          subtitle="Manage bookings, check-ins, and room assignments"
          actions={quickActions}
        />

        <main className="flex-1 overflow-auto p-6">
          <Tabs defaultValue="tape-chart" className="space-y-6">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="tape-chart">Tape Chart</TabsTrigger>
              <TabsTrigger value="room-view">Room View</TabsTrigger>
              <TabsTrigger value="quick-view">Quick View</TabsTrigger>
              <TabsTrigger value="list-view">List View</TabsTrigger>
              <TabsTrigger value="calendar-view">Calendar</TabsTrigger>
            </TabsList>

            <TabsContent value="tape-chart">
              <TapeChartView />
            </TabsContent>

            <TabsContent value="room-view">
              <RoomView />
            </TabsContent>

            <TabsContent value="quick-view">
              <QuickView />
            </TabsContent>

            <TabsContent value="list-view">
              <ListView />
            </TabsContent>

            <TabsContent value="calendar-view">
              <CalendarView />
            </TabsContent>
          </Tabs>
        </main>
      </div>

      <NewReservationModal open={newReservationOpen} onOpenChange={setNewReservationOpen} />
      <CheckInModal open={checkInOpen} onOpenChange={setCheckInOpen} />
      <CheckOutModal open={checkOutOpen} onOpenChange={setCheckOutOpen} />
    </div>
  )
}
