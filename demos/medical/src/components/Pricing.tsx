import React from 'react'
import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'

const plans = [
  {
    name: 'Essential Care',
    price: '$149',
    period: '/visit',
    description: 'Perfect for routine maintenance and preventive care.',
    features: [
      'Comprehensive exam',
      'Professional cleaning',
      'Digital X-rays',
      'Oral cancer screening',
      'Treatment plan',
    ],
    popular: false,
  },
  {
    name: 'Complete Smile',
    price: '$2,500',
    period: 'starting at',
    description: 'Our most popular package for a complete smile transformation.',
    features: [
      'Everything in Essential Care',
      'Teeth whitening treatment',
      '2 cosmetic consultations',
      'Priority scheduling',
      '10% off additional treatments',
      'Free take-home whitening kit',
    ],
    popular: true,
  },
  {
    name: 'Premium Plan',
    price: '$49',
    period: '/month',
    description: 'Ongoing care membership for uninsured patients.',
    features: [
      '2 cleanings per year',
      'All necessary X-rays',
      '15% off all treatments',
      'Emergency exam included',
      'No waiting periods',
      'No deductibles or maximums',
    ],
    popular: false,
  },
]

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-gray-50 dark:bg-navy-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-red font-semibold text-sm uppercase tracking-wider mb-3">Pricing</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy dark:text-white mb-4">
            Transparent, Affordable Care
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            No hidden fees, no surprises. We believe everyone deserves access to quality dental care.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className={`relative rounded-2xl p-8 ${
                plan.popular
                  ? 'bg-gradient-to-br from-navy to-navy-light text-white shadow-2xl shadow-navy/30 scale-105 border-2 border-gold/30'
                  : 'bg-white dark:bg-navy border border-gray-100 dark:border-gray-800 shadow-sm'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-navy text-xs font-bold px-4 py-1.5 rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className={`text-xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-navy dark:text-white'}`}>
                {plan.name}
              </h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className={`text-4xl font-bold ${plan.popular ? 'text-gold' : 'text-red'}`}>
                  {plan.price}
                </span>
                <span className={`text-sm ${plan.popular ? 'text-white/60' : 'text-gray-500 dark:text-gray-400'}`}>
                  {plan.period}
                </span>
              </div>
              <p className={`text-sm mb-6 ${plan.popular ? 'text-white/70' : 'text-gray-600 dark:text-gray-400'}`}>
                {plan.description}
              </p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check size={18} className={`flex-shrink-0 mt-0.5 ${plan.popular ? 'text-gold' : 'text-red'}`} />
                    <span className={`text-sm ${plan.popular ? 'text-white/90' : 'text-gray-700 dark:text-gray-300'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl font-semibold transition-all ${
                  plan.popular
                    ? 'bg-gold hover:bg-yellow-400 text-navy'
                    : 'bg-red hover:bg-red-dark text-white'
                }`}
              >
                Get Started
                <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-sm text-gray-500 dark:text-gray-400 mt-8"
        >
          We accept most insurance plans. Financing available through CareCredit. Contact us for details.
        </motion.p>
      </div>
    </section>
  )
}

export default Pricing
