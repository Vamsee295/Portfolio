"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import dynamic from "next/dynamic";
import { profile } from "../../data/profile";

// Lazy-load the canvas to avoid SSR issues
const SystemVisual = dynamic(() => import("./SystemVisual"), { ssr: false });

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" as const },
  },
};

export default function Hero() {
  const scrollToWork = () => {
    document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
      aria-label="Hero section"
    >
      {/* Background texture — very subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #2563eb 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col"
          >
            {/* Eyebrow */}
            <motion.p
              variants={itemVariants}
              className="text-xs font-mono font-semibold tracking-[0.22em] text-[#2563eb] mb-6 uppercase"
            >
              COMPUTER SCIENCE · AI/ML · SOFTWARE
            </motion.p>

            {/* Main heading */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.0] tracking-[-0.04em] text-[#111111] mb-6"
            >
              I BUILD
              <br />
              <span className="inline-block bg-[#dbeafe] text-[#111111] px-4 py-1 my-1 rounded-xl">
                INTELLIGENT
              </span>
              <br />
              SOFTWARE.
            </motion.h1>

            {/* Supporting text */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-[#6b7280] leading-relaxed max-w-md mb-10"
            >
              Computer Science student focused on AI/ML, software engineering,
              and building practical intelligent systems that combine models with
              real-world software.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={scrollToWork}
                className="group inline-flex items-center gap-2 bg-[#111111] text-white px-6 py-3.5 rounded-full text-sm font-semibold hover:bg-[#222222] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] focus-visible:ring-offset-2"
                aria-label="Explore selected projects"
              >
                Explore My Work
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                  aria-hidden="true"
                />
              </button>

              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-transparent text-[#6b7280] px-6 py-3.5 rounded-full text-sm font-semibold border border-[#e5e7eb] hover:border-[#111111] hover:text-[#111111] hover:bg-[#f8fafc] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] focus-visible:ring-offset-2"
                aria-label="View resume PDF (opens in new tab)"
              >
                <FileText size={16} aria-hidden="true" />
                View Resume
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                  aria-hidden="true"
                />
              </a>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              variants={itemVariants}
              className="mt-16 flex items-center gap-3"
            >
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-5 h-8 border border-[#d1d5db] rounded-full flex items-start justify-center pt-1.5"
                aria-hidden="true"
              >
                <div className="w-1 h-2 bg-[#9ca3af] rounded-full" />
              </motion.div>
              <span className="text-xs font-mono text-[#9ca3af] tracking-widest uppercase">
                scroll
              </span>
            </motion.div>
          </motion.div>

          {/* Right — Interactive AI System Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0, delay: 0.45, ease: "easeOut" }}
            className="relative hidden lg:flex items-center justify-center"
            aria-hidden="true"
          >
            {/* Outer container — ~42% of hero width, square */}
            <div className="relative w-full max-w-[520px] aspect-square">
              {/* Very faint outer border ring */}
              <div className="absolute inset-0 rounded-full border border-[#e5e7eb] opacity-30 pointer-events-none" />

              {/* Canvas fills the full space — it draws its own rings */}
              <div className="absolute inset-0">
                <SystemVisual />
              </div>

              {/* Activity state label — bottom center, changes with animation */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-none">
                <span className="text-[9px] font-mono font-semibold tracking-[0.2em] text-[#111111] opacity-40 uppercase">
                  LIVE SYSTEM
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


