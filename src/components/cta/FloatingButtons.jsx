
import { motion } from 'framer-motion'
import CallButton from './CallButton'
import WhatsAppButton from './WhatsAppButton'

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-4">
      <WhatsAppButton />
      <CallButton />
    </div>
  )
}

export default FloatingButtons
