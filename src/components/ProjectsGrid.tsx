import { Section } from "./Section";
import { projects } from "@/data/content";
import { ProjectCard } from "./ProjectCard";

export function ProjectsGrid() {
  const agenticProjects = projects.filter((p) => p.category === "Agentic Engineering");
  const mobileProjects = projects.filter((p) => p.category === "Mobile App Development");

  return (
    <Section id="projects" title="projects">
      <div className="space-y-16">
        {/* Agentic Engineering */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-foreground/80 flex items-center">
            <span className="w-8 h-px bg-border mr-4"></span>
            Agentic Engineering
            <span className="flex-1 h-px bg-border ml-4"></span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {agenticProjects.map((project, idx) => (
              <ProjectCard key={idx} project={project} />
            ))}
          </div>
        </div>

        {/* Mobile App Development */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-foreground/80 flex items-center">
            <span className="w-8 h-px bg-border mr-4"></span>
            Mobile App Development
            <span className="flex-1 h-px bg-border ml-4"></span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mobileProjects.map((project, idx) => (
              <ProjectCard key={idx} project={project} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
