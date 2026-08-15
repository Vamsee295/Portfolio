export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  slug: string;
  previewType: "ultron" | "ide" | "multiagent" | "dashboard" | "reminder";
}

export const projects: Project[] = [
  {
    id: "ultron-ai-agent",
    number: "01",
    title: "Ultron — Personal AI Agent",
    category: "AI AGENTS · LLMs · AUTOMATION",
    description:
      "A local-first autonomous AI agent system that combines planning, tool execution, memory, browser automation, job workflows, voice interaction, and safety controls — built on local LLMs via Ollama.",
    technologies: ["Python", "AI Agents", "LLMs", "Ollama", "Playwright", "SQLite"],
    slug: "ultron-ai-agent",
    previewType: "ultron",
  },
  {
    id: "stackflow-ide",
    number: "02",
    title: "StackFlow IDE",
    category: "SOFTWARE · AI · DEVELOPER TOOLS",
    description:
      "An AI-powered desktop development environment combining code editing, intelligent debugging, Git intelligence, and local AI capabilities for a smarter developer workflow.",
    technologies: ["TypeScript", "React", "AI", "Developer Tools"],
    slug: "stackflow-ide",
    previewType: "ide",
  },
  {
    id: "multi-agent-ai",
    number: "03",
    title: "Multi-Agent AI",
    category: "AI · AGENTS · AUTOMATION",
    description:
      "A multi-agent AI system where an orchestrator coordinates specialized agents to research, reason, and execute tasks through structured workflows and LLM-powered decision-making.",
    technologies: ["Python", "AI Agents", "LLMs", "Automation"],
    slug: "multi-agent-ai",
    previewType: "multiagent",
  },
  {
    id: "student-dropout",
    number: "04",
    title: "Student Dropout Risk Dashboard",
    category: "AI / ML · DATA · ANALYTICS",
    description:
      "A predictive analytics platform designed to identify students at risk and provide actionable insights through role-based dashboards for educators and administrators.",
    technologies: ["Python", "Machine Learning", "React", "Data Analytics"],
    slug: "student-dropout",
    previewType: "dashboard",
  },
  {
    id: "reminder-app",
    number: "05",
    title: "Reminder App",
    category: "MOBILE · PRODUCTIVITY · LOCAL-FIRST",
    description:
      "A local-first mobile productivity app for managing tasks, reminders, and checklists with category filtering, statistics, and offline-first behavior — built for reliability without a backend.",
    technologies: ["React Native", "TypeScript", "Local Storage", "Mobile"],
    slug: "reminder-app",
    previewType: "reminder",
  },
];
