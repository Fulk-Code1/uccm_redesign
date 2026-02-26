import { GraduationCap, BookOpen, Award, Layers, ArrowRight } from "lucide-react"

const programs = [
  {
    icon: GraduationCap,
    level: "Licenta",
    duration: "3-4 ani",
    programs: [
      "Economie generala",
      "Contabilitate",
      "Finante si banci",
      "Business si administratie",
      "Drept",
      "Informatica aplicata",
    ],
    href: "#",
  },
  {
    icon: BookOpen,
    level: "Master",
    duration: "1.5-2 ani",
    programs: [
      "Management financiar",
      "Drept economic",
      "Marketing digital",
      "Administrare publica",
    ],
    href: "#",
  },
  {
    icon: Award,
    level: "Doctorat",
    duration: "3-4 ani",
    programs: [
      "Economie si management",
      "Drept",
      "Contabilitate si audit",
    ],
    href: "#",
  },
  {
    icon: Layers,
    level: "Formare continua",
    duration: "Flexibil",
    programs: [
      "Cursuri de perfectionare",
      "Programe de recalificare",
      "Certificate profesionale",
    ],
    href: "#",
  },
]

export function ProgramsSection() {
  return (
    <section id="programe" className="py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-bold text-accent uppercase tracking-[0.2em]">
            Oferta educationala
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
            Programe de studii
          </h2>
          <div className="mt-2 mx-auto h-1 w-16 bg-accent rounded-full" />
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            Programe acreditate de ANACEC in domeniile economiei, comertului, dreptului si tehnologiilor informationale
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {programs.map((program) => (
            <div
              key={program.level}
              className="group relative bg-background border border-border rounded-sm overflow-hidden hover:border-accent hover:shadow-xl transition-all duration-300"
            >
              {/* Header */}
              <div className="bg-primary p-6 group-hover:bg-accent transition-colors duration-300">
                <program.icon className="h-8 w-8 text-accent group-hover:text-accent-foreground transition-colors mb-3" />
                <h3 className="text-xl font-extrabold text-primary-foreground group-hover:text-accent-foreground transition-colors">
                  {program.level}
                </h3>
                <span className="text-xs text-primary-foreground/60 group-hover:text-accent-foreground/70 font-medium uppercase tracking-wide transition-colors">
                  Durata: {program.duration}
                </span>
              </div>

              {/* Programs list */}
              <div className="p-6">
                <ul className="space-y-2.5">
                  {program.programs.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0 mt-1.5" />
                      {p}
                    </li>
                  ))}
                </ul>
                <a
                  href={program.href}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-accent transition-colors uppercase tracking-wide"
                >
                  Toate programele
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
