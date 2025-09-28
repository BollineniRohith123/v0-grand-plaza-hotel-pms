import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { MetricsCards } from "@/components/dashboard/metrics-cards"
import { RevenueChart } from "@/components/dashboard/revenue-chart"
import { RoomStatus } from "@/components/dashboard/room-status"
import { RecentActivity } from "@/components/dashboard/recent-activity"
import { QuickStats } from "@/components/dashboard/quick-stats"
import { Plus, Calendar } from "lucide-react"

export default function Dashboard() {
  const quickActions = (
    <div className="flex gap-2">
      <Button className="gap-2">
        <Plus className="h-4 w-4" />
        New Reservation
      </Button>
      <Button variant="outline" className="gap-2 bg-transparent">
        <Calendar className="h-4 w-4" />
        Quick Book
      </Button>
    </div>
  )

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header
          title="Dashboard"
          subtitle="Welcome back! Here's what's happening at Grand Plaza Hotel today."
          actions={quickActions}
        />

        <main className="flex-1 overflow-auto p-6 space-y-8">
          {/* Key Metrics */}
          <MetricsCards />

          {/* Revenue Overview & Room Status */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <RevenueChart />
            <RoomStatus />
          </div>

          {/* Recent Activity & Quick Stats */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <RecentActivity />
            </div>
            <QuickStats />
          </div>
        </main>
      </div>
    </div>
  )
}
