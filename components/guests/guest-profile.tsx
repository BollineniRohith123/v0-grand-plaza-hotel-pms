"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Mail, Phone, MapPin, Star, Edit, MessageSquare, FileText } from "lucide-react"

interface Guest {
  id: string
  name: string
  email: string
  phone: string
  room?: string
  status: string
  vip: boolean
  visits: number
  lastStay: string
  preferences: string[]
  totalSpent: number
}

interface GuestProfileProps {
  guest: Guest
}

export function GuestProfile({ guest }: GuestProfileProps) {
  const reservationHistory = [
    { id: "1", dates: "Jan 15-18, 2024", room: "205", amount: "$450", status: "completed" },
    { id: "2", dates: "Dec 20-23, 2023", room: "312", amount: "$380", status: "completed" },
    { id: "3", dates: "Nov 10-12, 2023", room: "205", amount: "$290", status: "completed" },
  ]

  const communications = [
    { id: "1", type: "email", subject: "Welcome back!", date: "Jan 15, 2024", status: "sent" },
    { id: "2", type: "sms", subject: "Check-in reminder", date: "Jan 14, 2024", status: "delivered" },
    { id: "3", type: "email", subject: "Special offer", date: "Dec 1, 2023", status: "opened" },
  ]

  return (
    <Card className="bg-slate-800 border-slate-700">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-white">Guest Profile</CardTitle>
          <Button variant="outline" size="sm">
            <Edit className="w-4 h-4 mr-2" />
            Edit
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Guest Info */}
        <div className="flex items-center space-x-4">
          <Avatar className="w-16 h-16">
            <AvatarFallback className="bg-blue-500/10 text-blue-400 text-lg">
              {guest.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-semibold text-white">{guest.name}</h3>
              {guest.vip && <Star className="w-5 h-5 text-yellow-400 fill-current" />}
            </div>
            <div className="space-y-1 mt-2">
              <p className="text-slate-400 flex items-center gap-2">
                <Mail className="w-4 h-4" />
                {guest.email}
              </p>
              <p className="text-slate-400 flex items-center gap-2">
                <Phone className="w-4 h-4" />
                {guest.phone}
              </p>
              {guest.room && (
                <p className="text-slate-400 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Room {guest.room}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-slate-700/50 p-3 rounded-lg">
            <p className="text-slate-400 text-sm">Total Visits</p>
            <p className="text-white font-semibold">{guest.visits}</p>
          </div>
          <div className="bg-slate-700/50 p-3 rounded-lg">
            <p className="text-slate-400 text-sm">Total Spent</p>
            <p className="text-white font-semibold">${guest.totalSpent.toLocaleString()}</p>
          </div>
        </div>

        {/* Preferences */}
        <div>
          <h4 className="text-white font-medium mb-2">Preferences</h4>
          <div className="flex flex-wrap gap-2">
            {guest.preferences.map((pref, index) => (
              <Badge key={index} variant="secondary" className="bg-slate-700 text-slate-300">
                {pref}
              </Badge>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="history" className="w-full">
          <TabsList className="bg-slate-700 w-full">
            <TabsTrigger value="history" className="flex-1">
              History
            </TabsTrigger>
            <TabsTrigger value="communications" className="flex-1">
              Messages
            </TabsTrigger>
          </TabsList>

          <TabsContent value="history" className="space-y-3 mt-4">
            {reservationHistory.map((reservation) => (
              <div key={reservation.id} className="bg-slate-700/50 p-3 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-white font-medium">{reservation.dates}</p>
                    <p className="text-slate-400 text-sm">Room {reservation.room}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-medium">{reservation.amount}</p>
                    <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-400">
                      {reservation.status}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="communications" className="space-y-3 mt-4">
            {communications.map((comm) => (
              <div key={comm.id} className="bg-slate-700/50 p-3 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-white font-medium">{comm.subject}</p>
                    <p className="text-slate-400 text-sm capitalize">
                      {comm.type} • {comm.date}
                    </p>
                  </div>
                  <Badge variant="secondary" className="bg-blue-500/10 text-blue-400">
                    {comm.status}
                  </Badge>
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>

        {/* Actions */}
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex-1 bg-transparent">
            <MessageSquare className="w-4 h-4 mr-2" />
            Message
          </Button>
          <Button variant="outline" size="sm" className="flex-1 bg-transparent">
            <FileText className="w-4 h-4 mr-2" />
            Notes
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
