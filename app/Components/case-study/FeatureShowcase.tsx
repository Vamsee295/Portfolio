"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import type { CaseStudy } from "../../data/caseStudies";

export default function FeatureShowcase({ study }: { study: CaseStudy }) {
  if (!study.features || study.features.length === 0) return null;

  return (
    <section className="px-6 max-w-5xl mx-auto py-20 border-t border-[#f3f4f6]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-sm font-mono font-bold tracking-[0.15em] text-[#9ca3af] uppercase mb-12">
          05 / Features & Capabilities
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {study.features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group bg-white border border-[#e5e7eb] rounded-xl p-6 hover:border-[#111111] hover:shadow-lg transition-all duration-300"
            >
              <div className="text-[#111111] mb-4">
                <CheckCircle2 size={20} strokeWidth={1.5} />
              </div>
              <h3 className="text-sm font-bold text-[#111111] mb-2">{feature.title}</h3>
              <p className="text-sm text-[#6b7280] leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
