import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import ekanaHero from '../assets/clients_assets/Ekana/Screenshot 2026-02-17 003506.png'
import eldicoHero from '../assets/clients_assets/eldico solano/Screenshot 2026-02-17 111444.png'
import jashnHero from '../assets/clients_assets/jashn elevate/image.png'
import kalpanaHero from '../assets/clients_assets/kalpana eco word/image.png'
import meridianHero from '../assets/clients_assets/meridian height/image.png'
import migsunHero from '../assets/clients_assets/migsun Lucknow central/Screenshot 2026-02-17 005831.png'
import oroConstellaHero from '../assets/clients_assets/Oro constella/image.png'
import oroDynastyHero from '../assets/clients_assets/oro dynasty/image.png'
import rishitaHero from '../assets/clients_assets/rishita mulberry/Screenshot 2026-02-17 110214.png'
import shalimarHero from '../assets/clients_assets/Shalimar Valencia/Screenshot 2026-02-17 105628.png'
import skyomHero from '../assets/clients_assets/skyom/Screenshot 2026-02-17 011542.png'
import vidhiHero from '../assets/clients_assets/Vidhi_estate/image.png'
import genericHero from '../assets/clients_assets/image.png'

const galleryImages = [
  { src: ekanaHero, color: '142, 249, 252' },
  { src: migsunHero, color: '142, 252, 204' },
  { src: oroConstellaHero, color: '142, 252, 157' },
  { src: oroDynastyHero, color: '215, 252, 142' },
  { src: shalimarHero, color: '252, 252, 142' },
  { src: rishitaHero, color: '252, 208, 142' },
  { src: meridianHero, color: '252, 142, 142' },
  { src: jashnHero, color: '216, 142, 252' },
  { src: kalpanaHero, color: '142, 180, 252' },
  { src: eldicoHero, color: '142, 252, 232' },
  { src: skyomHero, color: '200, 252, 142' },
  { src: vidhiHero, color: '252, 170, 142' },
  { src: genericHero, color: '180, 180, 180' },
]

const Gallery = () => {
  const [translateZ, setTranslateZ] = useState(null)

  useEffect(() => {
    if (typeof window === 'undefined') return undefined

    const computeTranslateZ = () => {
      const vw = window.innerWidth
      const cardWidth = Math.min(210, Math.max(140, vw * 0.2))
      const gap = 7
      const quantity = galleryImages.length
      const radius = (cardWidth + gap) / (2 * Math.tan(Math.PI / quantity))
      setTranslateZ(`${Math.round(radius)}px`)
    }

    computeTranslateZ()
    window.addEventListener('resize', computeTranslateZ)
    return () => window.removeEventListener('resize', computeTranslateZ)
  }, [])

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
            <p className="text-xl text-dark-600 mb-6">
              Take a visual tour of our properties
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="gallery-rotator"
            style={{ marginTop: '-20px' }}
          >
            <div
              className="gallery-rotator__inner"
              style={{
                '--quantity': galleryImages.length,
                ...(translateZ ? { '--translateZ': translateZ } : {}),
              }}
            >
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
