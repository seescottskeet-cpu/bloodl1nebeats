import React, { useState, useRef } from "react";

export default function RestrictedStrip() {
  const [password, setPassword] = useState("");
  const [denied, setDenied] = useState(false);
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!password) return;
    setDenied(true);
    setPassword("");
    setTimeout(() => {
      setDenied(false);
      inputRef.current?.focus();
    }, 2500);
  };

  return (
    <div className="sticky top-0 z-50 w-full bg-[#050505] border-b border-[#8b0000]/60">
      <div className="flex items-center justify-center gap-3 px-4 py-2">
        <span className="w-1.5 h-1.5 bg-[#ff4d4d] blink-anim inline-block shrink-0" />

        {denied ? (
          <span className="text-[10px] tracking-[0.2em] uppercase font-mono whitespace-nowrap">
            <span className="text-[#e5e4e2]/40">UNAUTHORIZED</span>
            <span className="text-[#e5e4e2]/20"> // </span>
            <span className="text-[#ff4d4d]">ACCESS DENIED</span>
          </span>
        ) : (
          <form onSubmit={handleSubmit} className="flex items-center gap-3">
            <span className="text-[10px] tracking-[0.2em] uppercase font-mono text-[#e5e4e2]/40 whitespace-nowrap">
              RESTRICTED AREA
            </span>
            <span className="text-[#e5e4e2]/20 text-[10px] font-mono">//</span>
            <input
              ref={inputRef}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="ENTER CLEARANCE CODE"
              className="bg-transparent border-b border-[#e5e4e2]/20 text-[10px] tracking-[0.15em] uppercase font-mono text-[#e5e4e2] placeholder:text-[#e5e4e2]/15 focus:border-[#8b0000] focus:outline-none w-40 md:w-56 px-1 py-0.5"
            />
            <button
              type="submit"
              className="text-[10px] tracking-[0.2em] uppercase font-mono text-[#e5e4e2]/40 hover:text-[#ff4d4d] transition-colors"
            >
              SUBMIT
            </button>
          </form>
        )}
      </div>
    </div>
  );
}