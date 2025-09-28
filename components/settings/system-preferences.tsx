"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Palette, Moon, Sun, Globe, Clock } from "lucide-react"

interface SystemPreferencesProps {
  onChangeDetected: (hasChanges: boolean) => void
}

export function SystemPreferences({ onChangeDetected }: SystemPreferencesProps) {
  const [preferences, setPreferences] = useState({
    theme: "dark",
    language: "en",
    timezone: "America/New_York",
    dateFormat: "MM/DD/YYYY",
    timeFormat: "12h",
    autoSave: true,
    notifications: true,
    soundEffects: false,
    compactMode: false,
    showTips: true,
  })

  const handlePreferenceChange = (key: string, value: any) => {
    setPreferences((prev) => ({ ...prev, [key]: value }))
    onChangeDetected(true)
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">System Preferences</h2>
        <p className="text-slate-400">Customize your system appearance and behavior</p>
      </div>

      {/* Appearance */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Palette className="w-5 h-5" />
            Appearance
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <Label className="text-slate-300">Theme</Label>
              <p className="text-sm text-slate-400">Choose your preferred color scheme</p>
            </div>
            <Select value={preferences.theme} onValueChange={(value) => handlePreferenceChange("theme", value)}>
              <SelectTrigger className="w-32 bg-slate-700 border-slate-600 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-slate-700 border-slate-600">
                <SelectItem value="light">
                  <div className="flex items-center gap-2">
                    <Sun className="w-4 h-4" />
                    Light
                  </div>
                </SelectItem>
                <SelectItem value="dark">
                  <div className="flex items-center gap-2">
                    <Moon className="w-4 h-4" />
                    Dark
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label className="text-slate-300">Compact Mode</Label>
              <p className="text-sm text-slate-400">Reduce spacing for more content</p>
            </div>
            <Switch
              checked={preferences.compactMode}
              onCheckedChange={(checked) => handlePreferenceChange("compactMode", checked)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Localization */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Globe className="w-5 h-5" />
            Localization
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label className="text-slate-300">Language</Label>
              <Select value={preferences.language} onValueChange={(value) => handlePreferenceChange("language", value)}>
                <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-slate-700 border-slate-600">
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="es">Spanish</SelectItem>
                  <SelectItem value="fr">French</SelectItem>
                  <SelectItem value="de">German</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="text-slate-300">Timezone</Label>
              <Select value={preferences.timezone} onValueChange={(value) => handlePreferenceChange("timezone", value)}>
                <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-slate-700 border-slate-600">
                  <SelectItem value="America/New_York">Eastern Time</SelectItem>
                  <SelectItem value="America/Chicago">Central Time</SelectItem>
                  <SelectItem value="America/Denver">Mountain Time</SelectItem>
                  <SelectItem value="America/Los_Angeles">Pacific Time</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label className="text-slate-300">Date Format</Label>
              <Select
                value={preferences.dateFormat}
                onValueChange={(value) => handlePreferenceChange("dateFormat", value)}
              >
                <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-slate-700 border-slate-600">
                  <SelectItem value="MM/DD/YYYY">MM/DD/YYYY</SelectItem>
                  <SelectItem value="DD/MM/YYYY">DD/MM/YYYY</SelectItem>
                  <SelectItem value="YYYY-MM-DD">YYYY-MM-DD</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="text-slate-300">Time Format</Label>
              <Select
                value={preferences.timeFormat}
                onValueChange={(value) => handlePreferenceChange("timeFormat", value)}
              >
                <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-slate-700 border-slate-600">
                  <SelectItem value="12h">12 Hour</SelectItem>
                  <SelectItem value="24h">24 Hour</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* System Behavior */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Clock className="w-5 h-5" />
            System Behavior
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <Label className="text-slate-300">Auto Save</Label>
              <p className="text-sm text-slate-400">Automatically save changes</p>
            </div>
            <Switch
              checked={preferences.autoSave}
              onCheckedChange={(checked) => handlePreferenceChange("autoSave", checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label className="text-slate-300">Desktop Notifications</Label>
              <p className="text-sm text-slate-400">Show system notifications</p>
            </div>
            <Switch
              checked={preferences.notifications}
              onCheckedChange={(checked) => handlePreferenceChange("notifications", checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label className="text-slate-300">Sound Effects</Label>
              <p className="text-sm text-slate-400">Play sounds for actions</p>
            </div>
            <Switch
              checked={preferences.soundEffects}
              onCheckedChange={(checked) => handlePreferenceChange("soundEffects", checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label className="text-slate-300">Show Tips</Label>
              <p className="text-sm text-slate-400">Display helpful tips and tutorials</p>
            </div>
            <Switch
              checked={preferences.showTips}
              onCheckedChange={(checked) => handlePreferenceChange("showTips", checked)}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
