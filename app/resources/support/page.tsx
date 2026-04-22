import { Metadata } from "next";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { Card, CardBody } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Support Center - Tiger BioSciences",
  description: "24/7 technical support, clinical assistance, and customer service for healthcare professionals using Tiger BioSciences products",
};

export default function SupportPage() {
  return (
    <main className="min-h-screen">
      <Hero
        title="Support Center"
        description="Dedicated support whenever you need it. Our team of clinical and technical experts is here to ensure your success."
        primaryCTA={{ text: "Contact Support", href: "/contact" }}
      />

      <Section
        title="Support Services"
        description="Comprehensive assistance for every aspect of product use"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3 text-brand">Clinical Support</h3>
              <p className="font-body text-muted-foreground mb-4">
                Access to clinical specialists for case consultation, product selection guidance, and technique optimization.
              </p>
              <p className="text-sm text-muted-foreground">
                Available: 24/7 Emergency Line
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3 text-brand">Technical Assistance</h3>
              <p className="font-body text-muted-foreground mb-4">
                Expert technical support for product handling, storage, preparation, and troubleshooting.
              </p>
              <p className="text-sm text-muted-foreground">
                Available: Business Hours
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3 text-brand">Order Support</h3>
              <p className="font-body text-muted-foreground mb-4">
                Assistance with product ordering, delivery tracking, inventory management, and account services.
              </p>
              <p className="text-sm text-muted-foreground">
                Available: Business Hours
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3 text-brand">Regulatory Affairs</h3>
              <p className="font-body text-muted-foreground mb-4">
                Support for regulatory questions, compliance requirements, and documentation needs.
              </p>
              <p className="text-sm text-muted-foreground">
                Available: Business Hours
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3 text-brand">Adverse Event Reporting</h3>
              <p className="font-body text-muted-foreground mb-4">
                Dedicated hotline for reporting adverse events and product quality concerns with immediate response.
              </p>
              <p className="text-sm text-muted-foreground">
                Available: 24/7 Dedicated Line
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3 text-brand">Reimbursement Support</h3>
              <p className="font-body text-muted-foreground mb-4">
                Guidance on coding, billing, and reimbursement processes to facilitate patient access.
              </p>
              <p className="text-sm text-muted-foreground">
                Available: Business Hours
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section
        title="Contact Methods"
        description="Choose the support channel that works best for you"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl mb-4">Emergency Clinical Support</h3>
              <p className="text-lead text-muted-foreground mb-4">
                For urgent clinical questions during procedures or time-sensitive case consultations.
              </p>
              <div className="space-y-3 font-body text-muted-foreground">
                <div>
                  <span className="font-medium text-brand">Phone:</span> 1-800-TIGER-24 (Available 24/7)
                </div>
                <div>
                  <span className="font-medium text-brand">Text:</span> Clinical support text line for rapid response
                </div>
                <div>
                  <span className="font-medium text-brand">Response Time:</span> Immediate for emergencies
                </div>
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl mb-4">General Support</h3>
              <p className="text-lead text-muted-foreground mb-4">
                For product information, ordering assistance, and non-urgent technical questions.
              </p>
              <div className="space-y-3 font-body text-muted-foreground">
                <div>
                  <span className="font-medium text-brand">Phone:</span> 1-800-TIGER-BS (M-F 8AM-8PM ET)
                </div>
                <div>
                  <span className="font-medium text-brand">Email:</span> support@tigerbio.com
                </div>
                <div>
                  <span className="font-medium text-brand">Response Time:</span> Same business day
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section
        title="Self-Service Resources"
        description="Find answers quickly with our knowledge base"
      >
        <Card>
          <CardBody>
            <h3 className="font-display text-xl mb-4">Knowledge Base & FAQ</h3>
            <p className="text-lead text-muted-foreground mb-6">
              Access our comprehensive library of frequently asked questions, product guides, troubleshooting tips, and instructional videos. Search by product, procedure, or topic to find the information you need.
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div>
                <h4 className="font-display text-lg font-medium mb-2 text-brand">Product FAQs</h4>
                <p className="font-body text-muted-foreground text-sm">
                  Common questions about product handling, storage, preparation, and application organized by product line.
                </p>
              </div>
              <div>
                <h4 className="font-display text-lg font-medium mb-2 text-brand">Troubleshooting Guides</h4>
                <p className="font-body text-muted-foreground text-sm">
                  Step-by-step solutions to common challenges and detailed guidance for optimal product performance.
                </p>
              </div>
              <div>
                <h4 className="font-display text-lg font-medium mb-2 text-brand">Video Tutorials</h4>
                <p className="font-body text-muted-foreground text-sm">
                  Visual demonstrations of proper technique, product preparation, and application procedures.
                </p>
              </div>
            </div>
          </CardBody>
        </Card>
      </Section>

      <Section
        title="Quality & Safety"
        description="Our commitment to product excellence"
      >
        <Card>
          <CardBody>
            <p className="text-lead text-muted-foreground mb-6">
              Tiger BioSciences maintains the highest standards of product quality and safety. We encourage all healthcare professionals to report any product concerns or adverse events through our dedicated reporting system.
            </p>
            <p className="font-body text-muted-foreground">
              All reports are reviewed by our medical affairs and quality assurance teams within 24 hours. For adverse events requiring immediate attention, contact our 24/7 emergency line. Product quality concerns are investigated thoroughly with feedback provided to the reporting party.
            </p>
          </CardBody>
        </Card>
      </Section>
    </main>
  );
}
