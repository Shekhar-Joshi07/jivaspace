import clientImage2 from '../../assets/clients_assets/image.png'
import amenityPool from '../../assets/amenities/amenity-pool.svg'
import amenityKids from '../../assets/amenities/amenity-kids.svg'
import amenityGym from '../../assets/amenities/amenity-gym.svg'
import amenityClubhouse from '../../assets/amenities/amenity-clubhouse.svg'
import amenityGarden from '../../assets/amenities/amenity-garden.svg'
import amenityPower from '../../assets/amenities/amenity-power.svg'
import amenitySecurity from '../../assets/amenities/amenity-security.svg'
import amenityParking from '../../assets/amenities/amenity-parking.svg'
import GalleryCarousel from './GalleryCarousel'

const defaultHero = {
  headline: '2BHK & 3BHK',
  subheadline: 'PREMIUM FLATS',
  startFrom: '42.30 Lacs*',
  location: 'Sultanpur Road, Lucknow',
  reraNumber: 'UP RERA PRJ 2629',
  reraWebsite: 'www.up-rera.in',
}

const defaultHighlights = ['Living and Dining Room', 'External Finish', 'Balconies']

const defaultUnits = [
  { title: '2BHK', area: 'Area: 900 sq.ft', price: 'Price: Rs. 42.50 Lac Onwards' },
  { title: '3BHK', area: 'Area: 1080 sq.ft', price: 'Price: On Request' },
]

const defaultAmenities = [
  { label: 'Swimming Pool', icon: amenityPool },
  { label: 'Children Play Area', icon: amenityKids },
  { label: 'Gym Area', icon: amenityGym },
  { label: 'Club House', icon: amenityClubhouse },
  { label: 'Power Backup', icon: amenityPower },
  { label: 'CCTV Camera', icon: amenitySecurity },
  { label: 'Car Parking', icon: amenityParking },
]

const amenityIconMap = {
  'Swimming Pool': amenityPool,
  'Children Play Area': amenityKids,
  'Kids Play Area': amenityKids,
  'Gym Area': amenityGym,
  'Gym': amenityGym,
  'Club House': amenityClubhouse,
  'Power Backup': amenityPower,
  'Power Backup (Common)': amenityPower,
  'Street Lights': amenityPower,
  'Water Supply': amenityPool,
  'Drainage System': amenityPool,
  'Drainage': amenityPool,
  'High Speed Elevators': amenityPower,
  'Escalators & Lifts': amenityPower,
  'Lift Facility': amenityPower,
  'CCTV Camera': amenitySecurity,
  'CCTV Security': amenitySecurity,
  'CCTV Surveillance': amenitySecurity,
  'CCTV': amenitySecurity,
  '24x7 Security': amenitySecurity,
  'Gated Community': amenitySecurity,
  'Gated Security': amenitySecurity,
  'Gated Township': amenitySecurity,
  'Car Parking': amenityParking,
  'Covered Parking': amenityParking,
  'Private Parking': amenityParking,
  'Parking Area': amenityParking,
  'Ample Parking': amenityParking,
  'Basement Parking': amenityParking,
  'Parking': amenityParking,
  'Wide Roads': amenityParking,
  'Internal Roads': amenityParking,
  'Modern Lobby': amenityClubhouse,
  'Food Court': amenityClubhouse,
  'High Footfall Location': amenityClubhouse,
  'Temple': amenityClubhouse,
  'Landscaped Garden': amenityGarden,
  'Landscaped Gardens': amenityGarden,
  'Green Environment': amenityGarden,
  'Green Landscaping': amenityGarden,
  'Park & Green Area': amenityGarden,
  'Green Park': amenityGarden,
  'Garden Area': amenityGarden,
  'Jogging Track': amenityGarden,
}

const fallbackAmenityIcon = (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
    <path d="M12 2.5l2.4 4.8 5.3.8-3.8 3.7.9 5.3L12 14.7l-4.8 2.4.9-5.3-3.8-3.7 5.3-.8L12 2.5z" />
  </svg>
)

