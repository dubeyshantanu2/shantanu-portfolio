export interface Profile {
  name: string;
  role: string;
  tagline: string;
  email: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  availability: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Project {
  title: string;
  description: string;
  bullets: string[];
  tags: string[];
  links: {
    code?: string;
    live?: string;
  };
  featured: boolean;
  image?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
}

export interface About {
  bio: string[];
  facts: string[];
}
