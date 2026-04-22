import { Metadata } from "next";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { Card, CardBody } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Media Inquiries - Tiger BioSciences",
  description: "Media resources and contact information for journalists covering Tiger BioSciences and regenerative medicine.",
};

export default function MediaInquiries() {
  return (
    <main className="min-h-screen">
      <Hero
        title="Media Inquiries"
        description="Resources and support for journalists, bloggers, and media professionals covering Tiger BioSciences and the regenerative medicine industry."
      />

      <Section title="Media Relations Team" description="Your primary contacts for Tiger BioSciences media inquiries">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="text-h3 font-light">General Media Inquiries</h3>
              <p className="font-body text-muted-foreground mb-4">
                For general press inquiries, interview requests, and background information about Tiger BioSciences, our products, and technologies.
              </p>
              <p className="font-body text-sm text-muted-foreground mb-3">
                <strong>Contact:</strong> Media Relations Team<br />
                <strong>Email:</strong> media@tigerbiosciences.com<br />
                <strong>Phone:</strong> +1 (214) 555-0100<br />
                <strong>Hours:</strong> Monday-Friday, 9am-6pm CT
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="text-h3 font-light">Clinical & Scientific Media</h3>
              <p className="font-body text-muted-foreground mb-4">
                For inquiries about clinical research, scientific publications, and technical information about our regenerative medicine technologies.
              </p>
              <p className="font-body text-sm text-muted-foreground mb-3">
                <strong>Contact:</strong> Clinical Communications<br />
                <strong>Email:</strong> clinical.media@tigerbiosciences.com<br />
                <strong>Phone:</strong> +1 (214) 555-0101
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="text-h3 font-light">Corporate Communications</h3>
              <p className="font-body text-muted-foreground mb-4">
                For business, financial, and corporate development news including partnerships, acquisitions, and strategic initiatives.
              </p>
              <p className="font-body text-sm text-muted-foreground mb-3">
                <strong>Contact:</strong> Corporate Communications<br />
                <strong>Email:</strong> corporate.media@tigerbiosciences.com<br />
                <strong>Phone:</strong> +1 (214) 555-0102
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="text-h3 font-light">Regional Media Contacts</h3>
              <p className="font-body text-muted-foreground mb-4">
                For region-specific inquiries and local market information, please contact our regional media representatives.
              </p>
              <p className="font-body text-sm text-muted-foreground mb-3">
                <strong>Email:</strong> regional.media@tigerbiosciences.com
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Media Resources" description="Essential information and materials for media coverage">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="text-h3 font-light">Press Kit</h3>
              <p className="font-body text-muted-foreground">
                Comprehensive media kit including company overview, executive bios, high-resolution images, logos, and fact sheets available for download.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="text-h3 font-light">Image Library</h3>
              <p className="font-body text-muted-foreground">
                High-resolution product images, facility photos, and corporate imagery available for editorial use with proper attribution.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="text-h3 font-light">Video Content</h3>
              <p className="font-body text-muted-foreground">
                B-roll footage, executive interviews, and educational videos about our technologies and manufacturing processes.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="text-h3 font-light">Executive Biographies</h3>
              <p className="font-body text-muted-foreground">
                Detailed biographies and headshots of Tiger BioSciences leadership team available for media use.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="text-h3 font-light">Company Fact Sheet</h3>
              <p className="font-body text-muted-foreground">
                Quick reference guide with key facts, figures, and milestones about Tiger BioSciences operations and achievements.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="text-h3 font-light">Clinical Publications</h3>
              <p className="font-body text-muted-foreground">
                Repository of peer-reviewed research and clinical studies supporting our regenerative medicine solutions.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Interview Opportunities" description="Access to Tiger BioSciences experts and thought leaders">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="text-h3 font-light">Executive Interviews</h3>
              <p className="font-body text-muted-foreground">
                Our executive team is available for interviews on topics including regenerative medicine innovation, industry trends, clinical evidence, and business strategy. Request interviews through our media relations team with at least 48 hours notice.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="text-h3 font-light">Clinical Experts</h3>
              <p className="font-body text-muted-foreground">
                Access to board-certified physicians and surgeons who use Tiger BioSciences products in clinical practice. Our clinical team can provide expert commentary on wound care, reconstruction, and regenerative medicine applications.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="text-h3 font-light">Scientific Leaders</h3>
              <p className="font-body text-muted-foreground">
                Our research scientists and engineers can discuss the science behind our technologies, manufacturing processes, and ongoing R&D initiatives in tissue engineering and biomaterials.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="text-h3 font-light">Facility Tours</h3>
              <p className="font-body text-muted-foreground">
                Media tours of our manufacturing and processing facilities can be arranged by appointment. Contact our media relations team to schedule a visit and see our operations firsthand.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Media Guidelines" description="Editorial standards and usage policies">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="text-h3 font-light">Image Usage</h3>
              <p className="font-body text-muted-foreground">
                All images and visual materials are provided for editorial use only. Please credit &quot;Tiger BioSciences&quot; when using company imagery.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="text-h3 font-light">Fact Checking</h3>
              <p className="font-body text-muted-foreground">
                We&apos;re committed to accuracy in media coverage. Contact our media team to verify facts, quotes, or technical information before publication.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="text-h3 font-light">Corrections</h3>
              <p className="font-body text-muted-foreground">
                If you identify errors in published materials about Tiger BioSciences, please contact us so we can provide accurate information for corrections.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>
    </main>
  );
}
