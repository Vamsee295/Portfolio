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
  githubUrl?: string;
  demoUrl?: string;
  prevSlug: string;
  nextSlug: string;
  previewType: "studyhub" | "multiagent" | "edurisk";
  
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
  "studyhub": {
    slug: "studyhub",
    id: "studyhub",
    number: "01",
    title: "StudyHub",
    category: "AI-Powered Learning Platform",
    tagline: "A unified learning platform for engineering students to explore structured roadmaps, technical resources, coding practice, and career preparation.",
    status: "ACTIVE",
    role: "Product & Frontend Development",
    projectType: "Personalized Learning Platform",
    primaryStack: ["Next.js", "React", "Tailwind CSS"],
    architectureSummary: "Next.js Learning Experience",
    demoUrl: "https://openpath-five.vercel.app/",
    prevSlug: "edurisk",
    nextSlug: "multi-agent-ai",
    previewType: "studyhub",
    
    problem: {
      summary: "Students preparing for technical roles often have to piece together roadmaps, resources, practice material, company preparation, and career tools from disconnected sources. StudyHub brings these learning paths into one guided experience.",
      points: [
        {
          title: "Fragmented Preparation",
          description: "Learning content, coding practice, interview preparation, and career resources are commonly scattered across separate tools and documents."
        },
        {
          title: "Unclear Learning Paths",
          description: "Students need a structured way to move from foundational topics to role-focused preparation without losing sight of the bigger goal."
        }
      ]
    },

    idea: {
      statement: "Create one approachable place for engineering students to discover structured learning tracks, technical resources, practice opportunities, and career-preparation tools.",
      flowSteps: [
        { step: "1", label: "EXPLORE", desc: "Browse learning paths and topics" },
        { step: "2", label: "CHOOSE", desc: "Select a role-focused roadmap" },
        { step: "3", label: "LEARN", desc: "Use curated technical resources" },
        { step: "4", label: "PRACTICE", desc: "Work through coding and preparation material" },
        { step: "5", label: "PREPARE", desc: "Use company and career tools" }
      ]
    },

    architecture: {
      overview: "StudyHub is a Next.js web experience that organizes its learning content into focused paths, practice areas, resources, and career-oriented tools.",
      nodes: [
        { layer: "Experience", component: "Learning Hub", detail: "A single entry point for preparation content" },
        { layer: "Learning", component: "Role Roadmaps", detail: "Structured tracks for technical career paths" },
        { layer: "Practice", component: "Preparation Areas", detail: "Coding, interview, and company-preparation material" },
        { layer: "Discovery", component: "Search & Resources", detail: "Find topics and supporting study material" }
      ]
    },

    theory: [
      {
        title: "Structured Learning Paths",
        concept: "Guided Progression",
        whatItIs: "A roadmap groups related topics into a sequence that learners can follow toward a defined skill or role.",
        whyUseful: "It reduces the burden of deciding what to learn next and connects individual topics to a broader preparation goal.",
        howUsed: "StudyHub presents role-focused learning tracks alongside resources and practice areas."
      },
      {
        title: "Practice-Oriented Preparation",
        concept: "Learn by Applying",
        whatItIs: "Practice connects reference material to active problem solving and interview preparation.",
        whyUseful: "Technical learning is more useful when students can apply concepts while preparing for the expectations of real roles.",
        howUsed: "The product groups coding practice and company-preparation experiences with its learning material."
      },
      {
        title: "Focused Discovery",
        concept: "Searchable Resources",
        whatItIs: "A discovery layer helps learners surface relevant topics and materials from a broader resource collection.",
        whyUseful: "It makes a large learning library easier to navigate when a student has a specific concept or interview topic in mind.",
        howUsed: "StudyHub exposes search and topic shortcuts from the primary learning experience."
      }
    ],

    features: [
      {
        title: "Role-Focused Learning Tracks",
        description: "Structured roadmaps help students explore engineering paths such as software, AI/ML, data, and cloud preparation."
      },
      {
        title: "Technical Resource Discovery",
        description: "Topic-focused resources cover core programming and computer-science preparation areas."
      },
      {
        title: "Practice & Career Tools",
        description: "Practice, company preparation, and career tools keep learning connected to students' next steps."
      }
    ],

    decisions: [
      {
        decision: "Unified learning surface",
        why: "A single experience makes it easier to connect roadmaps, resources, practice, and career preparation.",
        tradeoff: "The product must keep varied learning areas easy to browse without overwhelming students."
      },
      {
        decision: "Role-based organization",
        why: "Starting from a target role gives learners a practical frame for selecting topics and preparation material.",
        tradeoff: "Students with cross-disciplinary goals may need to move between more than one track."
      }
    ],

    challenges: [
      {
        challenge: "Making a broad curriculum navigable",
        approach: "Organize material into learning tracks, topic shortcuts, and searchable resources so students have several clear entry points.",
        lesson: "Learning platforms need both a high-level path and quick ways to find a specific topic."
      },
      {
        challenge: "Connecting study to career preparation",
        approach: "Place practice, company preparation, and career tools alongside technical-learning paths.",
        lesson: "Students benefit when preparation feels like a connected system rather than a collection of isolated resources."
      }
    ],

    outcome: {
      summary: "StudyHub provides an active, unified entry point for technical learning and career preparation.",
      highlights: [
        "Brings roadmaps, resources, practice, company preparation, and career tools together.",
        "Offers role-focused tracks for students exploring technical careers.",
        "Provides a responsive web experience with discovery and search entry points."
      ]
    },

    learnings: [
      "A learning product benefits from combining guided paths with flexible discovery.",
      "Career preparation is easier to sustain when resources and practice live in the same experience.",
      "Clear information architecture is essential when presenting a wide range of technical topics."
    ],

    futureRoadmap: [
      "Expand the catalog of structured learning tracks.",
      "Add more targeted practice experiences for technical preparation.",
      "Continue refining personalized pathways through the learning material.",
      "Evolve career tools alongside the needs of engineering students."
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
    prevSlug: "studyhub",
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
    nextSlug: "studyhub",
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
