
import CallButton from './CallButton'
import WhatsAppButton from './WhatsAppButton'
import QueryButton from './QueryButton'

const FloatingButtons = ({ onEnquiryOpen }) => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-4">
      {/* <WhatsAppButton /> */}
      <QueryButton onClick={onEnquiryOpen} />
      <CallButton />
    </div>
  )
}

export default FloatingButtons
