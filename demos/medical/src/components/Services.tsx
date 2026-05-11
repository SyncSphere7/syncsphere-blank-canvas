import React from 'react'
import { motion } from 'framer-motion'
import { Stethoscope, Sparkles, Bone, AlignCenter, AlertCircle, Baby } from 'lucide-react'

const services = [
  {
    icon: Stethoscope,
    title: 'General Dentistry',
    description: 'Comprehensive checkups, cleanings, fillings, and preventive care to keep your smile healthy year-round.',
    color: 'from-blue to-blue-dark',
  },
  {
    icon: Sparkles,
    title: 'Cosmetic Dentistry',
    description: 'Teeth veneers, whitening, and smile makeovers designed to give you the confidence to smile freely.',
    color: 'from-red to-red-dark',
  },
  {
    icon: Bone,
    title: 'Dental Implants',
    description: 'Permanent tooth replacement with titanium implants that look, feel, and function like natural teeth.',
    color: 'from-gold to-yellow-600',
  },
  {
    icon: AlignCenter,
    title: 'Orthodontics',
    description: 'Traditional braces and clear aligners for all ages. Straighten your teeth and correct bite issues.',
    color: 'from-emerald-500 to-emerald-700',
  },
  {
    icon: AlertCircle,
    title: 'Emergency Care',
    description: 'Same-day emergency appointments for toothaches, broken teeth, and urgent dental needs.',
    color: 'from-orange-500 to-orange-700',
  },
  {
    icon: Baby,
    title: 'Pediatric Dentistry',
    description: 'Gentle, fun dental care for children. We make visits enjoyable so kids develop healthy habits early.',
    color: 'from-purple-500 to-purple-700',
  },
]

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-gray-50 dark:bg-navy-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-red font-semibold text-sm uppercase tracking-wider mb-3">Our Services</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy dark:text-white mb-4">
            Complete Dental Care
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            From routine cleanings to advanced procedures, we offer everything you need under one roof.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group bg-white dark:bg-navy rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-800"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-navy dark:text-white mb-3">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{service.description}</p>
              <a
                href="#contact"
                className="inline-flex items-center gap-1 text-red font-semibold text-sm mt-4 group-hover:gap-2 transition-all"
              >
                Learn more →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
