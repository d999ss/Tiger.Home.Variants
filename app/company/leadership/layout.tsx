import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leadership - Tiger BioSciences",
  description: "Meet the leadership team at Tiger BioSciences driving innovation in regenerative medicine and aesthetics.",
};

export default function LeadershipLayout({ children }: { children: React.ReactNode }) {
  return children;
}
