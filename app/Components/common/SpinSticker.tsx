"use client";

import { useId } from "react";

/** Round orange sticker with text circling around a centre glyph. */
export default function SpinSticker({ text, glyph = "↗", className = "h-32 w-32 sm:h-36 sm:w-36" }: { text: string; glyph?: string; className?: string }) {
  const id = useId();
  return (
    <div className={`relative grid place-items-center rounded-full border-[2.5px] border-ink bg-accent text-paper shadow-[4px_5px_0_var(--ink)] ${className}`}>
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full animate-[spin_12s_linear_infinite]" aria-hidden>
        <defs>
          <path id={id} d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
        </defs>
        <text className="fill-[var(--paper)] font-cond text-[11.5px] font-bold tracking-[0.18em]">
          <textPath href={`#${id}`}>{text}</textPath>
        </text>
      </svg>
      <span className="font-display text-3xl" aria-hidden>{glyph}</span>
    </div>
  );
}
