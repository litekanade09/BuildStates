import type { Metadata } from 'next'
// [NEW] Modern, premium typography selection for the architectural theme
import { Plus_Jakarta_Sans, Outfit } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

// [NEW] Configure Plus Jakarta Sans for highly readable, geometric body text
const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: '--font-jakarta'
})

// [NEW] Configure Outfit for bold, architectural headings and display text
const outfit = Outfit({ 
  subsets: ["latin"],
  variable: '--font-outfit'
})

export const metadata: Metadata = {
  title: 'BuildStates',
  description: 'We don\'t ship websites. We construct digital property.',
  keywords: ['digital studio', 'web development', 'startup websites', 'web design', 'BuildStates'],
  icons: {
    icon: '/buildstates.png',  // or '/favicon.ico'
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // [NEW] Apply custom CSS variables for our new font families to the html element
    <html lang="en" className={`${jakarta.variable} ${outfit.variable}`}>
      {/* [NEW] Apply standard antialiasing for smoother premium font rendering */}
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
