import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const GalleryModal = () => {
  const [activeImage, setActiveImage] = useState(null)

  useEffect(() => {
    const handleOpen = (event) => {
      setActiveImage(event.detail)
      document.body.style.overflow = 'hidden'
    }

    const handleClose = () => {
      setActiveImage(null)
      document.body.style.overflow = ''
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        handleClose()
      }
    }

    window.addEventListener('gallery:open', handleOpen)
    window.addEventListener('gallery:close', handleClose)
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('gallery:open', handleOpen)
      window.removeEventListener('gallery:close', handleClose)
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [])

  const closeModal = () => {
    setActiveImage(null)
    document.body.style.overflow = ''
  }

  return (
    <AnimatePresence>
      {activeImage && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <motion.img
            src={activeImage}
            alt="Gallery full view"
            className="max-h-[85vh] w-auto max-w-[90vw] rounded-2xl shadow-2xl"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(event) => event.stopPropagation()}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default GalleryModal
