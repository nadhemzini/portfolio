'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const projectsData = [
  {
    title: 'School Management System',
    type: 'Individual Project',
    description: 'Full platform facilitating real-time communication between schools and parents.',
    tech: ['React', 'TypeScript', 'React Native', 'Laravel'],
    features: ['Web & mobile UI', 'Real-time messaging & notifications', 'Multi-role UX'],
    icon: '🏫',
  },
  {
    title: 'HR & Administrative Document Management',
    type: 'Team Project',
    description: 'Web app for university administrative management. Responsible for entire frontend.',
    tech: ['Next.js', 'Express', 'React Router', 'React Hooks'],
    features: ['Modern responsive UI', 'Smooth API integration', 'Efficient state management'],
    icon: '🏛️',
  },
  {
    title: 'GED (Electronic Document Management System)',
    type: 'Individual Project',
    description: 'Online application to organize and manage documents.',
    tech: ['NestJS', 'TypeScript', 'PostgreSQL', 'Prisma ORM', 'REST API', 'JWT'],
    features: ['Category classification', 'PDF split & merge', 'Secure file sharing'],
    icon: '📁',
  },
  {
    title: 'Maco Confection: Immersive 3D Platform',
    type: 'Team Project',
    description: 'Immersive 3D platform with interactive showroom and 3D model inspection.',
    tech: ['Unreal Engine 5', 'MetaHuman', 'Convai AI', 'Firebase'],
    features: ['Secure auth', 'Real-time cloud DB', 'Intelligent NPC & MetaHuman interaction'],
    icon: '🌐',
  },
]

function ProjectCard({ project, index }: { project: typeof projectsData[0]; index: number }) {
  const ref = useRef(null)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="group relative p-6 bg-dark-card/30 border border-accent-violet/20 rounded-lg hover:border-accent-violet/60 hover:bg-dark-card/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent-violet/10 overflow-hidden"
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-violet/5 to-accent-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="text-4xl mb-2">{project.icon}</div>
            <h3 className="text-2xl font-bold font-display text-text-primary mb-1">
              {project.title}
            </h3>
            <p className="text-accent-violet text-sm font-semibold">{project.type}</p>
          </div>
          <ExternalLink size={20} className="text-text-muted group-hover:text-accent-cyan transition-colors" />
        </div>

        {/* Description */}
        <p className="text-text-muted text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Features */}
        <div className="mb-4">
          <p className="text-xs text-text-muted/70 font-semibold uppercase tracking-wider mb-2">Key Features</p>
          <ul className="space-y-1">
            {project.features.map((feature) => (
              <li key={feature} className="text-text-muted text-sm flex items-center gap-2">
                <span className="w-1 h-1 bg-accent-violet rounded-full"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs bg-accent-violet/10 text-accent-violet border border-accent-violet/30 rounded-full hover:border-accent-violet hover:bg-accent-violet/20 transition-all duration-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Border glow on hover */}
      <div className="absolute inset-0 rounded-lg border border-accent-cyan/0 group-hover:border-accent-cyan/50 transition-all duration-300 pointer-events-none"></div>
    </motion.div>
  )
}

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display text-text-primary mb-4">
            Projects
          </h2>
          <p className="text-text-muted text-lg">
            A selection of projects showcasing my skills in full-stack development and 3D technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
