'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: '4+', label: 'Projects Completed' },
  { value: '3', label: 'Languages Spoken' },
  { value: '2+', label: 'Years of Coding' },
  { value: '10+', label: 'Technologies Mastered' },
]

function StatCard({ value, label, index }: { value: string; label: string; index: number }) {
  const [displayedValue, setDisplayedValue] = useState('0')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return

    const numericValue = parseInt(value)
    let current = 0

    const increment = Math.ceil(numericValue / 50)
    const timer = setInterval(() => {
      current += increment
      if (current >= numericValue) {
        current = numericValue
        clearInterval(timer)
      }
      setDisplayedValue(current.toString())
    }, 30)

    return () => clearInterval(timer)
  }, [inView, value])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="p-6 bg-dark-card/50 rounded-lg border border-accent-violet/20 hover:border-accent-violet/50 transition-all hover:shadow-lg hover:shadow-accent-violet/10"
    >
      <div className="text-4xl font-bold font-display text-accent-violet mb-2">
        {displayedValue}{value.includes('+') ? '+' : ''}
      </div>
      <div className="text-text-muted text-sm">{label}</div>
    </motion.div>
  )
}

export function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-display text-text-primary mb-6">
              About Me
            </h2>
            <p className="text-text-muted text-lg leading-relaxed mb-6">
              I&apos;m Nadhem, a software engineering student at ISIMM Monastir. I love building end-to-end applications — from elegant UIs to robust APIs. I&apos;m especially drawn to real-time features, 3D experiences, and clean architecture.
            </p>
            <p className="text-text-muted text-lg leading-relaxed">
              With a strong foundation in full-stack development, I&apos;m passionate about writing clean, maintainable code and creating intuitive user experiences. I continuously learn new technologies and best practices to deliver high-quality solutions.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <StatCard key={stat.label} {...stat} index={index} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
