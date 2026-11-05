import React from "react";

export default function LicensingTerms() {
  return (
    <div className="relative border border-[#e5e4e2]/20 bg-[#050505] p-6 md:p-8">
      <span className="text-[10px] tracking-[0.15em] uppercase font-mono text-[#e5e4e2]/40 block mb-2">
        SEC_PROTOCOL_03 // ACQUISITION MODEL
      </span>
      <h3 className="font-heading font-extrabold text-lg md:text-xl tracking-[0.15em] uppercase text-[#e5e4e2] mb-2">
        THREE PATHS IN. NO BULLSHIT.
      </h3>
      <p className="text-xs font-mono text-[#e5e4e2]/40 mb-6 leading-relaxed">
        No $25 MP3. No $50 WAV. No $150 stem lease. No streaming caps. No confusing menus. Pick your clearance.
      </p>

      {/* Blood Oath */}
      <div className="border border-[#d4af37]/30 p-5 md:p-6 mb-5 relative">
        <span className="absolute -top-px -left-px w-3 h-3 border-t-2 border-l-2 border-[#d4af37]/60" />
        <span className="absolute -top-px -right-px w-3 h-3 border-t-2 border-r-2 border-[#d4af37]/60" />
        <span className="absolute -bottom-px -left-px w-3 h-3 border-b-2 border-l-2 border-[#d4af37]/60" />
        <span className="absolute -bottom-px -right-px w-3 h-3 border-b-2 border-r-2 border-[#d4af37]/60" />
        <div className="flex items-baseline justify-between mb-3">
          <div>
            <span className="text-[10px] tracking-[0.15em] uppercase font-mono text-[#d4af37]/70 block mb-1">
              PROTOCOL 01 // STANDARD ISSUE
            </span>
            <h4 className="font-mono font-bold text-sm md:text-base tracking-[0.1em] uppercase text-[#d4af37]">
              THE BLOOD OATH PROTOCOL
            </h4>
          </div>
          <span className="font-heading font-extrabold text-2xl md:text-3xl text-[#d4af37]">$33</span>
        </div>
        <p className="text-xs md:text-sm font-mono text-[#e5e4e2]/60 leading-relaxed mb-4">
          24-bit Master WAV. Instant deployment. Zero producer tags on the instrumental. Unlimited commercial
          streaming — no caps, no tracking paperwork. You keep 100% of your royalties.
        </p>
        <div className="border-t border-[#d4af37]/20 pt-3">
          <p className="text-[11px] md:text-xs font-mono text-[#e5e4e2]/50 leading-relaxed">
            <span className="text-[#d4af37] font-bold">THE VERBAL TAX:</span> To legally validate this
            license, you must record your own voice saying{" "}
            <span className="text-[#e5e4e2] font-bold">"Bloodline Beats"</span> somewhere in the vocal track
            — intro, hook, ad-lib, or lyrics. Non-compliance voids the license and triggers automated
            takedowns plus public blacklisting.
          </p>
        </div>
      </div>

      {/* The Coronation */}
      <div className="border border-[#8b0000]/40 p-5 md:p-6 mb-5 relative">
        <span className="absolute -top-px -left-px w-3 h-3 border-t-2 border-l-2 border-[#8b0000]" />
        <span className="absolute -top-px -right-px w-3 h-3 border-t-2 border-r-2 border-[#8b0000]" />
        <span className="absolute -bottom-px -left-px w-3 h-3 border-b-2 border-l-2 border-[#8b0000]" />
        <span className="absolute -bottom-px -right-px w-3 h-3 border-b-2 border-r-2 border-[#8b0000]" />
        <div className="flex items-baseline justify-between mb-3">
          <div>
            <span className="text-[10px] tracking-[0.15em] uppercase font-mono text-[#ff4d4d]/70 block mb-1">
              PROTOCOL 02 // ELEVATED CLEARANCE
            </span>
            <h4 className="font-mono font-bold text-sm md:text-base tracking-[0.1em] uppercase text-[#ff4d4d]">
              THE CORONATION
            </h4>
          </div>
          <span className="font-mono text-sm tracking-[0.2em] uppercase text-[#ff4d4d]/60">MAKE OFFER</span>
        </div>
        <p className="text-xs md:text-sm font-mono text-[#e5e4e2]/60 leading-relaxed mb-4">
          Full exclusive transfer. The module is scrubbed from the vault — nobody else deploys this frequency
          again. Custom trackout stems extracted on-demand post-agreement. No Verbal Tax. No obligations.
          Terms negotiated directly.
        </p>
        <div className="border-t border-[#8b0000]/30 pt-3">
          <p className="text-[11px] md:text-xs font-mono text-[#e5e4e2]/50 leading-relaxed">
            <span className="text-[#ff4d4d] font-bold">STEMS ON-DEMAND:</span> Trackout stems are extracted
            custom only after the agreement clears. Zero upfront prep, zero wasted labor — you pay, we build.
          </p>
        </div>
      </div>

      {/* The Conjuring */}
      <div className="border border-[#e5e4e2]/30 p-5 md:p-6 relative bg-[#0a0a0a]">
        <span className="absolute -top-px -left-px w-3 h-3 border-t-2 border-l-2 border-[#e5e4e2]/40" />
        <span className="absolute -top-px -right-px w-3 h-3 border-t-2 border-r-2 border-[#e5e4e2]/40" />
        <span className="absolute -bottom-px -left-px w-3 h-3 border-b-2 border-l-2 border-[#e5e4e2]/40" />
        <span className="absolute -bottom-px -right-px w-3 h-3 border-b-2 border-r-2 border-[#e5e4e2]/40" />
        <div className="flex items-baseline justify-between mb-3">
          <div>
            <span className="text-[10px] tracking-[0.15em] uppercase font-mono text-[#e5e4e2]/60 block mb-1">
              PROTOCOL 03 // CLASSIFIED
            </span>
            <h4 className="font-mono font-bold text-sm md:text-base tracking-[0.1em] uppercase text-[#e5e4e2]">
              THE CONJURING
            </h4>
          </div>
          <span className="font-mono text-sm tracking-[0.2em] uppercase text-[#e5e4e2]/40">INQUIRE</span>
        </div>
        <p className="text-xs md:text-sm font-mono text-[#e5e4e2]/60 leading-relaxed mb-4">
          Custom fabrication from nothing. You bring the blueprint — BPM, key, mood, reference tracks —
          Bloodline manufactures the weapon from scratch. Full sonic architecture, sub-neural frequency
          design, whatever the mission requires. Discretion is assumed.
        </p>
        <div className="border-t border-[#e5e4e2]/20 pt-3">
          <p className="text-[11px] md:text-xs font-mono text-[#e5e4e2]/50 leading-relaxed">
            <span className="text-[#e5e4e2] font-bold">FOR HIRE:</span> Bloodline operates as an unlicensed
            manufacturer of psychoacoustic sub-neural audio weaponry. If the mission requires a frequency
            that does not exist in the vault, it will be fabricated. Submit your blueprint via the gateway.
          </p>
        </div>
      </div>
    </div>
  );
}
