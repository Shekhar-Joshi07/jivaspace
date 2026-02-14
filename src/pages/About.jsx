import { motion } from 'framer-motion'

const About = () => {
  return (
    <div>
      <section id="about" className="relative section-spacing overflow-hidden">
        <div className="absolute inset-0 gradient-accent opacity-10" />
        
        <div className="section-container relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 bg-gradient-to-r from-primary-500 via-accent-purple to-accent-cyan bg-clip-text text-transparent">
              About Us
            </h1>
            <p className="text-xl text-dark-600 max-w-3xl mx-auto">
              Leading the future of real estate with innovation and excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-display font-bold text-dark-900">
                Rishita Mulberry Heights
              </h2>
              <p className="text-lg text-dark-600 leading-relaxed">
                Experience the epitome of modern living at Rishita Mulberry Heights. Nestled in the prime location
                of Sushant Golf City, this luxurious residential project offers spacious apartments with world-class
                amenities and stunning architecture.
              </p>
              <p className="text-lg text-dark-600 leading-relaxed">
                Our commitment to quality and innovation has made us one of the most trusted names in real estate.
                With over a decade of experience, we continue to set new standards in luxury living.
              </p>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="glass-effect p-8 rounded-3xl"
            >
              <h3 className="text-2xl font-bold text-dark-900 mb-6">Our Values</h3>
              <div className="space-y-4">
                {['Innovation', 'Quality', 'Sustainability', 'Customer First'].map((value, index) => (
                  <motion.div
                    key={value}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary-500 to-accent-purple" />
                    <span className="text-dark-700 text-lg">{value}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
