import { ReactNode } from "react";

export type CaseStudyStatus = "ACTIVE" | "COMPLETED" | "EXPERIMENTAL";

export interface CaseStudy {
  slug: string;
  id: string; // matches projects.ts id
  number: string;
  title: string;
  category: string;
  tagline: string;
  status: CaseStudyStatus;
  role: string;
  projectType: string;
  primaryStack: string[];
  architectureSummary: string;
  githubUrl: string;
  demoUrl?: string;
  prevSlug: string;
  nextSlug: string;
  previewType: "codeagent" | "multiagent" | "edurisk";
  
  // Section 01: Problem
  problem: {
    summary: string;
    points: { title: string; description: string }[];
  };

  // Section 02: Idea & Concept
  idea: {
    statement: string;
    flowSteps: { step: string; label: string; desc: string }[];
  };

  // Section 03: Architecture & System Flow
  architecture: {
    overview: string;
    nodes: { layer: string; component: string; detail: string }[];
  };

  // Section 04: Theory & Core Concepts (Educational)
  theory: {
    title: string;
    concept: string;
    whatItIs: string;
    whyUseful: string;
    howUsed: string;
  }[];

  // Section 05: Feature Showcase
  features: {
    title: string;
    description: string;
    icon?: string;
  }[];

  // Section 06: Engineering Decisions & Trade-offs
  decisions: {
    decision: string;
    why: string;
    tradeoff: string;
  }[];

  // Section 07: Challenges & Solutions
  challenges: {
    challenge: string;
    approach: string;
    lesson: string;
  }[];

  // Section 08: Outcome & Metrics
  outcome: {
    summary: string;
    highlights: string[];
  };

  // Section 09: What I Learned
  learnings: string[];

  // Section 10: Future Roadmap
  futureRoadmap: string[];
}

