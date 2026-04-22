"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { leaders, departments } from "./leaders-data";

export default function LeadershipPage() {
  const [selectedDepartment, setSelectedDepartment] = useState<string>("All");

  // Separate Co-CEOs for featured section
  const coCEOs = leaders.filter(leader =>
    leader.title.includes("Co-Chief Executive Officer")
  );

  // Other leaders (excluding Co-CEOs)
  const otherLeaders = leaders.filter(leader =>
    !leader.title.includes("Co-Chief Executive Officer")
  );

  // If Executive Leadership is selected, show Co-CEOs. Otherwise filter otherLeaders
  const filteredLeaders = selectedDepartment === "Executive Leadership"
    ? coCEOs
    : selectedDepartment === "All"
    ? otherLeaders
    : otherLeaders.filter(leader => leader.department === selectedDepartment);

  return (
    <main className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-10 py-12 md:py-16 pb-24 md:pb-32 mt-16">
      {/* Header */}
      <header className="mb-12 space-y-4 animate-appear">
        <h1 className="font-display font-light text-[#231010] text-[clamp(36px,6vw,64px)] tracking-[-1px] leading-[1.02]">Leadership</h1>
        <p className="text-[14.6px] font-light text-[#231010] leading-[26px] max-w-3xl">
          Our executive team brings decades of experience in regenerative medicine, medical devices, and healthcare innovation. With proven track records at leading global healthcare organizations, our executives guide our mission to advance patient care through science-backed solutions. Their combined expertise spans tissue engineering, clinical research, regulatory affairs, and commercial excellence—driving growth while maintaining our unwavering commitment to quality and safety.
        </p>
      </header>

      {/* Featured Co-CEOs - hide when Executive Leadership filter is active */}
      {selectedDepartment !== "Executive Leadership" && (
        <section className="mb-16 opacity-0 animate-appear" style={{ animationDelay: '0.1s' }}>
          <div className="space-y-8">
          {coCEOs.map((ceo) => (
            <Link
              key={ceo.slug}
              href={`/company/leadership/${ceo.slug}`}
              className="group block"
            >
              <div className="rounded-[12px] py-8 pr-8 md:py-10 md:pr-10 transition-all duration-500 hover:-translate-y-1">
                <div className="flex flex-col md:flex-row gap-8 md:items-center">
                  {/* CEO Image */}
                  <div className="w-full md:w-64 shrink-0">
                    <div className="relative aspect-[3/4] overflow-hidden rounded-[12px]">
                      <Image
                        src={ceo.image}
                        alt={ceo.name}
                        fill
                        sizes="(min-width: 768px) 256px, 100vw"
                        className="object-cover object-top grayscale-[20%] sepia-[8%] transition-transform duration-500 group-hover:scale-105 group-hover:origin-bottom"
                      />
                    </div>
                  </div>

                  {/* CEO Info */}
                  <div className="flex-1 space-y-5 max-w-2xl">
                    <div>
                      <div className="text-[12px] font-normal uppercase tracking-[3.15px] text-[#231010]/40 mb-3">
                        {ceo.department}
                      </div>
                      <h3 className="font-display font-light text-[32px] tracking-[-0.22px] text-[#231010] group-hover:text-[#231010]/60 transition-colors mb-2">
                        {ceo.name}
                      </h3>
                      <p className="text-[14.6px] font-light text-[#231010] leading-[26px]">
                        {ceo.title}
                      </p>
                    </div>
                    <p className="text-[13px] font-light text-[#231010] leading-[22.75px] line-clamp-3">
                      {ceo.bio.split('\n\n')[0]}
                    </p>
                    <div className="inline-flex items-center gap-2 text-[13px] font-medium text-[#231010]">
                      View Full Profile
                      <svg className="size-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      )}

      {/* Department Filter */}
      <div className="mb-10 animate-appear" style={{ animationDelay: '0.1s' }}>
        <div className="flex flex-wrap gap-3">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setSelectedDepartment(dept)}
              className={`px-7 py-[15px] rounded-[4px] text-[13px] font-normal tracking-[0.35px] transition duration-[0.25s] ease ${
                selectedDepartment === dept
                  ? "bg-[#D5101F] text-[#fbfcff]"
                  : "border border-[#D5101F]/20 text-[#231010] hover:bg-[#D5101F] hover:text-[#fbfcff]"
              }`}
            >
              {dept}
              {selectedDepartment === dept && (
                <span className="ml-2 text-xs opacity-80">
                  ({leaders.filter(l => dept === "All" || l.department === dept).length})
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Leadership Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
        {filteredLeaders.map((leader, index) => (
          <Link
            key={leader.slug}
            href={`/company/leadership/${leader.slug}`}
            className="group opacity-0 animate-appear block"
            style={{ animationDelay: `${0.2 + index * 0.05}s` }}
          >
            {/* Image */}
            <div className="relative aspect-[3/4] overflow-hidden rounded-[12px] mb-6">
              <Image
                src={leader.image}
                alt={leader.name}
                fill
                priority={index < 4}
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover object-top grayscale-[20%] sepia-[8%] transition-transform duration-500 group-hover:scale-105 group-hover:origin-bottom"
              />
            </div>

            {/* Info */}
            <div className="space-y-2">
              <h3 className="font-display text-xl font-light tracking-tight text-[#231010] group-hover:text-[#231010]/60 transition-colors duration-300">
                {leader.name}
              </h3>
              <p className="text-[13px] text-[#231010] leading-relaxed font-light">
                {leader.title}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Empty State */}
      {filteredLeaders.length === 0 && (
        <div className="text-center py-32 opacity-0 animate-appear">
          <p className="text-[#231010] text-lg mb-4">No team members found in this department</p>
          <button
            onClick={() => setSelectedDepartment("All")}
            className="text-[#231010] font-medium hover:underline text-sm"
          >
            View all team members
          </button>
        </div>
      )}
    </main>
  );
}
