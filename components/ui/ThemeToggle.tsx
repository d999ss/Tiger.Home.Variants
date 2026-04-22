"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

interface ThemeToggleProps {
  variant?: "default" | "light"
}

export function ThemeToggle({ variant = "default" }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const isLight = variant === "light"

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button className={`flex size-9 items-center justify-center rounded-full border ${isLight ? 'border-white/30 bg-white/10' : 'border-border bg-background/50'}`}>
        <Sun className={`size-4 ${isLight ? 'text-white' : ''}`} />
      </button>
    )
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={`flex size-9 items-center justify-center rounded-full border transition-colors ${isLight ? 'border-white/30 bg-white/10 hover:bg-white/20 text-white' : 'border-border bg-background/50 hover:bg-background/80'}`}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="size-4" />
      ) : (
        <Moon className="size-4" />
      )}
    </button>
  )
}

