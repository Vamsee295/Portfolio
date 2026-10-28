"use client";

import { motion } from "framer-motion";
import type { CaseStudy } from "../../data/caseStudies";

export function ChallengesSection({ study }: { study: CaseStudy }) {
  if (!study.challenges || study.challenges.length === 0) return null;

  return (
    <section className="px-6 max-w-5xl mx-auto py-20 border-t border-[#ECE3D4]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.6rem)] uppercase leading-none text-ink mb-12">
          07 / Challenges
        </h2>
        
        <div className="space-y-8">
          {study.challenges.map((challenge, index) => (
            <motion.div
              key={challenge.challenge}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grid md:grid-cols-3 gap-6 bg-card border-2 border-ink rounded-xl p-8 shadow-sm shadow-[4px_5px_0_var(--ink)]"
            >
              <div>
                <span className="text-[10px] font-mono font-bold tracking-[0.15em] text-[#C8603A] uppercase block mb-2">
                  Challenge
                </span>
                <p className="font-display text-2xl uppercase leading-none text-ink">{challenge.challenge}</p>
              </div>
              
              <div>
                <span className="text-[10px] font-mono font-bold tracking-[0.15em] text-[#2F6F6A] uppercase block mb-2">
                  Approach
                </span>
                <p className="text-sm text-[#3A332E] leading-relaxed">{challenge.approach}</p>
              </div>
              
              <div>
                <span className="text-[10px] font-mono font-bold tracking-[0.15em] text-[#2F6F6A] uppercase block mb-2">
                  Lesson
                </span>
                <p className="text-sm text-[#3A332E] leading-relaxed">{challenge.lesson}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export function OutcomeSection({ study }: { study: CaseStudy }) {
  return (
    <section className="px-6 max-w-5xl mx-auto py-20 border-t border-[#ECE3D4]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.6rem)] uppercase leading-none text-ink mb-8">
          08 / Outcome
        </h2>
        
        <div className="bg-card border-2 border-ink rounded-2xl p-8 md:p-12 shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-all duration-300 hover:shadow-[0_12px_35px_rgba(15,23,42,0.08)]">
          <p className="text-xl font-medium leading-relaxed mb-8 text-[#191614]">
            "{study.outcome.summary}"
          </p>
          <ul className="space-y-4">
            {study.outcome.highlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-4">
                <span className="text-[#2F6F6A] font-bold mt-0.5">✓</span>
                <span className="text-[#3A332E] text-sm leading-relaxed font-normal">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}

export function LearningsSection({ study }: { study: CaseStudy }) {
  if (!study.learnings || study.learnings.length === 0) return null;

  return (
    <section className="px-6 max-w-5xl mx-auto py-20 border-t border-[#ECE3D4]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="grid md:grid-cols-2 gap-12"
      >
        <div>
          <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.6rem)] uppercase leading-none text-ink mb-8">
            09 / What I Learned
          </h2>
          <ul className="space-y-6">
            {study.learnings.map((learning, index) => (
              <li key={index} className="flex items-start gap-4 text-sm text-[#3A332E] leading-relaxed">
                <span className="text-[#8C8178] font-mono opacity-50">0{index + 1}</span>
                {learning}
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.6rem)] uppercase leading-none text-ink mb-8">
            10 / Next Steps
          </h2>
          <ul className="space-y-6">
            {study.futureRoadmap.map((roadmap, index) => (
              <li key={index} className="flex items-start gap-4 text-sm text-[#3A332E] leading-relaxed">
                <span className="text-[#8C8178] font-mono opacity-50">→</span>
                {roadmap}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
