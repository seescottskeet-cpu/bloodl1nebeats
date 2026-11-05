import React, { useState, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import ContactTicker from "@/components/layout/ContactTicker";
import TrackRow from "@/components/tracks/TrackRow";
import Telemetry from "@/components/telemetry/Telemetry";
import LicensingTerms from "@/components/licensing/LicensingTerms";
import ClearanceOmega from "@/components/clearance/ClearanceOmega";
import RestrictedStrip from "@/components/restricted/RestrictedStrip";
import Footer from "@/components/layout/Footer";
import { TRACKS } from "@/components/tracks/tracksData";

export default function Catalog() {
  const [tracks] = useState(TRACKS);
  const [playingId, setPlayingId] = useState(null);
  const audioRef = useRef(null);

  const handlePlay = useCallback((track) => setPlayingId(track.id), []);
  const handleStop = useCallback(() => setPlayingId(null), []);
  const handleInquire = useCallback((trackTitle) => {
    window.location.href = `/?track=${encodeURIComponent(trackTitle)}&acquisition=coronation#gateway`;
  }, []);

  return (
    <div className="scanlines min-h-screen bg-[#050505] text-[#e5e4e2] flex flex-col">
      <ContactTicker />
      <RestrictedStrip />

      {/* Hero */}
      <section className="relative w-full border-b border-[#e5e4e2]/20 overflow-hidden">
        <div className="relative z-10 px-4 md:px-8 py-10 md:py-16">
          <Link to="/" className="inline-flex items-center gap-2 text-[10px] tracking-[0.15em] uppercase font-mono text-[#e5e4e2]/40 hover:text-[#d4af37] mb-6">
            <ArrowLeft size={12} /> BACK TO TERMINAL
          </Link>
          <div className="flex items-center gap-4 mb-4 flex-wrap">
            <span className="text-[10px] tracking-[0.15em] uppercase font-mono text-[#e5e4e2]/40">
              SEC_CATALOG_05 // FULL ASSET BROWSE
            </span>
            <span className="text-[10px] font-mono text-[#e5e4e2]/20">//</span>
            <span className="text-[10px] tracking-[0.15em] uppercase font-mono text-[#ff4d4d]/60">
              SHIPMENT 07 // FINAL FRAGMENT
            </span>
          </div>
          <h1 className="font-heading font-extrabold text-3xl md:text-5xl tracking-[0.15em] uppercase text-[#e5e4e2] mb-3">
            THE ARMORY
          </h1>
          <p className="text-xs md:text-sm font-mono text-[#e5e4e2]/50 max-w-lg mb-3">
            Browse every classified module currently cleared for preview. Press play, find your frequency,
            secure your acquisition.
          </p>
          <p className="text-[10px] md:text-xs font-mono text-[#d4af37]/60 max-w-lg tracking-[0.15em] uppercase">
            BOTTOM OF THE BARREL — FIRST COME, FIRST SERVE. WHEN THESE ARE GONE, THE NEW SHIPMENT ROLLS IN.
          </p>
        </div>
      </section>

      {/* Track list */}
      <section className="px-4 md:px-8 py-10 md:py-14">
        <div className="flex items-center justify-between mb-6">
          <span className="text-[10px] tracking-[0.15em] uppercase font-mono text-[#e5e4e2]/40">
            {tracks.length} MODULE{tracks.length === 1 ? "" : "S"} IN CIRCULATION
          </span>
          <span className="text-[10px] tracking-[0.15em] uppercase font-mono text-[#ff4d4d]/60">
            <span className="w-1.5 h-1.5 bg-[#ff4d4d] blink-anim inline-block mr-2 align-middle" />
            NO RESTOCKS
          </span>
        </div>

        {tracks.length === 0 ? (
          <div className="text-[10px] tracking-[0.15em] uppercase font-mono text-[#e5e4e2]/30 py-12 text-center border border-[#e5e4e2]/10">
            NO MODULES IN CIRCULATION.
          </div>
        ) : (
          <div className="space-y-3">
            {tracks.map((track, i) => (
              <TrackRow
                key={track.id}
                track={track}
                index={i}
                isPlaying={playingId === track.id}
                onPlay={handlePlay}
                onStop={handleStop}
                onInquire={handleInquire}
                audioRef={playingId === track.id ? audioRef : null}
                canManage={false}
              />
            ))}
          </div>
        )}
      </section>

      <Telemetry isActive={playingId !== null} />

      {/* Licensing + Warning */}
      <section className="px-4 md:px-8 py-10 md:py-14 space-y-6 max-w-4xl mx-auto w-full">
        <LicensingTerms />
        <ClearanceOmega />
      </section>

      <Footer />
    </div>
  );
}
