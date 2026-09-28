import { Section } from "./Section";
import { experiences } from "@/data/content";

export function ExperienceTimeline() {
  return (
    <Section id="experience" title="experience">
      <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            {/* Timeline dot */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-accent-dim text-accent shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
            </div>
            
            {/* Content box */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-lg bg-surface border border-border">
              <div className="flex flex-col md:flex-row justify-between mb-2 md:items-center">
                <h3 className="font-bold text-xl">{exp.role}</h3>
                <time className="font-mono text-sm text-accent">{exp.period}</time>
              </div>
              <div className="text-foreground/70 mb-4 font-mono text-sm">
                {exp.company} &bull; {exp.location}
              </div>
              <ul className="list-disc list-inside text-foreground/60 space-y-2 text-sm">
                {exp.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
