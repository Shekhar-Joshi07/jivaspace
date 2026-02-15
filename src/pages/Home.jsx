import HeroSection from '../components/hero/HeroSection'
import About from './About'

const Home = ({ onEnquiryOpen }) => {
  return (
    <div className="relative">
      <HeroSection onEnquiryOpen={onEnquiryOpen} />
      <About />
    </div>
  )
}

export default Home
