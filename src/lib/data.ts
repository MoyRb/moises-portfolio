export const PROFILE = {
  name: "Moisés Medina Moreno",
  initials: "MM",
  role: "Software Developer",
  roleAlt: "Technical Project Manager",
  tagline: "I turn real requirements into working software.",
  summary:
    "Final-year Computer Systems Engineering student with hands-on experience building digital products end-to-end. I bridge business needs and technical execution — gathering requirements, defining scope, writing code, coordinating projects, and shipping solutions that work in the real world.",
  email: "moisesmed2482@gmail.com",
  github: "https://github.com/MoyRb",
  githubHandle: "MoyRb",
  whatsapp: "https://wa.me/523511345108",
  location: "Zamora, Michoacán",
  education: {
    degree: "B.Eng. Computer Systems Engineering",
    institution: "Instituto Tecnológico de Zamora — TecNM",
    status: "Final year · In progress",
  },
  cvPath: "/cv/index.html",
};

export const ABOUT = {
  headline: "A developer who ships.\nA coordinator who builds.",
  paragraphs: [
    "I work at the intersection of software engineering, product thinking, and project coordination — taking ideas from the first stakeholder conversation through to a deployed, working product.",
    "My experience at FORMEX gave me real exposure to client-facing product work: translating business needs into technical specifications, coordinating development cycles, making architecture decisions, and managing scope changes without losing momentum.",
    "I write code, coordinate projects, document decisions, and communicate clearly across technical and non-technical teams. If a project needs someone who can own it from discovery to deployment — that's what I do.",
  ],
  attributes: [
    "Requirements Gathering",
    "Scope Definition",
    "Full-Stack Development",
    "Project Coordination",
    "Technical Documentation",
    "Client Communication",
    "Product Thinking",
    "AI-Assisted Development",
  ],
};

export type Experience = {
  company: string;
  companyType: string;
  role: string;
  period: string;
  duration: string;
  location: string;
  description: string;
  highlights: string[];
};

export const EXPERIENCE: Experience[] = [
  {
    company: "FORMEX / FORMEX3D",
    companyType: "Technology & Solutions",
    role: "Software Developer & Technical Project Coordinator",
    period: "2024 – Present",
    duration: "~1 year",
    location: "Zamora, Michoacán",
    description:
      "Served as the technical reference for client-facing software projects — owning the full cycle from requirements gathering and scope definition through development, validation, and deployment.",
    highlights: [
      "Led requirements-gathering sessions with clients, translating business needs into functional specifications and scoped technical proposals.",
      "Defined project structures, timelines, and deliverables — coordinating progress from conceptualization through testing and deployment.",
      "Drafted software proposals with effort sizing, module definitions, and architecture recommendations tailored to each client's constraints.",
      "Bridged communication between commercial and technical stakeholders, keeping expectations aligned throughout the project lifecycle.",
      "Participated in technology selection and architecture decisions, evaluating trade-offs between delivery speed, scalability, and cost.",
      "Documented solutions, validated deliverables, and managed scope changes to maintain project integrity under real-world conditions.",
      "Conceptualized and implemented solutions incorporating AI, NFC, REST APIs, cloud services, and automation where they added measurable product value.",
    ],
  },
];

export type Project = {
  index: string;
  title: string;
  subtitle: string;
  problem: string;
  role: string;
  highlights: string[];
  stack: string[];
  type: string;
  featured: boolean;
};

