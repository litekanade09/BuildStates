"use client"

import React, { useRef, useState } from "react"
import { motion } from "framer-motion"

const phases = [
  {
    phase: "01",
    title: "Your Idea Phase",
    description:
      "We listen carefully to your ideas, analyze your goals, and understand your startup's vision to ensure every decision aligns with your business objectives.",
  },
  {
    phase: "02",
    title: "Design Phase",
    description:
      "We create clean layouts, intuitive navigation, and modern interfaces that align with your brand and guide users effortlessly.",
  },
  {
    phase: "03",
    title: "Development Phase",
    description:
      "We start building. Using reliable technologies and best practices, we develop fast, responsive, and scalable websites with strong technical foundations.",
  },
  {
    phase: "04",
    title: "Growth Phase",
    description:
      "We optimize your website for performance, usability, and growth helping you attract users, build trust, and turn your website into a long-term digital asset.",
  },
]

// [NEW] Advanced Spotlight Component (21st.dev style)
function SpotlightCard({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const divRef = useRef<HTMLDivElement>(null)
  const [isFocused, setIsFocused] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return
    const rect = divRef.current.getBoundingClientRect()
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={() => { setIsFocused(true); setOpacity(1) }}
      onBlur={() => { setIsFocused(false); setOpacity(0) }}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative overflow-hidden rounded-xl border border-border/40 bg-card/40 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(500px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.08), transparent 40%)`,
        }}
      />
      {children}
    </div>
  )
}

export function ConstructionPhases() {
  return (
    <section className="pt-16 pb-24" id="foundations">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              className="h-full group"
            >
              <SpotlightCard className={`h-full flex flex-col p-8 ${index === 0 ? "border-primary/50" : ""}`}>
                {/* Phase Number */}
                <span className="font-mono text-sm font-bold text-muted-foreground mb-6 transition-colors group-hover:text-primary">
                  {phase.phase}
                </span>

                {/* Title */}
                <h3 className="font-display text-2xl font-bold mb-4 leading-tight transition-colors group-hover:text-foreground text-foreground/90">
                  {phase.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground/90 text-lg leading-relaxed font-medium flex-1 transition-colors group-hover:text-foreground/90">
                  {phase.description}
                </p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
