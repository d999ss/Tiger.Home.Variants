"use client";

import Link from "next/link";
import Image from "next/image";
import { Linkedin, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

const footerNavigation = {
  company: [
    { name: "Our Vision", href: "/company/credo" },
    { name: "Company Overview", href: "/company/overview" },
    { name: "Leadership", href: "/company/leadership" },
    { name: "The Gift of Donation", href: "/company/donation" },
    { name: "Press Room", href: "/press" },
    { name: "Contact", href: "/contact" },
  ],
  expertise: [
    { name: "Wound Care Overview", href: "/solutions/wound-care" },
    { name: "Chronic Wound Care", href: "/solutions/wound" },
    { name: "Acute Wound Care", href: "/solutions/acute-wound-care" },
    { name: "Surgical Dressings", href: "/solutions/surgical-solutions" },
    { name: "Aesthetics Overview", href: "/solutions/aesthetics" },
    { name: "Face", href: "/solutions/face" },
    { name: "Breast", href: "/solutions/breast" },
    { name: "Body", href: "/solutions/body" },
    { name: "International Overview", href: "/solutions/international" },
    { name: "Global Partnerships", href: "/solutions/international/partnerships" },
    { name: "Distribution Networks", href: "/solutions/international/distribution" },
  ],
  products: [
    // Wound Care Solutions
    { name: "caregraFT™", href: "/products/caregraft" },
    { name: "carePATCH®", href: "/products/carepatch" },
    { name: "carePAC™", href: "/products/carepac" },
    { name: "completeFT®", href: "/products/completeft" },
    { name: "HealPACK™", href: "/products/healpack" },
    // Aesthetic Solutions
    { name: "alloClae™", href: "/products/alloclae" },
    { name: "Amplifine®", href: "/products/amplifine" },
    { name: "Avéli®", href: "/products/aveli" },
    { name: "Bellafill®", href: "/products/bellafill" },
    { name: "Breast Tissue Expanders", href: "/products/expanders" },
    { name: "Sientra®", href: "/products/sientra" },
    { name: "Viality®", href: "/products/viality" },
    { name: "Tiger Guard™", href: "/products/implant-delivery" },
    { name: "Tiger View™", href: "/products/retractor" },
    { name: "View All Products", href: "/products" },
  ],
  people: [
    { name: "Join Our Team", href: "/careers" },
    { name: "Life at Tiger", href: "/careers" },
    { name: "Benefits", href: "/careers" },
    { name: "Open Positions", href: "https://jobs.tigerbiosciences.com", external: true },
  ],
};

export function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 500px
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-white text-[rgba(0,0,0,0.95)] overflow-hidden">

      {/* Fixed Back to Top Button - Bottom Right Corner - Only shows after scrolling */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-40 flex items-center justify-center size-12 rounded-full bg-brand text-brand-foreground hover:brightness-110 transition-all duration-300 shadow-lg cursor-pointer ${
          showBackToTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Back to top"
      >
        <ArrowUp className="size-5" />
      </button>

      {/* Main Footer Content */}
      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 md:px-20 pt-32 pb-16">
        {/* Tiger Logo */}
        <div className="mb-12 md:mb-20">
          <Link href="/" className="inline-flex items-center gap-3 cursor-pointer">
            <div className="relative size-10 md:size-12">
              <Image
                src="/tiger-circle-logo.png"
                alt="Tiger BioSciences"
                fill
                sizes="(max-width: 768px) 40px, 48px"
                className="object-contain"
              />
            </div>
            <div className="font-[Neuropa-Light,Neuropa,Archivo] font-normal tracking-[-0.4px] text-base uppercase text-[rgba(0,0,0,0.95)]">
              Tiger BioSciences<sup className="text-[0.5em] -top-1.5">™</sup>
            </div>
          </Link>
        </div>

        {/* Navigation Grid - 4 Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-20 mb-24">
          {/* Company */}
          <div>
            <h3 className="mb-4 font-sans text-[11px] font-medium uppercase tracking-[2px] text-[#231010]/55">
              Company
            </h3>
            <ul className="space-y-3">
              {footerNavigation.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex min-h-11 items-center text-[13px] font-normal leading-[20px] text-[rgba(0,0,0,0.95)] transition-colors duration-200 hover:text-black"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Expertise */}
          <div>
            <h3 className="mb-4 font-sans text-[11px] font-medium uppercase tracking-[2px] leading-[20px] text-[#231010]/55">
              Expertise
            </h3>
            <ul className="space-y-3">
              {footerNavigation.expertise.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex min-h-11 items-center text-[13px] font-normal leading-[20px] text-[rgba(0,0,0,0.95)] transition-colors duration-200 hover:text-black"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="mb-4 font-sans text-[11px] font-medium uppercase tracking-[2px] leading-[20px] text-[#231010]/55">
              Products
            </h3>
            <ul className="space-y-3">
              {footerNavigation.products.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex min-h-11 items-center text-[13px] font-normal leading-[20px] text-[rgba(0,0,0,0.95)] transition-colors duration-200 hover:text-black"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* People */}
          <div>
            <h3 className="mb-4 font-sans text-[11px] font-medium uppercase tracking-[2px] leading-[20px] text-[#231010]/55">
              People
            </h3>
            <ul className="space-y-3">
              {footerNavigation.people.map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex min-h-11 items-center text-[13px] font-normal leading-[20px] text-[rgba(0,0,0,0.95)] transition-colors duration-200 hover:text-black"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="flex min-h-11 items-center text-[13px] font-normal leading-[20px] text-[rgba(0,0,0,0.95)] transition-colors duration-200 hover:text-black"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Legal Links and Copyright - Above Divider */}
        <div className="mt-16 flex flex-col gap-4">
          {/* Legal Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/privacy" className="text-[10.9px] font-normal text-[rgba(0,0,0,0.95)] hover:text-black transition-colors duration-200 cursor-pointer leading-[16px]">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-[10.9px] font-normal text-[rgba(0,0,0,0.95)] hover:text-black transition-colors duration-200 cursor-pointer leading-[16px]">
              Terms of Service
            </Link>
            <Link href="/compliance" className="text-[10.9px] font-normal text-[rgba(0,0,0,0.95)] hover:text-black transition-colors duration-200 cursor-pointer leading-[16px]">
              Compliance
            </Link>
            <Link href="/accessibility" className="text-[10.9px] font-normal text-[rgba(0,0,0,0.95)] hover:text-black transition-colors duration-200 cursor-pointer leading-[16px]">
              Accessibility
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-[10.9px] font-normal text-[rgba(0,0,0,0.95)] leading-[16px] pb-3">
            © {new Date().getFullYear()} Tiger BioSciences and its affiliates. All rights reserved.
          </p>
        </div>

        {/* Bottom Section - Social Links & Address */}
        <div className="pt-8 mt-8 border-t border-[rgba(0,0,0,0.4)]">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/tiger-biosciences-llc/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[rgba(0,0,0,0.4)] hover:text-[rgba(0,0,0,0.95)] transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="size-4" />
              </a>
            </div>
            <span className="text-[10.9px] font-normal text-[rgba(0,0,0,0.95)] leading-[16px]">
              Tiger BioSciences, Conshohocken, PA
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
