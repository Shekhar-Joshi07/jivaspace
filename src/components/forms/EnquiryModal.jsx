import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

const EnquiryModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const sheetsUrl = (import.meta.env.VITE_GOOGLE_SHEETS_URL || '').trim()

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const toast = Swal.mixin({
      width: 360,
      backdrop: false,
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      customClass: { popup: 'swal-rounded' },
    })

    if (!sheetsUrl) {
      toast.fire({
        icon: 'warning',
        title: 'Not configured',
        text: 'Enquiry form is not configured. Please try again later.',
      })
      return
    }

    setIsSubmitting(true)
    try {
      const payload = {
        ...formData,
        // source: typeof window !== 'undefined' ? window.location.pathname : '',
        source: "Website - www.jivaspace.com",
        submittedAt: new Date().toISOString(),
      }

      await fetch(sheetsUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify(payload),
      })

      toast.fire({
        icon: 'success',
        title: 'Enquiry sent',
        text: 'Thank you! We will contact you soon.',
      })
      setFormData({ name: '', phone: '', email: '', message: '' })
      onClose()
    } catch (error) {
      console.error('Enquiry submission failed:', error)
      toast.fire({
        icon: 'error',
        title: 'Submission failed',
        text: 'Please try again later.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  useEffect(() => {
    if (!isOpen) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.button
            type="button"
            aria-label="Close enquiry form"
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            className="relative w-full max-w-md"
            initial={{ y: 30, scale: 0.98, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 20, scale: 0.98, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="enquiry-form">
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation()
                  onClose()
                }}
                className="enquiry-form__close"
                aria-label="Close"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="title">Enquire Now</div>
              <div className="subtitle">Please Enter Your Details To Know More</div>
              <div className="subtitle">About JivaSpace</div>

              <form onSubmit={handleSubmit}>
                <div className="input-container ic1">
                  <input
                    placeholder=" "
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input"
                  />
                  <div className="cut"></div>
                  <label className="iLabel">Full name</label>
                </div>

                <div className="input-container ic2">
                  <input
                    placeholder=" "
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="input"
                  />
                  <div className="cut cut-short"></div>
                  <label className="iLabel">Phone</label>
                </div>

                <div className="input-container ic2">
                  <input
                    placeholder=" "
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input"
                  />
                  <div className="cut cut-short"></div>
                  <label className="iLabel">Email</label>
                </div>

                <div className="input-container ic2 input-textarea">
                  <textarea
                    placeholder=" "
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="input"
                  />
                  <div className="cut cut-message"></div>
                  <label className="iLabel">Message</label>
                </div>

                <button className="submit" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className="submit-content">
                      <span className="submit-spinner" />
                      Sending...
                    </span>
                  ) : (
                    'Submit'
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default EnquiryModal
