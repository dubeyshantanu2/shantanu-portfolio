import { Section } from "./Section";
import { projects } from "@/data/content";
import { ProjectCard } from "./ProjectCard";

export function ProjectsGrid() {
  return (
    <Section id="projects" title="projects">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </Section>
  );
}
