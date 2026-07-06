import { motion } from 'framer-motion'
import { siteConfig } from '@/data/siteConfig'

const Contact = () => {
  return (
    <div>
      <section id="contact" className="relative section-spacing">
        <div className="section-container">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 bg-gradient-to-r from-accent-emerald via-primary-500 to-accent-cyan bg-clip-text text-transparent">
              Contact Us
            </h1>
            <p className="text-xl text-dark-600">
              Let's make your dream home a reality
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-12 grid md:grid-cols-3 gap-8"
          >
            {[
              { icon: '📍', title: 'Location', info: siteConfig.contact.address },
              { icon: '📧', title: 'Email', info: 'info@jivaspace.com' },
              { icon: '📞', title: 'Phone', info: siteConfig.contact.phoneDisplay },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="glass-effect p-8 rounded-2xl text-center hover:scale-105 transition-transform"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-dark-900 mb-2">{item.title}</h3>
                <p className="text-dark-600">{item.info}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact
