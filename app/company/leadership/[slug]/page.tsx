import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { leaders } from "../leaders-data";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { ScrollToTop } from "./ScrollToTop";

export function generateStaticParams() {
  return leaders.map((leader) => ({
    slug: leader.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const leader = leaders.find((l) => l.slug === params.slug);

  if (!leader) {
    return {
      title: "Leader Not Found",
    };
  }

  return {
    title: `${leader.name} - ${leader.title} | Tiger BioSciences`,
    description: leader.bio.split('\n\n')[0],
  };
}

export default function LeaderPage({ params }: { params: { slug: string } }) {
  const leader = leaders.find((l) => l.slug === params.slug);

  if (!leader) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background mt-16">
      <ScrollToTop slug={params.slug} />
      {/* Breadcrumbs */}
      <section className="py-8">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 md:px-10">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Our Vision", href: "/company/credo" },
              { label: "Our Leadership Team", href: "/company/leadership" },
              { label: leader.name }
            ]}
          />
        </div>
      </section>

      {/* Leader Profile */}
      <section className="py-12 md:py-16 pb-24 md:pb-32">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 md:px-10">
          <div className="flex flex-row gap-10 md:gap-16 opacity-0 animate-appear" style={{ animationDelay: '0.1s' }}>
            {/* Profile Image */}
            <div className="w-[320px] shrink-0">
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-muted/30 rounded-lg shadow-card">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  sizes="320px"
                  className="object-cover object-top grayscale-[20%] sepia-[8%]"
                  priority
                />
                {/* Refined warm overlay for cohesive art direction */}
                <div className="absolute inset-0 bg-gradient-to-br from-foreground/8 via-foreground/2 to-transparent opacity-60" />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              {/* Department Label */}
              <div className="text-xs font-light text-brand uppercase tracking-wider">
                {leader.department}
              </div>

              {/* Name and Title */}
              <div>
                <h1 className="text-h1 mb-1">
                  {leader.name}
                </h1>
                <p className="text-xl text-muted-foreground font-light leading-snug">
                  {leader.title}
                </p>
              </div>

              {/* Bio Content */}
              <div className="prose prose-gray max-w-none pt-4">
                <div className="font-body text-sm md:text-base text-muted-foreground leading-relaxed font-light space-y-4">
                  {leader.bio.split('\n\n').map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Featured Quote */}
              {leader.featuredQuote && (
                <div className="mt-10 pt-8 border-t border-border/60">
                  <div className="relative pl-6 border-l-2 border-brand/30">
                    <p className="text-base md:text-lg font-light text-foreground/90 leading-relaxed italic">
                      &ldquo;{leader.featuredQuote}&rdquo;
                    </p>
                  </div>
                </div>
              )}

              {/* Stats */}
              {leader.stats && (
                <div className="mt-10 grid grid-cols-3 gap-6">
                  {leader.stats.yearsWithCompany && (
                    <div className="text-center p-4 rounded-lg bg-muted/20">
                      <div className="text-2xl font-light text-brand mb-1">{leader.stats.yearsWithCompany}</div>
                      <div className="text-xs font-light text-muted-foreground uppercase tracking-wider">Years with Company</div>
                    </div>
                  )}
                  {leader.stats.teamsLed && (
                    <div className="text-center p-4 rounded-lg bg-muted/20">
                      <div className="text-2xl font-light text-brand mb-1">{leader.stats.teamsLed}</div>
                      <div className="text-xs font-light text-muted-foreground uppercase tracking-wider">Team Members</div>
                    </div>
                  )}
                  {leader.stats.productsLaunched && (
                    <div className="text-center p-4 rounded-lg bg-muted/20">
                      <div className="text-2xl font-light text-brand mb-1">{leader.stats.productsLaunched}</div>
                      <div className="text-xs font-light text-muted-foreground uppercase tracking-wider">Products Launched</div>
                    </div>
                  )}
                </div>
              )}

              {/* Key Achievements */}
              {leader.achievements && leader.achievements.length > 0 && (
                <div className="mt-10 pt-8 border-t border-border/60">
                  <h3 className="text-xs font-light text-brand uppercase tracking-wider mb-6">Key Achievements</h3>
                  <div className="space-y-4">
                    {leader.achievements.map((achievement, i) => (
                      <div key={i} className="flex gap-3">
                        <div className="mt-1.5 size-1.5 rounded-full bg-brand shrink-0" />
                        <p className="text-sm font-light text-muted-foreground leading-relaxed">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Areas of Expertise */}
              {leader.areasOfExpertise && leader.areasOfExpertise.length > 0 && (
                <div className="mt-10 pt-8 border-t border-border/60">
                  <h3 className="text-xs font-light text-brand uppercase tracking-wider mb-6">Areas of Expertise</h3>
                  <div className="flex flex-wrap gap-2">
                    {leader.areasOfExpertise.map((area, i) => (
                      <span
                        key={i}
                        className="inline-block px-3 py-1.5 text-xs font-light border-[0.5px] border-border/60 rounded-sm bg-card/50"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Education */}
              {leader.education && leader.education.length > 0 && (
                <div className="mt-10 pt-8 border-t border-border/60">
                  <h3 className="text-xs font-light text-brand uppercase tracking-wider mb-6">Education</h3>
                  <div className="space-y-4">
                    {leader.education.map((edu, i) => (
                      <div key={i}>
                        <div className="text-sm font-light text-foreground">{edu.degree}</div>
                        <div className="text-sm font-light text-muted-foreground">
                          {edu.institution}
                          {edu.year && ` • ${edu.year}`}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Publications & Patents */}
              {leader.publications && (
                <div className="mt-10 pt-8 border-t border-border/60">
                  <h3 className="text-xs font-light text-brand uppercase tracking-wider mb-6">Publications & Patents</h3>
                  <div className="grid grid-cols-2 gap-6">
                    {leader.publications.count !== undefined && (
                      <div>
                        <div className="text-2xl font-light text-foreground mb-1">{leader.publications.count}</div>
                        <div className="text-sm font-light text-muted-foreground">Peer-Reviewed Publications</div>
                      </div>
                    )}
                    {leader.publications.patents !== undefined && (
                      <div>
                        <div className="text-2xl font-light text-foreground mb-1">{leader.publications.patents}</div>
                        <div className="text-sm font-light text-muted-foreground">Patents Held</div>
                      </div>
                    )}
                  </div>
                  {leader.publications.featured && leader.publications.featured.length > 0 && (
                    <div className="mt-6 space-y-2">
                      {leader.publications.featured.map((pub, i) => (
                        <div key={i} className="text-sm font-light text-muted-foreground leading-relaxed">
                          {pub}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Career Timeline */}
              {leader.timeline && leader.timeline.length > 0 && (
                <div className="mt-10 pt-8 border-t border-border/60">
                  <h3 className="text-xs font-light text-brand uppercase tracking-wider mb-6">Career Timeline</h3>
                  <div className="space-y-6">
                    {leader.timeline.map((item, i) => (
                      <div key={i} className="relative pl-8 before:absolute before:left-0 before:top-1.5 before:size-2 before:rounded-full before:bg-brand/30 before:ring-4 before:ring-background">
                        <div className="text-xs font-light text-brand uppercase tracking-wider mb-1">{item.year}</div>
                        <div className="text-sm font-light text-foreground">{item.role}</div>
                        <div className="text-sm font-light text-muted-foreground">{item.company}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Other Leaders */}
      <section className="py-16 md:py-20 bg-muted/20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 md:px-10">
          <h2 className="text-h3 mb-10 md:mb-12 opacity-0 animate-appear" style={{ animationDelay: '0.2s' }}>
            Other Leaders
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
            {leaders
              .filter((l) => l.slug !== leader.slug)
              .map((otherLeader, index) => (
                <Link
                  key={otherLeader.slug}
                  href={`/company/leadership/${otherLeader.slug}`}
                  className="group opacity-0 animate-appear"
                  style={{ animationDelay: `${0.4 + index * 0.05}s` }}
                >
                  <div className="transition-all duration-500">
                    <div className="relative aspect-[3/4] overflow-hidden bg-muted/30 rounded-lg shadow-card mb-4 group-hover:shadow-ambient transition-all duration-500">
                      <Image
                        src={otherLeader.image}
                        alt={otherLeader.name}
                        fill
                        sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
                        className="object-cover object-top grayscale-[20%] sepia-[8%] transition-transform duration-500 group-hover:scale-105 group-hover:origin-bottom"
                      />
                      {/* Refined warm overlay for cohesive art direction */}
                      <div className="absolute inset-0 bg-gradient-to-br from-foreground/8 via-foreground/2 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                    </div>
                    <h3 className="font-display text-sm font-light tracking-tight text-foreground group-hover:text-brand transition-colors line-clamp-2">
                      {otherLeader.name}
                    </h3>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
