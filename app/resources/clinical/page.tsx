import { Metadata } from "next";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { Card, CardBody } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Clinical Evidence - Tiger BioSciences",
  description: "Access comprehensive clinical studies, research data, and evidence supporting our advanced tissue engineering solutions",
};

export default function ClinicalPage() {
  return (
    <main className="min-h-screen">
      <Hero
        title="Clinical Evidence"
        description="Comprehensive clinical studies and research data demonstrating the safety and efficacy of our tissue engineering solutions."
        primaryCTA={{ text: "Contact Our Team", href: "/contact" }}
      />

      <Section
        title="Research Areas"
        description="Explore our clinical evidence across key therapeutic areas"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3 text-brand">Wound Care Applications</h3>
              <p className="font-body text-muted-foreground mb-4">
                Clinical evidence supporting wound care applications across various wound types and care settings.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3 text-brand">Aesthetics Applications</h3>
              <p className="font-body text-muted-foreground mb-4">
                Clinical evidence supporting the aesthetic applications and product performance across the Tiger product portfolio.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section
        title="Clinical Study Types"
        description="Our commitment to rigorous scientific validation"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl mb-4">Randomized Control Trials (RCTs)</h3>
              <p className="text-lead text-muted-foreground">
                Gold-standard evidence from prospective, controlled, multi-center, modified-platform trials comparing our wound care products to standard of care.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl mb-4">Real-World Clinical Outcome Studies</h3>
              <p className="text-lead text-muted-foreground">
                Real-world effectiveness data from everyday clinical practice, key patient cases, and/or post-market surveillance.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl mb-4">Complex Cohort Studies</h3>
              <p className="text-lead text-muted-foreground">
                Comprehensive patient-based cohort studies across various company product portfolios
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl mb-4">FDA Studies</h3>
              <p className="text-lead text-muted-foreground">
                Post Approval Studies and FDA Premarket Approval Studies.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section
        title="Access Clinical Data"
        description="Resources for healthcare professionals"
      >
        <Card>
          <CardBody>
            <p className="text-lead text-muted-foreground mb-6">
              Healthcare professionals can access our complete library of clinical studies, white papers, and research summaries. Our clinical relations team is available to discuss specific questions and provide detailed study information.
            </p>
            <p className="font-body text-muted-foreground">
              For access to our <strong>published</strong> clinical evidence or to speak with our <strong>expert</strong> team, please contact us. All clinical data is provided in accordance with regulatory guidelines and privacy standards.
            </p>
          </CardBody>
        </Card>
      </Section>
    </main>
  );
}
