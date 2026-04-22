import { Metadata } from "next"
import { ExternalLink, FileText, Beaker, Award, Users } from "lucide-react"
import { TigerButton } from "@/components/ui/tiger-button"
import {
  publications,
  clinicalTrials,
  fdaApprovals,
  regulatorySubmissions,
  technologyPlatforms,
  campsConfigurations,
  scienceStatistics,
} from "@/data/publications"

export const metadata: Metadata = {
  title: "Verified Science Facts | Tiger BioSciences",
  description: "Comprehensive reference of all verified clinical evidence, publications, trials, and regulatory approvals",
}

export default function VerifiedFactsPage() {
  return (
    <main className="min-h-screen bg-[#efedea]">
      {/* Hero */}
      <section className="border-b border-[#231010]/10">
        <div className="container mx-auto max-w-7xl px-6 py-32">
          <div className="mx-auto max-w-4xl text-center">
            <span className="text-[12px] font-normal uppercase tracking-[3.15px] text-[#231010]/40 mb-6 inline-block">
              Verified Science Facts
            </span>
            <h1 className="font-display font-light text-[#231010] text-4xl md:text-5xl mb-8">Comprehensive Clinical Evidence</h1>
            <p className="text-[14.6px] font-light text-[#231010]/70 leading-[26px]">
              All verified facts, publications, trials, and regulatory approvals collected from Tiger sites, PubMed,
              FDA databases, and ClinicalTrials.gov. Use this as your source of truth for all science content.
            </p>
            <div className="mt-12 text-sm text-[#231010]/50">
              <strong>Date Compiled:</strong> November 10, 2025 · <strong>Status:</strong> All content verified
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Overview */}
      <section className="border-b border-[#231010]/10 bg-[#e6e2dc] py-24">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard
              icon={<Award className="h-5 w-5" />}
              number={scienceStatistics.fdaApprovalsAndClearances}
              label="FDA Approvals & Clearances"
            />
            <StatCard
              icon={<Beaker className="h-5 w-5" />}
              number={scienceStatistics.activeTrials}
              label="Active Clinical Trials"
            />
            <StatCard
              icon={<FileText className="h-5 w-5" />}
              number={scienceStatistics.peerReviewedPublications}
              label="Peer-Reviewed Publications"
            />
            <StatCard
              icon={<Users className="h-5 w-5" />}
              number={scienceStatistics.patientsEnrolled.toLocaleString()}
              label="Patients Enrolled"
            />
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-7xl px-6 py-24">
        {/* FDA Approvals */}
        <Section
          id="fda-approvals"
          badge="FDA Approvals"
          title="FDA Approvals & Clearances"
          description="All FDA-approved and cleared products with regulatory documentation"
        >
          <div className="space-y-6">
            {fdaApprovals.map((approval) => (
              <FactCard key={approval.id}>
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <div className="mb-4 inline-block rounded-full border border-[#231010]/10 bg-[#231010]/5 px-3 py-1">
                      <span className="text-[12px] font-normal uppercase tracking-[3.15px] text-[#231010]/40">
                        {approval.type === "fda-pma" ? "PMA Approved" : "510(k) Cleared"}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-light text-[#231010] mb-2">{approval.title}</h3>
                    {approval.approvalNumber && (
                      <p className="text-sm text-[#231010]/50">Approval Number: {approval.approvalNumber}</p>
                    )}
                  </div>
                </div>
                <p className="mb-8 text-[14.6px] font-light text-[#231010]/70 leading-[26px]">{approval.summary}</p>
                <div className="mb-6 mt-6 flex flex-wrap gap-2">
                  {approval.products.map((product) => (
                    <span
                      key={product}
                      className="rounded-full border border-[#231010]/10 bg-[#231010]/5 px-3 py-1 text-xs text-[#231010]/60"
                    >
                      {product}
                    </span>
                  ))}
                </div>
                {approval.documentUrl && (
                  <TigerButton href={approval.documentUrl} external className="mt-6">
                    View FDA Documentation
                    <ExternalLink className="h-3 w-3" />
                  </TigerButton>
                )}
              </FactCard>
            ))}
          </div>
        </Section>

        {/* Peer-Reviewed Publications */}
        <Section
          id="publications"
          badge="Publications"
          title="Peer-Reviewed Publications"
          description="All verified published studies with PubMed IDs and DOIs"
        >
          <div className="space-y-6">
            {publications.map((pub) => (
              <FactCard key={pub.id}>
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="mb-4 flex items-center gap-2">
                      <span
                        className={`inline-block rounded-full border px-3 py-1 text-[12px] font-normal uppercase tracking-[3.15px] ${
                          pub.type === "peer-reviewed"
                            ? "border-emerald-600/30 bg-emerald-600/12 text-emerald-700"
                            : "border-[#4774AA]/30 bg-[#4774AA]/12 text-[#2E4F73]"
                        }`}
                      >
                        {pub.type === "peer-reviewed" ? "Peer-Reviewed" : "Clinical Trial"}
                      </span>
                      <span className="inline-block rounded-full border border-[#231010]/10 bg-[#231010]/5 px-3 py-1 text-[12px] font-normal uppercase tracking-[3.15px] text-[#231010]/40">
                        {pub.division}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-light text-[#231010] mb-2">{pub.title}</h3>
                    {pub.subtitle && <p className="text-sm italic text-[#231010]/50">{pub.subtitle}</p>}
                  </div>
                </div>

                <div className="mb-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-[#231010]/60">
                  {pub.journal && (
                    <span>
                      <strong>Journal:</strong> {pub.journal}
                    </span>
                  )}
                  <span>
                    <strong>Year:</strong> {pub.year}
                  </span>
                  {pub.participants && (
                    <span>
                      <strong>Patients:</strong> {pub.participants.toLocaleString()}
                    </span>
                  )}
                  {pub.studySites && (
                    <span>
                      <strong>Sites:</strong> {pub.studySites}
                    </span>
                  )}
                  {pub.duration && (
                    <span>
                      <strong>Duration:</strong> {pub.duration}
                    </span>
                  )}
                </div>

                <p className="mb-4 text-[14.6px] font-light text-[#231010]/70 leading-[26px]">{pub.abstract}</p>

                <div className="mb-4 rounded-[12px] bg-[#231010]/5 p-4">
                  <h4 className="mb-2 text-sm font-medium text-[#231010]">Key Findings:</h4>
                  <ul className="space-y-1 text-sm text-[#231010]/60">
                    {pub.keyFindings.map((finding, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-[#231010]/30" />
                        <span>{finding}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-4">
                  {pub.pubmedId && (
                    <TigerButton href={`https://pubmed.ncbi.nlm.nih.gov/${pub.pubmedId}`} external>
                      PubMed {pub.pubmedId}
                      <ExternalLink className="h-3 w-3" />
                    </TigerButton>
                  )}
                  {pub.doi && (
                    <TigerButton href={`https://doi.org/${pub.doi}`} external>
                      DOI: {pub.doi}
                      <ExternalLink className="h-3 w-3" />
                    </TigerButton>
                  )}
                  {pub.externalUrl && !pub.pubmedId && (
                    <TigerButton href={pub.externalUrl} external>
                      View Publication
                      <ExternalLink className="h-3 w-3" />
                    </TigerButton>
                  )}
                </div>

                <div className="mb-6 mt-8 flex flex-wrap gap-2">
                  {pub.products.map((product) => (
                    <span
                      key={product}
                      className="rounded-full border border-[#231010]/10 bg-[#231010]/5 px-3 py-1 text-xs text-[#231010]/60"
                    >
                      {product}
                    </span>
                  ))}
                </div>
              </FactCard>
            ))}
          </div>
        </Section>

        {/* Active Clinical Trials */}
        <Section
          id="clinical-trials"
          badge="Clinical Trials"
          title="Active Clinical Trials"
          description="Ongoing randomized controlled trials registered on ClinicalTrials.gov"
        >
          <div className="space-y-4">
            {clinicalTrials.map((trial) => (
              <FactCard key={trial.id}>
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-2">
                      <span className="inline-block rounded-full border border-emerald-600/30 bg-emerald-600/12 px-3 py-1 text-[12px] font-normal uppercase tracking-[3.15px] text-emerald-700">
                        {trial.status}
                      </span>
                      {trial.nctNumber && (
                        <span className="inline-block rounded-full border border-[#4774AA]/30 bg-[#4774AA]/12 px-3 py-1 text-[12px] font-normal uppercase tracking-[3.15px] text-[#2E4F73]">
                          {trial.nctNumber}
                        </span>
                      )}
                    </div>
                    <h3 className="font-display text-xl font-light text-[#231010] mb-1">{trial.shortTitle}</h3>
                    <p className="text-sm text-[#231010]/50">{trial.title}</p>
                  </div>
                </div>

                <div className="mb-4 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-[12px] bg-[#231010]/5 p-3">
                    <div className="text-2xl font-light text-[#231010]">{trial.participants}</div>
                    <div className="text-xs text-[#231010]/50">Patients</div>
                  </div>
                  {trial.sites && (
                    <div className="rounded-[12px] bg-[#231010]/5 p-3">
                      <div className="text-2xl font-light text-[#231010]">{trial.sites}</div>
                      <div className="text-xs text-[#231010]/50">U.S. Sites</div>
                    </div>
                  )}
                  <div className="rounded-[12px] bg-[#231010]/5 p-3">
                    <div className="text-sm font-light text-[#231010]">{trial.studyType}</div>
                    <div className="text-xs text-[#231010]/50">Study Type</div>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="mb-2 text-sm font-medium text-[#231010]">Primary Objective:</h4>
                  <p className="text-sm text-[#231010]/60">{trial.primaryObjective}</p>
                </div>

                {trial.secondaryObjectives && (
                  <div className="mb-4">
                    <h4 className="mb-2 text-sm font-medium text-[#231010]">Secondary Objectives:</h4>
                    <ul className="space-y-1 text-sm text-[#231010]/60">
                      {trial.secondaryObjectives.map((objective, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-[#231010]/30" />
                          <span>{objective}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mb-4">
                  <h4 className="mb-2 text-sm font-medium text-[#231010]">Conditions Studied:</h4>
                  <div className="flex flex-wrap gap-2">
                    {trial.conditions.map((condition) => (
                      <span
                        key={condition}
                        className="rounded-full border border-[#231010]/10 bg-[#231010]/5 px-3 py-1 text-xs text-[#231010]/60"
                      >
                        {condition}
                      </span>
                    ))}
                  </div>
                </div>

                {trial.keyInclusions && (
                  <div className="mb-4 rounded-[12px] bg-[#231010]/5 p-4">
                    <h4 className="mb-2 text-sm font-medium text-[#231010]">Study Details:</h4>
                    <ul className="space-y-1 text-sm text-[#231010]/60">
                      {trial.keyInclusions.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-[#231010]/30" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {trial.clinicalTrialsGovUrl && (
                  <a
                    href={trial.clinicalTrialsGovUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-[#231010]/70 hover:text-[#231010] transition-colors"
                  >
                    View on ClinicalTrials.gov
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </FactCard>
            ))}
          </div>
        </Section>

        {/* Regulatory Submissions */}
        <Section
          id="regulatory"
          badge="Regulatory"
          title="Regulatory Submissions"
          description="CMS and FDA regulatory submissions and approvals"
        >
          <div className="space-y-4">
            {regulatorySubmissions.map((submission) => (
              <FactCard key={submission.id}>
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="mb-2 inline-block rounded-full border border-[#4774AA]/30 bg-[#4774AA]/12 px-3 py-1">
                      <span className="text-[12px] font-normal uppercase tracking-[3.15px] text-[#2E4F73]">
                        {submission.type}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-light text-[#231010] mb-1">{submission.title}</h3>
                  </div>
                </div>

                <div className="mb-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-[#231010]/60">
                  <span>
                    <strong>Agency:</strong> {submission.agency}
                  </span>
                  <span>
                    <strong>Submission Date:</strong> {new Date(submission.submissionDate).toLocaleDateString()}
                  </span>
                  <span>
                    <strong>Status:</strong> {submission.status}
                  </span>
                </div>

                <p className="mb-4 text-[14.6px] font-light text-[#231010]/70 leading-[26px]">{submission.summary}</p>

                {submission.documentUrl && (
                  <a
                    href={submission.documentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-[#231010]/70 hover:text-[#231010] transition-colors"
                  >
                    View Document
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </FactCard>
            ))}
          </div>
        </Section>

        {/* Technology Platforms */}
        <Section
          id="technology"
          badge="Technology"
          title="Technology Platforms"
          description="Core technology platforms and scientific basis"
        >
          <div className="space-y-6">
            {technologyPlatforms.map((platform) => (
              <FactCard key={platform.id}>
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="mb-2 inline-block rounded-full border border-[#231010]/10 bg-[#231010]/5 px-3 py-1">
                      <span className="text-[12px] font-normal uppercase tracking-[3.15px] text-[#231010]/40">
                        {platform.division}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-light text-[#231010] mb-1">{platform.name}</h3>
                  </div>
                </div>

                <p className="mb-4 text-[14.6px] font-light text-[#231010]/70 leading-[26px]">{platform.description}</p>

                <div className="mb-4 rounded-[12px] bg-[#231010]/5 p-4">
                  <h4 className="mb-2 text-sm font-medium text-[#231010]">Scientific Basis:</h4>
                  <ul className="space-y-1 text-sm text-[#231010]/60">
                    {platform.scienceBasis.map((basis, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-[#231010]/30" />
                        <span>{basis}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="mb-2 text-sm font-medium text-[#231010]">Key Features:</h4>
                  <ul className="space-y-1 text-sm text-[#231010]/60">
                    {platform.keyFeatures.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-[#231010]/30" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="mb-2 text-sm font-medium text-[#231010]">Clinical Applications:</h4>
                  <div className="flex flex-wrap gap-2">
                    {platform.clinicalApplications.map((app) => (
                      <span
                        key={app}
                        className="rounded-full border border-[#231010]/10 bg-[#231010]/5 px-3 py-1 text-xs text-[#231010]/60"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                {platform.facilities && (
                  <div className="text-sm text-[#231010]/50">
                    <strong>Manufacturing Facilities:</strong> {platform.facilities.join(", ")}
                  </div>
                )}
              </FactCard>
            ))}
          </div>

          {/* CAMPs Configurations */}
          <div className="mt-8">
            <h3 className="font-display text-xl font-light text-[#231010] mb-6">CAMPs Product Configurations</h3>
            <div className="grid gap-4 lg:grid-cols-3">
              {campsConfigurations.map((config) => (
                <FactCard key={config.name}>
                  <h4 className="font-display text-lg font-light text-[#231010] mb-2">{config.name}</h4>
                  <p className="mb-4 text-sm text-[#231010]/60">{config.description}</p>

                  <div className="mb-3">
                    <div className="mb-1 text-xs font-medium text-[#231010]">Layers:</div>
                    <div className="space-y-1">
                      {config.layers.map((layer, idx) => (
                        <div key={`${config.name}-layer-${idx}`} className="text-sm text-[#231010]/60">
                          {layer}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="mb-1 text-xs font-medium text-[#231010]">Characteristics:</div>
                    <div className="space-y-1">
                      {config.characteristics.map((char) => (
                        <div key={char} className="text-sm text-[#231010]/60">
                          {char}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="mb-2 text-xs font-medium text-[#231010]">Products:</div>
                    <div className="flex flex-wrap gap-2">
                      {config.products.map((product) => (
                        <span
                          key={product}
                          className="rounded-full border border-[#231010]/10 bg-[#231010]/5 px-2 py-1 text-xs text-[#231010]/60"
                        >
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>
                </FactCard>
              ))}
            </div>
          </div>
        </Section>

        {/* CMS Submission Details */}
        <Section
          id="cms-submission"
          badge="CMS Evidence Package"
          title="CMS Local Coverage Determination Submission"
          description="Comprehensive clinical evidence package submitted November 1, 2025"
        >
          <FactCard>
            <div className="mb-6 grid gap-4 sm:grid-cols-4">
              <div className="rounded-[12px] bg-[#231010]/5 p-4 text-center">
                <div className="text-3xl font-light text-[#231010]">{scienceStatistics.clinicalManuscripts}</div>
                <div className="text-xs text-[#231010]/50">Clinical Manuscripts</div>
              </div>
              <div className="rounded-[12px] bg-[#231010]/5 p-4 text-center">
                <div className="text-3xl font-light text-[#231010]">{scienceStatistics.scientificAbstracts}</div>
                <div className="text-xs text-[#231010]/50">Scientific Abstracts</div>
              </div>
              <div className="rounded-[12px] bg-[#231010]/5 p-4 text-center">
                <div className="text-3xl font-light text-[#231010]">{scienceStatistics.scientificPosters}</div>
                <div className="text-xs text-[#231010]/50">Scientific Posters</div>
              </div>
              <div className="rounded-[12px] bg-[#231010]/5 p-4 text-center">
                <div className="text-3xl font-light text-[#231010]">{scienceStatistics.rdManuscripts}</div>
                <div className="text-xs text-[#231010]/50">R&D Manuscripts</div>
              </div>
            </div>

            <div>
              <h4 className="mb-2 text-sm font-medium text-[#231010]">Products with Clinical Evidence:</h4>
              <div className="flex flex-wrap gap-2">
                {["completeFT\u00ae", "caregraFT\u2122"].map((product) => (
                  <span
                    key={product}
                    className="rounded-full border border-[#231010]/10 bg-[#231010]/5 px-3 py-1 text-sm text-[#231010]/60"
                  >
                    {product}
                  </span>
                ))}
              </div>
            </div>
          </FactCard>
        </Section>

        {/* Footer Note */}
        <div className="mt-24 rounded-[12px] bg-[#e6e2dc] p-12 text-center">
          <p className="mb-4 text-base font-medium text-[#231010]">Verification Status</p>
          <p className="text-[14.6px] font-light text-[#231010]/60 leading-[26px]">
            All content on this page has been verified from Tiger BioSciences sites, PubMed, FDA databases, and
            ClinicalTrials.gov.
            <br />
            Safe to use as source material for all science content across the website.
          </p>
          <div className="mt-6 text-sm text-[#231010]/40">
            Date Compiled: November 10, 2025 · Data Source: /data/publications.ts
          </div>
        </div>
      </div>
    </main>
  )
}

function StatCard({ icon, number, label }: { icon: React.ReactNode; number: number | string; label: string }) {
  return (
    <div className="rounded-[12px] bg-[#efedea] p-6 transition-all duration-300 hover:bg-[#e6e2dc]">
      <div className="mb-3 text-[#231010]/40">{icon}</div>
      <div className="mb-1 text-4xl font-light text-[#231010]">{number}</div>
      <div className="text-sm text-[#231010]/50">{label}</div>
    </div>
  )
}

function Section({
  id,
  badge,
  title,
  description,
  children,
}: {
  id: string
  badge: string
  title: string
  description: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="mb-32 scroll-mt-24">
      <div className="mb-12">
        <span className="text-[12px] font-normal uppercase tracking-[3.15px] text-[#231010]/40 block mb-6">
          {badge}
        </span>
        <h2 className="font-display text-3xl font-light text-[#231010] mb-6">{title}</h2>
        <p className="text-[14.6px] font-light text-[#231010]/60 leading-[26px]">{description}</p>
      </div>
      {children}
    </section>
  )
}

function FactCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-[12px] bg-[#e6e2dc] p-8 transition-all duration-300 hover:bg-[#ddd9d3]">
      {children}
    </div>
  )
}
