// ─── Vibe Coding Playground — Data Layer ──────────────────────────────────────

export type PlaygroundCategory =
  | "all"
  | "ai"
  | "ml"
  | "data"
  | "software"
  | "applications"
  | "experiments"
  | "notebooks";

export type PlaygroundSourceType = "github" | "colab" | "jupyter" | "demo";

export interface PlaygroundSource {
  type: PlaygroundSourceType;
  label: string;
  url: string;
}

export interface PlaygroundItem {
  id: string;
  number: string;
  title: string;
  category: PlaygroundCategory;
  categoryLabel: string;
  description: string;
  technologies: string[];
  year?: string;
  sources?: PlaygroundSource[];
  featured?: boolean;
  notebookType?: "Colab" | "Jupyter";
}

// ─── Category Metadata ─────────────────────────────────────────────────────────
export const playgroundCategories: {
  key: PlaygroundCategory;
  label: string;
}[] = [
  { key: "all", label: "ALL" },
  { key: "ai", label: "AI / AGENTS" },
  { key: "ml", label: "MACHINE LEARNING" },
  { key: "data", label: "DATA SCIENCE" },
  { key: "software", label: "SOFTWARE" },
  { key: "applications", label: "APPLICATIONS" },
  { key: "experiments", label: "EXPERIMENTS" },
  { key: "notebooks", label: "NOTEBOOKS" },
];

