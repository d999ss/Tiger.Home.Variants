/* eslint-disable no-restricted-syntax */
"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronUp, ChevronDown, ArrowUp, ExternalLink } from "lucide-react";

interface Product {
  slug: string;
  title: string;
  subtitle: string;
  division: string;
  company: string;
  status: string;
  hasContent: boolean;
  heroImage: string;
  overview: string;
  contentSections: {
    overview: boolean;
    benefits: boolean;
    mechanismOfAction: boolean;
    clinicalValidation: boolean;
    regulatoryStatus: boolean;
    intendedUse: boolean;
    compatibleTreatments: boolean;
    technologyPlatform: boolean;
    manufacturingExcellence: boolean;
    clinicalApplications: boolean;
    treatmentProtocol: boolean;
    clinicalEvidence: boolean;
  };
  completionPercentage: number;
  characterCount: number;
}

interface ProductInventoryClientProps {
  initialProducts: Product[];
}

export default function ProductInventoryClient({ initialProducts }: ProductInventoryClientProps) {
  const [sortColumn, setSortColumn] = useState<keyof Product>("status");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Handle scroll for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSort = (column: keyof Product) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  // Trello card ID mapping for products (excludes biocare and regentx - they are companies, not products)
  const trelloCardMap = useMemo(() => ({
    "alloclae": "69161f7bb9b5c45c0aae2997",
    "amplifine": "69161f7d78171cf21ed1b5b9",
    "aveli": "69161f7c52a17caa822c081a",
    "bellafill": "69161f7c2b990ddd0cf87340",
    "caregraft": "69161f7a9dccbc13e840722f",
    "completeft": "691a7a2ca81d69bd32947703",
    "expanders": "69161fc4f71f43702edb83c4",
    "healpack": "691a7a46f9b95ad2db6cc769",
    "silhouette": "69161f7d0874c9ac31416a5d",
    "viality": "69161f7c586b82820ea58435"
  }), []);

  const sortedProducts = useMemo(() => {
    // Filter to only show products with Trello cards
    const filtered = initialProducts.filter(p => trelloCardMap[p.slug]);

    return filtered.sort((a, b) => {
      let aVal = a[sortColumn];
      let bVal = b[sortColumn];

      // Handle boolean values
      if (typeof aVal === "boolean") {
        aVal = aVal ? "1" : "0";
        bVal = bVal ? "1" : "0";
      }

      const comparison = String(aVal).localeCompare(String(bVal));
      return sortDirection === "asc" ? comparison : -comparison;
    });
  }, [initialProducts, sortColumn, sortDirection, trelloCardMap]);

  const products = sortedProducts;
  const approved = products.filter((p) => p.status === "Approved").length;
  const needContent = products.filter((p) => p.status === "Need Content").length;
  const inReview = products.filter((p) => p.status === "In Review").length;

  // Calculate overall completion percentage
  const totalProducts = initialProducts.filter(p => trelloCardMap[p.slug]).length;
  const completionPercentage = totalProducts > 0 ? Math.round((approved / totalProducts) * 100) : 0;

  // Export to CSV function
  const exportToCSV = () => {
    const headers = ["Product Name", "Division", "Status"];
    const rows = products.map(p => [
      p.title,
      p.division || "",
      p.status || "Need Content"
    ]);

    const csvContent = [
      headers.join(","),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(","))
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `product-inventory-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-10 py-24">
      <div className="mb-12 animate-appear" style={{ animationDelay: '0.1s' }}>
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="font-display text-4xl md:text-5xl font-light mb-2 animate-appear">
              Tiger Product Tracker
            </h1>
            <p className="text-sm text-muted-foreground font-normal animate-appear" style={{ animationDelay: '0.2s' }}>
              {totalProducts} products · {approved} approved · {inReview} in review · {needContent} pending
            </p>
          </div>
          <button
            onClick={exportToCSV}
            className="px-4 py-2 border border-border text-foreground/70 rounded-lg hover:bg-muted hover:text-foreground hover:scale-105 transition-all text-sm font-normal focus:outline-none focus:ring-2 focus:ring-brand/40 animate-appear"
            style={{ animationDelay: '0.3s' }}
          >
            Export CSV
          </button>
        </div>

        {/* Tiger and Progress Bar */}
        <div className="flex items-center gap-4 mb-8 animate-appear" style={{ animationDelay: '0.35s' }}>
          <Image
            src="/tiger.gif"
            alt="Tiger"
            width={96}
            height={96}
            className="flex-shrink-0"
            unoptimized
          />
          <div className="flex-1 bg-muted/30 rounded-lg p-4">
            <div className="flex items-center justify-between text-sm mb-3">
              <span className="font-medium text-foreground/90">Overall Progress</span>
              <span className="text-muted-foreground font-normal">{completionPercentage}% complete</span>
            </div>
            <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-green-600 transition-all duration-1000 ease-out animate-progress"
                style={{ width: `${completionPercentage}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="border border-border rounded-lg overflow-hidden mt-8 animate-appear" style={{ animationDelay: '0.5s' }}>
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-muted/30 animate-appear" style={{ animationDelay: '0.6s' }}>
              <th
                className="px-6 py-3.5 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider cursor-pointer hover:text-foreground transition-colors select-none"
                onClick={() => handleSort("title")}
              >
                <div className="flex items-center gap-2">
                  <span>Product</span>
                  {sortColumn === "title" && (
                    sortDirection === "asc" ? <ChevronUp className="size-3.5" /> : <ChevronDown className="size-3.5" />
                  )}
                </div>
              </th>
              <th
                className="px-6 py-3.5 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider cursor-pointer hover:text-foreground transition-colors select-none"
                onClick={() => handleSort("division")}
              >
                <div className="flex items-center gap-2">
                  <span>Division</span>
                  {sortColumn === "division" && (
                    sortDirection === "asc" ? <ChevronUp className="size-3.5" /> : <ChevronDown className="size-3.5" />
                  )}
                </div>
              </th>
              <th
                className="px-6 py-3.5 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider cursor-pointer hover:text-foreground transition-colors select-none"
                onClick={() => handleSort("completionPercentage")}
              >
                <div className="flex items-center gap-2">
                  <span>Completion</span>
                  {sortColumn === "completionPercentage" && (
                    sortDirection === "asc" ? <ChevronUp className="size-3.5" /> : <ChevronDown className="size-3.5" />
                  )}
                </div>
              </th>
              <th
                className="px-6 py-3.5 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider cursor-pointer hover:text-foreground transition-colors select-none"
                onClick={() => handleSort("status")}
              >
                <div className="flex items-center gap-2">
                  <span>Status</span>
                  {sortColumn === "status" && (
                    sortDirection === "asc" ? <ChevronUp className="size-3.5" /> : <ChevronDown className="size-3.5" />
                  )}
                </div>
              </th>
              <th className="px-6 py-3.5 text-right text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border bg-background">
            {products.map((product, index) => (
              <tr
                key={product.slug}
                className="group hover:bg-muted/30 hover:scale-[1.01] transition-all duration-200 animate-appear"
                style={{ animationDelay: `${0.7 + index * 0.05}s` }}
              >
                <td className="px-6 py-4">
                  <div className="flex flex-col gap-1">
                    <div className="text-sm font-medium text-foreground capitalize">
                      {product.title}
                    </div>
                    {product.subtitle && (
                      <div className="text-xs text-muted-foreground line-clamp-1">
                        {product.subtitle}
                      </div>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium capitalize ${
                      product.division === "wound"
                        ? "bg-wound/10 text-wound"
                        : product.division === "aesthetics"
                        ? "bg-aesthetics/10 text-aesthetics"
                        : product.division === "international"
                        ? "bg-international/10 text-international"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {product.division || "—"}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className="relative w-16 h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`absolute inset-y-0 left-0 rounded-full transition-all duration-500 ${
                          product.completionPercentage >= 80
                            ? "bg-green-600"
                            : product.completionPercentage >= 50
                            ? "bg-blue-600"
                            : product.completionPercentage >= 25
                            ? "bg-amber-600"
                            : "bg-red-600"
                        }`}
                        style={{ width: `${product.completionPercentage}%` }}
                      />
                    </div>
                    <span className="text-xs text-muted-foreground font-medium whitespace-nowrap w-8">
                      {product.completionPercentage}%
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span
                      className={`size-2 rounded-full animate-pulse flex-shrink-0 ${
                        product.status === "Approved"
                          ? "bg-green-600"
                          : product.status === "In Review"
                          ? "bg-blue-600"
                          : "bg-red-600"
                      }`}
                    />
                    <span className="text-sm text-foreground/90 whitespace-nowrap">
                      {product.status === "Approved"
                        ? "Ready"
                        : product.status === "In Review"
                        ? "In Review"
                        : "Additional Content Needed"}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-end gap-3">
                    <a
                      href={`https://trello.com/c/${trelloCardMap[product.slug]}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground hover:scale-105 transition-all duration-200 whitespace-nowrap"
                    >
                      <span>Trello</span>
                      <ExternalLink className="size-3 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                    <Link
                      href={`/products/${product.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs text-brand hover:text-brand/80 hover:scale-105 transition-all duration-200 font-medium whitespace-nowrap"
                    >
                      <span>View Page</span>
                      <ExternalLink className="size-3 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 border border-border bg-background text-foreground/70 rounded-full hover:bg-muted hover:text-foreground hover:scale-110 hover:-translate-y-1 transition-all duration-300 z-50 focus:outline-none focus:ring-2 focus:ring-brand/40 shadow-lg animate-appear"
          aria-label="Back to top"
        >
          <ArrowUp className="size-5 animate-bounce" />
        </button>
      )}
    </div>
  );
}
