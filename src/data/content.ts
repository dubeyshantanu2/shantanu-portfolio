import { Profile, SkillGroup, Project, Experience, About } from "@/types";

export const profile: Profile = {
  name: "Shantanu Dubey",
  role: "Software Engineer",
  tagline: "Software engineer with 7+ years building React Native applications across startups and enterprise platforms, with recent work directing LLM coding agents.",
  email: "dubeyshantanu2@gmail.com",
  github: "https://github.com/dubeyshantanu2",
  linkedin: "https://linkedin.com/in/shantanu-dubey-6709b711a",
  resumeUrl: "/resume.pdf", 
  availability: "Open to opportunities",
};

export const skills: SkillGroup[] = [
  {
    category: "Mobile & Frontend",
    items: ["React Native", "TypeScript", "Redux", "Expo", "Reanimated", "Tailwind CSS", "GraphQL"],
  },
  {
    category: "AI & Machine Learning",
    items: ["LLM Orchestration", "Prompt Engineering", "Claude API", "OpenAI SDK", "XGBoost", "Isolation Forest"],
  },
  {
    category: "Backend & Data",
    items: ["Python 3.11", "PostgreSQL", "Supabase", "Redis", "REST APIs", "WebSockets", "Pandas"],
  },
  {
    category: "Tools & DevOps",
    items: ["Docker", "Fly.io", "GitHub Actions", "Bitrise", "Jest", "Mixpanel"],
  },
];

export const projects: Project[] = [
  {
    title: "Agentic Trading Infrastructure",
    description: "A portfolio of interoperating systems for Indian derivatives markets running an asynchronous signal engine.",
    bullets: [
      "Engineered an asynchronous signal engine running XGBoost predictions alongside a market-regime forecaster.",
      "Built a position-guarding scanner and a real-time microstructure terminal sharing a Redis-based rate-governance layer.",
    ],
    tags: ["Python", "XGBoost", "Redis", "Supabase", "Fly.io"],
    links: {
      code: "https://github.com/dubeyshantanu2",
    },
    featured: true,
  },
  {
    title: "Clawbot",
    description: "A Discord bot integrating the Claude API for natural-language code generation and iterative debugging.",
    bullets: [
      "Implemented Docker-sandboxed execution for secure environment isolation.",
      "Engineered per-user SQLite conversation history, deploying the system on a VPS for 24/7 availability.",
    ],
    tags: ["Claude API", "Docker", "SQLite", "Discord API"],
    links: {
      code: "https://github.com/dubeyshantanu2",
    },
    featured: false,
  },
  {
    title: "Kairos",
    description: "A real-time market-monitoring system ingesting live data and delivering scored alerts.",
    bullets: [
      "Ingests live data via REST APIs at 1-minute intervals for continuous monitoring.",
      "Persists time-series data to Supabase/PostgreSQL and delivers scored alerts via Discord webhooks.",
    ],
    tags: ["REST APIs", "Supabase", "PostgreSQL"],
    links: {
      code: "https://github.com/dubeyshantanu2",
    },
    featured: false,
  },
  {
    title: "The Draft (Mobile Platform)",
    description: "A cross-platform social media application for jobseekers and posters.",
    bullets: [
      "Implemented complex state management architecture using Redux and React Query.",
      "Integrated Firebase for real-time updates and Keychain for secure storage.",
    ],
    tags: ["React Native", "Redux", "Firebase", "Mixpanel"],
    links: {},
    featured: false,
  },
];

export const experiences: Experience[] = [
  {
    company: "Independent Contract",
    role: "Software Engineer — AI-Directed Systems",
    period: "Mar 2026 - Present",
    location: "Remote",
    bullets: [
      "Design and direct the implementation of production systems using LLM coding agents as the primary build layer.",
      "Built a repeatable engineering pipeline (specification → ADR → implementation → QA report → PR) with human review gates.",
      "Delivered on Python 3.11 / asyncio with WebSocket APIs, Supabase persistence, and Redis pub/sub deployed via Docker on Fly.io.",
      "Specified and shipped an XGBoost trade-outcome classifier using walk-forward validation and Isolation Forest anomaly detection.",
    ],
  },
  {
    company: "Walmart Global Tech",
    role: "Software Developer 3",
    period: "Dec 2024 - Mar 2026",
    location: "Bengaluru, India",
    bullets: [
      "Developed React Native components for the Sidekick mini-app within the Me@Walmart platform, integrating Redux selectors to manage goal types.",
      "Designed shared frontend components and widgets including API integration, error handling, and multi-workflow support.",
      "Used Claude API and GitHub Copilot to accelerate feature delivery, code review, and debugging workflows.",
      "Authored and processed Change Requests (CRQs) for production deployments in compliance with enterprise processes.",
    ],
  },
  {
    company: "Founder and Lightning",
    role: "Software Developer",
    period: "Dec 2022 - Dec 2024",
    location: "London, UK (Remote)",
    bullets: [
      "Built cross-platform iOS/Android applications using React Native, translating Figma designs into pixel-perfect production UI.",
      "Ensured app stability via TDD with Jest and React Native Testing Library, deploying applications via TestFlight and Bitrise.",
      "Implemented Redux for state management and optimized app performance through efficient RESTful API data handling.",
    ],
  },
  {
    company: "Suggaa Ventures",
    role: "Frontend Developer",
    period: "May 2022 - Dec 2022",
    location: "Bengaluru, India",
    bullets: [
      "Built complex UI screens and custom components using Redash, Skia, and Reanimated within an Expo monorepo setup.",
      "Used TypeScript for type-safe development; integrated Jotai, Google API, and GraphQL for user-facing features.",
    ],
  },
];

export const about: About = {
  bio: [
    "I am a Software Engineer with over 7 years of experience building cross-platform React Native applications for startups and massive enterprise platforms.",
    "Recently, my focus has shifted toward building AI-directed systems and orchestrating LLM coding agents. I specialize in designing robust architectures, from Python/asyncio backend engines to highly performant mobile interfaces.",
    "I hold a Bachelor of Engineering in Mechanical Engineering from Visvesvaraya Technological University, but I've spent my entire professional career deeply immersed in software development, machine learning, and automation.",
  ],
  facts: [
    "Based in Bengaluru, Karnataka, India",
    "Specialist in React Native & Agentic Engineering",
    "Builder of market-monitoring and LLM-orchestration systems",
  ],
};
