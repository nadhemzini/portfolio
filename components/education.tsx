'use client'

import { motion } from 'framer-motion'

const educationData = [
  {
    year: '2024 – Present',
    school: 'Institut Supérieur d\'Informatique et de Mathématiques de Monastir (ISIMM)',
    degree: 'Engineering Cycle – Software Engineering',
    icon: '🎓',
  },
  {
    year: '2021 – 2024',
    school: 'Faculté des Sciences et Technologies de Sidi Bouzid',
    degree: 'Bachelor\'s Degree in Computer Science',
    icon: '🎓',
  },
]

function EducationItem({ item, index, isLast }: { item: typeof educationData[0]; index: number; isLast: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative flex gap-8"
    >
      {/* Timeline Line */}
      {!isLast && (
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          className="absolute left-8 top-20 w-1 h-20 bg-gradient-to-b from-accent-violet to-accent-cyan origin-top"
        ></motion.div>
      )}

      {/* Timeline Dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.4, delay: index * 0.2 }}
        className="relative z-10 flex-shrink-0"
      >
        <div className="w-16 h-16 rounded-full bg-dark-card border-2 border-accent-violet flex items-center justify-center text-2xl">
          {item.icon}
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
        className="flex-1 pt-2"
      >
        <div className="text-accent-violet text-sm font-semibold uppercase tracking-wider mb-2">
          {item.year}
        </div>
        <h3 className="text-xl font-bold font-display text-text-primary mb-1">
          {item.school}
        </h3>
        <p className="text-text-muted text-base">{item.degree}</p>
      </motion.div>
    </motion.div>
  )
}

export function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display text-text-primary mb-4">
            Education
          </h2>
        </motion.div>

        <div className="space-y-8 relative max-w-2xl">
          {educationData.map((item, index) => (
            <EducationItem
              key={item.school}
              item={item}
              index={index}
              isLast={index === educationData.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
