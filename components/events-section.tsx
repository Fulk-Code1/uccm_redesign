import { Clock, MapPin, ArrowRight } from "lucide-react"

const events = [
  {
    date: "15",
    month: "MAR",
    year: "2026",
    title: "Ziua Usilor Deschise UCCM 2026",
    time: "09:00 - 16:00",
    location: "Campus UCCM",
    href: "#",
  },
  {
    date: "22",
    month: "MAR",
    year: "2026",
    title: "Conferinta stiintifica internationala",
    time: "10:00 - 17:00",
    location: "Aula Magna",
    href: "#",
  },
  {
    date: "05",
    month: "APR",
    year: "2026",
    title: "Workshop: Antreprenoriat si inovare",
    time: "14:00 - 18:00",
    location: "Sala 301",
    href: "#",
  },
  {
    date: "12",
    month: "APR",
    year: "2026",
    title: "Targul carierei pentru studenti si absolventi",
    time: "10:00 - 15:00",
    location: "Holul Central",
    href: "#",
  },
]

export function EventsSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-14">
          <div>
            <span className="text-xs font-bold text-accent uppercase tracking-[0.2em]">
              Calendar
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
              Evenimente viitoare
            </h2>
            <div className="mt-2 h-1 w-16 bg-accent rounded-full" />
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-primary text-primary font-bold text-sm rounded-sm hover:bg-primary hover:text-primary-foreground transition-colors uppercase tracking-wide"
          >
            Toate evenimentele
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="space-y-3">
          {events.map((event) => (
            <a
              key={event.title}
              href={event.href}
              className="group flex items-center gap-0 rounded-sm border border-border hover:border-accent hover:shadow-lg transition-all duration-300 overflow-hidden bg-background"
            >
              {/* Date block */}
              <div className="shrink-0 w-20 md:w-24 self-stretch bg-primary flex flex-col items-center justify-center py-4 group-hover:bg-accent transition-colors">
                <span className="text-2xl md:text-3xl font-extrabold text-primary-foreground group-hover:text-accent-foreground leading-none">
                  {event.date}
                </span>
                <span className="text-[10px] font-bold text-accent group-hover:text-accent-foreground uppercase tracking-widest mt-1">
                  {event.month}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0 px-5 md:px-6 py-4">
                <h3 className="text-base md:text-lg font-bold text-foreground group-hover:text-accent transition-colors truncate">
                  {event.title}
                </h3>
                <div className="mt-1.5 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-accent/70" />
                    {event.time}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-accent/70" />
                    {event.location}
                  </span>
                </div>
              </div>

              {/* Arrow */}
              <div className="shrink-0 pr-5 md:pr-6 hidden sm:block">
                <ArrowRight className="h-5 w-5 text-muted-foreground/30 group-hover:text-accent transition-colors" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
