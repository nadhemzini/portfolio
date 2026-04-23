'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Mail, Phone, Github, Linkedin } from 'lucide-react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage('Thank you for your message! I&apos;ll get back to you soon.')
      setFormData({ name: '', email: '', message: '' })
      setIsSubmitting(false)

      setTimeout(() => {
        setSubmitMessage('')
      }, 5000)
    }, 1000)
  }

  const contactInfo = [
    { icon: MapPin, label: 'Monastir, Tunisia' },
    { icon: Mail, label: 'zininadhem159@gmail.com', href: 'mailto:zininadhem159@gmail.com' },
    { icon: Phone, label: '+216 93 384 231', href: 'tel:+21693384231' },
    { icon: Github, label: 'github.com/nadhemzini', href: 'https://github.com/nadhemzini' },
    { icon: Linkedin, label: 'LinkedIn: nadhem zini', href: 'https://linkedin.com/in/nadhem-zini' },
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display text-text-primary mb-4">
            Get In Touch
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Have a question or want to collaborate? Feel free to reach out. I&apos;d love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold font-display text-text-primary mb-6">
              Contact Information
            </h3>

            {contactInfo.map((info, index) => {
              const Icon = info.icon
              const isLink = info.href !== undefined

              return (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {isLink ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 text-text-muted hover:text-accent-violet transition-colors group"
                    >
                      <div className="p-3 bg-dark-card/50 rounded-lg group-hover:bg-dark-card group-hover:border-accent-violet/50 border border-accent-violet/20 transition-all">
                        <Icon size={24} />
                      </div>
                      <span className="text-lg">{info.label}</span>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 text-text-muted">
                      <div className="p-3 bg-dark-card/50 rounded-lg border border-accent-violet/20">
                        <Icon size={24} />
                      </div>
                      <span className="text-lg">{info.label}</span>
                    </div>
                  )}
                </motion.div>
              )
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="p-8 bg-dark-card/30 border border-accent-violet/20 rounded-lg hover:border-accent-violet/50 transition-all"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-text-primary font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-bg border border-accent-violet/30 rounded-lg text-text-primary placeholder-text-muted/50 focus:outline-none focus:border-accent-violet focus:ring-2 focus:ring-accent-violet/20 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-text-primary font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-bg border border-accent-violet/30 rounded-lg text-text-primary placeholder-text-muted/50 focus:outline-none focus:border-accent-violet focus:ring-2 focus:ring-accent-violet/20 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-text-primary font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-dark-bg border border-accent-violet/30 rounded-lg text-text-primary placeholder-text-muted/50 focus:outline-none focus:border-accent-violet focus:ring-2 focus:ring-accent-violet/20 transition-all resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3 bg-accent-violet hover:bg-accent-cyan disabled:opacity-50 text-dark-bg font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent-violet/50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>

              {submitMessage && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center text-accent-violet text-sm"
                >
                  {submitMessage}
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
