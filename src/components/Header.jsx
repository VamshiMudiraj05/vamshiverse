import React from "react";
import ThemeToggle from "./ThemeToggle";
import { siteConfig } from "../data/siteConfig";

export default function Header({ theme, onToggleTheme }) {
  return (
    <header className="w-full border-b border-black/[0.06] dark:border-white/[0.08] bg-white/70 dark:bg-[#0b0b0d]/70 backdrop-blur-md sticky top-0 z-40 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 h-16 flex items-center justify-between">
        {/* Wordmark */}
        <div className="flex items-center gap-2.5">
          <a
            href="/"
            className="group flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#c2185b]/40 rounded-lg p-0.5"
            aria-label={`${siteConfig.brandName} home`}
          >
            <span className="font-instrument text-2xl sm:text-[28px] font-semibold text-gray-900 dark:text-white tracking-tight group-hover:text-[#c2185b] dark:group-hover:text-[#f3b9c8] transition-colors">
              {siteConfig.brandName}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#c2185b] dark:bg-[#f3b9c8] inline-block animate-pulse" />
          </a>
        </div>

        {/* Right side: Descriptor & Theme Toggle */}
        <div className="flex items-center gap-3 sm:gap-4">
          <span className="hidden sm:inline-block text-xs font-medium text-gray-500 dark:text-gray-400 tracking-wider uppercase border-r border-black/10 dark:border-white/10 pr-4">
            {siteConfig.brandTagline}
          </span>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} size="sm" />
        </div>
      </div>
    </header>
  );
}

