import { motion } from 'framer-motion'
import ekana1 from '../assets/clients_assets/Ekana/gallery/Screenshot 2026-02-17 003833.png'
import ekana2 from '../assets/clients_assets/Ekana/gallery/Screenshot 2026-02-17 003619.png'
import oro1 from '../assets/clients_assets/Oro constella/gallery/Screenshot 2026-02-17 005416.png'
import ekana3 from '../assets/clients_assets/Ekana/Screenshot 2026-02-17 003506.png'
import eldico1 from '../assets/clients_assets/eldico solano/Screenshot 2026-02-17 111444.png'
import shalimar1 from '../assets/clients_assets/Shalimar Valencia/gallery/Screenshot 2026-02-17 105727.png'
import rishita1 from '../assets/clients_assets/rishita mulberry/Screenshot 2026-02-17 110214.png'

const galleryImages = [
  { src: ekana1, color: '142, 249, 252' },
  { src: ekana2, color: '142, 252, 204' },
  { src: oro1, color: '142, 252, 157' },
  { src: ekana3, color: '215, 252, 142' },
  { src: eldico1, color: '252, 252, 142' },
  { src: shalimar1, color: '252, 208, 142' },
  { src: rishita1, color: '252, 142, 142' },
]

const Gallery = () => {
  return (
    <div>
      <section id="gallery" className="relative section-spacing">
        <div className="section-container">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center mb-10"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 bg-gradient-to-r from-accent-cyan via-primary-500 to-accent-purple bg-clip-text text-transparent">
              Gallery
            </h1>
            <p className="text-xl text-dark-600">
              Take a visual tour of our properties
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="gallery-rotator"
            style={{ marginTop: '-80px' }}
          >
            <div className="gallery-rotator__inner" style={{ '--quantity': galleryImages.length }}>
              {galleryImages.map((image, index) => (
                <div
                  key={image.src}
                  className="gallery-rotator__card"
                  style={{ '--index': index, '--color-card': image.color }}
                  role="button"
                  tabIndex={0}
                  onClick={() => window.dispatchEvent(new CustomEvent('gallery:open', { detail: image.src }))}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault()
                      window.dispatchEvent(new CustomEvent('gallery:open', { detail: image.src }))
                    }
                  }}
                >
                  <div
                    className="gallery-rotator__img"
                    style={{ backgroundImage: `url(${image.src})` }}
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Gallery
