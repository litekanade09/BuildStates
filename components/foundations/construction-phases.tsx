"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const phases = [
  {
    phase: "01",
    title: "The Plot",
    concept: "Your Idea",
    description:
      "We listen carefully to your ideas, analyze your goals, and understand your startup's vision to ensure every decision aligns with your business objectives.",
  },
  {
    phase: "02",
    title: "Blueprint",
    concept: "Design",
    description:
      "We create clean layouts, intuitive navigation, and modern interfaces that align with your brand and guide users effortlessly.",
  },
  {
    phase: "03",
    title: "Construction",
    concept: "Development",
    description:
      "We start building. Using reliable technologies and best practices, we develop fast, responsive, and scalable websites with strong technical foundations.",
  },
  {
    phase: "04",
    title: "Scaling",
    concept: "Growth",
    description:
      "We optimize your website for performance, usability, and growth helping you attract users, build trust, and turn your website into a long-term digital asset.",
  },
]

export function ConstructionPhases() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
            >
              <Card
                className="
                  h-full 
                  transition-all 
                  duration-300 
                  hover:-translate-y-2 
                  hover:shadow-xl 
                  group
                "
              >
                <CardContent className="p-6 flex flex-col h-full">
                  {/* Phase Number */}
                  <span className="font-mono text-sm font-bold text-muted-foreground mb-4 transition-colors group-hover:text-primary">
                    {phase.phase}
                  </span>

                  {/* Concept */}
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary font-mono mb-3">
                    {phase.concept} Phase
                  </span>

                  {/* Title */}
                  <h3 className="font-display text-xl font-bold mb-4 leading-tight transition-colors group-hover:text-primary">
                    {phase.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1 transition-colors group-hover:text-foreground">
                    {phase.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
