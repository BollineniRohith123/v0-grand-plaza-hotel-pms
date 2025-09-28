import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { User, Calendar, Bed } from "lucide-react"

interface CheckOutModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CheckOutModal({ open, onOpenChange }: CheckOutModalProps) {
  const currentGuests = [
    {
      id: "RES001",
      guest: "John Smith",
      room: "102",
      checkIn: "2024-12-25",
      checkOut: "2024-12-28",
      amount: "$375.00",
      status: "checked-in",
    },
    {
      id: "RES003",
      guest: "Mike Davis",
      room: "202",
      checkIn: "2024-12-26",
      checkOut: "2024-12-30",
      amount: "$500.00",
      status: "checked-in",
    },
  ]

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Check-Out Guests</DialogTitle>
          <DialogDescription>Select guests to check out today</DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {currentGuests.map((guest) => (
            <Card key={guest.id} className="cursor-pointer hover:shadow-md transition-all">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <User className="h-5 w-5" />
                    {guest.guest}
                  </CardTitle>
                  <Badge variant="default">{guest.status.replace("-", " ")}</Badge>
                </div>
                <CardDescription>Reservation ID: {guest.id}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Bed className="h-4 w-4 text-muted-foreground" />
                    <span>Room {guest.room}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>
                      {new Date(guest.checkIn).toLocaleDateString()} - {new Date(guest.checkOut).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold">{guest.amount}</span>
                  <Button variant="outline">Check Out</Button>
                </div>
              </CardContent>
            </Card>
          ))}

          {currentGuests.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              <User className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No guests scheduled to check out today</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
