import React from "react";
import { siteConfig } from "../data/siteConfig";
import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-black/[0.06] dark:border-white/[0.08] mt-16 sm:mt-24 py-8 bg-transparent transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 dark:text-gray-400">
        {/* Left Side: Brand & Disclaimer */}
        <div className="text-center sm:text-left space-y-1">
          <p className="font-medium text-gray-700 dark:text-gray-300">
            {siteConfig.brandName} — {siteConfig.brandTagline}
          </p>
          <p className="text-[11px] text-gray-400 dark:text-gray-500">
            A personal application archive. Application links redirect directly to external career sites.
          </p>
        </div>

        {/* Right Side: Creator attribution */}
        <div className="flex items-center gap-1.5">
          <span>Curated with</span>
          <Heart size={12} className="text-[#c2185b] dark:text-[#f3b9c8] fill-current" />
          <span>by</span>
          <a
            href={siteConfig.links.portfolio || "https://vamshionweb.vercel.app/"}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-gray-800 dark:text-gray-200 hover:text-[#c2185b] dark:hover:text-[#f3b9c8] underline underline-offset-2 transition-colors"
          >
            {siteConfig.name}
          </a>
          <span>© {currentYear}</span>
        </div>
      </div>
    </footer>
  );
}

