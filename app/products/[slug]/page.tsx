import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ArrowRight } from "lucide-react";
import { getProductBySlug, products, PRODUCT_CATEGORIES } from "@/data/products";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };

  return {
    title: product.name,
    description: product.shortDescription,
    openGraph: {
      title: product.name,
      description: product.shortDescription,
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const categoryLabel = PRODUCT_CATEGORIES.find((c) => c.value === product.category)?.label;

  // Related products (same category, different product)
  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-brand-navy pt-24 pb-2">
        <Container>
          <nav className="flex items-center gap-2 text-sm text-gray-400 py-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-white transition-colors">Products</Link>
            <span>/</span>
            <span className="text-white">{product.name}</span>
          </nav>
        </Container>
      </div>

      {/* Product Hero */}
      <section className="bg-brand-navy pb-16">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Product image */}
            <div className="rounded-2xl overflow-hidden bg-brand-navy-light border border-white/10 aspect-[4/3] flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-24 h-24 bg-brand-orange/20 rounded-2xl border border-brand-orange/30 flex items-center justify-center mx-auto mb-4">
                  <svg
                    viewBox="0 0 48 48"
                    className="w-12 h-12 text-brand-orange"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <rect x="4" y="20" width="40" height="24" rx="2" />
                    <path d="M4 28h40M16 20V12a8 8 0 0116 0v8" />
                  </svg>
                </div>
                <p className="text-white font-medium">{product.name}</p>
                <p className="text-gray-400 text-sm mt-1">Product Image Coming Soon</p>
              </div>
            </div>

            {/* Product info */}
            <div className="lg:py-4">
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="orange">{categoryLabel}</Badge>
              </div>
              <h1 className="font-display font-bold text-white text-3xl lg:text-4xl leading-tight mb-4">
                {product.name}
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                {product.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <Button href="/request-quote" variant="primary" size="md">
                  Request a Quote
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button href="/contact" variant="outline" size="md" className="border-white/30 text-white hover:bg-white hover:text-brand-gray-dark">
                  Talk to an Expert
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Details */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Features */}
            <div className="lg:col-span-1">
              <h2 className="font-display font-bold text-brand-gray-dark text-xl mb-5">Key Features</h2>
              <ul className="space-y-3">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-brand-gray text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Applications */}
            <div className="lg:col-span-1">
              <h2 className="font-display font-bold text-brand-gray-dark text-xl mb-5">Applications</h2>
              <ul className="space-y-3">
                {product.applications.map((app) => (
                  <li key={app} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-brand-orange rounded-full flex-shrink-0 mt-2" />
                    <span className="text-brand-gray text-sm">{app}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specifications */}
            {product.specifications && (
              <div className="lg:col-span-1">
                <h2 className="font-display font-bold text-brand-gray-dark text-xl mb-5">Specifications</h2>
                <div className="bg-brand-gray-light rounded-xl overflow-hidden border border-gray-100">
                  {Object.entries(product.specifications).map(([key, value], i) => (
                    <div
                      key={key}
                      className={`flex justify-between gap-4 px-4 py-3 text-sm ${i % 2 === 0 ? "bg-white" : "bg-brand-gray-light"}`}
                    >
                      <span className="font-medium text-brand-gray-dark">{key}</span>
                      <span className="text-brand-gray text-right">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* Related products */}
      {related.length > 0 && (
        <section className="py-16 bg-brand-gray-light">
          <Container>
            <h2 className="font-display font-bold text-brand-gray-dark text-2xl mb-8">
              Related Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link
                  key={p.id}
                  href={`/products/${p.slug}`}
                  className="bg-white rounded-xl p-5 border border-gray-100 hover:border-brand-orange/30 hover:shadow-md transition-all group"
                >
                  <h3 className="font-semibold text-brand-gray-dark mb-1 group-hover:text-brand-orange transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-brand-gray text-sm line-clamp-2">{p.shortDescription}</p>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* CTA */}
      <section className="py-14 bg-brand-navy">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="font-display font-bold text-white text-2xl mb-1">
                Interested in this product?
              </h2>
              <p className="text-gray-400">Request a quote and we&apos;ll get back to you within 24 hours.</p>
            </div>
            <Button href="/request-quote" variant="primary" size="lg">
              Request a Quote
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
