import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="opacity-0 animate-appear">
      <ol className="flex items-center gap-2 text-sm font-light">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center gap-2">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="text-muted-foreground hover:text-brand transition-colors duration-300"
                >
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? "text-foreground" : "text-muted-foreground"}>
                  {item.label}
                </span>
              )}

              {!isLast && (
                <ChevronRight className="size-3.5 text-muted-foreground/50" />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
