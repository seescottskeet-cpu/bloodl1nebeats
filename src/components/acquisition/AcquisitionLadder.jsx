import React from "react";
import { Link } from "react-router-dom";

const PAYHIP_BLOOD_OATH_URL = "https://payhip.com/bloodlinebeats";

export default function AcquisitionLadder({ onSelect }) {
  const handleSelect = (type) => {
    onSelect?.(type);
    document.getElementById("gateway")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="w-full px-4 md:px-8 py-12 md:py-20 border-t border-[#e5e4e2]/20">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 text-center">
          <span className="text-[10px] tracking-[0.15em] uppercase font-mono text-[#e5e4e2]/40 block mb-2">
            SEC_PROTOCOL_03 // ACQUISITION LADDER
          </span>
          <h2 className="font-heading font-extrabold text-2xl md:text-3xl tracking-[0.15em] uppercase text-[#e5e4e2] mb-2">
            THREE PATHS IN
          </h2>
          <p className="text-xs font-mono text-[#e5e4e2]/40">
            No leases. No streaming caps. No middlemen. Pick your clearance level.
          </p>
        </div>

        <div className="space-y-4">
          {/* Blood Oath */}
          <div className="border border-[#d4af37]/30 p-5 md:p-6 relative group hover:border-[#d4af37]/60 transition-colors">
            <span className="absolute -top-px -left-px w-3 h-3 border-t-2 border-l-2 border-[#d4af37]/60" />
            <span className="absolute -top-px -right-px w-3 h-3 border-t-2 border-r-2 border-[#d4af37]/60" />
            <span className="absolute -bottom-px -left-px w-3 h-3 border-b-2 border-l-2 border-[#d4af37]/60" />
            <span className="absolute -bottom-px -right-px w-3 h-3 border-b-2 border-r-2 border-[#d4af37]/60" />
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[10px] tracking-[0.15em] uppercase font-mono text-[#d4af37]/70">PROTOCOL 01</span>
                  <span className="text-[10px] font-mono text-[#e5e4e2]/20">//</span>
                  <span className="text-[10px] tracking-[0.15em] uppercase font-mono text-[#e5e4e2]/40">STANDARD ISSUE</span>
                </div>
                <h3 className="font-mono font-bold text-base md:text-lg tracking-[0.1em] uppercase text-[#d4af37] mb-2">
                  THE BLOOD OATH PROTOCOL
                </h3>
                <p className="text-xs md:text-sm font-mono text-[#e5e4e2]/60 leading-relaxed">
                  24-bit Master WAV. Instant deployment. Zero tags on the instrumental. Unlimited commercial
                  streaming — no caps, no tracking paperwork. 100% royalties. The Verbal Tax binds
                  you: your voice saying "Bloodline Beats" on the record activates the license.
                </p>
              </div>
              <div className="flex flex-col items-center md:items-end gap-3 shrink-0">
                <span className="font-heading font-extrabold text-3xl md:text-4xl text-[#d4af37]">$33</span>
                <div className="flex flex-col gap-2">
                  <a
                    href={PAYHIP_BLOOD_OATH_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 bg-[#d4af37] text-[#050505] font-mono text-xs tracking-[0.15em] uppercase font-bold hover:bg-[#050505] hover:text-[#d4af37] hover:outline hover:outline-1 hover:outline-[#d4af37] transition-none text-center"
                  >
                    BLOOD OATH — $33
                  </a>
                  <Link
                    to="/catalog"
                    className="px-6 py-2 text-[#d4af37]/60 font-mono text-[10px] tracking-[0.15em] uppercase hover:text-[#d4af37] transition-colors text-center"
                  >
                    ENTER ARMORY
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* The Coronation */}
          <div className="border border-[#8b0000]/40 p-5 md:p-6 relative group hover:border-[#8b0000]/70 transition-colors">
            <span className="absolute -top-px -left-px w-3 h-3 border-t-2 border-l-2 border-[#8b0000]" />
            <span className="absolute -top-px -right-px w-3 h-3 border-t-2 border-r-2 border-[#8b0000]" />
            <span className="absolute -bottom-px -left-px w-3 h-3 border-b-2 border-l-2 border-[#8b0000]" />
            <span className="absolute -bottom-px -right-px w-3 h-3 border-b-2 border-r-2 border-[#8b0000]" />
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[10px] tracking-[0.15em] uppercase font-mono text-[#ff4d4d]/70">PROTOCOL 02</span>
                  <span className="text-[10px] font-mono text-[#e5e4e2]/20">//</span>
                  <span className="text-[10px] tracking-[0.15em] uppercase font-mono text-[#e5e4e2]/40">ELEVATED CLEARANCE</span>
                </div>
                <h3 className="font-mono font-bold text-base md:text-lg tracking-[0.1em] uppercase text-[#ff4d4d] mb-2">
                  THE CORONATION
                </h3>
                <p className="text-xs md:text-sm font-mono text-[#e5e4e2]/60 leading-relaxed">
                  Full exclusive transfer. The module is scrubbed from the vault — nobody else deploys this
                  frequency again. Custom stem extraction on-demand post-agreement. No Verbal Tax. Make an
                  offer. Terms negotiated directly.
                </p>
              </div>
              <div className="flex flex-col items-center md:items-end gap-3 shrink-0">
                <span className="font-mono text-xs tracking-[0.2em] uppercase text-[#ff4d4d]/60">MAKE OFFER</span>
                <button
                  onClick={() => handleSelect("coronation")}
                  className="px-6 py-2.5 bg-[#8b0000] text-[#e5e4e2] font-mono text-xs tracking-[0.15em] uppercase font-bold hover:bg-[#050505] hover:text-[#ff4d4d] hover:outline hover:outline-1 hover:outline-[#8b0000] transition-none"
                >
                  CLAIM ASSET
                </button>
              </div>
            </div>
          </div>

          {/* The Conjuring */}
          <div className="border border-[#e5e4e2]/30 p-5 md:p-6 relative group hover:border-[#e5e4e2]/60 transition-colors bg-[#0a0a0a]">
            <span className="absolute -top-px -left-px w-3 h-3 border-t-2 border-l-2 border-[#e5e4e2]/40" />
            <span className="absolute -top-px -right-px w-3 h-3 border-t-2 border-r-2 border-[#e5e4e2]/40" />
            <span className="absolute -bottom-px -left-px w-3 h-3 border-b-2 border-l-2 border-[#e5e4e2]/40" />
            <span className="absolute -bottom-px -right-px w-3 h-3 border-b-2 border-r-2 border-[#e5e4e2]/40" />
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[10px] tracking-[0.15em] uppercase font-mono text-[#e5e4e2]/60">PROTOCOL 03</span>
                  <span className="text-[10px] font-mono text-[#e5e4e2]/20">//</span>
                  <span className="text-[10px] tracking-[0.15em] uppercase font-mono text-[#ff4d4d]/60">CLASSIFIED</span>
                </div>
                <h3 className="font-mono font-bold text-base md:text-lg tracking-[0.1em] uppercase text-[#e5e4e2] mb-2">
                  THE CONJURING
                </h3>
                <p className="text-xs md:text-sm font-mono text-[#e5e4e2]/60 leading-relaxed">
                  Custom fabrication from nothing. You bring the blueprint — BPM, key, mood, reference —
                  Bloodline manufactures the weapon. Full sonic architecture, sub-neural frequency design,
                  whatever the mission requires. Discretion is assumed.
                </p>
              </div>
              <div className="flex flex-col items-center md:items-end gap-3 shrink-0">
                <span className="font-mono text-xs tracking-[0.2em] uppercase text-[#e5e4e2]/40">INQUIRE</span>
                <button
                  onClick={() => handleSelect("conjuring")}
                  className="px-6 py-2.5 bg-[#e5e4e2] text-[#050505] font-mono text-xs tracking-[0.15em] uppercase font-bold hover:bg-[#050505] hover:text-[#e5e4e2] hover:outline hover:outline-1 hover:outline-[#e5e4e2] transition-none"
                >
                  SUBMIT BLUEPRINT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
