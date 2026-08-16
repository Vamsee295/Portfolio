"use client";

import { motion } from "framer-motion";
import { Lock, Unlock, Cloud, Cpu, ArrowRight } from "lucide-react";

export default function ByokComparisonVisual() {
  return (
    <div className="w-full bg-[#fafafa] border border-[#e5e7eb] rounded-2xl p-6 lg:p-10 my-16 font-sans shadow-[0_8px_30px_rgba(15,23,42,0.04)]">
      <div className="text-center mb-10">
        <h3 className="text-sm font-mono font-bold tracking-[0.15em] text-[#111111] uppercase mb-2">
          Platform Lock-in vs BYOK
        </h3>
        <p className="text-xs text-[#6b7280]">Why the developer should control the AI layer</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 relative">
        {/* VS Badge */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 bg-white border border-[#e5e7eb] rounded-full items-center justify-center shadow-sm z-10">
          <span className="text-[10px] font-bold text-[#9ca3af]">VS</span>
        </div>

        {/* Traditional IDE */}
        <div className="space-y-5">
          <div className="flex items-center gap-2.5 text-[#ef4444]">
            <Lock size={15} />
            <h4 className="text-xs font-bold tracking-widest uppercase">Traditional AI IDE</h4>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="bg-white border border-[#e5e7eb] rounded-xl p-5 shadow-[0_4px_20px_rgba(15,23,42,0.02)]"
          >
            <div className="flex flex-col gap-3">
              <div className="bg-[#f8fafc] px-4 py-3 rounded-lg text-center border border-[#e5e7eb]">
                <span className="text-xs font-semibold text-[#4b5563]">Fixed Platform Quota</span>
              </div>
              <div className="flex justify-center text-[#9ca3af] py-0.5">
                <ArrowRight size={15} className="rotate-90" />
              </div>
              <div className="bg-[#f8fafc] px-4 py-3 rounded-lg text-center border border-[#e5e7eb] flex items-center justify-center gap-2">
                <Cloud size={14} className="text-[#9ca3af]" />
                <span className="text-xs font-semibold text-[#6b7280]">Locked Cloud Models</span>
              </div>
            </div>
            <div className="mt-5 pt-4 border-t border-[#f3f4f6]">
              <p className="text-[10px] font-mono text-[#6b7280] leading-relaxed">
                Developer consumes the platform's AI quota. Models are fixed. Local inference is rarely supported.
              </p>
            </div>
          </motion.div>
        </div>

        {/* CodeAgent IDE */}
        <div className="space-y-5">
          <div className="flex items-center gap-2.5 text-[#10b981]">
            <Unlock size={15} />
            <h4 className="text-xs font-bold tracking-widest uppercase">CodeAgent (BYOK)</h4>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white border border-[#a7f3d0] rounded-xl p-5 shadow-[0_4px_20px_rgba(16,185,129,0.06)] relative overflow-hidden"
          >
            <div className="flex flex-col gap-3">
              <div className="bg-[#ecfdf5] px-4 py-3 rounded-lg text-center border border-[#a7f3d0]">
                <span className="text-xs font-bold text-[#065f46]">Developer API Keys & Local Models</span>
              </div>
              <div className="flex justify-center text-[#10b981] py-0.5">
                <ArrowRight size={15} className="rotate-90" />
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#f8fafc] px-3 py-3 rounded-lg border border-[#e5e7eb] flex flex-col items-center justify-center gap-1 hover:border-[#3b82f6]/50 hover:bg-[#eff6ff]/30 transition-colors">
                  <Cloud size={14} className="text-[#3b82f6]" />
                  <span className="text-[10px] font-bold text-[#111827]">DeepSeek / Groq</span>
                  <span className="text-[8px] font-mono text-[#6b7280]">Available Quotas</span>
                </div>
                
                <div className="bg-[#f8fafc] px-3 py-3 rounded-lg border border-[#e5e7eb] flex flex-col items-center justify-center gap-1 hover:border-[#f59e0b]/50 hover:bg-[#fef3c7]/30 transition-colors">
                  <Cpu size={14} className="text-[#d97706]" />
                  <span className="text-[10px] font-bold text-[#111827]">Ollama</span>
                  <span className="text-[8px] font-mono text-[#6b7280]">Local Inference</span>
                </div>
              </div>
            </div>
            
            <div className="mt-5 pt-4 border-t border-[#f3f4f6]">
              <p className="text-[10px] font-mono text-[#111827] leading-relaxed font-semibold">
                Developer brings their own credentials. Provider abstraction allows seamless switching between cloud and local engines.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
