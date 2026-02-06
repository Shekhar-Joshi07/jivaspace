import { motion } from 'framer-motion'
import { useRef } from 'react'
import HeroSection from '../components/hero/HeroSection'
import PropertyDetails from '../components/property/PropertyDetails'
import AmenitiesGrid from '../components/amenities/AmenitiesGrid'
import ContactForm from '../components/forms/ContactForm'

const Home = () => {
  return (
    <div className="relative">
      <HeroSection />

      <section id="about" className="section-container relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-neutral-900 mb-6"
          >
            About Rishita Mulberry Heights
          </motion.h2>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-neutral-700 leading-relaxed"
          >
            Experience the epitome of modern living at Rishita Mulberry Heights.
          </motion.p>
        </motion.div>
      </section>

      <PropertyDetails />
      <AmenitiesGrid />
      
      <section id="contact" className="section-container">
        <ContactForm />
      </section>
    </div>
  )
}

export default Home
