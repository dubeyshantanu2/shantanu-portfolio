"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/content";
import { Mail, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-6"
    >
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-accent mb-4">&gt; {`whoami`}</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Hi, I&apos;m {profile.name}.
          </h1>
          <h2 className="text-2xl md:text-4xl text-foreground/70 font-mono mb-8">
            {profile.role}
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mb-10 leading-relaxed">
            {profile.tagline}
          </p>
          
          <div className="flex flex-wrap gap-4 items-center">
            <a
              href={`mailto:${profile.email}`}
              className="bg-accent text-background px-6 py-3 rounded font-mono font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              <Mail size={18} />
              Say Hello
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border bg-surface px-6 py-3 rounded font-mono font-medium hover:border-accent transition-colors flex items-center gap-2"
            >
              <FileText size={18} />
              Resume
            </a>
          </div>

          <div className="mt-12 flex gap-6">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-accent transition-colors">
              <GithubIcon width={24} height={24} />
              <span className="sr-only">GitHub</span>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-accent transition-colors">
              <LinkedinIcon width={24} height={24} />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
