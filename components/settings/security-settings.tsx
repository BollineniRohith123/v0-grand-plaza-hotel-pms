"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Shield, Key, Clock, AlertTriangle, Eye } from "lucide-react"

interface SecuritySettingsProps {
  onChangeDetected: (hasChanges: boolean) => void
}

export function SecuritySettings({ onChangeDetected }: SecuritySettingsProps) {
  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: true,
    sessionTimeout: "30",
    passwordExpiry: "90",
    loginAttempts: "5",
    requireStrongPassword: true,
    auditLogging: true,
    ipWhitelist: false,
  })

  const [activeSessions] = useState([
    { id: "1", device: "Chrome on Windows", location: "New York, NY", lastActive: "2 minutes ago", current: true },
    { id: "2", device: "Safari on iPhone", location: "New York, NY", lastActive: "1 hour ago", current: false },
    { id: "3", device: "Firefox on Mac", location: "Boston, MA", lastActive: "2 days ago", current: false },
  ])

  const handleSettingChange = (key: string, value: any) => {
    setSecuritySettings((prev) => ({ ...prev, [key]: value }))
    onChangeDetected(true)
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">Security Settings</h2>
        <p className="text-slate-400">Manage security policies and access controls</p>
      </div>

      {/* Authentication */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Shield className="w-5 h-5" />
            Authentication
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <Label className="text-slate-300">Two-Factor Authentication</Label>
              <p className="text-sm text-slate-400">Require 2FA for all users</p>
            </div>
            <Switch
              checked={securitySettings.twoFactorAuth}
              onCheckedChange={(checked) => handleSettingChange("twoFactorAuth", checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label className="text-slate-300">Strong Password Policy</Label>
              <p className="text-sm text-slate-400">Enforce complex password requirements</p>
            </div>
            <Switch
              checked={securitySettings.requireStrongPassword}
              onCheckedChange={(checked) => handleSettingChange("requireStrongPassword", checked)}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="sessionTimeout" className="text-slate-300">
                Session Timeout (minutes)
              </Label>
              <Input
                id="sessionTimeout"
                value={securitySettings.sessionTimeout}
                onChange={(e) => handleSettingChange("sessionTimeout", e.target.value)}
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>
            <div>
              <Label htmlFor="passwordExpiry" className="text-slate-300">
                Password Expiry (days)
              </Label>
              <Input
                id="passwordExpiry"
                value={securitySettings.passwordExpiry}
                onChange={(e) => handleSettingChange("passwordExpiry", e.target.value)}
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>
            <div>
              <Label htmlFor="loginAttempts" className="text-slate-300">
                Max Login Attempts
              </Label>
              <Input
                id="loginAttempts"
                value={securitySettings.loginAttempts}
                onChange={(e) => handleSettingChange("loginAttempts", e.target.value)}
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Access Control */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Key className="w-5 h-5" />
            Access Control
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <Label className="text-slate-300">IP Whitelist</Label>
              <p className="text-sm text-slate-400">Restrict access to specific IP addresses</p>
            </div>
            <Switch
              checked={securitySettings.ipWhitelist}
              onCheckedChange={(checked) => handleSettingChange("ipWhitelist", checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label className="text-slate-300">Audit Logging</Label>
              <p className="text-sm text-slate-400">Log all user actions and system events</p>
            </div>
            <Switch
              checked={securitySettings.auditLogging}
              onCheckedChange={(checked) => handleSettingChange("auditLogging", checked)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Active Sessions */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Clock className="w-5 h-5" />
            Active Sessions
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {activeSessions.map((session) => (
            <div key={session.id} className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-600 rounded-lg">
                  <Eye className="w-4 h-4 text-slate-300" />
                </div>
                <div>
                  <p className="text-white font-medium">{session.device}</p>
                  <p className="text-slate-400 text-sm">
                    {session.location} • {session.lastActive}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {session.current && <Badge className="bg-emerald-500/10 text-emerald-400">Current</Badge>}
                {!session.current && (
                  <Button variant="outline" size="sm" className="bg-transparent text-red-400 hover:text-red-300">
                    Revoke
                  </Button>
                )}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Security Actions */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <AlertTriangle className="w-5 h-5" />
            Security Actions
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-4">
            <Button variant="outline" className="bg-transparent">
              Generate Backup Codes
            </Button>
            <Button variant="outline" className="bg-transparent">
              Download Security Report
            </Button>
            <Button variant="outline" className="bg-transparent text-red-400 hover:text-red-300">
              Force Password Reset
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
