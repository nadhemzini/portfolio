'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

const roles = [
  'Software Engineering Student',
  'Full-Stack Developer',
  'React & Laravel Builder',
  'Problem Solver',
]

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')

  useEffect(() => {
    const currentRole = roles[roleIndex]
    let index = 0

    if (displayedText.length === currentRole.length) {
      const timer = setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length)
        setDisplayedText('')
      }, 2000)
      return () => clearTimeout(timer)
    }

    const timer = setTimeout(() => {
      setDisplayedText(currentRole.slice(0, index + 1))
    }, 100)

    return () => clearTimeout(timer)
  }, [displayedText, roleIndex])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section id="hero" className="min-h-screen pt-20 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left: Text Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <motion.h1
                className="text-5xl md:text-6xl font-bold font-display text-text-primary mb-2"
                variants={itemVariants}
              >
                ZINI NADHEM
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl text-accent-violet font-display h-8 min-h-8"
                variants={itemVariants}
              >
                {displayedText}
                <span className="animate-pulse">|</span>
              </motion.p>
            </div>

            <motion.p
              className="text-text-muted text-base md:text-lg leading-relaxed max-w-md"
              variants={itemVariants}
            >
              Passionate about solving complex problems through clean, scalable code. Strong full-stack foundation with a continuous learning mindset.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div className="flex flex-col sm:flex-row gap-4" variants={itemVariants}>
              <Link
                href="#projects"
                className="px-6 py-3 bg-accent-violet hover:bg-accent-cyan text-dark-bg font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent-violet/50 text-center"
              >
                View Projects
              </Link>
              <a
                href="C:\Users\Nadhem\OneDrive - Ministere de l'Enseignement Superieur et de la Recherche Scientifique\Bureau\ing2\portfolio\public\ZINI_NADHEM_CV.pdf"
                download
                className="px-6 py-3 border-2 border-accent-violet hover:border-accent-cyan text-accent-violet hover:text-accent-cyan rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-accent-violet/20 text-center"
              >
                Download CV
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div className="flex gap-6 pt-4" variants={itemVariants}>
              <a
                href="https://github.com/nadhemzini"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-accent-violet transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/nadhem-zini"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-accent-violet transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:zininadhem159@gmail.com"
                className="text-text-muted hover:text-accent-violet transition-colors"
              >
                <Mail size={24} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Avatar */}
          <motion.div
            className="flex justify-center items-center"
            variants={itemVariants}
          >
            <motion.div
              className="relative w-64 h-64 md:w-80 md:h-80"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-violet to-accent-cyan opacity-30 blur-2xl animate-glow"></div>
              <div className="absolute inset-0 rounded-full border-2 border-accent-violet/50"></div>
              <Image
                src="/photo.jpg"
                alt="Zini Nadhem"
                fill
                className="rounded-full object-cover"
                priority
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
