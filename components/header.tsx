"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Phone,
  MapPin,
  Clock,
  Facebook,
  Youtube,
  Instagram,
  ChevronDown,
  Menu,
  X,
  Search,
} from "lucide-react"

const BASE = "https://uccm.md"

const navItems = [
  { label: "Acasa", href: BASE },
  {
    label: "Despre UCCM",
    href: `${BASE}/despre-uccm/`,
    children: [
      { label: "Mesajul Rectorului", href: `${BASE}/mesajul-rectorului/` },
      { label: "Conducere", href: `${BASE}/administratie/` },
      { label: "Senat", href: `${BASE}/senat/` },
      { label: "Scurt Istoric", href: `${BASE}/scurt-istoric/` },
      { label: "Misiune si obiective", href: `${BASE}/misiune-si-obiective/` },
      { label: "Acreditare", href: `${BASE}/acreditare/` },
      { label: "Strategia UCCM", href: `${BASE}/strategia-uccm/` },
      { label: "Rapoarte", href: `${BASE}/rapoarte/` },
    ],
  },
  {
    label: "Studii",
    href: `${BASE}/programe-academice/`,
    children: [
      { label: "Programe academice", href: `${BASE}/programe-academice/` },
      { label: "Licenta", href: `${BASE}/licenta/` },
      { label: "Masterat", href: `${BASE}/masterat/` },
      { label: "Doctorat", href: `${BASE}/doctorat/` },
      { label: "Formare continua", href: `${BASE}/formare-continua/` },
      { label: "Calendar academic", href: `${BASE}/calendar-academic/` },
      { label: "Orarul lectiilor", href: `${BASE}/orarul-lectiilor/` },
      { label: "Reusita", href: `${BASE}/reusita/` },
    ],
  },
  {
    label: "Admitere",
    href: `${BASE}/admiterea/`,
    children: [
      { label: "Admitere 2026", href: `${BASE}/admiterea/` },
      { label: "Acte necesare", href: `${BASE}/admiterea/` },
    ],
  },
  {
    label: "Cercetare",
    href: `${BASE}/cercetare/`,
    children: [
      { label: "Consiliul stiintific", href: `${BASE}/consiliul-stiintific/` },
      { label: "Biblioteca Stiintifica", href: `${BASE}/biblioteca-stiintifica/` },
      { label: "Proiecte", href: `${BASE}/proiecte/` },
      { label: "Publicatii stiintifice", href: `${BASE}/publicatii-stiintifice/` },
      { label: "Reviste UCCM", href: `${BASE}/reviste-uccm/` },
    ],
  },
  {
    label: "International",
    href: `${BASE}/international/`,
    children: [
      { label: "Parteneri", href: `${BASE}/parteneri/` },
      { label: "Magna Charta Universitatum", href: `${BASE}/magna-charta-universitatum/` },
      { label: "Proiecte internationale", href: `${BASE}/proiecte-internationale/` },
      { label: "Diplome duble", href: `${BASE}/diplome-duble/` },
    ],
  },
  {
    label: "Student",
    href: `${BASE}/student/`,
    children: [
      { label: "Guvernarea studenteasca", href: `${BASE}/guvernarea-studenteasca/` },
      { label: "Alumni UCCM", href: `${BASE}/alumni-uccm/` },
      { label: "Burse", href: `${BASE}/burse/` },
      { label: "Campusul Universitar", href: `${BASE}/campusul-universitar/` },
      { label: "Activitati extracurriculare", href: `${BASE}/activitati-extracurriculare/` },
    ],
  },
  { label: "Contacte", href: `${BASE}/contacte-3/` },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="w-full fixed top-0 left-0 right-0 z-50">
      {/* Top Info Bar */}
      <div className={`bg-primary text-primary-foreground transition-all duration-300 ${scrolled ? "h-0 overflow-hidden opacity-0" : "h-auto opacity-100"}`}>
        <div className="mx-auto max-w-7xl px-4 lg:px-8 flex items-center justify-between py-2.5 text-xs">
          <div className="hidden md:flex items-center gap-5">
            <span className="flex items-center gap-1.5 text-primary-foreground/80">
              <Clock className="h-3.5 w-3.5 text-accent" />
              Lun - Vin: 08:00 - 17:00
            </span>
            <span className="h-3 w-px bg-primary-foreground/20" aria-hidden="true" />
            <span className="flex items-center gap-1.5 text-primary-foreground/80">
              <MapPin className="h-3.5 w-3.5 text-accent" />
              mun. Chisinau, bd. Gagarin 8
            </span>
            <span className="h-3 w-px bg-primary-foreground/20" aria-hidden="true" />
            <a href="tel:+37322815600" className="flex items-center gap-1.5 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              <Phone className="h-3.5 w-3.5 text-accent" />
              (+373 22) 815-600
            </a>
          </div>
          <div className="flex items-center gap-4 ml-auto">
            <div className="flex items-center gap-2.5">
              <Link href="https://www.facebook.com/uccm1993" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-primary-foreground/60 hover:text-accent transition-colors">
                <Facebook className="h-3.5 w-3.5" />
              </Link>
              <Link href="https://www.youtube.com/@UniversitateaCooperatist-oo3qv" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-primary-foreground/60 hover:text-accent transition-colors">
                <Youtube className="h-3.5 w-3.5" />
              </Link>
              <Link href="https://www.instagram.com/uccm1993/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-primary-foreground/60 hover:text-accent transition-colors">
                <Instagram className="h-3.5 w-3.5" />
              </Link>
            </div>
            <span className="h-3 w-px bg-primary-foreground/20" aria-hidden="true" />
            <div className="flex items-center gap-1.5 text-xs font-medium">
              <a href={BASE} className="text-accent font-bold">RO</a>
              <span className="text-primary-foreground/30">|</span>
              <a href={`${BASE}/en/`} className="text-primary-foreground/50 hover:text-primary-foreground transition-colors">EN</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`transition-all duration-300 ${scrolled ? "bg-background shadow-lg" : "bg-background/95 backdrop-blur-md shadow-sm"}`}>
        <div className="mx-auto max-w-7xl px-4 lg:px-8 flex items-center justify-between h-[72px]">
          {/* Logo */}
          <a href={BASE} className="flex items-center gap-3.5 shrink-0">
            <Image src="/images/uccm-crest.jpg" alt="UCCM" width={48} height={48} className="h-12 w-12 rounded-md object-cover" />
            <div className="hidden sm:flex flex-col">
              <span className="text-base font-extrabold text-primary leading-tight tracking-tight">UCCM</span>
              <span className="text-[11px] text-muted-foreground leading-tight">
                Universitatea Cooperatist-Comerciala din Moldova
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a
                  href={item.href}
                  className={`flex items-center gap-1 px-3 py-2 text-[13px] font-semibold uppercase tracking-wide transition-colors rounded-sm ${
                    item.label === "Acasa"
                      ? "text-accent"
                      : "text-foreground/80 hover:text-accent"
                  }`}
                >
                  {item.label}
                  {item.children && <ChevronDown className="h-3 w-3 opacity-50" />}
                </a>
                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-2 z-50">
                    <div className="bg-background border border-border rounded-md shadow-xl py-1.5 min-w-[260px]">
                      <div className="absolute -top-2 left-6 w-4 h-4 rotate-45 bg-background border-l border-t border-border" />
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="relative z-10 block px-5 py-2.5 text-sm text-foreground/80 hover:text-accent hover:bg-accent/5 transition-colors"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <a href={`${BASE}/admiterea/`} className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 bg-accent text-accent-foreground font-bold text-xs rounded-sm hover:bg-accent/90 transition-colors uppercase tracking-wide">
              Admiterea
            </a>
            <button type="button" aria-label="Cautare" className="p-2.5 rounded-md hover:bg-secondary transition-colors">
              <Search className="h-[18px] w-[18px] text-muted-foreground" />
            </button>
            <button
              type="button"
              aria-label="Meniu"
              className="lg:hidden p-2.5 rounded-md hover:bg-secondary transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="h-5 w-5 text-foreground" /> : <Menu className="h-5 w-5 text-foreground" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-border bg-background max-h-[70vh] overflow-y-auto">
            <div className="max-w-7xl mx-auto px-4 py-3">
              {navItems.map((item) => (
                <div key={item.label} className="border-b border-border/50 last:border-0">
                  <a
                    href={item.href}
                    className="block px-2 py-3 text-sm font-semibold text-foreground/90 uppercase tracking-wide"
                    onClick={() => !item.children && setMobileOpen(false)}
                  >
                    {item.label}
                  </a>
                  {item.children && (
                    <div className="pl-4 pb-2">
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="block px-2 py-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-3 pb-2 flex items-center gap-4 text-sm text-muted-foreground">
                <a href="tel:+37322815600" className="flex items-center gap-1.5">
                  <Phone className="h-3.5 w-3.5 text-accent" />
                  (+373 22) 815-600
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
