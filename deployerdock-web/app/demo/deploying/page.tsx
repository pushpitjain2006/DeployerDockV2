"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  Clock,
  ExternalLink,
  FlaskConical,
  Rocket,
  Sun,
  Moon,
  Terminal,
} from "lucide-react";

const SAMPLE_LOGS = [
  "Cloning repository: https://github.com/pushpitjain2006/portfolio-website",
  "Checkout: branch → main",
  "Resolving dependencies...",
  "Installing dependencies (npm install)...",
  "added 247 packages in 4.83s",
  "Running build command: npm run build",
  "",
  "> portfolio-website@1.0.0 build",
  "> vite build",
  "",
  "vite v5.2.0 building for production...",
  "transforming (1/45):   index.html",
  "transforming (12/45):  src/components/Navbar.tsx",
  "transforming (27/45):  src/components/Hero.tsx",
  "transforming (38/45):  src/components/Projects.tsx",
  "transforming (45/45):  src/assets/icons.ts",
  "✓ 45 modules transformed.",
  "",
  "dist/index.html             1.32 kB │ gzip:  0.78 kB",
  "dist/assets/index.css      12.40 kB │ gzip:  3.82 kB",
  "dist/assets/index.js      154.22 kB │ gzip: 51.10 kB",
  "✓ built in 3.24s",
  "",
  "Uploading build artifacts to S3...",
  "  → Uploading: dist/index.html",
  "  → Uploading: dist/assets/index.css",
  "  → Uploading: dist/assets/index.js",
  "Upload complete. 3 files uploaded successfully.",
  "",
  "Configuring reverse proxy routing...",
  "DNS routing: pushpit-portfolio.pushpitjain.tech → S3 bucket",
  "Health check passed ✓",
  "🚀 Deployment complete! Your site is live.",
];

const LOG_INTERVAL_MS = 280;

export default function DemoDeployingPage() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [visibleLogs, setVisibleLogs] = useState<string[]>([]);
  const [status, setStatus] = useState<"building" | "live">("building");
  const [showRedirect, setShowRedirect] = useState(false);
  const logEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < SAMPLE_LOGS.length) {
        setVisibleLogs((prev) => [...prev, SAMPLE_LOGS[index]]);
        index++;
      } else {
        clearInterval(timer);
        // Short pause after last log before showing "Live"
        setTimeout(() => {
          setStatus("live");
          setTimeout(() => setShowRedirect(true), 800);
        }, 600);
      }
    }, LOG_INTERVAL_MS);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    logEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [visibleLogs]);

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
            </div>
          </div>
        </header>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

          {/* Status Card */}
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                Deploying <span className="font-mono text-purple-600 dark:text-purple-400">pushpit-portfolio</span>
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                https://github.com/pushpitjain2006/portfolio-website
              </p>
            </div>

            {/* Status Badge */}
            <div className="flex items-center gap-2">
              {status === "building" ? (
                <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-300 text-sm font-semibold">
                  <Clock className="w-4 h-4 animate-pulse" />
                  Building...
                </span>
              ) : (
                <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 text-sm font-semibold animate-in fade-in duration-500">
                  <CheckCircle className="w-4 h-4" />
                  Live
                </span>
              )}
            </div>
          </div>

          {/* Terminal Log Window */}
          <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-700">
            {/* Terminal top bar */}
            <div className="flex items-center gap-2 bg-gray-800 px-4 py-3 border-b border-gray-700">
              <div className="w-3 h-3 bg-red-500 rounded-full" />
              <div className="w-3 h-3 bg-yellow-500 rounded-full" />
              <div className="w-3 h-3 bg-green-500 rounded-full" />
              <div className="flex items-center gap-2 ml-3 text-gray-400 text-xs">
                <Terminal className="w-3.5 h-3.5" />
                <span>deployment logs — pushpit-portfolio</span>
              </div>
            </div>

            {/* Log output */}
            <div className="bg-gray-950 p-5 font-mono text-sm text-green-400 min-h-[420px] max-h-[520px] overflow-y-auto leading-relaxed">
              {visibleLogs.map((log, i) =>
                log === "" ? (
                  <div key={i} className="h-3" />
                ) : (
                  <div
                    key={i}
                    className={`mb-0.5 animate-in fade-in slide-in-from-bottom-1 duration-200 ${
                      log.startsWith("🚀") ? "text-green-300 font-bold" :
                      log.startsWith("✓") ? "text-green-400" :
                      log.startsWith("  →") ? "text-blue-400" :
                      log.startsWith(">") ? "text-purple-400" :
                      log.startsWith("vite") ? "text-yellow-400" :
                      log.includes("dist/") ? "text-cyan-400" :
                      "text-green-400"
                    }`}
                  >
                    {log.startsWith(">") || log.startsWith("  →") ? log : `$ ${log}`}
                  </div>
                )
              )}

              {/* Blinking cursor while building */}
              {status === "building" && (
                <span className="inline-block w-2 h-4 bg-green-400 animate-pulse ml-1 align-middle" />
              )}

              <div ref={logEndRef} />
            </div>
          </div>

          {/* Visit Site CTA — appears after deployment completes */}
          {showRedirect && (
            <div className="mt-8 flex flex-col items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                🎉 Your site has been deployed successfully!
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-10 py-6 rounded-xl shadow-2xl hover:shadow-green-500/30 transition-all duration-300 hover:scale-105 text-lg"
                onClick={() =>
                  window.open("/sample-deployment/", "_blank")
                }
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Visit Deployed Site
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
