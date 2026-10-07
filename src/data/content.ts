import { Profile, SkillGroup, Project, BlogPost, Experience, About } from "@/types";

export const profile: Profile = {
  name: "Shantanu Dubey",
  role: "Software Engineer",
  tagline: "Software engineer with 7+ years building React Native applications across startups and enterprise platforms, with recent work directing LLM coding agents.",
  email: "dubeyshantanu2@gmail.com",
  github: "https://github.com/dubeyshantanu2",
  linkedin: "https://linkedin.com/in/shantanu-dubey-6709b711a",
  medium: "https://medium.com/@dubeyshantanu2",
  resumeUrl: "/resume.pdf", 
  availability: "Open to opportunities",
};

export const skills: SkillGroup[] = [
  {
    category: "Mobile Frontend",
    items: ["React Native", "TypeScript", "Redux Toolkit", "Expo", "Reanimated", "Skia", "Jotai", "React Query", "Tailwind CSS"],
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
    items: ["Docker", "Fly.io", "GitHub Actions", "Bitrise", "Jest", "Mixpanel", "Sentry"],
  },
];

export const projects: Project[] = [
  // --- Agentic Engineering ---
  {
    title: "ARES (Adaptive Reversal & Entry Signal)",
    category: "Agentic Engineering",
    description: "A high-performance, asynchronous algorithmic trading signal system for NIFTY 50 options scalping.",
    bullets: [
      "Monitors 1-minute price action, OI, and Implied Volatility to identify high-probability reversal setups.",
      "Engineered a five-layer architecture (Ingestion, Engine, Detectors, Position Manager, Storage) with a strict 15-minute signal cooldown.",
      "Integrates a standalone XGBoost prediction module and LLM Decision Engine (Jev / Laya) for regime classification.",
    ],
    tags: ["Python 3.10+", "DhanHQ API", "Supabase", "XGBoost", "Fly.io"],
    links: {
      code: "https://github.com/Manmade-Anyme/ARES",
    },
    featured: true,
  },
  {
    title: "KRONOS",
    category: "Agentic Engineering",
    description: "A suggestion-only monthly short-strangle scanner and trade guardian for NSE F&O stocks & MCX commodities.",
    bullets: [
      "Scans daily for range-bound underlyings with overpriced options and ranks strangle suggestions.",
      "Guards open trades with graded hourly advisory pulses (HOLD/TIGHTEN_SL/EXIT) based on IV expansion and OI wall shifts.",
      "Operates on a threaded producer/consumer architecture with a centralized Dhan Redis Hub integration.",
    ],
    tags: ["Python", "Redis", "Cron", "Discord API"],
    links: {
      code: "https://github.com/Manmade-Anyme/Kronos",
    },
    featured: true,
  },
  {
    title: "Kairos",
    category: "Agentic Engineering",
    description: "A headless intraday condition scoring engine (environment monitor) specifically designed for NIFTY Options Buying.",
    bullets: [
      "Runs a rolling 60-second cycle evaluating 7 conditions (Momentum, IV Flow, Gammas, VWAP) to broadcast GO/CAUTION/AVOID alerts.",
      "Communicates exclusively with a Discord orchestrator bot via an asynchronous Supabase Shared State Bridge.",
      "Features an anti-flap IV Contraction Cap hysteresis to protect from theta-crush during dying markets.",
    ],
    tags: ["Python", "PostgreSQL", "Cron", "Discord Webhooks"],
    links: {
      code: "https://github.com/Manmade-Anyme/Kairos",
    },
    featured: true,
  },
  
  // --- Mobile App Development ---
  {
    title: "Sidekick (Me@Walmart)",
    category: "Mobile App Development",
    description: "Mobile solution within the Me@Walmart app that empowers store associates and team leads to efficiently manage shift goals, team preferences, and additional work tasks.",
    bullets: [
      "Streamlined daily planning, task assignment, and progress tracking, enhancing collaboration and productivity for in-store teams.",
      "Implemented dynamic goal, associate, and additional work list components, enabling real-time data display and user interaction.",
      "Built reusable UI widgets to streamline team preference management and integrated navigation flows using React Navigation.",
      "Handled error states, loading skeletons, and accessibility features to ensure robust app behaviour."
    ],
    tags: ["React Native", "Redux", "React Navigation"],
    links: {
      live: "https://play.google.com/store/apps/details?id=com.walmart.squiggly&hl=en_IN"
    },
    featured: true,
  },
  {
    title: "The Draft",
    category: "Mobile App Development",
    description: "A cross-platform social media application for jobseekers and posters.",
    bullets: [
      "Implemented state management with Redux and React Query, integrated Firebase for real-time updates, and used Keychain for secure storage.",
      "Focused on performance optimization and media rendering with Fast Image and video libraries."
    ],
    tags: ["React Native", "Redux", "Firebase", "Mixpanel"],
    links: {},
    featured: false,
  },
  {
    title: "Platform",
    category: "Mobile App Development",
    description: "A React Native boilerplate built to streamline and accelerate project setup for new client engagements.",
    bullets: [
      "Combined React Native with Redux Toolkit for state management, React Navigation for in-app routing, and React Hooks for state/lifecycle management.",
      "Configured Bitrise and CircleCI for CI/CD with automated build notifications, code review, and Appium testing."
    ],
    tags: ["React Native", "Redux Toolkit", "Bitrise", "Appium"],
    links: {},
    featured: false,
  },
  {
    title: "Greenspace Golf",
    category: "Mobile App Development",
    description: "A free social application for golf enthusiasts to connect and share their passion.",
    bullets: [
      "Built using React Native CLI with Redux Toolkit for API integration.",
      "Features deep linking, FCM/APNS push notifications, and Google/Apple auth."
    ],
    tags: ["React Native", "Redux Toolkit", "FCM"],
    links: {
      live: "https://www.greenspacegolf.com/"
    },
    featured: false,
  },
  {
    title: "Path Truck and Trailer",
    category: "Mobile App Development",
    description: "A navigation app for truck drivers focused on safety, efficiency, and profitability.",
    bullets: [
      "Integrated the Google Maps API for precise route planning and reliable map services.",
      "Developed with TypeScript to ensure clean, maintainable code aligned with industry best practices."
    ],
    tags: ["React Native", "TypeScript", "Maps API"],
    links: {
      live: "https://apps.apple.com/us/app/path-truck-trailer/id6450257256"
    },
    featured: false,
  },
  {
    title: "Suggaa",
    category: "Mobile App Development",
    description: "An online cab-aggregator service providing safe, comfortable rides for customers and earning opportunities for driver-partners.",
    bullets: [
      "Implemented Mixpanel for event tracking and integrated third-party packages alongside custom UI components.",
      "Built complex UI screens using Skia and Reanimated within an Expo monorepo setup."
    ],
    tags: ["React Native", "Expo", "Skia", "Reanimated"],
    links: {
      live: "https://play.google.com/store/apps/details?id=app.suggaa.rider&hl=en_IN"
    },
    featured: false,
  },
  {
    title: "VBN Official",
    category: "Mobile App Development",
    description: "An app enabling small businesses to exchange and generate leads within a network.",
    bullets: [
      "Built with React Native for a responsive user experience with statistics for recurring in-person meetups."
    ],
    tags: ["React Native"],
    links: {
      live: "https://apps.apple.com/us/app/vbn-official/id1617863006"
    },
    featured: false,
  },
  {
    title: "B2BDock",
    category: "Mobile App Development",
    description: "A platform helping retailers and brands manage orders, sales, inventory, and marketing.",
    bullets: [
      "Built with React Native and Redux for frontend development, and Node.js, Flask, and MongoDB for backend development."
    ],
    tags: ["React Native", "Redux", "Node.js", "MongoDB"],
    links: {},
    featured: false,
  }
];

