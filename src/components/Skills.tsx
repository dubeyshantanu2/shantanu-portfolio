import { Section } from "./Section";
import { skills } from "@/data/content";

export function Skills() {
  return (
    <Section id="skills" title="skills">
      <div className="grid md:grid-cols-2 gap-8 relative z-10 pl-6 border-l border-border/50">
        {skills.map((group, idx) => (
          <div
            key={idx}
            className="p-6 rounded-xl bg-surface border border-border group hover:border-blue-500/50 transition-colors relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <h3 className="text-lg font-mono mb-6 text-foreground flex items-center gap-2">
              <span className="text-blue-600 dark:text-blue-400">interface</span> {group.category.replace(/\s+/g, '')} {'{'}
            </h3>
            <div className="flex flex-wrap gap-3 pl-4">
              {group.items.map((item, i) => (
                <span
                  key={i}
                  className="group/item px-3 py-1.5 bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 text-foreground text-sm font-mono rounded-md hover:bg-[var(--accent)] hover:text-white dark:hover:text-black transition-colors"
                >
                  <span className="text-green-700 dark:text-green-400 group-hover/item:text-white dark:group-hover/item:text-black transition-colors">"{item}"</span>
                </span>
              ))}
            </div>
            <div aria-hidden="true" className="text-lg font-mono mt-6 text-foreground">
              {'}'}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
