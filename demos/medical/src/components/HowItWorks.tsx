import React from 'react'
import { motion } from 'framer-motion'
import { CalendarCheck, Search, Sparkles } from 'lucide-react'

const steps = [
  {
    icon: CalendarCheck,
    step: '01',
    title: 'Book Your Appointment',
    description: 'Schedule online or give us a call. We offer flexible hours including evenings and weekends to fit your busy life.',
  },
  {
    icon: Search,
    step: '02',
    title: 'Comprehensive Exam',
    description: 'We perform a thorough examination with digital X-rays and create a personalized treatment plan just for you.',
  },
  {
    icon: Sparkles,
    step: '03',
    title: 'Enjoy Your New Smile',
    description: 'Receive expert care in our comfortable office. Leave with a brighter, healthier smile and a plan for ongoing care.',
  },
]

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-white dark:bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-red font-semibold text-sm uppercase tracking-wider mb-3">How It Works</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy dark:text-white mb-4">
            Your Journey to a Healthier Smile
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Getting started is easy. Three simple steps to transform your dental health.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="relative text-center"
            >
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px border-t-2 border-dashed border-gray-200 dark:border-gray-700" />
              )}
              <div className="relative inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-red to-red-dark rounded-3xl mb-6 shadow-lg shadow-red/20">
                <step.icon size={36} className="text-white" />
                <span className="absolute -top-2 -right-2 w-8 h-8 bg-gold rounded-full flex items-center justify-center text-xs font-bold text-navy">
                  {step.step}
                </span>
              </div>
              <h3 className="text-xl font-bold text-navy dark:text-white mb-3">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-sm mx-auto">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
