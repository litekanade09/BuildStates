"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Twitter, Github, ArrowUpRight } from 'lucide-react'

// [NEW] Container variants for staggering footer links when they come into view
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 50 } }
}

export function Footer() {
  return (
    // [NEW] Added a visually prominent border and architectural gradient background to the footer
    <footer className="border-t border-border/40 bg-card/50 relative overflow-hidden">
      {/* Decorative architectural circles in the background */}
      <div className="absolute -bottom-[200px] -right-[200px] w-[500px] h-[500px] border border-primary/5 rounded-full pointer-events-none" />
      <div className="absolute -bottom-[100px] -right-[100px] w-[300px] h-[300px] border border-secondary/5 rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 pt-20 pb-8 relative z-10">
        {/* [NEW] Mega Footer CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center lg:text-left flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8"
        >
          <div>
            <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-foreground">
              Ready to <span className="text-primary italic">Build?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-lg">
              Let&apos;s engineer your next digital property with uncompromising precision.
            </p>
          </div>
          <Link href="#contact" className="group inline-flex items-center gap-3 text-2xl font-bold hover:text-primary transition-colors text-foreground">
            Start the Conversation
            <ArrowUpRight className="w-8 h-8 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 border-t border-border/40 pt-16">
          {/* Brand Section */}
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-2 group mb-6">
              <span className="text-4xl font-bold tracking-tighter uppercase text-foreground" style={{ fontFamily: 'Copperplate, "Copperplate Gothic Light", serif' }}>BuildStates</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm leading-relaxed mb-8">
              We don&apos;t ship websites. We construct digital property. Building solid foundations for startups and founders who refuse to settle for generic.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Github, href: '#', label: 'GitHub' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-background border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all hover:-translate-y-1"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="md:col-span-3 lg:col-start-7"
          >
            <h3 className="font-display text-lg font-semibold mb-6 text-foreground">Sitemap</h3>
            <ul className="space-y-4">
              {[
                { href: '/#foundations', label: 'Foundations' },
                { href: '/#capabilities', label: 'Capabilities' },
                { href: '/#case-studies', label: 'Case Studies' },
                { href: '/#contact', label: 'Let\'s Build' },
              ].map((link) => (
                <motion.li key={link.href} variants={item}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary text-base transition-colors inline-block hover:translate-x-1"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="md:col-span-4 lg:col-span-3"
          >
            <h3 className="font-display text-lg font-semibold mb-6 text-foreground">Contact</h3>
            <div className="space-y-4">
              <motion.a
                variants={item}
                href="mailto:hello@buildstates.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary text-base transition-colors group"
              >
                <div className="w-8 h-8 rounded bg-background border border-border/50 flex items-center justify-center group-hover:border-primary/50 transition-colors">
                  <Mail size={14} className="text-primary" />
                </div>
                <span>hello@buildstates.com</span>
              </motion.a>
              <motion.a
                variants={item}
                target="_blank"
                rel="noopener noreferrer"
                href="https://calendly.com/"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary text-base transition-colors group"
              >
                <div className="w-8 h-8 rounded bg-background border border-border/50 flex items-center justify-center group-hover:border-primary/50 transition-colors">
                  <span className="text-primary font-bold text-lg leading-none mt-[-2px]">C</span>
                </div>
                <span>Schedule a Meeting</span>
              </motion.a>
              <motion.div variants={item} className="pt-4 text-sm text-muted-foreground/60">
                Operating digitally worldwide.<br/>
                Based in the Cloud.
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/40 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} BuildStates Engineering. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link href="#" className="font-display text-muted-foreground hover:text-primary text-xs tracking-widest uppercase transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="font-display text-muted-foreground hover:text-primary text-xs tracking-widest uppercase transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
