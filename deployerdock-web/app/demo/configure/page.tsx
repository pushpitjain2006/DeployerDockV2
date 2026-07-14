"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Plus,
  User,
  Calendar,
  Activity,
  ExternalLink,
  Eye,
  Zap,
  Clock,
  CheckCircle,
  XCircle,
  Sun,
  Moon,
  Rocket,
  ArrowRight,
  Lock,
  FlaskConical,
} from "lucide-react";
import { useRouter } from "next/navigation";

const SAMPLE_FORM_DATA = {
  gitUrl: "https://github.com/pushpitjain2006/portfolio-website",
  projectName: "pushpit-portfolio",
  baseDir: "./",
  installCommand: "npm install",
  buildCommand: "npm run build",
  buildFolder: "dist",
};

const SAMPLE_PROJECTS = [
  {
    PROJECT_ID: "react-todo-app",
    GIT_REPOSITORY_URL: "https://github.com/pushpitjain2006/react-todo",
    STATUS: "Live",
    CREATED_AT: "2025-11-10T09:00:00Z",
    LAST_DEPLOY: "2025-11-12T14:30:00Z",
  },
  {
    PROJECT_ID: "weather-dashboard",
    GIT_REPOSITORY_URL: "https://github.com/pushpitjain2006/weather-dash",
    STATUS: "Live",
    CREATED_AT: "2025-12-01T11:20:00Z",
    LAST_DEPLOY: "2025-12-03T16:45:00Z",
  },
  {
    PROJECT_ID: "expense-tracker",
    GIT_REPOSITORY_URL: "https://github.com/pushpitjain2006/expense-tracker",
    STATUS: "Failed",
    CREATED_AT: "2026-01-15T08:00:00Z",
    LAST_DEPLOY: "2026-01-15T08:12:00Z",
  },
];

export default function DemoConfigurePage() {
  const router = useRouter();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Live":
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case "Building":
        return <Clock className="w-7 h-7 text-yellow-500 m-3" />;
      case "Failed":
        return <XCircle className="w-4 h-4 text-red-500" />;
      default:
        return <Clock className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100";
      case "Building":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100";
      case "Failed":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100";
    }
  };

  return (
    <div className={`${isDarkMode ? "dark" : ""}`}>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">

        {/* Demo Banner */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2.5 px-4 text-center text-sm font-medium flex items-center justify-center gap-2 sticky top-0 z-50">
          <FlaskConical className="w-4 h-4 shrink-0" />
          <span>
            <strong>Demo Mode</strong> — This is a sample walkthrough for demonstration purposes. No actual deployment will occur.
          </span>
        </div>

        {/* Header */}
        <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Rocket className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  DeployerDock
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  {isDarkMode ? (
                    <Sun className="w-4 h-4 text-white" />
                  ) : (
                    <Moon className="w-4 h-4" />
                  )}
                </button>

                {/* Guest avatar placeholder */}
                <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  G
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="backdrop-blur-xl bg-white/50 dark:bg-gray-800/50 border border-white/20 dark:border-gray-700/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <User className="w-5 h-5" />
                    <span>Profile</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Name</p>
                    <p className="font-medium">Pushpit Jain</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Email</p>
                    <p className="font-medium">pushpitjain@example.com</p>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Deployments</span>
                      <span className="font-medium">{SAMPLE_PROJECTS.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Active Projects</span>
                      <span className="font-medium">
                        {SAMPLE_PROJECTS.filter((p) => p.STATUS !== "Failed").length}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-8">
              {/* New Deployment Form (read-only) */}
              <Card className="backdrop-blur-xl bg-white/50 dark:bg-gray-800/50 border border-white/20 dark:border-gray-700/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Plus className="w-5 h-5" />
                    <span>New Deployment</span>
                    <span className="ml-auto flex items-center gap-1 text-xs font-normal text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/30 px-2 py-1 rounded-full">
                      <Lock className="w-3 h-3" />
                      Pre-filled sample
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="gitUrl">Git Repository URL</Label>
                      <Input
                        id="gitUrl"
                        type="url"
                        value={SAMPLE_FORM_DATA.gitUrl}
                        readOnly
                        className="bg-gray-50 dark:bg-gray-800 cursor-not-allowed opacity-75"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="projectName">Project Name</Label>
                      <Input
                        id="projectName"
                        value={SAMPLE_FORM_DATA.projectName}
                        readOnly
                        className="bg-gray-50 dark:bg-gray-800 cursor-not-allowed opacity-75"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="baseDir">Base Directory</Label>
                      <Input
                        id="baseDir"
                        value={SAMPLE_FORM_DATA.baseDir}
                        readOnly
                        className="bg-gray-50 dark:bg-gray-800 cursor-not-allowed opacity-75"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="installCommand">Install Command</Label>
                      <Input
                        id="installCommand"
                        value={SAMPLE_FORM_DATA.installCommand}
                        readOnly
                        className="bg-gray-50 dark:bg-gray-800 cursor-not-allowed opacity-75"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="buildCommand">Build Command</Label>
                      <Input
                        id="buildCommand"
                        value={SAMPLE_FORM_DATA.buildCommand}
                        readOnly
                        className="bg-gray-50 dark:bg-gray-800 cursor-not-allowed opacity-75"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="buildFolder">Build Folder</Label>
                      <Input
                        id="buildFolder"
                        value={SAMPLE_FORM_DATA.buildFolder}
                        readOnly
                        className="bg-gray-50 dark:bg-gray-800 cursor-not-allowed opacity-75"
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button
                      className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                      onClick={() => router.push("/demo/deploying")}
                    >
                      <Zap className="w-4 h-4 mr-2" />
                      Continue to Deploy
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Past Projects (non-clickable) */}
              <Card className="backdrop-blur-xl bg-white/50 dark:bg-gray-800/50 border border-white/20 dark:border-gray-700/20">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Activity className="w-5 h-5" />
                      <span>Your Projects</span>
                    </div>
                    <Button variant="outline" size="sm" disabled className="cursor-not-allowed opacity-50">
                      View All
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {SAMPLE_PROJECTS.map((project) => (
                      <div
                        key={project.PROJECT_ID}
                        className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg opacity-75 select-none"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-2">
                            {getStatusIcon(project.STATUS)}
                            <div>
                              <h3 className="font-medium">{project.PROJECT_ID}</h3>
                              <div className="text-sm text-gray-600 dark:text-gray-400">
                                <div className="flex items-center gap-2">
                                  <Calendar className="w-3 h-3" />
                                  Created {new Date(project.CREATED_AT).toLocaleString()}
                                </div>
                                <div>Last deploy {new Date(project.LAST_DEPLOY).toLocaleString()}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge className={getStatusColor(project.STATUS)}>
                            {project.STATUS}
                          </Badge>
                          <Button
                            variant="outline"
                            size="sm"
                            disabled
                            className="cursor-not-allowed opacity-50"
                          >
                            <ExternalLink className="w-3 h-3 mr-1" />
                            Preview
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            disabled
                            className="cursor-not-allowed opacity-50"
                          >
                            <Eye className="w-3 h-3 mr-1" />
                            Details
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