export const PROJECTS: Project[] = [
  {
    index: "01",
    title: "NFC Student Access Control System",
    subtitle:
      "End-to-end attendance management for an educational institution using NFC credentials.",
    problem:
      "The institution needed a reliable, scalable way to track student attendance — replacing manual processes with a validated, tamper-resistant digital system.",
    role: "Full system definition and development, from operational model to technical and commercial proposal.",
    highlights: [
      "Defined the complete operational model: student registration, credential assignment, entry/exit validation, and duplicate-read prevention.",
      "Developed the administration interface with full attendance history and reporting.",
      "Adapted the architecture to support both Android NFC reading and USB NFC readers for deployment flexibility.",
      "Structured the technical and commercial proposal for institutional rollout.",
    ],
    stack: ["Python", "NFC", "SQL", "Web"],
    type: "Product Development",
    featured: true,
  },
  {
    index: "02",
    title: "Orders & Customer Loyalty Platform",
    subtitle:
      "Full-stack web application deployed on Vercel for customers and business administrators.",
    problem:
      "A business needed a digital ordering system with customer tracking and a loyalty program, replacing a fully manual operation.",
    role: "Full-stack development from authentication design to production deployment.",
    highlights: [
      "Built complete authentication, order management, and order-history flows with data integrity enforced at the database layer.",
      "Implemented a points-based loyalty system with persistent state across sessions.",
      "Designed role-differentiated experiences for customers and business staff, including real-time new-order alerts for administrators.",
      "Deployed and maintained the application on Vercel; integrated QR-based customer access.",
    ],
    stack: ["JavaScript", "Supabase", "PostgreSQL", "Vercel"],
    type: "Full-Stack Web",
    featured: true,
  },
  {
    index: "03",
    title: "Surgical Scheduling Optimizer",
    subtitle:
      "Decision-support tool converting a complex manual scheduling process into actionable software.",
    problem:
      "A surgical department's scheduling was entirely manual, making scenario evaluation and efficient planning nearly impossible.",
    role: "Problem modeling, algorithm design, and interactive visualization development.",
    highlights: [
      "Modeled the operational problem, identified key scheduling variables, and designed the optimization logic for scenario evaluation.",
      "Built an interactive visualization layer with Streamlit to surface insights and support real-time decision-making.",
      "Delivered a functional tool that replaces a manual workflow with a structured, data-driven process.",
    ],
    stack: ["Python", "Streamlit", "Algorithms", "Data Visualization"],
    type: "Data & Optimization",
    featured: false,
  },
  {
    index: "04",
    title: "Enterprise Platform Design — CRM / ERP",
    subtitle:
      "Requirements gathering and conceptual system design for businesses across multiple industries.",
    problem:
      "Multiple businesses needed operational digitization — from CRM and inventory to payroll and production tracking — but lacked the architecture to begin.",
    role: "Requirements analysis, modular system design, and technical proposal authoring.",
    highlights: [
      "Analyzed operational processes across production, payroll, inventory, temporary staffing, and process-tracking use cases.",
      "Structured modular system designs with defined data flows, user roles, and integration points.",
      "Produced technical proposals aligned to business objectives, timeline constraints, and existing infrastructure.",
    ],
    stack: ["Requirements", "System Architecture", "Product Design"],
    type: "Product & Architecture",
    featured: false,
  },
];

export const STACK = [
  {
    category: "Languages",
    items: ["Python", "JavaScript", "SQL"],
  },
  {
    category: "Web & APIs",
    items: ["Node.js", "REST APIs", "Authentication", "HTML / CSS"],
  },
  {
    category: "Data & Databases",
    items: ["Supabase", "PostgreSQL", "SQLite", "Relational DB design"],
  },
  {
    category: "Infrastructure",
    items: ["Git", "GitHub", "Vercel", "Docker", "Linux"],
  },
  {
    category: "Tooling",
    items: ["Streamlit", "AI-assisted development", "Rapid prototyping", "Technical documentation"],
  },
  {
    category: "Product & PM",
    items: [
      "Requirements gathering",
      "Scope definition",
      "Change management",
      "Deliverable validation",
    ],
  },
];

export const APPROACH = [
  {
    step: "01",
    title: "Discover",
    description:
      "Stakeholder conversations, requirements gathering, and understanding the real problem before the technical one.",
  },
  {
    step: "02",
    title: "Define",
    description:
      "Scope definition, architecture decisions, technology selection, and deliverable planning.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Full-stack development with clean code, structured logic, and iterative progress toward a working product.",
  },
  {
    step: "04",
    title: "Validate",
    description:
      "Testing flows, edge cases, client feedback sessions, and real-world usage review.",
  },
  {
    step: "05",
    title: "Deploy",
    description:
      "Shipping to production, configuring infrastructure, and ensuring a stable, reliable delivery.",
  },
  {
    step: "06",
    title: "Iterate",
    description:
      "Incorporating feedback, managing scope changes, and continuously improving the product.",
  },
];
