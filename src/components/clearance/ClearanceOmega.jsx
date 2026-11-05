import React from "react";

export default function ClearanceOmega() {
  return (
    <div className="relative border border-[#8b0000]/50 bg-[#0a0a0a] p-6 md:p-8">
      <span className="absolute -top-px -left-px w-3 h-3 border-t-2 border-l-2 border-[#8b0000]" />
      <span className="absolute -top-px -right-px w-3 h-3 border-t-2 border-r-2 border-[#8b0000]" />
      <span className="absolute -bottom-px -left-px w-3 h-3 border-b-2 border-l-2 border-[#8b0000]" />
      <span className="absolute -bottom-px -right-px w-3 h-3 border-b-2 border-r-2 border-[#8b0000]" />

      <div className="flex items-center gap-3 mb-5">
        <span className="w-5 h-5 flex items-center justify-center bg-[#8b0000] text-[#e5e4e2] font-mono text-xs font-bold">!</span>
        <h3 className="font-heading font-extrabold text-sm md:text-base tracking-[0.15em] uppercase text-[#ff4d4d]">
          CLEARANCE OMEGA: TERMS OF ACQUISITION
        </h3>
      </div>

      <p className="text-xs md:text-sm font-mono text-[#e5e4e2]/70 leading-relaxed mb-4">
        This vault houses classified INFINIUM-GRADE psychoacoustic sub-neural audio weaponry of the AXCENSION
        Dynasty. Every transaction is an acquisition — not a purchase.{" "}
        <span className="text-[#e5e4e2] font-bold">Three paths in. No fourth option.</span>
      </p>

      <p className="text-xs md:text-sm font-mono text-[#e5e4e2]/70 leading-relaxed mb-4">
        <span className="text-[#d4af37] font-bold">BLOOD OATH ($33):</span> Standard-issue munition. One 24-bit
        Master WAV, untagged, uncapped. The Verbal Tax is your activation code — your voice saying "Bloodline
        Beats" on the record is the only thing standing between you and a voided license.
      </p>

      <p className="text-xs md:text-sm font-mono text-[#e5e4e2]/70 leading-relaxed mb-4">
        <span className="text-[#ff4d4d] font-bold">CORONATION (MAKE OFFER):</span> Full exclusive transfer.
        The module is permanently scrubbed from the grid. Custom stem extraction on-demand post-agreement.
        No Verbal Tax. Nobody else deploys this frequency again.
      </p>

      <p className="text-xs md:text-sm font-mono text-[#e5e4e2]/70 leading-relaxed mb-6">
        <span className="text-[#e5e4e2] font-bold">CONJURING (INQUIRE):</span> Custom fabrication from
        nothing. If the mission requires a frequency that does not exist in the vault, Bloodline manufactures
        it from scratch. Submit your blueprint. Terms negotiated directly.
      </p>

      <div className="border-t border-[#8b0000]/30 pt-5 text-center">
        <p className="text-[11px] md:text-xs font-mono font-bold tracking-[0.15em] uppercase text-[#e5e4e2] mb-2">
          WARNING: AUDIO EXTRACTION PROTOCOL ACTIVE.
        </p>
        <p className="text-[11px] md:text-xs font-mono text-[#ff4d4d]/80 leading-relaxed">
          All public auditory feeds in this vault are weaponized previews. They are intentionally degraded,
          frequency-capped, and structurally embedded with architectonic tracking tags and visceral audio
          disruptions. Unauthorized extraction or "ripping" of these modules will result in unusable,
          psychoacoustically compromised and sonically deteriorated digital numericals. Inquire for more info.
        </p>
      </div>
    </div>
  );
}