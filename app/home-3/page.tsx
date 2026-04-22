"use client";

import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardBody } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { Carousel, CarouselItem } from "@/components/ui/carousel";
import {
  FlaskConicalIcon,
  BuildingIcon,
  GlobeIcon,
  ShieldCheckIcon,
  LightbulbIcon,
  HandshakeIcon,
  HeartPulseIcon,
  ArrowRightIcon,
  CheckCircle2Icon
} from "lucide-react";

export default function Home3() {
  return (
    <>
      <Nav />
      <main className="relative">
        {/* Hero Section */}
        <Section className="relative overflow-hidden bg-vignette-red min-h-[90vh] flex items-center pt-20">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6 md:px-10">
            <Badge variant="glass" className="mb-8 animate-appear text-sm">
              <span className="text-foreground font-medium">Advancing Human Science</span>
            </Badge>

            <h1 className="text-display mb-6 animate-appear opacity-0 delay-100 leading-tight">
              Building the Future of
              <br />
              <span className="bg-gradient-to-r from-brand to-brand/80 bg-clip-text text-transparent">Tissue & Cellular Innovation</span>
            </h1>
          </div>
        </Section>

        {/* About Section */}
        <Section className="bg-background">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-10">
            <div className="mb-12 text-center">
              <div className="text-xs font-medium uppercase tracking-wider text-brand mb-4">
                ABOUT US
              </div>
              <h2 className="text-h1 max-w-4xl mx-auto">
                Tiger BioSciences leads the advancement of regenerative medicine and biologic innovation developing tissue-based technologies that redefine standards of care worldwide.
              </h2>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="relative">
                <Card className="overflow-hidden">
                  <div className="aspect-[4/3] bg-gradient-to-br from-brand/10 to-brand/5 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <FlaskConicalIcon className="size-20 text-brand opacity-20" />
                    </div>
                  </div>
                  <CardBody className="relative">
                    <h3 className="text-xl font-bold mb-3">10+ Years of Experience</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      With over a decade of innovation, our journey has expanded from small-scale labs to globally integrated tissue, biologic, and medical device systems.
                    </p>
                    <div className="mt-4 pt-4 border-t border-border">
                      <div className="size-12 rounded-full bg-brand/10 flex items-center justify-center">
                        <CheckCircle2Icon className="size-6 text-brand" />
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>

              <div className="relative">
                <Card className="overflow-hidden">
                  <div className="aspect-[4/3] bg-gradient-to-br from-brand/10 to-brand/5 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <HeartPulseIcon className="size-20 text-brand opacity-20" />
                    </div>
                  </div>
                  <CardBody className="relative">
                    <h3 className="text-xl font-bold mb-3">5,000+ Clinical and Surgical Applications</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      We&apos;ve proudly supported 5,000+ cases worldwide with precision-engineered biologic materials designed for performance, consistency, and safety.
                    </p>
                  </CardBody>
                </Card>
              </div>

              <div className="relative">
                <Card className="overflow-hidden">
                  <div className="aspect-[4/3] bg-gradient-to-br from-brand/10 to-brand/5 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <ShieldCheckIcon className="size-20 text-brand opacity-20" />
                    </div>
                  </div>
                  <CardBody className="relative">
                    <h3 className="text-xl font-bold mb-3">96% Satisfaction Rate</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Because for us, it&apos;s not just about outcomes. It&apos;s about trust, transparency, and scientific integrity at every stage.
                    </p>
                  </CardBody>
                </Card>
              </div>
            </div>

            <div className="text-center max-w-3xl mx-auto">
              <p className="text-lead mb-6">
                Established in 2015 — built to advance regenerative medicine through science, engineering, and human-centered design. Committed to scientific excellence and clinical outcomes.
              </p>
              <Button variant="default" size="lg" asChild>
                <a href="/company/about">
                  Explore Tiger BioSciences
                  <ArrowRightIcon className="ml-2 size-4" />
                </a>
              </Button>
            </div>
          </div>
        </Section>

        {/* What We Do Section - Static Grid */}
        <Section className="bg-muted/30">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-10">
            <div className="mb-12 text-center">
              <div className="text-xs font-medium uppercase tracking-wider text-brand mb-4">
                WHAT WE DO
              </div>
              <h2 className="text-h1 max-w-4xl mx-auto">
                We support clinicians, researchers, and partners at every stage — from tissue recovery and processing to engineering biologic systems and delivering solutions globally.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardBody className="p-8">
                  <div className="mb-6">
                    <FlaskConicalIcon className="size-12 text-brand" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Regenerative Biologics</h3>
                  <p className="text-muted-foreground text-sm">
                    We develop matrix and cell-based biologics engineered to restore tissue and accelerate healing. Our systems are designed for consistency, precision, and clinical performance.
                  </p>
                </CardBody>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardBody className="p-8">
                  <div className="mb-6">
                    <BuildingIcon className="size-12 text-brand" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Cellular Engineering</h3>
                  <p className="text-muted-foreground text-sm">
                    We enhance biologic performance through precise cellular integration and data-driven R&D. Our approach combines tissue science with engineering discipline.
                  </p>
                </CardBody>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardBody className="p-8">
                  <div className="mb-6">
                    <LightbulbIcon className="size-12 text-brand" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Data-Driven Agricultural</h3>
                  <p className="text-muted-foreground text-sm">
                    Data-driven approach to advancing tissue technology. We turn research insights into clinical solutions through rigorous scientific methodology.
                  </p>
                </CardBody>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardBody className="p-8">
                  <div className="mb-6">
                    <GlobeIcon className="size-12 text-brand" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Integrated Medical Systems</h3>
                  <p className="text-muted-foreground text-sm">
                    From biomaterials to device manufacturing, our full-stack model ensures quality and scalability. We design systems that meet regulatory standards and clinical demands.
                  </p>
                </CardBody>
              </Card>
            </div>
          </div>
        </Section>

        {/* Solution Portfolios Section */}
        <Section className="bg-background">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-10">
            <div className="mb-12 text-center">
              <div className="text-xs font-medium uppercase tracking-wider text-brand mb-4">
                OUR SOLUTIONS
              </div>
              <h2 className="text-h1 max-w-4xl mx-auto">
                Explore our comprehensive solutions across four specialized areas
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <a href="/solutions/wound-care" className="group cursor-pointer">
                <Card className="hover:shadow-xl transition-all h-full">
                  <CardBody className="p-8">
                    <div className="mb-6">
                      <HeartPulseIcon className="size-12 text-brand" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">Wound Care Solutions</h3>
                    <p className="text-muted-foreground text-sm mb-6">
                      Advanced CAMP solutions for chronic wounds, extremity reconstruction, and surgical dressings.
                    </p>
                    <div className="flex items-center text-sm font-semibold text-brand transition-transform group-hover:translate-x-1">
                      Explore Solutions
                      <ArrowRightIcon className="ml-2 size-4" />
                    </div>
                  </CardBody>
                </Card>
              </a>

              <a href="/solutions/aesthetics" className="group cursor-pointer">
                <Card className="hover:shadow-xl transition-all h-full">
                  <CardBody className="p-8">
                    <div className="mb-6">
                      <BuildingIcon className="size-12 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">Aesthetic Solutions</h3>
                    <p className="text-muted-foreground text-sm mb-6">
                      Cutting-edge solutions for reconstruction, shape, renewal, and volume across aesthetic medicine.
                    </p>
                    <div className="flex items-center text-sm font-semibold text-green-600 transition-transform group-hover:translate-x-1">
                      Explore Solutions
                      <ArrowRightIcon className="ml-2 size-4" />
                    </div>
                  </CardBody>
                </Card>
              </a>

              <a href="/solutions/regenerative-sciences" className="group cursor-pointer">
                <Card className="hover:shadow-xl transition-all h-full">
                  <CardBody className="p-8">
                    <div className="mb-6">
                      <FlaskConicalIcon className="size-12 text-brand" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">Tissue Processing and R&D</h3>
                    <p className="text-muted-foreground text-sm mb-6">
                      Leading tissue processing, R&D, birth tissue recovery, and biocare innovations.
                    </p>
                    <div className="flex items-center text-sm font-semibold text-brand transition-transform group-hover:translate-x-1">
                      Explore Solutions
                      <ArrowRightIcon className="ml-2 size-4" />
                    </div>
                  </CardBody>
                </Card>
              </a>

              <a href="/solutions/international" className="group cursor-pointer">
                <Card className="hover:shadow-xl transition-all h-full">
                  <CardBody className="p-8">
                    <div className="mb-6">
                      <GlobeIcon className="size-12 text-brand" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">International</h3>
                    <p className="text-muted-foreground text-sm mb-6">
                      Global access to advanced cell and tissue technologies through our international division.
                    </p>
                    <div className="flex items-center text-sm font-semibold text-brand transition-transform group-hover:translate-x-1">
                      Explore Solutions
                      <ArrowRightIcon className="ml-2 size-4" />
                    </div>
                  </CardBody>
                </Card>
              </a>
            </div>
          </div>
        </Section>

        {/* Why Feal Section */}
        <Section className="bg-muted/30">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-10">
            <div className="mb-12 text-center">
              <div className="text-xs font-medium uppercase tracking-wider text-brand mb-4">
                WHY FEAL
              </div>
              <h2 className="text-h1 max-w-4xl mx-auto">
                At Tiger BioSciences, innovation thrives where science and collaboration meet — bridging research and real-world clinical performance.
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Testimonial Card */}
              <div>
                <Card className="h-full">
                  <CardBody className="flex flex-col h-full">
                    <div className="mb-6">
                      <div className="size-20 rounded-full bg-gradient-to-br from-brand/20 to-brand/5 flex items-center justify-center mb-4">
                        <HeartPulseIcon className="size-10 text-brand" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg font-semibold mb-2">Beatrice Williams</h3>
                      <p className="text-sm text-muted-foreground mb-4">AgriTech Entrepreneur</p>
                    </div>
                  </CardBody>
                </Card>
              </div>

              {/* Value Cards - Stacked Vertically */}
              <div className="flex flex-col gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardBody>
                    <div className="mb-4">
                      <div className="size-12 rounded-lg bg-brand/10 flex items-center justify-center">
                        <ShieldCheckIcon className="size-6 text-brand" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-3">Evidence Before Assumption</h3>
                    <p className="text-muted-foreground text-sm">
                      Every Tiger solution is data-backed, peer-reviewed, and validated by research — not theory.
                    </p>
                  </CardBody>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardBody>
                    <div className="mb-4">
                      <div className="size-12 rounded-lg bg-brand/10 flex items-center justify-center">
                        <LightbulbIcon className="size-6 text-brand" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-3">Innovation with Purpose</h3>
                    <p className="text-muted-foreground text-sm">
                      Practical, scalable, and proven technologies engineered for clinical realities, not complexity.
                    </p>
                  </CardBody>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardBody>
                    <div className="mb-4">
                      <div className="size-12 rounded-lg bg-brand/10 flex items-center justify-center">
                        <HandshakeIcon className="size-6 text-brand" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-3">Partnership that Endures</h3>
                    <p className="text-muted-foreground text-sm">
                      We collaborate with clinicians, hospitals, and researchers to develop together and evolve together.
                    </p>
                  </CardBody>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardBody>
                    <div className="mb-4">
                      <div className="size-12 rounded-lg bg-brand/10 flex items-center justify-center">
                        <HeartPulseIcon className="size-6 text-brand" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-3">Engineering Better Outcomes for All</h3>
                    <p className="text-muted-foreground text-sm">
                      Our work is about more than devices — it&apos;s about enabling progress in care, outcomes, and patient trust.
                    </p>
                  </CardBody>
                </Card>
              </div>
            </div>
          </div>
        </Section>

        {/* CEO Quote Section */}
        <Section className="bg-muted/30">
          <div className="container mx-auto max-w-5xl px-4 sm:px-6 md:px-10">
            <Card>
              <CardBody className="p-12">
                <blockquote className="text-h3 text-center mb-8">
                  &quot;We founded Tiger BioSciences to redefine regenerative medicine — bridging biology, engineering, and data to shape the next era of healthcare.&quot;
                </blockquote>
                <div className="flex items-center justify-center gap-4">
                  <div className="text-center">
                    <div className="font-semibold">Chris Johns</div>
                    <div className="text-sm text-muted-foreground">CEO of Tiger BioSciences</div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </Section>

        {/* Services Section */}
        <Section className="bg-background">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-10">
            <div className="mb-12 text-center">
              <h2 className="text-h1 max-w-4xl mx-auto">
                We offer practical, research-based solutions to help agriculture stronger access for all.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="group hover:shadow-lg transition-all overflow-hidden">
                <div className="aspect-[4/3] bg-gradient-to-br from-brand/20 to-brand/10 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FlaskConicalIcon className="size-16 text-brand opacity-30" />
                  </div>
                </div>
                <CardBody className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Agricultural Development</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Comprehensive solutions for modern farming challenges, from soil health to crop optimization.
                  </p>
                  <Button variant="ghost" size="sm" className="group/btn" asChild>
                    <a href="/services/agricultural">
                      Learn More
                      <ArrowRightIcon className="ml-2 size-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </CardBody>
              </Card>

              <Card className="group hover:shadow-lg transition-all overflow-hidden">
                <div className="aspect-[4/3] bg-gradient-to-br from-brand/20 to-brand/10 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <LightbulbIcon className="size-16 text-brand opacity-30" />
                  </div>
                </div>
                <CardBody className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Data-Driven Agricultural</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Leveraging analytics and insights to make informed decisions for sustainable farming practices.
                  </p>
                  <Button variant="ghost" size="sm" className="group/btn" asChild>
                    <a href="/services/data-driven">
                      Learn More
                      <ArrowRightIcon className="ml-2 size-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </CardBody>
              </Card>

              <Card className="group hover:shadow-lg transition-all overflow-hidden">
                <div className="aspect-[4/3] bg-gradient-to-br from-brand/20 to-brand/10 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <BuildingIcon className="size-16 text-brand opacity-30" />
                  </div>
                </div>
                <CardBody className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Farmer Education</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Empowering farmers with knowledge, training, and resources for long-term success and growth.
                  </p>
                  <Button variant="ghost" size="sm" className="group/btn" asChild>
                    <a href="/services/education">
                      Learn More
                      <ArrowRightIcon className="ml-2 size-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </CardBody>
              </Card>

              <Card className="group hover:shadow-lg transition-all overflow-hidden">
                <div className="aspect-[4/3] bg-gradient-to-br from-brand/20 to-brand/10 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <GlobeIcon className="size-16 text-brand opacity-30" />
                  </div>
                </div>
                <CardBody className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Sustainable Consultation</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Expert guidance on eco-friendly practices that balance productivity with environmental stewardship.
                  </p>
                  <Button variant="ghost" size="sm" className="group/btn" asChild>
                    <a href="/services/sustainability">
                      Learn More
                      <ArrowRightIcon className="ml-2 size-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </CardBody>
              </Card>
            </div>
          </div>
        </Section>

        {/* Testimonials Section */}
        <Section className="bg-muted/30">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-10">
            <div className="mb-12 text-center">
              <div className="text-xs font-medium uppercase tracking-wider text-brand mb-4">
                TESTIMONIALS
              </div>
              <h2 className="text-h1 max-w-4xl mx-auto">
                Real stories from partners whose growth we&apos;ve nurtured together.
              </h2>
            </div>

            <Carousel className="max-w-5xl mx-auto">
              <CarouselItem>
                <Card>
                  <CardBody className="p-8 md:p-12">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="size-16 rounded-full bg-gradient-to-br from-brand/20 to-brand/5 flex items-center justify-center">
                        <ShieldCheckIcon className="size-8 text-brand" />
                      </div>
                      <div>
                        <div className="font-semibold text-lg">Dr. Maria Chen</div>
                        <div className="text-sm text-muted-foreground">Surgical Partner</div>
                      </div>
                    </div>
                    <p className="text-lg text-muted-foreground mb-6">
                      Tiger didn&apos;t just deliver biologics — they engaged our surgical teams, shared insights, and co-developed new protocols that improved every outcome.
                    </p>
                    <p className="text-lg text-muted-foreground">
                      Every solution felt purpose-built. Our integration is faster, our procedures more precise, and our patient satisfaction higher than ever.
                    </p>
                  </CardBody>
                </Card>
              </CarouselItem>

              <CarouselItem>
                <Card>
                  <CardBody className="p-8 md:p-12">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="size-16 rounded-full bg-gradient-to-br from-brand/20 to-brand/5 flex items-center justify-center">
                        <FlaskConicalIcon className="size-8 text-brand" />
                      </div>
                      <div>
                        <div className="font-semibold text-lg">Jessica Holdings</div>
                        <div className="text-sm text-muted-foreground">Organic Rice Farmer</div>
                      </div>
                    </div>
                    <p className="text-lg text-muted-foreground mb-6">
                      We had tried countless approaches to improve our rice harvest, but nothing stuck. Then their team came in with both data and compassion, showing us not just what to change, but why it mattered.
                    </p>
                    <p className="text-lg text-muted-foreground">
                      Today, our cooperative is producing more, wasting less, and finally thriving in a way that&apos;s sustainable for our land and our people.
                    </p>
                  </CardBody>
                </Card>
              </CarouselItem>

              <CarouselItem>
                <Card>
                  <CardBody className="p-8 md:p-12">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="size-16 rounded-full bg-gradient-to-br from-brand/20 to-brand/5 flex items-center justify-center">
                        <HandshakeIcon className="size-8 text-brand" />
                      </div>
                      <div>
                        <div className="font-semibold text-lg">Christina Rona</div>
                        <div className="text-sm text-muted-foreground">Village Agriculture Head</div>
                      </div>
                    </div>
                    <p className="text-lg text-muted-foreground mb-6">
                      As a village agriculture leader, I&apos;ve seen many experts come and go, but their approach was different. They worked with us, not over us.
                    </p>
                    <p className="text-lg text-muted-foreground">
                      Every recommendation was clear, practical, and achievable, and it&apos;s given our community the tools to grow stronger and more independent year after year.
                    </p>
                  </CardBody>
                </Card>
              </CarouselItem>

              <CarouselItem>
                <Card>
                  <CardBody className="p-8 md:p-12">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="size-16 rounded-full bg-gradient-to-br from-brand/20 to-brand/5 flex items-center justify-center">
                        <LightbulbIcon className="size-8 text-brand" />
                      </div>
                      <div>
                        <div className="font-semibold text-lg">Elizabeth Grey</div>
                        <div className="text-sm text-muted-foreground">Cocoa Plantation Owner</div>
                      </div>
                    </div>
                    <p className="text-lg text-muted-foreground mb-6">
                      Before partnering with them, farming for us was purely survival — day-to-day work with no bigger vision. Now, thanks to their guidance, we understand how every small decision impacts the future.
                    </p>
                    <p className="text-lg text-muted-foreground">
                      Our plantation is more productive, our team is more skilled, and we see farming not just as work, but as a legacy worth protecting.
                    </p>
                  </CardBody>
                </Card>
              </CarouselItem>

              <CarouselItem>
                <Card>
                  <CardBody className="p-8 md:p-12">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="size-16 rounded-full bg-gradient-to-br from-brand/20 to-brand/5 flex items-center justify-center">
                        <HeartPulseIcon className="size-8 text-brand" />
                      </div>
                      <div>
                        <div className="font-semibold text-lg">Tommy Rennes</div>
                        <div className="text-sm text-muted-foreground">AgriTech Entrepreneur</div>
                      </div>
                    </div>
                    <p className="text-lg text-muted-foreground mb-6">
                      What stood out most to me was their ability to listen. They didn&apos;t just impose ideas; they learned our history, understood our traditions, and respected our way of life.
                    </p>
                    <p className="text-lg text-muted-foreground">
                      Because of that, every improvement we&apos;ve made feels like a natural step forward, not a forced change — and the results speak for themselves.
                    </p>
                  </CardBody>
                </Card>
              </CarouselItem>
            </Carousel>
          </div>
        </Section>

        {/* Final CTA */}
        <Section className="bg-vignette-red">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-10">
            <div className="text-center mb-16">
              <div className="text-xs font-medium uppercase tracking-wider text-brand mb-6">
                FUTURE FARMING START
              </div>
              <h2 className="text-display mb-8 max-w-5xl mx-auto">
                From discovery to deployment, every Tiger BioSciences innovation strengthens the link between science and healing.
              </h2>
              <Button variant="brand" size="lg" className="group cursor-pointer" asChild>
                <a href="/contact">
                  <span>Let&apos;s Talk</span>
                  <ArrowRightIcon className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>

            {/* Logo Grid */}
            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-6 opacity-40">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="aspect-square rounded-xl bg-muted/50 backdrop-blur-[21px] flex items-center justify-center border border-border/50">
                  <div className="size-8 bg-brand/20 rounded-full" />
                </div>
              ))}
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
