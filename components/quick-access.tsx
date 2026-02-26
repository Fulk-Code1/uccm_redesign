import { GraduationCap, BookOpen, Users, Phone, ArrowRight } from "lucide-react"

const cards = [
  {
    icon: GraduationCap,
    title: "Admitere 2026",
    description: "Informatii despre inscriere, conditii, acte necesare si taxe de studii",
    href: "https://uccm.md/admiterea/",
    accent: true,
  },
  {
    icon: BookOpen,
    title: "Programe de studii",
    description: "Licenta, Master, Doctorat si programe de Formare continua",
    href: "https://uccm.md/programe-academice/",
    accent: false,
  },
  {
    icon: Users,
    title: "Pentru studenti",
    description: "Orar, ghid student, documente utile, secretariat si cariere",
    href: "https://uccm.md/student/",
    accent: false,
  },
  {
    icon: Phone,
    title: "Contacte",
    description: "Date oficiale, formular de contact, harta si social media",
    href: "https://uccm.md/contacte-3/",
    accent: true,
  },
]

export function QuickAccess() {
  return (
    <section className="relative z-20 -mt-16 md:-mt-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 rounded-sm overflow-hidden shadow-2xl">
          {cards.map((card) => (
            <a
              key={card.title}
              href={card.href}
              className={`group relative flex flex-col justify-between p-7 transition-all duration-300 ${
                card.accent
                  ? "bg-accent text-accent-foreground hover:bg-accent/90"
                  : "bg-primary text-primary-foreground hover:bg-primary/90"
              }`}
            >
              <div>
                <card.icon className={`h-8 w-8 mb-4 ${card.accent ? "text-accent-foreground/80" : "text-accent"}`} />
                <h3 className="text-lg font-bold leading-tight">{card.title}</h3>
                <p className={`mt-2 text-sm leading-relaxed ${card.accent ? "text-accent-foreground/70" : "text-primary-foreground/70"}`}>
                  {card.description}
                </p>
              </div>
              <div className={`mt-5 flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide ${card.accent ? "text-accent-foreground/80" : "text-accent"}`}>
                Detalii
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
