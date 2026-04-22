import * as React from "react"
import { Slot } from "@radix-ui/react-slot"

import { designTokens } from "@/lib/design-tokens"
import { cn } from "@/lib/utils"

const buttonTokens = designTokens.components.buttons

type Variant = keyof typeof buttonTokens.variants
type Size = keyof typeof buttonTokens.sizes
type Radius = keyof typeof buttonTokens.radii

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
  size?: Size
  radius?: Radius
  asChild?: boolean
}

export function Button({
  variant = "default",
  size = "sm",
  radius = "8",
  className,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button"

  const sizeClasses = buttonTokens.sizes[size] ?? ""
  const radiusClasses = buttonTokens.radii[radius] ?? ""
  const variantClasses = buttonTokens.variants[variant]?.className ?? buttonTokens.variants.default.className

  return (
    <Comp
      className={cn(buttonTokens.base, sizeClasses, radiusClasses, variantClasses, className)}
      {...props}
    />
  )
}
