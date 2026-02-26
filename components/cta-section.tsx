import Image from "next/image"
import { ChevronRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero-graduation.jpg"
        alt=""
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-primary/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs font-bold text-accent uppercase tracking-[0.2em]">
            Admiterea 2026-2027
          </span>
          <h2
            className="mt-4 text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-foreground leading-tight tracking-tight"
            style={{ textWrap: "balance" }}
          >
            Construieste-ti viitorul profesional alaturi de UCCM
          </h2>
          <p className="mt-5 text-base md:text-lg text-primary-foreground/75 leading-relaxed max-w-2xl mx-auto">
            Inscrierile pentru anul universitar 2026-2027 sunt deschise. Descopera programele noastre
            de studii acreditate si fa primul pas spre o cariera de succes.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-bold text-sm rounded-sm hover:bg-accent/90 transition-colors uppercase tracking-wide"
            >
              Aplica acum
              <ChevronRight className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary-foreground/40 text-primary-foreground font-bold text-sm rounded-sm hover:border-accent hover:text-accent transition-colors uppercase tracking-wide"
            >
              Vezi programele de studii
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
