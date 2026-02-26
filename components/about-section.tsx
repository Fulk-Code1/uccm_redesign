import Image from "next/image"
import { Target, Eye, Award, ChevronRight } from "lucide-react"

export function AboutSection() {
  return (
    <section id="despre" className="pt-24 pb-20 md:pt-32 md:pb-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Two-column layout: text + image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <div>
            <span className="text-xs font-bold text-accent uppercase tracking-[0.2em]">
              Despre universitate
            </span>
            <h2
              className="mt-3 text-3xl md:text-4xl font-extrabold text-foreground leading-tight tracking-tight"
              style={{ textWrap: "balance" }}
            >
              Excelenta academica si competitivitate prin calitate
            </h2>
            <div className="mt-1 h-1 w-16 bg-accent rounded-full" />
            <p className="mt-6 text-base text-muted-foreground leading-relaxed">
              Universitatea Cooperatist-Comerciala din Moldova (UCCM) este o institutie de invatamant superior
              fondata in 1993, acreditata de Agentia Nationala de Asigurare a Calitatii in Educatie si Cercetare (ANACEC).
            </p>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              UCCM ofera programe de studii superioare de Licenta, Master si Doctorat in domeniile
              economiei, comertului, dreptului si tehnologiilor informationale, formand specialisti
              competitivi pentru piata muncii nationala si internationala.
            </p>
            <a
              href="https://uccm.md/despre-uccm/"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-bold text-sm rounded-sm hover:bg-primary/90 transition-colors uppercase tracking-wide"
            >
              Citeste mai mult
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
          <div className="relative">
            <div className="relative rounded-sm overflow-hidden shadow-xl">
              <Image
                src="/images/about-building.jpg"
                alt="Campusul UCCM"
                width={640}
                height={440}
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Accent corner decoration */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-4 border-l-4 border-accent rounded-bl-sm hidden lg:block" />
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-4 border-r-4 border-accent rounded-tr-sm hidden lg:block" />
          </div>
        </div>

        {/* Mission / Vision / Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 rounded-sm overflow-hidden border border-border">
          {[
            {
              icon: Target,
              title: "Misiunea",
              text: "Formarea specialistilor competitivi in domeniile economiei, comertului, dreptului si tehnologiilor informationale, capabili sa se adapteze cerintelor pietei muncii nationale si internationale.",
            },
            {
              icon: Eye,
              title: "Viziunea",
              text: "Devenirea unei universitati de referinta la nivel national si international, recunoscuta pentru calitatea procesului educational, cercetarea stiintifica performanta si parteneriatele strategice.",
            },
            {
              icon: Award,
              title: "Valorile",
              text: "Calitate, integritate, cooperare, inovare si responsabilitate sociala. Promovam excelenta academica si dezvoltarea personala a fiecarui student.",
            },
          ].map((item, i) => (
            <div
              key={item.title}
              className={`p-8 ${i < 2 ? "md:border-r border-b md:border-b-0 border-border" : ""}`}
            >
              <div className="h-12 w-12 rounded-sm bg-accent/10 flex items-center justify-center mb-5">
                <item.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-extrabold text-foreground uppercase tracking-wide">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
