const features = [
  {
    number: '01',
    title: 'Unmatched Customer Service',
    body:
      'Your satisfaction is our top priority. We deliver exceptional service with prompt responses, proactive communication, and personalized attention to exceed your expectations.',
  },
  {
    number: '02',
    title: 'Expert Guidance',
    body:
      'Our seasoned professionals know finding your dream home is about more than a transaction—it’s about creating a place where you can thrive and make lasting memories.',
  },
  {
    number: '03',
    title: 'Diverse Property Portfolio',
    body:
      'From cozy urban apartments to spacious suburban homes and serene countryside retreats, our listings cater to every lifestyle and budget.',
  },
  {
    number: '04',
    title: 'Tailored Personal Service',
    body:
      'We offer personalized service to meet your unique needs, including thorough property searches, viewings, and negotiation support.',
  },
]

const WhyChooseUs = () => {
  return (
    <section className="section-spacing bg-dark-100">
      <div className="section-container">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:pr-10">
            <div className="flex items-center gap-4 text-white/90 uppercase tracking-[0.35em] text-xs font-semibold mb-6">
              <span className="h-[2px] w-12 bg-primary-500" />
              Why Choose Us
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-white leading-tight">
              Exceptional Real Estate Company for Housing and Construction
            </h2>
          </div>

          <div className="lg:col-span-2 grid gap-10 md:grid-cols-2">
            {features.map((feature, index) => (
              <div
                key={feature.number}
                className={`relative pl-8 ${
                  index % 2 === 0 ? 'md:border-l md:border-white/15' : ''
                } ${index > 1 ? 'md:pt-10 md:border-t md:border-white/15' : ''}`}
              >
                <p className="text-2xl font-semibold text-white/90 mb-2">{feature.number}</p>
                <span className="block h-[3px] w-12 bg-primary-500 mb-6" />
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                  {feature.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
