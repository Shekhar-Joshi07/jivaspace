
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation, useNavigate } from 'react-router-dom'
import { backdropVariants, mobileMenuVariants } from '@/lib/animations'
import { scrollToElement } from '@/lib/utils'
import { siteConfig } from '@/data/siteConfig'
import { mainNavItems, propertyCategories } from '@/data/navigation'

const MobileMenu = ({ isOpen, onClose, onEnquiryOpen }) => {
  const primaryNav = mainNavItems.slice(0, 2)
  const secondaryNav = mainNavItems.slice(2)
  const location = useLocation()
  const navigate = useNavigate()

  const handleClick = (e, href) => {
    e.preventDefault()
    if (href === '#contact' && onEnquiryOpen) {
      onClose()
      onEnquiryOpen()
      return
    }
    if (href.startsWith('#')) {
      const elementId = href.replace('#', '')
      if (location.pathname !== '/') {
        navigate(`/#${elementId}`)
        onClose()
        return
      }
      scrollToElement(elementId)
      onClose()
      return
    }
    if (href.startsWith('/')) {
      navigate(href)
      onClose()
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-50 lg:hidden"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            className="fixed top-0 right-0 bottom-0 w-80 bg-neutral-50 shadow-2xl z-50 lg:hidden overflow-y-auto"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-neutral-200">
              <div>
                <h2 className="text-xl font-bold text-neutral-900">
                  {siteConfig.company.name}
                </h2>
                <p className="text-sm text-neutral-600">
                  {siteConfig.company.tagline}
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-neutral-100 transition-colors"
                aria-label="Close menu"
              >
                <svg
                  className="w-6 h-6 text-neutral-900"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="p-6">
              <ul className="space-y-4">
                {primaryNav.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <a
                      href={item.href}
                      onClick={(e) => handleClick(e, item.href)}
                      className="block px-4 py-3 text-lg font-medium text-neutral-700 hover:text-primary-500 hover:bg-primary-50 rounded-lg transition-all"
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}

                <motion.li
                  key="properties"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: primaryNav.length * 0.05 }}
                  className="rounded-lg border border-neutral-200 bg-white/70"
                >
                  <details className="group">
                    <summary className="list-none cursor-pointer px-4 py-3 text-lg font-medium text-neutral-800 flex items-center justify-between">
                      <span>Properties+</span>
                      <span className="text-neutral-500 group-open:rotate-90 transition-transform">&gt;</span>
                    </summary>
                    <div className="px-4 pb-4">
                      <div className="space-y-4">
                        {propertyCategories.map((category) =>
                          category.items.length ? (
                            <details key={category.label} className="group">
                              <summary className="list-none cursor-pointer text-sm font-semibold uppercase tracking-wide text-neutral-600 flex items-center justify-between py-2">
                                <span>{category.label}</span>
                                <span className="text-neutral-400 group-open:rotate-90 transition-transform">&gt;</span>
                              </summary>
                              <ul className="pl-3 space-y-2">
                                {category.items.map((item) => (
                                  <li key={item.label}>
                                    <a
                                      href={item.href}
                                      onClick={(e) => handleClick(e, item.href)}
                                      className="block text-sm font-medium text-neutral-700 hover:text-primary-500 transition-colors"
                                    >
                                      {item.label}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </details>
                          ) : (
                            <div
                              key={category.label}
                              className="text-sm font-semibold uppercase tracking-wide text-neutral-600 py-2"
                            >
                              {category.label}
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </details>
                </motion.li>

                {secondaryNav.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (index + primaryNav.length + 1) * 0.05 }}
                  >
                    <a
                      href={item.href}
                      onClick={(e) => handleClick(e, item.href)}
                      className="block px-4 py-3 text-lg font-medium text-neutral-700 hover:text-primary-500 hover:bg-primary-50 rounded-lg transition-all"
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Contact Info */}
            <div className="p-6 border-t border-neutral-200 bg-neutral-50">
              <h3 className="text-sm font-semibold text-neutral-900 mb-4">
                Contact Us
              </h3>
              <div className="space-y-3">
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="flex items-center space-x-3 text-neutral-700 hover:text-primary-500 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="text-sm">{siteConfig.contact.phoneDisplay}</span>
                </a>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center space-x-3 text-neutral-700 hover:text-primary-500 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-sm">{siteConfig.contact.email}</span>
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default MobileMenu
