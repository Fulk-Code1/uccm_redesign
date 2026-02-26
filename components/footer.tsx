import Link from "next/link"
import Image from "next/image"
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Youtube,
  Instagram,
  ChevronRight,
  ExternalLink,
} from "lucide-react"

const footerLinks = {
  universitate: [
    { label: "Prezentare generala", href: "#despre" },
    { label: "Istoric", href: "#" },
    { label: "Administratie", href: "#" },
    { label: "Calitate & Acreditare", href: "#" },
    { label: "Parteneriate", href: "#parteneri" },
  ],
  studii: [
    { label: "Programe de licenta", href: "#" },
    { label: "Programe de master", href: "#" },
    { label: "Doctorat", href: "#" },
    { label: "Calendar academic", href: "#" },
    { label: "Regulamente academice", href: "#" },
  ],
  studenti: [
    { label: "Ghid student", href: "#" },
    { label: "Documente utile", href: "#" },
    { label: "Orar", href: "#" },
    { label: "Secretariat", href: "#" },
    { label: "Cariere", href: "#" },
  ],
  resurse: [
    { label: "Moodle", href: "https://moodle.uccm.md/", external: true },
    { label: "Biblioteca", href: "http://biblioteca.uccm.md/", external: true },
    { label: "Reusita", href: "https://uccm.md/reusita/", external: true },
    { label: "E-mail", href: "https://uccm.md/webmail/", external: true },
  ],
}

export function Footer() {
  return (
    <footer id="contacte" className="bg-primary text-primary-foreground">
      {/* Gold accent line */}
      <div className="h-1 bg-accent" />

      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8">
          {/* Brand + Contact */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Image src="/images/uccm-crest.jpg" alt="UCCM" width={40} height={40} className="h-10 w-10 rounded-sm object-cover" />
              <div>
                <span className="text-base font-extrabold text-primary-foreground leading-tight block tracking-tight">
                  UCCM
                </span>
                <span className="text-[10px] text-primary-foreground/50 leading-tight block uppercase tracking-wider">
                  Universitatea Cooperatist-Comerciala din Moldova
                </span>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/60 leading-relaxed mb-6 max-w-xs">
              Educatie de calitate in domeniul economiei, comertului si dreptului din 1993. Acreditata de ANACEC.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70">
                  MD-2001, mun. Chisinau,<br />bd. Iu. Gagarin, 8
                </span>
              </div>
              <a href="tel:+37322815600" className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors">
                <Phone className="h-4 w-4 text-accent shrink-0" />
                (+373 22) 815-600
              </a>
              <a href="mailto:info@uccm.md" className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors">
                <Mail className="h-4 w-4 text-accent shrink-0" />
                info@uccm.md
              </a>
            </div>
            <div className="flex items-center gap-2.5 mt-6">
              {[
                { icon: Facebook, href: "https://www.facebook.com/uccm1993", label: "Facebook" },
                { icon: Youtube, href: "https://www.youtube.com/@UniversitateaCooperatist-oo3qv", label: "YouTube" },
                { icon: Instagram, href: "https://www.instagram.com/uccm1993/", label: "Instagram" },
              ].map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="h-9 w-9 rounded-sm bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Universitate */}
          <div>
            <h3 className="text-[11px] font-extrabold text-accent uppercase tracking-[0.15em] mb-5">
              Universitatea
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.universitate.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-primary-foreground/60 hover:text-accent transition-colors flex items-center gap-1.5">
                    <ChevronRight className="h-3 w-3 opacity-40" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Studii */}
          <div>
            <h3 className="text-[11px] font-extrabold text-accent uppercase tracking-[0.15em] mb-5">
              Programe de studii
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.studii.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-primary-foreground/60 hover:text-accent transition-colors flex items-center gap-1.5">
                    <ChevronRight className="h-3 w-3 opacity-40" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Studenti */}
          <div>
            <h3 className="text-[11px] font-extrabold text-accent uppercase tracking-[0.15em] mb-5">
              Studenti
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.studenti.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-primary-foreground/60 hover:text-accent transition-colors flex items-center gap-1.5">
                    <ChevronRight className="h-3 w-3 opacity-40" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-[11px] font-extrabold text-accent uppercase tracking-[0.15em] mt-8 mb-5">
              Resurse online
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.resurse.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors flex items-center gap-1.5">
                    <ExternalLink className="h-3 w-3 opacity-40" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Map */}
        <div className="mt-14 rounded-sm overflow-hidden border border-primary-foreground/10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2720.4475023441264!2d28.8572954!3d47.011820400000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97c19f841a585%3A0x696b5ab71e02faa!2z0JrQvtC-0L_QtdGA0LDRgtC40LLQvdC-LdGC0L7RgNCz0L7QstGL0Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgiDQnNC-0LvQtNC-0LLRiy4!5e0!3m2!1sro!2s!4v1685900136944!5m2!1sro!2s&language=ro"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Locatia UCCM pe harta"
          />
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/40">
          <span>
            {"© 2026 Universitatea Cooperatist-Comerciala din Moldova. Toate drepturile rezervate."}
          </span>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-accent transition-colors">
              Politica de confidentialitate
            </Link>
            <span className="text-primary-foreground/20">|</span>
            <Link href="#" className="hover:text-accent transition-colors">
              Termeni si conditii
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
