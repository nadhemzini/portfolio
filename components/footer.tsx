'use client'

import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: 'https://github.com/nadhemzini', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/nadhem-zini', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:zininadhem159@gmail.com', label: 'Email' },
  ]

  return (
    <footer className="bg-dark-card/50 border-t border-accent-violet/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-text-muted text-sm text-center md:text-left"
          >
            © {currentYear} Zini Nadhem · Built with Next.js & <span className="text-accent-violet">❤️</span>
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-4"
          >
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-text-muted hover:text-accent-violet hover:bg-dark-bg rounded-lg transition-all duration-300"
                  aria-label={link.label}
                >
                  <Icon size={20} />
                </a>
              )
            })}
          </motion.div>

          {/* Back to top link */}
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            href="#hero"
            className="text-text-muted hover:text-accent-violet transition-colors text-sm"
          >
            Back to top ↑
          </motion.a>
        </motion.div>
      </div>
    </footer>
  )
}
