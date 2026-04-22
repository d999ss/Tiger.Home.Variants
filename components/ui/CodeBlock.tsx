"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"

interface CodeBlockProps {
  code: string
  language?: string
  filename?: string
}

export function CodeBlock({ code, language = "tsx", filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative group">
      <div className="rounded-[12px] border border-black/[0.06] bg-muted/40 overflow-hidden">
        {/* Header with filename and copy button */}
        <div className="flex items-center justify-between px-4 py-2 border-b border-black/[0.06] bg-muted/60">
          <div className="flex items-center gap-2">
            {filename && (
              <span className="text-xs font-mono text-foreground/70">{filename}</span>
            )}
            {!filename && language && (
              <span className="text-xs font-mono text-muted-foreground">{language}</span>
            )}
          </div>
          <button
            onClick={copyToClipboard}
            className="p-1.5 rounded-[8px] hover:bg-background/60 transition-all duration-200 opacity-0 group-hover:opacity-100"
            aria-label="Copy code"
          >
            {copied ? (
              <Check className="size-3.5 text-brand" />
            ) : (
              <Copy className="size-3.5 text-muted-foreground" />
            )}
          </button>
        </div>

        {/* Code content */}
        <pre className="p-4 overflow-x-auto text-xs font-mono leading-relaxed">
          <code className="text-foreground/90">{code}</code>
        </pre>
      </div>
    </div>
  )
}
