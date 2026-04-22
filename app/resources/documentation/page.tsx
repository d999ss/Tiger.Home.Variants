import { Metadata } from "next";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { Card, CardBody } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Product Documentation - Tiger BioSciences",
  description: "Complete technical documentation, instructions for use, and product specifications for all Tiger BioSciences products",
};

export default function DocumentationPage() {
  return (
    <main className="min-h-screen">
      <Hero
        title="Product Documentation"
        description="Comprehensive technical documentation, instructions for use, and product specifications to support optimal clinical outcomes."
        primaryCTA={{ text: "Request Documentation", href: "/contact" }}
      />

      <Section
        title="Documentation Categories"
        description="Find the information you need for every product and application"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="text-h3 font-light text-brand">Instructions for Use</h3>
              <p className="font-body text-muted-foreground">
                Step-by-step guidance for safe and effective product application across all clinical scenarios.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="text-h3 font-light text-brand">Technical Specifications</h3>
              <p className="font-body text-muted-foreground">
                Detailed product specifications, dimensions, storage requirements, and technical parameters.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="text-h3 font-light text-brand">Safety Data Sheets</h3>
              <p className="font-body text-muted-foreground">
                Comprehensive safety information, handling procedures, and regulatory compliance documentation.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="text-h3 font-light text-brand">Clinical Protocols</h3>
              <p className="font-body text-muted-foreground">
                Evidence-based clinical protocols and best practice guidelines for optimal product utilization.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="text-h3 font-light text-brand">Regulatory Documents</h3>
              <p className="font-body text-muted-foreground">
                FDA clearances, CE marks, and other regulatory documentation for compliance requirements.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="text-h3 font-light text-brand">Quick Reference Guides</h3>
              <p className="font-body text-muted-foreground">
                Concise reference materials for rapid access to key product information in clinical settings.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section
        title="Product Lines"
        description="Documentation organized by product family"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl mb-4">TigerMatrix™ Series</h3>
              <p className="text-lead text-muted-foreground mb-4">
                Complete documentation for our advanced dermal matrix products used in wound care and soft tissue reconstruction.
              </p>
              <ul className="font-body text-muted-foreground space-y-2">
                <li>• TigerMatrix™ Dermal Scaffold</li>
                <li>• TigerMatrix™ Acellular Dermal Matrix</li>
                <li>• TigerMatrix™ Wound Cover</li>
                <li>• TigerMatrix™ Surgical Matrix</li>
              </ul>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl mb-4">TigerRegen™ Series</h3>
              <p className="text-lead text-muted-foreground mb-4">
                Technical documentation for our regenerative tissue products designed for complex reconstruction applications.
              </p>
              <ul className="font-body text-muted-foreground space-y-2">
                <li>• TigerRegen™ Soft Tissue Matrix</li>
                <li>• TigerRegen™ Nerve Conduit</li>
                <li>• TigerRegen™ Vascular Graft</li>
                <li>• TigerRegen™ Bone Matrix</li>
              </ul>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section
        title="Document Access & Updates"
        description="Stay current with the latest product information"
      >
        <Card>
          <CardBody>
            <h3 className="font-display text-xl mb-4">Accessing Documentation</h3>
            <p className="text-lead text-muted-foreground mb-6">
              All product documentation is available to verified healthcare professionals and authorized distributors. Documents are regularly updated to reflect the latest product information and clinical evidence.
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <h4 className="font-display text-lg font-medium mb-2 text-brand">For Healthcare Providers</h4>
                <p className="font-body text-muted-foreground text-sm">
                  Access our complete documentation library through your secure healthcare provider portal, or request specific documents through our support team.
                </p>
              </div>
              <div>
                <h4 className="font-display text-lg font-medium mb-2 text-brand">For Distribution Partners</h4>
                <p className="font-body text-muted-foreground text-sm">
                  Partner portal access includes full documentation library, marketing materials, and regular update notifications for all product lines.
                </p>
              </div>
            </div>
          </CardBody>
        </Card>
      </Section>
    </main>
  );
}
