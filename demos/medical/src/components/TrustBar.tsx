import React from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const TrustBar: React.FC = () => {
  return (
    <section className="py-8 bg-white dark:bg-navy border-b border-gray-100 dark:border-navy-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12"
        >
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="text-gold fill-gold" />
              ))}
            </div>
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">4.9/5 from 850+ reviews</span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-gray-200 dark:bg-gray-700" />
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {['👨‍⚕️', '👩‍⚕️', '👨‍⚕️', '👩‍⚕️'].map((emoji, i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gray-100 dark:bg-navy-light border-2 border-white dark:border-navy flex items-center justify-center text-sm">
                  {emoji}
                </div>
              ))}
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-400">Trusted by <strong className="text-gray-900 dark:text-white">15,000+</strong> patients</span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-gray-200 dark:bg-gray-700" />
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600 dark:text-gray-400">As featured in</span>
            <div className="flex gap-4">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Health+</span>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Dental Today</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TrustBar
