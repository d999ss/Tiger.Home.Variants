import { notFound } from "next/navigation"
import { format, parseISO } from "date-fns"
import { Calendar, Tag, User } from "lucide-react"
import { marked } from "marked"
import Image from "next/image"
import Link from "next/link"

import { allPressReleases, getPressPost } from "@/lib/content"
import { Badge } from "@/components/ui/badge"
import { Card, CardBody } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/site/Breadcrumbs"

const categoryColors = {
  announcement: "brand",
  research: "default",
  partnership: "outline",
  product: "brand",
  event: "outline"
} as const

export async function generateStaticParams() {
  const posts = allPressReleases()
  return posts.map(post => ({
    slug: post.slug
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const post = getPressPost(resolvedParams.slug)
  if (!post) return {}

  return {
    title: post.data.seo?.title || `${post.data.title} | Tiger BioSciences Press Room`,
    description: post.data.seo?.description || post.data.excerpt
  }
}

export default async function PressPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const post = getPressPost(resolvedParams.slug)

  if (!post) {
    notFound()
  }

  const { data, content } = post
  const rawHtml = marked(content)
  // Sanitize to prevent XSS from markdown content
  const DOMPurify = (await import("dompurify")).default
  const htmlContent = typeof window !== "undefined" ? DOMPurify.sanitize(rawHtml as string) : rawHtml

  // Get other articles for Read More section (exclude current article)
  const allPosts = allPressReleases()
  const relatedPosts = allPosts
    .filter(p => p.slug !== resolvedParams.slug)
    .slice(0, 3)
    .map(p => ({
      slug: p.slug,
      title: p.title,
      excerpt: p.excerpt,
      date: p.date,
      category: p.category,
      heroImage: p.heroImage
    }))

  return (
    <main className="min-h-screen pt-32 pb-24">
      <article className="container mx-auto max-w-5xl px-4 sm:px-6 md:px-12">
        {/* Breadcrumbs */}
        <div className="mb-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Press Room", href: "/press" },
              { label: data.title }
            ]}
          />
        </div>
        {/* Header */}
        <header className="mb-14 space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant={categoryColors[data.category]} className="capitalize">
              {data.category}
            </Badge>
            <time className="text-sm text-muted-foreground flex items-center gap-2">
              <Calendar className="size-4" />
              {format(parseISO(data.date), "MMMM d, yyyy")}
            </time>
            {data.author && (
              <span className="text-sm text-muted-foreground flex items-center gap-2">
                <User className="size-4" />
                {data.author}
              </span>
            )}
          </div>

          <h1 className="max-w-4xl text-display-xl font-light tracking-[-0.025em]">
            {data.title}
          </h1>

          <p className="max-w-3xl text-xl text-muted-foreground leading-relaxed">
            {data.excerpt}
          </p>

          {data.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-4">
              {data.tags.map(tag => (
                <Badge key={tag} variant="outline" className="text-xs">
                  <Tag className="size-3 mr-1" />
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </header>

        {/* Hero Image */}
        {data.heroImage && (
          <div className="relative w-full h-[400px] md:h-[500px] mb-12 overflow-hidden rounded-lg">
            <Image
              src={data.heroImage}
              alt={data.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
              priority
            />
          </div>
        )}

        {/* Content */}
        <div className="border-t border-border/70 pt-12">
          <div
            className="prose prose-neutral dark:prose-invert mx-auto max-w-3xl prose-headings:font-light prose-headings:tracking-tight prose-h2:text-h2 prose-h2:mt-14 prose-h3:text-h3 prose-h3:mt-10 prose-p:text-[18px] prose-p:leading-[1.9] prose-p:my-6 prose-a:text-brand prose-a:no-underline hover:prose-a:underline prose-strong:font-medium prose-strong:text-foreground prose-li:text-[18px] prose-li:leading-[1.9]"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </div>

        {/* Read More Section */}
        {relatedPosts.length > 0 && (
          <section className="mt-20 pt-12 border-t border-border">
            <h2 className="text-h2 mb-8">Read More</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/press/${relatedPost.slug}`}
                  className="group block"
                >
                  <Card className="h-full transition-all duration-300 !border-0 shadow-none hover:shadow-lg overflow-hidden">
                    <CardBody className="flex flex-col h-full p-0">
                      {relatedPost.heroImage && (
                        <div className="h-48 overflow-hidden relative rounded-lg">
                          <Image
                            src={relatedPost.heroImage}
                            alt={relatedPost.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                          />
                        </div>
                      )}

                      <div className="p-6 flex flex-col flex-1">
                        <div className="mb-4 flex items-center gap-3">
                          <Badge variant={categoryColors[relatedPost.category]} className="text-[9px] uppercase tracking-[0.35em]">
                            {relatedPost.category}
                          </Badge>
                        </div>

                        <h3 className="text-h4 mb-3 group-hover:text-brand transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h3>

                        <time className="text-xs text-muted-foreground flex items-center gap-1.5 mb-3">
                          <Calendar className="size-3" />
                          {format(parseISO(relatedPost.date), "MMMM d, yyyy")}
                        </time>

                        <p className="text-sm text-muted-foreground flex-1 line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                      </div>
                    </CardBody>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <p className="text-sm font-medium text-foreground">About Tiger BioSciences</p>
              <p className="text-sm text-muted-foreground mt-1">
                Global leader in regenerative medicine and advanced tissue technologies
              </p>
            </div>
            <a
              href="/contact"
              className="text-sm text-brand hover:text-brand/80 underline"
            >
              Media Contact
            </a>
          </div>
        </footer>
      </article>
    </main>
  )
}
