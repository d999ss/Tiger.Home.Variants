import { ReactNode } from "react";
import { Card, CardBody } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value?: string | number;
  description?: string;
  icon?: ReactNode;
  children?: ReactNode;
}

export function StatCard({ title, value, description, icon, children }: StatCardProps) {
  return (
    <Card className="group transition-all duration-300 hover:border-brand/40">
      <CardBody>
        {/* Icon */}
        {icon && (
          <div className="mb-4 flex size-12 items-center justify-center rounded-[12px] bg-brand/10 border border-brand/20">
            {icon}
          </div>
        )}

        {/* Content */}
        <div className="space-y-2">
          {value && (
            <div className="text-4xl font-display font-light text-brand md:text-5xl">
              {value}
            </div>
          )}
          <h3 className="font-display text-lg font-medium tracking-tight text-foreground">{title}</h3>
          {description && (
            <p className="font-body text-sm leading-relaxed text-muted-foreground">
              {description}
            </p>
          )}
          {children}
        </div>
      </CardBody>
    </Card>
  );
}

