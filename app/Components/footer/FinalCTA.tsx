"use client";

import { ArrowRight, GitBranch, Mail } from "lucide-react";
import { profile } from "../../data/profile";
import { Marked, Reveal } from "../common/motion";

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function FinalCTA() {
  return (
    <section id="contact" aria-labelledby="cta-heading" className="relative overflow-hidden py-32">
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(rgba(25,22,20,0.13)_1.2px,transparent_1.6px)_0_0/12px_12px]" />
      <Reveal className="relative mx-auto max-w-[1000px] px-[clamp(18px,4vw,40px)] text-center">
        <p className="font-mono text-xs tracking-[0.2em] text-[var(--mute)]">06 / LET&rsquo;S CONNECT</p>
        <p className="mt-6 -rotate-2 font-hand text-[clamp(1.5rem,2.6vw,2rem)] text-[var(--teal)]">got an idea, an internship, or a bug that won&rsquo;t die?</p>
        <h2 id="cta-heading" className="mt-2 font-display text-[clamp(3.2rem,9vw,7.6rem)] uppercase leading-[0.92] text-ink">
          Let&rsquo;s build something <Marked>meaningful.</Marked>
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-[17px] leading-relaxed text-[var(--body)]">
          Interested in AI, software engineering, or building something useful? I&rsquo;d love to connect.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href={profile.social.email} className="btn-stk" aria-label="Send email to Vamsee">
            <Mail size={18} aria-hidden /> Get in touch <ArrowRight size={18} aria-hidden />
          </a>
          <a href={profile.social.github} target="_blank" rel="noopener noreferrer" className="btn-stk !bg-card !text-ink" aria-label="GitHub profile (opens in new tab)">
            <GitBranch size={18} aria-hidden /> GitHub
          </a>
          <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="btn-stk !bg-ink !text-paper" aria-label="LinkedIn profile (opens in new tab)">
            <LinkedinIcon /> LinkedIn
          </a>
        </div>
      </Reveal>
    </section>
  );
}
