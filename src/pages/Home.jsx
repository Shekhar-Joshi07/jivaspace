import HeroSection from '../components/hero/HeroSection'
import About from './About'
import ApartmentCta from '../components/cta/ApartmentCta'
import WhyChooseUs from '../components/cta/WhyChooseUs'
import PartneredBuilders from '../components/cta/PartneredBuilders'

const Home = ({ onEnquiryOpen }) => {
  return (
    <div className="relative">
      <HeroSection onEnquiryOpen={onEnquiryOpen} />
      <About />
      <ApartmentCta />
      <WhyChooseUs />
      <PartneredBuilders />
    </div>
  )
}

export default Home
