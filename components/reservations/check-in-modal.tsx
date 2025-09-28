import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { User, Calendar, Bed } from "lucide-react"

interface CheckInModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CheckInModal({ open, onOpenChange }: CheckInModalProps) {
  const expectedArrivals = [
    {
      id: "RES002",
      guest: "Sarah Johnson",
      room: "103",
      checkIn: "2024-12-29",
      checkOut: "2024-12-31",
      amount: "$250.00",
      status: "confirmed",
    },
    {
      id: "RES004",
      guest: "Emma Wilson",
      room: "203",
      checkIn: "2024-12-31",
      checkOut: "2025-01-03",
      amount: "$450.00",
      status: "confirmed",
    },
  ]

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Check-In Guests</DialogTitle>
          <DialogDescription>Select guests to check in today</DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {expectedArrivals.map((arrival) => (
            <Card key={arrival.id} className="cursor-pointer hover:shadow-md transition-all">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <User className="h-5 w-5" />
                    {arrival.guest}
                  </CardTitle>
                  <Badge variant="secondary">{arrival.status}</Badge>
                </div>
                <CardDescription>Reservation ID: {arrival.id}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Bed className="h-4 w-4 text-muted-foreground" />
                    <span>Room {arrival.room}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>
                      {new Date(arrival.checkIn).toLocaleDateString()} -{" "}
                      {new Date(arrival.checkOut).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold">{arrival.amount}</span>
                  <Button>Check In</Button>
                </div>
              </CardContent>
            </Card>
          ))}

          {expectedArrivals.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              <User className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No guests expected to check in today</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
