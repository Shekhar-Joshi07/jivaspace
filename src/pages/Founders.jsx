import { motion } from 'framer-motion'
import founderSapna from '../assets/clients_assets/FounderI1.jpeg'
import founderKalpana from '../assets/clients_assets/FounderI2.jpeg'

const founders = [
  {
    name: 'Mrs Kalpana Yadav',
    title: 'Founder',
    image: founderSapna,
    position: 'center 22%',
  },
    {
    name: 'Dr. Sapna Sikera',
    title: 'Founder',
    image: founderKalpana,
    position: 'center 18%',
  }
]

const Founders = () => {
  return (
    <section id="founders" className="section-container section-spacing">
      <div className="text-center mb-16">
        <p className="text-sm uppercase tracking-[0.3em] text-primary-400 font-semibold mb-3">
          Leadership
        </p>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
          Meet the Founders
        </h2>
        <p className="text-lg text-white/80 max-w-2xl mx-auto">
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
            className="relative w-full max-w-md overflow-hidden rounded-3xl bg-dark-100/40 border border-dark-200/50 shadow-2xl"
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
              <h3 className="text-2xl font-semibold text-white mb-3">
                {founder.name}
              </h3>
              <p className="text-base text-white/80 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua.
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Founders
