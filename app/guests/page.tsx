"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Plus, Filter, Download, MapPin, Calendar, CreditCard, Star } from "lucide-react"
import { GuestList } from "@/components/guests/guest-list"
import { GuestProfile } from "@/components/guests/guest-profile"
import { AddGuestModal } from "@/components/guests/add-guest-modal"

export default function GuestsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedGuest, setSelectedGuest] = useState(null)
  const [showAddModal, setShowAddModal] = useState(false)
  const [activeTab, setActiveTab] = useState("all")

  const guestStats = [
    { label: "Total Guests", value: "2,847", change: "+12%", icon: MapPin },
    { label: "VIP Guests", value: "156", change: "+8%", icon: Star },
    { label: "Repeat Guests", value: "1,203", change: "+15%", icon: Calendar },
    { label: "Active Stays", value: "89", change: "+3%", icon: CreditCard },
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Guest Management</h1>
          <p className="text-slate-400 mt-1">Manage guest profiles, preferences, and history</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button onClick={() => setShowAddModal(true)}>
            <Plus className="w-4 h-4 mr-2" />
            Add Guest
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {guestStats.map((stat, index) => (
          <Card key={index} className="bg-slate-800 border-slate-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm font-medium">{stat.label}</p>
                  <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
                  <p className="text-emerald-400 text-sm mt-1">{stat.change} from last month</p>
                </div>
                <div className="p-3 bg-blue-500/10 rounded-lg">
                  <stat.icon className="w-6 h-6 text-blue-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Search and Filters */}
      <Card className="bg-slate-800 border-slate-700">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
              <Input
                placeholder="Search guests by name, email, phone, or room number..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-slate-700 border-slate-600 text-white"
              />
            </div>
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Guest Management Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="bg-slate-800 border-slate-700">
          <TabsTrigger value="all">All Guests</TabsTrigger>
          <TabsTrigger value="current">Current Guests</TabsTrigger>
          <TabsTrigger value="vip">VIP Guests</TabsTrigger>
          <TabsTrigger value="repeat">Repeat Guests</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <GuestList searchTerm={searchTerm} onSelectGuest={setSelectedGuest} selectedGuest={selectedGuest} />
            </div>
            <div>
              {selectedGuest ? (
                <GuestProfile guest={selectedGuest} />
              ) : (
                <Card className="bg-slate-800 border-slate-700">
                  <CardContent className="p-6 text-center">
                    <p className="text-slate-400">Select a guest to view their profile</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="current">
          <GuestList
            searchTerm={searchTerm}
            filter="current"
            onSelectGuest={setSelectedGuest}
            selectedGuest={selectedGuest}
          />
        </TabsContent>

        <TabsContent value="vip">
          <GuestList
            searchTerm={searchTerm}
            filter="vip"
            onSelectGuest={setSelectedGuest}
            selectedGuest={selectedGuest}
          />
        </TabsContent>

        <TabsContent value="repeat">
          <GuestList
            searchTerm={searchTerm}
            filter="repeat"
            onSelectGuest={setSelectedGuest}
            selectedGuest={selectedGuest}
          />
        </TabsContent>
      </Tabs>

      <AddGuestModal open={showAddModal} onOpenChange={setShowAddModal} />
    </div>
  )
}
