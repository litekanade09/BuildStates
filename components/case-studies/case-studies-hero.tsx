"use client"

import { motion } from "motion/react"

export function CaseStudiesHero() {
  return (
    <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 border-b border-border/50">
      <div className="absolute inset-0 bg-blueprint opacity-10 pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-5xl md:text-7xl font-bold mb-8 leading-tight"
          >
            Completed <span className="text-primary">Developments.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted-foreground text-xl md:text-2xl leading-relaxed"
          >
            A collection of digital structures built with precision, intent, and architectural integrity.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