export const caseStudies: Record<string, CaseStudy> = {
  "codeagent-ide": {
    slug: "codeagent-ide",
    id: "codeagent-ide",
    number: "01",
    title: "CodeAgent IDE",
    category: "Developer Tools / AI Infrastructure",
    tagline: "A developer-controlled AI IDE exploring provider abstraction and Bring Your Own Key (BYOK) architecture.",
    status: "ACTIVE",
    role: "Core Developer",
    projectType: "AI Developer Tool",
    primaryStack: ["TypeScript", "React", "Next.js", "AI APIs"],
    architectureSummary: "Provider Abstraction Layer",
    githubUrl: "https://github.com/Vamsee295/CodeAgent-IDE",
    prevSlug: "edurisk",
    nextSlug: "multi-agent-ai",
    previewType: "codeagent",
    
    problem: {
      summary: "AI coding environments have transformed software development, but many developers are still tied to the provider ecosystem and usage limits of the specific tool they use. When the platform's AI quota is exhausted, the developer has to wait, upgrade, or switch workflows. The IDE vendor dictates the models.",
      points: [
        {
          title: "Vendor Lock-In",
          description: "Developers are forced to consume the platform's AI quota and use only the models the platform officially supports."
        },
        {
          title: "Lack of Local Control",
          description: "Privacy-sensitive workflows often cannot send codebase context to cloud providers, requiring local model inference."
        }
      ]
    },

    idea: {
      statement: "Build a development environment where the developer controls the AI layer. Instead of forcing dependence on a single platform's quota, CodeAgent IDE utilizes a Bring Your Own Key (BYOK) architecture, allowing developers to configure their own APIs or connect to local models.",
      flowSteps: [
        { step: "1", label: "CODE CONTEXT", desc: "Editor tracks file structure & AST" },
        { step: "2", label: "INTENT", desc: "Developer requests assistance" },
        { step: "3", label: "ABSTRACTION", desc: "Request sent to Common AI Interface" },
        { step: "4", label: "PROVIDER", desc: "Routed to DeepSeek, Groq, or local Ollama" },
        { step: "5", label: "FEEDBACK", desc: "Provider response updates editor" }
      ]
    },

    architecture: {
      overview: "CodeAgent IDE uses an abstraction layer that isolates the coding workflow from the specific underlying LLM provider, allowing seamless switching between cloud APIs and local inference.",
      nodes: [
        { layer: "User Interface", component: "IDE Workflow", detail: "Code editor and context tracking" },
        { layer: "Interface", component: "Common AI Layer", detail: "Standardizes requests across multiple providers" },
        { layer: "Cloud Provider", component: "DeepSeek / Groq API", detail: "Utilizes available API quotas via developer keys" },
        { layer: "Local Provider", component: "Ollama Integration", detail: "Runs local model inference for absolute privacy" }
      ]
    },

    theory: [
      {
        title: "Bring Your Own Key (BYOK)",
        concept: "Developer Control",
        whatItIs: "An architectural pattern where the application connects to a service using the end-user's own API credentials rather than routing through the platform's central billing account.",
        whyUseful: "It guarantees provider flexibility, allows easier experimentation with new models, and significantly reduces dependency on a single AI platform's usage limits.",
        howUsed: "Developers configure their own keys (e.g., DeepSeek, Groq) or point the IDE to a local Ollama instance."
      },
      {
        title: "Provider Abstraction",
        concept: "Multi-Provider Interface",
        whatItIs: "A software layer that standardizes inputs and outputs so the core application does not need to know which specific external service it is communicating with.",
        whyUseful: "The IDE shouldn't need to completely redesign its coding workflow every time the underlying model changes. It isolates authentication, request formatting, and error handling.",
        howUsed: "A unified AI interface handles the disparate API structures of various cloud LLMs and local engines, presenting a single stream to the editor."
      },
      {
        title: "Local AI Inference",
        concept: "Ollama Integration",
        whatItIs: "Running supported language models entirely on the user's local hardware rather than relying on external cloud endpoints.",
        whyUseful: "Pros: Complete privacy, full local control, and no cloud API quota consumption. Cons: Requires significant local hardware, and model quality depends directly on machine capabilities.",
        howUsed: "The abstraction layer treats a local Ollama endpoint exactly like a cloud provider, keeping codebase context strictly on the local machine."
      }
    ],

    features: [
      {
        title: "Configurable AI Providers",
        description: "Seamlessly switch between available quotas from providers like DeepSeek or Groq using your own API keys."
      },
      {
        title: "Local Ollama Support",
        description: "Connect the IDE directly to local models for entirely offline, private inference."
      },
      {
        title: "Provider Abstraction Layer",
        description: "A flexible architecture allowing new model providers to be integrated without rewriting the core editor interactions."
      }
    ],

    decisions: [
      {
        decision: "Why should the IDE own the AI layer?",
        why: "Because the IDE is the developer's environment. The AI provider should ideally be configurable rather than making the developer completely dependent on the IDE vendor. This is the central engineering philosophy of the project.",
        tradeoff: "Places the burden of configuration and API key management on the user rather than providing an instant, one-click managed solution."
      },
      {
        decision: "Web-Based Abstraction",
        why: "To allow rapid iteration and testing of AI capabilities while developing the abstraction boundaries.",
        tradeoff: "Restricts native local file system access compared to an Electron or Rust desktop binary."
      }
    ],

    challenges: [
      {
        challenge: "Handling Disparate Provider APIs",
        approach: "Built a standard internal request schema that the abstraction layer maps into the specific format (e.g., OpenAI-compatible vs proprietary endpoints) required by the selected provider.",
        lesson: "Provider flexibility requires extremely rigid internal data structures."
      },
      {
        challenge: "Streaming Responses to Editor State",
        approach: "Implemented a unified streaming parser that normalizes chunks from different APIs to update the editor synchronously.",
        lesson: "Different LLMs stream tokens at drastically different rates; the editor UI must accommodate erratic network speeds."
      }
    ],

    outcome: {
      summary: "Architected a developer-controlled AI environment that frees users from strict vendor lock-in.",
      highlights: [
        "Proved the viability of a BYOK architecture in an IDE context.",
        "Successfully abstracted cloud APIs (DeepSeek, Groq) and local inference (Ollama).",
        "Established a foundation for model-agnostic coding workflows."
      ]
    },

    learnings: [
      "Separating the intelligence layer from the editor layer is crucial for long-term maintainability.",
      "Local inference (Ollama) fundamentally changes latency expectations; UI must be highly responsive to compensate.",
      "Developer control is often more valuable than a slightly more polished, but locked-down, managed experience."
    ],

    futureRoadmap: [
      "Automatic provider fallback (if one API fails, gracefully switch to another).",
      "Model benchmarking & cost/latency comparisons directly in the IDE.",
      "Per-project provider configuration.",
      "Model-specific coding profiles (e.g., DeepSeek for generation, local model for fast autocomplete)."
    ]
  },

  "multi-agent-ai": {
    slug: "multi-agent-ai",
    id: "multi-agent-ai",
    number: "02",
    title: "Multi-Agent AI",
    category: "LLM Systems / Agentic AI",
    tagline: "A customer support architecture demonstrating multi-agent orchestration, parallel query execution, and grounded FAISS RAG.",
    status: "COMPLETED",
    role: "AI Systems Engineer",
    projectType: "Multi-Agent Support Orchestration",
    primaryStack: ["Python", "FastAPI", "Next.js", "FAISS", "MongoDB"],
    architectureSummary: "Compound Query Routing & Synthesis",
    githubUrl: "https://github.com/Vamsee295/Multi-Agent-AI",
    prevSlug: "codeagent-ide",
    nextSlug: "edurisk",
    previewType: "multiagent",
    
    problem: {
      summary: "A single, general-purpose chatbot has to understand many unrelated customer-support domains. This becomes extremely brittle when users ask compound questions. Standard bots struggle to separate distinct domains (billing vs technical), cannot handle angry users appropriately, and hallucinate policy details.",
      points: [
        {
          title: "The Monolithic Prompt Bottleneck",
          description: "One single model trying to be an expert in everything leads to degraded accuracy, prompt overflow, and severe hallucinations."
        },
        {
          title: "Compound Queries Fail",
          description: "When a user says 'I paid for premium but the app crashed', general bots often answer only half the question."
        }
      ]
    },

    idea: {
      statement: "Build a specialized multi-agent orchestration layer. Instead of one giant prompt, compound customer queries are dynamically routed to specialized expert agents, enriched with FAISS vector retrieval, and synthesized into a final cohesive response.",
      flowSteps: [
        { step: "1", label: "QUERY", desc: "Customer submits complex issue" },
        { step: "2", label: "ROUTING", desc: "Orchestrator detects multiple intents" },
        { step: "3", label: "RAG", desc: "FAISS retrieves grounded company knowledge" },
        { step: "4", label: "PARALLEL", desc: "Execution across specialized agents" },
        { step: "5", label: "SYNTHESIS", desc: "Final structured response generated" }
      ]
    },

    architecture: {
      overview: "A highly decoupled FastAPI orchestrator that routes intents to 5 specialized agents. A parallel RAG pipeline injects context from a local knowledge base, and responses are synthesized while MongoDB tracks session analytics.",
      nodes: [
        { layer: "Frontend", component: "Next.js / Tailwind", detail: "User chat interface & analytics dashboard" },
        { layer: "Orchestrator", component: "Intent & Sentiment Router", detail: "Evaluates query for parallel decomposition" },
        { layer: "Agents", component: "5 Specialized Assistants", detail: "Billing, Technical, Product, Complaint, FAQ" },
        { layer: "Knowledge Base", component: "FAISS / sentence-transformers", detail: "Vector embeddings for RAG retrieval" },
        { layer: "Synthesis", component: "Final Output Layer", detail: "Combines parallel agent outputs into one answer" }
      ]
    },

    theory: [
      {
        title: "Multi-Agent Systems",
        concept: "Specialization vs Generalization",
        whatItIs: "An architecture where tasks are delegated to narrow, specialized 'agents' rather than one monolithic prompt.",
        whyUseful: "Specialization radically reduces hallucinations and improves accuracy. A 'Billing Agent' prompt can be strictly configured to behave differently than a 'Technical Agent'.",
        howUsed: "The system orchestrator routes queries to specific domain experts. Compound queries trigger parallel execution across multiple agents."
      },
      {
        title: "Retrieval-Augmented Generation (RAG)",
        concept: "Grounding LLMs in Reality",
        whatItIs: "The process of searching a private database for relevant information and injecting it into the LLM's context window before it answers.",
        whyUseful: "Customer-support systems require precise company policies (refund rules, API docs). RAG prevents guessing and allows external knowledge updates without retraining the model.",
        howUsed: "Company documents are chunked, embedded using sentence-transformers, and stored in FAISS. The system retrieves chunks via similarity search to provide context to the active agents."
      },
      {
        title: "Sentiment Analysis & Escalation",
        concept: "Emotional Routing",
        whatItIs: "Analyzing the tone of a user's message to dynamically influence the support workflow.",
        whyUseful: "Customer support requires empathy. If a user is furious, the system should escalate, not deliver a cheerful automated response.",
        howUsed: "Messages are classified (Positive, Neutral, Frustrated, Angry). Highly negative sentiment automatically triggers the Complaint agent and flags the interaction for human escalation/ticketing."
      }
    ],

    features: [
      {
        title: "Five Specialized Agents",
        description: "Dedicated isolated environments for Billing, Technical, Product, Complaint, and FAQ."
      },
      {
        title: "Parallel Agent Execution",
        description: "Decomposes multi-intent queries, executing multiple agents simultaneously, reducing sequential latency."
      },
      {
        title: "Local FAISS RAG Pipeline",
        description: "Fast, in-memory vector store utilizing sentence-transformers for grounded knowledge retrieval."
      },
      {
        title: "Sentiment-Triggered Escalation",
        description: "Detects user frustration and routes the session to a human escalation path."
      }
    ],

    decisions: [
      {
        decision: "Specialized Agents over Single Model",
        why: "To heavily restrict the operational boundary of each LLM call, ensuring a billing agent never attempts to debug Python code.",
        tradeoff: "Increases architectural complexity; requires a robust synthesis step to combine outputs coherently."
      },
      {
        decision: "FAISS vs Managed Vector DB",
        why: "FAISS provides extremely fast, local, in-memory similarity search without the overhead, latency, and cost of a hosted cloud vector database.",
        tradeoff: "In-memory stores can become difficult to scale horizontally if the knowledge base grows to millions of embeddings."
      },
      {
        decision: "Parallel Execution",
        why: "Sequential agent execution (Billing → Technical → Synthesis) causes unacceptable latency. Async parallel execution cuts response time by 40-60%.",
        tradeoff: "Requires advanced async/await orchestration in FastAPI to manage simultaneous LLM network calls."
      }
    ],

    challenges: [
      {
        challenge: "Routing Compound Customer Queries",
        approach: "Implemented a distinct LLM-driven Intent Router that outputs a strict structured array of required agents, triggering an async `asyncio.gather` execution.",
        lesson: "The orchestrator is the most critical point of failure; its prompt must be the most rigidly defined."
      },
      {
        challenge: "Grounding Responses in Company Knowledge",
        approach: "Integrated sentence-transformers to embed user queries and retrieve the exact PDF/text chunks from FAISS before agent execution.",
        lesson: "Retrieval quality (chunk size, overlap) dictates output quality more than the size of the LLM."
      }
    ],

    outcome: {
      summary: "Engineered a resilient, multi-agent support architecture capable of decomposing and solving complex, emotionally charged queries.",
      highlights: [
        "Successfully orchestrated parallel execution across 5 specialized domain agents.",
        "Integrated a highly accurate FAISS + sentence-transformers RAG pipeline.",
        "Demonstrated working sentiment-escalation workflows."
      ]
    },

    learnings: [
      "Separating concerns between the orchestrator (intent) and the executors (agents) is critical for system reliability.",
      "Understanding retrieval pipelines is often more important for product quality than simply upgrading to a newer LLM.",
      "Designing AI systems around failure conditions (human escalation) is what makes them production-ready."
    ],

    futureRoadmap: [
      "Implement advanced evaluation pipelines (RAGAS) for automated retrieval accuracy testing.",
      "Add richer observability and tracing for LLM calls (e.g., LangSmith).",
      "Implement dynamic chunking strategies for varied document types.",
      "Develop more domain-specific agents for edge-case support scenarios."
    ]
  },

  "edurisk": {
    slug: "edurisk",
    id: "student-dropout-risk",
    number: "03",
    title: "EduRisk",
    category: "Full Product Engineering / ML / Analytics",
    tagline: "A comprehensive college academic platform featuring 3 role-based portals, integrating Random Forest ML prediction and SHAP explainability into actionable workflows.",
    status: "COMPLETED",
    role: "Full Stack ML Engineer",
    projectType: "Academic Intelligence Platform",
    primaryStack: ["Python", "scikit-learn", "FastAPI", "React", "MySQL"],
    architectureSummary: "3-Portal Service-Oriented Architecture",
    githubUrl: "https://github.com/Vamsee295/Student-dropout-risk-dashboard",
    prevSlug: "multi-agent-ai",
    nextSlug: "codeagent-ide",
    previewType: "edurisk",
    
    problem: {
      summary: "Many colleges do not have a comprehensive digital portal unless they are part of a massive university ecosystem. Furthermore, educational institutions collect vast amounts of data but fail to identify at-risk students proactively. Simply outputting an ML 'risk score' is useless to educators who need to know WHY a student is failing in order to intervene.",
      points: [
        {
          title: "Fragmented Operations",
          description: "Students, faculty, and deans operate in silos without a unified platform for academic management."
        },
        {
          title: "The ML Black Box Problem",
          description: "A machine learning model is not actionable if administrators don't trust or understand its reasoning."
        }
      ]
    },

    idea: {
      statement: "Build a complete academic intelligence and management platform with distinct portals for Students, Faculty, and Deans. Machine learning is integrated as a decision-support layer, using a Random Forest classifier to predict dropout risk and SHAP to inherently explain the reasoning, allowing faculty to execute a closed-loop intervention workflow.",
      flowSteps: [
        { step: "1", label: "DATA", desc: "Academic, attendance & behavioral signals" },
        { step: "2", label: "PROCESSING", desc: "FastAPI routes & ML feature processing" },
        { step: "3", label: "PREDICTION", desc: "Random Forest classification" },
        { step: "4", label: "EXPLAINABILITY", desc: "SHAP deconstructs the risk factors" },
        { step: "5", label: "INTERVENTION", desc: "Faculty acts on real-time insights" }
      ]
    },

    architecture: {
      overview: "A robust service-oriented architecture combining a React frontend tailored via RBAC, a FastAPI backend serving ML predictions & WebSocket events, MySQL for relational persistence, and a scikit-learn pipeline.",
      nodes: [
        { layer: "User Interface", component: "React / 3 Portals", detail: "Distinct views for Student, Faculty, and Dean" },
        { layer: "API & Auth", component: "FastAPI / JWT / WebSockets", detail: "Real-time updates, auth, and intervention routing" },
        { layer: "Data Layer", component: "MySQL 8 / SQLAlchemy", detail: "Strict relational schema for academic records" },
        { layer: "ML Pipeline", component: "Random Forest / SHAP", detail: "Predictive classification and feature explainability" }
      ]
    },

    theory: [
      {
        title: "Role-Based Access Control (RBAC)",
        concept: "System Security & UX",
        whatItIs: "An architecture where user roles determine both data permissions and the available features in the application.",
        whyUseful: "A college platform requires strict boundaries. A student must only see their own weak-area heatmaps, a faculty member monitors their classes, and a Dean acts as an institutional command center.",
        howUsed: "JWT authentication strictly partitions the React frontend into three distinct portals (Student, Faculty, Dean) backed by FastAPI permission validation."
      },
      {
        title: "Educational Analytics",
        concept: "Data vs Insight",
        whatItIs: "The transformation of raw academic signals (Data) into actionable performance indicators (Insight).",
        whyUseful: "Telling a student 'Attendance = 72%' is raw data. Identifying that 'Attendance is becoming a critical risk factor for your academic trajectory' is a valuable insight.",
        howUsed: "The Student portal visualizes weak areas and activity heatmaps, helping them plan improvement strategies rather than just viewing raw grades."
      },
      {
        title: "Explainable AI (XAI)",
        concept: "SHAP (SHapley Additive exPlanations)",
        whatItIs: "A game-theoretic approach to explain the output of any machine learning model by assigning a contribution value to each specific feature.",
        whyUseful: "Educators need to know if a 'High Risk' prediction is due to poor attendance, failing grades, or low engagement in order to take the correct action.",
        howUsed: "The ML pipeline returns both the risk classification AND the SHAP values, visualizing exactly which positive or negative factors drove the prediction."
      },
      {
        title: "The Intervention Loop",
        concept: "Decision Support Workflows",
        whatItIs: "A workflow system designed to Monitor → Identify Risk → Understand Why → Intervene → Track → Evaluate.",
        whyUseful: "It shifts the system from a passive dashboard to an active operational tool.",
        howUsed: "Faculty use the SHAP explanations to initiate logged interventions, track student progress, and evaluate the outcome over the semester."
      }
    ],

    features: [
      {
        title: "3 Role-Based Portals",
        description: "Distinct, feature-rich dashboards for Students, Faculty, and Institutional Deans."
      },
      {
        title: "AI Risk Prediction",
        description: "Accurate classification of student dropout risk using a trained Random Forest model."
      },
      {
        title: "Explainable Predictions (SHAP)",
        description: "Deconstructs black-box predictions into understandable, actionable feature contributions."
      },
      {
        title: "Real-Time WebSockets",
        description: "Instantaneous dashboard updates via FastAPI WebSockets without page reloads."
      },
      {
        title: "Intervention Management",
        description: "Closed-loop workflow allowing faculty to log, track, and evaluate the outcome of student interventions."
      }
    ],

    decisions: [
      {
        decision: "FastAPI Backend",
        why: "Provides incredibly fast asynchronous endpoint execution and native WebSocket support, which is critical for the real-time intervention tracking.",
        tradeoff: "Slightly higher learning curve for ORM management (SQLAlchemy) compared to Node.js frameworks."
      },
      {
        decision: "MySQL for Data Storage",
        why: "Educational data is highly structured and relational (Users → Courses → Enrollments → Interventions). Strict ACID compliance is mandatory to prevent academic record corruption.",
        tradeoff: "Requires strict schema migrations and rigid data models compared to NoSQL approaches."
      },
      {
        decision: "Random Forest over Deep Learning",
        why: "Tabular, structured academic data rarely benefits from deep neural networks. Random Forest trains faster, requires less data, and is fundamentally easier to integrate with SHAP explainability.",
        tradeoff: "May not capture extremely complex, unstructured non-linear relationships as effectively as deep learning."
      }
    ],

    challenges: [
      {
        challenge: "Providing Different Experiences for 3 Roles",
        approach: "Architected a strict RBAC system where the frontend conditionally renders entirely different routing trees and dashboard layouts based on the decoded JWT claims.",
        lesson: "Complex B2B/Enterprise software requires thinking in personas, not just features."
      },
      {
        challenge: "Making ML Predictions Understandable",
        approach: "Integrating SHAP was only half the battle; the UI had to translate mathematical feature contributions into plain-English insights for non-technical faculty members.",
        lesson: "A machine learning model is entirely useless if the end-user doesn't trust or understand the output."
      }
    ],

    outcome: {
      summary: "Engineered a comprehensive, production-ready academic operating platform that prioritizes human explainability and actionable intervention workflows.",
      highlights: [
        "Built and secured 3 distinct organizational portals (Student, Faculty, Dean).",
        "Successfully deployed an explainable Random Forest pipeline via FastAPI.",
        "Integrated real-time WebSocket communication for instant intervention tracking."
      ]
    },

    learnings: [
      "Working with explainable ML (XAI) bridges the gap between data science and product design.",
      "Building the 'Intervention Loop' taught me that software should support human workflows, not just display data.",
      "Managing a full stack (MySQL, FastAPI, ML Models, Next.js, WebSockets) requires strict architectural separation of concerns."
    ],

    futureRoadmap: [
      "Implement longitudinal risk tracking (visualizing risk across multiple semesters).",
      "Develop model calibration and drift-detection pipelines to maintain accuracy over years.",
      "Add intervention outcome analytics (determining which intervention strategies work best).",
      "Expand the Student portal with AI-driven study planning based on weak-area heatmaps."
    ]
  }
};
