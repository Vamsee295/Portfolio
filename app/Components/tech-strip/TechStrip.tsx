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
  "NEXT.JS",
  "MACHINE LEARNING",
  "LLMs",
  "COMPUTER VISION",
  "SPRING BOOT",
];

function MarqueeItem({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-4 px-6 text-sm font-mono font-medium tracking-[0.12em] text-[#6b7280] uppercase whitespace-nowrap select-none">
      {label}
      <span
        className="inline-block w-1 h-1 rounded-full bg-[#2563eb] opacity-60 flex-shrink-0"
        aria-hidden="true"
      />
    </span>
  );
}

export default function TechStrip() {
  // Duplicate items for seamless loop
  const duplicated = [...items, ...items];

  return (
    <section
      className="py-6 border-y border-[#e5e7eb] bg-[#fafafa] overflow-hidden marquee-container"
      aria-label="Technology focus areas"
    >
      <div
        className="flex animate-marquee"
        style={{ width: `${duplicated.length * 180}px` }}
      >
        {duplicated.map((item, i) => (
          <MarqueeItem key={`${item}-${i}`} label={item} />
        ))}
      </div>
    </section>
  );
}

