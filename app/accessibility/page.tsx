import { Metadata } from "next";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { Card, CardBody } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Accessibility Statement - Tiger BioSciences",
  description: "Our commitment to making our website and services accessible to everyone",
};

export default function AccessibilityPage() {
  return (
    <main className="min-h-screen">
      <Hero
        title="Accessibility Statement"
        description="Tiger BioSciences is committed to ensuring digital accessibility for people of all abilities."
      />

      <Section
        title="Our Commitment"
        description="Making our services accessible to everyone"
      >
        <Card>
          <CardBody>
            <p className="text-lead text-muted-foreground mb-6">
              We are committed to ensuring that our website and digital services are accessible to all users, including those with disabilities. We strive to meet or exceed the requirements of the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA.
            </p>
            <p className="text-lead text-muted-foreground mb-6">
              Accessibility is an ongoing effort, and we continuously work to improve the user experience for all visitors. We believe that everyone should have equal access to information about our products and services.
            </p>
            <p className="text-lead text-muted-foreground">
              Our website is designed to be compatible with assistive technologies such as screen readers, keyboard navigation, and voice recognition software.
            </p>
          </CardBody>
        </Card>
      </Section>

      <Section
        title="Accessibility Features"
        description="Built-in features to enhance your experience"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="text-h3 font-light">Keyboard Navigation</h3>
              <p className="font-body text-muted-foreground">
                Our website can be fully navigated using only a keyboard, allowing users who cannot use a mouse to access all features and content.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="text-h3 font-light">Screen Reader Support</h3>
              <p className="font-body text-muted-foreground">
                We use semantic HTML and ARIA labels to ensure compatibility with screen readers like JAWS, NVDA, and VoiceOver, providing clear content structure and descriptions.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="text-h3 font-light">Color Contrast</h3>
              <p className="font-body text-muted-foreground">
                Our design meets WCAG AA standards for color contrast, ensuring text is readable for users with low vision or color blindness.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="text-h3 font-light">Responsive Design</h3>
              <p className="font-body text-muted-foreground">
                Our website adapts to different screen sizes and orientations, supporting users who need to zoom in or use mobile devices for accessibility.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="text-h3 font-light">Clear Language</h3>
              <p className="font-body text-muted-foreground">
                We strive to use clear, concise language and provide explanations for technical terms to make our content understandable to all users.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="text-h3 font-light">Alternative Text</h3>
              <p className="font-body text-muted-foreground">
                All meaningful images include descriptive alternative text, ensuring that visual information is accessible to users who cannot see images.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section
        title="Standards Compliance"
        description="Guidelines and regulations we follow"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="text-h3 font-light">WCAG 2.1 Level AA</h3>
              <p className="font-body text-muted-foreground">
                We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA, an internationally recognized standard for web accessibility established by the World Wide Web Consortium (W3C).
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="text-h3 font-light">Section 508</h3>
              <p className="font-body text-muted-foreground">
                Our website strives to meet Section 508 standards, which require federal agencies and their contractors to make electronic information accessible to people with disabilities.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="text-h3 font-light">ADA Compliance</h3>
              <p className="font-body text-muted-foreground">
                We are committed to compliance with the Americans with Disabilities Act (ADA) and ensuring that our digital presence does not discriminate against individuals with disabilities.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="text-h3 font-light">Continuous Improvement</h3>
              <p className="font-body text-muted-foreground">
                We regularly audit our website for accessibility issues, conduct user testing with people who have disabilities, and implement improvements based on feedback and best practices.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section
        title="Feedback and Support"
        description="We welcome your input"
      >
        <Card>
          <CardBody>
            <p className="text-lead text-muted-foreground mb-6">
              We welcome feedback on the accessibility of our website and services. If you encounter any accessibility barriers or have suggestions for improvement, please let us know.
            </p>
            <p className="text-lead text-muted-foreground mb-6">
              For accessibility-related questions or concerns, contact us at <a href="mailto:info@tigerbios.com" className="text-brand hover:underline">info@tigerbios.com</a>.
            </p>
            <p className="text-lead text-muted-foreground">
              If you need assistance accessing any content or using any features on our website, please contact us and we will work with you to provide the information or service you need through an alternative communication method.
            </p>
          </CardBody>
        </Card>
      </Section>
    </main>
  );
}
