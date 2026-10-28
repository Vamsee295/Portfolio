"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { certifications } from "../../data/certifications";
import { Marked, Reveal, ease } from "../common/motion";

export default function Certifications() {
  const still = useReducedMotion();

  return (
    <section id="certifications" aria-labelledby="certifications-heading" className="relative mx-auto max-w-[1180px] px-[clamp(18px,4vw,40px)] py-28">
      <div className="grid grid-cols-[minmax(0,1fr)] items-center gap-16 lg:grid-cols-[440px_minmax(0,1fr)]">
        <Reveal className="order-2 lg:order-1">
          {/* Receipt: one row per credential, each ticks in and links to its proof. */}
          <div className="relative -rotate-1 border-[2.5px] border-b-0 border-ink bg-card px-7 pb-8 pt-7 font-mono text-[13px] text-ink shadow-[5px_6px_0_var(--ink)]">
            <p className="text-center font-display text-3xl uppercase leading-none">Vamsee / credentials</p>
            <p className="mt-1 text-center text-[11px] text-[var(--mute)]">verified · issued by the vendors themselves</p>
            <div className="my-5 border-t-2 border-dashed border-[var(--line)]" />

            <ul className="space-y-1">
              {certifications.map((cert, i) => (
                <motion.li
                  key={cert.id}
                  initial={still ? false : { opacity: 0.25 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.22, duration: 0.25 }}
                >
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group -mx-2 flex items-baseline gap-2 rounded-md px-2 py-1.5 hover:bg-paper2"
                    aria-label={`View ${cert.type} for ${cert.title}`}
                  >
                    <span className="min-w-0">
                      <span className="block truncate group-hover:text-accent">{cert.shortName ?? cert.title}</span>
                      <span className="block text-[11px] text-[var(--mute)]">{cert.issuer} · {cert.category}</span>
                    </span>
                    <span aria-hidden className="mb-1 flex-1 border-b border-dotted border-[var(--mute)]" />
                    <motion.span
                      className="shrink-0 text-[var(--teal)]"
                      initial={still ? false : { scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.45 + i * 0.22, type: "spring", stiffness: 500, damping: 15 }}
                    >
                      ✓
                    </motion.span>
                    <ArrowUpRight size={14} className="shrink-0 self-center text-[var(--mute)] group-hover:text-accent" aria-hidden />
                  </a>
                </motion.li>
              ))}
            </ul>

            <div className="my-5 border-t-2 border-dashed border-[var(--line)]" />
            <div className="flex items-end justify-between">
              <span className="font-display text-2xl uppercase">Total</span>
              <span className="font-display text-4xl text-accent">{certifications.length}</span>
            </div>
            <p className="mt-1 text-right text-[11px] text-[var(--mute)]">credentials · and counting</p>
            <div
              aria-hidden
              className="mt-6 h-12 [background:repeating-linear-gradient(90deg,var(--ink)_0_2px,transparent_2px_4px,var(--ink)_4px_7px,transparent_7px_9px,var(--ink)_9px_10px,transparent_10px_13px)]"
            />
            {/* torn bottom edge */}
            <span
              aria-hidden
              className="absolute -bottom-[12px] left-[-2.5px] right-[-2.5px] h-[14px] [background:radial-gradient(circle_at_7px_0,var(--card)_6px,var(--ink)_6.5px,var(--ink)_8.5px,transparent_9px)_0_0/14px_14px_repeat-x]"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1} className="order-1 lg:order-2">
          <p className="font-mono text-xs tracking-[0.2em] text-[var(--mute)]">04 / CERTIFICATIONS</p>
          <h2 id="certifications-heading" className="mt-3 font-display text-[clamp(2.8rem,6vw,5.2rem)] uppercase leading-[0.95] text-ink">
            Credentials I&rsquo;ve <Marked>earned</Marked>
          </h2>
          <p className="mt-5 max-w-lg text-[17px] leading-relaxed text-[var(--body)]">
            Globally recognised certifications across cloud, databases, networking, data science and communication. Every line on the receipt links to the issuer&rsquo;s own proof.
          </p>
          <motion.p
            className="mt-8 rotate-2 font-hand text-2xl text-[var(--teal)]"
            initial={still ? false : { opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5, ease }}
          >
            ← click any line to verify
          </motion.p>
        </Reveal>
      </div>
    </section>
  );
}
