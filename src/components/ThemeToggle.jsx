import React from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({ theme, onToggle, size = "md" }) {
  const isDark = theme === "dark";
  const width = size === "sm" ? 44 : 52;
  const height = size === "sm" ? 24 : 28;
  const knobSize = size === "sm" ? 18 : 22;
  const padding = (height - knobSize) / 2;
  const offset = width - knobSize - padding * 2;

  return (
    <button
      onClick={onToggle}
      type="button"
      aria-label="Toggle dark mode"
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative flex items-center rounded-full border border-black/10 dark:border-white/15 bg-black/[0.04] dark:bg-white/10 transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#c2185b]/40"
      style={{ width, height, padding }}
    >
      <span
        className="flex items-center justify-center rounded-full bg-white dark:bg-[#202022] shadow-[0_2px_5px_rgba(0,0,0,0.18)] transition-transform duration-200 ease-out"
        style={{
          width: knobSize,
          height: knobSize,
          transform: `translateX(${isDark ? offset : 0}px)`,
        }}
      >
        {isDark ? (
          <Moon size={knobSize * 0.6} className="text-white/90" />
        ) : (
          <Sun size={knobSize * 0.6} className="text-[#E8A33D]" />
        )}
      </span>
    </button>
  );
}

