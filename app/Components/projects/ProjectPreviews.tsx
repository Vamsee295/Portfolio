"use client";

import { motion } from "framer-motion";

// ─── CodeAgent IDE Preview ──────────────────────────────────────
export function CodeAgentPreview() {
  const codeLines = [
    { indent: 0, content: "async function analyzeCode(ast) {", color: "#c9d1d9" },
    { indent: 1, content: "const context = await ai.getContext();", color: "#8b949e" },
    { indent: 1, content: "return ai.suggest(ast, context);", color: "#79c0ff" },
    { indent: 0, content: "}", color: "#c9d1d9" },
  ];

  return (
    <div className="w-full h-full bg-[#0d1117] rounded-xl overflow-hidden border border-[#21262d] font-mono text-xs flex flex-col">
      {/* Title bar */}
      <div className="bg-[#161b22] border-b border-[#21262d] px-3 py-2 flex items-center justify-between">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#fca5a5]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#fde68a]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#86efac]" />
        </div>
        <span className="text-[9px] text-[#8b949e] font-semibold tracking-wider">CodeAgent IDE</span>
        <div className="w-14" />
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar icons */}
        <div className="w-9 bg-[#0d1117] border-r border-[#21262d] flex flex-col items-center py-3 gap-3">
          {["📁", "🔀", "🤖", "🐛"].map((icon, i) => (
            <div
              key={i}
              className={`text-[11px] w-6 h-6 flex items-center justify-center rounded ${i === 2 ? "bg-[#161b22]" : "opacity-40"}`}
            >
              {icon}
            </div>
          ))}
        </div>

        {/* File explorer */}
        <div className="w-20 bg-[#0d1117] border-r border-[#21262d] py-2 px-1.5 space-y-1">
          <div className="text-[7px] text-[#484f58] font-semibold tracking-wider mb-2">WORKSPACE</div>
          {["src/", "agent.ts", "rag.py", "git/"].map((file) => (
            <div
              key={file}
              className={`text-[8px] px-1 py-0.5 rounded cursor-default ${
                file === "agent.ts"
                  ? "bg-[#1f3554] text-[#79c0ff]"
                  : "text-[#484f58] hover:text-[#8b949e]"
              }`}
            >
              {file}
            </div>
          ))}
        </div>

        {/* Editor */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="bg-[#161b22] border-b border-[#21262d] px-2 py-1 flex gap-2">
            <div className="bg-[#0d1117] text-[#79c0ff] text-[8px] px-2 py-0.5 rounded-t border-t border-[#2563eb]">agent.ts</div>
            <div className="text-[#484f58] text-[8px] px-2 py-0.5">rag.py</div>
          </div>

          <div className="flex-1 p-2 overflow-hidden bg-[#0d1117] flex flex-col justify-between">
            <div>
              {codeLines.map((line, i) => (
                <div key={i} className="flex text-[8px] leading-4" style={{ paddingLeft: `${line.indent * 10}px` }}>
                  <span className="text-[#21262d] w-4 mr-2 text-right flex-shrink-0 select-none">{i + 1}</span>
                  <span style={{ color: line.color }}>{line.content}</span>
                </div>
              ))}
            </div>

            {/* AI suggestion chip */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-2 bg-[#1f3554] border border-[#2563eb] border-opacity-50 rounded px-2 py-1.5"
            >
              <div className="flex items-center gap-1 mb-0.5">
                <span className="text-[#79c0ff] text-[10px]">✦</span>
                <span className="text-[8px] font-semibold text-[#79c0ff]">Agent Analyzing...</span>
              </div>
              <div className="text-[7px] text-[#8b949e] leading-3">
                Detected optimization in AST parsing. Suggesting cache layer implementation.
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Multi-Agent Preview ──────────────────────────────────────
export function MultiAgentPreview() {
  const agents = [
    { label: "RAG / FAISS",  color: "#dbeafe", text: "#2563eb" },
    { label: "SENTIMENT", color: "#fce7f3", text: "#be185d" },
    { label: "ESCALATION",    color: "#fef3c7", text: "#d97706" },
  ];

  return (
    <div className="w-full h-full bg-[#fafafa] rounded-xl overflow-hidden border border-[#e5e7eb] p-4 font-mono text-xs flex flex-col gap-2.5 shadow-sm">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-[#2563eb] animate-pulse" />
        <span className="text-[10px] font-bold tracking-wide text-[#111111]">
          MULTI-AGENT ORCHESTRATION
        </span>
      </div>

      {/* Task input */}
      <div className="bg-white border border-[#e5e7eb] rounded-lg px-3 py-2 flex items-center gap-2 shadow-sm">
        <div className="w-4 h-4 rounded-full bg-[#111111] flex items-center justify-center flex-shrink-0">
          <span className="text-[7px] text-white font-bold">U</span>
        </div>
        <span className="text-[9px] text-[#6b7280]">"I need help with my billing issue!"</span>
      </div>

      <div className="text-center text-[#d1d5db] text-[10px] leading-none">↓</div>

      {/* Orchestrator */}
      <div className="bg-[#111111] border border-[#374151] rounded-lg px-3 py-1.5 text-center shadow-lg">
        <div className="text-[9px] font-bold text-white tracking-wider">ROUTING ORCHESTRATOR</div>
        <div className="text-[8px] text-[#9ca3af] mt-0.5">parallel agent execution</div>
      </div>

      <div className="text-center text-[#d1d5db] text-[10px] leading-none">↓</div>

      {/* Specialized step agents */}
      <div className="grid grid-cols-3 gap-1.5">
        {agents.map((agent) => (
          <div
            key={agent.label}
            className="rounded-lg p-2 text-center border bg-white"
            style={{ borderColor: agent.color }}
          >
            <div className="text-[7px] font-bold leading-tight" style={{ color: agent.text }}>
              {agent.label}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center text-[#d1d5db] text-[10px] leading-none">↓</div>

      <div className="bg-white border border-[#e5e7eb] rounded-lg px-3 py-1.5 flex justify-between items-center shadow-sm">
        <div className="text-[8px] font-bold text-[#111111] tracking-wider">MongoDB Analytics</div>
        <div className="text-[8px] text-[#16a34a] font-medium">Logged ✓</div>
      </div>
    </div>
  );
}

// ─── EduRisk Preview ────────────────────────────────────────
export function EduRiskPreview() {
  return (
    <div className="w-full h-full bg-[#f8fafc] rounded-xl overflow-hidden border border-[#e5e7eb] font-mono text-xs">
      {/* Browser chrome */}
      <div className="bg-[#f1f5f9] border-b border-[#e2e8f0] px-3 py-2 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#fca5a5]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#fde68a]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#86efac]" />
        </div>
        <div className="flex-1 bg-white rounded border border-[#e2e8f0] h-4 mx-2 flex items-center px-2 justify-center">
          <span className="text-[8px] text-[#9ca3af]">edurisk.local / student-profile</span>
        </div>
      </div>

      <div className="p-4 h-full flex flex-col">
        <div className="flex items-center justify-between mb-3">
          <div>
            <div className="text-[10px] font-semibold text-[#111111] tracking-wide">Student #8492</div>
            <div className="text-[8px] text-[#6b7280]">Random Forest / SHAP Analysis</div>
          </div>
          <div className="bg-[#fee2e2] text-[#ef4444] text-[8px] font-bold px-2 py-0.5 rounded-full">
            HIGH RISK
          </div>
        </div>

        {/* Risk indicator */}
        <div className="bg-white border border-[#e5e7eb] rounded-lg p-3 mb-3 flex items-center justify-between shadow-sm">
          <div>
            <div className="text-[8px] text-[#6b7280] mb-0.5">PREDICTED DROPOUT PROBABILITY</div>
            <div className="text-xl font-black text-[#111111]">82%</div>
            <div className="text-[8px] text-[#ef4444] font-medium">↑ Increasing (WebSocket)</div>
          </div>
          <div className="relative w-10 h-10">
            <svg viewBox="0 0 40 40" className="w-full h-full -rotate-90">
              <circle cx="20" cy="20" r="16" fill="none" stroke="#f3f4f6" strokeWidth="4" />
              <circle cx="20" cy="20" r="16" fill="none" stroke="#ef4444" strokeWidth="4"
                strokeDasharray="82 100" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* SHAP Explainability indicators */}
        <div className="flex-1 space-y-1.5">
          <div className="text-[7px] text-[#9ca3af] font-semibold tracking-wider mb-1">SHAP FEATURE IMPACT</div>
          {[
            { label: "Low Engagement",  impact: "+0.42", color: "#ef4444", width: "80%" },
            { label: "Missed Deadlines", impact: "+0.21", color: "#f97316", width: "50%" },
            { label: "Past Grades", impact: "-0.15", color: "#22c55e", width: "35%" },
          ].map(({ label, impact, color, width }) => (
            <div key={label} className="flex items-center justify-between gap-2">
              <span className="text-[8px] text-[#6b7280] w-20 truncate">{label}</span>
              <div className="flex-1 h-1.5 bg-[#f3f4f6] rounded-full overflow-hidden">
                <div className="h-full rounded-full" style={{ background: color, width }} />
              </div>
              <span className="text-[8px] font-medium" style={{ color }}>{impact}</span>
            </div>
          ))}
        </div>
        
        {/* Intervention Button */}
        <div className="mt-2 bg-[#111111] text-white text-[9px] font-semibold text-center py-1.5 rounded cursor-pointer hover:bg-[#374151] transition-colors">
          TRIGGER FACULTY INTERVENTION
        </div>
      </div>
    </div>
  );
}
