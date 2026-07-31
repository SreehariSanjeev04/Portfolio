export type ProjectCategory = "Web" | "Systems" | "Compilers" | "Databases";

export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  highlights: string[];
  year: string;
  category: ProjectCategory;
  language: string;
  languageColor: string;
};

export type SkillCategory = {
  id: string;
  label: string;
  skills: string[];
};

export type ExperienceItem = {
  role: string;
  org: string;
  period: string;
  location: string;
  type: "Internship" | "Leadership" | "Education";
  bullets: string[];
};

export const profile = {
  name: "Sreehari Sanjeev",
  headline: "Full-Stack Engineer & Systems Builder",
  pitch:
    "Final-year CS undergraduate at NIT Calicut. I design and build full-stack platforms, low-level systems, and agentic AI pipelines — from Docker-sandboxed code execution to operating-system kernels. Previously a Project Intern at Oracle.",
  location: "Calicut, Kerala, India",
  email: "sreeharisanjeev04@gmail.com",
  socials: {
    github: "https://github.com/SreehariSanjeev04",
    linkedin: "https://www.linkedin.com/in/sreehari-sanjeev-a657551a9/",
  },
};

export const projects: Project[] = [
  {
    id: "algobrawl",
    title: "AlgoBrawl",
    tagline: "Real-time competitive coding platform",
    description:
      "A LeetCode-style platform where players queue up, get matched by difficulty in real time, and battle through algorithmic problems in a Monaco-powered editor. Every submission runs untrusted code in isolated Docker sandboxes.",
    tech: ["React", "Node.js", "Express", "Socket.IO", "PostgreSQL", "Docker", "Monaco"],
    github: "https://github.com/SreehariSanjeev04/AlgoBrawl",
    highlights: [
      "Docker-sandboxed code execution with strict resource caps, memory limits & timeouts",
      "Real-time 1v1 matchmaking and live submission events via Socket.IO",
      "JWT + bcrypt auth, testcase validation against custom Python/C++ images",
    ],
    year: "2025 – 2026",
    category: "Web",
    language: "JavaScript",
    languageColor: "bg-yellow-400",
  },
  {
    id: "expos",
    title: "eXpOS Kernel",
    tagline: "Monolithic OS from scratch on XSM",
    description:
      "A multi-programmed operating system kernel hand-built for the XSM architecture simulator — interrupts, exceptions, ABI, process queues and system calls, all written in SPL/EXpL with Lex & Yacc tooling.",
    tech: ["SPL", "EXpL", "Lex & Yacc", "XSM"],
    github: "https://github.com/SreehariSanjeev04/NEXSM",
    highlights: [
      "Preemptive Round-Robin scheduler with full context-switch mechanics",
      "Hardware interrupt handlers, exception routines & application binary interface",
      "Child process lifecycle managed end-to-end via kernel system calls",
    ],
    year: "2026",
    category: "Systems",
    language: "C",
    languageColor: "bg-sky-400",
  },
  {
    id: "compiler",
    title: "EXpL Compiler",
    tagline: "Compiler targeting the XSM architecture",
    description:
      "A complete compiler for the EXpL language built with Lex and Yacc in C — tokenizing, parsing and generating machine code for the XSM architecture as part of the Compiler Design lab.",
    tech: ["C", "Lex", "Yacc", "XSM"],
    github: "https://github.com/SreehariSanjeev04/Compiler-Lab",
    highlights: [
      "Full lexer → parser → code-gen pipeline built from scratch",
      "Error recovery and type-checking across phases",
      "Emitted assembly validated on the XSM simulator",
    ],
    year: "2026",
    category: "Compilers",
    language: "C",
    languageColor: "bg-sky-400",
  },
  {
    id: "rdbms",
    title: "NITCbase RDBMS",
    tagline: "8-layer relational database engine",
    description:
      "A custom relational database management system in C++ with a layered architecture supporting CREATE, INSERT, SELECT, PROJECT and Equi-Join over disk-backed tables, accelerated by B+ Tree indexes.",
    tech: ["C++", "B+ Trees", "File I/O"],
    github: "https://github.com/SreehariSanjeev04/DBMS_Lab",
    highlights: [
      "8-layer architecture: frontend → parser → executor → buffer → storage",
      "B+ Tree indexing for O(log n) key lookups and range scans",
      "Equi-join execution with structured storage management",
    ],
    year: "2024 – 2025",
    category: "Databases",
    language: "C++",
    languageColor: "bg-pink-400",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    label: "Languages",
    skills: ["C/C++", "Python", "JavaScript", "SQL", "Java"],
  },
  {
    id: "frameworks",
    label: "Frameworks",
    skills: ["React", "Next.js", "Node.js", "Express.js", "Socket.IO", "Tailwind CSS"],
  },
  {
    id: "databases",
    label: "Databases",
    skills: ["PostgreSQL", "MySQL", "SQLite", "B+ Trees"],
  },
  {
    id: "devops",
    label: "DevOps & Tools",
    skills: ["Docker", "Linux", "Bash", "Git", "Postman", "Maven"],
  },
  {
    id: "ai",
    label: "AI & Agentic",
    skills: ["Codex Agents", "Prompt Pipelines", "LLM Workflows", "Vulnerability Remediation"],
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "Project Intern",
    org: "Oracle — OCI IRC Team",
    period: "May 2026 – Jul 2026",
    location: "Bangalore, India",
    type: "Internship",
    bullets: [
      "Architected an end-to-end agentic workflow within the OCI IRC team to fully automate the triage, analysis, and resolution of complex codebase and dependency vulnerability tickets.",
      "Developed autonomous AI agents using Codex, designing specialized skill definitions and tailored prompt pipelines to automatically generate precise, context-aware code patches and remediate vulnerabilities.",
    ],
  },
  {
    role: "SSL / NSL Administrator",
    org: "Systems Laboratory",
    period: "Jul 2025 – Present",
    location: "NIT Calicut",
    type: "Leadership",
    bullets: [
      "Administer the Systems Software Laboratory — managing user accounts, lab workstations, and the Linux infrastructure that runs OS-lab assignments for hundreds of students.",
    ],
  },
  {
    role: "Web Development Lead",
    org: "GDG NIT Calicut",
    period: "Jan 2025 – Present",
    location: "NIT Calicut",
    type: "Leadership",
    bullets: [
      "Lead the web development domain — mentoring junior members, running hands-on sessions, and shipping community-facing web projects end to end.",
    ],
  },
  {
    role: "Technical Lead",
    org: "Enquire Quiz Club",
    period: "Nov 2024 – Present",
    location: "NIT Calicut",
    type: "Leadership",
    bullets: [
      "Own the technical stack of the quiz club — building quiz software, scoring pipelines, and automation that powers campus-wide quiz events.",
    ],
  },
  {
    role: "B.Tech, Computer Science & Engineering",
    org: "National Institute of Technology, Calicut",
    period: "Aug 2023 – Present",
    location: "Calicut, Kerala",
    type: "Education",
    bullets: [
      "Coursework: DSA, Compiler Design, OOPS, DBMS, AI, Computer Networking, Operating Systems, Software Engineering.",
    ],
  },
];

export const navLinks = [
  { label: "Projects", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
