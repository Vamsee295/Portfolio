"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import SpinSticker from "../common/SpinSticker";

interface HelloStartupProps {
  children: React.ReactNode;
}

const ease = [0.6, 0, 0.3, 1] as const;
const PROMPT = "boot vamsee.portfolio";
const STEPS = ["load models", "wire agents", "ship software"];

function Terminal({ still, onDone }: { still: boolean; onDone: () => void }) {
  const [typed, setTyped] = useState(still ? PROMPT : "");
  const [done, setDone] = useState(still ? STEPS.length : 0);

  useEffect(() => {
    if (still) {
      onDone();
      return;
    }
    let i = 0;
    let t: number;
    const tick = (n: number) => {
      setDone(n);
      if (n < STEPS.length) t = window.setTimeout(() => tick(n + 1), 260);
      else t = window.setTimeout(onDone, 500);
    };
    const type = () => {
      setTyped(PROMPT.slice(0, ++i));
      t = i < PROMPT.length ? window.setTimeout(type, 28 + Math.random() * 40) : window.setTimeout(() => tick(1), 300);
    };
    t = window.setTimeout(type, 700);
    return () => window.clearTimeout(t);
  }, [still, onDone]);

  return (
    <div className="w-[min(100%,22rem)] overflow-hidden rounded-2xl border-[2.5px] border-ink bg-night font-mono text-[13px] leading-relaxed text-[#EDE6DA] shadow-[5px_6px_0_var(--ink)]">
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-accent" />
        <span className="h-2.5 w-2.5 rounded-full bg-gold" />
        <span className="h-2.5 w-2.5 rounded-full bg-mint" />
        <span className="ml-2 text-[11px] text-white/40">vamsee — ~/portfolio</span>
      </div>
      <div className="px-4 py-3">
        <p className="text-[#EDE6DA]">
          <span className="text-[var(--accent-l)]">&gt;</span> {typed}
          <span className="caret ml-0.5 inline-block h-[1em] w-[0.55em] translate-y-[2px] bg-[var(--accent-l)]" />
        </p>
        <ul className="mt-2 space-y-1">
          {STEPS.map((s, i) => (
            <li key={s} className={`flex justify-between transition-opacity duration-300 ${i < done ? "opacity-100" : "opacity-25"}`}>
              <span>{s}</span>
              <span className={i < done ? "text-mint" : "text-transparent"}>✓</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function StartupScreen({ onEnter, onReady }: { onEnter: () => void; onReady: () => void }) {
  const still = !!useReducedMotion();
  const letters = "VAMSEE".split("");

  return (
    <motion.div
      role="button"
      tabIndex={0}
      aria-label="Portfolio introduction. Click or press Enter to continue."
      className="fixed inset-0 z-[9999] cursor-pointer overflow-hidden bg-paper text-ink"
      exit={{ y: still ? 0 : "-100%", opacity: still ? 0 : 1 }}
      transition={{ duration: still ? 0.15 : 0.75, ease }}
      onClick={onEnter}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onEnter()}
    >
      <div className="absolute inset-0 [background:radial-gradient(rgba(25,22,20,0.09)_1.1px,transparent_1.5px)_0_0/13px_13px]" />

      <div className="relative flex h-full flex-col justify-between px-6 py-6 sm:px-12 sm:py-10">
        <header className="flex items-start justify-between gap-3 font-mono text-[10px] tracking-[0.2em] text-[var(--mute)] sm:text-[11px]">
          <span>VAMSEE / PORTFOLIO</span>
          <motion.span
            className="mr-1 shrink-0 whitespace-nowrap rounded-md border-2 border-ink bg-gold px-2 py-1 font-cond text-[11px] font-bold tracking-[0.1em] text-ink sm:text-xs"
            initial={{ opacity: 0, rotate: 0, scale: 0.6 }}
            animate={{ opacity: 1, rotate: 4, scale: 1 }}
            transition={{ delay: still ? 0 : 1.1, type: "spring", stiffness: 380, damping: 16 }}
          >
            EDITION 01 — 2026
          </motion.span>
        </header>

        <main className="mx-auto w-full max-w-6xl">
          <motion.p
            className="mb-2 font-hand text-[clamp(1.5rem,3vw,2.25rem)] text-[var(--teal)]"
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: still ? 0 : 0.9, delay: still ? 0 : 0.85, ease: "easeOut" }}
          >
            hi, i build intelligent software
          </motion.p>

          <h1 className="flex font-display text-[clamp(5rem,21vw,19rem)] uppercase leading-[0.85]" aria-label="Vamsee">
            {letters.map((l, i) => (
              <span key={i} className="inline-block overflow-hidden" aria-hidden>
                <motion.span
                  className={`inline-block ${i >= 3 ? "text-accent" : ""}`}
                  initial={{ y: still ? 0 : "105%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.7, delay: still ? 0 : 0.1 + i * 0.07, ease }}
                >
                  {l}
                </motion.span>
              </span>
            ))}
          </h1>
          <motion.div
            className="mt-3 h-[6px] origin-left rounded-full bg-ink"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: still ? 0 : 0.8, delay: still ? 0 : 0.6, ease }}
          />
        </main>

        <footer className="flex items-end justify-between gap-6">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: still ? 0 : 0.5, duration: 0.5 }}>
            <Terminal still={still} onDone={onReady} />
            <p className="mt-4 font-mono text-[10px] tracking-[0.2em] text-[var(--mute)]">CLICK ANYWHERE TO SKIP</p>
          </motion.div>
          <motion.div
            className="hidden sm:block"
            initial={{ opacity: 0, scale: 0.4, rotate: -90 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: still ? 0 : 0.9, type: "spring", stiffness: 220, damping: 18 }}
          >
            <SpinSticker text="ENTER · ENTER · ENTER · " />
          </motion.div>
        </footer>
      </div>
    </motion.div>
  );
}

/** Brand intro for the root page: plays on every load, skippable, short under reduced motion. */
export default function HelloStartup({ children }: HelloStartupProps) {
  const [isVisible, setIsVisible] = useState(true);

  const enter = useCallback(() => {
    setIsVisible(false);
  }, []);

  // Leave shortly after the terminal finishes booting.
  const ready = useCallback(() => {
    window.setTimeout(enter, 700);
  }, [enter]);

  return (
    <>
      {children}
      <AnimatePresence>{isVisible ? <StartupScreen onEnter={enter} onReady={ready} /> : null}</AnimatePresence>
    </>
  );
}
