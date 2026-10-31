import React, { useState, useEffect, useMemo } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import JobTimeline from "./components/JobTimeline";
import ProfileCard from "./components/ProfileCard";
import Footer from "./components/Footer";
import rawJobs from "./data/jobs.json";
import { processJobs } from "./utils/jobUtils";

export default function App() {
  // Theme state persisted in localStorage
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("vamshi_verse_theme") || localStorage.getItem("vamshi_theme");
      if (saved === "dark" || saved === "light") return saved;
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return "light";
  });

  // Apply dark class to document root
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("vamshi_verse_theme", theme);
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Process and sort jobs data
  const { groups, totalCount } = useMemo(() => {
    return processJobs(rawJobs);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#fffefd] text-[#262626] dark:bg-[#0b0b0d] dark:text-[#ededed] font-sans transition-colors duration-300">
      {/* Background Decorative Blush Glow */}
      <div className="fixed top-0 right-0 w-[80vw] h-[80vh] max-w-[900px] pointer-events-none z-0 bg-radial-blush" />

      {/* Main Header */}
      <Header theme={theme} onToggleTheme={handleToggleTheme} />

      {/* Page Content Container */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Hero Section */}
        <Hero totalJobs={totalCount} />

        {/* Two-Column Layout on Desktop (~70% Main Job Feed / ~30% Profile Sidebar) */}
        <div className="mt-4 sm:mt-6 flex flex-col lg:flex-row items-start gap-8 lg:gap-10">
          {/* Main Column: Chronological Job Feed (~70%) */}
          <div className="w-full lg:w-[68%] flex-1">
            <JobTimeline groups={groups} />
          </div>

          {/* Sidebar Column: About Vamshi (~30%) */}
          <div className="w-full lg:w-[32%] lg:sticky lg:top-24">
            <ProfileCard />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

