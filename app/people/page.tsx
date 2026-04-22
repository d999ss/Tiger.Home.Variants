"use client";

import Link from "next/link";
import Image from "next/image";
import {
  UsersIcon,
  TrendingUpIcon,
  HeartIcon,
  GlobeIcon,
  ActivityIcon,
  DollarSignIcon,
  Building2Icon,
} from "lucide-react";
import { TigerButton } from "@/components/ui/tiger-button";
import { TigerSection } from "@/components/ui/tiger-section";
import { SectionHeader } from "@/components/ui/section-header";

const values = [
  {
    icon: HeartIcon,
    title: "Purpose-Driven Work",
    description:
      "Every day, your work directly impacts patient lives and advances healthcare innovation",
  },
  {
    icon: TrendingUpIcon,
    title: "Career Development",
    description:
      "Clear advancement paths, mentorship programs, and continuous learning opportunities",
  },
  {
    icon: UsersIcon,
    title: "Collaborative Environment",
    description:
      "Work with world-class scientists, engineers, and professionals in a supportive culture",
  },
  {
    icon: GlobeIcon,
    title: "Global Reach",
    description:
      "Your contributions reach healthcare providers and patients across the world",
  },
];

const careerAreas = [
  {
    title: "Research & Development",
    href: "/careers/jobs#research",
    image: "/images/tiger-assets/research-development.png",
    description:
      "Drive innovation in tissue engineering, biomaterials, and regenerative medicine technologies",
  },
  {
    title: "Clinical & Medical Affairs",
    href: "/careers/jobs#clinical",
    image: "/images/tiger-assets/clinical-medical-affairs.png",
    description:
      "Advance clinical evidence and provide medical education to healthcare providers",
  },
  {
    title: "Commercial & Operations",
    href: "/careers/jobs#commercial",
    image: "/images/press/wisconsin-facility.png",
    description:
      "Connect healthcare providers with innovative solutions and ensure operational excellence",
  },
];

const benefits = [
  {
    icon: ActivityIcon,
    title: "Health & Wellness",
    description:
      "Comprehensive medical, dental, and vision coverage with access to leading healthcare networks, ensuring proactive and personalized care for employees and their families. Preventive health services, on-site or virtual wellness consultations, and biometric screenings empower individuals to take charge of their long-term health. To foster mental resilience and work–life balance, we provide confidential mental-health support, reimbursement, discount, and employee assistance programs.",
  },
  {
    icon: DollarSignIcon,
    title: "Financial Security",
    description:
      "Recognizing that financial stability is a core part of overall well-being, we offer competitive salaries, health savings accounts, and employer-paid basic life insurance, AD&D, short-term and long-term disability. Employees may be eligible for performance-based bonuses tied to both individual achievement and company milestones. Tiger supports you, your work, and your future with a 401(k) and company matching contributions, diverse investment options, and financial planning support.",
  },
  {
    icon: Building2Icon,
    title: "Modern Workplace",
    description:
      "Our modern workplace is built to support high-performance science and purposeful innovation. Our laboratories and collaboration spaces are designed for seamless integration between research, data analysis, and cross-functional teamwork. A culture of transparency, integrity, and continuous learning guides our approach, with regular technical exchanges and company-wide communication that keep everyone aligned and engaged. Our workspace is thoughtfully structured to support focus, collaboration, and well-being, featuring well-equipped labs, dedicated project areas, and spaces for quiet work and connection.",
  },
];

