"use client"

import { motion } from "framer-motion"
import { Globe, Monitor, Layers } from "lucide-react"

const services = [
  {
    title: "Websites & Landing Pages",
    icon: Globe,
    description:
      "Strategic digital storefronts designed for maximum conversion. Every pixel is valuable real estate that must perform.",
  },
  {
    title: "Portfolios",
    icon: Monitor,
    description:
      "Aesthetic-first experiences for brands that need to stand out. Cinematic motion and architectural layout to tell your story.",
  },
  {
    title: "Web Apps",
    icon: Layers,
    description:
      "Complex interactive systems with robust backends. Built with rock-solid foundations to handle high-density traffic.",
  },
]

export function PropertyInventory() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Blueprint Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-card/50 backdrop-blur-sm p-8 md:p-12 rounded-lg"
        >
          {/* Blueprint Grid Background */}
          <div className="absolute inset-0 bg-blueprint opacity-5 rounded-lg" />
          
          {/* Blueprint Header */}
          <div className="relative mb-12 pb-6 border-b border-border/30">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary font-mono block mb-2">
                  Build Specifications
                </span>
                <h3 className="font-display text-2xl md:text-3xl font-bold">Service Blueprint</h3>
              </div>
              <div className="text-right">
                <span className="text-xs text-muted-foreground font-mono">Project ID: BP-2026</span>
              </div>
            </div>
          </div>

          {/* Three Column Grid */}
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="relative"
              >
                {/* Vertical Divider (hidden on mobile) */}
                {index < services.length - 1 && (
                  <div className="hidden md:block absolute top-0 -right-6 w-px h-full bg-border/30" />
                )}

                <div className="space-y-4">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <service.icon size={24} />
                  </div>

                  {/* Title */}
                  <h4 className="font-display text-xl font-bold leading-tight">{service.title}</h4>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Specifications */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="relative mt-12 pt-8 border-t border-border/30 space-y-3 text-center"
          >
            <p className="text-sm text-muted-foreground font-medium">
              Code Development · Low Code Development · No Code Development
            </p>
            <p className="text-sm text-muted-foreground font-medium">
              Responsive · Modern Design · Scalable · Animations
            </p>
          </motion.div>

          {/* Blueprint Corner Markers */}
          <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-primary/30" />
          <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-primary/30" />
          <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-primary/30" />
          <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-primary/30" />
        </motion.div>
      </div>
    </section>
  )
}