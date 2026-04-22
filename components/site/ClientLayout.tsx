'use client';

import { usePathname } from 'next/navigation';
import { Nav } from '@/components/site/Nav';
import { Footer } from '@/components/site/Footer';
import { ScrollAnimations } from '@/components/site/ScrollAnimations';
import { SmoothScroll } from '@/components/site/SmoothScroll';


const STANDALONE_ROUTES = ['/style', '/home-variants', '/home-variant-'];

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isStandalone = STANDALONE_ROUTES.some((r) => pathname.startsWith(r));

  if (isStandalone) {
    return <>{children}</>;
  }

  return (
    <div className="transition-opacity duration-700 opacity-100">
      <SmoothScroll />
      <ScrollAnimations />
      <Nav />
      {children}
      <Footer />
    </div>
  );
}
