import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { getBlogPostBySlug, blogPosts, BLOG_CATEGORIES } from "@/data/blog";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { formatDate } from "@/lib/utils";
import { CTA } from "@/components/home/CTA";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: "Article Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const categoryLabel = BLOG_CATEGORIES.find((c) => c.value === post.category)?.label;

  // Process markdown-like content into paragraphs
  const sections = post.content.trim().split("\n\n").filter(Boolean);

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-brand-navy pt-24 pb-2">
        <Container>
          <nav className="flex items-center gap-2 text-sm text-gray-400 py-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-white truncate max-w-xs">{post.title}</span>
          </nav>
        </Container>
      </div>

      {/* Article Hero */}
      <section className="bg-brand-navy pb-0">
        <Container size="narrow">
          <div className="py-10">
            <div className="flex items-center gap-3 mb-5">
              <Badge variant="orange">{categoryLabel}</Badge>
              <span className="flex items-center gap-1 text-gray-400 text-sm">
                <Calendar className="w-3.5 h-3.5" /> {formatDate(post.publishedAt)}
              </span>
              <span className="flex items-center gap-1 text-gray-400 text-sm">
                <Clock className="w-3.5 h-3.5" /> {post.readTime} min read
              </span>
            </div>
            <h1 className="font-display font-bold text-white text-3xl lg:text-4xl leading-tight mb-4">
              {post.title}
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">{post.excerpt}</p>
          </div>
        </Container>
      </section>

      {/* Article body */}
      <section className="py-14 bg-white">
        <Container size="narrow">
          <div className="prose-content max-w-none">
            {sections.map((section, i) => {
              const trimmed = section.trim();
              if (trimmed.startsWith("## ")) {
                return (
                  <h2 key={i}>{trimmed.replace(/^## /, "")}</h2>
                );
              }
              if (trimmed.startsWith("### ")) {
                return (
                  <h3 key={i}>{trimmed.replace(/^### /, "")}</h3>
                );
              }
              if (trimmed.startsWith("- ")) {
                const items = trimmed.split("\n").filter((l) => l.startsWith("- "));
                return (
                  <ul key={i}>
                    {items.map((item, j) => (
                      <li key={j}>{item.replace(/^- /, "").replace(/\*\*(.*?)\*\*/g, "$1")}</li>
                    ))}
                  </ul>
                );
              }
              if (trimmed.startsWith("1. ")) {
                const items = trimmed.split("\n").filter((l) => /^\d+\./.test(l));
                return (
                  <ol key={i}>
                    {items.map((item, j) => (
                      <li key={j}>{item.replace(/^\d+\. /, "")}</li>
                    ))}
                  </ol>
                );
              }
              // Regular paragraph — process **bold**
              const parts = trimmed.split(/(\*\*.*?\*\*)/g);
              return (
                <p key={i}>
                  {parts.map((part, j) => {
                    if (part.startsWith("**") && part.endsWith("**")) {
                      return <strong key={j}>{part.slice(2, -2)}</strong>;
                    }
                    return part;
                  })}
                </p>
              );
            })}
          </div>

          {/* Tags */}
          <div className="mt-10 pt-8 border-t border-gray-100">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm text-gray-400">Tags:</span>
              {post.tags.map((tag) => (
                <span key={tag} className="text-xs bg-brand-gray-light text-brand-gray-dark px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Back link */}
          <div className="mt-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-brand-orange font-semibold hover:text-brand-orange-dark transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
