"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { profile } from "../../data/profile";
import { useViewMode } from "../../context/ViewModeContext";
import ProjectDeck from "./ProjectDeck";

const ease = [0.6, 0, 0.3, 1] as const;

// Each prompt types out, then the chip names the project that answers it.
const PROMPTS = [
  { text: "predict which students might drop out", chip: "EduRisk", color: "var(--accent)" },
  { text: "route a support ticket across 3 agents", chip: "Multi-Agent AI", color: "var(--teal)" },
  { text: "build a learning platform for coders", chip: "StudyHub", color: "var(--ink)" },
  { text: "forecast next quarter's sales", chip: "Labs", color: "var(--accent-d)" },
];

const scrollToWork = () => document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });

function PromptBar() {
  const still = useReducedMotion();
  const [idx, setIdx] = useState(0);
  const [typed, setTyped] = useState(still ? PROMPTS[0].text : "");
  const full = PROMPTS[idx].text;
  const done = typed === full;

  useEffect(() => {
    if (still) return;
    const t = done
      ? window.setTimeout(() => {
          setTyped("");
          setIdx((i) => (i + 1) % PROMPTS.length);
        }, 2200)
      : window.setTimeout(() => setTyped(full.slice(0, typed.length + 1)), 30 + Math.random() * 45);
    return () => window.clearTimeout(t);
  }, [typed, full, done, still]);

  return (
    <div className="stk flex items-center gap-3 px-4 py-3 sm:px-5">
      <span className="font-mono text-[var(--accent)]">&gt;</span>
      <p className="min-w-0 flex-1 truncate font-mono text-sm text-ink sm:text-[15px]" aria-live="off">
        {typed}
        <span className="caret ml-0.5 inline-block h-[1.05em] w-[0.5em] translate-y-[3px] bg-[var(--accent)]" />
      </p>
      <motion.button
        key={idx + String(done)}
        onClick={scrollToWork}
        initial={{ scale: done ? 0.7 : 1, opacity: done ? 0 : 0.35 }}
        animate={{ scale: 1, opacity: done ? 1 : 0.35 }}
        transition={{ type: "spring", stiffness: 420, damping: 18 }}
        style={{ background: PROMPTS[idx].color }}
        className="shrink-0 rounded-[9px] px-3 py-2 font-cond text-xs font-bold uppercase tracking-[0.1em] text-paper sm:text-sm"
        aria-label={`See ${PROMPTS[idx].chip}`}
      >
        {PROMPTS[idx].chip} ↓
      </motion.button>
    </div>
  );
}

function Line({ children, delay, className = "" }: { children: React.ReactNode; delay: number; className?: string }) {
  return (
    <span className={`block overflow-hidden pb-1 ${className}`}>
      <motion.span className="block" initial={{ y: "105%" }} animate={{ y: 0 }} transition={{ duration: 0.8, delay, ease }}>
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const mobile = useViewMode().effectiveMode === "mobile";

  return (
    <section id="hero" aria-label="Hero section" className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16">
      <div className={`relative z-10 mx-auto grid w-full grid-cols-[minmax(0,1fr)] max-w-[1180px] items-center gap-14 px-[clamp(18px,4vw,40px)] ${mobile ? "" : "lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]"}`}>
        <div>
          <motion.p
            className="-rotate-2 font-hand text-[clamp(1.4rem,2.4vw,1.9rem)] text-[var(--teal)]"
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            hi, i&apos;m vamsee — i turn models into products
          </motion.p>

          <h1
            className="mt-2 flex flex-col gap-1.5 sm:gap-2 font-display text-[clamp(3.6rem,9.5vw,8.4rem)] uppercase leading-[0.95] text-ink"
            aria-label={profile.tagline}
          >
            <Line delay={0.15}>I build</Line>
            <Line delay={0.27} className="-mx-[0.2em] px-[0.2em] py-[0.14em]">
              <span className="relative inline-block">
                <motion.span
                  aria-hidden
                  className="absolute -inset-x-[0.14em] -inset-y-[0.07em] origin-left -rotate-1 rounded-lg bg-accent"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.55, delay: 0.85, ease }}
                />
                <span className="relative text-paper">intelligent</span>
              </span>
            </Line>
            <Line delay={0.39}>software.</Line>
          </h1>

          <motion.p
            className="mt-6 max-w-[34rem] text-[17px] leading-relaxed text-[var(--body)]"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {profile.bio}
          </motion.p>

          <motion.div className="mt-8 max-w-[38rem]" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.75 }}>
            <PromptBar />
          </motion.div>

          <motion.div className="mt-8 flex flex-wrap items-center gap-4" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.9 }}>
            <button onClick={scrollToWork} className="btn-stk" aria-label="Explore selected projects">
              Explore my work <ArrowRight size={18} aria-hidden />
            </button>
            <Link
              href={profile.resume}
              className="btn-stk !bg-card !text-ink"
              aria-label="View Resume"
            >
              <FileText size={18} aria-hidden /> Resume
            </Link>
          </motion.div>
        </div>

        <motion.div
          className={`relative mx-auto w-[min(92%,440px)] ${mobile ? "" : "lg:mr-0"}`}
          initial={{ opacity: 0, y: 60, rotate: 8 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease }}
        >
          <ProjectDeck />
          <motion.span
            className="absolute -left-3 top-0 z-20 -rotate-6 rounded-2xl rounded-bl-sm border-[2.5px] border-ink bg-card px-4 py-2 font-hand text-xl text-ink shadow-[3px_4px_0_var(--ink)] sm:-left-10 sm:text-2xl"
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: -6 }}
            transition={{ delay: 1.3, type: "spring", stiffness: 380, damping: 14 }}
          >
            tap to shuffle →
          </motion.span>
          <motion.span
            className="absolute -right-2 top-[18%] z-20 rotate-6 rounded-lg border-[2.5px] border-ink bg-gold px-3 py-1.5 font-cond text-xs font-bold uppercase tracking-[0.1em] text-ink shadow-[3px_4px_0_var(--ink)] sm:-right-6 sm:text-sm"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.45, type: "spring", stiffness: 380, damping: 14 }}
          >
            Open to internships
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
}
