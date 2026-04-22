import { Metadata } from "next";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { Card, CardBody } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Newsroom - Tiger BioSciences",
  description: "Stay informed about the latest news, innovations, and developments from Tiger BioSciences in regenerative medicine.",
};

export default function Newsroom() {
  return (
    <main className="min-h-screen">
      <Hero
        title="Newsroom"
        description="Discover the latest news, announcements, and insights from Tiger BioSciences as we advance the field of regenerative medicine."
      />

      <Section title="Latest Updates" description="Recent news and announcements from Tiger BioSciences">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="text-h3 font-light">FDA Clearance for New Product</h3>
              <p className="font-body text-muted-foreground mb-4">
                Tiger BioSciences receives FDA 510(k) clearance for advanced wound matrix, expanding our comprehensive portfolio of regenerative solutions.
              </p>
              <p className="font-body text-sm text-brand">October 2025</p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="text-h3 font-light">Clinical Trial Results Published</h3>
              <p className="font-body text-muted-foreground mb-4">
                Peer-reviewed study in leading medical journal demonstrates superior outcomes with Tiger BioSciences regenerative tissue matrix.
              </p>
              <p className="font-body text-sm text-brand">September 2025</p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="text-h3 font-light">Global Expansion Milestone</h3>
              <p className="font-body text-muted-foreground mb-4">
                Opening new distribution centers in Asia-Pacific region to support growing international demand for regenerative medicine solutions.
              </p>
              <p className="font-body text-sm text-brand">August 2025</p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="text-h3 font-light">Research Partnership Announced</h3>
              <p className="font-body text-muted-foreground mb-4">
                Collaboration with leading academic medical center to advance next-generation tissue engineering technologies.
              </p>
              <p className="font-body text-sm text-brand">July 2025</p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="text-h3 font-light">Industry Recognition Award</h3>
              <p className="font-body text-muted-foreground mb-4">
                Tiger BioSciences honored with Innovation Excellence Award for breakthrough advances in regenerative medicine technology.
              </p>
              <p className="font-body text-sm text-brand">June 2025</p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="text-h3 font-light">Manufacturing Expansion</h3>
              <p className="font-body text-muted-foreground mb-4">
                New state-of-the-art processing facility increases production capacity and enhances quality systems for biomaterial manufacturing.
              </p>
              <p className="font-body text-sm text-brand">May 2025</p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Media Resources" description="Information and resources for media professionals">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="text-h3 font-light">Press Releases</h3>
              <p className="font-body text-muted-foreground">
                Access our complete archive of official press releases, product announcements, and corporate communications.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="text-h3 font-light">Media Inquiries</h3>
              <p className="font-body text-muted-foreground">
                Contact our media relations team for interviews, background information, and expert commentary on regenerative medicine topics.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="text-h3 font-light">Executive Perspectives</h3>
              <p className="font-body text-muted-foreground">
                Insights and thought leadership from Tiger BioSciences executives on industry trends and innovation in regenerative medicine.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="text-h3 font-light">Clinical Publications</h3>
              <p className="font-body text-muted-foreground">
                Peer-reviewed research and clinical studies validating the safety and efficacy of our regenerative medicine solutions.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Events & Conferences" description="Meet us at upcoming industry events">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="text-h3 font-light">Medical Conferences</h3>
              <p className="font-body text-muted-foreground">
                Tiger BioSciences regularly presents at leading medical and surgical conferences worldwide, sharing clinical evidence and innovations.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="text-h3 font-light">Educational Symposia</h3>
              <p className="font-body text-muted-foreground">
                Hosting continuing medical education programs and workshops for healthcare professionals on regenerative medicine applications.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="text-h3 font-light">Industry Trade Shows</h3>
              <p className="font-body text-muted-foreground">
                Visit our booth at major healthcare industry exhibitions to experience our latest product innovations and technologies.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>
    </main>
  );
}
