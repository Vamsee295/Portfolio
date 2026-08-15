"use client";

// ─── Ultron AI Agent Preview ──────────────────────────────────
export function UltronPreview() {
  const agents = [
    { label: "Browser", color: "#dbeafe", text: "#2563eb" },
    { label: "Job",     color: "#dcfce7", text: "#16a34a" },
    { label: "Memory",  color: "#fef3c7", text: "#d97706" },
    { label: "Voice",   color: "#fce7f3", text: "#be185d" },
    { label: "App",     color: "#ede9fe", text: "#7c3aed" },
  ];

  return (
    <div className="w-full h-full bg-[#f8fafc] rounded-xl overflow-hidden border border-[#e5e7eb] p-4 font-mono text-xs flex flex-col gap-2.5">
      {/* Header */}
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-[#2563eb] animate-pulse" />
        <span className="text-[10px] font-bold tracking-wide text-[#111111]">
          ULTRON — LOCAL AI AGENT
        </span>
      </div>

      {/* User input */}
      <div className="bg-white border border-[#e5e7eb] rounded-lg px-3 py-2 flex items-center gap-2 shadow-sm">
        <div className="w-4 h-4 rounded-full bg-[#111111] flex items-center justify-center flex-shrink-0">
          <span className="text-[7px] text-white font-bold">U</span>
        </div>
        <span className="text-[9px] text-[#6b7280]">Find ML internships and apply...</span>
      </div>

      <div className="text-center text-[#d1d5db] text-[10px] leading-none">↓</div>

      {/* Orchestrator */}
      <div className="bg-[#dbeafe] border border-[#bfdbfe] rounded-lg px-3 py-1.5 text-center">
        <div className="text-[9px] font-bold text-[#2563eb] tracking-wider">ORCHESTRATOR</div>
        <div className="text-[8px] text-[#3b82f6] mt-0.5">plan → execute → observe</div>
      </div>

      <div className="text-center text-[#d1d5db] text-[10px] leading-none">↓</div>

      {/* Specialized Agents */}
      <div className="grid grid-cols-5 gap-1">
        {agents.map((a) => (
          <div
            key={a.label}
            className="rounded-lg p-1.5 text-center border"
            style={{ background: a.color, borderColor: a.color }}
          >
            <div className="text-[7px] font-bold leading-tight" style={{ color: a.text }}>
              {a.label}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center text-[#d1d5db] text-[10px] leading-none">↓</div>

      {/* Result */}
      <div className="bg-[#111111] rounded-lg px-3 py-1.5 text-center">
        <div className="text-[9px] font-bold text-white tracking-wider">OUTPUT</div>
        <div className="text-[8px] text-[#9ca3af] mt-0.5">
          Task complete · Ollama / SQLite
        </div>
      </div>
    </div>
  );
}

// ─── IDE Preview ──────────────────────────────────────────────
export function IDEPreview() {
  const codeLines = [
    { indent: 0, content: "async function analyzeCode() {", color: "#c9d1d9" },
    { indent: 1, content: "const ast = await parser.parse(", color: "#8b949e" },
    { indent: 2, content: "source, { tokens: true }", color: "#8b949e" },
    { indent: 1, content: ");", color: "#8b949e" },
    { indent: 1, content: "return ai.suggest(ast);", color: "#79c0ff" },
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
        <span className="text-[9px] text-[#8b949e] font-semibold tracking-wider">StackFlow IDE</span>
        <div className="w-14" />
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar icons */}
        <div className="w-9 bg-[#0d1117] border-r border-[#21262d] flex flex-col items-center py-3 gap-3">
          {["📁", "🔀", "🤖", "🐛"].map((icon, i) => (
            <div
              key={i}
              className={`text-[11px] w-6 h-6 flex items-center justify-center rounded ${i === 0 ? "bg-[#161b22]" : "opacity-40"}`}
            >
              {icon}
            </div>
          ))}
        </div>

        {/* File explorer */}
        <div className="w-20 bg-[#0d1117] border-r border-[#21262d] py-2 px-1.5 space-y-1">
          <div className="text-[7px] text-[#484f58] font-semibold tracking-wider mb-2">EXPLORER</div>
          {["src/", "main.ts", "ai.ts", "git/"].map((file) => (
            <div
              key={file}
              className={`text-[8px] px-1 py-0.5 rounded cursor-default ${
                file === "main.ts"
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
            <div className="bg-[#0d1117] text-[#79c0ff] text-[8px] px-2 py-0.5 rounded-t border-t border-[#2563eb]">main.ts</div>
            <div className="text-[#484f58] text-[8px] px-2 py-0.5">ai.ts</div>
          </div>

          <div className="flex-1 p-2 overflow-hidden bg-[#0d1117]">
            {codeLines.map((line, i) => (
              <div key={i} className="flex text-[8px] leading-4" style={{ paddingLeft: `${line.indent * 10}px` }}>
                <span className="text-[#21262d] w-4 mr-2 text-right flex-shrink-0 select-none">{i + 1}</span>
                <span style={{ color: line.color }}>{line.content}</span>
              </div>
            ))}

            {/* AI suggestion chip */}
            <div className="mt-2 bg-[#1f3554] border border-[#2563eb] border-opacity-50 rounded px-2 py-1.5">
              <div className="flex items-center gap-1 mb-0.5">
                <span className="text-[#79c0ff] text-[10px]">✦</span>
                <span className="text-[8px] font-semibold text-[#79c0ff]">AI Suggestion</span>
              </div>
              <div className="text-[7px] text-[#8b949e] leading-3">
                Cache AST result for repeated calls to improve performance.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Multi-Agent Preview ──────────────────────────────────────
export function MultiAgentPreview() {
  const steps = [
    { label: "RESEARCH",  color: "#dbeafe", text: "#2563eb" },
    { label: "REASONING", color: "#dcfce7", text: "#16a34a" },
    { label: "ACTION",    color: "#fef3c7", text: "#d97706" },
  ];

  return (
    <div className="w-full h-full bg-[#f8fafc] rounded-xl overflow-hidden border border-[#e5e7eb] p-4 font-mono text-xs flex flex-col gap-2.5">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-[#2563eb] animate-pulse" />
        <span className="text-[10px] font-bold tracking-wide text-[#111111]">
          MULTI-AGENT SYSTEM
        </span>
      </div>

      {/* Task input */}
      <div className="bg-white border border-[#e5e7eb] rounded-lg px-3 py-2 flex items-center gap-2 shadow-sm">
        <div className="w-4 h-4 rounded-full bg-[#111111] flex items-center justify-center flex-shrink-0">
          <span className="text-[7px] text-white font-bold">T</span>
        </div>
        <span className="text-[9px] text-[#6b7280]">USER TASK</span>
      </div>

      <div className="text-center text-[#d1d5db] text-[10px] leading-none">↓</div>

      {/* Orchestrator */}
      <div className="bg-[#dbeafe] border border-[#bfdbfe] rounded-lg px-3 py-1.5 text-center">
        <div className="text-[9px] font-bold text-[#2563eb] tracking-wider">ORCHESTRATOR</div>
        <div className="text-[8px] text-[#3b82f6] mt-0.5">coordinating agents...</div>
      </div>

      <div className="text-center text-[#d1d5db] text-[10px] leading-none">↓</div>

      {/* Specialized step agents */}
      <div className="grid grid-cols-3 gap-1.5">
        {steps.map((step) => (
          <div
            key={step.label}
            className="rounded-lg p-2 text-center border"
            style={{ background: step.color, borderColor: step.color }}
          >
            <div className="text-[7px] font-bold leading-tight" style={{ color: step.text }}>
              {step.label}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center text-[#d1d5db] text-[10px] leading-none">↓</div>

      <div className="bg-[#111111] rounded-lg px-3 py-1.5 text-center">
        <div className="text-[9px] font-bold text-white tracking-wider">RESULT</div>
        <div className="text-[8px] text-[#9ca3af] mt-0.5">Task complete ✓</div>
      </div>
    </div>
  );
}

// ─── Dashboard Preview ────────────────────────────────────────
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
          <span className="text-[9px] text-[#9ca3af]">dashboard · visual preview</span>
        </div>
      </div>

      <div className="p-4 h-full">
        <div className="flex items-center justify-between mb-3">
          <div>
            <div className="text-[10px] font-semibold text-[#111111] tracking-wide">Student Analytics</div>
            <div className="text-[9px] text-[#6b7280]">Risk Assessment Dashboard</div>
          </div>
          <div className="bg-[#dbeafe] text-[#2563eb] text-[8px] font-semibold px-2 py-0.5 rounded-full">
            ML POWERED
          </div>
        </div>

        {/* Risk indicator */}
        <div className="bg-white border border-[#e5e7eb] rounded-lg p-3 mb-3 flex items-center justify-between shadow-sm">
          <div>
            <div className="text-[9px] text-[#6b7280] mb-0.5">DROPOUT RISK</div>
            <div className="text-2xl font-black text-[#111111]">Low</div>
            <div className="text-[9px] text-[#22c55e] font-medium">↓ Stable</div>
          </div>
          <div className="relative w-12 h-12">
            <svg viewBox="0 0 40 40" className="w-full h-full -rotate-90">
              <circle cx="20" cy="20" r="16" fill="none" stroke="#f3f4f6" strokeWidth="4" />
              <circle cx="20" cy="20" r="16" fill="none" stroke="#22c55e" strokeWidth="4"
                strokeDasharray="30 70" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* Feature indicators */}
        <div className="space-y-2">
          {[
            { label: "Attendance Signal",   color: "#22c55e" },
            { label: "Performance Signal",  color: "#2563eb" },
            { label: "Engagement Signal",   color: "#8b5cf6" },
          ].map(({ label, color }) => (
            <div key={label} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: color }} />
              <span className="text-[9px] text-[#6b7280]">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Reminder App Preview ─────────────────────────────────────
export function ReminderPreview() {
  const tasks = [
    { label: "Review ML paper",    done: true,  color: "#22c55e" },
    { label: "Build agent module", done: false, color: "#2563eb" },
    { label: "Submit assignment",  done: false, color: "#d97706" },
    { label: "Weekly review",      done: true,  color: "#22c55e" },
  ];

  return (
    <div className="w-full h-full bg-white rounded-xl overflow-hidden border border-[#e5e7eb] font-mono text-xs flex flex-col shadow-sm">
      {/* App chrome */}
      <div className="bg-[#111111] px-4 py-3 flex items-center justify-between">
        <span className="text-[10px] font-bold text-white tracking-wider">REMINDERS</span>
        <div className="flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" />
          <span className="text-[8px] text-[#9ca3af]">offline-first</span>
        </div>
      </div>

      {/* Category chips */}
      <div className="flex gap-1.5 px-3 py-2 border-b border-[#f3f4f6]">
        {["All", "Today", "Work", "Study"].map((cat, i) => (
          <span
            key={cat}
            className={`text-[8px] px-2 py-0.5 rounded-full font-medium ${
              i === 0 ? "bg-[#111111] text-white" : "bg-[#f3f4f6] text-[#6b7280]"
            }`}
          >
            {cat}
          </span>
        ))}
      </div>

      {/* Task list */}
      <div className="flex-1 px-3 py-2 flex flex-col gap-1.5">
        {tasks.map((task, i) => (
          <div key={i} className="flex items-center gap-2.5 py-1 border-b border-[#f9fafb] last:border-0">
            <div
              className={`w-3.5 h-3.5 rounded-full flex-shrink-0 flex items-center justify-center border ${
                task.done ? "border-[#22c55e] bg-[#22c55e]" : "border-[#d1d5db]"
              }`}
            >
              {task.done && <span className="text-[6px] text-white">✓</span>}
            </div>
            <span className={`text-[9px] ${task.done ? "line-through text-[#9ca3af]" : "text-[#374151]"}`}>
              {task.label}
            </span>
          </div>
        ))}
      </div>

      {/* Stats bar */}
      <div className="bg-[#f8fafc] border-t border-[#e5e7eb] px-3 py-2 flex items-center justify-between">
        <span className="text-[8px] text-[#9ca3af]">2 / 4 complete</span>
        <div className="flex items-center gap-1">
          <div className="w-12 h-1 bg-[#f3f4f6] rounded-full overflow-hidden">
            <div className="w-1/2 h-full bg-[#22c55e] rounded-full" />
          </div>
          <span className="text-[8px] text-[#9ca3af]">50%</span>
        </div>
      </div>
    </div>
  );
}