export default function People() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#efedea]">
      <section className="relative flex min-h-[100dvh] w-full items-end overflow-hidden pb-6 md:h-[860px] md:items-center md:pb-0">
        <Image
          src="/images/tiger-assets/careers.png"
          alt="People at Tiger BioSciences"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="pointer-events-none absolute inset-0 bg-[#efedea]/32" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(239,237,234,0.95) 0%, rgba(239,237,234,0.84) 34%, rgba(239,237,234,0.28) 68%, rgba(239,237,234,0.08) 100%)",
          }}
        />
        <div
          className="pointer-events-none absolute right-0 bottom-0 left-0 h-[48%]"
          style={{
            background:
              "linear-gradient(to top, #efedea 0%, rgba(239,237,234,0.84) 34%, rgba(239,237,234,0) 100%)",
          }}
        />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-14">
          <div className="w-full max-w-[680px] space-y-4 rounded-[12px] bg-[#efedea]/68 p-6 backdrop-blur-sm md:space-y-6 md:p-10">
            <div className="flex items-center gap-2 uppercase text-[#231010]/58">
              <span className="font-[Neuropa] text-[16px] leading-[24px]">
                Tiger BioSciences
              </span>
              <span className="font-[Archivo] text-[8px] font-medium tracking-[-0.4px]">
                &trade;
              </span>
              <span className="text-[12px] font-normal tracking-[3px]">
                People
              </span>
            </div>
            <h1 className="font-display text-[clamp(32px,5.5vw,80px)] leading-[1.02] md:leading-[0.9] font-light tracking-[-1.28px] text-[#231010]">
              People at Tiger BioSciences
            </h1>
            <p className="max-w-[560px] text-[18px] leading-[1.6] font-light text-[#231010]">
              Join a team of innovators advancing biotechnology through science,
              integrity, and excellence. Make a meaningful impact on patient
              care and healthcare outcomes worldwide.
            </p>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
              <TigerButton href="/careers" arrow>
                Explore Careers
              </TigerButton>
              <TigerButton href="#areas" variant="glass">
                Career Areas
              </TigerButton>
            </div>
          </div>
        </div>
      </section>

      <TigerSection width="wide">
        <SectionHeader
          label="Why Tiger BioSciences"
          heading="A team built around purpose, growth, and collaboration"
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div key={value.title} className="space-y-4 rounded-[12px] bg-[#fbfcff] p-8">
                <Icon className="size-6 text-[#D5101F]" />
                <div className="space-y-2">
                  <h3 className="font-display text-xl font-light tracking-tight text-[#231010]">
                    {value.title}
                  </h3>
                  <p className="text-[14.6px] leading-[26px] font-light text-[#231010]">
                    {value.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </TigerSection>

      <TigerSection id="areas" width="wide" bg="white">
        <SectionHeader
          label="Explore Career Areas"
          heading="Find your place in our mission"
        />
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {careerAreas.map((area) => (
            <div key={area.title} className="group space-y-6">
              <Link
                href={area.href}
                aria-label={`Explore ${area.title} careers`}
                className="block relative overflow-hidden rounded-[12px] aspect-[4/3] cursor-pointer"
              >
                <Image
                  src={area.image}
                  alt={area.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#231010]/24 to-transparent" />
              </Link>
              <div className="space-y-3">
                <h3 className="font-display text-xl md:text-2xl font-light tracking-tight text-[#231010]">
                  {area.title}
                </h3>
                <p className="text-[14.6px] leading-[26px] font-light text-[#231010]">
                  {area.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </TigerSection>

      <TigerSection width="wide">
        <SectionHeader label="Why Tiger BioSciences" heading="What Tiger supports" />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div key={benefit.title} className="space-y-4 rounded-[12px] bg-[#fbfcff] p-8">
                <Icon className="size-6 text-[#D5101F]" />
                <div className="space-y-3">
                  <h3 className="font-display text-lg font-light tracking-tight text-[#231010]">
                    {benefit.title}
                  </h3>
                  <p className="text-[14.6px] leading-[26px] font-light text-[#231010]">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </TigerSection>

      <TigerSection width="narrow" bg="white">
        <div className="text-center">
          <span className="mb-8 inline-block text-[12px] leading-[15.3px] font-normal tracking-[3.15px] text-[#231010]/40 uppercase">
            Ready to Join Our Team
          </span>
          <h2
            className="font-display mb-8 leading-[1.02] font-light tracking-[-1px] text-[#231010]"
            style={{ fontSize: "clamp(36px, 3.3vw, 47.5px)" }}
          >
            Ready to Join Our Team?
          </h2>
          <p className="mx-auto mb-10 max-w-[672px] text-[14.6px] leading-[26px] font-light text-[#231010]">
            Contact our team to learn about career opportunities at Tiger
            BioSciences.
          </p>
          <div className="flex justify-center">
            <TigerButton href="https://jobs.tigerbiosciences.com" external arrow>
              View Open Positions
            </TigerButton>
          </div>
        </div>
      </TigerSection>
    </main>
  );
}
