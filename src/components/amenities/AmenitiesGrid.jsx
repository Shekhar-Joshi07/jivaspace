import { motion } from 'framer-motion'
import poolImage from '../../assets/amenities/amenity-pool.svg'
import gymImage from '../../assets/amenities/amenity-gym.svg'
import kidsImage from '../../assets/amenities/amenity-kids.svg'
import securityImage from '../../assets/amenities/amenity-security.svg'
import parkingImage from '../../assets/amenities/amenity-parking.svg'
import powerImage from '../../assets/amenities/amenity-power.svg'
import gardenImage from '../../assets/amenities/amenity-garden.svg'
import clubhouseImage from '../../assets/amenities/amenity-clubhouse.svg'

const amenities = [
  { name: 'Swimming Pool', caption: 'Resort-style deck and lounge', image: poolImage },
  { name: 'Gym and Fitness', caption: 'Private studio and training zone', image: gymImage },
  { name: 'Kids Play Area', caption: 'Safe, supervised play court', image: kidsImage },
  { name: '24/7 Security', caption: 'Smart surveillance and access', image: securityImage },
  { name: 'Parking Space', caption: 'Dedicated covered bays', image: parkingImage },
  { name: 'Power Backup', caption: 'Uninterrupted daily living', image: powerImage },
  { name: 'Garden', caption: 'Curated greens and walkways', image: gardenImage },
  { name: 'Club House', caption: 'Lounge, events, and socials', image: clubhouseImage },
]

const AmenitiesGrid = () => {
  return (
    <section id="amenities" className="section-container section-spacing bg-neutral-50">
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
            initial={{ scale: 0.92, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-3xl border border-primary-200/30 bg-neutral-50/80 shadow-lg transition-all cursor-pointer"
          >
            <img
              src={amenity.image}
              alt={amenity.name}
              className="h-44 w-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-50/90 via-dark-50/30 to-transparent opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 flex items-end p-5">
              <div className="space-y-1 text-left opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transform sm:translate-y-4 sm:group-hover:translate-y-0 transition-all duration-300">
                <h3 className="text-neutral-50 text-lg font-semibold">{amenity.name}</h3>
                <p className="text-neutral-100/80 text-sm">{amenity.caption}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default AmenitiesGrid
