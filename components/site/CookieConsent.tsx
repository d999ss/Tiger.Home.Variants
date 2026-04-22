"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Shield, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    try {
      const hasConsented = localStorage.getItem("cookieConsent")
      if (!hasConsented) {
        setTimeout(() => setIsVisible(true), 1000)
      }
    } catch {
      // localStorage unavailable (private browsing)
    }
  }, [])

  const handleAccept = () => {
    try { localStorage.setItem("cookieConsent", "accepted") } catch {}
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined")
    setIsVisible(false)
  }

  const handleClose = () => {
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 w-full"
        >
          {/* Glassmorphic container */}
          <div className="relative bg-black/40 backdrop-blur-[21px] border-t border-white/20 px-8 md:px-12 py-6 md:py-8">
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-8 md:right-12 p-1.5 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Close"
            >
              <X className="size-4 text-white/80" />
            </button>

            {/* Content */}
            <div className="container mx-auto max-w-7xl">
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                {/* Icon */}
                <div className="shrink-0 p-3 rounded-full bg-white/10 border border-white/20">
                  <Shield className="size-6 text-white" />
                </div>

                {/* Text */}
                <div className="flex-1 space-y-2">
                  <h3 className="text-lg font-medium text-white">
                    We value your privacy
                  </h3>
                  <p className="text-sm font-light text-white/80 leading-relaxed">
                    We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic.
                    By clicking &ldquo;Accept All&rdquo;, you consent to our use of cookies.{" "}
                    <a
                      href="/privacy"
                      className="text-white/90 hover:text-white transition-colors underline"
                    >
                      View our Privacy Policy
                    </a>
                  </p>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleDecline}
                    className="whitespace-nowrap !border-white/30 !text-white hover:!bg-white/10"
                  >
                    Decline
                  </Button>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={handleAccept}
                    className="whitespace-nowrap"
                  >
                    Accept All
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
