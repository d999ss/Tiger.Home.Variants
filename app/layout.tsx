import type { Metadata } from "next";
import localFont from "next/font/local";

import { ClientLayout } from "@/components/site/ClientLayout";

import "./globals.css";

const inter = localFont({
  src: [
    { path: "../public/fonts/NeueMontreal-Regular.otf", weight: "400", style: "normal" },
    { path: "../public/fonts/NeueMontreal-Medium.otf", weight: "500", style: "normal" },
  ],
  variable: "--font-inter",
  display: "swap",
});

const archivo = localFont({
  src: [
    { path: "../public/fonts/Neuropa-Medium.otf", weight: "500", style: "normal" },
  ],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://projectluna-bttr.vercel.app"),
  title: "Tiger BioSciences™ - Medical Technology Innovation",
  description: "Global leader in medical technology, delivering cutting-edge solutions for clinicians worldwide",
  openGraph: {
    title: "Tiger BioSciences™",
    description: "Global leader in medical technology, delivering cutting-edge solutions for clinicians worldwide",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Tiger BioSciences" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tiger BioSciences™",
    description: "Global leader in medical technology, delivering cutting-edge solutions for clinicians worldwide",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`light ${inter.variable} ${archivo.variable}`} style={{ colorScheme: "light" }}>
      <head>
        <link rel="preload" href="/fonts/ABCArizonaPlusVariable.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/ABCArizonaSerif-normal-300-100.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
      </head>
      <body
        className="min-h-screen bg-background text-foreground antialiased light"
        style={{ colorScheme: "light" }}
      >
        {/* Fixed radial gradient background - neutral tones */}
        <div className="fixed inset-0 -z-50">
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(0,0,0,0.08),_transparent_50%),radial-gradient(circle_at_80%_20%,_rgba(0,0,0,0.05),_transparent_50%)]"
          />
        </div>

        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
