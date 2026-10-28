"use client";

import { motion } from "framer-motion";
import type { CaseStudy } from "../../data/caseStudies";

export default function EngineeringDecisions({ study }: { study: CaseStudy }) {
  if (!study.decisions || study.decisions.length === 0) return null;

  return (
    <section className="px-6 max-w-5xl mx-auto py-20 border-t border-[#ECE3D4]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.6rem)] uppercase leading-none text-ink mb-12">
          06 / Engineering Decisions
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {study.decisions.map((decision, index) => (
            <motion.div
              key={decision.decision}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border-2 border-ink rounded-xl p-8 shadow-[4px_5px_0_var(--ink)]"
            >
              <h3 className="font-display text-2xl uppercase leading-none text-ink mb-6">{decision.decision}</h3>
              
              <div className="space-y-4">
                <div>
                  <span className="text-[10px] font-mono font-bold tracking-[0.15em] text-[#8C8178] uppercase block mb-1">
                    Why
                  </span>
                  <p className="text-sm text-[#3A332E] leading-relaxed">
                    {decision.why}
                  </p>
                </div>
                
                <div>
                  <span className="text-[10px] font-mono font-bold tracking-[0.15em] text-[#E3A72F] uppercase block mb-1">
                    Trade-off
                  </span>
                  <p className="text-sm text-[#3A332E] leading-relaxed">
                    {decision.tradeoff}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
