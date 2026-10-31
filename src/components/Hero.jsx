import React from "react";
import { Sparkles } from "lucide-react";

export default function Hero({ totalJobs = 0 }) {
  return (
    <section className="pt-8 sm:pt-12 pb-6 sm:pb-8">
      {/* Category / Journal Pill */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fce7ec] dark:bg-[#2a1b22] border border-[#f3b9c8]/50 dark:border-[#c2185b]/30 mb-4 sm:mb-5">
        <Sparkles size={13} className="text-[#c2185b] dark:text-[#f3b9c8]" />
        <span className="text-[11px] font-semibold tracking-wider text-[#c2185b] dark:text-[#f3b9c8] uppercase">
          The Job Application Journal
        </span>
      </div>

      {/* Main Editorial Heading */}
      <h1 className="font-instrument text-4xl sm:text-5xl md:text-6xl text-gray-900 dark:text-white font-medium tracking-tight leading-[1.08] mb-4">
        Jobs I&apos;ve Applied For.
      </h1>

      {/* Subtitle / Description */}
      <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed mb-6">
        A curated personal log of the positions I&apos;m actively applying to.
        Sharing the links directly so students, fresh graduates, and peers can discover and apply to the same opportunities.
      </p>

      {/* Live Status and Job Count Badges */}
      <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 text-xs">
        {/* Dynamic Job Counter */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.06] dark:border-white/[0.08] text-gray-700 dark:text-gray-200">
          <span className="font-mono font-semibold text-gray-900 dark:text-white">
            {totalJobs}
          </span>
          <span className="text-gray-500 dark:text-gray-400">
            {totalJobs === 1 ? "opportunity shared" : "opportunities shared"}
          </span>
        </div>

        {/* Live Active Indicator */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/60 dark:border-emerald-800/40 text-emerald-800 dark:text-emerald-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="font-medium text-[11px] sm:text-xs">
            Updated as I apply
          </span>
        </div>
      </div>
    </section>
  );
}

