"use client";

import { motion } from "framer-motion";
import { Hero } from "@/components/site/Hero";
import { Card, CardBody } from "@/components/ui/card";

const highlights = [
  { title: "Market Leadership", content: "Leading position in the rapidly growing tissue engineering and regenerative medicine market with a comprehensive product portfolio." },
  { title: "Innovation Pipeline", content: "Robust R&D pipeline with multiple products in clinical development, supported by strategic investments in cutting-edge technology." },
  { title: "Global Presence", content: "Established distribution network across 50+ countries with continued expansion into high-growth emerging markets." },
  { title: "Financial Performance", content: "Consistent revenue growth and improving profitability driven by strong product demand and operational efficiency." },
  { title: "Strategic Partnerships", content: "Collaborative relationships with leading healthcare institutions and research organizations worldwide." },
  { title: "Experienced Leadership", content: "Proven management team with deep industry expertise and track record of successful execution." }
];

const financialDocs = [
  { title: "Annual Reports", content: "Download our comprehensive annual reports, including financial statements and management discussion and analysis.", link: "Access Reports →" },
  { title: "SEC Filings", content: "View our latest 10-K, 10-Q, 8-K, and other regulatory filings with the Securities and Exchange Commission.", link: "View Filings →" },
  { title: "Financial Presentations", content: "Access investor presentations, conference materials, and other key financial documents.", link: "View Presentations →" },
  { title: "Stock Information", content: "Real-time stock quotes, historical data, and analyst coverage information for TGBS shares.", link: "View Stock Data →" }
];

const shareholderResources = [
  { title: "Annual Meeting", content: "Information about our upcoming annual shareholders meeting, including proxy materials, voting procedures, and meeting logistics.", link: "Meeting Details →" },
  { title: "Dividend Information", content: "Current dividend policy, payment schedules, and historical dividend information for Tiger BioSciences shareholders.", link: "View Dividends →" },
  { title: "Transfer Agent", content: "Contact information and resources for share transfers, certificate replacements, and other shareholder services.", link: "Transfer Agent Info →" },
  { title: "Email Alerts", content: "Subscribe to receive email notifications about press releases, earnings announcements, and other investor updates.", link: "Subscribe Now →" }
];

export default function InvestorsPage() {
  return (
    <main className="min-h-screen">
      <Hero
        title="Investor Relations"
        description="Building long-term value through innovation, operational excellence, and commitment to our stakeholders."
        backgroundImage="/images/boredoptimism_close_up_of_Tiger_eye_--ar_169_--raw_--profile__d0b094ae-d672-42f0-b38e-82826641a7d4_3.png"
      />

      <section className="relative py-10 md:py-[76px] bg-gradient-to-b from-background via-muted/30 to-muted/40">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="inline-block border-[0.5px] border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60 mb-6">
              Investment Highlights
            </span>
            <h2 className="text-h1 text-foreground">
              Why invest in Tiger BioSciences
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Card>
                  <CardBody>
                    <h3 className="text-h3 font-light text-brand">{item.title}</h3>
                    <p className="font-body text-muted-foreground">{item.content}</p>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-10 md:py-[76px] bg-gradient-to-b from-muted/40 via-muted/20 to-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="inline-block border-[0.5px] border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60 mb-6">
              Financial Information
            </span>
            <h2 className="text-h1 text-foreground">
              Access our latest financial reports and data
            </h2>
          </div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardBody>
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="font-display text-xl">Quarterly Earnings</h3>
                    <span className="inline-block rounded-[8px] border border-brand/20 bg-brand/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand">
                      Latest
                    </span>
                  </div>
                  <p className="text-lead text-muted-foreground mb-4">
                    Q3 2025 earnings results exceeded analyst expectations with revenue growth of 24% year-over-year. Strong performance across all product categories and geographic regions.
                  </p>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <a href="#" className="inline-flex items-center font-semibold text-brand hover:underline">
                      View Earnings Report →
                    </a>
                    <a href="#" className="inline-flex items-center font-semibold text-brand hover:underline">
                      Watch Earnings Call →
                    </a>
                  </div>
                </CardBody>
              </Card>
            </motion.div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {financialDocs.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <Card>
                    <CardBody>
                      <h3 className="text-h3 font-light">{item.title}</h3>
                      <p className="font-body text-muted-foreground mb-4">{item.content}</p>
                      <a href="#" className="inline-flex items-center font-semibold text-brand hover:underline">
                        {item.link}
                      </a>
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-10 md:py-[76px] bg-gradient-to-b from-background via-muted/30 to-muted/40">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="inline-block border-[0.5px] border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60 mb-6">
              Corporate Governance
            </span>
            <h2 className="text-h1 text-foreground">
              Committed to transparency and ethical business practices
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <CardBody>
                <p className="text-lead text-muted-foreground mb-6">
                  Tiger BioSciences is committed to the highest standards of corporate governance, transparency, and ethical conduct. Our board of directors and management team work together to ensure we create sustainable value for all stakeholders.
                </p>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {["Board of Directors", "Corporate Governance Guidelines", "Committee Charters", "Code of Conduct", "Compliance Program", "ESG Initiatives"].map((item, i) => (
                    <a key={i} href="#" className="inline-flex items-center font-semibold text-brand hover:underline">
                      {item} →
                    </a>
                  ))}
                </div>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="relative py-10 md:py-[76px] bg-gradient-to-b from-muted/40 via-muted/20 to-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="inline-block border-[0.5px] border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60 mb-6">
              Shareholder Resources
            </span>
            <h2 className="text-h1 text-foreground">
              Important information for our shareholders
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {shareholderResources.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Card>
                  <CardBody>
                    <h3 className="text-h3 font-light text-brand">{item.title}</h3>
                    <p className="font-body text-muted-foreground mb-4">{item.content}</p>
                    <a href="#" className="inline-flex items-center font-semibold text-brand hover:underline">
                      {item.link}
                    </a>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-10 md:py-[76px] bg-gradient-to-b from-background via-muted/30 to-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="inline-block border-[0.5px] border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60 mb-6">
              Investor Contact
            </span>
            <h2 className="text-h1 text-foreground">
              Connect with our investor relations team
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <CardBody>
                <p className="text-lead text-muted-foreground mb-6">
                  Our investor relations team is here to answer your questions and provide additional information about Tiger BioSciences. We welcome inquiries from current and prospective investors, analysts, and financial professionals.
                </p>
                <div className="mb-6 space-y-3">
                  <div>
                    <p className="font-display font-medium mb-1">Email</p>
                    <a href="mailto:investors@tigerbiosciences.com" className="text-brand hover:underline">
                      investors@tigerbiosciences.com
                    </a>
                  </div>
                  <div>
                    <p className="font-display font-medium mb-1">Phone</p>
                    <a href="tel:+1-555-0123" className="text-brand hover:underline">
                      +1 (555) 012-3456
                    </a>
                  </div>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-[8px] px-8 py-3 bg-brand text-brand-foreground font-semibold hover:brightness-110 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60"
                  >
                    Contact Investor Relations
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center rounded-[8px] px-8 py-3 border border-input bg-background hover:bg-accent hover:text-accent-foreground font-semibold transition-all duration-200"
                  >
                    Request Information
                  </a>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
