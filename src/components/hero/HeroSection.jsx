import { motion } from 'framer-motion'
import heroVideo from '../../assets/herosection.mp4'

const HeroSection = ({ onEnquiryOpen }) => {
  const openPropertiesMenu = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('open-properties-menu'))
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <span className="rounded-full border border-white/35 bg-black/15 px-6 py-2 text-sm font-medium text-white backdrop-blur-sm">
              Premium Real Estate in Lucknow
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8 text-5xl font-display font-bold leading-tight sm:text-6xl md:text-7xl lg:text-8xl"
            style={{ textShadow: '0 10px 30px rgba(0, 0, 0, 0.32)' }}
          >
            <span className="bg-gradient-to-r from-primary-500 via-accent-purple to-accent-cyan bg-clip-text text-transparent">
              Luxury Living
            </span>
            <br />
            <span className="text-white">Redefined</span>
          </motion.h1>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mx-auto mb-12 inline-block max-w-4xl whitespace-pre-line rounded-lg border border-white/20 bg-black/45 px-5 py-3 text-xl leading-relaxed text-white shadow-2xl backdrop-blur-md sm:px-7 md:text-2xl"
            style={{ textShadow: '0 8px 24px rgba(0, 0, 0, 0.28)' }}
          >
            Leading the industry. Defining the skyline.{'\n'}
            Building the empires of tomorrow.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
              onClick={() => onEnquiryOpen?.()}
            >
              Schedule a Visit
            </motion.button>
            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-ghost"
              onClick={openPropertiesMenu}
            >
              View Properties
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
