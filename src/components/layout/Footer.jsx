import React from "react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#e5e4e2]/20 px-4 md:px-8 py-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] tracking-[0.15em] uppercase font-mono text-[#e5e4e2]/30">
        <span>© {new Date().getFullYear()} BLOODLINE // UNLICENSED ARMS MANUFACTURER // ALL FREQUENCIES RESERVED</span>
        <div className="flex items-center gap-6">
          <a href="mailto:contactbloodlinebeats@gmail.com" className="hover:text-[#d4af37] transition-colors">
            contactbloodlinebeats@gmail.com
          </a>
          <a href="tel:16089848840" className="hover:text-[#d4af37] transition-colors">
            1-608-984-8840
          </a>
          <span className="text-[#e5e4e2]/15">BUILD: v4.1.0 // ARMS DEALER</span>
        </div>
      </div>
    </footer>
  );
}
