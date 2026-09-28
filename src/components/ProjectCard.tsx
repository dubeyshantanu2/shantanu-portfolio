import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./Icons";
import { Project } from "@/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className={`flex flex-col p-6 rounded-lg bg-surface border border-border hover:border-accent transition-colors h-full ${project.featured ? "md:col-span-2 md:p-8" : ""}`}>
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl font-bold">{project.title}</h3>
        <div className="flex gap-3">
          {project.links.code && (
            <a href={project.links.code} target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-accent" aria-label="View Source">
              <GithubIcon width={20} height={20} />
            </a>
          )}
          {project.links.live && (
            <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-accent" aria-label="View Live">
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
      
      <p className="text-foreground/70 mb-6 flex-grow">{project.description}</p>
      
      <ul className="list-disc list-inside text-sm text-foreground/60 mb-6 space-y-1">
        {project.bullets.map((bullet, idx) => (
          <li key={idx}>{bullet}</li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border">
        {project.tags.map((tag, idx) => (
          <span key={idx} className="text-xs font-mono text-accent">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
