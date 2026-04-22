import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Tiger BioSciences",
  description: "Get in touch with Tiger BioSciences for product inquiries, partnership opportunities, and clinical support.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
