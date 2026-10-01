import { Section } from "./Section";
import { blogPosts, profile } from "@/data/content";
import { BlogCard } from "./BlogCard";
import { MediumIcon } from "./Icons";
import { ExternalLink } from "lucide-react";

export function BlogSection() {
  return (
    <Section id="writing" title="writing">
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <p className="text-foreground/70 max-w-2xl text-base md:text-lg">
            Thoughts, technical deep dives, and architectural explorations on algorithmic trading, LLM-directed engineering, and full-stack software development.
          </p>

          {profile.medium && (
            <a
              href={profile.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs md:text-sm text-foreground/70 hover:text-accent border border-border hover:border-accent px-4 py-2 rounded transition-colors shrink-0"
            >
              <MediumIcon width={16} height={16} />
              <span>Follow on Medium</span>
              <ExternalLink size={14} />
            </a>
          )}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          {blogPosts.map((post, idx) => (
            <div
              key={idx}
              className={post.featured && blogPosts.length === 1 ? "md:col-span-2" : ""}
            >
              <BlogCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