const defaultFloorPlans = [
  'Floor Plan 2BHK (900 sq.ft)',
  'Floor Plan 3BHK (1080 sq.ft)',
  'Master Plans',
]

const defaultGallery = [
  clientImage2,
  clientImage2,
  clientImage2,
  clientImage2,
  clientImage2,
  clientImage2,
]

const defaultNearbyPlaces = [
  'IT City',
  'Medanta Hospital',
  'Phoenix Palassio Mall',
  'International Cricket Stadium',
  'Sahara Hospital',
  'Lucknow Railway Station',
]

const defaultContact = {
  name: '',
  phone: '+91 73070 37497, +91 93366 06233',
  email: 'info@jivaspace.com',
  address: '',
  projectRera: '',
}

const toUpper = (value) => (value ? value.toUpperCase() : '')

const PropertyTemplate = ({ property = {} }) => {
  const name = property.name || 'Property'
  const nameParts = name.split(' ').filter(Boolean)
  const heroPrimary = toUpper(property.heroPrimary || nameParts[0] || name)
  const heroSecondary = toUpper(property.heroSecondary || nameParts.slice(1).join(' '))
  const heroHeadline = property.heroHeadline || defaultHero.headline
  const heroSubheadline = property.heroSubheadline || defaultHero.subheadline
  const startFrom = property.startFrom || defaultHero.startFrom
  const location = property.location || defaultHero.location
  const reraNumber = property.reraNumber || defaultHero.reraNumber
  const reraWebsite = property.reraWebsite || defaultHero.reraWebsite
  const displayName = property.displayName || name
  const logo = property.logo || null
  const heroAlt = property.heroAlt || `${displayName} elevation`
  const heroImage = property.heroImage || clientImage2
  const description =
    property.description ||
    'The Excella Group is an emerging real estate organization with a singular vision: to provide luxurious homes for the common man. We offer affordable apartments, flats, and properties for sale in various regions of Lucknow. Our commitment to delivering the best results in terms of plots, locations, and rates sets us apart. If you are looking to buy property in Lucknow, we have the solution. Our 2 BHK and 3 BHK flats come with modern facilities and amenities, ensuring a comfortable and upscale living experience.'
  const highlights = property.highlights || defaultHighlights
  const units = property.units || defaultUnits
  const amenities = property.amenities || defaultAmenities
  const floorPlans = property.floorPlans || defaultFloorPlans
  const galleryImages = property.galleryImages && property.galleryImages.length
    ? property.galleryImages
    : defaultGallery
  const nearbyPlaces = property.nearbyPlaces || defaultNearbyPlaces
  const contact = { ...defaultContact, ...(property.contact || {}) }

  const openEnquiry = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('open-enquiry'))
    }
  }

  return (
    <section className="section-spacing">
      <div className="section-container">
        <div className="overflow-hidden rounded-[34px] shadow-[0_30px_85px_-35px_rgba(221,101,0,0.52)]">
          <div className="grid lg:grid-cols-[1.05fr_1.35fr]">
            <div className="bg-gradient-to-br from-primary-500 via-primary-600 to-dark-100 p-6 text-white sm:p-8 lg:h-full">
              <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/85 backdrop-blur-md">
                Jiva Space Realty
              </div>

              <div className="mt-5 flex items-center gap-5">
                <div className="font-display text-3xl font-bold text-white sm:text-4xl">
                  {heroPrimary}
                </div>
                {heroSecondary ? (
                  <>
                    <span className="h-10 w-px bg-white/30" />
                    <div className="font-display text-2xl font-semibold text-white/78 sm:text-3xl">
                      {heroSecondary}
                    </div>
                  </>
                ) : null}
              </div>

              <div className="mt-6 space-y-2">
                <h1 className="font-display text-4xl font-bold text-white sm:text-5xl">
                  {heroHeadline}
                </h1>
                {heroSubheadline ? (
                  <h2 className="text-3xl font-bold text-white/82 sm:text-4xl">
                    {heroSubheadline}
                  </h2>
                ) : null}
              </div>

              <div className="mt-6 inline-block rounded-3xl border border-white/18 bg-white/12 px-6 py-4 text-white shadow-2xl backdrop-blur-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/75">Start From</p>
                <p className="mt-1 text-3xl font-bold">&#8377; {startFrom}</p>
              </div>

              <div className="mt-6 space-y-3 text-sm text-white/82 sm:text-base">
                <p className="font-medium">Location: {location}</p>
                <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-white/72">
                  <span className="rounded-full border border-white/18 bg-white/8 px-3 py-1.5">
                    {reraNumber}
                  </span>
                  <span className="rounded-full border border-white/18 bg-white/8 px-3 py-1.5">
                    {reraWebsite}
                  </span>
                </div>
              </div>
            </div>

            <div className="h-[250px] min-h-0 bg-gradient-to-br from-[#fff5ea] via-[#ffeed6] to-[#ffd4a0] p-3 sm:h-[320px] sm:p-4 lg:h-full">
              <div className="h-full w-full min-h-0 overflow-hidden rounded-[30px] border-[4px] border-white/70 bg-white shadow-[0_25px_60px_-28px_rgba(143,58,4,0.4)]">
                <img
                  src={heroImage}
                  alt={heroAlt}
                  className="h-full w-full object-cover object-center"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[2fr_1fr] lg:items-start">
          <div className="rounded-[30px] border border-primary-100/80 bg-white/95 p-8 shadow-[0_24px_70px_-42px_rgba(221,101,0,0.4)] backdrop-blur-sm">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-600">
                  Featured Property
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-4">
                  {logo ? (
                    <img
                      src={logo}
                      alt={`${displayName} logo`}
                      className="h-12 w-auto object-contain"
                      loading="lazy"
                    />
                  ) : null}
                  <h2 className="font-display text-2xl font-semibold text-neutral-900 sm:text-3xl">
                    {displayName}
                  </h2>
                </div>
                <div className="mt-3 flex items-center gap-2 text-sm text-neutral-700">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                      <path d="M12 2.5c-4.1 0-7.5 3.1-7.5 7 0 5.2 6.6 11.7 7.1 12.2.2.2.6.2.8 0 .5-.5 7.1-7 7.1-12.2 0-3.9-3.4-7-7.5-7zm0 9.7c-1.6 0-2.9-1.2-2.9-2.7S10.4 6.8 12 6.8s2.9 1.2 2.9 2.7S13.6 12.2 12 12.2z" />
                    </svg>
                  </span>
                  {location}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button type="button" onClick={openEnquiry} className="btn-primary px-8">
                  Booking Now
                </button>
              </div>
            </div>

            <hr className="my-8 border-primary-100/80" />

            <h3 className="mb-4 text-xl font-semibold text-neutral-900">Description</h3>
            <p className="text-sm leading-relaxed text-neutral-700 sm:text-base">
              {description}
            </p>

            <div className="mt-6">
              <p className="text-sm font-semibold text-neutral-900">Highlights:</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {highlights.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl bg-primary-50/60 px-3 py-3 text-sm text-neutral-800">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                        <path d="M9.5 16.2l-3.5-3.5a1 1 0 10-1.4 1.4l4.2 4.2a1 1 0 001.4 0l8.2-8.2a1 1 0 10-1.4-1.4l-7.5 7.5z" />
                      </svg>
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[30px] border border-primary-100/80 bg-gradient-to-b from-[#fffaf4] to-white p-8 shadow-[0_24px_70px_-42px_rgba(221,101,0,0.42)] lg:self-start">
            <div className="flex flex-wrap items-center gap-4">
              {logo ? (
                <img
                  src={logo}
                  alt={`${displayName} logo`}
                  className="h-12 w-auto object-contain"
                  loading="lazy"
                />
              ) : null}
              <h3 className="font-display text-2xl font-semibold text-neutral-900">
                {contact.name || displayName}
              </h3>
            </div>
            <div className="mt-4 space-y-3 text-sm text-neutral-700">
              <p><span className="font-semibold text-neutral-900">Call Us:</span> {contact.phone}</p>
              <p><span className="font-semibold text-neutral-900">Email:</span> {contact.email}</p>
              <p><span className="font-semibold text-neutral-900">Address:</span> {contact.address}</p>
            </div>

            <form
              className="mt-8 space-y-6"
              onSubmit={(event) => {
                event.preventDefault()
                openEnquiry()
              }}
            >
              <button type="submit" className="btn-primary w-full">Send Message</button>
            </form>
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[2fr_1fr] lg:items-start">
          <div className="rounded-[30px] border border-primary-100/80 bg-white/95 p-6 shadow-[0_24px_70px_-42px_rgba(221,101,0,0.4)] sm:p-8">
            <div className="grid gap-6 md:grid-cols-2">
              {units.map((unit) => (
                <div
                  key={unit.title}
                  className="rounded-[28px] bg-gradient-to-br from-dark-50 via-dark-100 to-primary-700 p-6 text-white shadow-[0_24px_55px_-30px_rgba(109,40,0,0.62)]"
                >
                  <h3 className="text-2xl font-semibold">{unit.title}</h3>
                  <p className="mt-2 text-sm text-white/80">{unit.area}</p>
                  <p className="text-sm text-white/80">{unit.price}</p>
                  <button
                    type="button"
                    onClick={openEnquiry}
                    className="mt-4 w-full rounded-full bg-white px-4 py-2 text-sm font-semibold text-primary-700 transition-transform hover:scale-[1.01]"
                  >
                    Enquire Now
                  </button>
                </div>
              ))}
            </div>

            <h3 className="mt-10 text-center text-lg font-semibold text-neutral-900">
              Our Amenities
            </h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {amenities.map((amenity) => {
                const label = typeof amenity === 'string' ? amenity : amenity.label
                const icon = typeof amenity === 'string'
                  ? amenityIconMap[label]
                  : amenity.icon || amenityIconMap[label]
                return (
                  <div
                    key={label}
                    className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-primary-100 bg-primary-50/50 px-4 py-5 text-center text-sm font-semibold text-neutral-800 shadow-sm"
                  >
                    {icon ? (
                      <img src={icon} alt="" className="h-8 w-8 opacity-80" aria-hidden="true" />
                    ) : (
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                        {fallbackAmenityIcon}
                      </span>
                    )}
                    <span>{label}</span>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="rounded-[30px] border border-primary-100/80 bg-white/95 p-6 shadow-[0_24px_70px_-42px_rgba(221,101,0,0.4)] sm:p-8 lg:self-start">
            <h3 className="text-lg font-semibold text-neutral-900">Floor Plans</h3>
            <div className="mt-4 space-y-3">
              {floorPlans.map((item) => (
                <button
                  key={item}
                  className="w-full rounded-xl border border-primary-100 bg-primary-50/55 px-4 py-3 text-left text-sm font-medium text-neutral-800 transition-colors hover:bg-primary-100/70"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-[30px] border border-primary-100/80 bg-white/95 p-6 shadow-[0_24px_70px_-42px_rgba(221,101,0,0.4)] sm:p-8">
          <h3 className="mb-4 text-lg font-semibold text-neutral-900">Our Gallery</h3>
          <GalleryCarousel images={galleryImages} altPrefix={displayName} compact />
        </div>

        <div className="mt-12 rounded-[30px] border border-primary-100/80 bg-white/95 p-6 shadow-[0_24px_70px_-42px_rgba(221,101,0,0.4)] sm:p-8">
          <h3 className="text-center font-display text-xl font-semibold text-neutral-900 sm:text-2xl">
            Near By Places
          </h3>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {nearbyPlaces.map((place) => (
              <div
                key={place}
                className="rounded-2xl bg-gradient-to-r from-primary-600 to-primary-500 px-6 py-4 text-center text-sm font-semibold text-white shadow-lg sm:text-base"
              >
                {place}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PropertyTemplate
