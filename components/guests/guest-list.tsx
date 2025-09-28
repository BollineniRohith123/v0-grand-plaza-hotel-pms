"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Mail, Phone, MapPin, Star, MoreHorizontal } from "lucide-react"

interface Guest {
  id: string
  name: string
  email: string
  phone: string
  room?: string
  status: "checked-in" | "checked-out" | "reserved" | "no-show"
  vip: boolean
  visits: number
  lastStay: string
  preferences: string[]
  totalSpent: number
}

interface GuestListProps {
  searchTerm: string
  filter?: string
  onSelectGuest: (guest: Guest) => void
  selectedGuest: Guest | null
}

export function GuestList({ searchTerm, filter, onSelectGuest, selectedGuest }: GuestListProps) {
  const [guests] = useState<Guest[]>([
    {
      id: "1",
      name: "John Smith",
      email: "john.smith@email.com",
      phone: "+1 (555) 123-4567",
      room: "205",
      status: "checked-in",
      vip: true,
      visits: 8,
      lastStay: "2024-01-15",
      preferences: ["Non-smoking", "High floor", "Late checkout"],
      totalSpent: 12450,
    },
    {
      id: "2",
      name: "Sarah Johnson",
      email: "sarah.j@email.com",
      phone: "+1 (555) 987-6543",
      room: "312",
      status: "checked-in",
      vip: false,
      visits: 3,
      lastStay: "2024-01-14",
      preferences: ["Quiet room", "Extra pillows"],
      totalSpent: 3200,
    },
    {
      id: "3",
      name: "Michael Brown",
      email: "mbrown@email.com",
      phone: "+1 (555) 456-7890",
      status: "reserved",
      vip: true,
      visits: 12,
      lastStay: "2023-12-20",
      preferences: ["Suite preferred", "Airport pickup", "Champagne"],
      totalSpent: 28900,
    },
    {
      id: "4",
      name: "Emily Davis",
      email: "emily.davis@email.com",
      phone: "+1 (555) 321-0987",
      status: "checked-out",
      vip: false,
      visits: 1,
      lastStay: "2024-01-10",
      preferences: ["Pet-friendly", "Ground floor"],
      totalSpent: 890,
    },
  ])

  const filteredGuests = guests.filter((guest) => {
    const matchesSearch =
      guest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      guest.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      guest.phone.includes(searchTerm) ||
      (guest.room && guest.room.includes(searchTerm))

    if (!matchesSearch) return false

    switch (filter) {
      case "current":
        return guest.status === "checked-in"
      case "vip":
        return guest.vip
      case "repeat":
        return guest.visits > 1
      default:
        return true
    }
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "checked-in":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
      case "checked-out":
        return "bg-slate-500/10 text-slate-400 border-slate-500/20"
      case "reserved":
        return "bg-blue-500/10 text-blue-400 border-blue-500/20"
      case "no-show":
        return "bg-red-500/10 text-red-400 border-red-500/20"
      default:
        return "bg-slate-500/10 text-slate-400 border-slate-500/20"
    }
  }

  return (
    <Card className="bg-slate-800 border-slate-700">
      <CardContent className="p-0">
        <div className="space-y-0">
          {filteredGuests.map((guest) => (
            <div
              key={guest.id}
              className={`p-4 border-b border-slate-700 last:border-b-0 cursor-pointer transition-colors hover:bg-slate-700/50 ${
                selectedGuest?.id === guest.id ? "bg-slate-700/50" : ""
              }`}
              onClick={() => onSelectGuest(guest)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="bg-blue-500/10 text-blue-400">
                      {guest.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-white">{guest.name}</h3>
                      {guest.vip && <Star className="w-4 h-4 text-yellow-400 fill-current" />}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-slate-400 mt-1">
                      <span className="flex items-center gap-1">
                        <Mail className="w-3 h-3" />
                        {guest.email}
                      </span>
                      <span className="flex items-center gap-1">
                        <Phone className="w-3 h-3" />
                        {guest.phone}
                      </span>
                      {guest.room && (
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          Room {guest.room}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <Badge className={getStatusColor(guest.status)}>{guest.status.replace("-", " ")}</Badge>
                    <p className="text-xs text-slate-400 mt-1">
                      {guest.visits} visit{guest.visits !== 1 ? "s" : ""}
                    </p>
                  </div>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
