import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useLocation, useNavigate } from 'react-router-dom'
import { scrollToElement } from '@/lib/utils'
import { mainNavItems, propertyCategories } from '@/data/navigation'

const Navigation = ({ onEnquiryOpen }) => {
  const [activeCategory, setActiveCategory] = useState(null)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [submenuOffset, setSubmenuOffset] = useState(0)
  const dropdownRef = useRef(null)
  const menuPanelRef = useRef(null)
  const location = useLocation()
  const navigate = useNavigate()
  const defaultCategory =
    propertyCategories.find((category) => category.items?.length) ?? propertyCategories[0]

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!dropdownRef.current) return
      if (!dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false)
        setActiveCategory(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const closeDropdown = () => {
    setIsDropdownOpen(false)
    setActiveCategory(null)
    setSubmenuOffset(0)
  }

  const openDropdown = () => {
    setIsDropdownOpen(true)
    setActiveCategory((current) => current ?? defaultCategory ?? null)
    setSubmenuOffset(0)
  }

  const handleCategoryHover = (category, event) => {
    setActiveCategory(category)
    if (!menuPanelRef.current || !event?.currentTarget) return
    const panelRect = menuPanelRef.current.getBoundingClientRect()
    const itemRect = event.currentTarget.getBoundingClientRect()
    const offset = Math.max(0, itemRect.top - panelRect.top)
    setSubmenuOffset(offset)
  }

  const handleNavClick = (e, href) => {
    e.preventDefault()
    closeDropdown()
    if (href === '#contact' && onEnquiryOpen) {
      onEnquiryOpen()
      return
    }
    if (href.startsWith('#')) {
      const target = href.replace('#', '')
      if (location.pathname !== '/') {
        navigate(`/#${target}`)
        return
      }
      scrollToElement(target)
      return
    }
    if (href.startsWith('/')) {
      navigate(href)
    }
  }

  const handleToggleDropdown = (e) => {
    e.preventDefault()
    if (isDropdownOpen) {
      closeDropdown()
    } else {
      openDropdown()
    }
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

        <li
          className="relative"
          ref={dropdownRef}
          onMouseEnter={openDropdown}
          onMouseLeave={closeDropdown}
        >
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
              ref={menuPanelRef}
              className="relative rounded-2xl bg-[#ffffff] shadow-xl border border-neutral-200"
            >
              <div className="w-56 p-5 bg-[#ffffff] rounded-2xl">
                <ul className="space-y-4">
                  {propertyCategories.map((category) => {
                    const isActive = activeCategory?.label === category.label
                    return (
                      <li key={category.label}>
                        <button
                          type="button"
                          onClick={(e) => handleCategoryHover(category, e)}
                          onMouseEnter={(e) => handleCategoryHover(category, e)}
                          onFocus={(e) => handleCategoryHover(category, e)}
                          className={`w-full flex items-center justify-between text-sm font-semibold uppercase tracking-wide transition-colors ${
                            isActive ? 'text-primary-600' : 'text-neutral-900 hover:text-neutral-900'
                          }`}
                        >
                          <span>{category.label}</span>
                          <span className={`${isActive ? 'text-primary-600' : 'text-neutral-500'}`}>&gt;</span>
                        </button>
                      </li>
                    )
                  })}
                </ul>
              </div>

              {activeCategory?.items?.length ? (
                <div
                  className="absolute left-full top-0 ml-3 w-56 rounded-2xl bg-[#ffffff] shadow-xl border border-neutral-200"
                  style={{ marginTop: submenuOffset }}
                >
                  <ul className="space-y-4 p-5">
                    {activeCategory.items.map((item) => (
                      <li key={item.label}>
                        <a
                          href={item.href}
                          onClick={(e) => handleNavClick(e, item.href)}
                          className="block text-sm font-semibold text-neutral-900 uppercase tracking-wide hover:text-primary-600 transition-colors"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
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
