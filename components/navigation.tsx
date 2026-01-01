"use client"

import Link from "next/link"
import { Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  return (
    // <CHANGE> Removed scrolled state and kept navigation transparent/minimal
    <nav className="fixed top-0 w-full z-50 h-20 border-b border-transparent bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          
          <span className="text-3xl md:text-5xl font-bold tracking-tighter uppercase" style={{ fontFamily: 'Copperplate, "Copperplate Gothic Light", serif' }}>BuildStates</span>
        </Link>

        {/* <CHANGE> Single button pointing to contact section */}
        
      </div>
    </nav>
  )
}
