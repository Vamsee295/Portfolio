"use client";

import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";
import type { CaseStudy } from "../../data/caseStudies";

export default function ProblemSection({ study }: { study: CaseStudy }) {
  return (
    <section className="px-6 max-w-5xl mx-auto py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.6rem)] uppercase leading-none text-ink mb-8">
          01 / The Problem
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Narrative */}
          <div>
            <p className="text-lg text-[#3A332E] leading-relaxed mb-6 font-medium">
              {study.problem.summary}
            </p>
          </div>

          {/* Right Breakdown Cards */}
          <div className="flex flex-col gap-6">
            {study.problem.points.map((point, i) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-card border-2 border-ink rounded-xl p-6 hover:border-[#C9BCA8] transition-colors shadow-[4px_5px_0_var(--ink)]"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 text-[#C8603A]">
                    <AlertCircle size={18} />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl uppercase leading-none text-ink mb-2">
                      {point.title}
                    </h3>
                    <p className="text-sm text-[#6B615A] leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
