import { motion } from 'framer-motion'
import clientImage1 from '../assets/clients_assets/client image 1.jpeg'
import clientImage2 from '../assets/clients_assets/client image 2.jpeg'
import clientImage3 from '../assets/clients_assets/client image 3.jpeg'

const galleryImages = [
  { src: clientImage1, label: 'Exterior view' },
  { src: clientImage2, label: 'Entry lobby' },
  { src: clientImage3, label: 'Living space' },
]

const Gallery = () => {
  return (
    <div>
      <section id="gallery" className="relative section-spacing">
        <div className="section-container">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 bg-gradient-to-r from-accent-cyan via-primary-500 to-accent-purple bg-clip-text text-transparent">
              Gallery
            </h1>
            <p className="text-xl text-dark-600">
              Take a visual tour of our properties
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.label}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group relative overflow-visible rounded-3xl border border-primary-200/30 bg-neutral-50/80 shadow-xl transition-all cursor-pointer"
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
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="text-neutral-50 font-semibold">{image.label}</h3>
                        <p className="text-neutral-100/70 text-sm">Tap to view</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-6 pb-6 pt-5">
                  <p className="text-sm text-neutral-600">Client-provided render</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Gallery
