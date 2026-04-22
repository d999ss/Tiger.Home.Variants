import { Metadata } from "next";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { Card, CardBody } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Training & Education - Tiger BioSciences",
  description: "Comprehensive training programs and educational resources for healthcare professionals using Tiger BioSciences products",
};

export default function TrainingPage() {
  return (
    <main className="min-h-screen">
      <Hero
        title="Training & Education"
        description="Comprehensive educational programs designed to ensure clinical excellence and optimal patient outcomes with our products."
        primaryCTA={{ text: "Enroll in Training", href: "/contact" }}
      />

      <Section
        title="Training Programs"
        description="Professional development opportunities for healthcare teams"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3 text-brand">Product Fundamentals</h3>
              <p className="font-body text-muted-foreground mb-4">
                Foundational training on product composition, mechanisms of action, and appropriate clinical applications.
              </p>
              <p className="text-sm text-muted-foreground">
                Duration: 2 hours | Format: Online or In-Person
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3 text-brand">Advanced Techniques</h3>
              <p className="font-body text-muted-foreground mb-4">
                Advanced application techniques for complex cases and specialized procedures across multiple specialties.
              </p>
              <p className="text-sm text-muted-foreground">
                Duration: 4 hours | Format: Hands-On Workshop
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3 text-brand">Clinical Case Studies</h3>
              <p className="font-body text-muted-foreground mb-4">
                Interactive review of real-world cases demonstrating optimal product selection and application strategies.
              </p>
              <p className="text-sm text-muted-foreground">
                Duration: 3 hours | Format: Virtual Case Review
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3 text-brand">Specialty Certification</h3>
              <p className="font-body text-muted-foreground mb-4">
                Comprehensive certification programs for specific clinical specialties and advanced applications.
              </p>
              <p className="text-sm text-muted-foreground">
                Duration: 8 hours | Format: Multi-Session Program
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3 text-brand">Surgical Proctoring</h3>
              <p className="font-body text-muted-foreground mb-4">
                One-on-one support with clinical experts during procedures to ensure optimal technique and outcomes.
              </p>
              <p className="text-sm text-muted-foreground">
                Duration: Varies | Format: In-Person
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3 text-brand">Continuing Education</h3>
              <p className="font-body text-muted-foreground mb-4">
                CME-accredited courses providing ongoing education on latest techniques and clinical evidence.
              </p>
              <p className="text-sm text-muted-foreground">
                CME Credits Available | Format: Various
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section
        title="Educational Resources"
        description="Access learning materials anytime, anywhere"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl mb-4">Digital Learning Platform</h3>
              <p className="text-lead text-muted-foreground mb-4">
                Our comprehensive online learning portal provides 24/7 access to training modules, video demonstrations, and interactive content.
              </p>
              <ul className="font-body text-muted-foreground space-y-2">
                <li>• On-demand video library</li>
                <li>• Interactive product simulations</li>
                <li>• Self-assessment tools</li>
                <li>• Downloadable reference materials</li>
                <li>• Mobile-friendly access</li>
              </ul>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl mb-4">Clinical Support Materials</h3>
              <p className="text-lead text-muted-foreground mb-4">
                Practical tools and resources designed to support clinical decision-making and patient education.
              </p>
              <ul className="font-body text-muted-foreground space-y-2">
                <li>• Product selection guides</li>
                <li>• Surgical technique videos</li>
                <li>• Patient education materials</li>
                <li>• Clinical pearls and tips</li>
                <li>• Troubleshooting guides</li>
              </ul>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section
        title="Live Events & Workshops"
        description="Connect with experts and peers"
      >
        <Card>
          <CardBody>
            <h3 className="font-display text-xl mb-4">Educational Events</h3>
            <p className="text-lead text-muted-foreground mb-6">
              Join us at conferences, symposiums, and hands-on workshops throughout the year. These events provide opportunities to learn from leading experts, share experiences with colleagues, and stay current with advances in tissue engineering.
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div>
                <h4 className="font-display text-lg font-medium mb-2 text-brand">National Conferences</h4>
                <p className="font-body text-muted-foreground text-sm">
                  Presentations and workshops at major medical conferences across various specialties.
                </p>
              </div>
              <div>
                <h4 className="font-display text-lg font-medium mb-2 text-brand">Regional Workshops</h4>
                <p className="font-body text-muted-foreground text-sm">
                  Hands-on training sessions held in convenient locations throughout the year.
                </p>
              </div>
              <div>
                <h4 className="font-display text-lg font-medium mb-2 text-brand">Webinar Series</h4>
                <p className="font-body text-muted-foreground text-sm">
                  Monthly online sessions covering clinical topics, new techniques, and product updates.
                </p>
              </div>
            </div>
          </CardBody>
        </Card>
      </Section>
    </main>
  );
}
