import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'What should I expect during my first visit?',
    answer: 'Your first visit includes a comprehensive exam, digital X-rays, oral cancer screening, and a professional cleaning. We\'ll discuss your dental history, any concerns you have, and create a personalized treatment plan. The visit typically takes 60-90 minutes.',
  },
  {
    question: 'Do you accept insurance?',
    answer: 'Yes! We accept most major dental insurance plans including Delta Dental, Cigna, MetLife, Aetna, and United Healthcare. Our team will help you understand your benefits and maximize your coverage. We also offer a membership plan for uninsured patients.',
  },
  {
    question: 'How often should I visit the dentist?',
    answer: 'We recommend visiting every six months for a routine checkup and cleaning. However, some patients with specific conditions may need more frequent visits. We\'ll recommend a schedule based on your individual needs.',
  },
  {
    question: 'Do you offer financing options?',
    answer: 'Absolutely. We partner with CareCredit and Sunbit to offer flexible financing options, including 0% interest plans for qualified patients. We believe cost should never be a barrier to quality dental care.',
  },
  {
    question: 'What if I have a dental emergency?',
    answer: 'We reserve time each day for emergency appointments. If you experience severe pain, a broken tooth, or any urgent dental issue, call us immediately. For after-hours emergencies, our voicemail will provide the on-call dentist\'s number.',
  },
  {
    question: 'Are you accepting new patients?',
    answer: 'Yes! We\'re always welcoming new patients. You can book online through our website, call us at (555) 123-4567, or walk in during business hours. We look forward to meeting you and your family.',
  },
  {
    question: 'What cosmetic services do you offer?',
    answer: 'We offer a full range of cosmetic services including professional teeth whitening, porcelain veneers, dental bonding, Invisalign clear aligners, and complete smile makeovers. Schedule a consultation to discuss your goals.',
  },
]

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white dark:bg-navy">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-red font-semibold text-sm uppercase tracking-wider mb-3">FAQ</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Everything you need to know about our practice and services.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 dark:hover:bg-navy-light transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-navy dark:text-white pr-4">{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={`flex-shrink-0 text-gray-400 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
