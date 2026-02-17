import { useEffect, useMemo, useState } from 'react'

const GalleryCarousel = ({
  images = [],
  altPrefix = 'Gallery',
  className = '',
  autoPlay = true,
  intervalMs = 3500,
  compact = false,
}) => {
  const safeImages = useMemo(() => images.filter(Boolean), [images])
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (activeIndex >= safeImages.length) {
      setActiveIndex(0)
    }
  }, [activeIndex, safeImages.length])

  useEffect(() => {
    if (!autoPlay || isPaused || safeImages.length < 2) return
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % safeImages.length)
    }, intervalMs)

    return () => clearInterval(timer)
  }, [autoPlay, intervalMs, isPaused, safeImages.length])

  if (!safeImages.length) return null

  const goTo = (nextIndex) => {
    const normalized = ((nextIndex % safeImages.length) + safeImages.length) % safeImages.length
    setActiveIndex(normalized)
  }

  const frameClass = compact ? 'aspect-[16/9]' : 'aspect-[4/3]'
  const containerClass = compact ? 'max-w-4xl mx-auto' : ''

  return (
    <div
      className={`relative ${containerClass} ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative overflow-hidden rounded-2xl bg-neutral-100">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {safeImages.map((src, index) => (
            <div key={`${src}-${index}`} className="w-full flex-shrink-0">
              <div className={`${frameClass} w-full`}>
                <img
                  src={src}
                  alt={`${altPrefix} Gallery ${index + 1}`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={() => goTo(activeIndex - 1)}
        aria-label="Previous image"
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-neutral-200 bg-white/90 px-3 py-2 text-lg font-semibold text-dark-500 shadow-md transition hover:bg-white"
      >
        ‹
      </button>
      <button
        type="button"
        onClick={() => goTo(activeIndex + 1)}
        aria-label="Next image"
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-neutral-200 bg-white/90 px-3 py-2 text-lg font-semibold text-dark-500 shadow-md transition hover:bg-white"
      >
        ›
      </button>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
        {safeImages.map((_, index) => (
          <button
            key={`dot-${index}`}
            type="button"
            onClick={() => goTo(index)}
            aria-label={`Go to image ${index + 1}`}
            className={`h-2.5 w-2.5 rounded-full transition ${
              index === activeIndex ? 'bg-primary-500' : 'bg-neutral-300'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default GalleryCarousel
