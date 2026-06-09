import { motion } from 'framer-motion'
import founderSapna from '../assets/clients_assets/FounderI2.jpeg'
import founderKalpana from '../assets/clients_assets/FounderI1.jpeg'

const founders = [
  {
    name: 'Mrs. Kalpana Yadav',
    title: 'Founder',
    image: founderKalpana,
    position: 'center 22%',
    bio:
      'Mrs. Kalpana Yadav is the visionary founder of our real estate company, bringing years of dedication, integrity, and market expertise to the industry. With a strong commitment to transparency and customer satisfaction, she has built the company on the foundation of trust, quality, and long-term relationships. Her leadership focuses on delivering premium residential and commercial properties that combine strategic location, modern design, and strong investment value. Under her guidance, the company continues to help families find their dream homes and investors secure profitable opportunities across Lucknow. Driven by passion and a deep understanding of the real estate market, Mrs. Yadav ensures that every project reflects excellence, reliability, and a customer-first approach.',
  },
  {
    name: 'Dr. Sapna Sikera',
    title: 'Founder',
    image: founderSapna,
    position: 'center 18%',
    bio:
      'Dr. Sapna Sikera is a dynamic leader and visionary founder dedicated to redefining excellence in the real estate industry. With a strong professional background and a deep understanding of client needs, she has built the organization on values of integrity, transparency, and long-term trust. Her leadership emphasizes delivering thoughtfully planned residential and commercial developments that offer both lifestyle comfort and strong investment potential. Known for her strategic approach and commitment to quality, Dr. Sikera ensures that every project reflects innovation, reliability, and customer satisfaction. Under her guidance, the company continues to create valuable opportunities for homeowners and investors across Lucknow, turning aspirations into reality.',
  },
]

const Founders = () => {
  return (
    <section id="founders" className="section-container section-spacing">
      <div className="text-center mb-16">
        <p className="text-sm uppercase tracking-[0.3em] text-primary-400 font-semibold mb-3">
          Leadership
        </p>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-4">
          Meet the Founders
        </h2>
        <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
          Visionary leadership guiding every detail with integrity, excellence, and care.
        </p>
      </div>

      <div className="mx-auto grid gap-10 md:grid-cols-2 justify-items-center max-w-5xl">
        {founders.map((founder, index) => (
          <motion.div
            key={founder.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative w-full max-w-md overflow-hidden rounded-3xl border border-primary-200/50 bg-white shadow-2xl"
          >
            <div className="relative h-72 sm:h-80 md:h-96">
              <img
                src={founder.image}
                alt={founder.name}
                className="h-full w-full object-cover"
                style={{ objectPosition: founder.position }}
                loading="lazy"
              />
            </div>
            <div className="p-6 sm:p-8">
              <p className="text-sm uppercase tracking-[0.2em] text-primary-400 mb-2">
                {founder.title}
              </p>
              <h3 className="text-2xl font-semibold text-neutral-900 mb-3">
                {founder.name}
              </h3>
              <p className="text-base text-neutral-700 leading-relaxed">
                {founder.bio}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Founders
