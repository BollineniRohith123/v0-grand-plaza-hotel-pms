import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ClipboardList, Clock, User, CheckCircle } from "lucide-react"

interface HousekeepingModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function HousekeepingModal({ open, onOpenChange }: HousekeepingModalProps) {
  const tasks = [
    {
      id: "HK001",
      room: "102",
      type: "checkout-cleaning",
      priority: "high",
      assignedTo: "Maria Garcia",
      estimatedTime: "45 min",
      status: "in-progress",
      tasks: ["Clean Bathroom", "Make Beds", "Vacuum", "Restock Amenities"],
    },
    {
      id: "HK002",
      room: "202",
      type: "maintenance",
      priority: "medium",
      assignedTo: "John Maintenance",
      estimatedTime: "30 min",
      status: "pending",
      tasks: ["Fix Leaky Faucet", "Check AC Unit"],
    },
    {
      id: "HK003",
      room: "301",
      type: "deep-clean",
      priority: "low",
      assignedTo: "Sarah Wilson",
      estimatedTime: "90 min",
      status: "completed",
      tasks: ["Deep Clean Carpet", "Clean Windows", "Sanitize Surfaces"],
    },
  ]

  const staff = [
    { name: "Maria Garcia", role: "Housekeeper", status: "available", currentRoom: null },
    { name: "Sarah Wilson", role: "Housekeeper", status: "busy", currentRoom: "301" },
    { name: "John Maintenance", role: "Maintenance", status: "available", currentRoom: null },
    { name: "Lisa Chen", role: "Supervisor", status: "available", currentRoom: null },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "secondary"
      case "in-progress":
        return "default"
      case "pending":
        return "outline"
      default:
        return "outline"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "destructive"
      case "medium":
        return "default"
      case "low":
        return "secondary"
      default:
        return "outline"
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Housekeeping Management</DialogTitle>
          <DialogDescription>Manage housekeeping tasks and staff assignments</DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="tasks" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="tasks">Active Tasks</TabsTrigger>
            <TabsTrigger value="staff">Staff Management</TabsTrigger>
          </TabsList>

          <TabsContent value="tasks" className="space-y-4">
            <div className="flex gap-4 mb-4">
              <Select>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Filter by priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Priority</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectContent>
              </Select>
              <Button className="gap-2">
                <ClipboardList className="h-4 w-4" />
                New Task
              </Button>
            </div>

            <div className="space-y-4">
              {tasks.map((task) => (
                <Card key={task.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CardTitle className="text-lg">Room {task.room}</CardTitle>
                        <Badge variant={getPriorityColor(task.priority) as any} className="capitalize">
                          {task.priority} Priority
                        </Badge>
                        <Badge variant={getStatusColor(task.status) as any} className="capitalize">
                          {task.status.replace("-", " ")}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {task.estimatedTime}
                      </div>
                    </div>
                    <CardDescription>
                      Task ID: {task.id} • Type: {task.type.replace("-", " ")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Assigned to: {task.assignedTo}</span>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium mb-2">Tasks:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {task.tasks.map((subtask, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="h-3 w-3 text-green-500" />
                              {subtask}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="bg-transparent">
                          View Details
                        </Button>
                        <Button size="sm" variant="outline" className="bg-transparent">
                          Reassign
                        </Button>
                        {task.status === "pending" && <Button size="sm">Start Task</Button>}
                        {task.status === "in-progress" && <Button size="sm">Mark Complete</Button>}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="staff" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {staff.map((member, i) => (
                <Card key={i}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{member.name}</CardTitle>
                      <Badge variant={member.status === "available" ? "secondary" : "default"} className="capitalize">
                        {member.status}
                      </Badge>
                    </div>
                    <CardDescription>{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {member.currentRoom && (
                        <div className="text-sm text-muted-foreground">
                          Currently working on: Room {member.currentRoom}
                        </div>
                      )}
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                          View Schedule
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                          Assign Task
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
