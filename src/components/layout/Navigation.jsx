import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { scrollToElement } from '@/lib/utils'
import { mainNavItems, propertyCategories } from '@/data/navigation'

const Navigation = ({ onEnquiryOpen }) => {
  const [activeCategory, setActiveCategory] = useState(null)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!dropdownRef.current) return
      if (!dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setIsDropdownOpen(false)
    if (href === '#contact' && onEnquiryOpen) {
      onEnquiryOpen()
      return
    }
    scrollToElement(href.replace('#', ''))
  }

  const handleToggleDropdown = (e) => {
    e.preventDefault()
    setIsDropdownOpen((prev) => {
      const next = !prev
      if (next) {
        setActiveCategory(null)
      }
      return next
    })
  }

  return (
    <nav>
      <ul className="flex items-center space-x-1">
        {mainNavItems.slice(0, 2).map((item) => (
          <li key={item.href}>
            <a href={item.href} onClick={(e) => handleNavClick(e, item.href)}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-4 py-2 rounded-lg font-medium transition-all duration-200 text-dark-600 hover:text-dark-900"
              >
                {item.label}
              </motion.div>
            </a>
          </li>
        ))}

        <li className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={handleToggleDropdown}
            className="relative px-4 py-2 rounded-lg font-medium transition-all duration-200 text-dark-600 hover:text-dark-900 flex items-center gap-1"
            aria-haspopup="true"
            aria-expanded={isDropdownOpen}
            aria-controls="properties-menu"
          >
            <span>Properties</span>
            <span className="text-primary-500">+</span>
          </button>

          <div
            id="properties-menu"
            className={`absolute left-0 top-full pt-3 transition-all duration-200 ${
              isDropdownOpen
                ? 'opacity-100 translate-y-0 pointer-events-auto'
                : 'opacity-0 translate-y-2 pointer-events-none'
            }`}
          >
            <div
              className={`flex rounded-2xl bg-[#f3eee2]/95 shadow-xl border border-[#e7dcc3] backdrop-blur-md overflow-hidden ${
                activeCategory?.items?.length ? 'min-w-[380px]' : 'min-w-[200px]'
              }`}
            >
              <div className="w-44 p-4">
                <ul className="space-y-3">
                  {propertyCategories.map((category) => {
                    const isActive = activeCategory?.label === category.label
                    return (
                      <li key={category.label}>
                        <button
                          type="button"
                          onClick={() => setActiveCategory(category)}
                          className={`w-full flex items-center justify-between text-sm font-medium uppercase tracking-wide transition-colors ${
                            isActive ? 'text-primary-600' : 'text-dark-500 hover:text-dark-900'
                          }`}
                        >
                          <span>{category.label}</span>
                          <span className={`${isActive ? 'text-primary-600' : 'text-dark-400'}`}>&gt;</span>
                        </button>
                      </li>
                    )
                  })}
                </ul>
              </div>

              {activeCategory?.items?.length ? (
                <>
                  <div className="w-px bg-[#e7dcc3]" />
                  <div className="flex-1 p-4">
                    <ul className="space-y-3">
                      {activeCategory.items.map((item) => (
                        <li key={item.label}>
                          <a
                            href={item.href}
                            onClick={(e) => handleNavClick(e, item.href)}
                            className="block text-sm font-semibold text-dark-700 uppercase tracking-wide hover:text-primary-600 transition-colors"
                          >
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : null}
            </div>
          </div>
        </li>

        {mainNavItems.slice(2).map((item) => (
          <li key={item.href}>
            <a href={item.href} onClick={(e) => handleNavClick(e, item.href)}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-4 py-2 rounded-lg font-medium transition-all duration-200 text-dark-600 hover:text-dark-900"
              >
                {item.label}
              </motion.div>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
