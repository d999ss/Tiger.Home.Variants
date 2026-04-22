import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Vision - Tiger BioSciences",
  description: "The vision, values, and commitment that drive Tiger BioSciences in regenerative medicine.",
};

export default function CredoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
