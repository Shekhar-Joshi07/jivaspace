import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import FloatingButtons from './components/cta/FloatingButtons'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import Properties from './pages/Properties'
import Amenities from './pages/Amenities'
import Gallery from './pages/Gallery'
import MigsunCentral from './pages/MigsunCentral'
import Skyom from './pages/Skyom'
import PropertyPage from './pages/PropertyPage'
import EnquiryModal from './components/forms/EnquiryModal'
import GalleryModal from './components/gallery/GalleryModal'
import { scrollToElement } from './lib/utils'
import preloaderLogo from './assets/branding/jivaspaceupdatedlogo.png'

const ScrollToHash = () => {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const target = location.hash.replace('#', '')
      const timer = setTimeout(() => scrollToElement(target), 50)
      return () => clearTimeout(timer)
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location])

  return null
}

const PropertyEnquiryAutoOpen = ({ onOpen }) => {
  const location = useLocation()
  const lastOpenedRef = useRef('')

  useEffect(() => {
    const { pathname } = location
    if (!pathname.startsWith('/properties/')) return
    if (lastOpenedRef.current === pathname) return
    lastOpenedRef.current = pathname
    onOpen()
  }, [location, onOpen])

  return null
}

function App() {
  const ONE_HOUR_MS = 60 * 60 * 1000
  const DESKTOP_LOADER_MS = 2800
  const MOBILE_LOADER_MS = 2400
  const [loading, setLoading] = useState(() => {
    if (typeof window === 'undefined') return true
    try {
      const lastRefresh = Number(window.localStorage.getItem('jiva_last_refresh')) || 0
      return Date.now() - lastRefresh >= ONE_HOUR_MS
    } catch {
      return true
    }
  })
  const [isMobile, setIsMobile] = useState(false)
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false)

  useEffect(() => {
    try {
      window.localStorage.setItem('jiva_last_refresh', String(Date.now()))
    } catch {
      // Ignore storage errors (private mode, blocked storage, etc.)
    }
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return

    const mediaQuery = window.matchMedia('(max-width: 640px)')
    const handleChange = () => setIsMobile(mediaQuery.matches)
    handleChange()

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange)
      return () => mediaQuery.removeEventListener('change', handleChange)
    }

    mediaQuery.addListener(handleChange)
    return () => mediaQuery.removeListener(handleChange)
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return
    const handleOpen = () => setIsEnquiryOpen(true)
    window.addEventListener('open-enquiry', handleOpen)
    return () => window.removeEventListener('open-enquiry', handleOpen)
  }, [])

  useEffect(() => {
    if (!loading) return

    const timer = setTimeout(() => {
      setLoading(false)
    }, isMobile ? MOBILE_LOADER_MS : DESKTOP_LOADER_MS)

    return () => clearTimeout(timer)
  }, [loading, isMobile])

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[linear-gradient(155deg,_#ff9b24_0%,_#f37a00_45%,_#b94f00_100%)]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,248,242,0.25),_transparent_34%)]" />
          <motion.div
            className="relative z-10 flex flex-col items-center px-6 text-center"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: [0.92, 1.02, 1] }}
            transition={{ duration: isMobile ? 1.8 : 2.2, ease: 'easeOut' }}
          >
            <motion.img
              src={preloaderLogo}
              alt="Jiva Space Realty logo"
              className={`h-auto object-contain select-none ${isMobile ? 'w-[78%] max-w-xs' : 'w-[24rem] max-w-[78vw]'}`}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: 'easeOut' }}
              draggable="false"
            />
            <motion.p
              className="mt-6 text-sm font-medium uppercase tracking-[0.32em] text-white/85"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.6 }}
            >
              Where your home journey begins
            </motion.p>
          </motion.div>
        </motion.div>
      ) : (
        <BrowserRouter>
          <motion.div
            key="app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen"
          >
            <Header onEnquiryOpen={() => setIsEnquiryOpen(true)} />
            <main className="pt-20">
              <ScrollToHash />
              <PropertyEnquiryAutoOpen onOpen={() => setIsEnquiryOpen(true)} />
              <Routes>
                <Route path="/" element={<Home onEnquiryOpen={() => setIsEnquiryOpen(true)} />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/properties" element={<Properties />} />
                <Route path="/amenities" element={<Amenities />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/properties/migsun-central" element={<MigsunCentral />} />
                <Route path="/properties/skyom" element={<Skyom />} />
                <Route path="/properties/:slug" element={<PropertyPage />} />
              </Routes>
            </main>
            <Footer />
            <FloatingButtons onEnquiryOpen={() => setIsEnquiryOpen(true)} />
            <EnquiryModal isOpen={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} />
            <GalleryModal />
          </motion.div>
        </BrowserRouter>
      )}
    </AnimatePresence>
  )
}

export default App