// ─── Project & Experiment Entries ─────────────────────────────────────────────
export const playgroundItems: PlaygroundItem[] = [
  // ── AI / Agents ──────────────────────────────────────────────────────────────
  {
    id: "ultron",
    number: "01",
    title: "Ultron — Personal AI Agent",
    category: "ai",
    categoryLabel: "AI / AGENTS",
    description:
      "A multi-modal, tool-calling personal AI agent orchestrating browser automation, job search, memory management, and voice capabilities via local LLMs with Ollama.",
    technologies: ["Python", "Ollama", "LangChain", "Browser-Use", "Qdrant"],
    year: "2025",
    featured: true,
    sources: [
      {
        type: "github",
        label: "GitHub →",
        url: "https://github.com/vamseevemulapalli",
      },
    ],
  },
  {
    id: "multi-agent-ai",
    number: "02",
    title: "Multi-Agent AI Research System",
    category: "ai",
    categoryLabel: "AI / AGENTS",
    description:
      "Collaborative multi-agent architecture with specialized research, reasoning, and action agents operating in coordinated pipelines for complex problem solving.",
    technologies: ["Python", "LangGraph", "OpenAI API", "FastAPI"],
    year: "2025",
    featured: true,
    sources: [
      {
        type: "github",
        label: "GitHub →",
        url: "https://github.com/vamseevemulapalli",
      },
    ],
  },
  {
    id: "ai-agent-proto",
    number: "03",
    title: "AI Agent Prototype v1",
    category: "ai",
    categoryLabel: "AI / AGENTS",
    description:
      "Early prototype exploring ReAct-style agent loops with tool calling, memory retrieval, and structured output for task automation workflows.",
    technologies: ["Python", "OpenAI API", "ChromaDB", "FastAPI"],
    year: "2024",
    sources: [
      {
        type: "github",
        label: "GitHub →",
        url: "https://github.com/vamseevemulapalli",
      },
    ],
  },
  {
    id: "llm-tool-use",
    number: "04",
    title: "LLM Tool-Use Experiments",
    category: "ai",
    categoryLabel: "AI / AGENTS",
    description:
      "A collection of small experiments testing LLM function calling, structured output parsing, and agentic tool use patterns across multiple models.",
    technologies: ["Python", "Ollama", "LiteLLM", "Pydantic"],
    year: "2025",
    sources: [
      {
        type: "github",
        label: "GitHub →",
        url: "https://github.com/vamseevemulapalli",
      },
    ],
  },
  {
    id: "rag-pipeline",
    number: "05",
    title: "RAG Pipeline — Document QA",
    category: "ai",
    categoryLabel: "AI / AGENTS",
    description:
      "Retrieval-Augmented Generation pipeline for querying large document corpora using vector search and LLM-based answer synthesis.",
    technologies: ["Python", "LangChain", "FAISS", "Ollama", "Streamlit"],
    year: "2025",
    sources: [
      {
        type: "github",
        label: "GitHub →",
        url: "https://github.com/vamseevemulapalli",
      },
    ],
  },

  // ── Machine Learning ─────────────────────────────────────────────────────────
  {
    id: "student-dropout",
    number: "06",
    title: "Student Dropout Risk Dashboard",
    category: "ml",
    categoryLabel: "MACHINE LEARNING",
    description:
      "End-to-end ML pipeline predicting student dropout risk using ensemble classifiers with an interactive visual analytics dashboard for institutions.",
    technologies: ["Python", "scikit-learn", "Pandas", "Plotly", "Streamlit"],
    year: "2025",
    featured: true,
    sources: [
      {
        type: "github",
        label: "GitHub →",
        url: "https://github.com/vamseevemulapalli",
      },
    ],
  },
  {
    id: "sales-forecasting",
    number: "07",
    title: "Sales Forecasting Model",
    category: "ml",
    categoryLabel: "MACHINE LEARNING",
    description:
      "Time series forecasting model using XGBoost and LSTM to predict future sales with feature engineering on seasonal and trend components.",
    technologies: ["Python", "XGBoost", "TensorFlow", "Pandas", "Matplotlib"],
    year: "2024",
    notebookType: "Colab",
    sources: [
      {
        type: "colab",
        label: "Colab →",
        url: "https://colab.research.google.com",
      },
      {
        type: "github",
        label: "GitHub →",
        url: "https://github.com/vamseevemulapalli",
      },
    ],
  },
  {
    id: "employee-attrition",
    number: "08",
    title: "Employee Attrition Prediction",
    category: "ml",
    categoryLabel: "MACHINE LEARNING",
    description:
      "Classification model predicting employee attrition using HR data with SHAP-based explainability for HR decision support.",
    technologies: ["Python", "scikit-learn", "SHAP", "Pandas", "Seaborn"],
    year: "2024",
    notebookType: "Colab",
    sources: [
      {
        type: "colab",
        label: "Colab →",
        url: "https://colab.research.google.com",
      },
    ],
  },
  {
    id: "house-price",
    number: "09",
    title: "House Price Prediction",
    category: "ml",
    categoryLabel: "MACHINE LEARNING",
    description:
      "Regression pipeline predicting house prices with feature selection, polynomial features, and gradient boosting with hyperparameter tuning.",
    technologies: ["Python", "scikit-learn", "XGBoost", "Pandas", "NumPy"],
    year: "2024",
    notebookType: "Colab",
    sources: [
      {
        type: "colab",
        label: "Colab →",
        url: "https://colab.research.google.com",
      },
    ],
  },
  {
    id: "facial-recognition",
    number: "10",
    title: "Facial Recognition System",
    category: "ml",
    categoryLabel: "MACHINE LEARNING",
    description:
      "Real-time facial recognition using OpenCV and deep learning embeddings for identification and verification tasks.",
    technologies: ["Python", "OpenCV", "TensorFlow", "FaceNet"],
    year: "2024",
    sources: [
      {
        type: "github",
        label: "GitHub →",
        url: "https://github.com/vamseevemulapalli",
      },
    ],
  },
  {
    id: "sentiment-analysis",
    number: "11",
    title: "Sentiment Analysis Pipeline",
    category: "ml",
    categoryLabel: "MACHINE LEARNING",
    description:
      "NLP pipeline for multi-class sentiment classification on product reviews using fine-tuned transformers and traditional baselines.",
    technologies: ["Python", "HuggingFace", "PyTorch", "NLTK", "Sklearn"],
    year: "2024",
    notebookType: "Colab",
    sources: [
      {
        type: "colab",
        label: "Colab →",
        url: "https://colab.research.google.com",
      },
    ],
  },

  // ── Data Science ─────────────────────────────────────────────────────────────
  {
    id: "shopper-spectrum",
    number: "12",
    title: "Shopper Spectrum — Customer Segmentation",
    category: "data",
    categoryLabel: "DATA SCIENCE",
    description:
      "K-Means clustering-based customer segmentation on retail data revealing behavioral patterns and purchase affinities for targeted marketing.",
    technologies: ["Python", "scikit-learn", "Pandas", "Plotly", "Seaborn"],
    year: "2024",
    notebookType: "Colab",
    sources: [
      {
        type: "colab",
        label: "Colab →",
        url: "https://colab.research.google.com",
      },
      {
        type: "github",
        label: "GitHub →",
        url: "https://github.com/vamseevemulapalli",
      },
    ],
  },
  {
    id: "eda-covid",
    number: "13",
    title: "COVID-19 EDA & Trend Analysis",
    category: "data",
    categoryLabel: "DATA SCIENCE",
    description:
      "Comprehensive exploratory data analysis on COVID-19 global datasets covering case trends, vaccination rates, and mortality correlations.",
    technologies: ["Python", "Pandas", "Plotly", "Matplotlib", "Seaborn"],
    year: "2024",
    notebookType: "Colab",
    sources: [
      {
        type: "colab",
        label: "Colab →",
        url: "https://colab.research.google.com",
      },
    ],
  },
  {
    id: "data-pipeline",
    number: "14",
    title: "Automated Data Cleaning Pipeline",
    category: "data",
    categoryLabel: "DATA SCIENCE",
    description:
      "Modular Python pipeline for automated data quality assessment, missing value imputation, outlier detection, and feature normalization.",
    technologies: ["Python", "Pandas", "NumPy", "Great Expectations"],
    year: "2025",
    sources: [
      {
        type: "github",
        label: "GitHub →",
        url: "https://github.com/vamseevemulapalli",
      },
    ],
  },
  {
    id: "stock-analysis",
    number: "15",
    title: "Stock Market Analysis & Visualization",
    category: "data",
    categoryLabel: "DATA SCIENCE",
    description:
      "Interactive dashboard for stock market trend analysis using historical price data, moving averages, RSI, and MACD indicators.",
    technologies: ["Python", "yfinance", "Plotly", "Pandas", "Streamlit"],
    year: "2024",
    notebookType: "Jupyter",
    sources: [
      {
        type: "jupyter",
        label: "Notebook →",
        url: "https://github.com/vamseevemulapalli",
      },
      {
        type: "github",
        label: "GitHub →",
        url: "https://github.com/vamseevemulapalli",
      },
    ],
  },

  // ── Software ─────────────────────────────────────────────────────────────────
  {
    id: "stackflow-ide",
    number: "16",
    title: "StackFlow IDE",
    category: "software",
    categoryLabel: "SOFTWARE",
    description:
      "AI-powered developer environment with context-aware code completion, integrated documentation, multi-language support, and session-based AI chat.",
    technologies: ["TypeScript", "React", "Monaco Editor", "Node.js"],
    year: "2025",
    featured: true,
    sources: [
      {
        type: "github",
        label: "GitHub →",
        url: "https://github.com/vamseevemulapalli",
      },
    ],
  },
  {
    id: "hospital-mgmt",
    number: "17",
    title: "Hospital Management System",
    category: "software",
    categoryLabel: "SOFTWARE",
    description:
      "Full-stack hospital management application handling patient records, appointment scheduling, doctor management, and billing with role-based access control.",
    technologies: ["Java", "Spring Boot", "MySQL", "React", "REST API"],
    year: "2024",
    sources: [
      {
        type: "github",
        label: "GitHub →",
        url: "https://github.com/vamseevemulapalli",
      },
    ],
  },
  {
    id: "reminder-app",
    number: "18",
    title: "Reminder App",
    category: "software",
    categoryLabel: "SOFTWARE",
    description:
      "Cross-platform reminder and task management application with natural language scheduling, push notifications, and persistent storage.",
    technologies: ["React Native", "TypeScript", "SQLite", "Expo"],
    year: "2024",
    featured: true,
    sources: [
      {
        type: "github",
        label: "GitHub →",
        url: "https://github.com/vamseevemulapalli",
      },
    ],
  },
  {
    id: "cli-toolkit",
    number: "19",
    title: "Developer CLI Toolkit",
    category: "software",
    categoryLabel: "SOFTWARE",
    description:
      "Collection of custom command-line utilities for automating repetitive development tasks, project scaffolding, and local environment setup.",
    technologies: ["Python", "Click", "Rich", "Shell"],
    year: "2025",
    sources: [
      {
        type: "github",
        label: "GitHub →",
        url: "https://github.com/vamseevemulapalli",
      },
    ],
  },

  // ── Applications ─────────────────────────────────────────────────────────────
  {
    id: "gaming-portal",
    number: "20",
    title: "Gaming Portal",
    category: "applications",
    categoryLabel: "APPLICATIONS",
    description:
      "Interactive web-based gaming portal featuring multiple browser games with user profiles, leaderboards, and real-time score tracking.",
    technologies: ["JavaScript", "HTML5", "CSS3", "Canvas API", "Firebase"],
    year: "2024",
    sources: [
      {
        type: "github",
        label: "GitHub →",
        url: "https://github.com/vamseevemulapalli",
      },
      {
        type: "demo",
        label: "Live Demo →",
        url: "#",
      },
    ],
  },
  {
    id: "portfolio-v1",
    number: "21",
    title: "Portfolio v1",
    category: "applications",
    categoryLabel: "APPLICATIONS",
    description:
      "First iteration of personal portfolio website, exploring layout, animation, and responsive design foundations.",
    technologies: ["HTML", "CSS", "JavaScript", "GSAP"],
    year: "2024",
    sources: [
      {
        type: "github",
        label: "GitHub →",
        url: "https://github.com/vamseevemulapalli",
      },
    ],
  },
  {
    id: "weather-app",
    number: "22",
    title: "Weather Dashboard App",
    category: "applications",
    categoryLabel: "APPLICATIONS",
    description:
      "Real-time weather dashboard with 7-day forecasting, location search, hourly breakdown, and dynamic background based on weather conditions.",
    technologies: ["React", "TypeScript", "OpenWeatherMap API", "Tailwind"],
    year: "2024",
    sources: [
      {
        type: "github",
        label: "GitHub →",
        url: "https://github.com/vamseevemulapalli",
      },
    ],
  },
  {
    id: "todo-fullstack",
    number: "23",
    title: "Full-Stack Todo Application",
    category: "applications",
    categoryLabel: "APPLICATIONS",
    description:
      "Production-grade todo app with authentication, real-time sync, priority tagging, and REST API backend.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    year: "2024",
    sources: [
      {
        type: "github",
        label: "GitHub →",
        url: "https://github.com/vamseevemulapalli",
      },
    ],
  },

  // ── Experiments ──────────────────────────────────────────────────────────────
  {
    id: "generative-art",
    number: "24",
    title: "Generative Art Experiments",
    category: "experiments",
    categoryLabel: "EXPERIMENTS",
    description:
      "Creative coding experiments using p5.js and canvas to generate procedural art, particle systems, and interactive visual patterns.",
    technologies: ["JavaScript", "p5.js", "Canvas API"],
    year: "2024",
    sources: [
      {
        type: "github",
        label: "GitHub →",
        url: "https://github.com/vamseevemulapalli",
      },
    ],
  },
  {
    id: "voice-agent",
    number: "25",
    title: "Voice-Controlled AI Agent",
    category: "experiments",
    categoryLabel: "EXPERIMENTS",
    description:
      "Experimental voice-to-action agent using Whisper for speech recognition, LLM for reasoning, and TTS for natural voice responses.",
    technologies: ["Python", "Whisper", "Ollama", "pyttsx3", "PyAudio"],
    year: "2025",
    sources: [
      {
        type: "github",
        label: "GitHub →",
        url: "https://github.com/vamseevemulapalli",
      },
    ],
  },
  {
    id: "web-scraper",
    number: "26",
    title: "Intelligent Web Scraper",
    category: "experiments",
    categoryLabel: "EXPERIMENTS",
    description:
      "Adaptive web scraping system using LLMs to interpret page structure and extract structured data without fixed CSS selectors.",
    technologies: ["Python", "Playwright", "LangChain", "BeautifulSoup"],
    year: "2025",
    sources: [
      {
        type: "github",
        label: "GitHub →",
        url: "https://github.com/vamseevemulapalli",
      },
    ],
  },
  {
    id: "code-review-agent",
    number: "27",
    title: "AI Code Review Agent",
    category: "experiments",
    categoryLabel: "EXPERIMENTS",
    description:
      "Automated code review agent that analyzes pull request diffs, identifies bugs, style issues, and security vulnerabilities using LLMs.",
    technologies: ["Python", "GitPython", "OpenAI API", "FastAPI"],
    year: "2025",
    sources: [
      {
        type: "github",
        label: "GitHub →",
        url: "https://github.com/vamseevemulapalli",
      },
    ],
  },

  // ── Notebooks ────────────────────────────────────────────────────────────────
  {
    id: "nb-neural-network",
    number: "28",
    title: "Neural Networks from Scratch",
    category: "notebooks",
    categoryLabel: "NOTEBOOKS",
    description:
      "Step-by-step implementation of neural networks from scratch using only NumPy — covering forward pass, backpropagation, and gradient descent.",
    technologies: ["Python", "NumPy", "Matplotlib"],
    year: "2024",
    notebookType: "Colab",
    sources: [
      {
        type: "colab",
        label: "Colab →",
        url: "https://colab.research.google.com",
      },
    ],
  },
  {
    id: "nb-transformers",
    number: "29",
    title: "Transformers & Attention — Study Notebook",
    category: "notebooks",
    categoryLabel: "NOTEBOOKS",
    description:
      "Deep-dive study notebook implementing attention mechanisms and transformer architecture from first principles with annotated explanations.",
    technologies: ["Python", "PyTorch", "NumPy", "Matplotlib"],
    year: "2024",
    notebookType: "Colab",
    sources: [
      {
        type: "colab",
        label: "Colab →",
        url: "https://colab.research.google.com",
      },
    ],
  },
  {
    id: "nb-pandas-guide",
    number: "30",
    title: "Pandas Power User — Reference Guide",
    category: "notebooks",
    categoryLabel: "NOTEBOOKS",
    description:
      "Comprehensive Pandas reference notebook covering advanced data manipulation, groupby operations, merges, time series, and performance tips.",
    technologies: ["Python", "Pandas", "NumPy"],
    year: "2024",
    notebookType: "Jupyter",
    sources: [
      {
        type: "jupyter",
        label: "Notebook →",
        url: "https://github.com/vamseevemulapalli",
      },
      {
        type: "github",
        label: "GitHub →",
        url: "https://github.com/vamseevemulapalli",
      },
    ],
  },
  {
    id: "nb-ml-algorithms",
    number: "31",
    title: "ML Algorithms — Implementation Study",
    category: "notebooks",
    categoryLabel: "NOTEBOOKS",
    description:
      "From-scratch implementations of classic ML algorithms (KNN, Decision Trees, Naive Bayes, SVM, K-Means) with visual comparisons.",
    technologies: ["Python", "NumPy", "scikit-learn", "Matplotlib"],
    year: "2024",
    notebookType: "Colab",
    sources: [
      {
        type: "colab",
        label: "Colab →",
        url: "https://colab.research.google.com",
      },
    ],
  },
  {
    id: "nb-gen-ai",
    number: "32",
    title: "Generative AI — Google Cloud Study",
    category: "notebooks",
    categoryLabel: "NOTEBOOKS",
    description:
      "Study notebooks from the Google Cloud Generative AI virtual internship program covering prompt engineering, Vertex AI, and LLM APIs.",
    technologies: ["Python", "Vertex AI", "Google Cloud", "LangChain"],
    year: "2025",
    notebookType: "Colab",
    sources: [
      {
        type: "colab",
        label: "Colab →",
        url: "https://colab.research.google.com",
      },
    ],
  },
];
