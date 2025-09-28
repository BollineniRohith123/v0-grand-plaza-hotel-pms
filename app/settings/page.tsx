"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Save, Shield, Users, Building, Palette, Bell, Database } from "lucide-react"
import { HotelSettings } from "@/components/settings/hotel-settings"
import { UserManagement } from "@/components/settings/user-management"
import { SystemPreferences } from "@/components/settings/system-preferences"
import { SecuritySettings } from "@/components/settings/security-settings"
import { IntegrationSettings } from "@/components/settings/integration-settings"
import { NotificationSettings } from "@/components/settings/notification-settings"

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("hotel")
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false)

  const settingsTabs = [
    { id: "hotel", label: "Hotel Info", icon: Building },
    { id: "users", label: "User Management", icon: Users },
    { id: "system", label: "System", icon: Palette },
    { id: "security", label: "Security", icon: Shield },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "integrations", label: "Integrations", icon: Database },
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Settings</h1>
          <p className="text-slate-400 mt-1">Configure your hotel management system</p>
        </div>
        {hasUnsavedChanges && (
          <Button>
            <Save className="w-4 h-4 mr-2" />
            Save Changes
          </Button>
        )}
      </div>

      {/* Settings Navigation */}
      <Card className="bg-slate-800 border-slate-700">
        <CardContent className="p-0">
          <Tabs value={activeTab} onValueChange={setActiveTab} orientation="vertical" className="flex">
            <TabsList className="flex flex-col h-auto w-64 bg-transparent p-2 space-y-1">
              {settingsTabs.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="w-full justify-start gap-3 data-[state=active]:bg-slate-700 data-[state=active]:text-white"
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>

            <div className="flex-1 border-l border-slate-700">
              <TabsContent value="hotel" className="m-0 p-6">
                <HotelSettings onChangeDetected={setHasUnsavedChanges} />
              </TabsContent>

              <TabsContent value="users" className="m-0 p-6">
                <UserManagement onChangeDetected={setHasUnsavedChanges} />
              </TabsContent>

              <TabsContent value="system" className="m-0 p-6">
                <SystemPreferences onChangeDetected={setHasUnsavedChanges} />
              </TabsContent>

              <TabsContent value="security" className="m-0 p-6">
                <SecuritySettings onChangeDetected={setHasUnsavedChanges} />
              </TabsContent>

              <TabsContent value="notifications" className="m-0 p-6">
                <NotificationSettings onChangeDetected={setHasUnsavedChanges} />
              </TabsContent>

              <TabsContent value="integrations" className="m-0 p-6">
                <IntegrationSettings onChangeDetected={setHasUnsavedChanges} />
              </TabsContent>
            </div>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
