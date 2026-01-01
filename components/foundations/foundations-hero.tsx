"use client"

import { motion } from "framer-motion"

export function FoundationsHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-border/50">
      <div className="absolute inset-0 bg-blueprint opacity-10 pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-12 h-[1px] bg-primary" />
            <span className="text-primary text-xs font-bold uppercase tracking-widest">Architectural Methodology</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl font-bold mb-8 leading-[1.1]"
          >
            Solid foundations for <br />
            <span className="text-muted-foreground">unstoppable startups.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-lg md:text-xl leading-relaxed"
          >
            We don&apos;t just code; we engineer. Our methodology is rooted in architectural principles, ensuring that
            your digital real estate is scalable, secure, and built to withstand market shifts.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
