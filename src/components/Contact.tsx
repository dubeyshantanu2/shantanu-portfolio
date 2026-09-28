import { Section } from "./Section";
import { profile } from "@/data/content";
import { Mail } from "lucide-react";

export function Contact() {
  return (
    <Section id="contact" title="contact" className="text-center">
      <div className="max-w-2xl mx-auto flex flex-col items-center">
        <p className="text-foreground/70 mb-8 text-lg">
          {profile.availability}. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 bg-accent text-background px-8 py-4 rounded font-mono font-medium hover:opacity-90 transition-opacity text-lg"
        >
          <Mail size={20} />
          Get In Touch
        </a>
      </div>
    </Section>
  );
}
