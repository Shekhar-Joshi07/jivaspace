import { motion } from 'framer-motion'

const PropertyDetails = () => {
  const openEnquiry = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('open-enquiry'))
    }
  }

  return (
    <section
      id="specifications"
      className="mt-12 rounded-3xl border border-primary-200/30 bg-neutral-50/80 p-8 shadow-xl"
    >
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
          Property Specifications
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-neutral-600"
        >
          Choose from our range of spacious apartments
        </motion.p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          { type: '2 BHK', area: '1050 sq.ft', price: '₹45 Lakhs' },
          { type: '3 BHK', area: '1450 sq.ft', price: '₹65 Lakhs' },
          { type: '4 BHK', area: '1850 sq.ft', price: '₹85 Lakhs' },
        ].map((spec, index) => (
          <motion.div
            key={spec.type}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="bg-gradient-to-br from-primary-50 to-neutral-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
          >
            <h3 className="text-3xl font-bold text-primary-600 mb-4">{spec.type}</h3>
            <p className="text-lg text-neutral-700 mb-2">Area: {spec.area}</p>
            <p className="text-2xl font-bold text-neutral-900 mb-6">{spec.price}</p>
            <motion.button
              type="button"
              onClick={openEnquiry}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary w-full text-center block"
            >
              View Details
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default PropertyDetails
