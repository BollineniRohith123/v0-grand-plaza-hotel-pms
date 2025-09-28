"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Bell, Mail, MessageSquare, AlertCircle } from "lucide-react"

interface NotificationSettingsProps {
  onChangeDetected: (hasChanges: boolean) => void
}

export function NotificationSettings({ onChangeDetected }: NotificationSettingsProps) {
  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    pushNotifications: true,
    smsNotifications: false,
    newReservations: true,
    cancellations: true,
    checkIns: true,
    checkOuts: true,
    maintenanceAlerts: true,
    lowInventory: true,
    systemUpdates: false,
    marketingEmails: false,
    frequency: "immediate",
    quietHours: true,
    quietStart: "22:00",
    quietEnd: "08:00",
  })

  const handleNotificationChange = (key: string, value: any) => {
    setNotifications((prev) => ({ ...prev, [key]: value }))
    onChangeDetected(true)
  }

  const notificationTypes = [
    { key: "newReservations", label: "New Reservations", description: "When new bookings are made" },
    { key: "cancellations", label: "Cancellations", description: "When reservations are cancelled" },
    { key: "checkIns", label: "Check-ins", description: "When guests check in" },
    { key: "checkOuts", label: "Check-outs", description: "When guests check out" },
    { key: "maintenanceAlerts", label: "Maintenance Alerts", description: "When maintenance issues are reported" },
    { key: "lowInventory", label: "Low Inventory", description: "When room availability is low" },
    { key: "systemUpdates", label: "System Updates", description: "When system updates are available" },
    { key: "marketingEmails", label: "Marketing Emails", description: "Promotional and marketing content" },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">Notification Settings</h2>
        <p className="text-slate-400">Configure how and when you receive notifications</p>
      </div>

      {/* Delivery Methods */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Bell className="w-5 h-5" />
            Delivery Methods
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-blue-400" />
              <div>
                <Label className="text-slate-300">Email Notifications</Label>
                <p className="text-sm text-slate-400">Receive notifications via email</p>
              </div>
            </div>
            <Switch
              checked={notifications.emailNotifications}
              onCheckedChange={(checked) => handleNotificationChange("emailNotifications", checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5 text-emerald-400" />
              <div>
                <Label className="text-slate-300">Push Notifications</Label>
                <p className="text-sm text-slate-400">Browser and desktop notifications</p>
              </div>
            </div>
            <Switch
              checked={notifications.pushNotifications}
              onCheckedChange={(checked) => handleNotificationChange("pushNotifications", checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <MessageSquare className="w-5 h-5 text-purple-400" />
              <div>
                <Label className="text-slate-300">SMS Notifications</Label>
                <p className="text-sm text-slate-400">Text message alerts for urgent items</p>
              </div>
            </div>
            <Switch
              checked={notifications.smsNotifications}
              onCheckedChange={(checked) => handleNotificationChange("smsNotifications", checked)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Notification Types */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <AlertCircle className="w-5 h-5" />
            Notification Types
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {notificationTypes.map((type) => (
            <div key={type.key} className="flex items-center justify-between">
              <div>
                <Label className="text-slate-300">{type.label}</Label>
                <p className="text-sm text-slate-400">{type.description}</p>
              </div>
              <Switch
                checked={notifications[type.key as keyof typeof notifications] as boolean}
                onCheckedChange={(checked) => handleNotificationChange(type.key, checked)}
              />
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Notification Preferences */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Notification Preferences</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <Label className="text-slate-300">Notification Frequency</Label>
            <Select
              value={notifications.frequency}
              onValueChange={(value) => handleNotificationChange("frequency", value)}
            >
              <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-slate-700 border-slate-600">
                <SelectItem value="immediate">Immediate</SelectItem>
                <SelectItem value="hourly">Hourly Digest</SelectItem>
                <SelectItem value="daily">Daily Digest</SelectItem>
                <SelectItem value="weekly">Weekly Summary</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label className="text-slate-300">Quiet Hours</Label>
              <p className="text-sm text-slate-400">Disable notifications during specified hours</p>
            </div>
            <Switch
              checked={notifications.quietHours}
              onCheckedChange={(checked) => handleNotificationChange("quietHours", checked)}
            />
          </div>

          {notifications.quietHours && (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="text-slate-300">Start Time</Label>
                <Select
                  value={notifications.quietStart}
                  onValueChange={(value) => handleNotificationChange("quietStart", value)}
                >
                  <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-700 border-slate-600">
                    <SelectItem value="20:00">8:00 PM</SelectItem>
                    <SelectItem value="21:00">9:00 PM</SelectItem>
                    <SelectItem value="22:00">10:00 PM</SelectItem>
                    <SelectItem value="23:00">11:00 PM</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="text-slate-300">End Time</Label>
                <Select
                  value={notifications.quietEnd}
                  onValueChange={(value) => handleNotificationChange("quietEnd", value)}
                >
                  <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-700 border-slate-600">
                    <SelectItem value="06:00">6:00 AM</SelectItem>
                    <SelectItem value="07:00">7:00 AM</SelectItem>
                    <SelectItem value="08:00">8:00 AM</SelectItem>
                    <SelectItem value="09:00">9:00 AM</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
