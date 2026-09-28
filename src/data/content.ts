import { Profile, SkillGroup, Project, Experience, About } from "@/types";

export const profile: Profile = {
  name: "Shantanu",
  role: "Software Engineer",
  tagline: "Building scalable systems and exploring AI/ML.",
  email: "hello@example.com", // TODO(V2)
  github: "https://github.com/placeholder", // TODO(V2)
  linkedin: "https://linkedin.com/in/placeholder", // TODO(V2)
  resumeUrl: "/resume.pdf", // TODO(V2)
  availability: "Open to opportunities",
};

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Java", "Go"], // TODO(V2)
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Spring Boot", "PostgreSQL", "MongoDB"], // TODO(V2)
  },
  {
    category: "Tools & DevOps",
    items: ["Git", "Docker", "AWS", "CI/CD", "Linux"], // TODO(V2)
  },
];

export const projects: Project[] = [
  {
    title: "Project Alpha", // TODO(V2)
    description: "A comprehensive description of Project Alpha, demonstrating architecture and impact.",
    bullets: [
      "Architected and deployed a scalable microservice.",
      "Reduced latency by 40% using Redis caching.",
    ],
    tags: ["React", "Node.js", "Redis"],
    links: {
      code: "https://github.com",
      live: "https://example.com",
    },
    featured: true,
  },
  {
    title: "Project Beta", // TODO(V2)
    description: "An innovative AI-powered tool for internal productivity.",
    bullets: [
      "Integrated OpenAI API for automated text summarization.",
      "Built a seamless UI with Next.js and Tailwind CSS.",
    ],
    tags: ["Next.js", "OpenAI API", "Tailwind"],
    links: {
      code: "https://github.com",
    },
    featured: false,
  },
  {
    title: "Project Gamma", // TODO(V2)
    description: "Open source contribution to a major library.",
    bullets: [
      "Fixed critical bugs in the rendering pipeline.",
      "Added unit tests increasing coverage by 15%.",
    ],
    tags: ["TypeScript", "Jest"],
    links: {
      code: "https://github.com",
    },
    featured: false,
  },
];

export const experiences: Experience[] = [
  {
    company: "Company Name", // TODO(V2)
    role: "Software Engineer", // TODO(V2)
    period: "2022 - Present", // TODO(V2)
    location: "Remote",
    bullets: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    ],
  },
];

export const about: About = {
  bio: [
    "Hello! I'm Shantanu, a Software Engineer currently working at Walmart Global Tech.", // TODO(V2)
    "I'm passionate about building scalable, resilient systems and currently transitioning towards AI engineering and forward-deployed roles.",
    "When I'm not coding, you'll find me exploring new technologies, contributing to open source, or reading up on the latest in AI.",
  ],
  facts: [
    "Based in India", // TODO(V2)
    "Coffee enthusiast",
    "Avid reader",
  ],
};
