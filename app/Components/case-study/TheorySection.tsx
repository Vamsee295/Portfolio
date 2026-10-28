"use client";

import { motion } from "framer-motion";
import type { CaseStudy } from "../../data/caseStudies";

export default function TheorySection({ study }: { study: CaseStudy }) {
  if (!study.theory || study.theory.length === 0) return null;

  return (
    <section className="px-6 max-w-5xl mx-auto py-20 border-t border-[#ECE3D4]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.6rem)] uppercase leading-none text-ink mb-8">
          04 / The Theory
        </h2>
        
        <div className="flex flex-col gap-12">
          {study.theory.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grid lg:grid-cols-[1fr_2fr] gap-8"
            >
              <div>
                <h3 className="font-display text-3xl uppercase leading-none text-ink mb-2">{item.title}</h3>
                <span className="text-[11px] font-mono font-semibold tracking-widest text-[#6B615A] uppercase bg-[#ECE3D4] px-2 py-1 rounded">
                  {item.concept}
                </span>
              </div>
              
              <div className="bg-card border-2 border-ink rounded-xl p-6 md:p-8 space-y-6 shadow-[4px_5px_0_var(--ink)]">
                <div>
                  <h4 className="text-[10px] font-mono font-bold tracking-[0.15em] text-[#8C8178] uppercase mb-2">
                    What it is
                  </h4>
                  <p className="text-sm text-[#3A332E] leading-relaxed">
                    {item.whatItIs}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-[10px] font-mono font-bold tracking-[0.15em] text-[#8C8178] uppercase mb-2">
                    Why it is useful
                  </h4>
                  <p className="text-sm text-[#3A332E] leading-relaxed">
                    {item.whyUseful}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-[10px] font-mono font-bold tracking-[0.15em] text-[#8C8178] uppercase mb-2">
                    How this project uses it
                  </h4>
                  <p className="text-sm text-[#3A332E] leading-relaxed">
                    {item.howUsed}
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
