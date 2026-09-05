"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { profile } from "../../data/profile";

// ─── Data ─────────────────────────────────────────────────────────────────────

const EXPLORING = [
  "AI AGENTS",
  "LOCAL LLMs",
  "MACHINE LEARNING",
  "DEVELOPER TOOLS",
  "DATA SYSTEMS",
];

const PHILOSOPHY = [
  { label: "UNDERSTAND", desc: "Start with the problem." },
  { label: "DESIGN",     desc: "Build the simplest useful system." },
  { label: "CONNECT",    desc: "Combine models, data and software." },
  { label: "SHIP",       desc: "Turn the idea into something usable." },
];

// ─── Shared fade-up variant ────────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-[#fafafa] border-t border-[#e5e7eb]"
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* ── Top bar: eyebrow label ── */}
        <div className="flex items-center justify-between mb-14">
          <motion.p
            {...fadeUp(0)}
            className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#2563eb] uppercase"
          >
            ABOUT
          </motion.p>
          <motion.p
            {...fadeUp(0.06)}
            className="text-[10px] font-mono tracking-[0.18em] text-[#94a3b8] uppercase hidden sm:block"
          >
            01&nbsp;/&nbsp;ABOUT VAMSEE
          </motion.p>
        </div>

        {/* ── Main statement headline — full width, dominant ── */}
        <motion.h2
          id="about-heading"
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.1, ease: "easeOut" }}
          className="text-[clamp(26px,4.5vw,52px)] font-black tracking-[-0.02em] leading-[1.1] text-[#0F172A] uppercase mb-16 max-w-3xl"
        >
          I LIKE BUILDING SYSTEMS THAT MAKE COMPLEX TECHNOLOGY FEEL SIMPLE.
        </motion.h2>

        {/* ── Asymmetric grid: 60 / 40 ── */}
        <div className="grid lg:grid-cols-[1fr_380px] gap-x-20 gap-y-16 items-start">

          {/* ────────────────── LEFT COLUMN ────────────────── */}
          <div className="flex flex-col gap-12">

            {/* Description paragraphs */}
            <div className="flex flex-col gap-5">
              <motion.p
                {...fadeUp(0.2)}
                className="text-[15px] text-[#475569] leading-[1.75]"
              >
                {profile.about_description}
              </motion.p>
              <motion.p
                {...fadeUp(0.28)}
                className="text-[15px] text-[#475569] leading-[1.75]"
              >
                {profile.about_secondary}
              </motion.p>
            </div>

            {/* ── Engineering philosophy ── */}
            <motion.div {...fadeUp(0.36)}>
              <p className="text-[10px] font-mono font-bold tracking-[0.22em] text-[#94a3b8] uppercase mb-6">
                HOW I APPROACH BUILDING
              </p>
              <div className="flex flex-col gap-5">
                {PHILOSOPHY.map((step, i) => (
                  <motion.div
                    key={step.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.45, delay: 0.42 + i * 0.07, ease: "easeOut" }}
                    className="flex gap-4 items-start"
                  >
                    {/* Number */}
                    <span className="font-mono text-[11px] font-bold text-[#2563eb] mt-0.5 w-5 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="font-mono text-[11px] font-bold tracking-[0.18em] text-[#0F172A] uppercase mb-0.5">
                        {step.label}
                      </p>
                      <p className="text-[13px] text-[#64748B]">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ────────────────── RIGHT COLUMN — identity block ── */}
          {/*
            Sits ~40px lower than the left column (pt-10) to create the
            intentional asymmetry that breaks the "generated grid" feel.
          */}
          <div className="flex flex-col gap-10 lg:pt-10">

            {/* Identity */}
            <motion.div {...fadeUp(0.22)}>
              <p className="text-[22px] font-black tracking-[-0.01em] text-[#0F172A] uppercase mb-1">
                VAMSEE
              </p>
              <p className="font-mono text-[11px] tracking-[0.2em] text-[#64748B] uppercase mb-1">
                COMPUTER SCIENCE STUDENT
              </p>
              <p className="font-mono text-[11px] tracking-[0.14em] text-[#94a3b8] uppercase">
                AI&nbsp;/&nbsp;ML&nbsp;·&nbsp;SOFTWARE&nbsp;·&nbsp;DATA
              </p>
            </motion.div>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={inView ? { scaleX: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.32, ease: "easeOut" }}
              className="h-px bg-[#e2e8f0] origin-left"
              aria-hidden="true"
            />

            {/* Currently Exploring */}
            <motion.div {...fadeUp(0.38)}>
              <p className="text-[10px] font-mono font-bold tracking-[0.22em] text-[#94a3b8] uppercase mb-5">
                CURRENTLY EXPLORING
              </p>
              <div className="flex flex-col gap-3">
                {EXPLORING.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.44 + i * 0.06, ease: "easeOut" }}
                    className="group flex items-center gap-4 cursor-default"
                    role="listitem"
                  >
                    {/* Numbered indicator */}
                    <span className="font-mono text-[11px] font-bold text-[#2563eb] w-5 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {/* Rule */}
                    <span
                      className="block h-px w-4 bg-[#cbd5e1] group-hover:w-6 group-hover:bg-[#2563eb] transition-all duration-200"
                      aria-hidden="true"
                    />
                    {/* Label */}
                    <span className="font-mono text-[11px] font-bold tracking-[0.16em] text-[#334155] uppercase group-hover:text-[#0F172A] transition-colors duration-200 group-hover:translate-x-1 inline-block transition-transform">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
