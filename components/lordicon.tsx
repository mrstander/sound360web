"use client"

import type React from "react"

import { useEffect, useRef } from "react"

interface LordiconProps {
  src: string
  trigger?: "hover" | "click" | "loop" | "loop-on-hover" | "morph" | "morph-two-way"
  colors?: string
  size?: number
  className?: string
  style?: React.CSSProperties
}

export function Lordicon({
  src,
  trigger = "hover",
  colors = "primary:#121331,secondary:#08a88a",
  size = 96,
  className = "",
  style = {},
}: LordiconProps) {
  const iconRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // Load Lordicon script if not already loaded
    if (typeof window !== "undefined" && !window.lordicon) {
      const script = document.createElement("script")
      script.src = "https://cdn.lordicon.com/lordicon.js"
      script.async = true
      document.head.appendChild(script)
    }
  }, [])

  return (
    <lord-icon
      ref={iconRef}
      src={src}
      trigger={trigger}
      colors={colors}
      style={{ width: `${size}px`, height: `${size}px`, ...style }}
      className={className}
    />
  )
}

// Extend the global JSX namespace to include lord-icon
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "lord-icon": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        src?: string
        trigger?: string
        colors?: string
        style?: React.CSSProperties
      }
    }
  }
}

// Extend the Window interface to include lordicon
declare global {
  interface Window {
    lordicon?: any
  }
}
