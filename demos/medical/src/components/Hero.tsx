import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Shield, Clock, Heart } from 'lucide-react'

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-navy via-navy-light to-blue">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/80 text-sm font-medium">Now accepting new patients</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Your Smile Deserves{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-300">
                Expert Care
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-white/70 mb-8 max-w-xl leading-relaxed">
              Experience gentle, modern dentistry in a comfortable environment. We combine advanced technology with a personal touch to give you the smile you've always wanted.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-red hover:bg-red-dark text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all hover:shadow-xl hover:shadow-red/30 hover:-translate-y-0.5"
              >
                Book Your Visit
                <ArrowRight size={20} />
              </a>
              <a
                href="tel:+15551234567"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all"
              >
                Call (555) 123-4567
              </a>
            </div>

            <div className="flex flex-wrap gap-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                  <Shield size={20} className="text-gold" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">100% Safe</p>
                  <p className="text-white/50 text-xs">Sterilized equipment</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                  <Clock size={20} className="text-gold" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Same Day</p>
                  <p className="text-white/50 text-xs">Emergency visits</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                  <Heart size={20} className="text-gold" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Caring</p>
                  <p className="text-white/50 text-xs">Patient-first approach</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hidden lg:block relative"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-red/30 to-blue/30 rounded-3xl rotate-6" />
              <div className="absolute inset-0 bg-gradient-to-br from-navy-light to-blue/50 rounded-3xl -rotate-3" />
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-8 flex flex-col items-center justify-center text-center h-full">
                <div className="w-24 h-24 bg-gradient-to-br from-gold to-yellow-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-gold/30">
                  <span className="text-4xl">🦷</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Westside Dental Care</h3>
                <p className="text-white/60 mb-6">Serving our community since 2010</p>
                <div className="grid grid-cols-3 gap-4 w-full">
                  <div className="bg-white/10 rounded-xl p-3">
                    <p className="text-2xl font-bold text-gold">15K+</p>
                    <p className="text-white/50 text-xs">Happy Patients</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-3">
                    <p className="text-2xl font-bold text-gold">4.9</p>
                    <p className="text-white/50 text-xs">Star Rating</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-3">
                    <p className="text-2xl font-bold text-gold">14+</p>
                    <p className="text-white/50 text-xs">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" className="fill-white dark:fill-navy"/>
        </svg>
      </div>
    </section>
  )
}

export default Hero
