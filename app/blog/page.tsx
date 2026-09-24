import type { Metadata } from "next";
import { blogPosts, BLOG_CATEGORIES } from "@/data/blog";
import { BlogCard } from "@/components/blog/BlogCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Blog & Industry Insights",
  description:
    "Packaging tips, industry insights, company news, and sustainability articles from the Kriti Print & Pack Industries team.",
};

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      {/* Page Hero */}
      <section className="bg-brand-navy pt-32 pb-16">
        <Container>
          <div className="max-w-2xl">
            <span className="inline-block text-brand-orange text-sm font-semibold tracking-widest uppercase mb-4">
              Blog
            </span>
            <h1 className="font-display font-bold text-white text-4xl lg:text-5xl leading-tight mb-4">
              Packaging Insights & News
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Packaging tips, industry analysis, and company updates from the Kriti Print & Pack team.
            </p>
          </div>
        </Container>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-brand-gray-light">
        <Container>
          {/* Featured article */}
          {featured && (
            <div className="mb-12">
              <h2 className="font-semibold text-brand-gray text-sm tracking-wider uppercase mb-5">Featured Article</h2>
              <BlogCard post={featured} featured className="lg:grid lg:grid-cols-2 lg:items-center" />
            </div>
          )}

          {/* Rest of articles */}
          <div>
            <h2 className="font-semibold text-brand-gray text-sm tracking-wider uppercase mb-5">All Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {rest.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
