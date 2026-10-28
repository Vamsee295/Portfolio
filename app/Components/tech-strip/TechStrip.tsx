"use client";

const items = [
  "AI / ML",
  "AI AGENTS",
  "SOFTWARE ENGINEERING",
  "DATA",
  "JAVA",
  "PYTHON",
  "SQL",
  "REACT",
  "TYPESCRIPT",
  "SPRING BOOT",
  "MACHINE LEARNING",
  "LLMs",
  "VISION",
];

function Strip({ reverse, className }: { reverse?: boolean; className: string }) {
  // Two copies so the -50% translate loops seamlessly.
  const track = [...items, ...items];
  return (
    <div className={`relative -mx-[5vw] w-[110vw] overflow-hidden border-y-[2.5px] border-ink py-3 ${className}`}>
      <div className="marquee-track" style={reverse ? { animationDirection: "reverse", animationDuration: "40s" } : undefined}>
        {track.map((item, i) => (
          <span key={i} className="flex shrink-0 items-center gap-6 px-6 font-display text-2xl uppercase whitespace-nowrap select-none sm:text-3xl">
            {item}
            <span aria-hidden className="text-xl">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function TechStrip() {
  return (
    <section aria-label="Technology focus areas" className="relative overflow-hidden py-12">
      <Strip reverse className="absolute left-0 top-1/2 -translate-y-1/2 rotate-[2.5deg] bg-accent text-paper" />
      <Strip className="-rotate-[1.5deg] bg-ink text-paper shadow-[0_6px_0_rgba(25,22,20,0.15)]" />
    </section>
  );
}
