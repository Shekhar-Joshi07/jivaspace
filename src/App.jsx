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
import Contact from './pages/Contact'
import MigsunCentral from './pages/MigsunCentral'
import PropertyPage from './pages/PropertyPage'
import EnquiryModal from './components/forms/EnquiryModal'
import { scrollToElement } from './lib/utils'
import preloaderVideo from './assets/JivaSpace_Second_Render.mp4'
import preloaderLogo from './assets/JivaSpace LOGO.jpeg'

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
  const MOBILE_LOADER_MS = 4000
  const [loading, setLoading] = useState(() => {
    if (typeof window === 'undefined') return true
    try {
      const lastRefresh = Number(window.localStorage.getItem('jiva_last_refresh')) || 0
      return Date.now() - lastRefresh >= ONE_HOUR_MS
    } catch {
      return true
    }
  })
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false)
  const videoRef = useRef(null)

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

    if (isMobile) {
      const mobileTimer = setTimeout(() => {
        setLoading(false)
      }, MOBILE_LOADER_MS)
      return () => clearTimeout(mobileTimer)
    }

    const video = videoRef.current
    if (!video) return

    // Start muted to allow autoplay
    video.muted = true
    const isSmallScreen = window.matchMedia('(max-width: 640px)').matches
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (isSmallScreen || prefersReducedMotion) {
      // Lightly throttle playback on constrained devices to reduce frame drops
      video.playbackRate = 0.9
    }

    // Try to play as soon as possible
    const attemptPlay = () => {
      const playPromise = video.play()

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log('Video playing successfully')
            setVideoLoaded(true)
          })
          .catch(err => {
            console.log('Video autoplay failed:', err)
            setTimeout(() => setLoading(false), 1000)
          })
      } else {
        setVideoLoaded(true)
      }
    }

    const handleEnded = () => {
      console.log('Video ended')
      setTimeout(() => setLoading(false), 300)
    }

    const handleError = (e) => {
      console.log('Video error:', e)
      setTimeout(() => setLoading(false), 1000)
    }

    // Try multiple events to ensure playback starts
    const handleLoadedMetadata = () => {
      console.log('Video metadata loaded')
      attemptPlay()
    }

    const handleLoadedData = () => {
      console.log('Video data loaded')
      // Only attempt if not already playing
      if (video.paused) {
        attemptPlay()
      }
    }

    video.addEventListener('loadedmetadata', handleLoadedMetadata)
    video.addEventListener('loadeddata', handleLoadedData)
    video.addEventListener('ended', handleEnded)
    video.addEventListener('error', handleError)

    // Immediate attempt if video is already loaded
    if (video.readyState >= 2) {
      console.log('Video already loaded, playing immediately')
      attemptPlay()
    }

    // Fallback timer
    const fallbackTimer = setTimeout(() => {
      console.log('Fallback timer - skipping to site')
      setLoading(false)
    }, 10000)

    return () => {
      clearTimeout(fallbackTimer)
      video.removeEventListener('loadedmetadata', handleLoadedMetadata)
      video.removeEventListener('loadeddata', handleLoadedData)
      video.removeEventListener('ended', handleEnded)
      video.removeEventListener('error', handleError)
    }
  }, [loading, isMobile])

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0d1225]"
        >
          {isMobile ? (
            <motion.img
              src={preloaderLogo}
              alt="JivaSpace logo"
              className="w-[72%] max-w-sm h-auto object-contain select-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 1, 0] }}
              transition={{ duration: 4, times: [0, 0.2, 0.8, 1], ease: 'easeInOut' }}
              draggable="false"
            />
          ) : (
            <video
              ref={videoRef}
              src={preloaderVideo}
              className={`w-full h-full bg-[#0d1225] object-contain sm:object-cover object-center transition-opacity duration-300 ${
                videoLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              autoPlay
              muted
              playsInline
              preload="auto"
            />
          )}
          {!videoLoaded && !isMobile && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-dark-700 font-medium">Loading...</p>
              </div>
            </div>
          )}
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
                <Route path="/contact" element={<Contact />} />
                <Route path="/properties/migsun-central" element={<MigsunCentral />} />
            
                <Route path="/properties/:slug" element={<PropertyPage />} />
              </Routes>
            </main>
            <Footer />
            <FloatingButtons onEnquiryOpen={() => setIsEnquiryOpen(true)} />
            <EnquiryModal isOpen={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} />
          </motion.div>
        </BrowserRouter>
      )}
    </AnimatePresence>
  )
}

export default App
