import { motion, AnimatePresence } from 'framer-motion'
import { useLocation, useNavigate } from 'react-router-dom'
import { backdropVariants, mobileMenuVariants } from '@/lib/animations'
import { scrollToElement } from '@/lib/utils'
import { siteConfig } from '@/data/siteConfig'
import { mainNavItems, propertyCategories } from '@/data/navigation'
import brandLogo from '@/assets/branding/jivaspaceupdatedlogo.png'

const MobileMenu = ({ isOpen, onClose, onEnquiryOpen }) => {
  const primaryNav = mainNavItems.slice(0, 2)
  const secondaryNav = mainNavItems.slice(2)
  const location = useLocation()
  const navigate = useNavigate()

  const handleClick = (event, href) => {
    event.preventDefault()
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
          <motion.div
            className="fixed inset-0 z-50 bg-black/50 lg:hidden"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
          />

          <motion.div
            className="fixed bottom-0 right-0 top-0 z-50 w-80 overflow-y-auto bg-neutral-50 shadow-2xl lg:hidden"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="flex items-center justify-between border-b border-neutral-200 p-6">
              <div>
                <img
                  src={brandLogo}
                  alt="Jiva Space Realty logo"
                  className="h-14 w-auto rounded-xl object-contain"
                />
                <p className="mt-2 text-sm text-neutral-600">
                  {siteConfig.company.tagline}
                </p>
              </div>
              <button
                onClick={onClose}
                className="rounded-lg p-2 transition-colors hover:bg-neutral-100"
                aria-label="Close menu"
              >
                <svg
                  className="h-6 w-6 text-neutral-900"
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
                      onClick={(event) => handleClick(event, item.href)}
                      className="block rounded-lg px-4 py-3 text-lg font-medium text-neutral-700 transition-all hover:bg-primary-50 hover:text-primary-500"
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
                    <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-lg font-medium text-neutral-800">
                      <span>Properties+</span>
                      <span className="text-neutral-500 transition-transform group-open:rotate-90">&gt;</span>
                    </summary>
                    <div className="px-4 pb-4">
                      <div className="space-y-4">
                        {propertyCategories.map((category) =>
                          category.items.length ? (
                            <details key={category.label} className="group">
                              <summary className="flex list-none cursor-pointer items-center justify-between py-2 text-sm font-semibold uppercase tracking-wide text-neutral-600">
                                <span>{category.label}</span>
                                <span className="text-neutral-400 transition-transform group-open:rotate-90">&gt;</span>
                              </summary>
                              <ul className="space-y-2 pl-3">
                                {category.items.map((item) => (
                                  <li key={item.label}>
                                    <a
                                      href={item.href}
                                      onClick={(event) => handleClick(event, item.href)}
                                      className="block text-sm font-medium text-neutral-700 transition-colors hover:text-primary-500"
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
                              className="py-2 text-sm font-semibold uppercase tracking-wide text-neutral-600"
                            >
                              {category.label}
                            </div>
                          ),
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
                      onClick={(event) => handleClick(event, item.href)}
                      className="block rounded-lg px-4 py-3 text-lg font-medium text-neutral-700 transition-all hover:bg-primary-50 hover:text-primary-500"
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <div className="border-t border-neutral-200 bg-neutral-50 p-6">
              <h3 className="mb-4 text-sm font-semibold text-neutral-900">
                Contact Us
              </h3>
              <div className="space-y-3">
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="flex items-center space-x-3 text-neutral-700 transition-colors hover:text-primary-500"
                >
                  <svg
                    className="h-5 w-5"
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
                  className="flex items-center space-x-3 text-neutral-700 transition-colors hover:text-primary-500"
                >
                  <svg
                    className="h-5 w-5"
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
