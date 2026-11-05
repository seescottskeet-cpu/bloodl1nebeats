import React, { useRef, useEffect } from "react";

export default function Telemetry({ isActive }) {
  const canvasRef = useRef(null);
  const frameRef = useRef(null);
  const barsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = canvas.offsetWidth * 2;
      canvas.height = canvas.offsetHeight * 2;
      ctx.scale(2, 2);
    };
    resize();
    window.addEventListener("resize", resize);

    const barCount = 64;
    if (barsRef.current.length === 0) {
      barsRef.current = Array.from({ length: barCount }, () => Math.random() * 0.3);
    }

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      const barW = w / barCount;

      for (let i = 0; i < barCount; i++) {
        if (isActive) {
          barsRef.current[i] += (Math.random() - 0.45) * 0.08;
          barsRef.current[i] = Math.max(0.05, Math.min(1, barsRef.current[i]));
        } else {
          barsRef.current[i] *= 0.96;
          barsRef.current[i] = Math.max(0.02, barsRef.current[i]);
        }

        const barH = barsRef.current[i] * h * 0.85;
        const x = i * barW;
        const y = h - barH;

        const intensity = barsRef.current[i];
        if (intensity > 0.7) {
          ctx.fillStyle = "rgba(139, 0, 0, 0.9)";
        } else if (intensity > 0.4) {
          ctx.fillStyle = "rgba(229, 228, 226, 0.6)";
        } else {
          ctx.fillStyle = "rgba(229, 228, 226, 0.2)";
        }

        ctx.fillRect(x + 1, y, barW - 2, barH);
      }

      // Grid overlay lines
      ctx.strokeStyle = "rgba(229, 228, 226, 0.05)";
      ctx.lineWidth = 1;
      for (let y = 0; y < h; y += 20) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      frameRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [isActive]);

  return (
    <section className="w-full border-y border-[#e5e4e2]/20 bg-[#050505]">
      <div className="flex items-center justify-between px-4 md:px-8 py-2 border-b border-[#e5e4e2]/10">
        <span className="text-[10px] tracking-[0.15em] uppercase font-mono text-[#e5e4e2]/40">
          SEC_TELEMETRY_01 // FREQUENCY SPECTRUM
        </span>
        <span className="flex items-center gap-2 text-[10px] tracking-[0.15em] uppercase font-mono">
          <span className={`w-1.5 h-1.5 inline-block ${isActive ? "bg-[#ff4d4d] blink-anim" : "bg-[#e5e4e2]/20"}`} />
          <span className={isActive ? "text-[#ff4d4d]" : "text-[#e5e4e2]/30"}>
            {isActive ? "SIGNAL ACTIVE" : "STANDBY"}
          </span>
        </span>
      </div>
      <canvas
        ref={canvasRef}
        className="w-full h-32 md:h-48"
      />
    </section>
  );
}