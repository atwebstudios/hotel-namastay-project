import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-20 bg-[#f6faf6] text-center">
      <div className="max-w-xl mx-auto space-y-6">
        <span className="label-caps tracking-[0.2em] text-[#006951]">
          ERROR 404
        </span>

        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-[#006951] leading-tight">
          Looks Like You&apos;ve Taken a Wrong Turn.
        </h1>

        <p className="text-[#3e4944] text-base sm:text-lg max-w-md mx-auto leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Let us guide you back to familiar surroundings.
        </p>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto bg-[#006951] hover:bg-[#00513e] text-white px-7 py-3 rounded font-medium text-sm transition-all shadow-xs inline-flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto border border-[#bdc9c2] hover:bg-[#ebefeb] text-[#181d1b] px-7 py-3 rounded font-medium text-sm transition-colors inline-flex items-center justify-center"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
