"use client"

import { motion } from "framer-motion"

export function CapabilitiesHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-blueprint opacity-10 pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl text-center mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
          >
            Our Property <span className="text-primary">Portfolio.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted-foreground text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed"
          >
            From high-converting landing plots to enterprise skyscrapers, we build digital real estate that scales.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
