"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "Urban Bite Cafe",
    category: "Commercial Plot",
    image: "/urban-bite.png",
    description: "Website · Landing Page · Modern Design · Animations · Responsive",
    link: "https://urban-bite-cafe.vercel.app/", // ← Replace with your actual link
  },
  {
    title: "Branding Websites",
    category: "Residential Suite",
    image: "/branding.png",
    description: "Website · Redesigning Page · Modern Design · Product Animations · Metrics · Responsive",
    link: "https://tech-burner-branding.vercel.app/", // ← Replace with your actual link
  },
  {
    title: "EduTrack",
    category: "Enterprise Skyscraper",
    image: "/edutrack.png",
    description: "Website · Dashboards · Modern Design · Data Integration · Scalable · Full Stack Development · Responsive.",
    link: "https://github.com/litekanade09/VCET-Edutrack", // ← Replace with your actual link
  },
  {
    title: "Developers Portfolio",
    category: "Luxury Penthouse",
    image: "/developers.png",
    description: "Website · Modern Design · Animations · Responsive",
    link: "https://litekanade.vercel.app/", // ← Replace with your actual link
  },
]

export function CaseStudiesGrid() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) => {
      if (newDirection === 1) {
        return (prevIndex + 1) % projects.length
      } else {
        return prevIndex === 0 ? projects.length - 1 : prevIndex - 1
      }
    })
  }

  return (
    <section className="py-12 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="relative max-w-4xl mx-auto">
          {/* Slider Container */}
          <div className="relative h-[350px] md:h-[450px]">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x)

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1)
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1)
                  }
                }}
                className="absolute w-full h-full"
              >
                <Link 
                  href={projects[currentIndex].link} 
                  className="group block h-full"
                >
                  <Card className="h-full border-border/50 overflow-hidden relative group-hover:border-primary/50 transition-all">
                    <CardContent className="p-0 h-full relative">
                      <img
                        src={projects[currentIndex].image || "/placeholder.svg"}
                        alt={projects[currentIndex].title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge
                            variant="outline"
                            className="bg-primary/10 text-primary border-primary/20 text-[9px] font-bold uppercase tracking-widest"
                          >
                            {projects[currentIndex].category}
                          </Badge>
                        </div>
                        <h3 className="font-display text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary transition-colors">
                          {projects[currentIndex].title}
                        </h3>
                        <p className="text-muted-foreground text-sm md:text-base max-w-xl mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          {projects[currentIndex].description}
                        </p>
                        <div className="flex items-center gap-2 text-primary font-bold text-xs md:text-sm group-hover:gap-3 transition-all">
                          View Project <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </div>
                      </div>

                      {/* Architectural corner decorator */}
                      <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-primary/40 group-hover:border-primary transition-colors" />
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur border border-border/50 flex items-center justify-center hover:bg-primary hover:border-primary transition-all group"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-5 h-5 text-foreground group-hover:text-primary-foreground transition-colors" />
          </button>

          <button
            onClick={() => paginate(1)}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur border border-border/50 flex items-center justify-center hover:bg-primary hover:border-primary transition-all group"
            aria-label="Next project"
          >
            <ChevronRight className="w-5 h-5 text-foreground group-hover:text-primary-foreground transition-colors" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary w-6"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>

          {/* Counter */}
          <div className="text-center mt-3 text-xs text-muted-foreground">
            <span className="text-foreground font-bold">{currentIndex + 1}</span> / {projects.length}
          </div>
        </div>
      </div>
    </section>
  )
}