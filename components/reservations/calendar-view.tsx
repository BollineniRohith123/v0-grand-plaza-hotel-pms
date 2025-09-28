"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function CalendarView() {
  const [currentDate, setCurrentDate] = useState(new Date())

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const navigateMonth = (direction: "prev" | "next") => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev)
      if (direction === "prev") {
        newDate.setMonth(prev.getMonth() - 1)
      } else {
        newDate.setMonth(prev.getMonth() + 1)
      }
      return newDate
    })
  }

  const daysInMonth = getDaysInMonth(currentDate)
  const firstDay = getFirstDayOfMonth(currentDate)
  const monthName = currentDate.toLocaleDateString("en-US", { month: "long", year: "numeric" })

  // Mock reservations data
  const reservations: Record<string, Array<{ guest: string; room: string; type: "checkin" | "checkout" | "stay" }>> = {
    "25": [{ guest: "John Smith", room: "102", type: "checkin" }],
    "26": [{ guest: "Mike Davis", room: "202", type: "checkin" }],
    "28": [{ guest: "John Smith", room: "102", type: "checkout" }],
    "29": [{ guest: "Sarah Johnson", room: "103", type: "checkin" }],
    "30": [{ guest: "Mike Davis", room: "202", type: "checkout" }],
    "31": [{ guest: "Emma Wilson", room: "203", type: "checkin" }],
  }

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)
  const emptyDays = Array.from({ length: firstDay }, (_, i) => i)

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Calendar View</CardTitle>
            <CardDescription>Interactive calendar showing bookings by date</CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={() => navigateMonth("prev")}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="text-lg font-semibold min-w-[200px] text-center">{monthName}</div>
            <Button variant="outline" size="sm" onClick={() => navigateMonth("next")}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-7 gap-1 mb-4">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="p-2 text-center text-sm font-medium text-muted-foreground">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {emptyDays.map((_, i) => (
            <div key={`empty-${i}`} className="h-24 p-1"></div>
          ))}

          {days.map((day) => {
            const dayReservations = reservations[day.toString()] || []
            const isToday =
              new Date().getDate() === day &&
              new Date().getMonth() === currentDate.getMonth() &&
              new Date().getFullYear() === currentDate.getFullYear()

            return (
              <div
                key={day}
                className={`h-24 p-1 border border-border rounded cursor-pointer hover:bg-muted/50 ${
                  isToday ? "bg-primary/10 border-primary" : ""
                }`}
              >
                <div className={`text-sm font-medium mb-1 ${isToday ? "text-primary" : ""}`}>{day}</div>
                <div className="space-y-1">
                  {dayReservations.slice(0, 2).map((reservation, i) => (
                    <div key={i} className="text-xs">
                      <Badge
                        variant={
                          reservation.type === "checkin"
                            ? "default"
                            : reservation.type === "checkout"
                              ? "secondary"
                              : "outline"
                        }
                        className="text-xs px-1 py-0"
                      >
                        {reservation.type === "checkin" ? "In" : "Out"} {reservation.room}
                      </Badge>
                    </div>
                  ))}
                  {dayReservations.length > 2 && (
                    <div className="text-xs text-muted-foreground">+{dayReservations.length - 2} more</div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Legend */}
        <div className="flex gap-4 mt-4 text-xs">
          <div className="flex items-center gap-1">
            <Badge variant="default" className="text-xs">
              In
            </Badge>
            <span>Check-in</span>
          </div>
          <div className="flex items-center gap-1">
            <Badge variant="secondary" className="text-xs">
              Out
            </Badge>
            <span>Check-out</span>
          </div>
          <div className="flex items-center gap-1">
            <Badge variant="outline" className="text-xs">
              Stay
            </Badge>
            <span>Ongoing stay</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
