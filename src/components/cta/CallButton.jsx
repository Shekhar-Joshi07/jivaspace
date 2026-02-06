
import { motion } from 'framer-motion'
import { siteConfig } from '@/data/siteConfig'
import { formatPhoneLink } from '@/lib/utils'

const CallButton = () => {
  const phoneLink = formatPhoneLink(siteConfig.contact.phone)

  return (
    <motion.a
      href={`tel:${phoneLink}`}
      className="flex items-center justify-center w-14 h-14 bg-primary-500 text-white rounded-full shadow-lg hover:shadow-glow hover:bg-primary-600 transition-all duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.3 }}
      aria-label="Call us"
      title="Call us"
    >
      <svg
        className="w-6 h-6"
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
    </motion.a>
  )
}

export default CallButton
