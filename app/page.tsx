import { Header } from "@/components/header"
import { HeroSlider } from "@/components/hero-slider"
import { QuickAccess } from "@/components/quick-access"
import { AboutSection } from "@/components/about-section"
import { ProgramsSection } from "@/components/programs-section"
import { ServicesGrid } from "@/components/services-grid"
import { StatsSection } from "@/components/stats-section"
import { NewsSection } from "@/components/news-section"
import { EventsSection } from "@/components/events-section"
import { CTASection } from "@/components/cta-section"
import { PartnersSection } from "@/components/partners-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSlider />
        <QuickAccess />
        <AboutSection />
        <ProgramsSection />
        <StatsSection />
        <ServicesGrid />
        <NewsSection />
        <EventsSection />
        <CTASection />
        <PartnersSection />
      </main>
      <Footer />
    </>
  )
}
