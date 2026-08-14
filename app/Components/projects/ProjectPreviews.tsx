"use client";

// ─── Dashboard Preview ───────────────────────────────────────
export function DashboardPreview() {
  return (
    <div className="w-full h-full bg-[#f8fafc] rounded-xl overflow-hidden border border-[#e5e7eb] font-mono text-xs">
      {/* Browser chrome */}
      <div className="bg-[#f1f5f9] border-b border-[#e2e8f0] px-3 py-2 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#fca5a5]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#fde68a]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#86efac]" />
        </div>
        <div className="flex-1 bg-white rounded border border-[#e2e8f0] h-4 mx-2 flex items-center px-2">
          <span className="text-[9px] text-[#9ca3af]">dashboard.app / analytics</span>
        </div>
      </div>

      <div className="p-4 h-full">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-[10px] font-semibold text-[#111111] tracking-wide">
              Student Analytics
            </div>
            <div className="text-[9px] text-[#6b7280]">Risk Assessment Dashboard</div>
          </div>
          <div className="bg-[#dbeafe] text-[#2563eb] text-[9px] font-semibold px-2 py-0.5 rounded-full">
            AI POWERED
          </div>
        </div>

        {/* Risk Score Card */}
        <div className="bg-white border border-[#e5e7eb] rounded-lg p-3 mb-3 flex items-center justify-between shadow-sm">
          <div>
            <div className="text-[9px] text-[#6b7280] mb-0.5">AI RISK SCORE</div>
            <div className="text-2xl font-black text-[#111111]">34</div>
            <div className="text-[9px] text-[#22c55e] font-medium">↓ Low Risk</div>
          </div>
          <div className="relative w-14 h-14">
            <svg viewBox="0 0 40 40" className="w-full h-full -rotate-90">
              <circle cx="20" cy="20" r="16" fill="none" stroke="#f3f4f6" strokeWidth="4" />
              <circle
                cx="20" cy="20" r="16" fill="none"
                stroke="#2563eb" strokeWidth="4"
                strokeDasharray={`${(34 / 100) * 100.5} 100.5`}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-[9px] font-bold text-[#2563eb]">
              34%
            </div>
          </div>
        </div>

        {/* Metrics */}
        <div className="space-y-2">
          {[
            { label: "Attendance", value: 84, color: "#22c55e" },
            { label: "Performance", value: 78, color: "#2563eb" },
            { label: "Engagement", value: 91, color: "#8b5cf6" },
          ].map(({ label, value, color }) => (
            <div key={label}>
              <div className="flex justify-between text-[9px] text-[#6b7280] mb-1">
                <span>{label}</span>
                <span className="font-semibold text-[#111111]">{value}%</span>
              </div>
              <div className="h-1.5 bg-[#f3f4f6] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all"
                  style={{ width: `${value}%`, background: color }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Multi-Agent Preview ─────────────────────────────────────
export function MultiAgentPreview() {
  const agents = ["Research Agent", "Reasoning Agent", "Action Agent"];

  return (
    <div className="w-full h-full bg-[#f8fafc] rounded-xl overflow-hidden border border-[#e5e7eb] p-4 font-mono text-xs flex flex-col gap-3">
      {/* Header */}
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-[#2563eb] animate-pulse" />
        <span className="text-[10px] font-semibold tracking-wide text-[#111111]">
          Multi-Agent System
        </span>
      </div>

      {/* User input */}
      <div className="bg-white border border-[#e5e7eb] rounded-lg px-3 py-2 flex items-center gap-2 shadow-sm">
        <div className="w-4 h-4 rounded-full bg-[#111111] flex items-center justify-center flex-shrink-0">
          <span className="text-[7px] text-white font-bold">U</span>
        </div>
        <span className="text-[9px] text-[#6b7280]">Solve a complex task...</span>
      </div>

      {/* Arrow */}
      <div className="text-center text-[#d1d5db] text-[10px]">↓</div>

      {/* Orchestrator */}
      <div className="bg-[#dbeafe] border border-[#bfdbfe] rounded-lg px-3 py-2 text-center">
        <div className="text-[9px] font-bold text-[#2563eb] tracking-wider">ORCHESTRATOR</div>
        <div className="text-[8px] text-[#3b82f6] mt-0.5">Coordinating agents...</div>
      </div>

      {/* Arrow */}
      <div className="text-center text-[#d1d5db] text-[10px]">↓</div>

      {/* Agents */}
      <div className="grid grid-cols-3 gap-2">
        {agents.map((agent, i) => (
          <div
            key={agent}
            className="bg-white border border-[#e5e7eb] rounded-lg p-2 text-center shadow-sm"
          >
            <div
              className="w-5 h-5 rounded-full flex items-center justify-center mx-auto mb-1"
              style={{
                background: ["#dbeafe", "#dcfce7", "#fef3c7"][i],
              }}
            >
              <span className="text-[8px]">⚡</span>
            </div>
            <div
              className="text-[7px] font-semibold leading-tight"
              style={{ color: ["#2563eb", "#16a34a", "#d97706"][i] }}
            >
              {agent.split(" ")[0]}
            </div>
          </div>
        ))}
      </div>

      {/* Arrow + Result */}
      <div className="text-center text-[#d1d5db] text-[10px]">↓</div>
      <div className="bg-[#111111] rounded-lg px-3 py-2 text-center">
        <div className="text-[9px] font-bold text-white tracking-wider">RESULT</div>
        <div className="text-[8px] text-[#9ca3af] mt-0.5">Task complete ✓</div>
      </div>
    </div>
  );
}

// ─── IDE Preview ─────────────────────────────────────────────
export function IDEPreview() {
  const codeLines = [
    { indent: 0, content: "async function analyzeCode() {", color: "#111111" },
    { indent: 1, content: "const ast = await parser.parse(", color: "#6b7280" },
    { indent: 2, content: "source, { tokens: true }", color: "#6b7280" },
    { indent: 1, content: ");", color: "#6b7280" },
    { indent: 1, content: "return ai.suggest(ast);", color: "#2563eb" },
    { indent: 0, content: "}", color: "#111111" },
  ];

  return (
    <div className="w-full h-full bg-[#0f172a] rounded-xl overflow-hidden border border-[#1e293b] font-mono text-xs flex flex-col">
      {/* Title bar */}
      <div className="bg-[#1e293b] border-b border-[#334155] px-3 py-2 flex items-center justify-between">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#fca5a5]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#fde68a]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#86efac]" />
        </div>
        <span className="text-[9px] text-[#64748b] font-semibold tracking-wider">
          StackFlow IDE
        </span>
        <div className="w-14" />
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-10 bg-[#0f172a] border-r border-[#1e293b] flex flex-col items-center py-3 gap-3">
          {["📁", "🔀", "🤖", "🐛"].map((icon, i) => (
            <div
              key={i}
              className={`text-[12px] w-7 h-7 flex items-center justify-center rounded ${
                i === 0 ? "bg-[#1e293b]" : "opacity-40"
              }`}
            >
              {icon}
            </div>
          ))}
        </div>

        {/* File explorer */}
        <div className="w-20 bg-[#0f172a] border-r border-[#1e293b] py-2 px-2 space-y-1">
          <div className="text-[8px] text-[#475569] font-semibold tracking-wider mb-2">
            EXPLORER
          </div>
          {["src/", "main.ts", "ai.ts", "git/"].map((file, i) => (
            <div
              key={file}
              className={`text-[8px] px-1 py-0.5 rounded cursor-default ${
                file === "main.ts"
                  ? "bg-[#1e3a5f] text-[#93c5fd]"
                  : "text-[#64748b] hover:text-[#94a3b8]"
              }`}
            >
              {file}
            </div>
          ))}
        </div>

        {/* Editor + AI panel */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Tab bar */}
          <div className="bg-[#1e293b] border-b border-[#334155] px-2 py-1 flex gap-2">
            <div className="bg-[#0f172a] text-[#93c5fd] text-[8px] px-2 py-0.5 rounded-t border-t border-[#2563eb]">
              main.ts
            </div>
            <div className="text-[#475569] text-[8px] px-2 py-0.5">ai.ts</div>
          </div>

          {/* Code */}
          <div className="flex-1 p-2 overflow-hidden bg-[#0f172a]">
            {codeLines.map((line, i) => (
              <div
                key={i}
                className="flex text-[8px] leading-4"
                style={{ paddingLeft: `${line.indent * 10}px` }}
              >
                <span className="text-[#334155] w-4 mr-2 text-right flex-shrink-0 select-none">
                  {i + 1}
                </span>
                <span style={{ color: line.color }}>{line.content}</span>
              </div>
            ))}

            {/* AI suggestion */}
            <div className="mt-2 bg-[#1e3a5f] border border-[#2563eb] border-opacity-40 rounded px-2 py-1.5">
              <div className="flex items-center gap-1 mb-1">
                <span className="text-[#2563eb] text-[10px]">✦</span>
                <span className="text-[8px] font-semibold text-[#93c5fd]">
                  AI Suggestion
                </span>
              </div>
              <div className="text-[7.5px] text-[#64748b] leading-3">
                Consider caching the AST result for repeated calls to improve performance.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

