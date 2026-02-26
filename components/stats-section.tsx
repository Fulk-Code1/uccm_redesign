"use client"

import { useEffect, useState, useRef } from "react"
import { GraduationCap, Users, BookOpen, Handshake, Calendar } from "lucide-react"

const stats = [
  { value: 30, suffix: "+", label: "Ani de excelenta", icon: Calendar },
  { value: 5000, suffix: "+", label: "Absolventi de succes", icon: GraduationCap },
  { value: 50, suffix: "+", label: "Cadre didactice", icon: Users },
  { value: 20, suffix: "+", label: "Programe acreditate", icon: BookOpen },
  { value: 15, suffix: "+", label: "Parteneriate internationale", icon: Handshake },
]

function useCountUp(target: number, duration: number, inView: boolean) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = target / (duration / 16)
    const interval = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(interval)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(interval)
  }, [target, duration, inView])
  return count
}

function StatItem({ value, suffix, label, icon: Icon, inView }: {
  value: number; suffix: string; label: string; icon: React.ElementType; inView: boolean
}) {
  const count = useCountUp(value, 2000, inView)
  return (
    <div className="text-center px-4">
      <Icon className="h-8 w-8 text-accent mx-auto mb-3 opacity-80" />
      <div className="text-4xl md:text-5xl font-extrabold text-primary-foreground tracking-tight">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="mt-2 h-px w-10 bg-accent/40 mx-auto" />
      <div className="mt-3 text-sm text-primary-foreground/70 font-medium uppercase tracking-wide">
        {label}
      </div>
    </div>
  )
}

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="relative py-20 md:py-28 bg-primary overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
      }} />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground tracking-tight">
            UCCM in cifre
          </h2>
          <div className="mt-2 mx-auto h-1 w-16 bg-accent rounded-full" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-6">
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
