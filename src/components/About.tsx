import { Section } from "./Section";
import { about } from "@/data/content";

export function About() {
  return (
    <Section id="about" title="about">
      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-6 text-foreground/80 leading-relaxed">
          {about.bio.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
        <div>
          <div className="p-6 bg-surface border border-border rounded-lg">
            <h3 className="font-mono text-accent mb-4">quick facts</h3>
            <ul className="space-y-3 font-mono text-sm text-foreground/70">
              {about.facts.map((fact, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">&gt;</span>
                  {fact}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
