"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const ease = [0.6, 0, 0.3, 1] as const;

/** Rises into view once, when scrolled to. */
export function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const still = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={still ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

/** Accent box that sweeps in behind a word when it scrolls into view. */
export function Marked({ children, color = "var(--accent)" }: { children: React.ReactNode; color?: string }) {
  const still = useReducedMotion();
  return (
    <span className="relative mx-[0.06em] inline-block px-[0.14em]">
      <motion.span
        aria-hidden
        className="absolute -inset-x-[0.04em] -inset-y-[0.08em] origin-left -rotate-1 rounded-lg"
        style={{ background: color }}
        initial={still ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.25, ease }}
      />
      <span className="relative text-paper">{children}</span>
    </span>
  );
}

/** Counts from 0 to `to` with an ease-out cubic when it scrolls into view. */
export function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const still = useReducedMotion();
  const [n, setN] = useState(still ? to : 0);

  useEffect(() => {
    if (!inView || still) return;
    let raf = 0;
    const t0 = performance.now();
    const f = (t: number) => {
      const k = Math.min(1, (t - t0) / 1400);
      setN(Math.round(to * (1 - Math.pow(1 - k, 3))));
      if (k < 1) raf = requestAnimationFrame(f);
    };
    raf = requestAnimationFrame(f);
    return () => cancelAnimationFrame(raf);
  }, [inView, still, to]);

  return <span ref={ref}>{n.toLocaleString()}{suffix}</span>;
}
