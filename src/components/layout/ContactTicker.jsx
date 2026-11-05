import React from "react";

const TICKER_ITEMS = [
  "CONTACT: contactbloodlinebeats@gmail.com",
  "HOTLINE: 1-608-984-8840",
  "TEXT NOW TO BE ENTERED IN THIS MONTH'S DRAWING",
  "THIS MONTH'S PRIZE PACK: 2 FREE HEAVY HITTER INSTRUMENTALS + MORE",
  "DRAWING HELD LAST DAY OF THE MONTH",
  "FIRST COME FIRST SERVE — SHIPMENT 07 FINAL FRAGMENT",
];

export default function ContactTicker() {
  const loop = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="sticky top-0 z-[60] w-full bg-[#0a0a0a] border-b border-[#d4af37]/30 overflow-hidden">
      <div className="flex items-center">
        <span className="shrink-0 px-3 py-1.5 bg-[#d4af37] text-[#050505] font-mono text-[9px] tracking-[0.2em] uppercase font-bold whitespace-nowrap">
          <span className="w-1.5 h-1.5 bg-[#8b0000] inline-block mr-1.5 align-middle" />
          LIVE FEED
        </span>
        <div className="flex-1 overflow-hidden relative">
          <div className="flex whitespace-nowrap py-1.5 marquee-scroll">
            {loop.map((item, i) => (
              <span
                key={i}
                className="text-[10px] tracking-[0.15em] uppercase font-mono text-[#e5e4e2]/60 px-6 shrink-0"
              >
                {item}
                <span className="text-[#d4af37]/40 ml-6">//</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
