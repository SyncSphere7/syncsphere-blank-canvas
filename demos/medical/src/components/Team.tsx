import React from 'react'
import { motion } from 'framer-motion'
import { Award, GraduationCap, Heart } from 'lucide-react'

const team = [
  {
    name: 'Dr. Sarah Mitchell',
    role: 'Lead Dentist & Founder',
    bio: 'Harvard School of Dental Medicine. 15+ years of experience in cosmetic and restorative dentistry.',
    emoji: '👩‍⚕️',
    credentials: ['DDS, Harvard', 'Fellow, AACD'],
  },
  {
    name: 'Dr. James Chen',
    role: 'Orthodontist',
    bio: 'Specialist in clear aligners and traditional braces. Passionate about creating perfect smiles for all ages.',
    emoji: '👨‍⚕️',
    credentials: ['DDS, UCSF', 'MS Orthodontics'],
  },
  {
    name: 'Dr. Maria Rodriguez',
    role: 'Pediatric Dentist',
    bio: 'Dedicated to making dental visits fun and stress-free for children. Certified in pediatric sedation.',
    emoji: '👩‍⚕️',
    credentials: ['DDS, Columbia', 'Pediatric Cert.'],
  },
]

const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 lg:py-28 bg-gray-50 dark:bg-navy-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-red font-semibold text-sm uppercase tracking-wider mb-3">Our Team</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy dark:text-white mb-4">
            Meet Your Dentists
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Our experienced team combines expertise with genuine care for every patient.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="bg-white dark:bg-navy rounded-2xl p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 group"
            >
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue/10 to-red/10 rounded-full flex items-center justify-center text-5xl group-hover:scale-110 transition-transform duration-300">
                {member.emoji}
              </div>
              <h3 className="text-xl font-bold text-navy dark:text-white mb-1">{member.name}</h3>
              <p className="text-red font-semibold text-sm mb-4">{member.role}</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">{member.bio}</p>
              <div className="flex flex-wrap justify-center gap-2">
                {member.credentials.map((cred) => (
                  <span key={cred} className="inline-flex items-center gap-1 bg-gray-100 dark:bg-navy-light text-gray-600 dark:text-gray-400 text-xs font-medium px-3 py-1 rounded-full">
                    <Award size={12} className="text-gold" />
                    {cred}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 grid sm:grid-cols-3 gap-6"
        >
          <div className="flex items-center gap-4 bg-white dark:bg-navy rounded-xl p-6 border border-gray-100 dark:border-gray-800">
            <div className="w-12 h-12 bg-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <GraduationCap size={24} className="text-blue" />
            </div>
            <div>
              <p className="font-bold text-navy dark:text-white">Top-Tier Education</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Graduates from leading dental schools</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-white dark:bg-navy rounded-xl p-6 border border-gray-100 dark:border-gray-800">
            <div className="w-12 h-12 bg-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <Award size={24} className="text-red" />
            </div>
            <div>
              <p className="font-bold text-navy dark:text-white">Board Certified</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">All dentists are board certified</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-white dark:bg-navy rounded-xl p-6 border border-gray-100 dark:border-gray-800">
            <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <Heart size={24} className="text-gold" />
            </div>
            <div>
              <p className="font-bold text-navy dark:text-white">Patient-First</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Gentle, compassionate care always</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Team
