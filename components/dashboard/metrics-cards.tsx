import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bed, Users, DollarSign, ArrowUpRight, ArrowDownRight } from "lucide-react"

interface MetricCardProps {
  title: string
  value: string | number
  change?: {
    value: string
    type: "increase" | "decrease" | "neutral"
  }
  icon: React.ReactNode
  subtitle?: string
}

function MetricCard({ title, value, change, icon, subtitle }: MetricCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {change && (
          <div className="flex items-center text-xs text-muted-foreground">
            {change.type === "increase" ? (
              <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
            ) : change.type === "decrease" ? (
              <ArrowDownRight className="h-3 w-3 text-red-500 mr-1" />
            ) : null}
            {change.value}
          </div>
        )}
        {subtitle && <div className="text-xs text-muted-foreground mt-1">{subtitle}</div>}
      </CardContent>
    </Card>
  )
}

export function MetricsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
      <MetricCard
        title="Occupancy Rate"
        value="20%"
        change={{ value: "+2.5% from yesterday", type: "increase" }}
        icon={<Bed className="h-4 w-4 text-muted-foreground" />}
      />

      <MetricCard
        title="Available Rooms"
        value="5"
        subtitle="out of 10 total rooms"
        icon={<Bed className="h-4 w-4 text-muted-foreground" />}
      />

      <MetricCard
        title="Today's Arrivals"
        value="0"
        subtitle="guests expected"
        icon={<Users className="h-4 w-4 text-muted-foreground" />}
      />

      <MetricCard
        title="Today's Departures"
        value="0"
        subtitle="guests checking out"
        icon={<Users className="h-4 w-4 text-muted-foreground" />}
      />

      <MetricCard
        title="Today's Revenue"
        value="$0.00"
        change={{ value: "-100% from yesterday", type: "decrease" }}
        icon={<DollarSign className="h-4 w-4 text-muted-foreground" />}
      />
    </div>
  )
}