export const blogPosts: BlogPost[] = [
  {
    title: "How to Give Your Algorithmic Trading System Common Sense Using TypeSafe AI",
    description:
      "Explores augmenting quantitative trading pipelines (such as ARES) with ultrafast System 1 judgment models like TypeSafe AI's Jev — evaluating structural market regime, trade setup quality, and barrier probabilities in sub-second execution loops.",
    url: "https://medium.com/@dubeyshantanu2/how-to-give-your-algorithmic-trading-system-common-sense-using-typesafe-ai-b52ecd45c627",
    date: "Oct 2026",
    readTime: "5 min read",
    tags: ["Algorithmic Trading", "TypeSafe AI", "System One", "Python", "ARES"],
    platform: "Medium",
    featured: true,
  },
];

export const experiences: Experience[] = [
  {
    company: "Independent Contract",
    role: "Software Engineer — AI-Directed Systems Engineering",
    period: "Mar 2026 - Present",
    location: "Remote",
    bullets: [
      "Architect and direct production multi-agent systems using LangGraph and Python 3.11 asyncio: author technical specifications and state graphs, deploying cyclical workflows with Human-in-the-Loop (HITL) checkpoints and PostgreSQL state persistence.",
      "Built a repeatable engineering pipeline — specification → architecture decision record → implementation → debug report → automated eval gate → pull request — backed by DeepEval and Langfuse tracing to monitor token costs, latency (p95 < 650ms), and prevent model regressions.",
      "Engineered a Hybrid RAG retrieval pipeline using Supabase pgvector and PostgreSQL full-text search with Reciprocal Rank Fusion (RRF) and strict Pydantic v2 schema enforcement, achieving sub-150ms semantic search with zero JSON extraction hallucinations.",
      "Delivered high-throughput asynchronous services on Python 3.11 with WebSocket and REST APIs, Redis pub/sub, token-bucket rate governance, and multi-stage Docker deployments on Fly.io.",
      "Specified and shipped an XGBoost trade-outcome classifier using walk-forward validation, SHAP feature attributions, and an unsupervised Isolation Forest anomaly-detection overlay with drift monitoring.",
    ],
  },
  {
    company: "Walmart Global Tech",
    role: "Software Developer 3",
    period: "Dec 2024 - Mar 2026",
    location: "Bengaluru, India",
    bullets: [
      "Developed React Native components for the Sidekick mini-app within the Me@Walmart platform, integrating Redux selectors to manage goal types and role-based conditional rendering (leads vs. associates), improving navigation and task-completion flows.",
      "Designed shared frontend components and widgets for the MyWalmart platform, including API integration, error handling, and multi-workflow support; estimated and implemented features in alignment with Figma designs.",
      "Processed and formatted large asynchronous datasets in JavaScript/JSON for testing (task queues with statuses, durations, hierarchies), supporting efficient mobile app development and state synchronization.",
      "Used Claude API and GitHub Copilot to accelerate feature delivery, automated debugging, and code review workflows on complex enterprise features.",
      "Authored and processed Change Requests (CRQs) for production deployments in compliance with enterprise change-management and SOC2 audit processes.",
    ],
  },
  {
    company: "Founder and Lightning",
    role: "Software Developer",
    period: "Dec 2022 - Dec 2024",
    location: "London, UK (Remote)",
    bullets: [
      "Functioned as forward deployed engineer across multiple client engagements, translating business requirements into technical solution designs and shipping cross-platform iOS/Android applications from 0 to 1.",
      "Implemented Redux for state management and optimized application performance through efficient data handling with JSON and RESTful APIs.",
      "Ensured application stability via TDD with Jest and React Native Testing Library; used Flipper for debugging/performance monitoring and Mixpanel for user analytics.",
      "Deployed applications via TestFlight and Bitrise with CI/CD pipelines; participated actively in architecture reviews and client sprint presentations.",
      "Fixed runtime and native iOS/Android bugs to maintain seamless functionality across client projects.",
    ],
  },
  {
    company: "Suggaa Ventures",
    role: "Frontend Developer",
    period: "May 2022 - Dec 2022",
    location: "Bengaluru, India",
    bullets: [
      "Built complex UI screens and custom components using Redash, Skia, and Reanimated within an Expo monorepo setup; used EAS Build for scalable, efficient app builds.",
      "Used TypeScript for type-safe development; integrated Jotai, Google API, and GraphQL for user-facing features.",
    ],
  },
  {
    company: "Navaratan Technologies",
    role: "Associate Software Developer",
    period: "Sep 2021 - May 2022",
    location: "Hyderabad, India",
    bullets: [
      "Built React Native UI components and implemented Redux state management for client applications, ensuring a seamless user experience.",
      "Integrated RESTful APIs and JSON for backend integration and data exchange; collaborated directly with clients to understand requirements and deliver solutions to complex problems.",
    ],
  },
  {
    company: "B2BDock",
    role: "Application Developer",
    period: "Oct 2019 - Sep 2021",
    location: "Bengaluru, India",
    bullets: [
      "Designed and implemented application solutions for B2BDock's platform targeting both Android and iOS, using React Native and Redux for frontend development.",
      "Built a comprehensive CRM system for customer interaction management; integrated third-party APIs to extend functionality and improve user experience.",
      "Delivered applications that contributed directly to company growth and helped the founder secure funding in the company's first round.",
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
