import { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  title?: string;
  description?: string;
}

export function Section({ children, className, title, description }: SectionProps) {
  return (
    <section className={cn("py-10 md:py-[76px]", className)}>
      <div className="container mx-auto max-w-7xl px-8 md:px-12">
        {(title || description) && (
          <div className="mb-16 text-center md:mb-20">
            {title && (
              <h2 className="text-h1 font-light tracking-[-0.015em] text-foreground/90 mb-6">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-lg text-muted-foreground mx-auto max-w-2xl leading-relaxed" style={{ textAlign: 'center' }}>
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

