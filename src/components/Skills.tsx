import { Section } from "./Section";
import { skills } from "@/data/content";

export function Skills() {
  return (
    <Section id="skills" title="skills">
      <div className="grid md:grid-cols-2 gap-8">
        {skills.map((group, idx) => (
          <div
            key={idx}
            className="p-6 rounded-lg bg-surface border border-border"
          >
            <h3 className="text-xl font-mono mb-4 text-accent">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-accent-dim text-foreground text-sm font-mono rounded"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
