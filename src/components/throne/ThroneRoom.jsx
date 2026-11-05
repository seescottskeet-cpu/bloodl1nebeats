import React from "react";

export default function ThroneRoom() {
  return (
    <header className="w-full border-b border-[#e5e4e2]/20 relative">
      <span className="absolute top-2 right-3 text-[8px] tracking-[0.2em] uppercase font-mono text-[#e5e4e2]/[0.06] select-none pointer-events-none">
        MADISON
      </span>

      <div className="flex items-center justify-center py-6 md:py-10 px-4">
        <span className="hidden md:block w-px h-12 bg-[#e5e4e2]/30 mr-6" />
        <div className="text-center">
          <img
            src="/retouch_2026073021330126.png"
            alt="Bloodline Beats"
            className="h-28 md:h-40 lg:h-52 w-auto drop-shadow-[0_0_25px_rgba(139,0,0,0.45)] mx-auto"
          />
          <p className="mt-3 md:text-xs tracking-[0.2em] uppercase text-[#e5e4e2]/50 text-xs font-light text-center">
            [ INFINIUM RECORDINGS ]
          </p>
        </div>
        <span className="hidden md:block w-px h-12 bg-[#e5e4e2]/30 ml-6" />
      </div>
    </header>
  );
}
