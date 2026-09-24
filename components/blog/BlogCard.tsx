import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { BlogPost, BLOG_CATEGORIES } from "@/data/blog";
import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
  className?: string;
}

function getCategoryLabel(category: string): string {
  return BLOG_CATEGORIES.find((c) => c.value === category)?.label ?? category;
}

export function BlogCard({ post, featured = false, className }: BlogCardProps) {
  return (
    <article
      className={cn(
        "group flex flex-col bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-brand-blue/30 hover:shadow-lg transition-all duration-300",
        className
      )}
    >
      {/* Image */}
      <div
        className={cn(
          "relative bg-gradient-to-br from-brand-navy-light to-brand-navy overflow-hidden",
          featured ? "h-56" : "h-44"
        )}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center p-6">
            <div className="w-14 h-14 bg-brand-blue/20 rounded-xl border border-brand-blue/30 flex items-center justify-center mx-auto mb-2">
              <svg
                viewBox="0 0 24 24"
                className="w-7 h-7 text-brand-blue"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zM7 8h10M7 12h10M7 16h6" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <Badge variant="blue">{getCategoryLabel(post.category)}</Badge>
          <div className="flex items-center gap-3 text-xs text-gray-400">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {formatDate(post.publishedAt)}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {post.readTime} min read
            </span>
          </div>
        </div>

        <h3 className="font-display font-bold text-brand-gray-dark leading-snug mb-3 group-hover:text-brand-blue transition-colors text-lg">
          {post.title}
        </h3>
        <p className="text-brand-gray text-sm leading-relaxed flex-1 mb-5 line-clamp-3">
          {post.excerpt}
        </p>

        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-1.5 text-brand-blue text-sm font-semibold hover:gap-3 transition-all"
          aria-label={`Read ${post.title}`}
        >
          Read Article <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </article>
  );
}
