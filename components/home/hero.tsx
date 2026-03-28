"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Hexagon, TrendingUp, Cpu } from "lucide-react"

// [NEW] Staggered animation variants for the Hero text entry
const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
}

// [NEW] Spring-based entry animation for individual hero items. Fixed TS strict string literal with 'as const'.
const itemVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 50 } }
}

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-background">
      {/* [NEW] Dynamic background components: Blueprint grid and animated glowing orbs */}
      <div className="absolute inset-0 bg-blueprint opacity-20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl opacity-40 -translate-x-1/4 translate-y-1/4 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 w-full">
        {/* [NEW] Split the hero into a two-column layout on large screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* [NEW] Left Column: Hero Typography & CTAs */}
          <motion.div 
            className="flex flex-col text-left max-w-2xl"
            variants={containerVariant}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariant} className="mb-6 flex items-center gap-3">
               <span className="w-8 h-[2px] bg-primary rounded-full"></span>
               <span className="text-sm font-bold uppercase tracking-widest text-primary font-display">Uncompromising Quality</span>
            </motion.div>

            <motion.h1 
              variants={itemVariant}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.05] text-balance text-foreground shadow-sm"
            >
              We don&apos;t ship websites. <br />
              <span className="inline-flex animate-text-gradient bg-gradient-to-r from-primary via-secondary to-primary bg-[200%_auto] bg-clip-text text-transparent pb-1">
                We construct digital property.
              </span>
            </motion.h1>

            <motion.p 
              variants={itemVariant}
              className="text-muted-foreground text-lg md:text-xl mb-10 leading-relaxed max-w-xl"
            >
              BuildStates designs and engineers scalable, high-conversion platforms for ambitious startups. We lay the architectural foundations for your digital future.
            </motion.p>

            <motion.div variants={itemVariant} className="flex flex-col sm:flex-row items-start gap-4">
              {/* [NEW] Magic Border Button (21st.dev style) */}
              <Link 
                href="/#contact" 
                className="relative inline-flex h-14 min-w-[200px] overflow-hidden rounded-md p-[1px] shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all hover:-translate-y-1 group"
              >
                <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_40%,oklch(0.82_0.15_85)_100%)] opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-[5px] bg-background/95 px-8 text-base font-bold text-foreground backdrop-blur-3xl transition-colors group-hover:bg-background/80">
                  Break Ground <ArrowRight className="ml-2 h-5 w-5" />
                </span>
              </Link>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-14 px-8 text-base font-bold min-w-[200px] bg-background/50 backdrop-blur-md border-border/50 hover:bg-muted/50 transition-all hover:-translate-y-1"
              >
                <Link href="/#case-studies">Tour Properties</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* [NEW] Right Column: Animated floating architectural elements */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden lg:relative lg:flex items-center justify-center h-full min-h-[500px]"
          >
            <div className="relative w-full aspect-square max-w-[500px]">
              {/* Central structure representing architectural blueprint rings */}
              <div className="absolute inset-0 border border-primary/20 rounded-full animate-[spin_60s_linear_infinite]" />
              <div className="absolute inset-8 border border-secondary/20 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
              
              {/* Floating Cards conveying core values */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[10%] left-[5%] bg-card/80 backdrop-blur-xl border border-border/50 p-6 rounded-2xl shadow-2xl flex items-center gap-4 hidden md:flex"
              >
                <div className="bg-primary/20 p-3 rounded-lg"><Hexagon className="text-primary w-6 h-6" /></div>
                <div>
                  <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Foundation</p>
                  <p className="font-display font-bold text-lg text-foreground">Bulletproof Arch</p>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-[20%] right-[-5%] bg-card/80 backdrop-blur-xl border border-border/50 p-6 rounded-2xl shadow-2xl flex items-center gap-4 hidden md:flex"
              >
                <div className="bg-secondary/20 p-3 rounded-lg"><TrendingUp className="text-secondary w-6 h-6" /></div>
                <div>
                  <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Metrics</p>
                  <p className="font-display font-bold text-lg text-foreground">Optimized Conversion</p>
                </div>
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute top-[45%] left-[-15%] bg-card/80 backdrop-blur-xl border border-border/50 p-6 rounded-2xl shadow-2xl flex items-center gap-4 hidden md:flex"
              >
                <div className="bg-blue-500/20 p-3 rounded-lg"><Cpu className="text-blue-500 w-6 h-6" /></div>
                <div>
                  <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Performance</p>
                  <p className="font-display font-bold text-lg text-foreground">&lt; 100ms Latency</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}
