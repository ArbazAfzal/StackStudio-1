import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/layout/footer";
import { JsonLd } from "@/components/ui/json-ld";
import { blogPosts } from "@/lib/data";
import { SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Article Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `${SITE_URL}/blog/${post.slug}`,
      images: [{ url: post.image.src, alt: post.image.alt }],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-32 text-center">
        <h1 className="text-3xl font-bold">Article not found</h1>
        <Link href="/blog" className="mt-6 inline-block text-accent">
          Back to blog
        </Link>
      </main>
    );
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: "Stack Studio" },
    publisher: { "@type": "Organization", name: "Stack Studio" },
    image: post.image.src,
    url: `${SITE_URL}/blog/${post.slug}`,
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <main>
        <article>
          <div className="relative h-[42vh] min-h-[320px] w-full overflow-hidden">
            <Image
              src={post.image.src}
              alt={post.image.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/20" />
            <div className="absolute inset-0 flex items-end">
              <div className="mx-auto w-full max-w-3xl px-4 pb-10 sm:px-6">
                <div className="flex items-center gap-3 text-xs text-muted">
                  <span className="rounded-full bg-accent/10 px-2.5 py-1 font-medium text-accent">
                    {post.category}
                  </span>
                  <span>{post.date}</span>
                  <span>· {post.readTime}</span>
                </div>
                <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">{post.title}</h1>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
            <p className="text-lg font-medium text-foreground/90">{post.excerpt}</p>
            <div className="mt-8 space-y-6 text-foreground/80">
              {post.body.map((para, i) => (
                <p key={i} className="leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            <Link
              href="/blog"
              className="mt-12 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
            >
              <ArrowLeft size={16} /> Back to all articles
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
