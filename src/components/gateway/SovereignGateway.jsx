import React, { useState, useEffect } from "react";

const CONTACT_EMAIL = "contactbloodlinebeats@gmail.com";
const CONTACT_PHONE = "1-608-984-8840";

export default function SovereignGateway({ injectedTrack, acquisitionType: initialType }) {
  const [acquisitionType, setAcquisitionType] = useState(initialType || "coronation");
  const [form, setForm] = useState({
    legalName: "",
    artistAlias: "",
    email: "",
    offerAmount: "",
    trackReference: "",
    bpm: "",
    key: "",
    mood: "",
    referenceTracks: "",
    vision: "",
  });
  const [transmitting, setTransmitting] = useState(false);
  const [transmitted, setTransmitted] = useState(false);

  useEffect(() => {
    if (injectedTrack) {
      setForm((prev) => ({ ...prev, trackReference: injectedTrack }));
    }
  }, [injectedTrack]);

  useEffect(() => {
    if (initialType) {
      setAcquisitionType(initialType);
    }
  }, [initialType]);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTransmitting(true);

    const isCoronation = acquisitionType === "coronation";
    const subject = isCoronation
      ? `[CORONATION] Asset Inquiry: ${form.artistAlias || form.legalName}`
      : `[CONJURING] Fabrication Blueprint: ${form.artistAlias || form.legalName}`;

    const body = isCoronation
      ? `Legal Name: ${form.legalName}\nArtist Alias: ${form.artistAlias}\nEmail: ${form.email}\nAcquisition Type: CORONATION\nTrack Reference: ${form.trackReference}\nOffer Amount: ${form.offerAmount}\n\nDeployment Vision:\n${form.vision}`
      : `Legal Name: ${form.legalName}\nArtist Alias: ${form.artistAlias}\nEmail: ${form.email}\nAcquisition Type: CONJURING\nBPM: ${form.bpm}\nKey: ${form.key}\nMood: ${form.mood}\nReference Tracks: ${form.referenceTracks}\n\nFabrication Blueprint:\n${form.vision}`;

    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;

    setTransmitting(false);
    setTransmitted(true);
    setTimeout(() => setTransmitted(false), 4000);
  };

  return (
    <section id="gateway" className="w-full border-t border-[#e5e4e2]/20 relative overflow-hidden">
      <div className="relative z-10 px-4 md:px-8 py-12 md:py-20">
        <div className="mb-8 text-[10px] tracking-[0.15em] uppercase font-mono text-[#e5e4e2]/40">
          SEC_GATEWAY_04 // SECURE COMMS CHANNEL
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-4 flex flex-col justify-center">
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl xl:text-5xl tracking-[0.1em] uppercase text-[#e5e4e2]/10 leading-none mb-4">
              TERMINATE THE GRID
            </h2>
            <p className="text-sm md:text-base text-[#e5e4e2]/70 leading-relaxed max-w-md mt-4 lg:mt-8 font-mono">
              Bloodline operates as an unlicensed manufacturer and distributor of psychoacoustic sub-neural
              audio weaponry. No standard request is too irregular. If the mission requires a frequency that
              does not exist in the vault, it will be fabricated. Submit your blueprint. Terms negotiated
              directly. Discretion is assumed.
              <br /><br />
              Or call/text: {CONTACT_PHONE}
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="flex gap-3 mb-6">
              <button
                type="button"
                onClick={() => setAcquisitionType("coronation")}
                className={`flex-1 px-4 py-3 font-mono text-xs tracking-[0.15em] uppercase font-bold transition-none ${
                  acquisitionType === "coronation"
                    ? "bg-[#8b0000] text-[#e5e4e2] border border-[#8b0000]"
                    : "bg-transparent text-[#e5e4e2]/40 border border-[#e5e4e2]/20 hover:border-[#8b0000]/60 hover:text-[#ff4d4d]/70"
                }`}
              >
                THE CORONATION
              </button>
              <button
                type="button"
                onClick={() => setAcquisitionType("conjuring")}
                className={`flex-1 px-4 py-3 font-mono text-xs tracking-[0.15em] uppercase font-bold transition-none ${
                  acquisitionType === "conjuring"
                    ? "bg-[#e5e4e2] text-[#050505] border border-[#e5e4e2]"
                    : "bg-transparent text-[#e5e4e2]/40 border border-[#e5e4e2]/20 hover:border-[#e5e4e2]/60 hover:text-[#e5e4e2]/70"
                }`}
              >
                THE CONJURING
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[10px] tracking-[0.15em] uppercase font-mono text-[#e5e4e2]/50 mb-2">LEGAL_NAME</label>
                  <input type="text" name="legalName" value={form.legalName} onChange={handleChange} required
                    className="w-full bg-transparent border border-[#e5e4e2]/20 px-4 py-3 text-sm font-mono text-[#e5e4e2] focus:border-[#d4af37] transition-colors placeholder:text-[#e5e4e2]/20"
                    placeholder="ENTER LEGAL NAME" />
                </div>
                <div>
                  <label className="block text-[10px] tracking-[0.15em] uppercase font-mono text-[#e5e4e2]/50 mb-2">ARTIST_ALIAS</label>
                  <input type="text" name="artistAlias" value={form.artistAlias} onChange={handleChange} required
                    className="w-full bg-transparent border border-[#e5e4e2]/20 px-4 py-3 text-sm font-mono text-[#e5e4e2] focus:border-[#d4af37] transition-colors placeholder:text-[#e5e4e2]/20"
                    placeholder="ENTER ALIAS" />
                </div>
                <div>
                  <label className="block text-[10px] tracking-[0.15em] uppercase font-mono text-[#e5e4e2]/50 mb-2">ACTIVE_EMAIL</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} required
                    className="w-full bg-transparent border border-[#e5e4e2]/20 px-4 py-3 text-sm font-mono text-[#e5e4e2] focus:border-[#d4af37] transition-colors placeholder:text-[#e5e4e2]/20"
                    placeholder="ENTER EMAIL" />
                </div>
              </div>

              {acquisitionType === "coronation" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] tracking-[0.15em] uppercase font-mono text-[#ff4d4d]/60 mb-2">TARGET_MODULE</label>
                    <input type="text" name="trackReference" value={form.trackReference} onChange={handleChange}
                      placeholder="MODULE NAME / ID"
                      className="w-full bg-transparent border border-[#e5e4e2]/20 px-4 py-3 text-sm font-mono text-[#e5e4e2] focus:border-[#ff4d4d] transition-colors placeholder:text-[#e5e4e2]/20" />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.15em] uppercase font-mono text-[#ff4d4d]/60 mb-2">OFFER_AMOUNT</label>
                    <input type="text" name="offerAmount" value={form.offerAmount} onChange={handleChange} required
                      placeholder="ENTER OFFER ($)"
                      className="w-full bg-transparent border border-[#e5e4e2]/20 px-4 py-3 text-sm font-mono text-[#e5e4e2] focus:border-[#ff4d4d] transition-colors placeholder:text-[#e5e4e2]/20" />
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] tracking-[0.15em] uppercase font-mono text-[#e5e4e2]/50 mb-2">TARGET_BPM</label>
                    <input type="text" name="bpm" value={form.bpm} onChange={handleChange} placeholder="e.g. 140"
                      className="w-full bg-transparent border border-[#e5e4e2]/20 px-4 py-3 text-sm font-mono text-[#e5e4e2] focus:border-[#d4af37] transition-colors placeholder:text-[#e5e4e2]/20" />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.15em] uppercase font-mono text-[#e5e4e2]/50 mb-2">MUSICAL_KEY</label>
                    <input type="text" name="key" value={form.key} onChange={handleChange} placeholder="e.g. F# MINOR"
                      className="w-full bg-transparent border border-[#e5e4e2]/20 px-4 py-3 text-sm font-mono text-[#e5e4e2] focus:border-[#d4af37] transition-colors placeholder:text-[#e5e4e2]/20" />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.15em] uppercase font-mono text-[#e5e4e2]/50 mb-2">MOOD / VIBE</label>
                    <input type="text" name="mood" value={form.mood} onChange={handleChange} placeholder="e.g. DARK, AGGRESSIVE"
                      className="w-full bg-transparent border border-[#e5e4e2]/20 px-4 py-3 text-sm font-mono text-[#e5e4e2] focus:border-[#d4af37] transition-colors placeholder:text-[#e5e4e2]/20" />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.15em] uppercase font-mono text-[#e5e4e2]/50 mb-2">REFERENCE_TRACKS</label>
                    <input type="text" name="referenceTracks" value={form.referenceTracks} onChange={handleChange} placeholder="e.g. ARTIST - SONG"
                      className="w-full bg-transparent border border-[#e5e4e2]/20 px-4 py-3 text-sm font-mono text-[#e5e4e2] focus:border-[#d4af37] transition-colors placeholder:text-[#e5e4e2]/20" />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-[10px] tracking-[0.15em] uppercase font-mono text-[#e5e4e2]/50 mb-2">
                  {acquisitionType === "coronation" ? "DEPLOYMENT_VISION" : "FABRICATION_BLUEPRINT"}
                </label>
                <textarea name="vision" value={form.vision} onChange={handleChange} required rows={5}
                  className="w-full bg-transparent border border-[#e5e4e2]/20 px-4 py-3 text-sm font-mono text-[#e5e4e2] focus:border-[#d4af37] transition-colors placeholder:text-[#e5e4e2]/20 resize-none"
                  placeholder={acquisitionType === "coronation" ? "DESCRIBE YOUR DEPLOYMENT PLAN FOR THIS ASSET" : "DESCRIBE THE WEAPON YOU NEED FABRICATED"} />
              </div>

              <div className="relative">
                {transmitting && (
                  <div className="absolute inset-0 flex items-center">
                    <div className="h-full w-full bg-[#e5e4e2]/5 relative overflow-hidden">
                      <div className="h-full bg-[#d4af37]/30 transmit-anim" />
                    </div>
                  </div>
                )}
                <button type="submit" disabled={transmitting}
                  className="relative z-10 w-full md:w-auto px-10 py-4 bg-[#d4af37] text-[#050505] font-mono text-xs tracking-[0.2em] uppercase font-bold border-none hover:bg-[#050505] hover:text-[#d4af37] hover:outline hover:outline-1 hover:outline-[#d4af37] transition-none disabled:opacity-50">
                  {transmitting ? "TRANSMITTING..." : transmitted ? "BLUEPRINT TRANSMITTED ✓" : acquisitionType === "coronation" ? "TRANSMIT OFFER" : "TRANSMIT BLUEPRINT"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
