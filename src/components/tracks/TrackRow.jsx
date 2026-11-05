import React, { useState } from "react";
import { Play, Pause, Trash2, Pencil, ExternalLink } from "lucide-react";

const PAYHIP_BLOOD_OATH_URL = "https://payhip.com/bloodlinebeats";

export default function TrackRow({ track, index, isPlaying, onPlay, onStop, onInquire, audioRef, canManage, onDelete, onEdit }) {
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const handleTimeUpdate = () => {
    if (audioRef?.current) {
      setProgress(audioRef.current.currentTime);
      setDuration(audioRef.current.duration || 0);
    }
  };

  const formatTime = (s) => {
    if (!s || isNaN(s)) return "00:00";
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  };

  const idStr = String(index + 1).padStart(3, "0");

  return (
    <div
      className={`group relative border p-4 md:p-5 transition-colors ${
        isPlaying
          ? "border-[#8b0000] bg-[#8b0000]/[0.06] shadow-[0_0_25px_rgba(139,0,0,0.25)]"
          : "border-[#e5e4e2]/10 hover:border-[#e5e4e2]/40 bg-[#050505]"
      }`}
    >
      {/* Corner brackets */}
      <span className={`absolute -top-px -left-px w-3 h-3 border-t-2 border-l-2 transition-colors ${isPlaying ? "border-[#ff4d4d]" : "border-[#e5e4e2]/20 group-hover:border-[#d4af37]"}`} />
      <span className={`absolute -top-px -right-px w-3 h-3 border-t-2 border-r-2 transition-colors ${isPlaying ? "border-[#ff4d4d]" : "border-[#e5e4e2]/20 group-hover:border-[#d4af37]"}`} />
      <span className={`absolute -bottom-px -left-px w-3 h-3 border-b-2 border-l-2 transition-colors ${isPlaying ? "border-[#ff4d4d]" : "border-[#e5e4e2]/20 group-hover:border-[#d4af37]"}`} />
      <span className={`absolute -bottom-px -right-px w-3 h-3 border-b-2 border-r-2 transition-colors ${isPlaying ? "border-[#ff4d4d]" : "border-[#e5e4e2]/20 group-hover:border-[#d4af37]"}`} />

      {/* Top metadata row */}
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-3 text-[11px] md:text-xs tracking-[0.15em] uppercase font-mono">
        <span className="text-[#d4af37]/60">ID_{idStr}</span>
        <span className="text-[#e5e4e2] font-bold text-sm md:text-base tracking-[0.1em]">{track.title}</span>
        {track.bpm ? <span className="text-[#e5e4e2]/50">{track.bpm} BPM</span> : null}
        {track.key ? <span className="text-[#e5e4e2]/50">KEY: {track.key}</span> : null}
        {track.genre ? <span className="text-[#e5e4e2]/50">CLASS: {track.genre}</span> : null}
        {isPlaying && (
          <span className="flex items-center gap-1.5 text-[#ff4d4d] ml-auto">
            <span className="w-1.5 h-1.5 bg-[#ff4d4d] blink-anim inline-block" />
            LIVE FEED
          </span>
        )}
      </div>

      {/* Player row */}
      <div className="flex items-center gap-3 mb-4">
        <button
          onClick={() => (isPlaying ? onStop() : onPlay(track))}
          className={`w-10 h-10 border flex items-center justify-center flex-shrink-0 transition-colors ${
            isPlaying
              ? "border-[#ff4d4d] bg-[#8b0000] text-[#e5e4e2]"
              : "border-[#8b0000] text-[#ff4d4d] hover:bg-[#8b0000] hover:text-[#e5e4e2]"
          }`}
          aria-label={isPlaying ? "Stop" : "Play"}
        >
          {isPlaying ? <Pause size={16} /> : <Play size={16} />}
        </button>

        {/* Progress bar */}
        <div className="flex-1 flex items-center gap-2">
          <span className="text-[10px] font-mono text-[#e5e4e2]/40 w-10 text-right">{formatTime(isPlaying ? progress : 0)}</span>
          <div className="flex-1 h-1 bg-[#e5e4e2]/10 relative overflow-hidden">
            <div
              className="h-full bg-[#8b0000] transition-all shadow-[0_0_8px_rgba(139,0,0,0.8)]"
              style={{ width: duration ? `${(progress / duration) * 100}%` : "0%" }}
            />
          </div>
          <span className="text-[10px] font-mono text-[#e5e4e2]/40 w-10">{formatTime(duration)}</span>
        </div>
      </div>

      {isPlaying && (
        <audio
          ref={audioRef}
          src={track.audio_url}
          autoPlay
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleTimeUpdate}
          onEnded={onStop}
          className="hidden"
        />
      )}

      {/* Action buttons */}
      <div className="flex flex-wrap gap-3">
        <a
          href={PAYHIP_BLOOD_OATH_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 bg-[#d4af37] text-[#050505] font-mono text-xs tracking-[0.15em] uppercase font-bold border-none hover:bg-[#050505] hover:text-[#d4af37] hover:outline hover:outline-1 hover:outline-[#d4af37] transition-none inline-flex items-center gap-2"
        >
          BLOOD OATH — $33
          <ExternalLink size={12} />
        </a>
        <button
          onClick={() => onInquire(track.title)}
          className="px-5 py-2.5 bg-[#8b0000] text-[#e5e4e2] font-mono text-xs tracking-[0.15em] uppercase font-bold border-none hover:bg-[#050505] hover:text-[#ff4d4d] hover:outline hover:outline-1 hover:outline-[#8b0000] transition-none"
        >
          CORONATION — MAKE OFFER
        </button>
        {canManage && (
          <div className="ml-auto flex items-center gap-2">
            <button
              onClick={() => onEdit(track)}
              className="w-10 h-10 border border-[#e5e4e2]/20 text-[#e5e4e2]/40 flex items-center justify-center hover:border-[#d4af37] hover:text-[#d4af37] transition-colors"
              aria-label="Edit track"
            >
              <Pencil size={14} />
            </button>
            <button
              onClick={() => onDelete(track)}
              className="w-10 h-10 border border-[#e5e4e2]/20 text-[#e5e4e2]/40 flex items-center justify-center hover:border-[#ff4d4d] hover:text-[#ff4d4d] transition-colors"
              aria-label="Delete track"
            >
              <Trash2 size={14} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
