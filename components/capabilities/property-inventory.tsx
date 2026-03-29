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
    <section className="pt-16 pb-24" id="capabilities">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Blueprint Container with animated border beam */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative p-[1px] rounded-lg overflow-hidden group"
        >
          {/* Animated Magic Border Sweep */}
          <div className="absolute inset-[-600%] animate-[spin_6s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_80%,oklch(0.65_0.19_237)_100%)] opacity-30 group-hover:opacity-70 transition-opacity duration-700" />
          
          <div className="relative bg-card/60 backdrop-blur-md p-8 md:p-12 rounded-lg w-full h-full">
            {/* Blueprint Grid Background */}
            <div className="absolute inset-0 bg-blueprint opacity-5 rounded-lg pointer-events-none" />
          
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

                <div className="space-y-4 p-5 -ml-5 rounded-xl border border-transparent hover:border-border/50 hover:bg-muted/10 transition-all duration-300 group/service cursor-default">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover/service:bg-primary/20 group-hover/service:scale-110 transition-all duration-300">
                    <service.icon size={24} />
                  </div>

                  {/* Title */}
                  <h4 className="font-display text-xl font-bold leading-tight group-hover/service:text-primary transition-colors">{service.title}</h4>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Specifications converted to Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="relative mt-8 pt-8 border-t border-border/30 z-10"
          >
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-background/90 text-[10px] md:text-xs font-bold uppercase tracking-widest text-primary border border-primary/30 rounded-full whitespace-nowrap shadow-sm">Code Development</span>
              <span className="px-4 py-2 bg-background/90 text-[10px] md:text-xs font-bold uppercase tracking-widest text-foreground border border-border/60 rounded-full whitespace-nowrap shadow-sm">Low Code Development</span>
              <span className="px-4 py-2 bg-background/90 text-[10px] md:text-xs font-bold uppercase tracking-widest text-foreground border border-border/60 rounded-full whitespace-nowrap shadow-sm">No Code</span>
            </div>
          </motion.div>

          {/* Blueprint Corner Markers */}
          <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-primary/40 transition-colors group-hover:border-primary" />
          <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-primary/40 transition-colors group-hover:border-primary" />
          <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-primary/40 transition-colors group-hover:border-primary" />
          <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-primary/40 transition-colors group-hover:border-primary" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}