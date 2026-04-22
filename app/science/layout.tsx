import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Science - Tiger BioSciences",
  description: "Explore the science behind Tiger BioSciences products, clinical research, and regenerative medicine innovation.",
};

export default function ScienceLayout({ children }: { children: React.ReactNode }) {
  return children;
}
