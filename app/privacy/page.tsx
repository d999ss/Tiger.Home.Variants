import { Metadata } from "next";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { Card, CardBody } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Privacy Policy - Tiger BioSciences",
  description: "Our commitment to protecting your privacy and personal data",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Hero
        title="Privacy Policy"
        description="Tiger BioSciences is committed to protecting your privacy and handling your personal data with care and transparency."
      />

      <Section
        title="Data Collection"
        description="What information we collect and why"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="text-h3 font-light">Personal Information</h3>
              <p className="font-body text-muted-foreground">
                We collect personal information that you provide directly to us, including name, email address, phone number, and professional credentials when you register for our services or contact us.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="text-h3 font-light">Usage Data</h3>
              <p className="font-body text-muted-foreground">
                We automatically collect information about your device and how you interact with our website, including IP address, browser type, pages visited, and time spent on pages.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="text-h3 font-light">Professional Data</h3>
              <p className="font-body text-muted-foreground">
                For healthcare professionals, we may collect medical license information, specialty, practice details, and other relevant professional credentials for verification purposes.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="text-h3 font-light">Cookies and Tracking</h3>
              <p className="font-body text-muted-foreground">
                We use cookies and similar technologies to enhance your experience, analyze site usage, and support our marketing efforts. You can control cookie preferences through your browser settings.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section
        title="Data Usage"
        description="How we use your information"
      >
        <Card>
          <CardBody>
            <p className="text-lead text-muted-foreground mb-6">
              We use the information we collect to provide, maintain, and improve our services, communicate with you about products and updates, respond to your inquiries, and comply with legal obligations.
            </p>
            <p className="text-lead text-muted-foreground mb-6">
              Your data may be used to personalize your experience, send educational materials about our products, process orders and transactions, and conduct research to improve our offerings.
            </p>
            <p className="text-lead text-muted-foreground">
              We do not sell your personal information to third parties. We may share data with service providers who assist us in operating our business, always under strict confidentiality agreements.
            </p>
          </CardBody>
        </Card>
      </Section>

      <Section
        title="Data Protection"
        description="How we safeguard your information"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="text-h3 font-light">Security Measures</h3>
              <p className="font-body text-muted-foreground">
                We implement industry-standard security measures including encryption, secure servers, and access controls to protect your data from unauthorized access or disclosure.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="text-h3 font-light">Data Retention</h3>
              <p className="font-body text-muted-foreground">
                We retain personal data only for as long as necessary to fulfill the purposes outlined in this policy or as required by law, after which it is securely deleted.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="text-h3 font-light">Your Rights</h3>
              <p className="font-body text-muted-foreground">
                You have the right to access, correct, delete, or export your personal data. Contact us to exercise these rights or if you have any privacy concerns.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="text-h3 font-light">International Transfers</h3>
              <p className="font-body text-muted-foreground">
                When transferring data internationally, we ensure appropriate safeguards are in place to protect your information in accordance with applicable data protection laws.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="text-h3 font-light">Updates to Policy</h3>
              <p className="font-body text-muted-foreground">
                We may update this privacy policy periodically. We will notify you of significant changes via email or prominent notice on our website.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="text-h3 font-light">Contact Us</h3>
              <p className="font-body text-muted-foreground">
                For privacy-related questions or concerns, contact us at <a href="mailto:info@tigerbios.com" className="text-brand hover:underline">info@tigerbios.com</a>.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>
    </main>
  );
}
