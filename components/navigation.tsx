"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function Navigation() {
  return (
    // [NEW] Added robust glassmorphism effects and structural comments
    <nav className="fixed top-0 w-full z-50 h-20 border-b border-border/40 bg-background/70 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        
        {/* [NEW] Animated Logo Link integrated with Framer Motion */}
        <Link href="/" className="flex items-center gap-2 group">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-2xl md:text-3xl font-bold tracking-tighter uppercase text-foreground group-hover:text-primary transition-colors" 
            style={{ fontFamily: 'Copperplate, "Copperplate Gothic Light", serif' }}
          >
            BuildStates
          </motion.span>
        </Link>

        {/* [NEW] Animated Call To Action Button */}
        <div className="flex items-center gap-8">
          {/* [NEW] Desktop Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex items-center gap-6"
          >
            <Link href="/#foundations" className="text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">Foundations</Link>
            <Link href="/#capabilities" className="text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">Capabilities</Link>
            <Link href="/#case-studies" className="text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">Case Studies</Link>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          >
            <Button asChild variant="default" className="font-semibold shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95">
              <Link href="/#contact">Build Now</Link>
            </Button>
          </motion.div>
        </div>
        
      </div>
    </nav>
  )
}
