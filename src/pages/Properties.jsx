import { motion } from 'framer-motion'
import PropertyDetails from '../components/property/PropertyDetails'
import clientImage1 from '../assets/clients_assets/client image 1.jpeg'
import clientImage2 from '../assets/clients_assets/client image 2.jpeg'
import clientImage3 from '../assets/clients_assets/client image 3.jpeg'

const propertyImages = [
  { src: clientImage1, label: 'Signature facade' },
  { src: clientImage2, label: 'Grand entrance' },
  { src: clientImage3, label: 'Premium interiors' },
]

const Properties = () => {
  return (
    <div>
      <section id="properties" className="relative section-spacing">
        <div className="section-container">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 bg-gradient-to-r from-primary-500 via-accent-emerald to-accent-cyan bg-clip-text text-transparent">
              Our Properties
            </h1>
            <p className="text-xl text-dark-600">
              Discover your perfect home
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {propertyImages.map((image, index) => (
              <motion.div
                key={image.label}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 + index * 0.1 }}
                className="group relative overflow-visible rounded-3xl border border-primary-200/30 bg-neutral-50/80 shadow-xl"
              >
                <div className="relative -mt-6 px-6">
                  <div className="relative h-72 w-full overflow-hidden rounded-2xl bg-dark-50 shadow-xl">
                    <img
                      src={image.src}
                      alt={image.label}
                      className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                      loading="lazy"
                    />
                    <img
                      src={image.src}
                      alt={image.label}
                      className="absolute inset-0 h-full w-full object-contain opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-50/85 via-dark-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-end p-6">
                      <p className="text-neutral-50 text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {image.label}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="px-6 pb-6 pt-5">
                  <p className="text-sm text-neutral-600">Premium residence visual</p>
                </div>
              </motion.div>
            ))}
          </div>

          <PropertyDetails />
        </div>
      </section>
    </div>
  )
}

export default Properties
