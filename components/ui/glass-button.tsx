"use client";

import * as React from "react";
import { Button, ButtonProps } from "./button";
import { cn } from "@/lib/utils";

export type GlassButtonProps = ButtonProps & {
  withShine?: boolean;
  colored?: boolean;
};

export function GlassButton({
  children,
  className,
  withShine = true,
  colored = false,
  ...props
}: GlassButtonProps) {
  return (
    <Button
      variant="glass"
      radius="8"
      className={cn(
        "relative overflow-hidden",
        colored && "glass-button-colored",
        className
      )}
      {...props}
    >
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
      {withShine && (
        <div className="glass-button-shine absolute inset-0 pointer-events-none" />
      )}
    </Button>
  );
}
