"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-background/95">
      {/* Background blueprint grid */}
      <div className="absolute inset-0 bg-blueprint opacity-10 pointer-events-none" />
      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* <CHANGE> Removed "Digital Real Estate Agency" badge */}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            // <CHANGE> Reduced font sizes for the heading
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-[1.1] text-balance"
          >
            We don&apos;t ship websites.{" "}
            <span className="text-primary underline decoration-primary/30 underline-offset-8">
              We construct digital property.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            BuildStates helps startups and founders secure their digital future with architectural precision and
            high-growth foundations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button asChild size="lg" className="h-14 px-8 text-base font-bold min-w-[200px]">
              <Link href="/#contact">
                Let&apos;s Build <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-14 px-8 text-base font-bold min-w-[200px] bg-transparent"
            >
              <Link href="/#case-studies">View Case Studies</Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Decorative Assembly Elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 border border-primary/10 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 border border-secondary/10 rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
    </section>
  )
}
