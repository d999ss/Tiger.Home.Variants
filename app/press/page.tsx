import { allPressReleases } from "@/lib/content"
import PressGrid from "./press-grid"

export const metadata = {
  title: "Press Room | Tiger BioSciences",
  description: "Latest news, press releases, and announcements from Tiger BioSciences in regenerative medicine."
}

export default async function PressIndex() {
  const posts = allPressReleases().map(p => ({
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    date: p.date,
    category: p.category,
    tags: p.tags,
    featured: p.featured,
    heroImage: p.heroImage
  }))

  const featuredPosts = posts.filter(p => p.featured)
  const allPosts = posts

  return (
    <main className="min-h-screen pt-32 bg-[#efedea]">
      <PressGrid
        featuredPosts={featuredPosts}
        allPosts={allPosts}
      />
    </main>
  )
}
