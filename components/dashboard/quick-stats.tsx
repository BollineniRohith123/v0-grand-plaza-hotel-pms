import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Users, Clock, TrendingUp } from "lucide-react"

export function QuickStats() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Stats</CardTitle>
        <CardDescription>Key performance indicators</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4 text-yellow-500" />
            <span className="text-sm">Average Rating</span>
          </div>
          <Badge variant="secondary">4.2/5</Badge>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-blue-500" />
            <span className="text-sm">Total Guests</span>
          </div>
          <Badge variant="secondary">127</Badge>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-green-500" />
            <span className="text-sm">Avg Stay Duration</span>
          </div>
          <Badge variant="secondary">2.3 days</Badge>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-purple-500" />
            <span className="text-sm">RevPAR</span>
          </div>
          <Badge variant="secondary">$89.50</Badge>
        </div>

        <div className="pt-4 border-t">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">$2,450</div>
            <div className="text-xs text-muted-foreground">Monthly Revenue</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
