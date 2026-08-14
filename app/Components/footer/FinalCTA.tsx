"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, GitBranch, Mail } from "lucide-react";

const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contact"
      className="py-32 border-t border-[#e5e7eb]"
      aria-labelledby="cta-heading"
    >
      <div ref={ref} className="max-w-4xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs font-mono font-semibold tracking-[0.22em] text-[#2563eb] mb-8 uppercase"
        >
          LET&rsquo;S CONNECT
        </motion.p>

        {/* Big headline */}
        <motion.h2
          id="cta-heading"
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-[-0.04em] text-[#111111] mb-6 leading-[1.05]"
        >
          LET&rsquo;S BUILD SOMETHING
          <br />
          <span className="text-[#2563eb]">MEANINGFUL.</span>
        </motion.h2>

        {/* Supporting text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-base sm:text-lg text-[#6b7280] mb-12 max-w-lg mx-auto"
        >
          Interested in AI, software, or interesting engineering problems? I&rsquo;d
          love to connect.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="mailto:vamseevemulapalli@example.com"
            className="group inline-flex items-center gap-2 bg-[#111111] text-white px-7 py-4 rounded-full text-sm font-semibold hover:bg-[#2563eb] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2"
            aria-label="Send email to Vamsee"
          >
            <Mail size={16} aria-hidden="true" />
            Get In Touch
            <ArrowRight
              size={15}
              className="group-hover:translate-x-1 transition-transform duration-200"
              aria-hidden="true"
            />
          </a>

          <a
            href="https://github.com/vamseevemulapalli"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-transparent text-[#111111] px-7 py-4 rounded-full text-sm font-semibold border border-[#e5e7eb] hover:border-[#111111] hover:bg-[#f8fafc] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2"
            aria-label="View GitHub profile (opens in new tab)"
          >
            <GitBranch size={16} aria-hidden="true" />
            View GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}

