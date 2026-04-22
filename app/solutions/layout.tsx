import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions - Tiger BioSciences",
  description: "Advanced wound care, aesthetic, and surgical solutions from Tiger BioSciences.",
};

export default function SolutionsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
