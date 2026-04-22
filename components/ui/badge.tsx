import * as React from "react"

import { designTokens } from "@/lib/design-tokens"
import { cn } from "@/lib/utils"

const badgeTokens = designTokens.components.badges

type StandardVariant = keyof typeof badgeTokens.variants
type SpecialVariant = keyof typeof badgeTokens.special
type AliasVariant = keyof typeof badgeTokens.aliases
type BadgeVariant = StandardVariant | SpecialVariant | AliasVariant
type BadgeSize = keyof typeof badgeTokens.sizes

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
  size?: BadgeSize
}

export function Badge({ variant = "default", size = "default", className, children, ...props }: BadgeProps) {
  const resolvedVariantKey =
    (badgeTokens.aliases[variant as AliasVariant] as BadgeVariant | undefined) ?? (variant as BadgeVariant)

  const variantConfig = badgeTokens.variants[resolvedVariantKey as StandardVariant]
  const specialConfig = badgeTokens.special[resolvedVariantKey as SpecialVariant]

  if (variantConfig) {
    const baseClasses = cn(
      badgeTokens.base,
      badgeTokens.sizes[size],
      variantConfig.className,
      className,
    )

    return (
      <span className={baseClasses} {...props}>
        {children}
      </span>
    )
  }

  if (specialConfig) {
    return (
      <span className={cn(specialConfig.className, className)} {...props}>
        {children}
      </span>
    )
  }

  const fallback = badgeTokens.variants.default
  return (
    <span
      className={cn(badgeTokens.base, badgeTokens.sizes[size], fallback.className, className)}
      {...props}
    >
      {children}
    </span>
  )
}
