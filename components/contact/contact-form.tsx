"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Hammer, Check, Loader2 } from "lucide-react"

export function ContactForm() {
  const [step, setStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    mobile: "",
    details: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSending(true)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        const errorData = await res.json()
        throw new Error(errorData.error?.message || errorData.error || "Failed to send message")
      }

      setIsSubmitted(true)
    } catch (error) {
      console.error("Failed to submit form:", error)
      alert("Failed to send your request. Please try again later or email us directly.")
    } finally {
      setIsSending(false)
    }
  }

  if (isSubmitted) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-20">
        <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-primary">
          <Check className="text-primary" size={40} />
        </div>
        <h3 className="font-display text-3xl font-bold mb-4">Request Filed.</h3>
        <p className="text-muted-foreground">
          we will get back to you within 24 hours.
        </p>
      </motion.div>
    )
  }

  // Define transition variables for smooth sliding
  const slideVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 relative z-10 overflow-hidden">
      {/* Progress Header */}
      <div className="flex items-center justify-between mb-8">
        <span className="text-xs font-bold uppercase tracking-widest text-primary font-display">
          Building Request: Step {step} of 3
        </span>
        <div className="flex gap-2">
          {[1, 2, 3].map((s) => (
            <div key={s} className={`h-2 w-12 rounded-full transition-colors ${s <= step ? "bg-primary" : "bg-border"}`} />
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div 
            key="step1"
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <Label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Full Name
              </Label>
              <Input
                id="name"
                placeholder="your name"
                className="bg-background focus:border-primary/50 transition-colors"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your email"
                className="bg-background focus:border-primary/50 transition-colors"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <Button type="button" onClick={() => setStep(2)} className="w-full font-bold h-12 shadow-md hover:shadow-primary/20 transition-all hover:-translate-y-0.5">
              Continue to Specifications
            </Button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div 
            key="step2"
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <Label htmlFor="company" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Startup Name
              </Label>
              <Input
                id="company"
                placeholder="company name"
                className="bg-background focus:border-primary/50 transition-colors"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="mobile" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Mobile Number
              </Label>
              <Input
                id="mobile"
                type="tel"
                placeholder="your mobile number"
                className="bg-background focus:border-primary/50 transition-colors"
                required
                value={formData.mobile}
                onChange={handleChange}
              />
            </div>
            <div className="flex gap-4">
              <Button variant="outline" onClick={() => setStep(1)} className="flex-1 font-bold h-12 bg-transparent hover:bg-muted/50 transition-colors">
                Back
              </Button>
              <Button type="button" onClick={() => setStep(3)} className="flex-1 font-bold h-12 shadow-md hover:shadow-primary/20 transition-all hover:-translate-y-0.5">
                Next Step
              </Button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div 
            key="step3"
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <Label htmlFor="details" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                What are you building?
              </Label>
              <Textarea
                id="details"
                placeholder="Tell us about the digital property you want to construct..."
                className="bg-background min-h-[150px] focus:border-primary/50 transition-colors"
                required
                value={formData.details}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <Button variant="outline" onClick={() => setStep(2)} className="flex-1 font-bold h-12 bg-transparent hover:bg-muted/50 transition-colors">
                  Back
                </Button>
                <Button type="submit" className="flex-1 font-bold h-12 shadow-md shadow-primary/20 hover:shadow-primary/40 transition-all hover:-translate-y-0.5" disabled={isSending}>
                  {isSending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      <Hammer className="mr-2" size={18} /> Break Ground
                    </>
                  )}
                </Button>
              </div>
              
              {/* Trust Signal */}
              <p className="text-xs text-center text-muted-foreground mt-2 flex items-center justify-center gap-1.5">
                <span className="text-primary">🔒</span> We reply within 24 hours. No spam, ever.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  )
}

