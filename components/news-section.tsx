import Image from "next/image"
import { Calendar, ArrowRight } from "lucide-react"

const news = [
  {
    title: "Activitati dedicate Zilei Mondiale a Drepturilor Consumatorilor",
    excerpt: "Studentii UCCM au participat la evenimentul care a marcat deschiderea seriei de activitati dedicate Zilei Mondiale a Drepturilor Consumatorilor.",
    date: "23 Feb 2026",
    category: "Evenimente",
    image: "/images/news-1.jpg",
    href: "#",
  },
  {
    title: "Expozitia nationala a cartii universitare",
    excerpt: "UCCM a participat la Expozitia Nationala a Cartii Universitare, prezentand cele mai recente publicatii ale cadrelor didactice.",
    date: "18 Feb 2026",
    category: "Activitate stiintifica",
    image: "/images/news-2.jpg",
    href: "#",
  },
  {
    title: "Saptamana internationala a educatiei financiare 2026",
    excerpt: "UCCM a organizat o serie de activitati educationale in cadrul Saptamanii Internationale a Educatiei Financiare.",
    date: "12 Feb 2026",
    category: "Educatie",
    image: "/images/news-3.jpg",
    href: "#",
  },
]

export function NewsSection() {
  return (
    <section id="noutati" className="py-20 md:py-28 bg-secondary/60">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-14">
          <div>
            <span className="text-xs font-bold text-accent uppercase tracking-[0.2em]">
              Noutati
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
              Ultimele stiri si anunturi
            </h2>
            <div className="mt-2 h-1 w-16 bg-accent rounded-full" />
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-primary text-primary font-bold text-sm rounded-sm hover:bg-primary hover:text-primary-foreground transition-colors uppercase tracking-wide"
          >
            Toate stirile
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Featured + Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Featured large card */}
          <a
            href={news[0].href}
            className="group lg:col-span-3 bg-background rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border hover:border-accent/30"
          >
            <div className="relative h-64 md:h-80 overflow-hidden">
              <Image
                src={news[0].image}
                alt={news[0].title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wide rounded-sm">
                {news[0].category}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-1.5 text-primary-foreground/80 text-xs mb-2">
                  <Calendar className="h-3 w-3" />
                  {news[0].date}
                </div>
                <h3 className="text-xl md:text-2xl font-extrabold text-primary-foreground leading-tight group-hover:text-accent transition-colors">
                  {news[0].title}
                </h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                {news[0].excerpt}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-accent uppercase tracking-wide">
                Citeste articolul
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </a>

          {/* Side cards */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {news.slice(1).map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="group flex-1 bg-background rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border hover:border-accent/30"
              >
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 bg-accent text-accent-foreground text-[10px] font-bold uppercase tracking-wide rounded-sm">
                    {item.category}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-1.5 text-muted-foreground text-xs mb-2">
                    <Calendar className="h-3 w-3" />
                    {item.date}
                  </div>
                  <h3 className="text-base font-bold text-foreground leading-snug group-hover:text-accent transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
