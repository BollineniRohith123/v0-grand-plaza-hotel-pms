"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Database, CreditCard, Mail, Calendar, Wifi, Settings } from "lucide-react"

interface IntegrationSettingsProps {
  onChangeDetected: (hasChanges: boolean) => void
}

export function IntegrationSettings({ onChangeDetected }: IntegrationSettingsProps) {
  const [integrations] = useState([
    {
      id: "stripe",
      name: "Stripe",
      description: "Payment processing and billing",
      icon: CreditCard,
      status: "connected",
      lastSync: "2 minutes ago",
      settings: { webhookUrl: "https://api.grandplaza.com/webhooks/stripe" },
    },
    {
      id: "mailgun",
      name: "Mailgun",
      description: "Email delivery service",
      icon: Mail,
      status: "connected",
      lastSync: "5 minutes ago",
      settings: { domain: "mg.grandplaza.com" },
    },
    {
      id: "google-calendar",
      name: "Google Calendar",
      description: "Calendar synchronization",
      icon: Calendar,
      status: "disconnected",
      lastSync: "Never",
      settings: {},
    },
    {
      id: "wifi-system",
      name: "WiFi Management",
      description: "Guest WiFi access control",
      icon: Wifi,
      status: "connected",
      lastSync: "1 hour ago",
      settings: { networkName: "GrandPlaza-Guest" },
    },
  ])

  const [apiSettings, setApiSettings] = useState({
    enableApi: true,
    apiKey: "gp_live_sk_1234567890abcdef",
    webhookSecret: "whsec_1234567890abcdef",
    rateLimitEnabled: true,
    rateLimitRequests: "1000",
    rateLimitWindow: "60",
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "connected":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
      case "disconnected":
        return "bg-slate-500/10 text-slate-400 border-slate-500/20"
      case "error":
        return "bg-red-500/10 text-red-400 border-red-500/20"
      default:
        return "bg-slate-500/10 text-slate-400 border-slate-500/20"
    }
  }

  const handleApiSettingChange = (key: string, value: any) => {
    setApiSettings((prev) => ({ ...prev, [key]: value }))
    onChangeDetected(true)
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">Integrations</h2>
        <p className="text-slate-400">Manage third-party integrations and API settings</p>
      </div>

      {/* Connected Services */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Database className="w-5 h-5" />
            Connected Services
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {integrations.map((integration) => (
            <div key={integration.id} className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-600 rounded-lg">
                  <integration.icon className="w-6 h-6 text-slate-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">{integration.name}</h4>
                  <p className="text-slate-400 text-sm">{integration.description}</p>
                  <p className="text-slate-500 text-xs mt-1">Last sync: {integration.lastSync}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Badge className={getStatusColor(integration.status)}>{integration.status}</Badge>
                <Button variant="outline" size="sm" className="bg-transparent">
                  <Settings className="w-4 h-4 mr-2" />
                  Configure
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* API Settings */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">API Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <Label className="text-slate-300">Enable API Access</Label>
              <p className="text-sm text-slate-400">Allow external applications to access your data</p>
            </div>
            <Switch
              checked={apiSettings.enableApi}
              onCheckedChange={(checked) => handleApiSettingChange("enableApi", checked)}
            />
          </div>

          {apiSettings.enableApi && (
            <>
              <div>
                <Label htmlFor="apiKey" className="text-slate-300">
                  API Key
                </Label>
                <div className="flex gap-2">
                  <Input
                    id="apiKey"
                    value={apiSettings.apiKey}
                    onChange={(e) => handleApiSettingChange("apiKey", e.target.value)}
                    className="bg-slate-700 border-slate-600 text-white"
                    readOnly
                  />
                  <Button variant="outline" className="bg-transparent">
                    Regenerate
                  </Button>
                </div>
              </div>

              <div>
                <Label htmlFor="webhookSecret" className="text-slate-300">
                  Webhook Secret
                </Label>
                <div className="flex gap-2">
                  <Input
                    id="webhookSecret"
                    value={apiSettings.webhookSecret}
                    onChange={(e) => handleApiSettingChange("webhookSecret", e.target.value)}
                    className="bg-slate-700 border-slate-600 text-white"
                    readOnly
                  />
                  <Button variant="outline" className="bg-transparent">
                    Regenerate
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-slate-300">Rate Limiting</Label>
                  <p className="text-sm text-slate-400">Limit API requests to prevent abuse</p>
                </div>
                <Switch
                  checked={apiSettings.rateLimitEnabled}
                  onCheckedChange={(checked) => handleApiSettingChange("rateLimitEnabled", checked)}
                />
              </div>

              {apiSettings.rateLimitEnabled && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="rateLimitRequests" className="text-slate-300">
                      Max Requests
                    </Label>
                    <Input
                      id="rateLimitRequests"
                      value={apiSettings.rateLimitRequests}
                      onChange={(e) => handleApiSettingChange("rateLimitRequests", e.target.value)}
                      className="bg-slate-700 border-slate-600 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="rateLimitWindow" className="text-slate-300">
                      Time Window (seconds)
                    </Label>
                    <Input
                      id="rateLimitWindow"
                      value={apiSettings.rateLimitWindow}
                      onChange={(e) => handleApiSettingChange("rateLimitWindow", e.target.value)}
                      className="bg-slate-700 border-slate-600 text-white"
                    />
                  </div>
                </div>
              )}
            </>
          )}
        </CardContent>
      </Card>

      {/* Available Integrations */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Available Integrations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "QuickBooks", description: "Accounting integration" },
              { name: "Salesforce", description: "CRM integration" },
              { name: "Slack", description: "Team communication" },
              { name: "Zapier", description: "Workflow automation" },
              { name: "Google Analytics", description: "Website analytics" },
              { name: "Twilio", description: "SMS and voice services" },
            ].map((service, index) => (
              <div key={index} className="p-4 bg-slate-700/50 rounded-lg">
                <h4 className="font-semibold text-white">{service.name}</h4>
                <p className="text-slate-400 text-sm mb-3">{service.description}</p>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Connect
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
