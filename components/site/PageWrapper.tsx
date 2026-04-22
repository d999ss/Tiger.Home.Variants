import { ReactNode } from "react";

interface PageWrapperProps {
  children: ReactNode;
  className?: string;
}

/**
 * PageWrapper Component
 *
 * Provides consistent top spacing for all pages to account for the fixed navigation.
 * Uses pt-20 (80px) on mobile and pt-24 (96px) on desktop.
 *
 * Usage:
 * <PageWrapper>
 *   <div className="container mx-auto">
 *     Your content here
 *   </div>
 * </PageWrapper>
 */
export function PageWrapper({ children, className = "" }: PageWrapperProps) {
  return (
    <main className={`pt-20 md:pt-24 ${className}`}>
      {children}
    </main>
  );
}
