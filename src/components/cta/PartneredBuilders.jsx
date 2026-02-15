const builders = ['Migsun', 'Okas Residency', 'Oro', 'Rishita', 'Sahu City', 'Sapphire']

const PartneredBuilders = () => {
  return (
    <section className="section-spacing bg-white">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-display font-semibold text-dark-700">
            Our Partnered Builders
          </h2>
        </div>

        <div className="relative overflow-hidden">
          <div className="builder-marquee flex gap-6">
            {[...builders, ...builders].map((builder, index) => (
              <div
                key={`${builder}-${index}`}
                className="group flex min-w-[220px] items-center justify-center rounded-2xl border border-neutral-200 bg-neutral-50/60 px-6 py-8 shadow-sm transition-transform duration-300 hover:-translate-y-1"
              >
                <span className="text-base font-semibold text-dark-600/40 transition-all duration-300 group-hover:text-dark-700 group-hover:opacity-100 group-hover:scale-105">
                  {builder}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-3xl bg-neutral-200/80 px-6 py-8 sm:px-10 sm:py-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-base sm:text-lg text-dark-700">
              Are you searching for a house or a buyer for your property sale?
            </p>
            <a href="#contact" className="btn-secondary min-w-[180px] text-center">
              Enquire Now
            </a>
          </div>
        </div>
      </div>
      <style>{`
        .builder-marquee {
          animation: builder-scroll 18s linear infinite;
        }
        .builder-marquee:hover {
          animation-play-state: paused;
        }
        @keyframes builder-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}

export default PartneredBuilders
