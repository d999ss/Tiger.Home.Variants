import { Metadata } from "next";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { Card, CardBody } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Press Releases - Tiger BioSciences",
  description: "Official press releases and corporate announcements from Tiger BioSciences.",
};

export default function PressReleases() {
  return (
    <main className="min-h-screen">
      <Hero
        title="Press Releases"
        description="Official announcements and communications from Tiger BioSciences about product launches, clinical research, partnerships, and corporate developments."
      />

      <Section title="Recent Press Releases" description="Latest official announcements from Tiger BioSciences">
        <div className="grid grid-cols-1 gap-6">
          <Card>
            <CardBody>
              <h3 className="text-h3 font-light">Tiger BioSciences Receives FDA 510(k) Clearance for Advanced Wound Matrix</h3>
              <p className="font-body text-muted-foreground mb-4">
                DALLAS, TX - October 15, 2025 - Tiger BioSciences today announced receipt of FDA 510(k) clearance for its advanced collagen matrix for chronic wound management. The new product leverages proprietary processing technology to preserve the native structure and biological activity of extracellular matrix components, providing an optimal scaffold for tissue regeneration.
              </p>
              <p className="font-body text-sm text-brand mb-2">October 15, 2025</p>
              <p className="font-body text-sm text-muted-foreground">Product Launch | Regulatory Approval</p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="text-h3 font-light">Clinical Study Demonstrates Superior Outcomes with Tiger BioSciences Regenerative Matrix</h3>
              <p className="font-body text-muted-foreground mb-4">
                DALLAS, TX - September 28, 2025 - A new peer-reviewed study published in the Journal of Wound Care demonstrates significantly improved healing rates and reduced time to closure in chronic wounds treated with Tiger BioSciences regenerative tissue matrix compared to standard care. The multi-center randomized controlled trial enrolled 120 patients with venous leg ulcers.
              </p>
              <p className="font-body text-sm text-brand mb-2">September 28, 2025</p>
              <p className="font-body text-sm text-muted-foreground">Clinical Research | Evidence</p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="text-h3 font-light">Tiger BioSciences Expands Global Footprint with Asia-Pacific Distribution Centers</h3>
              <p className="font-body text-muted-foreground mb-4">
                DALLAS, TX - August 12, 2025 - Tiger BioSciences announced the opening of new distribution centers in Singapore and Sydney to support growing demand for regenerative medicine solutions across Asia-Pacific markets. The expansion strengthens the company&apos;s ability to serve healthcare providers in the region with innovative wound care and reconstruction products.
              </p>
              <p className="font-body text-sm text-brand mb-2">August 12, 2025</p>
              <p className="font-body text-sm text-muted-foreground">Corporate Expansion | Global Operations</p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="text-h3 font-light">Tiger BioSciences Announces Research Partnership with Leading Academic Medical Center</h3>
              <p className="font-body text-muted-foreground mb-4">
                DALLAS, TX - July 22, 2025 - Tiger BioSciences and the University Medical Center announced a collaborative research agreement to advance next-generation tissue engineering technologies for complex wound reconstruction. The partnership will focus on developing novel biomaterial scaffolds incorporating growth factors and cellular components.
              </p>
              <p className="font-body text-sm text-brand mb-2">July 22, 2025</p>
              <p className="font-body text-sm text-muted-foreground">Research Partnership | Innovation</p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="text-h3 font-light">Tiger BioSciences Honored with Innovation Excellence Award</h3>
              <p className="font-body text-muted-foreground mb-4">
                DALLAS, TX - June 5, 2025 - The Regenerative Medicine Foundation recognized Tiger BioSciences with its Innovation Excellence Award for breakthrough advances in tissue processing technology. The award acknowledges the company&apos;s proprietary methods for preserving the native structure and biological activity of tissue-based biomaterials.
              </p>
              <p className="font-body text-sm text-brand mb-2">June 5, 2025</p>
              <p className="font-body text-sm text-muted-foreground">Industry Recognition | Awards</p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="text-h3 font-light">Tiger BioSciences Opens New State-of-the-Art Manufacturing Facility</h3>
              <p className="font-body text-muted-foreground mb-4">
                DALLAS, TX - May 18, 2025 - Tiger BioSciences opened a new 50,000 square foot processing facility featuring advanced automation and environmental controls for biomaterial manufacturing. The facility increases production capacity by 40% and incorporates enhanced quality systems to meet growing global demand.
              </p>
              <p className="font-body text-sm text-brand mb-2">May 18, 2025</p>
              <p className="font-body text-sm text-muted-foreground">Manufacturing | Infrastructure</p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Media Contact" description="For press inquiries and interview requests">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="text-h3 font-light">Media Relations</h3>
              <p className="font-body text-muted-foreground mb-4">
                Our media relations team is available to provide additional information, arrange interviews with company executives, and offer expert commentary on regenerative medicine topics.
              </p>
              <p className="font-body text-sm text-muted-foreground">
                Email: media@tigerbiosciences.com<br />
                Phone: +1 (214) 555-0100
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="text-h3 font-light">Press Materials</h3>
              <p className="font-body text-muted-foreground mb-4">
                High-resolution images, executive bios, company fact sheets, and other press materials available upon request for credentialed media representatives.
              </p>
              <p className="font-body text-sm text-muted-foreground">
                Request materials: presskit@tigerbiosciences.com
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>
    </main>
  );
}
