import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navigation from './Navigation'
import MobileMenu from './MobileMenu'
import logo from '../../assets/jivaSpace_Nav_Logo.png'
import { scrollToElement } from '@/lib/utils'

const Header = ({ onEnquiryOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass-effect shadow-xl'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }} 
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault()
                scrollToElement('home')
              }}
              className="flex items-center space-x-3 group"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <img
                  src={logo}
                  alt="JivaSpace Logo"
                  className="h-18 w-auto object-contain rounded-lg"
                />
              </motion.div>
            </a>

            <div className="hidden lg:block">
              <Navigation onEnquiryOpen={onEnquiryOpen} />
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-lg glass-effect hover:scale-110 transition-transform"
            >
              <svg className="w-6 h-6 text-dark-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
