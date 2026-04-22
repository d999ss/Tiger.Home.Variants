import { Metadata } from "next";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { Card, CardBody } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Terms of Service - Tiger BioSciences",
  description: "Terms and conditions for using Tiger BioSciences services and products",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Hero
        title="Terms of Service"
        description="Please read these terms carefully before using Tiger BioSciences services and products."
      />

      <Section
        title="Acceptable Use"
        description="Guidelines for using our services"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="text-h3 font-light">Professional Use Only</h3>
              <p className="font-body text-muted-foreground">
                Our products and services are intended for use by qualified healthcare professionals. Users must maintain appropriate licenses and credentials for their jurisdiction.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="text-h3 font-light">Account Security</h3>
              <p className="font-body text-muted-foreground">
                You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. Notify us immediately of any unauthorized use.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="text-h3 font-light">Prohibited Activities</h3>
              <p className="font-body text-muted-foreground">
                Users may not misuse our services, attempt to access unauthorized areas, interfere with proper functioning, or violate any applicable laws or regulations.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="text-h3 font-light">Content Standards</h3>
              <p className="font-body text-muted-foreground">
                Any content you submit must be accurate, lawful, and respectful. You retain ownership of your content but grant us necessary licenses to provide our services.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section
        title="Rights and Responsibilities"
        description="Our commitments and yours"
      >
        <Card>
          <CardBody>
            <p className="text-lead text-muted-foreground mb-6">
              Tiger BioSciences grants you a limited, non-exclusive, non-transferable license to access and use our services in accordance with these terms. We reserve all rights not expressly granted to you.
            </p>
            <p className="text-lead text-muted-foreground mb-6">
              We strive to provide reliable, high-quality services but do not guarantee uninterrupted or error-free operation. We may modify, suspend, or discontinue services with reasonable notice.
            </p>
            <p className="text-lead text-muted-foreground">
              You agree to use our services responsibly, comply with all applicable laws, and respect the intellectual property rights of Tiger BioSciences and others.
            </p>
          </CardBody>
        </Card>
      </Section>

      <Section
        title="Limitations and Liability"
        description="Important legal protections and limits"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="text-h3 font-light">Warranty Disclaimer</h3>
              <p className="font-body text-muted-foreground">
                Services are provided &quot;as is&quot; without warranties of any kind, either express or implied, except where prohibited by law. Product warranties are stated separately.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="text-h3 font-light">Limitation of Liability</h3>
              <p className="font-body text-muted-foreground">
                To the maximum extent permitted by law, Tiger BioSciences shall not be liable for indirect, incidental, consequential, or punitive damages arising from your use of our services.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="text-h3 font-light">Indemnification</h3>
              <p className="font-body text-muted-foreground">
                You agree to indemnify and hold Tiger BioSciences harmless from claims arising from your violation of these terms or misuse of our services.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="text-h3 font-light">Medical Disclaimer</h3>
              <p className="font-body text-muted-foreground">
                Our website content is for informational purposes only and does not constitute medical advice. Healthcare professionals must use their professional judgment.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="text-h3 font-light">Governing Law</h3>
              <p className="font-body text-muted-foreground">
                These terms are governed by applicable laws. Disputes shall be resolved through arbitration or in courts of competent jurisdiction as specified in our agreements.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="text-h3 font-light">Termination</h3>
              <p className="font-body text-muted-foreground">
                We may terminate or suspend access to our services immediately for violations of these terms. Certain provisions survive termination, including disclaimers and limitations.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section
        title="Contact Us"
        description="Get in touch with questions about these terms"
      >
        <Card>
          <CardBody>
            <p className="font-body text-muted-foreground">
              For questions or concerns about these terms, contact us at <a href="mailto:info@tigerbios.com" className="text-brand hover:underline">info@tigerbios.com</a>.
            </p>
          </CardBody>
        </Card>
      </Section>
    </main>
  );
}
