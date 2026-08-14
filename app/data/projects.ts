export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  slug: string;
  previewType: "dashboard" | "multiagent" | "ide";
  accentColor?: string;
}

export const projects: Project[] = [
  {
    id: "student-dropout",
    number: "01",
    title: "Student Dropout Risk Dashboard",
    category: "AI / ML · DATA · ANALYTICS",
    description:
      "A predictive analytics platform designed to identify students at risk and provide actionable insights through role-based dashboards.",
    technologies: ["Python", "Machine Learning", "React", "Data Analytics"],
    slug: "student-dropout",
    previewType: "dashboard",
  },
  {
    id: "multi-agent-ai",
    number: "02",
    title: "Multi-Agent AI",
    category: "AI · AGENTS · AUTOMATION",
    description:
      "A multi-agent AI system where specialized agents collaborate through coordinated workflows to solve complex tasks intelligently.",
    technologies: ["Python", "AI Agents", "LLMs", "Automation"],
    slug: "multi-agent-ai",
    previewType: "multiagent",
  },
  {
    id: "stackflow-ide",
    number: "03",
    title: "StackFlow IDE",
    category: "SOFTWARE · AI · DEVELOPER TOOLS",
    description:
      "An AI-powered desktop development environment combining code editing, intelligent debugging, Git intelligence, and local AI capabilities.",
    technologies: ["TypeScript", "React", "AI", "Developer Tools"],
    slug: "stackflow-ide",
    previewType: "ide",
  },
];
