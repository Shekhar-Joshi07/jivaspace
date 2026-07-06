import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useLocation, useNavigate } from 'react-router-dom'
import { scrollToElement } from '@/lib/utils'
import { mainNavItems, propertyCategories } from '@/data/navigation'
import { siteConfig } from '@/data/siteConfig'

const Navigation = ({ onEnquiryOpen, isLightText = false }) => {
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

  useEffect(() => {
    if (typeof window === 'undefined') return undefined
    const handleOpen = () => {
      if (window.matchMedia('(min-width: 1024px)').matches) {
        openDropdown()
      }
    }
    window.addEventListener('open-properties-menu', handleOpen)
    return () => window.removeEventListener('open-properties-menu', handleOpen)
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

  const handleNavClick = (event, href) => {
    event.preventDefault()
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

  const handleToggleDropdown = (event) => {
    event.preventDefault()
    if (isDropdownOpen) {
      closeDropdown()
    } else {
      openDropdown()
    }
  }

  const navItemClass = isLightText
    ? 'text-white hover:text-white'
    : 'text-dark-500 hover:text-dark-50'

  return (
    <nav>
      <ul className="flex items-center space-x-1">
        {mainNavItems.slice(0, 2).map((item) => (
          <li key={item.href}>
            <a href={item.href} onClick={(event) => handleNavClick(event, item.href)}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative rounded-lg px-4 py-2 font-medium transition-all duration-200 ${navItemClass}`}
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
            className={`relative flex items-center gap-1 rounded-lg px-4 py-2 font-medium transition-all duration-200 ${navItemClass}`}
            aria-haspopup="true"
            aria-expanded={isDropdownOpen}
            aria-controls="properties-menu"
          >
            <span>Properties</span>
            <span className={isLightText ? 'text-white' : 'text-primary-500'}>+</span>
          </button>

          <div
            id="properties-menu"
            className={`absolute left-0 top-full pt-3 transition-all duration-200 ${
              isDropdownOpen
                ? 'pointer-events-auto translate-y-0 opacity-100'
                : 'pointer-events-none translate-y-2 opacity-0'
            }`}
          >
            <div
              ref={menuPanelRef}
              className="relative rounded-2xl border border-primary-200/70 bg-white/95 shadow-xl backdrop-blur-xl"
            >
              <div className="w-56 rounded-2xl bg-white/95 p-5">
                <ul className="space-y-4">
                  {propertyCategories.map((category) => {
                    const isActive = activeCategory?.label === category.label
                    return (
                      <li key={category.label}>
                        <button
                          type="button"
                          onClick={(event) => handleCategoryHover(category, event)}
                          onMouseEnter={(event) => handleCategoryHover(category, event)}
                          onFocus={(event) => handleCategoryHover(category, event)}
                          className={`flex w-full items-center justify-between text-sm font-semibold uppercase tracking-wide transition-colors ${
                            isActive ? 'text-primary-600' : 'text-neutral-900 hover:text-primary-600'
                          }`}
                        >
                          <span>{category.label}</span>
                          <span className={isActive ? 'text-primary-600' : 'text-neutral-500'}>&gt;</span>
                        </button>
                      </li>
                    )
                  })}
                </ul>
              </div>

              {activeCategory?.items?.length ? (
                <div
                  className="absolute left-full top-0 ml-3 w-56 rounded-2xl border border-primary-200/70 bg-white/95 shadow-xl backdrop-blur-xl"
                  style={{ marginTop: submenuOffset }}
                >
                  <ul className="space-y-4 p-5">
                    {activeCategory.items.map((item) => (
                      <li key={item.label}>
                        <a
                          href={item.href}
                          onClick={(event) => handleNavClick(event, item.href)}
                          className="block text-sm font-semibold uppercase tracking-wide text-neutral-900 transition-colors hover:text-primary-600"
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
            <a href={item.href} onClick={(event) => handleNavClick(event, item.href)}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative rounded-lg px-4 py-2 font-medium transition-all duration-200 ${navItemClass}`}
              >
                {item.label}
              </motion.div>
            </a>
          </li>
        ))}

        <li className="ml-3">
          <a
            href={`tel:${siteConfig.contact.phone.replace(/\D/g, '')}`}
            className={`block rounded-lg px-4 py-3 text-sm font-semibold leading-tight transition-colors ${
              isLightText ? 'text-white hover:text-white' : 'text-dark-500 hover:text-primary-600'
            }`}
          >
            <span className="block">7307037497, 9336606233</span>
           
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
