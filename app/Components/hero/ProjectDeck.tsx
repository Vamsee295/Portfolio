"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { EduRiskPreview, MultiAgentPreview, StudyHubPreview } from "../projects/ProjectPreviews";

const CARDS = [
  { name: "EduRisk", tag: "ML · XAI", node: <EduRiskPreview /> },
  { name: "Multi-Agent AI", tag: "Agents · RAG", node: <MultiAgentPreview /> },
  { name: "StudyHub", tag: "EdTech", node: <StudyHubPreview /> },
];

// Resting pose for each depth slot: front, middle, back.
const SLOTS = [
  { x: 0, y: 0, rotate: -3, scale: 1, z: 3 },
  { x: 34, y: -22, rotate: 5, scale: 0.94, z: 2 },
  { x: -30, y: -40, rotate: -9, scale: 0.88, z: 1 },
];

/** Fanned stack of real project previews; the front card cycles to the back every few seconds or on click. */
export default function ProjectDeck() {
  const still = useReducedMotion();
  const [order, setOrder] = useState([0, 1, 2]);
  const shuffle = () => setOrder(([a, ...rest]) => [...rest, a]);

  useEffect(() => {
    if (still) return;
    const t = window.setInterval(shuffle, 3800);
    return () => window.clearInterval(t);
  }, [still]);

  const front = CARDS[order[0]];

  return (
    <div className="relative pt-12">
      <button
        type="button"
        onClick={shuffle}
        aria-label={`Showing ${front.name}. Show next project`}
        className="relative block aspect-[4/3.4] w-full cursor-pointer"
      >
        {order.map((cardIdx, slot) => {
          const s = SLOTS[slot];
          return (
            <motion.div
              key={cardIdx}
              className="absolute inset-0 overflow-hidden rounded-xl border-[2.5px] border-ink bg-card shadow-[6px_7px_0_var(--ink)]"
              style={{ zIndex: s.z }}
              initial={false}
              animate={{ x: s.x, y: s.y, rotate: s.rotate, scale: s.scale }}
              transition={{ type: "spring", stiffness: 170, damping: 20 }}
            >
              <div className="pointer-events-none h-full w-full">{CARDS[cardIdx].node}</div>
            </motion.div>
          );
        })}
      </button>

      {/* Label sticker tracks the front card */}
      <motion.div
        key={front.name}
        className="absolute -bottom-5 left-4 z-10 flex items-center gap-2 rounded-lg border-[2.5px] border-ink bg-ink px-3 py-1.5 text-paper shadow-[3px_4px_0_var(--accent)]"
        initial={still ? false : { scale: 0.6, rotate: -12, opacity: 0 }}
        animate={{ scale: 1, rotate: -3, opacity: 1 }}
        transition={{ type: "spring", stiffness: 420, damping: 16 }}
      >
        <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--mint)]" />
        <span className="font-cond text-sm font-bold uppercase tracking-[0.1em]">{front.name}</span>
        <span className="font-mono text-[11px] text-paper/60">{front.tag}</span>
      </motion.div>

      <div className="absolute -bottom-4 right-3 z-10 flex gap-1.5" aria-hidden>
        {CARDS.map((c, i) => (
          <span key={c.name} className={`h-2.5 rounded-full border-2 border-ink transition-all ${order[0] === i ? "w-6 bg-accent" : "w-2.5 bg-card"}`} />
        ))}
      </div>
    </div>
  );
}
