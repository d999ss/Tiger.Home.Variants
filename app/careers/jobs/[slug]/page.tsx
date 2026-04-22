import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Section } from "@/components/site/Section";
import { Card, CardBody } from "@/components/ui/card";
import { JobApplicationForm } from "@/components/careers/JobApplicationForm";

interface JobPageProps {
  params: Promise<{ slug: string }>;
}

// Get job data from markdown file
async function getJobData(slug: string) {
  try {
    const jobsDirectory = path.join(process.cwd(), "content/jobs");
    const filePath = path.join(jobsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      frontmatter: data,
      content,
    };
  } catch {
    return null;
  }
}

// Get all job slugs for static generation
export async function generateStaticParams() {
  const jobsDirectory = path.join(process.cwd(), "content/jobs");
  const files = fs.readdirSync(jobsDirectory);

  return files
    .filter((filename) => filename.endsWith(".md"))
    .map((filename) => ({
      slug: filename.replace(/\.md$/, ""),
    }));
}

// Generate metadata
export async function generateMetadata({ params }: JobPageProps): Promise<Metadata> {
  const { slug } = await params;
  const job = await getJobData(slug);

  if (!job) {
    return {
      title: "Job Not Found",
    };
  }

  return {
    title: `${job.frontmatter.title} - Tiger BioSciences Careers`,
    description: `Join Tiger BioSciences as a ${job.frontmatter.title}. ${job.frontmatter.location} | ${job.frontmatter.type}`,
  };
}

export default async function JobPage({ params }: JobPageProps) {
  const { slug } = await params;
  const job = await getJobData(slug);

  if (!job) {
    notFound();
  }

  const { frontmatter, content } = job;

  // Convert markdown content to HTML sections
  const sections = content.split(/\n## /).filter(Boolean);
  const processedSections = sections.map((section) => {
    const [title, ...bodyLines] = section.split("\n");
    const body = bodyLines.join("\n");
    return { title: title.replace(/^## /, ""), body };
  });

  return (
    <main className="min-h-screen pt-24">
      {/* Header */}
      <Section>
        <div className="mb-8">
          <Link href="/careers/jobs" className="text-sm text-brand hover:underline cursor-pointer">
            ← Back to Open Positions
          </Link>
        </div>

        <div className="mb-8">
          <h1 className="font-display text-h1 font-light tracking-tight mb-4">
            {frontmatter.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-foreground/70">
            <span className="flex items-center gap-2">
              <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {frontmatter.department}
            </span>
            <span>•</span>
            <span className="flex items-center gap-2">
              <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {frontmatter.location}
            </span>
            <span>•</span>
            <span className="flex items-center gap-2">
              <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {frontmatter.type}
            </span>
          </div>
        </div>

        {/* Quick Info Cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mb-12">
          <Card>
            <CardBody>
              <h3 className="font-display text-body uppercase tracking-wide text-muted-foreground mb-2">
                Experience Level
              </h3>
              <p className="font-body text-body">{frontmatter.experience}</p>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <h3 className="font-display text-body uppercase tracking-wide text-muted-foreground mb-2">
                Education
              </h3>
              <p className="font-body text-body">{frontmatter.education}</p>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <h3 className="font-display text-body uppercase tracking-wide text-muted-foreground mb-2">
                Posted Date
              </h3>
              <p className="font-body text-body">
                {new Date(frontmatter.posted).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      {/* Job Description Sections */}
      {processedSections.map((section, index) => (
        <Section key={index} title={section.title}>
          <div className="mx-auto max-w-3xl">
            {section.body.split("\n\n").map((paragraph, pIndex) => {
              // Check if it's a list
              if (paragraph.startsWith("- ")) {
                const items = paragraph.split("\n").filter((line) => line.startsWith("- "));
                return (
                  <ul key={pIndex} className="list-disc pl-6 space-y-2 mb-4">
                    {items.map((item, iIndex) => (
                      <li key={iIndex} className="text-body text-foreground/80">
                        {item.replace(/^- /, "")}
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={pIndex} className="text-body text-foreground/80 leading-relaxed mb-4">
                  {paragraph}
                </p>
              );
            })}
          </div>
        </Section>
      ))}

      {/* Application Form */}
      <Section
        title="Apply for This Position"
        description="Submit your application and join our team"
      >
        <JobApplicationForm jobTitle={frontmatter.title} jobSlug={slug} />
      </Section>

      {/* Related Positions */}
      <Section title="Other Opportunities" description="Explore more positions at Tiger BioSciences">
        <div className="text-center">
          <Link
            href="/careers/jobs"
            className="inline-flex items-center justify-center rounded-lg bg-brand px-8 py-4 font-semibold text-brand-foreground transition-colors hover:brightness-110 cursor-pointer"
          >
            View All Open Positions
          </Link>
        </div>
      </Section>
    </main>
  );
}
