import React from "react";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="scanlines min-h-screen bg-[#050505] text-[#e5e4e2] flex items-center justify-center p-6">
      <div className="text-center space-y-6">
        <div className="space-y-2">
          <h1 className="font-heading font-extrabold text-7xl tracking-[0.15em] uppercase text-[#e5e4e2]/10">
            404
          </h1>
          <div className="h-px w-16 bg-[#d4af37]/40 mx-auto" />
        </div>
        <div className="space-y-3">
          <h2 className="font-mono text-xl tracking-[0.15em] uppercase text-[#e5e4e2]/60">
            SIGNAL LOST
          </h2>
          <p className="font-mono text-sm text-[#e5e4e2]/40 leading-relaxed">
            This frequency does not exist in the vault.
          </p>
        </div>
        <div className="pt-6">
          <Link
            to="/"
            className="inline-block px-8 py-3 bg-[#d4af37] text-[#050505] font-mono text-xs tracking-[0.2em] uppercase font-bold hover:bg-[#050505] hover:text-[#d4af37] hover:outline hover:outline-1 hover:outline-[#d4af37] transition-none"
          >
            RETURN TO TERMINAL
          </Link>
        </div>
      </div>
    </div>
  );
}
