import { motion } from 'framer-motion'

const amenities = [
  { name: 'Swimming Pool', icon: '🏊' },
  { name: 'Gym & Fitness', icon: '💪' },
  { name: 'Kids Play Area', icon: '🎮' },
  { name: '24/7 Security', icon: '🛡️' },
  { name: 'Parking Space', icon: '🚗' },
  { name: 'Power Backup', icon: '⚡' },
  { name: 'Garden', icon: '🌳' },
  { name: 'Club House', icon: '🏛️' },
]

const AmenitiesGrid = () => {
  return (
    <section id="amenities" className="section-container bg-neutral-50">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-4"
        >
          World-Class Amenities
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-neutral-600"
        >
          Everything you need for a luxurious lifestyle
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {amenities.map((amenity, index) => (
          <motion.div
            key={amenity.name}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all text-center cursor-pointer"
          >
            <motion.div
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.5 }}
              className="text-5xl mb-4"
            >
              {amenity.icon}
            </motion.div>
            <h3 className="font-semibold text-neutral-900">{amenity.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default AmenitiesGrid
