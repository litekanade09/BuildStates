import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/home/hero"
import { ConstructionPhases } from "@/components/foundations/construction-phases"
import { PropertyInventory } from "@/components/capabilities/property-inventory"
import { CaseStudiesGrid } from "@/components/case-studies/case-studies-grid"
import { ContactForm } from "@/components/contact/contact-form"
import { ScrollAnimation } from "@/components/ui/scroll-animation"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background grain-texture">
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* Foundations Section */}
      <section id="foundations" className="py-24 border-t border-border/30">
        <ScrollAnimation>
          <div className="container mx-auto px-4 lg:px-8 mb-16">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">Our Methodology</span>
              <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">Foundations</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Every exceptional digital product begins with a solid foundation. Our four-phase construction process
                ensures that your vision is transformed into a robust, scalable, and beautiful digital experience.
              </p>
            </div>
          </div>
          <ConstructionPhases />
        </ScrollAnimation>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="py-24 border-t border-border/30 bg-muted/20">
        <ScrollAnimation>
          <div className="container mx-auto px-4 lg:px-8 mb-16">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">What We Build</span>
              <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">Capabilities</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                From high-conversion landing pages to enterprise-grade platforms, we construct digital properties tailored
                to your specific needs. Browse our inventory of specialized capabilities.
              </p>
            </div>
          </div>
          <PropertyInventory />
        </ScrollAnimation>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-24 border-t border-border/30">
        <ScrollAnimation>
          <div className="container mx-auto px-4 lg:px-8 mb-16">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">
                Completed Developments
              </span>
              <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">Case Studies</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Explore our portfolio of successful digital constructions. Each project represents a unique challenge,
                solved with architectural precision and creative vision. These are the properties we've built for
                ambitious founders.
              </p>
              <p className="mt-8 text-muted-foreground/60 text-sm italic max-w-xl mx-auto">
                Our developments are built for long-term residency and structural integrity, ensuring your startup's
                digital footprint is as permanent as physical real estate.
              </p>
            </div>
          </div>
          <CaseStudiesGrid />
        </ScrollAnimation>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 border-t border-border/30 bg-muted/20">
        <ScrollAnimation>
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">
                  Ready to Build?
                </span>
                <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">Let&apos;s Build Together</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Have a project in mind? Fill out the form below and our team will get back to you within 24 hours. Let's
                  lay the groundwork for your next digital property.
                </p>
                <p className="mt-8 text-muted-foreground/60 text-sm italic max-w-xl mx-auto">
                  Breaking ground on a new project is the most critical phase. We ensure the first stone is laid with
                  precision and purpose.
                </p>
              </div>
              <div className="bg-card border border-border p-8 md:p-12">
                <ContactForm />
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </section>

      <Footer />
    </main>
  )
}
