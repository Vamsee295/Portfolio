"use client";

import { motion, useReducedMotion } from "framer-motion";
import { profile } from "../../data/profile";
import { Marked, Reveal, ease } from "../common/motion";

const EXPLORING = ["AI agents", "Local LLMs", "Machine learning", "Developer tools", "Data systems"];

const PHILOSOPHY = [
  { label: "Understand", desc: "Start with the problem." },
  { label: "Design", desc: "Build the simplest useful system." },
  { label: "Connect", desc: "Combine models, data and software." },
  { label: "Ship", desc: "Turn the idea into something usable." },
];

/** Hand-drawn wavy underline that draws itself when scrolled into view. */
function Scribble() {
  const still = useReducedMotion();
  return (
    <svg aria-hidden viewBox="0 0 300 20" preserveAspectRatio="none" className="absolute -bottom-[0.08em] left-0 h-[0.2em] w-full overflow-visible">
      <motion.path
        d="M3 12 C 40 3, 70 19, 110 10 S 180 3, 220 12 S 280 6, 297 9"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="7"
        strokeLinecap="round"
        initial={still ? false : { pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.35, ease }}
      />
    </svg>
  );
}

export default function About() {
  const still = useReducedMotion();

  return (
    <section id="about" aria-labelledby="about-heading" className="relative mx-auto max-w-[1180px] px-[clamp(18px,4vw,40px)] py-28">
      <Reveal>
        <p className="font-mono text-xs tracking-[0.2em] text-[var(--mute)]">02 / ABOUT VAMSEE</p>
        <h2 id="about-heading" className="mt-4 max-w-5xl font-display text-[clamp(2.6rem,6vw,5.4rem)] uppercase leading-[0.98] text-ink">
          I like building systems that make{" "}
          <span className="relative inline-block">
            complex
            <Scribble />
          </span>{" "}
          technology feel <Marked>simple.</Marked>
        </h2>
      </Reveal>

      <div className="mt-20 grid grid-cols-[minmax(0,1fr)] items-start gap-16 lg:grid-cols-[minmax(0,1fr)_380px]">
        <div>
          <Reveal className="space-y-5 text-[17px] leading-relaxed text-[var(--body)]">
            <p>{profile.about_description}</p>
            <p>{profile.about_secondary}</p>
          </Reveal>

          <Reveal className="mt-14" delay={0.1}>
            <p className="font-cond text-sm font-bold uppercase tracking-[0.14em] text-[var(--mute)]">How I approach building</p>
            <ol className="mt-5">
              {PHILOSOPHY.map((step, i) => (
                <li key={step.label} className="relative grid grid-cols-[64px_1fr] items-baseline gap-4 py-5">
                  <motion.span
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-0 origin-left border-t-2 border-dashed border-[var(--line)]"
                    initial={still ? false : { scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 + i * 0.12, ease }}
                  />
                  <span className="font-display text-4xl leading-none text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-display text-2xl uppercase leading-none text-ink">{step.label}</p>
                    <p className="mt-1.5 text-[var(--body)]">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="lg:pt-4">
          <div className="stk -rotate-2 p-7 transition-transform duration-300 hover:rotate-0">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] tracking-[0.2em] text-[var(--mute)]">ID / 2026</span>
              <span className="rounded-md border-2 border-ink bg-gold px-2 py-0.5 font-cond text-xs font-bold uppercase tracking-[0.1em] text-ink">Student</span>
            </div>
            <p className="mt-5 font-display text-5xl uppercase leading-none text-ink">Vamsee</p>
            <p className="mt-2 font-cond text-base font-bold uppercase tracking-[0.12em] text-[var(--body)]">{profile.role}</p>
            <p className="font-mono text-xs tracking-[0.12em] text-[var(--mute)]">AI / ML · SOFTWARE · DATA</p>

            <div className="my-6 border-t-2 border-dashed border-[var(--line)]" />

            <p className="font-cond text-sm font-bold uppercase tracking-[0.14em] text-[var(--mute)]">Currently exploring</p>
            <ul className="mt-4 space-y-2.5">
              {EXPLORING.map((item, i) => (
                <li key={item} className="flex items-center gap-3 font-mono text-sm text-ink">
                  <motion.span
                    aria-hidden
                    className="grid h-5 w-5 shrink-0 place-items-center rounded-md border-2 border-ink text-[11px] font-bold"
                    initial={still ? false : { backgroundColor: "rgba(0,0,0,0)", color: "rgba(0,0,0,0)" }}
                    whileInView={{ backgroundColor: "#7CC9B2", color: "#191614" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.18, duration: 0.2 }}
                  >
                    ✓
                  </motion.span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-6 rotate-1 text-right font-hand text-2xl text-[var(--teal)]">always shipping something ↑</p>
        </Reveal>
      </div>
    </section>
  );
}
