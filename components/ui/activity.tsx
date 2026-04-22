'use client';

import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface ActivityIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

export function ActivityIcon({ className, size = 28, ...props }: ActivityIconProps) {
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
        <path
          d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"
          className="transition-all duration-300 group-hover/icon:stroke-[2.5]"
          style={{
            strokeDasharray: '100',
            strokeDashoffset: '0',
          }}
        />
      </svg>
    </div>
  );
}
