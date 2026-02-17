import clientImage1 from '../../assets/Untitleddesign.jpeg'

const VisionMission = () => {
  return (
    <section className="section-spacing">
      <div className="section-container">
        <div className="relative overflow-hidden rounded-3xl bg-dark-100 shadow-2xl">
          <img
            src={clientImage1}
            alt="Vision and mission background"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-dark-50/80" />

          <div className="relative z-10 px-6 py-16 sm:px-10 sm:py-20 text-center text-white">
            <p className="text-sm uppercase tracking-[0.35em] text-primary-300 mb-4">
              Our Vision &amp; Mission
            </p>
            <div className="mx-auto h-[2px] w-16 bg-primary-500 mb-6" />
            <p className="mx-auto max-w-3xl text-base sm:text-lg text-white/85 leading-relaxed mb-6">
              To become the most trusted name in real estate investments by setting new standards of integrity, performance, and long-term value creation.
            </p>
            <p className="mx-auto max-w-3xl text-base sm:text-lg text-white/85 leading-relaxed">
             Our mission is to deliver reliable, high-return real estate opportunities while maintaining absolute transparency, professional excellence, and client-first commitment.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VisionMission
