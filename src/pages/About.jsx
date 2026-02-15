const About = () => {
  return (
    <section id="about" className="relative section-spacing bg-white">
      <div className="section-container">
        <div className="text-center mb-16 md:mb-20">
          <h1 className="text-2xl  font-display font-bold text-dark-500 mb-[5px]">
            Let's Find the Right Space for You
          </h1>
          <p className="text-lg text-dark-600 max-w-3xl mx-auto leading-relaxed">
            Discover your dream home with JivaSpace. Find tailored listings, expert advice, and
            seamless support for your perfect property.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              title: 'Modern Villas',
              body:
                'Experience luxury living in a modern villa with stunning design, top amenities, and prime location.',
              border: 'border-dark-700',
              line: 'bg-dark-700',
              icon: (
                <svg viewBox="0 0 32 32" className="w-[60px] h-[60px]" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M4 26h24" />
                  <path d="M6 26V12l10-6 10 6v14" />
                  <path d="M12 26v-7h8v7" />
                </svg>
              ),
            },
            {
              title: 'Apartments',
              body:
                'Discover stylish apartments with modern amenities, prime locations, and comfortable urban living spaces.',
              border: 'border-dark-700',
              line: 'bg-dark-700',
              icon: (
                <svg viewBox="0 0 32 32" className="w-[60px] h-[60px]" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M6 26V6h20v20" />
                  <path d="M10 10h4v4h-4zM18 10h4v4h-4zM10 18h4v4h-4zM18 18h4v4h-4z" />
                </svg>
              ),
            },
            {
              title: 'Family House',
              body:
                'Discover the ideal family house: spacious, safe, with excellent amenities, and located in a friendly neighborhood.',
              border: 'border-primary-600',
              line: 'bg-primary-600',
              icon: (
                <svg viewBox="0 0 32 32" className="w-[60px] h-[60px]" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M6 26h20" />
                  <path d="M8 26V14l8-6 8 6v12" />
                  <path d="M13 26v-6h6v6" />
                  <path d="M16 6l2 2" />
                </svg>
              ),
            },
            {
              title: 'Office Building',
              body:
                'Find the perfect office building: prime location, modern facilities, flexible spaces, and a professional environment.',
              border: 'border-primary-600',
              line: 'bg-primary-600',
              icon: (
                <svg viewBox="0 0 32 32" className="w-[60px] h-[60px]" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M5 26h22" />
                  <path d="M8 26V6h10v20" />
                  <path d="M18 26v-8h6v8" />
                  <path d="M11 10h4M11 14h4M11 18h4" />
                </svg>
              ),
            },
          ].map((card, index) => (
            <div
              key={card.title}
              className={`group relative border-2 ${card.border} pt-[76px] p-6 md:p-7 bg-white shadow-[0_12px_30px_-20px_rgba(15,23,42,0.35)] transition-transform duration-300 hover:-translate-y-1`}
            >
              <span
                className={`pointer-events-none absolute inset-0 border-2 ${card.border} opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-[1.02]`}
              />
              <div className="absolute -top-[34px] left-6 right-6 z-10 flex items-center gap-3 text-dark-500">
                <span className={`h-[2px] w-10 ${card.line}`} />
                <span className="bg-white px-3 text-dark-500">{card.icon}</span>
                <span className={`h-[2px] flex-1 ${card.line}`} />
              </div>
              <h3 className="text-xl font-semibold text-dark-500 mb-4">{card.title}</h3>
              <p className="text-base text-dark-600 leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
