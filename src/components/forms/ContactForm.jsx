import { motion } from 'framer-motion'
import { useState } from 'react'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

const ContactForm = ({
  showHeading = true,
  className = '',
  variant = 'default',
  compact = false,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const sheetsUrl = (import.meta.env.VITE_GOOGLE_SHEETS_URL || '').trim()

  const isPlain = variant === 'plain'
  const fieldSpacing = compact ? 'space-y-4' : 'space-y-6'
  const formPadding = compact ? 'p-6' : 'p-8'

  const handleSubmit = async (e) => {
    e.preventDefault()
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
      setFormData({ name: '', email: '', phone: '', message: '' })
    } catch (error) {
      console.error('Form submission failed:', error)
      toast.fire({
        icon: 'error',
        title: 'Submission failed',
        text: 'Please try again later.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className={`max-w-2xl mx-auto ${className}`}
    >
      {showHeading ? (
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-neutral-600">
            Contact us today to schedule a site visit
          </p>
        </motion.div>
      ) : null}

      <motion.form
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        onSubmit={handleSubmit}
        className={
          isPlain
            ? fieldSpacing
            : `relative overflow-hidden bg-gradient-to-b from-neutral-50 via-neutral-100/70 to-neutral-50 ${formPadding} rounded-3xl border border-primary-200/30 shadow-2xl backdrop-blur-sm`
        }
      >
        {!isPlain ? (
          <>
            <div className="pointer-events-none absolute -top-24 -right-16 h-56 w-56 rounded-full bg-primary-200/25 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-28 -left-20 h-64 w-64 rounded-full bg-accent-mint/30 blur-3xl" />
          </>
        ) : null}
        <div className={`relative ${fieldSpacing}`}>
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="input-field"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="input-field"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="input-field"
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={compact ? 3 : 4}
              className="input-field"
              placeholder="How can we help you?"
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`btn-primary w-full ${compact ? 'text-base py-3' : 'text-lg py-4'} ${
              isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Enquiry'}
          </motion.button>
        </div>
      </motion.form>
    </motion.div>
  )
}

export default ContactForm
