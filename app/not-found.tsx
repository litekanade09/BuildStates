import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Construction, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background grain-texture flex items-center justify-center p-4">
      <div className="max-w-md mx-auto text-center space-y-8">
        <div className="relative w-32 h-32 mx-auto">
          <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse" />
          <div className="absolute inset-2 bg-background rounded-full border-2 border-primary/50 flex items-center justify-center">
            <Construction className="w-16 h-16 text-primary" />
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="font-display text-4xl font-bold">404: Site Missing</h1>
          <p className="text-muted-foreground text-lg">
            The coordinates you provided don't lead to any known structure. This area hasn't been developed yet.
          </p>
        </div>

        <Button asChild size="lg" className="font-bold">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" /> Return to Base
          </Link>
        </Button>
      </div>

      {/* Background blueprint grid */}
      <div className="absolute inset-0 bg-blueprint opacity-10 pointer-events-none -z-10" />
    </div>
  )
}
