"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronRight, ChevronLeft } from "lucide-react"

const slides = [
  {
    image: "/images/hero-campus.jpg",
    subtitle: "Bine ati venit la",
    title: "Universitatea Cooperatist-Comerciala din Moldova",
    description: "Excelenta academica si competitivitate prin calitate, cooperare si inovare din 1993",
    cta: "Descopera programele",
    ctaSecondary: "Admitere 2026",
    href: "https://uccm.md/programe-academice/",
    hrefSecondary: "https://uccm.md/admiterea/",
  },
  {
    image: "/images/hero-graduation.jpg",
    subtitle: "Admiterea 2026-2027",
    title: "Construieste-ti viitorul profesional alaturi de noi",
    description: "Inscrie-te la programele de Licenta, Master sau Doctorat in economie, comert, drept si IT",
    cta: "Aplica acum",
    ctaSecondary: "Acte necesare",
    href: "https://uccm.md/admiterea/",
    hrefSecondary: "https://uccm.md/admiterea/",
  },
  {
    image: "/images/hero-library.jpg",
    subtitle: "Educatie de calitate",
    title: "Programe moderne acreditate national si international",
    description: "Economie, comert, drept, tehnologii informationale si management de business",
    cta: "Afla mai mult",
    ctaSecondary: "Contacteaza-ne",
    href: "https://uccm.md/despre-uccm/",
    hrefSecondary: "https://uccm.md/contacte-3/",
  },
]

export function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [isAnimating, setIsAnimating] = useState(true)

  const next = useCallback(() => {
    setIsAnimating(false)
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
      setIsAnimating(true)
    }, 50)
  }, [])

  const prev = useCallback(() => {
    setIsAnimating(false)
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
      setIsAnimating(true)
    }, 50)
  }, [])

  const goTo = useCallback((i: number) => {
    setIsAnimating(false)
    setTimeout(() => {
      setCurrent(i)
      setIsAnimating(true)
    }, 50)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 7000)
    return () => clearInterval(timer)
  }, [next])

  const slide = slides[current]

  return (
    <section className="relative h-[550px] md:h-[650px] lg:h-[80vh] lg:min-h-[600px] lg:max-h-[850px] overflow-hidden">
      {/* Background images */}
      {slides.map((s, i) => (
        <div
          key={s.title}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={s.image}
            alt=""
            fill
            className="object-cover scale-105"
            priority={i === 0}
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-transparent to-transparent" />

      {/* Gold accent line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent z-20" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 w-full">
          <div className="max-w-2xl">
            <span
              className={`inline-block text-accent text-sm md:text-base font-semibold uppercase tracking-[0.2em] mb-4 transition-all duration-700 ${
                isAnimating ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              {slide.subtitle}
            </span>
            <h1
              className={`text-3xl md:text-4xl lg:text-[52px] font-extrabold text-primary-foreground leading-[1.1] tracking-tight transition-all duration-700 delay-100 ${
                isAnimating ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
              style={{ textWrap: "balance" }}
            >
              {slide.title}
            </h1>
            <p
              className={`mt-5 text-base md:text-lg text-primary-foreground/80 leading-relaxed max-w-xl transition-all duration-700 delay-200 ${
                isAnimating ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              {slide.description}
            </p>
            <div
              className={`mt-8 flex flex-wrap items-center gap-3 transition-all duration-700 delay-300 ${
                isAnimating ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              <a
                href={slide.href}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-accent-foreground font-bold text-sm rounded-sm hover:bg-accent/90 transition-colors uppercase tracking-wide"
              >
                {slide.cta}
                <ChevronRight className="h-4 w-4" />
              </a>
              <a
                href={slide.hrefSecondary}
                className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-primary-foreground/40 text-primary-foreground font-bold text-sm rounded-sm hover:border-accent hover:text-accent transition-colors uppercase tracking-wide"
              >
                {slide.ctaSecondary}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        type="button"
        onClick={prev}
        aria-label="Slide anterior"
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 h-12 w-12 flex items-center justify-center rounded-sm bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-all"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Slide urmator"
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 h-12 w-12 flex items-center justify-center rounded-sm bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-all"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={`indicator-${i}`}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-1 rounded-full transition-all duration-500 ${
              i === current ? "w-10 bg-accent" : "w-4 bg-primary-foreground/30 hover:bg-primary-foreground/50"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
