import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Company - Tiger BioSciences",
  description: "Learn about Tiger BioSciences, our mission, vision, and commitment to regenerative medicine innovation.",
};

export default function CompanyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
