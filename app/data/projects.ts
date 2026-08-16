export type LabCategory =
  | "All"
  | "AI / Agents"
  | "Machine Learning"
  | "Computer Vision"
  | "Data Science"
  | "Web"
  | "Mobile"
  | "Developer Tools"
  | "Automation"
  | "Academic"
  | "Experiments";

export interface Project {
  id: string;
  number?: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  featured: boolean;
  previewType?: "codeagent" | "multiagent" | "edurisk";
  labCategory?: LabCategory;
  tier?: 1 | 2 | 3 | 4;
  status?: "IN DEVELOPMENT";
}

export const projects: Project[] = [
  // ─── FEATURED PROJECTS (3 MAIN PROJECTS) ──────────────────────────────────
  {
    id: "codeagent-ide",
    number: "01",
    title: "CodeAgent IDE",
    category: "AI Developer Tool / AI IDE",
    description:
      "An AI-powered development environment designed to assist developers with intelligent coding workflows, project interaction, and agent-driven development.",
    technologies: ["AI Agents", "Developer Tools", "Intelligent Workflows"],
    githubUrl: "https://github.com/Vamsee295/CodeAgent-IDE",
    featured: true,
    previewType: "codeagent",
  },
  {
    id: "multi-agent-ai",
    number: "02",
    title: "Multi-Agent AI",
    category: "AI Agents / RAG / Intelligent Systems",
    description:
      "An AI-powered customer support platform using multi-agent orchestration, RAG, sentiment analysis, analytics, and automated escalation workflows.",
    technologies: ["Python", "FastAPI", "Next.js", "RAG", "FAISS", "MongoDB"],
    githubUrl: "https://github.com/Vamsee295/Multi-Agent-AI",
    featured: true,
    previewType: "multiagent",
  },
  {
    id: "student-dropout-risk",
    number: "03",
    title: "EduRisk — Student Dropout Risk Platform",
    category: "Machine Learning / XAI / Education Analytics",
    description:
      "An AI-powered educational analytics platform that predicts student dropout risk and provides explainable insights and intervention workflows.",
    technologies: ["Python", "FastAPI", "Next.js", "Machine Learning", "SHAP"],
    githubUrl: "https://github.com/Vamsee295/Student-dropout-risk-dashboard",
    featured: true,
    previewType: "edurisk",
  },

  // ─── LABS — TIER 1 ────────────────────────────────────────────────────────
  {
    id: "personal-ai-ultron",
    title: "Personal AI — Ultron",
    category: "AI Agent / Local AI / AI IDE",
    description: "An ambitious personal AI assistant and development environment.",
    technologies: ["AI", "Local LLMs", "Agents"],
    githubUrl: "https://github.com/Vamsee295/Personal_AI",
    featured: false,
    labCategory: "AI / Agents",
    tier: 1,
    status: "IN DEVELOPMENT",
  },
  {
    id: "facial-recognition",
    title: "Facial Recognition",
    category: "Computer Vision / Deep Learning",
    description: "Deep learning based facial recognition system.",
    technologies: ["Python", "Computer Vision", "Deep Learning"],
    githubUrl: "https://github.com/Vamsee295/Facial-Rec",
    featured: false,
    labCategory: "Computer Vision",
    tier: 1,
  },
  {
    id: "sales-forecasting",
    title: "Sales Forecasting",
    category: "Machine Learning / Time Series / Data Analytics",
    description: "Time series forecasting model for predicting future sales data.",
    technologies: ["Machine Learning", "Time Series", "Data Analytics"],
    githubUrl: "https://github.com/Vamsee295/SalesForecasting_VemulapalliVamseeKrishna",
    featured: false,
    labCategory: "Data Science",
    tier: 1,
  },
  {
    id: "shopper-spectrum",
    title: "Shopper Spectrum",
    category: "Machine Learning / Customer Segmentation / Recommendation Systems",
    description: "A recommendation system engine for e-commerce shopping platforms.",
    technologies: ["Machine Learning", "Recommendation"],
    githubUrl: "https://github.com/Vamsee295/Shopper-Spectrum",
    featured: false,
    labCategory: "Machine Learning",
    tier: 1,
  },
  {
    id: "employee-attrition-prediction",
    title: "Employee Attrition Prediction",
    category: "Machine Learning / Data Analytics",
    description: "Predictive analytics model to forecast employee attrition.",
    technologies: ["Machine Learning", "Data Analytics", "Python"],
    githubUrl: "https://github.com/Vamsee295/EmployeeAttrition_VemmulapalliVamseeKrishna",
    featured: false,
    labCategory: "Machine Learning",
    tier: 1,
  },
  {
    id: "gaming-world",
    title: "Gaming World",
    category: "Full Stack / Gaming / Web",
    description: "A full-stack web application focused on the gaming domain.",
    technologies: ["Web", "Full Stack"],
    githubUrl: "https://github.com/Vamsee295/Gaming_World",
    featured: false,
    labCategory: "Web",
    tier: 1,
  },

  // ─── LABS — TIER 2 ────────────────────────────────────────────────────────
  {
    id: "reddit-sentiment-analysis",
    title: "Reddit Sentiment Analysis",
    category: "NLP / Sentiment Analysis / Data Science",
    description: "Analyzes sentiment of Reddit posts using Natural Language Processing.",
    technologies: ["Python", "NLP", "Data Science"],
    githubUrl: "https://github.com/Vamsee295/redddit-posts-sentiments",
    featured: false,
    labCategory: "Data Science",
    tier: 2,
  },
  {
    id: "expenseflow",
    title: "ExpenseFlow",
    category: "Finance / Web Application",
    description: "A comprehensive web application for managing finances and tracking expenses.",
    technologies: ["Web", "Finance"],
    githubUrl: "https://github.com/Vamsee295/Expenseflow",
    featured: false,
    labCategory: "Web",
    tier: 2,
  },
  {
    id: "financial-advisor-app",
    title: "Financial Advisor App",
    category: "Java / Application Development",
    description: "An application to assist users with financial planning and advice.",
    technologies: ["Java", "Application Development"],
    githubUrl: "https://github.com/Vamsee295/Financial-Advisor_app",
    featured: false,
    labCategory: "Mobile",
    tier: 2,
  },
  {
    id: "healthcare-project",
    title: "Healthcare Project",
    category: "Application Development / Healthcare",
    description: "A robust application designed for healthcare workflows.",
    technologies: ["Healthcare", "App Development"],
    githubUrl: "https://github.com/Vamsee295/Healthcare_Project",
    featured: false,
    labCategory: "Web",
    tier: 2,
  },
  {
    id: "reminder-app",
    title: "Reminder App",
    category: "Mobile Development / React Native",
    description: "A local-first mobile productivity app for managing tasks, reminders, and checklists.",
    technologies: ["React Native", "Mobile"],
    githubUrl: "https://github.com/Vamsee295/Remainder-App-Mobile-",
    featured: false,
    labCategory: "Mobile",
    tier: 2,
  },
  {
    id: "telegram-study-bot",
    title: "Telegram Study Bot",
    category: "Python / Automation / Telegram",
    description: "An automated Telegram bot designed to assist with study workflows.",
    technologies: ["Python", "Automation", "Bot API"],
    githubUrl: "https://github.com/Vamsee295/telegram-bot",
    featured: false,
    labCategory: "Automation",
    tier: 2,
  },
  {
    id: "flipkart-csat-prediction",
    title: "Flipkart CSAT Prediction",
    category: "Machine Learning / NLP",
    description: "Machine learning model to predict Customer Satisfaction (CSAT) scores for Flipkart.",
    technologies: ["Machine Learning", "NLP", "Python"],
    githubUrl: "https://github.com/Vamsee295/Flipkart_CSAT_Prediction_ML",
    featured: false,
    labCategory: "Machine Learning",
    tier: 2,
  },
  {
    id: "house-price-prediction",
    title: "House Price Prediction",
    category: "Machine Learning / Regression",
    description: "Regression model for predicting house prices based on various features.",
    technologies: ["Machine Learning", "Regression", "Python"],
    githubUrl: "https://github.com/Vamsee295/HousePricePrediction_VamseeKrishnaVemulapalli",
    featured: false,
    labCategory: "Machine Learning",
    tier: 2,
  },

  // ─── LABS — TIER 3 ────────────────────────────────────────────────────────
  {
    id: "ai-todo-list",
    title: "AI Todo List",
    category: "AI / Productivity / Web",
    description: "A smart task management application utilizing AI to organize priorities.",
    technologies: ["AI", "Web"],
    githubUrl: "https://github.com/Vamsee295/AI-Todo-List",
    featured: false,
    labCategory: "AI / Agents",
    tier: 3,
  },
  {
    id: "coding-ide",
    title: "Coding IDE",
    category: "Developer Tool / IDE",
    description: "A lightweight coding environment experiment.",
    technologies: ["Web", "IDE"],
    githubUrl: "https://github.com/Vamsee295/Coding-IDE",
    featured: false,
    labCategory: "Developer Tools",
    tier: 3,
  },
  {
    id: "communication",
    title: "Communication",
    category: "Web Development",
    description: "A web-based communication project.",
    technologies: ["Web"],
    githubUrl: "https://github.com/Vamsee295/Communication",
    featured: false,
    labCategory: "Web",
    tier: 3,
  },
  {
    id: "openclaw-setup",
    title: "OpenClaw Setup",
    category: "Developer Setup / Experiment",
    description: "An experimental setup for OpenClaw tools and workflows.",
    technologies: ["Developer Tools", "Experiment"],
    githubUrl: "https://github.com/Vamsee295/OpenClaw-Setup",
    featured: false,
    labCategory: "Experiments",
    tier: 3,
  },
  {
    id: "youtube-project",
    title: "YouTube Project",
    category: "Web Development",
    description: "A web project interacting with YouTube data structures.",
    technologies: ["Web"],
    githubUrl: "https://github.com/Vamsee295/Youtube-Project",
    featured: false,
    labCategory: "Web",
    tier: 3,
  },
  {
    id: "kl-webpage",
    title: "KL Webpage",
    category: "Web Development",
    description: "A webpage developed for KL.",
    technologies: ["HTML", "CSS"],
    githubUrl: "https://github.com/Vamsee295/KL-Webpage",
    featured: false,
    labCategory: "Web",
    tier: 3,
  },

  // ─── LABS — TIER 4 ────────────────────────────────────────────────────────
  {
    id: "registration-page",
    title: "Registration Page",
    category: "Web Development / UI",
    description: "A responsive registration page interface.",
    technologies: ["Web UI", "Frontend"],
    githubUrl: "https://github.com/Vamsee295/RegistrationPage",
    featured: false,
    labCategory: "Web",
    tier: 4,
  },
  {
    id: "login-page",
    title: "Login Page",
    category: "Web Development / UI",
    description: "A secure and well-designed login page UI.",
    technologies: ["Web UI", "Frontend"],
    githubUrl: "https://github.com/Vamsee295/LoginPage",
    featured: false,
    labCategory: "Web",
    tier: 4,
  },
  {
    id: "calculator",
    title: "Calculator",
    category: "Web Development / Utility",
    description: "A web-based calculator utility application.",
    technologies: ["JavaScript", "Web"],
    githubUrl: "https://github.com/Vamsee295/CALCULATOR_PROJECT",
    featured: false,
    labCategory: "Web",
    tier: 4,
  },
  {
    id: "in-lab-exam",
    title: "IN-LAB-EXAM",
    category: "Java / Academic",
    description: "An academic Java project submitted for lab evaluation.",
    technologies: ["Java", "Academic"],
    githubUrl: "https://github.com/Vamsee295/IN-LAB-EXAM",
    featured: false,
    labCategory: "Academic",
    tier: 4,
  },
  {
    id: "happy-birthday",
    title: "Happy Birthday",
    category: "Web Experiment / Creative Web",
    description: "A creative web experiment celebrating a birthday.",
    technologies: ["HTML", "CSS", "Creative"],
    githubUrl: "https://github.com/Vamsee295/Happy-Birthday-",
    featured: false,
    labCategory: "Experiments",
    tier: 4,
  },
];
