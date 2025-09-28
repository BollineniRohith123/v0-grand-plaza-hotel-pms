"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Plus, Search, Edit, Trash2, Shield, User } from "lucide-react"

interface UserManagementProps {
  onChangeDetected: (hasChanges: boolean) => void
}

export function UserManagement({ onChangeDetected }: UserManagementProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [users] = useState([
    {
      id: "1",
      name: "John Admin",
      email: "john@grandplaza.com",
      role: "Administrator",
      department: "Management",
      status: "active",
      lastLogin: "2024-01-15 09:30",
    },
    {
      id: "2",
      name: "Sarah Manager",
      email: "sarah@grandplaza.com",
      role: "Manager",
      department: "Front Desk",
      status: "active",
      lastLogin: "2024-01-15 08:45",
    },
    {
      id: "3",
      name: "Mike Staff",
      email: "mike@grandplaza.com",
      role: "Staff",
      department: "Housekeeping",
      status: "active",
      lastLogin: "2024-01-14 16:20",
    },
    {
      id: "4",
      name: "Lisa Clerk",
      email: "lisa@grandplaza.com",
      role: "Staff",
      department: "Front Desk",
      status: "inactive",
      lastLogin: "2024-01-10 14:15",
    },
  ])

  const roles = [
    { name: "Administrator", permissions: ["All permissions"], color: "bg-red-500/10 text-red-400" },
    {
      name: "Manager",
      permissions: ["View reports", "Manage staff", "Handle reservations"],
      color: "bg-blue-500/10 text-blue-400",
    },
    {
      name: "Staff",
      permissions: ["Handle reservations", "Manage rooms"],
      color: "bg-emerald-500/10 text-emerald-400",
    },
  ]

  const getStatusColor = (status: string) => {
    return status === "active" ? "bg-emerald-500/10 text-emerald-400" : "bg-slate-500/10 text-slate-400"
  }

  const getRoleIcon = (role: string) => {
    return role === "Administrator" ? Shield : User
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">User Management</h2>
          <p className="text-slate-400">Manage user accounts, roles, and permissions</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add User
        </Button>
      </div>

      {/* Search */}
      <Card className="bg-slate-800 border-slate-700">
        <CardContent className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
            <Input
              placeholder="Search users by name, email, or department..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-slate-700 border-slate-600 text-white"
            />
          </div>
        </CardContent>
      </Card>

      {/* Users List */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Team Members</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="space-y-0">
            {users.map((user) => {
              const RoleIcon = getRoleIcon(user.role)
              return (
                <div key={user.id} className="p-4 border-b border-slate-700 last:border-b-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Avatar className="w-12 h-12">
                        <AvatarFallback className="bg-blue-500/10 text-blue-400">
                          {user.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-white">{user.name}</h3>
                          <RoleIcon className="w-4 h-4 text-slate-400" />
                        </div>
                        <p className="text-slate-400 text-sm">{user.email}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="secondary" className="bg-slate-700 text-slate-300">
                            {user.department}
                          </Badge>
                          <Badge className={getStatusColor(user.status)}>{user.status}</Badge>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <p className="text-slate-300 font-medium">{user.role}</p>
                        <p className="text-slate-400 text-sm">Last: {user.lastLogin}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-400 hover:text-red-300">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Roles & Permissions */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Roles & Permissions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {roles.map((role, index) => (
            <div key={index} className="p-4 bg-slate-700/50 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-white">{role.name}</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {role.permissions.map((permission, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-slate-600 text-slate-300">
                        {permission}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Button variant="outline" size="sm" className="bg-transparent">
                  Edit
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
