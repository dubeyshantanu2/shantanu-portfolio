import { profile } from "@/data/content";
import { GithubIcon, LinkedinIcon } from "./Icons";


export function Footer() {
  return (
    <footer className="py-8 border-t border-border mt-24">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-sm text-foreground/60">
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-accent transition-colors" aria-label="GitHub">
            <GithubIcon width={20} height={20} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-accent transition-colors" aria-label="LinkedIn">
            <LinkedinIcon width={20} height={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
