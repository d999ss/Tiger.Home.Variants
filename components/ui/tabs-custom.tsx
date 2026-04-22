"use client";

import { useState, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TabItem {
  label: ReactNode;
  content: ReactNode;
}

interface TabsCustomProps {
  items: TabItem[];
  className?: string;
}

export function TabsCustom({ items, className }: TabsCustomProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={cn("w-full", className)}>
      {/* Tab Headers */}
      <div className="flex flex-col gap-4 mb-8" role="tablist">
        {items.map((item, index) => (
          <button
            key={index}
            role="tab"
            aria-selected={activeTab === index}
            onClick={() => setActiveTab(index)}
            className={cn(
              "text-left p-6 rounded-xl border transition-all duration-300",
              activeTab === index
                ? "border-brand bg-brand/5"
                : "border-border bg-card hover:border-brand/50"
            )}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-8">
        {items.map((item, index) => (
          <div
            key={index}
            role="tabpanel"
            hidden={activeTab !== index}
            className={cn(
              "transition-opacity duration-300",
              activeTab === index ? "opacity-100" : "opacity-0"
            )}
          >
            {activeTab === index && item.content}
          </div>
        ))}
      </div>
    </div>
  );
}
