import { motion } from 'framer-motion'

const QueryButton = ({ onClick }) => {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      className="flex items-center justify-center w-14 h-14 bg-primary-500 text-white rounded-full shadow-lg hover:shadow-glow hover:bg-primary-600 transition-all duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.9, duration: 0.3 }}
      aria-label="Send enquiry"
      title="Send enquiry"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 10h8M8 14h5m-1 7l-4-4H5a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v7a2 2 0 01-2 2h-3l-4 4z"
        />
      </svg>
    </motion.button>
  )
}

export default QueryButton
