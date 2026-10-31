import React, { useState } from "react";
import { ExternalLink } from "lucide-react";
import {
  InstagramIcon,
  YoutubeIcon,
  GithubIcon,
  LinkedinIcon,
  GlobeIcon,
} from "./Icons";
import { siteConfig } from "../data/siteConfig";

export default function ProfileCard() {
  const [imgError, setImgError] = useState(false);

  // Available social platforms mapped to icons & labels
  const socialConfig = [
    {
      key: "portfolio",
      label: "Portfolio",
      icon: GlobeIcon,
      url: siteConfig.links?.portfolio,
    },
    {
      key: "instagram",
      label: "Instagram",
      icon: InstagramIcon,
      url: siteConfig.links?.instagram,
    },
    {
      key: "youtube",
      label: "YouTube",
      icon: YoutubeIcon,
      url: siteConfig.links?.youtube,
    },
    {
      key: "github",
      label: "GitHub",
      icon: GithubIcon,
      url: siteConfig.links?.github,
    },
    {
      key: "linkedin",
      label: "LinkedIn",
      icon: LinkedinIcon,
      url: siteConfig.links?.linkedin,
    },
  ];

  // Only render links that are configured and non-empty
  const activeSocials = socialConfig.filter((item) => Boolean(item.url && item.url.trim()));

  return (
    <aside
      aria-label="About Vamshi Mudiraj"
      className="w-full rounded-2xl sm:rounded-3xl border border-black/[0.08] dark:border-white/[0.1] bg-white/60 dark:bg-[#111114]/60 backdrop-blur-sm p-5 sm:p-6 shadow-xs"
    >
      {/* Profile Header: Avatar + Identity */}
      <div className="flex items-center gap-4 mb-4">
        {/* Avatar with Pink Ring */}
        <div className="relative shrink-0">
          <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full p-0.5 bg-white dark:bg-[#111113] ring-2 ring-[#F3B9C8] dark:ring-[#c2185b] overflow-hidden shadow-xs">
            {!imgError && siteConfig.avatarUrl ? (
              <img
                src={siteConfig.avatarUrl}
                alt={siteConfig.name}
                onError={() => setImgError(true)}
                className="w-full h-full rounded-full object-cover object-center bg-pink-50 dark:bg-zinc-800"
              />
            ) : (
              <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#c2185b] to-[#f3b9c8] flex items-center justify-center text-white font-bold text-lg select-none">
                VM
              </div>
            )}
          </div>
        </div>

        {/* Name & Role */}
        <div className="min-w-0">
          <div className="flex items-center gap-1.5">
            <h2 className="font-instrument text-xl sm:text-2xl font-bold text-gray-900 dark:text-white truncate">
              {siteConfig.name}
            </h2>
            {/* Blue Verified Badge */}
            <svg
              className="w-4 h-4 text-[#1D9BF0] fill-current shrink-0"
              viewBox="0 0 24 24"
              title="Verified Creator"
              aria-label="Verified"
            >
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg>
          </div>
          <p className="text-xs text-[#c2185b] dark:text-[#f3b9c8] font-medium leading-tight mt-0.5">
            {siteConfig.role}
          </p>
        </div>
      </div>

      {/* About Description */}
      <div className="space-y-2.5 text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed pb-4 border-b border-black/[0.06] dark:border-white/[0.08]">
        <p>{siteConfig.aboutBio}</p>
        {siteConfig.subBio && (
          <p className="text-gray-500 dark:text-gray-400 text-xs">
            {siteConfig.subBio}
          </p>
        )}
      </div>

      {/* Social & Reference Links */}
      {activeSocials.length > 0 && (
        <div className="pt-4">
          <div className="text-[11px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-2.5">
            Connect & Explore
          </div>
          <div className="flex flex-col gap-1.5">
            {activeSocials.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.key}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between px-3 py-2 rounded-xl text-xs sm:text-sm text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-colors focus:outline-none focus:ring-2 focus:ring-[#c2185b]/40"
                  aria-label={`Open ${siteConfig.name}'s ${item.label}`}
                >
                  <span className="flex items-center gap-2.5">
                    <Icon
                      size={15}
                      className="text-gray-500 dark:text-gray-400 group-hover:text-[#c2185b] dark:group-hover:text-[#f3b9c8] transition-colors"
                    />
                    <span className="font-medium">{item.label}</span>
                  </span>
                  <ExternalLink
                    size={13}
                    className="text-gray-400 opacity-60 group-hover:opacity-100 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-opacity"
                  />
                </a>
              );
            })}
          </div>
        </div>
      )}
    </aside>
  );
}
