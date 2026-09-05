"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
  animate,
  useReducedMotion,
} from "framer-motion";

// ─── Loading logic (unchanged) ───────────────────────────────────────────────
const PROGRESS_STAGES = [0, 12, 28, 46, 63, 79, 91, 100];
// Slowed down — total ~2.8s to reach 100%
const STAGE_DELAYS    = [0, 250, 500, 800, 1100, 1450, 1800, 2300];

type Phase = "loading" | "ready" | "exit";

interface LoadingScreenProps {
  onComplete: () => void;
}

// ─── Letter definitions: each letter owns a [start%, end%] progress window ───
//     As progress moves through that window the letter rises from below.
const LETTER_DEFS = [
  { char: "V", start:  0, end: 20 },
  { char: "A", start: 14, end: 34 },
  { char: "M", start: 28, end: 50 },
  { char: "S", start: 44, end: 66 },
  { char: "E", start: 60, end: 82 },
  { char: "E", start: 76, end: 96 },
] as const;

// ─── Easing: easeOutBack with a small (≈4-8 px) overshoot then settle ────────
function easeOutBack(t: number): number {
  const c1 = 1.15; // reduced from default 1.70158 — controlled overshoot
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
}

function letterY(p: number, start: number, end: number): number {
  const t = Math.max(0, Math.min(1, (p - start) / (end - start)));
  if (t === 0) return 420; // fully below
  return 420 * (1 - easeOutBack(t)); // easeOutBack can yield values < 0 (overshoot upward)
}

function letterOpacity(p: number, start: number, end: number): number {
  const t = Math.max(0, Math.min(1, (p - start) / (end - start)));
  // Fade in quickly over first third of its travel
  return Math.min(1, t * 3);
}

// ─── Sub-component so each letter gets its own hooks (no hooks in loop) ───────
interface LetterProps {
  char: string;
  start: number;
  end: number;
  // shared smooth-progress motion value
  pv: ReturnType<typeof useMotionValue<number>>;
  prefersReduced: boolean | null;
}

function Letter({ char, start, end, pv, prefersReduced }: LetterProps) {
  const y       = useTransform(pv, (p) => letterY(p, start, end));
  const opacity = useTransform(pv, (p) => letterOpacity(p, start, end));

  const letterStyle = {
    fontSize: "clamp(38px, 7.5vw, 68px)" as const,
    letterSpacing: "0.16em" as const,
    lineHeight: 1 as const,
    display: "inline-block" as const,
    fontWeight: 800 as const,
    color: "#0F172A" as const,
    textTransform: "uppercase" as const,
  };

  if (prefersReduced) {
    // Respect prefers-reduced-motion: show letters immediately
    return <span style={letterStyle}>{char}</span>;
  }

  return (
    <motion.span style={{ ...letterStyle, y, opacity }}>
      {char}
    </motion.span>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const prefersReduced = useReducedMotion();
  const [progress, setProgress]  = useState(0);
  const [phase,    setPhase]     = useState<Phase>("loading");
  const completedRef             = useRef(false);

  // Smoothly-interpolated version of `progress` — drives letter positions
  const smoothProgress = useMotionValue(0);

  // Animate smoothProgress toward the discrete progress value whenever it jumps
  useEffect(() => {
    if (prefersReduced) {
      // Jump immediately; no animation needed
      smoothProgress.set(progress);
      return;
    }
    const controls = animate(smoothProgress, progress, {
      duration: 0.9,   // slow-motion interpolation between progress steps
      ease: "easeOut",
    });
    return () => controls.stop();
  }, [progress, smoothProgress, prefersReduced]);

  // ── Loading-progress timer logic (original, untouched) ──────────────────
  useEffect(() => {
    if (prefersReduced) {
      const t = setTimeout(() => {
        if (!completedRef.current) {
          completedRef.current = true;
          onComplete();
        }
      }, 300);
      return () => clearTimeout(t);
    }

    let stageIndex = 0;
    const timers: ReturnType<typeof setTimeout>[] = [];

    PROGRESS_STAGES.forEach((target, i) => {
      const t = setTimeout(() => {
        setProgress(target);
        stageIndex = i;

        if (target === 100) {
          const readyTimer = setTimeout(() => setPhase("ready"), 220);
          timers.push(readyTimer);

          const exitTimer = setTimeout(() => setPhase("exit"), 780);
          timers.push(exitTimer);
        }
      }, STAGE_DELAYS[i] + 100);
      timers.push(t);
    });

    void stageIndex;
    return () => timers.forEach(clearTimeout);
  }, [prefersReduced, onComplete]);

  const handleExitComplete = () => {
    if (!completedRef.current) {
      completedRef.current = true;
      onComplete();
    }
  };

  const isExiting = phase === "exit";

  const exitTransition = prefersReduced
    ? { duration: 0.25 }
    : { duration: 0.55, ease: "easeInOut" as const };

  const exitAnimation = prefersReduced ? { opacity: 0 } : { opacity: 0, y: -44 };

  return (
    <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
      {!isExiting && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={exitAnimation}
          transition={exitTransition}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white px-6 select-none overflow-hidden"
          role="status"
          aria-live="polite"
          aria-label="Portfolio loading"
        >
          <div className="w-full max-w-[560px] flex flex-col items-center text-center">

            {/* ── VAMSEE wordmark — each letter driven by live progress ── */}
            {/*
              overflow-hidden clips letters that are still below their container.
              padding-bottom gives enough room for the easeOutBack overshoot
              (letters momentarily go ~6px above baseline) without clipping.
            */}
            <div
              className="flex items-end justify-center overflow-hidden mb-5"
              style={{
                height: "calc(clamp(38px, 7.5vw, 68px) * 1.25)",
                paddingBottom: "clamp(4px, 0.8vw, 10px)",
              }}
              aria-label="VAMSEE"
            >
              {LETTER_DEFS.map((def, i) => (
                <Letter
                  key={i}
                  char={def.char}
                  start={def.start}
                  end={def.end}
                  pv={smoothProgress}
                  prefersReduced={prefersReduced}
                />
              ))}
            </div>

            {/* ── SOFTWARE & TECHNOLOGY — fades in once V lands (≥20%) ── */}
            <motion.p
              animate={progress >= 20 ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-[10px] sm:text-[11px] font-mono font-semibold tracking-[0.32em] text-[#64748B] uppercase mb-8"
            >
              SOFTWARE &amp; TECHNOLOGY
            </motion.p>

            {/* ── Status label — visible from the start ── */}
            <motion.p
              key={phase}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-[10px] sm:text-[11px] font-mono font-semibold tracking-[0.26em] text-[#94A3B8] uppercase mb-6"
            >
              {phase === "ready" ? "READY" : "INITIALIZING EXPERIENCE"}
            </motion.p>

            {/* ── Progress bar — visible from the start, accent blue ── */}
            <div
              className="w-full h-[2px] rounded-full overflow-hidden mb-3"
              style={{ background: "#e5e7eb" }}
              aria-hidden="true"
            >
              <motion.div
                className="h-full rounded-full"
                style={{ background: "#111111" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.28, ease: "easeOut" }}
              />
            </div>

            {/* ── Percentage ── */}
            <div className="w-full flex justify-end">
              <p className="text-[10px] font-mono font-semibold tracking-[0.18em] text-[#94A3B8]">
                {String(progress).padStart(3, "\u00A0")}%
              </p>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
