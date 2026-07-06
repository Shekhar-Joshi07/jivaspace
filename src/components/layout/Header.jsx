import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useLocation, useNavigate } from 'react-router-dom'
import Navigation from './Navigation'
import MobileMenu from './MobileMenu'
import brandLogo from '../../assets/branding/jivaspaceupdatedlogo.png'
import { scrollToElement } from '@/lib/utils'

const Header = ({ onEnquiryOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return undefined
    const handleOpen = () => {
      if (window.matchMedia('(max-width: 1023px)').matches) {
        setIsMobileMenuOpen(true)
      }
    }
    window.addEventListener('open-properties-menu', handleOpen)
    return () => window.removeEventListener('open-properties-menu', handleOpen)
  }, [])

  const useLightHeaderStyles = !isScrolled

  return (
    <>
      <motion.header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glass-effect shadow-xl' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <a
              href="#home"
              onClick={(event) => {
                event.preventDefault()
                if (location.pathname !== '/') {
                  navigate('/#home')
                  return
                }
                scrollToElement('home')
              }}
              className="group flex items-center"
            >
              <motion.div
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <img
                  src={brandLogo}
                  alt="Jiva Space Realty logo"
                  className="h-12 w-auto rounded-xl object-contain shadow-lg sm:h-14"
                />
              </motion.div>
            </a>

            <div className="hidden lg:block">
              <Navigation onEnquiryOpen={onEnquiryOpen} isLightText={useLightHeaderStyles} />
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className={`lg:hidden rounded-xl border p-2 transition-transform hover:scale-110 ${
                useLightHeaderStyles
                  ? 'border-white/20 bg-white/10 text-white backdrop-blur-md'
                  : 'glass-effect border-primary-200/40 text-dark-500'
              }`}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </motion.header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onEnquiryOpen={onEnquiryOpen}
      />
    </>
  )
}

export default Header
