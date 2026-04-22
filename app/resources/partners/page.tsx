import { Metadata } from "next";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { Card, CardBody } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Partner Portal - Tiger BioSciences",
  description: "Resources and support for Tiger BioSciences distribution partners, healthcare systems, and institutional collaborators",
};

export default function PartnersPage() {
  return (
    <main className="min-h-screen">
      <Hero
        title="Partner Portal"
        description="Comprehensive resources and dedicated support for our valued distribution partners and institutional collaborators."
        primaryCTA={{ text: "Become a Partner", href: "/contact" }}
      />

      <Section
        title="Partnership Programs"
        description="Strategic alliances designed for mutual success"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3 text-brand">Distribution Partners</h3>
              <p className="font-body text-muted-foreground">
                Authorized distributors with exclusive territories, comprehensive support, and access to our complete product portfolio.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3 text-brand">Healthcare Systems</h3>
              <p className="font-body text-muted-foreground">
                Strategic partnerships with hospitals and health systems including formulary integration and clinical education.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3 text-brand">Academic Institutions</h3>
              <p className="font-body text-muted-foreground">
                Collaborative research programs, educational initiatives, and access to products for teaching and research.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3 text-brand">International Partners</h3>
              <p className="font-body text-muted-foreground">
                Global distribution partnerships with regulatory support and localized marketing materials.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3 text-brand">Group Purchasing</h3>
              <p className="font-body text-muted-foreground">
                Collaborative agreements with GPOs offering competitive pricing and streamlined procurement processes.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3 text-brand">Technology Partners</h3>
              <p className="font-body text-muted-foreground">
                Strategic alliances with complementary technology providers for integrated solutions.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section
        title="Partner Resources"
        description="Tools and support for partner success"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl mb-4">Sales & Marketing Support</h3>
              <p className="text-lead text-muted-foreground mb-4">
                Comprehensive tools and materials to support your sales efforts and market development initiatives.
              </p>
              <ul className="font-body text-muted-foreground space-y-2">
                <li>• Product training programs</li>
                <li>• Marketing collateral library</li>
                <li>• Sales presentation templates</li>
                <li>• Competitive analysis tools</li>
                <li>• Co-marketing opportunities</li>
                <li>• Trade show support</li>
              </ul>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl mb-4">Operational Support</h3>
              <p className="text-lead text-muted-foreground mb-4">
                Streamlined systems and dedicated support to optimize your distribution operations and customer service.
              </p>
              <ul className="font-body text-muted-foreground space-y-2">
                <li>• Online ordering portal</li>
                <li>• Inventory management tools</li>
                <li>• Shipping and logistics support</li>
                <li>• Technical service training</li>
                <li>• Partner portal access</li>
                <li>• Dedicated account management</li>
              </ul>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section
        title="Partner Benefits"
        description="What sets Tiger BioSciences partnerships apart"
      >
        <Card>
          <CardBody>
            <h3 className="font-display text-xl mb-4">Comprehensive Partner Program</h3>
            <p className="text-lead text-muted-foreground mb-6">
              Our partner program is built on a foundation of mutual success. We provide the tools, training, and support you need to grow your business while delivering exceptional value to healthcare providers and patients.
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div>
                <h4 className="font-display text-lg font-medium mb-2 text-brand">Training & Education</h4>
                <p className="font-body text-muted-foreground text-sm mb-2">
                  Comprehensive training programs for sales teams and clinical specialists.
                </p>
                <ul className="font-body text-muted-foreground text-sm space-y-1">
                  <li>• Product certification courses</li>
                  <li>• Sales methodology training</li>
                  <li>• Clinical education programs</li>
                  <li>• Ongoing webinar series</li>
                </ul>
              </div>
              <div>
                <h4 className="font-display text-lg font-medium mb-2 text-brand">Marketing Resources</h4>
                <p className="font-body text-muted-foreground text-sm mb-2">
                  Professional marketing materials and co-marketing opportunities.
                </p>
                <ul className="font-body text-muted-foreground text-sm space-y-1">
                  <li>• Customizable marketing materials</li>
                  <li>• Digital asset library</li>
                  <li>• Social media content</li>
                  <li>• Joint marketing programs</li>
                </ul>
              </div>
              <div>
                <h4 className="font-display text-lg font-medium mb-2 text-brand">Business Development</h4>
                <p className="font-body text-muted-foreground text-sm mb-2">
                  Strategic support for market expansion and account development.
                </p>
                <ul className="font-body text-muted-foreground text-sm space-y-1">
                  <li>• Territory planning assistance</li>
                  <li>• Key account support</li>
                  <li>• Market analysis and insights</li>
                  <li>• New product launch support</li>
                </ul>
              </div>
            </div>
          </CardBody>
        </Card>
      </Section>

      <Section
        title="Become a Partner"
        description="Join our network of successful partners"
      >
        <Card>
          <CardBody>
            <h3 className="font-display text-xl mb-4">Partnership Opportunities</h3>
            <p className="text-lead text-muted-foreground mb-6">
              Tiger BioSciences is actively seeking qualified partners who share our commitment to clinical excellence and patient care. We offer competitive terms, comprehensive support, and opportunities for growth in the rapidly expanding tissue engineering market.
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <h4 className="font-display text-lg font-medium mb-2 text-brand">Distribution Partners</h4>
                <p className="font-body text-muted-foreground text-sm">
                  We seek established distributors with strong relationships in wound care, surgical specialties, and hospital markets. Ideal partners have clinical expertise, proven sales capabilities, and commitment to long-term growth.
                </p>
              </div>
              <div>
                <h4 className="font-display text-lg font-medium mb-2 text-brand">Strategic Alliances</h4>
                <p className="font-body text-muted-foreground text-sm">
                  For healthcare systems, academic institutions, and technology partners interested in collaborative opportunities, research partnerships, or integrated solutions development.
                </p>
              </div>
            </div>
          </CardBody>
        </Card>
      </Section>
    </main>
  );
}
