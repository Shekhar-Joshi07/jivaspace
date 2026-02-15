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
            className="relative w-full max-w-md rounded-2xl bg-[#173a5a] text-white shadow-2xl"
            initial={{ y: 30, scale: 0.98, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 20, scale: 0.98, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="pointer-events-none absolute inset-4 rounded-2xl border-2 border-dashed border-white/30" />
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation()
                onClose()
              }}
              className="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-2 text-dark-900 hover:bg-white transition"
              aria-label="Close"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="relative px-6 py-10 sm:px-10 sm:py-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl sm:text-4xl font-display font-semibold">
                  Enquire Now
                </h2>
                <p className="mt-3 text-sm sm:text-base text-white/80">
                  Please Enter Your Details To Know More
                </p>
                <p className="text-sm sm:text-base text-white/80">
                  About Xpert Edge Realtors
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="relative">
                  <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-dark-500">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                      <path d="M12 12c2.8 0 5-2.2 5-5s-2.2-5-5-5-5 2.2-5 5 2.2 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
                    </svg>
                  </span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name here"
                    required
                    className="w-full rounded-md bg-white px-12 py-3 text-sm text-neutral-900 placeholder-neutral-500 shadow-sm focus:outline-none"
                  />
                </div>

                <div className="relative">
                  <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-dark-500">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                      <path d="M6.6 2.5h2.7c.4 0 .8.3.8.7l.5 3.1c.1.4-.1.8-.5 1l-1.8 1.1c1.1 2 2.8 3.7 4.8 4.8l1.1-1.8c.2-.4.6-.5 1-.5l3.1.5c.4.1.7.4.7.8v2.7c0 .4-.3.8-.8.8C9 20.2 3.8 15 3.8 8.4c0-.4.3-.8.8-.8z" />
                    </svg>
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    required
                    className="w-full rounded-md bg-white px-12 py-3 text-sm text-neutral-900 placeholder-neutral-500 shadow-sm focus:outline-none"
                  />
                </div>

                <div className="relative">
                  <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-dark-500">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                      <path d="M4 6.8l8 5 8-5V5H4v1.8zm0 3.4V19h16v-8.8l-8 5-8-5z" />
                    </svg>
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email here"
                    required
                    className="w-full rounded-md bg-white px-12 py-3 text-sm text-neutral-900 placeholder-neutral-500 shadow-sm focus:outline-none"
                  />
                </div>

                <div className="relative">
                  <span className="pointer-events-none absolute left-4 top-4 text-dark-500">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                      <path d="M7 7h10M7 11h10M7 15h6M5 3h14a2 2 0 012 2v12l-4-4H5a2 2 0 01-2-2V5a2 2 0 012-2z" />
                    </svg>
                  </span>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    rows={3}
                    className="w-full rounded-md bg-white px-12 py-3 text-sm text-neutral-900 placeholder-neutral-500 shadow-sm focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className={`w-full rounded-full bg-black py-3 text-sm font-semibold uppercase tracking-widest text-white shadow-lg ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/70 border-t-transparent" />
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
