'use client'

import { motion } from 'framer-motion'

const skillsData = [
  {
    category: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'PHP', 'C', 'HTML', 'CSS', 'SQL'],
  },
  {
    category: 'Frameworks & Libraries',
    skills: ['ReactJS', 'React Native', 'Next.js', 'NestJS', 'Laravel', 'Bootstrap', 'Spring Framework', 'Unreal Engine 5'],
  },
  {
    category: 'Tools & Databases',
    skills: ['MySQL', 'PostgreSQL', 'Prisma ORM', 'Git', 'VS Code', 'Firebase', 'REST API', 'JWT'],
  },
]

function SkillBadge({ skill, index }: { skill: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="px-4 py-2 bg-dark-card/50 border border-accent-violet/30 rounded-full text-text-muted text-sm hover:border-accent-violet hover:text-accent-cyan hover:shadow-lg hover:shadow-accent-violet/20 transition-all duration-300 cursor-default"
    >
      {skill}
    </motion.div>
  )
}

function SkillCategory({ category, skills }: { category: string; skills: string[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-4"
    >
      <div className="flex items-center gap-3">
        <div className="w-1 h-6 bg-gradient-to-b from-accent-violet to-accent-cyan rounded-full"></div>
        <h3 className="text-xl font-semibold font-display text-text-primary">{category}</h3>
      </div>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <SkillBadge key={skill} skill={skill} index={index} />
        ))}
      </div>
    </motion.div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display text-text-primary mb-4">
            Technical Skills
          </h2>
          <p className="text-text-muted text-lg">
            A comprehensive overview of my technical expertise across languages, frameworks, and tools.
          </p>
        </motion.div>

        <div className="space-y-8">
          {skillsData.map((category) => (
            <SkillCategory
              key={category.category}
              category={category.category}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
