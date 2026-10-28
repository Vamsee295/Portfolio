// ─── StudyHub Preview ────────────────────────────────────────────
// A compact, code-native representation of the live StudyHub interface.
export function StudyHubPreview() {
  const topics = ["DSA", "Java", "Python", "SQL", "DBMS"];
  const tracks = ["Software Engineer", "AI / ML Engineer", "Data Engineer"];

  return (
    <div className="w-full h-full overflow-hidden bg-[#FBF8F2] font-sans text-xs">
      <div className="h-9 px-3 border-b border-[#DDD2C1] flex items-center justify-between">
        <div className="font-black tracking-tight text-[#191614] text-[10px]">
          STUDY<span className="text-[#C8603A]">HUB</span>
        </div>
        <div className="flex gap-2 text-[7px] text-[#8C8178] font-medium">
          <span>Learn</span><span>Roadmaps</span><span>Practice</span>
        </div>
        <div className="rounded bg-[#191614] px-2 py-1 text-[7px] font-semibold text-white">Get Started</div>
      </div>

      <div className="p-4 bg-[#F5EFE6] border-b border-[#DDD2C1]">
        <p className="text-[7px] font-mono text-[#C8603A] mb-1">ENGINEERING CAREERS</p>
        <p className="text-[13px] leading-tight font-bold tracking-tight text-[#191614] max-w-[220px]">Everything you need to prepare for your first tech job.</p>
        <div className="mt-3 flex rounded-md border border-[#DDD2C1] bg-[#FBF8F2] p-1.5 items-center gap-2">
          <span className="text-[7px] text-[#8C8178] flex-1">What do you want to learn?</span>
          <span className="rounded bg-[#191614] px-2 py-1 text-[7px] font-semibold text-white">Search</span>
        </div>
        <div className="mt-2 flex gap-1 overflow-hidden">
          {topics.map((topic) => <span key={topic} className="shrink-0 rounded-full border border-[#DDD2C1] bg-[#FBF8F2] px-1.5 py-0.5 text-[6px] text-[#6B615A]">{topic}</span>)}
        </div>
      </div>

      <div className="p-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[8px] font-bold text-[#191614]">Choose your engineering path</span>
          <span className="text-[6px] text-[#C8603A]">Explore tracks →</span>
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          {tracks.map((track, index) => (
            <div key={track} className="rounded-md border border-[#DDD2C1] p-1.5 bg-[#FBF8F2]">
              <div className="h-1 w-7 rounded bg-[#F6D9CB] mb-1" />
              <p className="text-[6px] leading-tight font-semibold text-[#3A332E]">{track}</p>
              <p className="text-[5px] text-[#8C8178] mt-1">Structured roadmap</p>
              {index === 0 && <div className="mt-1.5 h-1 rounded-full bg-[#DDD2C1] overflow-hidden"><div className="h-full w-3/5 bg-[#C8603A]" /></div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Multi-Agent Preview ──────────────────────────────────────
export function MultiAgentPreview() {
  const agents = [
    { label: "RAG / FAISS",  color: "#F6D9CB", text: "#C8603A" },
    { label: "SENTIMENT", color: "#CFE6DF", text: "#2F6F6A" },
    { label: "ESCALATION",    color: "#F7E4B5", text: "#A87512" },
  ];

  return (
    <div className="w-full h-full bg-[#F5EFE6] overflow-hidden p-4 font-mono text-xs flex flex-col gap-2.5">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-[#C8603A] animate-pulse" />
        <span className="text-[10px] font-bold tracking-wide text-[#191614]">
          MULTI-AGENT ORCHESTRATION
        </span>
      </div>

      {/* Task input */}
      <div className="bg-[#FBF8F2] border border-[#DDD2C1] rounded-lg px-3 py-2 flex items-center gap-2 shadow-sm">
        <div className="w-4 h-4 rounded-full bg-[#191614] flex items-center justify-center flex-shrink-0">
          <span className="text-[7px] text-white font-bold">U</span>
        </div>
        <span className="text-[9px] text-[#6B615A]">"I need help with my billing issue!"</span>
      </div>

      <div className="text-center text-[#C9BCA8] text-[10px] leading-none">↓</div>

      {/* Orchestrator */}
      <div className="bg-[#191614] border border-[#3A332E] rounded-lg px-3 py-1.5 text-center shadow-lg">
        <div className="text-[9px] font-bold text-white tracking-wider">ROUTING ORCHESTRATOR</div>
        <div className="text-[8px] text-[#8C8178] mt-0.5">parallel agent execution</div>
      </div>

      <div className="text-center text-[#C9BCA8] text-[10px] leading-none">↓</div>

      {/* Specialized step agents */}
      <div className="grid grid-cols-3 gap-1.5">
        {agents.map((agent) => (
          <div
            key={agent.label}
            className="rounded-lg p-2 text-center border bg-[#FBF8F2]"
            style={{ borderColor: agent.color }}
          >
            <div className="text-[7px] font-bold leading-tight" style={{ color: agent.text }}>
              {agent.label}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center text-[#C9BCA8] text-[10px] leading-none">↓</div>

      <div className="bg-[#FBF8F2] border border-[#DDD2C1] rounded-lg px-3 py-1.5 flex justify-between items-center shadow-sm">
        <div className="text-[8px] font-bold text-[#191614] tracking-wider">MongoDB Analytics</div>
        <div className="text-[8px] text-[#2F6F6A] font-medium">Logged ✓</div>
      </div>
    </div>
  );
}

// ─── EduRisk Preview ────────────────────────────────────────
export function EduRiskPreview() {
  return (
    <div className="w-full h-full bg-[#F5EFE6] overflow-hidden font-mono text-xs">
      {/* Browser chrome */}
      <div className="bg-[#ECE3D4] border-b border-[#DDD2C1] px-3 py-2 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#C8603A]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#E3A72F]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#7CC9B2]" />
        </div>
        <div className="flex-1 bg-[#FBF8F2] rounded border border-[#DDD2C1] h-4 mx-2 flex items-center px-2 justify-center">
          <span className="text-[8px] text-[#8C8178]">edurisk.local / student-profile</span>
        </div>
      </div>

      <div className="p-4 h-full flex flex-col">
        <div className="flex items-center justify-between mb-3">
          <div>
            <div className="text-[10px] font-semibold text-[#191614] tracking-wide">Student #8492</div>
            <div className="text-[8px] text-[#6B615A]">Random Forest / SHAP Analysis</div>
          </div>
          <div className="bg-[#F6D9CB] text-[#C8603A] text-[8px] font-bold px-2 py-0.5 rounded-full">
            HIGH RISK
          </div>
        </div>

        {/* Risk indicator */}
        <div className="bg-[#FBF8F2] border border-[#DDD2C1] rounded-lg p-3 mb-3 flex items-center justify-between shadow-sm">
          <div>
            <div className="text-[8px] text-[#6B615A] mb-0.5">PREDICTED DROPOUT PROBABILITY</div>
            <div className="text-xl font-black text-[#191614]">82%</div>
            <div className="text-[8px] text-[#C8603A] font-medium">↑ Increasing (WebSocket)</div>
          </div>
          <div className="relative w-10 h-10">
            <svg viewBox="0 0 40 40" className="w-full h-full -rotate-90">
              <circle cx="20" cy="20" r="16" fill="none" stroke="#ECE3D4" strokeWidth="4" />
              <circle cx="20" cy="20" r="16" fill="none" stroke="#C8603A" strokeWidth="4"
                strokeDasharray="82 100" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* SHAP Explainability indicators */}
        <div className="flex-1 space-y-1.5">
          <div className="text-[7px] text-[#8C8178] font-semibold tracking-wider mb-1">SHAP FEATURE IMPACT</div>
          {[
            { label: "Low Engagement",  impact: "+0.42", color: "#C8603A", width: "80%" },
            { label: "Missed Deadlines", impact: "+0.21", color: "#E3A72F", width: "50%" },
            { label: "Past Grades", impact: "-0.15", color: "#2F6F6A", width: "35%" },
          ].map(({ label, impact, color, width }) => (
            <div key={label} className="flex items-center justify-between gap-2">
              <span className="text-[8px] text-[#6B615A] w-20 truncate">{label}</span>
              <div className="flex-1 h-1.5 bg-[#ECE3D4] rounded-full overflow-hidden">
                <div className="h-full rounded-full" style={{ background: color, width }} />
              </div>
              <span className="text-[8px] font-medium" style={{ color }}>{impact}</span>
            </div>
          ))}
        </div>
        
        {/* Intervention Button */}
        <div className="mt-2 bg-[#191614] text-white text-[9px] font-semibold text-center py-1.5 rounded cursor-pointer hover:bg-[#3A332E] transition-colors">
          TRIGGER FACULTY INTERVENTION
        </div>
      </div>
    </div>
  );
}
