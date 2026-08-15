export interface ExperienceItem {
  id?: string;
  year: string;
  company: string;
  role: string;
  period?: string;
  description: string;
  highlights?: string[];
  projects?: string[];
  technologies?: string[];
  certificate?: string;
  certificateUrl?: string;
  projectLinks?: string[];
}

export const profile = {
  name: "Vamsee Vemulapalli",
  role: "Computer Science Student",
  tagline: "I BUILD INTELLIGENT SOFTWARE.",
  eyebrow: "COMPUTER SCIENCE · AI/ML · SOFTWARE",
  bio: "Computer Science student focused on AI/ML, software engineering, and building practical intelligent systems that combine models with real-world software.",
  about_statement: "I enjoy turning ideas into systems people can actually use.",
  about_description:
    "I'm a Computer Science student focused on AI/ML, software engineering, and data. I enjoy building practical systems that combine intelligent models with useful software experiences — from predictive analytics platforms to AI-powered developer tools.",
  about_secondary:
    "My projects explore AI agents, local LLMs, machine learning, developer tools, and data-driven applications, with an emphasis on turning ideas into working software.",
  focus: ["AI / ML", "AI Agents", "Developer Tools", "Data & Analytics"],
  location: "India",
  education: {
    degree: "B.Tech",
    field: "Computer Science & Engineering",
    institution: "KL University",
  },
  experience: [
    {
      id: "xylofy-ai",
      year: "JUN 2026 — JUL 2026",
      period: "Jun 2026 — Jul 2026",
      company: "XYlofy AI",
      role: "AI & Data Science Intern",
      description:
        "Built end-to-end machine learning models using real-world datasets for sales forecasting, employee attrition prediction, and house price prediction.",
      highlights: [
        "Developed machine learning solutions for regression and classification problems",
        "Performed data preprocessing, feature engineering, and train/test evaluation",
        "Analyzed prediction accuracy and error metrics on real-world datasets to derive business insights",
      ],
      projects: ["Sales Forecasting", "Employee Attrition", "House Price Prediction"],
      technologies: ["Python", "Machine Learning", "Data Analysis", "Data Visualization"],
      certificate: "AI & Data Science Internship Certificate",
    },
    {
      id: "labmentix",
      year: "Jun 2026 - Present",
      period: "Jun 2026 - Present",
      company: "Labmentix",
      role: "Data Science Intern",
      description:
        "Developed three practical machine learning and AI projects during the Labmentix Data Science Internship, covering computer vision, AI agents, customer segmentation, and recommendation systems.",
      highlights: [
        "Built practical ML/AI solutions from problem definition through implementation",
        "Applied computer vision techniques for facial recognition",
        "Worked with AI-agent architectures and KMeans clustering for customer segmentation",
        "Developed recommendation functionality and practical Streamlit interfaces",
      ],
      projects: ["Facial Recognition", "Multi-Agent AI", "Shopper Spectrum"],
      technologies: ["Python", "Machine Learning", "Computer Vision", "KMeans Clustering", "Streamlit", "AI APIs"],
    },
    {
      id: "google-cloud-aicte",
      year: "JAN 2025 — MAR 2025",
      period: "Jan 2025 — Mar 2025",
      company: "Google Cloud × AICTE / EduSkills",
      role: "Generative AI Virtual Intern",
      description:
        "Completed a 10-week Generative AI Virtual Internship under the AICTE/EduSkills program with curriculum provided by Google Cloud.",
      highlights: [
        "10-week virtual internship program covering generative AI fundamentals and architectures",
        "Curriculum and hands-on tracks provided by Google Cloud",
      ],
      technologies: ["Generative AI", "Google Cloud", "AICTE"],
      certificate: "Generative AI Virtual Internship Certificate",
    },
    {
      id: "eduskills-aicte",
      year: "APR 2025 — JUN 2025",
      period: "Apr 2025 — Jun 2025",
      company: "EduSkills × AICTE",
      role: "Web Full Stack Developer Virtual Intern",
      description:
        "Completed a Web Full Stack Developer virtual internship program through the EduSkills Academy / AICTE ecosystem.",
      highlights: [
        "Completed verified curriculum in modern web development and full-stack software practices",
        "Certified under the AICTE and EduSkills Academy virtual internship program",
      ],
      technologies: ["Web Development", "AICTE", "EduSkills"],
      certificate: "Web Full Stack Developer Virtual Internship Certificate",
    },
    {
      id: "cisco-aicte",
      year: "MAY 2024 — JUL 2024",
      period: "May 2024 — Jul 2024",
      company: "Cisco Networking Academy × AICTE",
      role: "Networking Virtual Intern",
      description:
        "Completed the Cisco AICTE Virtual Internship Program 2024 in Networking.",
      highlights: [
        "Completed Cisco AICTE Virtual Internship Program in networking fundamentals",
        "Explored networking protocols, architectures, and system connectivity",
      ],
      technologies: ["Networking", "Cisco Networking Academy", "AICTE"],
      certificate: "Cisco AICTE Virtual Internship Certificate 2024",
    },
  ] as ExperienceItem[],
  skills: {
    Languages: ["Java", "Python", "SQL"],
    "AI / ML": ["Machine Learning", "AI Agents", "Computer Vision", "LLMs"],
    Development: ["React", "TypeScript", "Next.js", "Spring Boot"],
    Tools: ["Git", "GitHub", "Docker", "Ollama", "MySQL"],
  },
  social: {
    github: "https://github.com/Vamsee295",
    linkedin: "https://www.linkedin.com/in/vemulapalli-vamsee/",
    email: "mailto:2300033830cseh1@gmail.com",
  },
  resume: "/resume.pdf",
};
