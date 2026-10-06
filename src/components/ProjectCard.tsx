import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./Icons";
import { Project } from "@/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className={`group relative flex flex-col p-6 rounded-xl bg-surface border border-border hover:border-[var(--accent)]/50 transition-all duration-300 h-full overflow-hidden ${project.featured ? "md:col-span-2 md:p-8" : ""}`}>
      {/* Background Glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/0 to-[var(--accent)]/0 group-hover:from-[var(--accent)]/5 group-hover:to-transparent transition-colors duration-500 pointer-events-none" />
      
      <div className="relative z-10 flex flex-col h-full">
        <p className="font-mono text-xs text-[var(--foreground)]/50 mb-4">
          <span className="text-slate-400 dark:text-slate-500">/**</span><br/>
          <span className="text-slate-400 dark:text-slate-500"> * @category {project.category}</span><br/>
          <span className="text-slate-400 dark:text-slate-500"> */</span>
        </p>

        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-foreground group-hover:text-[var(--accent)] transition-colors">{project.title}</h3>
          <div className="flex gap-3">
            {project.links.code && (
              <a href={project.links.code} target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-[var(--accent)] transition-colors" aria-label="View Source">
                <GithubIcon width={20} height={20} />
              </a>
            )}
            {project.links.live && (
              <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-[var(--accent)] transition-colors" aria-label="View Live">
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
        
        <p className="text-foreground/70 mb-6 flex-grow">{project.description}</p>
        
        <ul className="list-disc list-inside text-sm text-foreground/60 mb-6 space-y-2">
          {project.bullets.map((bullet, idx) => (
            <li key={idx} className="leading-relaxed">{bullet}</li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border">
          {project.tags.map((tag, idx) => (
            <span key={idx} className="text-xs font-mono text-[var(--accent)] bg-[var(--accent)]/10 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
