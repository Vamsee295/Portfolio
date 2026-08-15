"use client";

const items = [
  "VISION",
  "SPRING BOOT",
  "AI / ML",
  "AI AGENTS",
  "SOFTWARE ENGINEERING",
  "DATA",
  "JAVA",
  "PYTHON",
  "SQL",
  "REACT",
  "TYPESCRIPT",
  "MACHINE LEARNING",
  "LLMs",
  "GITHUB",
];

function MarqueeItem({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-4 px-6 text-[11px] font-mono font-medium tracking-[0.14em] text-[#6b7280] uppercase whitespace-nowrap select-none flex-shrink-0">
      {label}
      <span
        className="inline-block w-1 h-1 rounded-full bg-[#2563eb] opacity-50 flex-shrink-0"
        aria-hidden="true"
      />
    </span>
  );
}

export default function TechStrip() {
  // Triple duplication ensures seamless loop at all viewport widths
  const track = [...items, ...items, ...items];

  return (
    <section
      className="py-5 border-y border-[#e5e7eb] bg-[#fafafa] marquee-container"
      aria-label="Technology focus areas"
    >
      {/* marquee-track uses the CSS class we defined in globals.css */}
      <div className="marquee-track" role="list">
        {track.map((item, i) => (
          <span key={`${item}-${i}`} role="listitem">
            <MarqueeItem label={item} />
          </span>
        ))}
      </div>
    </section>
  );
}

