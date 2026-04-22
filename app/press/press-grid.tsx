"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { format, parseISO } from "date-fns"
import { Search, Calendar, Tag } from "lucide-react"
import { TigerButton } from "@/components/ui/tiger-button"

import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import type { PressPostMeta } from "@/lib/content"

type PostCard = Pick<PressPostMeta, "slug" | "title" | "excerpt" | "date" | "category" | "tags" | "featured" | "heroImage">

interface PressGridProps {
  featuredPosts: PostCard[]
  allPosts: PostCard[]
}

const POSTS_PER_PAGE = 20

const categoryColors = {
  announcement: "brand",
  research: "default",
  partnership: "outline",
  product: "brand",
  event: "outline"
} as const

const categories = ["all", "announcement", "research", "partnership", "product", "event"] as const

export default function PressGrid({ featuredPosts, allPosts }: PressGridProps) {
  const [query, setQuery] = useState("")
  const [category, setCategory] = useState<typeof categories[number]>("all")
  const [displayCount, setDisplayCount] = useState(POSTS_PER_PAGE)

  const featuredSlug = featuredPosts.length > 0 ? featuredPosts[0].slug : null

  const filtered = useMemo(() => {
    return allPosts.filter(p => {
      if (featuredSlug && p.slug === featuredSlug) return false
      const searchText = `${p.title} ${p.excerpt}`.toLowerCase()
      const matchesQuery = query ? searchText.includes(query.toLowerCase()) : true
      const matchesCategory = category === "all" ? true : p.category === category
      return matchesQuery && matchesCategory
    })
  }, [query, category, allPosts, featuredSlug])

  const displayedPosts = filtered.slice(0, displayCount)
  const hasMore = displayCount < filtered.length

  useMemo(() => {
    setDisplayCount(POSTS_PER_PAGE)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, category])

  const loadMore = () => {
    setDisplayCount(prev => prev + POSTS_PER_PAGE)
  }

  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12 py-16 md:py-20 pb-24 md:pb-32">
      {/* Featured Hero Post */}
      {featuredPosts.length > 0 && (
        <section className="mb-20">
          <FeaturedHeroCard post={featuredPosts[0]} />
        </section>
      )}

      {/* Filters Section */}
      <section className="mb-16 space-y-8">
        <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
          <h1 className="font-display text-3xl font-light text-[#231010]">Press Room</h1>
          <div className="relative w-full lg:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-[#231010]/40" />
            <Input
              type="search"
              placeholder="Search press releases..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 text-[13px] font-normal tracking-[0.35px] rounded-[4px] transition duration-[0.25s] ease ${
                category === cat
                  ? "bg-[#D5101F] text-[#fbfcff]"
                  : "border border-[#D5101F]/20 text-[#231010] hover:bg-[#D5101F] hover:text-[#fbfcff]"
              }`}
            >
              {cat === "all" ? "All Categories" : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Results Count */}
        <p className="text-sm text-[#231010]/50">
          {filtered.length} {filtered.length === 1 ? "result" : "results"}
          {query && ` for "${query}"`}
        </p>
      </section>

      {/* Posts Grid */}
      {displayedPosts.length > 0 ? (
        <>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
            {displayedPosts.map((post) => (
              <PostCardComponent key={post.slug} post={post} />
            ))}
          </div>

          {/* Load More Button */}
          {hasMore && (
            <div className="flex justify-center mt-16">
              <TigerButton variant="secondary" onClick={loadMore}>Load More</TigerButton>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-24">
          <p className="text-lg text-[#231010]/60">No press releases found matching your criteria.</p>
          <TigerButton variant="secondary" onClick={() => { setQuery(""); setCategory("all") }} className="mt-6">Clear filters</TigerButton>
        </div>
      )}
    </div>
  )
}

function FeaturedHeroCard({ post }: { post: PostCard }) {
  return (
    <Link href={`/press/${post.slug}`} className="group block">
      <div className="overflow-hidden rounded-[12px] bg-[#e6e2dc] transition-colors duration-300 hover:bg-[#ddd9d3]">
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Image */}
          {post.heroImage && (
            <div className="relative h-64 lg:h-auto overflow-hidden lg:rounded-l-[12px]">
              <Image
                src={post.heroImage}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority
              />
            </div>
          )}

          {/* Content */}
          <div className="p-8 lg:p-12 flex flex-col justify-center">
            <div className="mb-6">
              <Badge variant={categoryColors[post.category]} className="text-[9px] uppercase tracking-[0.35em]">
                {post.category}
              </Badge>
            </div>

            <h2 className="font-display text-3xl font-light text-[#231010] mb-6 group-hover:text-[#231010]/70 transition-colors">
              {post.title}
            </h2>

            <time className="text-sm text-[#231010]/50 flex items-center gap-1.5 mb-6">
              <Calendar className="size-4" />
              {format(parseISO(post.date), "MMMM d, yyyy")}
            </time>

            <p className="text-[14.6px] font-light text-[#231010]/70 leading-[26px] mb-8">
              {post.excerpt}
            </p>

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.slice(0, 4).map(tag => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    <Tag className="size-3 mr-1" />
                    {tag}
                  </Badge>
                ))}
                {post.tags.length > 4 && (
                  <span className="text-xs text-[#231010]/40">
                    +{post.tags.length - 4} more
                  </span>
                )}
              </div>
            )}

            <div className="inline-flex items-center gap-2 text-[#231010] text-[13px] font-normal tracking-[0.35px] group-hover:gap-3 transition-all">
              Read Full Release
              <span className="text-lg">&rarr;</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

function PostCardComponent({ post }: { post: PostCard }) {
  return (
    <Link href={`/press/${post.slug}`} className="group block h-full">
      <div className="h-full rounded-[12px] bg-[#e6e2dc] overflow-hidden transition-colors duration-300 hover:bg-[#ddd9d3]">
        {/* Image */}
        {post.heroImage && (
          <div className="h-48 overflow-hidden relative">
            <Image
              src={post.heroImage}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            />
          </div>
        )}

        <div className="p-8 flex flex-col flex-1">
          {/* Metadata */}
          <div className="mb-5 flex items-center gap-3">
            <Badge variant={categoryColors[post.category]} className="text-[9px] uppercase tracking-[0.35em]">
              {post.category}
            </Badge>
          </div>

          {/* Content */}
          <h3 className="font-display text-xl font-light text-[#231010] mb-4 group-hover:text-[#231010]/70 transition-colors line-clamp-2">
            {post.title}
          </h3>

          <time className="text-xs text-[#231010]/50 flex items-center gap-1.5 mb-4">
            <Calendar className="size-3" />
            {format(parseISO(post.date), "MMMM d, yyyy")}
          </time>

          <p className="text-[14.6px] font-light text-[#231010]/60 leading-[26px] flex-1 line-clamp-2">
            {post.excerpt}
          </p>
        </div>
      </div>
    </Link>
  )
}
