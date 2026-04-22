'use client';

import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface UsersIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

export function UsersIcon({ className, size = 28, ...props }: UsersIconProps) {
  return (
    <div className={cn("group/icon", className)} {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path
          d="M22 21v-2a4 4 0 0 0-3-3.87"
          className="transition-all duration-300 group-hover/icon:translate-x-1 group-hover/icon:stroke-[2.5]"
        />
        <path
          d="M16 3.13a4 4 0 0 1 0 7.75"
          className="transition-all duration-300 group-hover/icon:translate-x-1 group-hover/icon:stroke-[2.5]"
        />
      </svg>
    </div>
  );
}
