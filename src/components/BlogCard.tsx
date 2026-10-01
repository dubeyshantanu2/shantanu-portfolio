import { ExternalLink, BookOpen } from "lucide-react";
import { MediumIcon } from "./Icons";
import { BlogPost } from "@/types";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group flex flex-col p-6 md:p-8 rounded-lg bg-surface border border-border hover:border-accent transition-all duration-200 h-full relative">
      {/* Meta top bar: Platform badge & read time */}
      <div className="flex items-center justify-between gap-2 mb-4 text-xs font-mono text-foreground/60">
        <div className="flex items-center gap-2">
          {post.platform.toLowerCase() === "medium" ? (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-foreground/5 border border-border text-foreground/80 font-medium">
              <MediumIcon width={14} height={14} />
              {post.platform}
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-foreground/5 border border-border text-foreground/80 font-medium">
              <BookOpen size={14} />
              {post.platform}
            </span>
          )}
          {post.featured && (
            <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-accent/10 text-accent border border-accent/20">
              Featured
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-accent transition-colors leading-snug">
        <a
          href={post.url}
          target="_blank"
          rel="noopener noreferrer"
          className="focus:outline-none focus:underline"
        >
          {post.title}
        </a>
      </h3>

      {/* Description */}
      <p className="text-foreground/70 mb-6 flex-grow leading-relaxed text-sm md:text-base">
        {post.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {post.tags.map((tag, idx) => (
          <span
            key={idx}
            className="text-xs font-mono text-accent/90 bg-accent/5 px-2 py-1 rounded border border-accent/10"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Action footer */}
      <div className="pt-4 border-t border-border flex items-center justify-between mt-auto">
        <a
          href={post.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-mono text-accent hover:underline group-hover:translate-x-1 transition-transform"
        >
          Read on Medium
          <ExternalLink size={16} />
        </a>
      </div>
    </article>
  );
}
