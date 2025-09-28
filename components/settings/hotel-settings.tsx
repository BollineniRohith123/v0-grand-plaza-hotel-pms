"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Upload, MapPin, Phone, Mail, Globe } from "lucide-react"

interface HotelSettingsProps {
  onChangeDetected: (hasChanges: boolean) => void
}

export function HotelSettings({ onChangeDetected }: HotelSettingsProps) {
  const [hotelData, setHotelData] = useState({
    name: "Grand Plaza Hotel",
    description: "A luxury hotel in the heart of the city offering exceptional service and amenities.",
    address: "123 Main Street",
    city: "New York",
    state: "NY",
    zipCode: "10001",
    country: "United States",
    phone: "+1 (555) 123-4567",
    email: "info@grandplazahotel.com",
    website: "www.grandplazahotel.com",
    checkInTime: "15:00",
    checkOutTime: "11:00",
    currency: "USD",
    timezone: "America/New_York",
    taxRate: "8.25",
  })

  const handleInputChange = (field: string, value: string) => {
    setHotelData((prev) => ({ ...prev, [field]: value }))
    onChangeDetected(true)
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">Hotel Information</h2>
        <p className="text-slate-400">Manage your hotel's basic information and settings</p>
      </div>

      {/* Basic Information */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Basic Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="hotelName" className="text-slate-300">
                Hotel Name
              </Label>
              <Input
                id="hotelName"
                value={hotelData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>
            <div>
              <Label htmlFor="currency" className="text-slate-300">
                Currency
              </Label>
              <Input
                id="currency"
                value={hotelData.currency}
                onChange={(e) => handleInputChange("currency", e.target.value)}
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="description" className="text-slate-300">
              Description
            </Label>
            <Textarea
              id="description"
              value={hotelData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              className="bg-slate-700 border-slate-600 text-white"
              rows={3}
            />
          </div>

          <div className="flex items-center gap-4">
            <Button variant="outline" className="bg-transparent">
              <Upload className="w-4 h-4 mr-2" />
              Upload Logo
            </Button>
            <Button variant="outline" className="bg-transparent">
              <Upload className="w-4 h-4 mr-2" />
              Upload Images
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            Contact Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="address" className="text-slate-300">
              Address
            </Label>
            <Input
              id="address"
              value={hotelData.address}
              onChange={(e) => handleInputChange("address", e.target.value)}
              className="bg-slate-700 border-slate-600 text-white"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="city" className="text-slate-300">
                City
              </Label>
              <Input
                id="city"
                value={hotelData.city}
                onChange={(e) => handleInputChange("city", e.target.value)}
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>
            <div>
              <Label htmlFor="state" className="text-slate-300">
                State/Province
              </Label>
              <Input
                id="state"
                value={hotelData.state}
                onChange={(e) => handleInputChange("state", e.target.value)}
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>
            <div>
              <Label htmlFor="zipCode" className="text-slate-300">
                ZIP/Postal Code
              </Label>
              <Input
                id="zipCode"
                value={hotelData.zipCode}
                onChange={(e) => handleInputChange("zipCode", e.target.value)}
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="phone" className="text-slate-300 flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Phone
              </Label>
              <Input
                id="phone"
                value={hotelData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-slate-300 flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={hotelData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>
            <div>
              <Label htmlFor="website" className="text-slate-300 flex items-center gap-2">
                <Globe className="w-4 h-4" />
                Website
              </Label>
              <Input
                id="website"
                value={hotelData.website}
                onChange={(e) => handleInputChange("website", e.target.value)}
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Operational Settings */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Operational Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="checkInTime" className="text-slate-300">
                Check-in Time
              </Label>
              <Input
                id="checkInTime"
                type="time"
                value={hotelData.checkInTime}
                onChange={(e) => handleInputChange("checkInTime", e.target.value)}
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>
            <div>
              <Label htmlFor="checkOutTime" className="text-slate-300">
                Check-out Time
              </Label>
              <Input
                id="checkOutTime"
                type="time"
                value={hotelData.checkOutTime}
                onChange={(e) => handleInputChange("checkOutTime", e.target.value)}
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>
            <div>
              <Label htmlFor="taxRate" className="text-slate-300">
                Tax Rate (%)
              </Label>
              <Input
                id="taxRate"
                value={hotelData.taxRate}
                onChange={(e) => handleInputChange("taxRate", e.target.value)}
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
