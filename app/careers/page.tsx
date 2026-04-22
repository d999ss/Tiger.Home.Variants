"use client";

import Link from "next/link";
import Image from "next/image";
import { UsersIcon, TrendingUpIcon, HeartIcon, GlobeIcon, ActivityIcon, DollarSignIcon, Building2Icon } from "lucide-react";
import { TigerButton } from "@/components/ui/tiger-button";
import { TigerSection } from "@/components/ui/tiger-section";
import { SectionHeader } from "@/components/ui/section-header";

export default function Careers() {
  return (
    <main className="min-h-screen bg-[#efedea]">
      <section className="relative h-[70vh] md:h-[82vh] overflow-hidden flex items-end md:items-center">
        <Image
          src="/images/tiger-assets/careers.png"
          alt="Tiger BioSciences Careers"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#231010]/28" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(35,16,16,0.54) 0%, rgba(35,16,16,0.2) 42%, rgba(35,16,16,0.08) 100%)" }} />
        <div className="absolute bottom-0 left-0 right-0 h-[48%]" style={{ background: "linear-gradient(to top, #efedea 0%, rgba(239,237,234,0.82) 32%, rgba(239,237,234,0.22) 68%, rgba(239,237,234,0) 100%)" }} />
        <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="max-w-[760px] rounded-[16px] bg-[#efedea]/78 p-6 md:p-10 backdrop-blur-sm shadow-[0_12px_40px_rgba(0,0,0,0.16)]">
            <span className="inline-block text-[12px] font-normal uppercase tracking-[3.15px] text-[#D5101F] mb-6">Careers</span>
            <h1 className="font-display font-light text-[#231010] text-[clamp(38px,5.5vw,76px)] tracking-[-0.025em] leading-[0.92] mb-6">
              Build Your Career at Tiger BioSciences
            </h1>
            <p className="text-[16px] md:text-[18px] font-light text-[#231010] leading-[1.7] max-w-3xl">
              Join a team of innovators advancing biotechnology through science, integrity, and excellence. Make a meaningful impact on patient care and healthcare outcomes worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Why Tiger Section */}
      <TigerSection width="wide" className="py-16 md:py-20">
        <div className="grid grid-cols-1 gap-8 md:gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4 rounded-[12px] bg-[#fbfcff] p-8 transition-colors hover:bg-white">
            <HeartIcon className="size-6 text-[#D5101F]" />
            <div className="space-y-2">
              <h3 className="font-display text-xl font-light text-[#231010] tracking-tight">Purpose-Driven Work</h3>
              <p className="text-[14.6px] font-light text-[#231010] leading-[26px]">
                Every day, your work directly impacts patient lives and advances healthcare innovation
              </p>
            </div>
          </div>
          <div className="space-y-4 rounded-[12px] bg-[#fbfcff] p-8 transition-colors hover:bg-white">
            <TrendingUpIcon className="size-6 text-[#D5101F]" />
            <div className="space-y-2">
              <h3 className="font-display text-xl font-light text-[#231010] tracking-tight">Career Development</h3>
              <p className="text-[14.6px] font-light text-[#231010] leading-[26px]">
                Clear advancement paths, mentorship programs, and continuous learning opportunities
              </p>
            </div>
          </div>
          <div className="space-y-4 rounded-[12px] bg-[#fbfcff] p-8 transition-colors hover:bg-white">
            <UsersIcon className="size-6 text-[#D5101F]" />
            <div className="space-y-2">
              <h3 className="font-display text-xl font-light text-[#231010] tracking-tight">Collaborative Environment</h3>
              <p className="text-[14.6px] font-light text-[#231010] leading-[26px]">
                Work with world-class scientists, engineers, and professionals in a supportive culture
              </p>
            </div>
          </div>
          <div className="space-y-4 rounded-[12px] bg-[#fbfcff] p-8 transition-colors hover:bg-white">
            <GlobeIcon className="size-6 text-[#D5101F]" />
            <div className="space-y-2">
              <h3 className="font-display text-xl font-light text-[#231010] tracking-tight">Global Reach</h3>
              <p className="text-[14.6px] font-light text-[#231010] leading-[26px]">
                Your contributions reach healthcare providers and patients across the world
              </p>
            </div>
          </div>
        </div>
      </TigerSection>

      {/* Career Areas - Video Tiles */}
      <TigerSection width="wide" bg="white" className="py-16 md:py-24">
        <SectionHeader
          label="Explore Career Areas"
          heading="Find your place in our mission"
          align="left"
          className="mb-12 md:mb-14"
        />
        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          {/* Research & Development */}
          <div className="group space-y-6">
            <Link
              href="/careers/jobs#research"
              aria-label="Explore Research & Development careers"
              className="block relative overflow-hidden rounded-[12px] aspect-[4/3] cursor-pointer"
            >
              <Image src="/images/tiger-assets/research-development.png" alt="Research and development careers" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#231010]/24 to-transparent" />
            </Link>
            <div className="space-y-3">
              <h3 className="font-display text-xl md:text-2xl font-light text-[#231010] tracking-tight">
                Research & Development
              </h3>
              <p className="text-[14.6px] font-light text-[#231010] leading-[26px]">
                Drive innovation in tissue engineering, biomaterials, and regenerative medicine technologies
              </p>
            </div>
          </div>

          {/* Clinical & Medical */}
          <div className="group space-y-6">
            <Link
              href="/careers/jobs#clinical"
              aria-label="Explore Clinical & Medical Affairs careers"
              className="block relative overflow-hidden rounded-[12px] aspect-[4/3] cursor-pointer"
            >
              <Image src="/images/tiger-assets/clinical-medical-affairs.png" alt="Clinical and medical affairs careers" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#231010]/24 to-transparent" />
            </Link>
            <div className="space-y-3">
              <h3 className="font-display text-xl md:text-2xl font-light text-[#231010] tracking-tight">
                Clinical & Medical Affairs
              </h3>
              <p className="text-[14.6px] font-light text-[#231010] leading-[26px]">
                Advance clinical evidence and provide medical education to healthcare providers
              </p>
            </div>
          </div>

          {/* Commercial & Operations */}
          <div className="group space-y-6">
            <Link
              href="/careers/jobs#commercial"
              aria-label="Explore Commercial & Operations careers"
              className="block relative overflow-hidden rounded-[12px] aspect-[4/3] cursor-pointer"
            >
              <Image src="/images/press/wisconsin-facility.png" alt="Commercial and operations careers" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#231010]/24 to-transparent" />
            </Link>
            <div className="space-y-3">
              <h3 className="font-display text-xl md:text-2xl font-light text-[#231010] tracking-tight">
                Commercial & Operations
              </h3>
              <p className="text-[14.6px] font-light text-[#231010] leading-[26px]">
                Connect healthcare providers with innovative solutions and ensure operational excellence
              </p>
            </div>
          </div>
        </div>
      </TigerSection>

      {/* Benefits Highlight */}
      <TigerSection width="wide" className="py-16 md:py-24">
        <SectionHeader
          label="Why Tiger BioSciences"
          heading="What Tiger supports"
          align="left"
          className="mb-12 md:mb-14"
        />
        <div className="grid grid-cols-1 gap-8 md:gap-10 md:grid-cols-3">
          <div className="space-y-4 rounded-[12px] bg-[#fbfcff] p-8">
            <ActivityIcon className="size-6 text-[#D5101F]" />
            <div className="space-y-3">
              <h3 className="font-display text-lg font-light text-[#231010] tracking-tight">Health & Wellness</h3>
              <p className="text-[14.6px] font-light text-[#231010] leading-[26px]">
                Comprehensive medical, dental, and vision coverage with access to leading healthcare networks, ensuring proactive and personalized care for employees and their families. Preventive health services, on-site or virtual wellness consultations, and biometric screenings empower individuals to take charge of their long-term health. To foster mental resilience and work–life balance, we provide confidential mental-health support, reimbursement, discount, and employee assistance programs.
              </p>
            </div>
          </div>
          <div className="space-y-4 rounded-[12px] bg-[#fbfcff] p-8">
            <DollarSignIcon className="size-6 text-[#D5101F]" />
            <div className="space-y-3">
              <h3 className="font-display text-lg font-light text-[#231010] tracking-tight">Financial Security</h3>
              <p className="text-[14.6px] font-light text-[#231010] leading-[26px]">
                Recognizing that financial stability is a core part of overall well-being, we offer competitive salaries, health savings accounts, and employer-paid basic life insurance, AD&D, short-term and long-term disability. Employees may be eligible for performance-based bonuses tied to both individual achievement and company milestones. Tiger supports you, your work, and your future with a 401(k) and company matching contributions, diverse investment options, and financial planning support.
              </p>
            </div>
          </div>
          <div className="space-y-4 rounded-[12px] bg-[#fbfcff] p-8">
            <Building2Icon className="size-6 text-[#D5101F]" />
            <div className="space-y-3">
              <h3 className="font-display text-lg font-light text-[#231010] tracking-tight">Modern Workplace</h3>
              <p className="text-[14.6px] font-light text-[#231010] leading-[26px]">
                Our modern workplace is built to support high-performance science and purposeful innovation. Our laboratories and collaboration spaces are designed for seamless integration between research, data analysis, and cross-functional teamwork. A culture of transparency, integrity, and continuous learning guides our approach, with regular technical exchanges and company-wide communication that keep everyone aligned and engaged. Our workspace is thoughtfully structured to support focus, collaboration, and well-being, featuring well-equipped labs, dedicated project areas, and spaces for quiet work and connection.
              </p>
            </div>
          </div>
        </div>
      </TigerSection>

      {/* Contact CTA */}
      <TigerSection width="narrow" bg="white" className="py-16 md:py-24">
        <div className="rounded-[12px] bg-[#e6e2dc] p-12 md:p-16 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-light text-[#231010] tracking-tight">Ready to Join Our Team?</h2>
          <p className="mt-4 text-[14.6px] font-light text-[#231010] leading-[26px] max-w-2xl mx-auto">
            Contact our team to learn about career opportunities at Tiger BioSciences.
          </p>
          <div className="mt-8 flex justify-center">
            <TigerButton href="https://jobs.tigerbiosciences.com" external arrow>View Open Positions</TigerButton>
          </div>
        </div>
      </TigerSection>
    </main>
  );
}
