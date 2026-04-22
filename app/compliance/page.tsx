import { Metadata } from "next";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { Card, CardBody } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Regulatory Compliance - Tiger BioSciences",
  description: "Our commitment to meeting the highest regulatory and quality standards worldwide",
};

export default function CompliancePage() {
  return (
    <main className="min-h-screen">
      <Hero
        title="Regulatory Compliance"
        description="Tiger BioSciences complies with relevant regulatory standards that relate to the safety and efficacy of our products."
      />

      <Section
        title="Regulatory Standards"
        description="Certifications and approvals we maintain"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="text-h3 font-light">FDA Compliance</h3>
              <p className="font-body text-muted-foreground">
                Our products comply with U.S. Food and Drug Administration regulations, including 21 CFR Part 820 for Quality System Regulations and applicable premarket approval requirements.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="text-h3 font-light">CE Marking</h3>
              <p className="font-body text-muted-foreground">
                We maintain CE marking for European markets, demonstrating compliance with EU Medical Device Regulation (MDR 2017/745) and In Vitro Diagnostic Regulation (IVDR 2017/746).
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="text-h3 font-light">ISO 13485</h3>
              <p className="font-body text-muted-foreground">
                Our device quality management system is certified to ISO 13485, the international standard for medical device quality management systems, ensuring consistent product quality.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="text-h3 font-light">ISO 9001</h3>
              <p className="font-body text-muted-foreground">
                We maintain ISO 9001 certification for our overall quality management system, demonstrating our commitment to continuous improvement and customer satisfaction.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="text-h3 font-light">GMP Compliance</h3>
              <p className="font-body text-muted-foreground">
                Our manufacturing facilities adhere to Good Manufacturing Practice (GMP) standards, ensuring consistent production control and quality assurance throughout the manufacturing process.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="text-h3 font-light">International Standards</h3>
              <p className="font-body text-muted-foreground">
                We comply with regulatory requirements in multiple jurisdictions including Health Canada, TGA (Australia), PMDA (Japan), and other international regulatory bodies.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section
        title="Quality Assurance"
        description="Our commitment to product excellence"
      >
        <Card>
          <CardBody>
            <p className="text-lead text-muted-foreground mb-6">
              Tiger BioSciences implements comprehensive quality assurance programs throughout the entire product lifecycle, from design and development through manufacturing, distribution, and post-market surveillance.
            </p>
            <p className="text-lead text-muted-foreground mb-6">
              Our quality systems include rigorous testing protocols, validation procedures, and documentation practices that exceed regulatory requirements. We conduct regular internal audits and management reviews to ensure continued compliance.
            </p>
            <p className="text-lead text-muted-foreground">
              We maintain a robust post-market surveillance program to monitor product performance, track adverse events, and implement corrective and preventive actions when necessary.
            </p>
          </CardBody>
        </Card>
      </Section>

      <Section
        title="Ethical Standards"
        description="Our commitment to ethical business practices"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="text-h3 font-light">Clinical Research</h3>
              <p className="font-body text-muted-foreground">
                All clinical research is conducted in accordance with Good Clinical Practice (GCP) guidelines, ICH standards, and the Declaration of Helsinki, with appropriate institutional review board oversight.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="text-h3 font-light">Environmental Responsibility</h3>
              <p className="font-body text-muted-foreground">
                We comply with environmental regulations and implement sustainable practices across our operations, including proper waste management and reduction of environmental impact.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="text-h3 font-light">Data Privacy</h3>
              <p className="font-body text-muted-foreground">
                We maintain compliance with HIPAA, GDPR, and other data protection regulations, ensuring the privacy and security of all personal and health information we handle.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="text-h3 font-light">Supply Chain Integrity</h3>
              <p className="font-body text-muted-foreground">
                Our supply chain practices comply with the Drug Supply Chain Security Act (DSCSA) and other regulations ensuring product authenticity, traceability, and security.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>
    </main>
  );
}
