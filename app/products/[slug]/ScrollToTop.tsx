"use client";

import { useEffect } from "react";

export function ScrollToTop({ slug }: { slug: string }) {
  useEffect(() => {
    // Use requestAnimationFrame to ensure scroll happens after render
    // This prevents race conditions with Next.js navigation
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    });
  }, [slug]);

  return null;
}
