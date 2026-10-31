import React from "react";
import { ExternalLink, MapPin, Building2, MessageSquareText } from "lucide-react";
import { isValidUrl } from "../utils/jobUtils";

export default function JobCard({ job, index }) {
  const sequenceNumber = String(index + 1).padStart(2, "0");
  const hasValidLink = isValidUrl(job?.applicationUrl);
  const targetUrl = hasValidLink ? job.applicationUrl.trim() : null;

  return (
    <article className="group relative rounded-xl sm:rounded-2xl border border-black/[0.08] dark:border-white/[0.1] bg-white/70 dark:bg-[#121215]/70 p-4 sm:p-5 card-hover-effect hover:border-[#f3b9c8] dark:hover:border-[#c2185b]/50 hover:bg-white dark:hover:bg-[#161619] shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4">
        {/* Left side: Sequential Number + Job Info */}
        <div className="flex items-start gap-3 sm:gap-4 flex-1 min-w-0">
          {/* Sequential Number in Mono */}
          <span className="font-mono text-xs sm:text-sm font-semibold text-[#c2185b] dark:text-[#f3b9c8] bg-[#fdf0f4] dark:bg-[#25181f] px-2 py-0.5 rounded-md shrink-0 mt-0.5 select-none">
            {sequenceNumber}
          </span>

          <div className="flex-1 min-w-0">
            {/* Job Title */}
            <h3 className="font-sans font-semibold text-base sm:text-lg text-gray-900 dark:text-white leading-snug tracking-tight">
              {targetUrl ? (
                <a
                  href={targetUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#c2185b] dark:hover:text-[#f3b9c8] transition-colors focus:outline-none focus:underline"
                >
                  {job.title || "Untitled Position"}
                </a>
              ) : (
                <span>{job.title || "Untitled Position"}</span>
              )}
            </h3>

            {/* Company & Location Metadata */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1.5 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              {job.company && (
                <span className="inline-flex items-center gap-1.5 font-medium text-gray-800 dark:text-gray-200">
                  <Building2 size={13} className="text-gray-400 dark:text-gray-500 shrink-0" />
                  <span>{job.company}</span>
                </span>
              )}

              {job.company && job.location && (
                <span className="text-gray-300 dark:text-gray-600 select-none">•</span>
              )}

              {job.location && (
                <span className="inline-flex items-center gap-1 text-gray-500 dark:text-gray-400">
                  <MapPin size={13} className="text-gray-400 dark:text-gray-500 shrink-0" />
                  <span>{job.location}</span>
                </span>
              )}
            </div>

            {/* Optional Note */}
            {job.note && job.note.trim() && (
              <div className="mt-3 inline-flex items-start gap-1.5 text-xs text-gray-600 dark:text-gray-300 bg-black/[0.03] dark:bg-white/[0.04] px-2.5 py-1.5 rounded-lg border border-black/[0.04] dark:border-white/[0.06]">
                <MessageSquareText size={12} className="text-gray-400 shrink-0 mt-0.5" />
                <span className="italic leading-relaxed">{job.note.trim()}</span>
              </div>
            )}
          </div>
        </div>

        {/* Right side: Apply / View Job Action Link */}
        {targetUrl && (
          <div className="sm:self-center shrink-0 pt-1 sm:pt-0 pl-9 sm:pl-0">
            <a
              href={targetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-[#242424] hover:bg-black text-white dark:bg-white dark:text-black dark:hover:bg-gray-200 text-xs sm:text-sm font-medium shadow-xs transition-all duration-150 group-hover:bg-[#c2185b] dark:group-hover:bg-[#f3b9c8] dark:group-hover:text-black focus:outline-none focus:ring-2 focus:ring-[#c2185b]/40"
              aria-label={`View job opening for ${job.title || "position"} at ${job.company || "company"}`}
            >
              <span>View Job</span>
              <ExternalLink size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        )}
      </div>
    </article>
  );
}

