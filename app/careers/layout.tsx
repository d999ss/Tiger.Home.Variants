import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers - Tiger BioSciences",
  description: "Build your career at Tiger BioSciences. Explore opportunities in regenerative medicine, aesthetics, and medical technology.",
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
