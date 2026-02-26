"use client"

import { useRef, useEffect, useState } from "react"

const partners = [
  "IAU - International Association of Universities",
  "Magna Charta Universitatum",
  "CEAA - Centrul de Excelenta",
  "Moldcoop",
  "AESM",
  "Academia de Stiinte a Moldovei",
  "Universitatea din Bucuresti",
  "Camera de Comert si Industrie",
  "ANOFM Moldova",
  "BNM - Banca Nationala a Moldovei",
]

export function PartnersSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    let animationId: number
    let position = 0
    const animate = () => {
      if (!isPaused) {
        position -= 0.4
        if (position <= -el.scrollWidth / 2) position = 0
        el.style.transform = `translateX(${position}px)`
      }
      animationId = requestAnimationFrame(animate)
    }
    animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [isPaused])

  return (
    <section id="parteneri" className="py-16 md:py-20 bg-background overflow-hidden border-t border-border">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 mb-10">
        <div className="text-center">
          <span className="text-xs font-bold text-accent uppercase tracking-[0.2em]">
            Cooperare
          </span>
          <h2 className="mt-3 text-2xl md:text-3xl font-extrabold text-foreground tracking-tight">
            Partenerii nostri
          </h2>
          <div className="mt-2 mx-auto h-1 w-16 bg-accent rounded-full" />
        </div>
      </div>

      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div ref={scrollRef} className="flex gap-4 will-change-transform">
          {[...partners, ...partners].map((partner, i) => (
            <div
              key={`${partner}-${i}`}
              className="shrink-0 px-8 py-4 bg-secondary border border-border rounded-sm flex items-center justify-center min-w-[280px] hover:border-accent/40 transition-all"
            >
              <span className="text-sm font-semibold text-foreground/70 text-center whitespace-nowrap">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
