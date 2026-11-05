import React, { useState, useEffect } from "react";

const STAGED_EVENTS = [
  { module: "004", type: "BLOOD OATH", status: "CLEARED", category: "oath" },
  { module: "007", type: "CORONATION", status: "SCRUBBED FROM GRID", category: "coronation" },
  { module: "012", type: "BLOOD OATH", status: "CLEARED", category: "oath" },
  { module: "003", type: "CONJURING", status: "DEPLOYED", category: "conjuring" },
  { module: "009", type: "BLOOD OATH", status: "CLEARED", category: "oath" },
  { module: "001", type: "CORONATION", status: "SCRUBBED FROM GRID", category: "coronation" },
  { module: "015", type: "BLOOD OATH", status: "CLEARED", category: "oath" },
  { module: "006", type: "CONJURING", status: "DEPLOYED", category: "conjuring" },
  { module: "011", type: "BLOOD OATH", status: "CLEARED", category: "oath" },
  { module: "002", type: "CORONATION", status: "SCRUBBED FROM GRID", category: "coronation" },
];

function genTime() {
  const h = String(Math.floor(Math.random() * 24)).padStart(2, "0");
  const m = String(Math.floor(Math.random() * 60)).padStart(2, "0");
  const s = String(Math.floor(Math.random() * 60)).padStart(2, "0");
  return `${h}:${m}:${s}`;
}

export default function AcquisitionTicker() {
  const [events, setEvents] = useState(() =>
    STAGED_EVENTS.slice(0, 4).map((e, i) => ({ ...e, time: genTime(), id: i }))
  );
  const [counter, setCounter] = useState(4);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((c) => {
        const next = c + 1;
        setEvents((prev) => {
          const evt = { ...STAGED_EVENTS[c % STAGED_EVENTS.length], time: genTime(), id: next };
          return [evt, ...prev].slice(0, 4);
        });
        return next;
      });
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const colorFor = (cat) =>
    cat === "coronation" ? "text-[#ff4d4d]/80" : cat === "conjuring" ? "text-[#e5e4e2]/70" : "text-[#e5e4e2]/50";

  return (
    <section className="w-full border-t border-b border-[#e5e4e2]/20 bg-[#0a0a0a] overflow-hidden">
      <div className="px-4 md:px-8 py-3 flex items-center gap-4">
        <span className="text-[10px] tracking-[0.15em] uppercase font-mono text-[#ff4d4d]/70 whitespace-nowrap flex items-center gap-2 shrink-0">
          <span className="w-1.5 h-1.5 bg-[#ff4d4d] blink-anim inline-block" />
          LAST ACQUISITION
        </span>
        <span className="text-[#e5e4e2]/20 text-[10px] font-mono shrink-0">//</span>
        <div className="flex-1 min-w-0 overflow-hidden">
          <div className="flex flex-col gap-1">
            {events.map((event, i) => (
              <div
                key={event.id}
                className="text-[10px] tracking-[0.1em] uppercase font-mono flex items-center gap-3 transition-opacity"
                style={{ opacity: 1 - i * 0.25 }}
              >
                <span className="text-[#d4af37]/60">MODULE_{event.module}</span>
                <span className="text-[#e5e4e2]/20">//</span>
                <span className={colorFor(event.category)}>
                  {event.type} // {event.status}
                </span>
                <span className="text-[#e5e4e2]/20">//</span>
                <span className="text-[#e5e4e2]/20">{event.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}