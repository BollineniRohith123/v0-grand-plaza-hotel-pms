"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

interface AddRoomTypeModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function AddRoomTypeModal({ open, onOpenChange }: AddRoomTypeModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Add Room Type</DialogTitle>
          <DialogDescription>Create a new room type category</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="typeName">Room Type Name</Label>
              <Input id="typeName" placeholder="e.g., Executive Suite" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="typeCode">Type Code</Label>
              <Input id="typeCode" placeholder="e.g., EXEC" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="baseRate">Base Rate (per night)</Label>
              <Input id="baseRate" type="number" placeholder="200" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="maxOccupancy">Max Occupancy</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select occupancy" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 Guest</SelectItem>
                  <SelectItem value="2">2 Guests</SelectItem>
                  <SelectItem value="3">3 Guests</SelectItem>
                  <SelectItem value="4">4 Guests</SelectItem>
                  <SelectItem value="6">6 Guests</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="bedConfiguration">Bed Configuration</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select bed type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="single">Single Bed</SelectItem>
                <SelectItem value="double">Double Bed</SelectItem>
                <SelectItem value="queen">Queen Bed</SelectItem>
                <SelectItem value="king">King Bed</SelectItem>
                <SelectItem value="twin">Twin Beds</SelectItem>
                <SelectItem value="sofa">Sofa Bed</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Standard Amenities</Label>
            <div className="grid grid-cols-2 gap-4">
              {[
                "WiFi",
                "Air Conditioning",
                "Television",
                "Mini Bar",
                "Room Service",
                "Balcony",
                "Ocean View",
                "City View",
                "Kitchenette",
                "Jacuzzi",
                "Work Desk",
                "Safe",
              ].map((amenity) => (
                <div key={amenity} className="flex items-center space-x-2">
                  <Checkbox id={amenity.toLowerCase().replace(" ", "-")} />
                  <Label htmlFor={amenity.toLowerCase().replace(" ", "-")} className="text-sm">
                    {amenity}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" placeholder="Describe this room type..." />
          </div>
        </div>

        <div className="flex justify-end gap-2 pt-6">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={() => onOpenChange(false)}>Add Room Type</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
