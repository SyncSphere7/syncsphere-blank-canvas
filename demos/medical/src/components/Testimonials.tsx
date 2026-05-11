import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Jennifer K.',
    text: "I've been terrified of the dentist my whole life, but Dr. Mitchell and her team completely changed my experience. They explained everything, were incredibly gentle, and now I actually look forward to my visits. My smile has never looked better.",
    rating: 5,
    procedure: 'Cosmetic Makeover',
  },
  {
    name: 'Michael T.',
    text: "After putting off dental work for years, I finally came in for a consultation. The team created a clear treatment plan and worked with my insurance. Three months later, I have a completely new smile. Best decision I ever made.",
    rating: 5,
    procedure: 'Full Restoration',
  },
  {
    name: 'Sarah L.',
    text: "My kids actually enjoy going to the dentist now! Dr. Rodriguez is amazing with children. She makes the visit fun and educational. The office is beautiful and the staff is always so welcoming.",
    rating: 5,
    procedure: 'Pediatric Care',
  },
  {
    name: 'David R.',
    text: "Had a dental emergency on a Saturday morning and they got me in within an hour. The level of care and professionalism was outstanding. Dr. Chen fixed my chipped tooth perfectly — you can't even tell it happened.",
    rating: 5,
    procedure: 'Emergency Repair',
  },
  {
    name: 'Amanda W.',
    text: "The Invisalign treatment with Dr. Chen exceeded all my expectations. The process was so much easier than I thought, and the results are incredible. I wish I had done this years ago. Highly recommend!",
    rating: 5,
    procedure: 'Invisalign',
  },
  {
    name: 'Robert P.',
    text: "From the moment you walk in, you can tell this practice is different. Modern equipment, friendly staff, and Dr. Mitchell is truly an artist. My implant looks and feels exactly like my natural tooth.",
    rating: 5,
    procedure: 'Dental Implant',
  },
]

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white dark:bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-red font-semibold text-sm uppercase tracking-wider mb-3">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy dark:text-white mb-4">
            What Our Patients Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Real stories from real patients who transformed their smiles with us.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-gray-50 dark:bg-navy-light rounded-2xl p-8 relative group hover:shadow-lg transition-all duration-300"
            >
              <Quote size={32} className="text-red/10 absolute top-6 right-6" />
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-gold fill-gold" />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-sm">
                "{testimonial.text}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-navy dark:text-white">{testimonial.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{testimonial.procedure}</p>
                </div>
                <div className="w-10 h-10 bg-gradient-to-br from-red to-red-dark rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {testimonial.name.charAt(0)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
