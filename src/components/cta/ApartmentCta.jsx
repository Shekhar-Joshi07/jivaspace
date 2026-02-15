import clientImage2 from '../../assets/clients_assets/client image 2.jpeg'

const ApartmentCta = () => {
  return (
    <section className="section-spacing">
      <div className="section-container">
        <div className="relative overflow-hidden rounded-3xl bg-neutral-100 shadow-2xl">
          <img
            src={clientImage2}
            alt="Modern apartment interior"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-white/20" />

          <div className="relative z-10 max-w-2xl">
            <div className="m-6 sm:m-10 rounded-3xl bg-white/95 p-8 sm:p-10 shadow-xl backdrop-blur">
              <h3 className="text-3xl sm:text-4xl font-display font-bold text-neutral-900 mb-4">
                Are you looking for modern apartment?
              </h3>
              <div className="h-[3px] w-16 bg-primary-600 mb-5" />
              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mb-8">
                Discover sleek designs, top-notch amenities, and prime locations with JivaSpace.
                Experience the perfect blend of comfort, style, and convenience in your new home.
                Let us guide you to the modern apartment you&apos;ve always dreamed of.
              </p>
              <a href="#contact" className="btn-primary inline-flex min-w-[180px] justify-center">
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ApartmentCta
