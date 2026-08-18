"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const PROGRESS_STAGES = [0, 12, 28, 46, 63, 79, 91, 100];

// Cumulative durations to reach each stage (ms).
// Total: ~1350ms to hit 100%, then 400ms hold, then exit.
const STAGE_DELAYS = [0, 80, 160, 240, 320, 400, 500, 700];

type Phase = "loading" | "ready" | "exit";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const prefersReduced = useReducedMotion();
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<Phase>("loading");
  const completedRef = useRef(false);

  useEffect(() => {
    // Skip if reduced motion — short delay then done
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
          // Transition to "ready"
          const readyTimer = setTimeout(() => {
            setPhase("ready");
          }, 220);
          timers.push(readyTimer);

          // Trigger exit
          const exitTimer = setTimeout(() => {
            setPhase("exit");
          }, 780);
          timers.push(exitTimer);
        }
      }, STAGE_DELAYS[i] + 100);
      timers.push(t);
    });

    void stageIndex;
    return () => timers.forEach(clearTimeout);
  }, [prefersReduced, onComplete]);

  // Once exit animation completes
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

  const exitAnimation = prefersReduced
    ? { opacity: 0 }
    : { opacity: 0, y: -44 };

  return (
    <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
      {!isExiting && (
        <motion.div
          key="loading-screen"
          initial={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
          animate={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
          exit={exitAnimation}
          transition={exitTransition}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white px-6 select-none"
          role="status"
          aria-live="polite"
          aria-label="Portfolio loading"
        >
          {/* Center Content */}
          <div className="w-full max-w-[480px] flex flex-col items-center text-center">
            {/* Wordmark */}
            <motion.p
              initial={prefersReduced ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0 }}
              className="text-2xl sm:text-3xl font-black tracking-[0.25em] text-[#111111] uppercase mb-3"
            >
              VAMSEE
            </motion.p>

            {/* Sub-brand */}
            <motion.p
              initial={prefersReduced ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.07 }}
              className="text-[10px] sm:text-[11px] font-mono font-semibold tracking-[0.32em] text-[#9ca3af] uppercase mb-10"
            >
              SOFTWARE &amp; TECHNOLOGY
            </motion.p>

            {/* Thin divider */}
            <motion.div
              initial={prefersReduced ? false : { scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.45, delay: 0.12 }}
              className="w-full h-px bg-[#e5e7eb] mb-10 origin-left"
              aria-hidden="true"
            />

            {/* Status label */}
            <motion.p
              key={phase}
              initial={prefersReduced ? false : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-[10px] sm:text-[11px] font-mono font-semibold tracking-[0.26em] text-[#6b7280] uppercase mb-6"
            >
              {phase === "ready" ? "READY" : "INITIALIZING EXPERIENCE"}
            </motion.p>

            {/* Thin progress bar */}
            <div
              className="w-full h-[2px] bg-[#e5e7eb] rounded-full overflow-hidden mb-3"
              aria-hidden="true"
            >
              <motion.div
                className="h-full bg-[#111111] rounded-full"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Percentage */}
            <div className="w-full flex justify-end">
              <motion.p
                className="text-[10px] font-mono font-semibold tracking-[0.18em] text-[#9ca3af]"
                animate={{ opacity: 1 }}
              >
                {String(progress).padStart(3, "\u00A0")}%
              </motion.p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
