"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useState, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CarouselProps {
  children: ReactNode[];
  className?: string;
}

export function Carousel({ children, className }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={cn("relative", className)}>
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {children.map((child, index) => (
            <div key={index} className="min-w-full">
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/80 backdrop-blur-sm border border-border p-3 hover:bg-background transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeftIcon className="size-6" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/80 backdrop-blur-sm border border-border p-3 hover:bg-background transition-colors"
        aria-label="Next slide"
      >
        <ChevronRightIcon className="size-6" />
      </button>
    </div>
  );
}

export function CarouselItem({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("px-4", className)}>{children}</div>;
}
