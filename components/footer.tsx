import Link from 'next/link'
import { Mail, Linkedin, Twitter, Github } from 'lucide-react'
import { ScrollAnimation } from './ui/scroll-animation'

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <ScrollAnimation>
        <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="md:col-span-5">
              <Link href="/" className="flex items-center gap-2 group mb-4">
                
                <span className="font-display text-3xl font-bold">BuildStates</span>
              </Link>
              <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
                We don&apos;t ship websites. We construct digital property. Building solid foundations for startups and founders who refuse to settle for generic.
              </p>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-3">
              <h3 className="font-display font-semibold mb-4 text-foreground">Quick Links</h3>
              <ul className="space-y-3">
                {[
                  { href: '/#foundations', label: 'Foundations' },
                  { href: '/#capabilities', label: 'Capabilities' },
                  { href: '/#case-studies', label: 'Case Studies' },
                  { href: '/#contact', label: 'Let\'s Build' },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="md:col-span-4">
              <h3 className="font-display font-semibold mb-4 text-foreground">Get in Touch</h3>
              <div className="space-y-3">
                <a
                  href="mailto:work.buildstates@gmail.com"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary text-sm transition-colors group"
                >
                  <Mail size={16} className="text-primary" />
                  <span>work.buildstates@gmial.com</span>
                </a>
                <div className="flex gap-3 pt-2">
                  {[
                    { icon: Twitter, href: '#', label: 'Twitter' },
                    { icon: Linkedin, href: '#', label: 'LinkedIn' },
                    { icon: Github, href: '#', label: 'GitHub' },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-9 h-9 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                    >
                      <social.icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} BuildStates. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </footer>
  )
}
