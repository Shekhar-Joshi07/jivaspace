import HeroSection from '../components/hero/HeroSection'
import About from './About'
import Founders from './Founders'
import Properties from './Properties'
import Amenities from './Amenities'
import Gallery from './Gallery'
import Contact from './Contact'

const Home = ({ onEnquiryOpen }) => {
  return (
    <div className="relative">
      <HeroSection onEnquiryOpen={onEnquiryOpen} />
      <About />
      <Founders />
      <Properties />
      <Amenities />
      <Gallery />
      <Contact />
    </div>
  )
}

export default Home
