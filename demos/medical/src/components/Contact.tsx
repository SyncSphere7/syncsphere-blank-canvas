import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react'

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-gray-50 dark:bg-navy-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-red font-semibold text-sm uppercase tracking-wider mb-3">Contact Us</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy dark:text-white mb-4">
            Book Your Appointment
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Ready to transform your smile? Get in touch and we'll get you scheduled.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-navy dark:text-white mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={22} className="text-red" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy dark:text-white">Office Location</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">1234 Healthcare Drive, Suite 100<br />Portland, OR 97201</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone size={22} className="text-blue" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy dark:text-white">Phone</p>
                    <a href="tel:+15551234567" className="text-gray-600 dark:text-gray-400 text-sm hover:text-red transition-colors">(555) 123-4567</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail size={22} className="text-gold" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy dark:text-white">Email</p>
                    <a href="mailto:hello@westsidedental.com" className="text-gray-600 dark:text-gray-400 text-sm hover:text-red transition-colors">hello@westsidedental.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock size={22} className="text-emerald-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy dark:text-white">Office Hours</p>
                    <div className="text-gray-600 dark:text-gray-400 text-sm">
                      <p>Mon – Fri: 8:00 AM – 6:00 PM</p>
                      <p>Saturday: 9:00 AM – 2:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-white dark:bg-navy rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm">
              <div className="aspect-[4/3] bg-gradient-to-br from-blue/5 to-red/5 flex items-center justify-center relative">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue/20 rounded-full blur-2xl" />
                  <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-red/20 rounded-full blur-2xl" />
                </div>
                <div className="text-center relative z-10">
                  <MapPin size={40} className="text-red mx-auto mb-3" />
                  <p className="font-semibold text-navy dark:text-white">Westside Dental Care</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">1234 Healthcare Drive</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Portland, OR 97201</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="bg-white dark:bg-navy rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-800">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} className="text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy dark:text-white mb-2">Thank You!</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We've received your request and will contact you within 24 hours to confirm your appointment.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-navy dark:text-white mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-navy-light text-navy dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red/50 focus:border-red transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-navy dark:text-white mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-navy-light text-navy dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red/50 focus:border-red transition-all"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-navy dark:text-white mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(555) 000-0000"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-navy-light text-navy dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red/50 focus:border-red transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold text-navy dark:text-white mb-2">
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-navy-light text-navy dark:text-white focus:outline-none focus:ring-2 focus:ring-red/50 focus:border-red transition-all"
                      >
                        <option value="">Select a service</option>
                        <option value="general">General Dentistry</option>
                        <option value="cosmetic">Cosmetic Dentistry</option>
                        <option value="implants">Dental Implants</option>
                        <option value="orthodontics">Orthodontics</option>
                        <option value="emergency">Emergency Care</option>
                        <option value="pediatric">Pediatric Dentistry</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-navy dark:text-white mb-2">
                      Additional Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about any specific concerns or questions..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-navy-light text-navy dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red/50 focus:border-red transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-red hover:bg-red-dark text-white py-4 rounded-xl font-semibold text-lg transition-all hover:shadow-lg hover:shadow-red/25 flex items-center justify-center gap-2"
                  >
                    <Send size={18} />
                    Request Appointment
                  </button>
                  <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                    By submitting, you agree to be contacted about your appointment. We respect your privacy.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
