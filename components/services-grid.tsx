import {
  BookOpen,
  CheckCircle,
  Mail,
  Briefcase,
  Camera,
  PlayCircle,
  Phone as PhoneIcon,
  GraduationCap,
  MonitorSmartphone,
  ExternalLink,
} from "lucide-react"

const services = [
  { icon: MonitorSmartphone, title: "Moodle", description: "Platforma e-learning", href: "https://moodle.uccm.md/" },
  { icon: BookOpen, title: "Biblioteca", description: "Catalog si resurse", href: "http://biblioteca.uccm.md/" },
  { icon: CheckCircle, title: "Reusita", description: "Verificare note", href: "https://uccm.md/reusita/" },
  { icon: Briefcase, title: "Cariere", description: "Functii vacante", href: "https://uccm.md/cariere/" },
  { icon: Mail, title: "E-mail", description: "Posta electronica", href: "https://uccm.md/webmail/" },
  { icon: GraduationCap, title: "Antreprenoriat", description: "Servicii si suport", href: "https://uccm.md/servicii-antreprenoriat/" },
  { icon: Camera, title: "Galerie foto", description: "Activitati si evenimente", href: "https://uccm.md/galerie-foto/" },
  { icon: PlayCircle, title: "Galerie video", description: "Secvente si reportaje", href: "https://uccm.md/galerie-video/" },
  { icon: PhoneIcon, title: "Contacte", description: "Scrie-ne un mesaj", href: "https://uccm.md/contacte-3/" },
]

export function ServicesGrid() {
  return (
    <section className="py-20 md:py-24 bg-secondary/60">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-bold text-accent uppercase tracking-[0.2em]">
            Acces rapid
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
            Servicii si resurse
          </h2>
          <div className="mt-2 mx-auto h-1 w-16 bg-accent rounded-full" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {services.map((service) => (
            <a
              key={service.title}
              href={service.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center text-center p-5 md:p-6 bg-background border border-border rounded-sm hover:border-accent hover:shadow-lg transition-all duration-300"
            >
              <div className="h-14 w-14 rounded-sm bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
                <service.icon className="h-6 w-6 text-primary group-hover:text-accent transition-colors" />
              </div>
              <h3 className="text-sm font-bold text-foreground">{service.title}</h3>
              <p className="text-xs text-muted-foreground mt-1">{service.description}</p>
              <ExternalLink className="h-3 w-3 text-muted-foreground/40 mt-3 group-hover:text-accent transition-colors" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
