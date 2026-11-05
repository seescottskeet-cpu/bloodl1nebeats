import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import ContactTicker from "@/components/layout/ContactTicker";
import RestrictedStrip from "@/components/restricted/RestrictedStrip";
import ThroneRoom from "@/components/throne/ThroneRoom";
import AcquisitionLadder from "@/components/acquisition/AcquisitionLadder";
import AcquisitionTicker from "@/components/acquisition/AcquisitionTicker";
import SovereignGateway from "@/components/gateway/SovereignGateway";
import Footer from "@/components/layout/Footer";
import { TRACKS } from "@/components/tracks/tracksData";

export default function Home() {
  const [injectedTrack, setInjectedTrack] = useState("");
  const [acquisitionType, setAcquisitionType] = useState("coronation");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const track = params.get("track");
    const acquisition = params.get("acquisition");
    if (track) setInjectedTrack(track);
    if (acquisition) setAcquisitionType(acquisition);
    if (track || acquisition) {
      setTimeout(() => {
        document.getElementById("gateway")?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  }, []);

  const handleAcquisitionSelect = (type) => {
    setAcquisitionType(type);
  };

  const count = TRACKS.length;

  return (
    <div className="scanlines min-h-screen bg-[#050505] text-[#e5e4e2] flex flex-col">
      <ContactTicker />
      <RestrictedStrip />
      <ThroneRoom />

      {/* VAULT SECTION */}
      <section className="w-full relative flex-1 flex items-center">
        <div className="relative z-10 w-full px-4 md:px-8 py-16 md:py-24 text-center">
          <span className="text-[10px] tracking-[0.15em] uppercase font-mono text-[#ff4d4d]/70 block mb-3">
            <span className="w-1.5 h-1.5 bg-[#ff4d4d] blink-anim inline-block mr-2 align-middle" />
            SHIPMENT 07 // FINAL FRAGMENT — CLEARS WHEN STOCKED OUT
          </span>
          <h2 className="tracking-[0.15em] uppercase text-[#e5e4e2] mb-4 font-bold text-4xl md:text-5xl font-heading">
            THE INFINIUM VAULT
          </h2>
          <p className="text-xs md:text-sm font-mono text-[#e5e4e2]/50 max-w-md mx-auto mb-2">
            {count} MODULE{count === 1 ? "" : "S"} REMAINING IN CIRCULATION
          </p>
          <p className="text-[10px] md:text-xs font-mono text-[#d4af37]/60 max-w-lg mx-auto mb-2 tracking-[0.15em] uppercase">
            BOTTOM OF THE BARREL. FIRST COME, FIRST SERVE.
          </p>
          <p className="text-[10px] md:text-xs font-mono text-[#e5e4e2]/40 max-w-md mx-auto mb-8 tracking-[0.1em] uppercase">
            WHEN THESE ARE GONE THE NEW SHIPMENT ROLLS IN. NO RESTOCKS. NO SECOND CHANCES.
          </p>
          <Link
            to="/catalog"
            className="inline-block px-10 py-4 bg-[#d4af37] text-[#050505] font-mono text-xs tracking-[0.2em] uppercase font-bold border-none hover:bg-[#050505] hover:text-[#d4af37] hover:outline hover:outline-1 hover:outline-[#d4af37] transition-none"
          >
            ENTER THE ARMORY
          </Link>
        </div>
      </section>

      <AcquisitionLadder onSelect={handleAcquisitionSelect} />
      <AcquisitionTicker />
      <SovereignGateway injectedTrack={injectedTrack} acquisitionType={acquisitionType} />
      <Footer />
    </div>
  );
}
