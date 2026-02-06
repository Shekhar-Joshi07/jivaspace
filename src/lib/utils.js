// Utility functions
// Helper functions used throughout the application

/**
 * Format price in Indian currency format
 * @param {number|string} amount - The amount to format
 * @returns {string} Formatted price string
 */
export const formatPrice = (amount) => {
  if (!amount) return '₹0'

  // Convert to number if string
  const num = typeof amount === 'string' ? parseFloat(amount) : amount

  // Format in Indian numbering system (lakhs, crores)
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(num)
}

/**
 * Validate email address
 * @param {string} email - Email address to validate
 * @returns {boolean} True if valid email
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Validate Indian phone number
 * @param {string} phone - Phone number to validate
 * @returns {boolean} True if valid phone number
 */
export const isValidPhone = (phone) => {
  // Remove all spaces, dashes, and parentheses
  const cleaned = phone.replace(/[\s\-()]/g, '')

  // Check if it's a valid Indian phone number (10 digits, optionally with +91 or 0 prefix)
  const phoneRegex = /^(\+91|91|0)?[6-9]\d{9}$/
  return phoneRegex.test(cleaned)
}

/**
 * Validate name (alphabets and spaces only)
 * @param {string} name - Name to validate
 * @returns {boolean} True if valid name
 */
export const isValidName = (name) => {
  if (!name || name.trim().length < 2) return false
  const nameRegex = /^[a-zA-Z\s]+$/
  return nameRegex.test(name)
}

/**
 * Combine CSS class names conditionally
 * @param  {...any} classes - Class names to combine
 * @returns {string} Combined class names
 */
export const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ')
}

/**
 * Format area in square feet with proper spacing
 * @param {number|string} area - Area in square feet
 * @returns {string} Formatted area string
 */
export const formatArea = (area) => {
  if (!area) return '0 sq.ft'
  return `${area.toLocaleString('en-IN')} sq.ft`
}

/**
 * Truncate text to specified length
 * @param {string} text - Text to truncate
 * @param {number} length - Maximum length
 * @returns {string} Truncated text with ellipsis
 */
export const truncateText = (text, length = 100) => {
  if (!text || text.length <= length) return text
  return text.slice(0, length) + '...'
}

/**
 * Format phone number for tel: link
 * @param {string} phone - Phone number
 * @returns {string} Formatted phone for tel: link
 */
export const formatPhoneLink = (phone) => {
  // Remove all non-digit characters
  return phone.replace(/\D/g, '')
}

/**
 * Format phone number for WhatsApp link
 * @param {string} phone - Phone number
 * @returns {string} Formatted phone for wa.me link
 */
export const formatWhatsAppLink = (phone) => {
  // Remove all non-digit characters and ensure it starts with country code
  const cleaned = phone.replace(/\D/g, '')
  // Add 91 if not present
  return cleaned.startsWith('91') ? cleaned : `91${cleaned}`
}

/**
 * Generate WhatsApp message URL
 * @param {string} phone - Phone number
 * @param {string} message - Pre-filled message
 * @returns {string} WhatsApp URL
 */
export const getWhatsAppURL = (phone, message = '') => {
  const formattedPhone = formatWhatsAppLink(phone)
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${formattedPhone}${message ? `?text=${encodedMessage}` : ''}`
}

/**
 * Smooth scroll to element
 * @param {string} elementId - ID of element to scroll to
 * @param {number} offset - Offset from top (for fixed headers)
 */
export const scrollToElement = (elementId, offset = 80) => {
  const element = document.getElementById(elementId)
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = elementPosition - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    })
  }
}

/**
 * Check if element is in viewport
 * @param {HTMLElement} element - Element to check
 * @returns {boolean} True if element is visible
 */
export const isInViewport = (element) => {
  const rect = element.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

/**
 * Debounce function to limit how often a function can fire
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
export const debounce = (func, wait = 300) => {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

/**
 * Format date to readable format
 * @param {string|Date} date - Date to format
 * @returns {string} Formatted date string
 */
export const formatDate = (date) => {
  if (!date) return ''
  const dateObj = typeof date === 'string' ? new Date(date) : date
  return dateObj.toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

/**
 * Generate slug from string
 * @param {string} text - Text to slugify
 * @returns {string} Slug
 */
export const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
}
