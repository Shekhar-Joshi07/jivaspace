import { useEffect, useMemo, useState } from 'react'

const logoModules = import.meta.glob('../../assets/Logos/*.{png,jpg,jpeg,svg}', {
  eager: true,
  import: 'default',
})

const logos = Object.entries(logoModules)
  .map(([path, src]) => {
    const fileName = path.split('/').pop() || ''
    const label = fileName
      .replace(/\.[^.]+$/, '')
      .replace(/[_-]+/g, ' ')
      .replace(/\b\w/g, (char) => char.toUpperCase())
    return { src, label, fileName }
  })
  .sort((a, b) => a.fileName.localeCompare(b.fileName))

const PartneredBuilders = () => {
  const [activeSlide, setActiveSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const slides = useMemo(() => {
    const perSlide = 8
    const chunks = []
    for (let i = 0; i < logos.length; i += perSlide) {
      chunks.push(logos.slice(i, i + perSlide))
    }
    return chunks
  }, [])

  const slideCount = slides.length

  useEffect(() => {
    if (slideCount <= 1 || isPaused) return undefined
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slideCount)
    }, 4500)
    return () => clearInterval(timer)
  }, [slideCount, isPaused])

  const openEnquiry = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('open-enquiry'))
    }
  }

  const goToSlide = (index) => {
    setActiveSlide((index + slideCount) % slideCount)
  }

  return (
    <section className="section-spacing bg-white">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-display font-semibold text-dark-700">
            Our Partnered Builders
          </h2>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {slides.map((slide, slideIndex) => (
                <div key={`slide-${slideIndex}`} className="min-w-full px-2 sm:px-6">
                  <div className="grid grid-cols-2 gap-x-10 gap-y-8 place-items-center sm:grid-cols-3 lg:grid-cols-4">
                    {slide.map((logo) => (
                      <div
                        key={logo.fileName}
                        className="flex h-24 w-48 items-center justify-center sm:h-28 sm:w-56"
                      >
                        <img
                          src={logo.src}
                          alt={logo.label}
                          className="h-full w-full object-contain"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {slideCount > 1 ? (
            <>
              <button
                type="button"
                aria-label="Previous logos"
                onClick={() => goToSlide(activeSlide - 1)}
                className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full border border-neutral-200 bg-white/90 p-2 shadow-md transition hover:bg-white"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-dark-700" fill="currentColor" aria-hidden="true">
                  <path d="M15.4 5.4a1 1 0 010 1.4L10.2 12l5.2 5.2a1 1 0 11-1.4 1.4l-5.9-5.9a1 1 0 010-1.4l5.9-5.9a1 1 0 011.4 0z" />
                </svg>
              </button>
              <button
                type="button"
                aria-label="Next logos"
                onClick={() => goToSlide(activeSlide + 1)}
                className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full border border-neutral-200 bg-white/90 p-2 shadow-md transition hover:bg-white"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-dark-700" fill="currentColor" aria-hidden="true">
                  <path d="M8.6 18.6a1 1 0 010-1.4l5.2-5.2-5.2-5.2a1 1 0 111.4-1.4l5.9 5.9a1 1 0 010 1.4l-5.9 5.9a1 1 0 01-1.4 0z" />
                </svg>
              </button>
              <div className="mt-6 flex items-center justify-center gap-2">
                {slides.map((_, index) => (
                  <button
                    key={`dot-${index}`}
                    type="button"
                    aria-label={`Go to logos slide ${index + 1}`}
                    onClick={() => goToSlide(index)}
                    className={`h-2.5 w-2.5 rounded-full transition ${
                      index === activeSlide ? 'bg-primary-600' : 'bg-neutral-300'
                    }`}
                  />
                ))}
              </div>
            </>
          ) : null}
        </div>

        <div className="mt-12 rounded-3xl bg-neutral-200/80 px-6 py-8 sm:px-10 sm:py-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-base sm:text-lg text-dark-700">
              Are you searching for a house or a buyer for your property sale?
            </p>
            <button
              type="button"
              onClick={openEnquiry}
              className="btn-secondary min-w-[180px] text-center"
            >
              Enquire Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PartneredBuilders
