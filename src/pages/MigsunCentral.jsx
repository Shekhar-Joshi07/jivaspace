import clientImage2 from '../assets/clients_assets/image.png'
import amenityClubhouse from '../assets/amenities/amenity-clubhouse.svg'
import amenityPower from '../assets/amenities/amenity-power.svg'
import amenitySecurity from '../assets/amenities/amenity-security.svg'
import amenityParking from '../assets/amenities/amenity-parking.svg'
import { propertyGalleryImages } from '../data/propertyGalleryImages'
import GalleryCarousel from '../components/property/GalleryCarousel'
import { propertyHeroImages } from '../data/propertyHeroImages'
import migsunLogo from '../assets/Logos/migsun.png'

const MigsunCentral = () => {
  const openEnquiry = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('open-enquiry'))
    }
  }
  const units = [
    { title: 'Retail Shops', area: 'Area: 300 - 800 sq.ft', price: 'Price: On Request' },
    { title: 'Office Spaces', area: 'Area: 500 - 1200 sq.ft', price: 'Price: On Request' },
  ]
  const amenityIconMap = {
    'Power Backup': amenityPower,
    'Escalators & Lifts': amenityPower,
    'CCTV Security': amenitySecurity,
    '24x7 Security': amenitySecurity,
    'Ample Parking': amenityParking,
    'Food Court': amenityClubhouse,
    'High Footfall Location': amenityClubhouse,
  }
  const amenityList = [
    'Escalators & Lifts',
    'Power Backup',
    'CCTV Security',
    'Ample Parking',
    'Food Court',
    'High Footfall Location',
    '24x7 Security',
  ]
  const highlights = [
    'Prime Commercial Hub',
    'Retail & Office Spaces',
    'High Footfall Location',
    'Modern Infrastructure Design',
  ]
  const amenities = amenityList.map((label) => ({
    label,
    icon: amenityIconMap[label] || null,
  }))
  const fallbackAmenityIcon = (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M12 2.5l2.4 4.8 5.3.8-3.8 3.7.9 5.3L12 14.7l-4.8 2.4.9-5.3-3.8-3.7 5.3-.8L12 2.5z" />
    </svg>
  )
  const galleryImages = propertyGalleryImages['migsun-central']?.length
    ? propertyGalleryImages['migsun-central']
    : [clientImage2, clientImage2, clientImage2, clientImage2, clientImage2, clientImage2]
  const heroImage = propertyHeroImages['migsun-central'] || clientImage2
  return (
    <section className="section-spacing">
      <div className="section-container">
        <div className="overflow-hidden rounded-3xl bg-neutral-100 shadow-2xl lg:h-[460px]">
          <div className="grid lg:h-full lg:grid-cols-[1.1fr_1.4fr]">
            <div className="bg-[#f4efe6] p-6 sm:p-8 lg:h-full">
              <div className="mt-4 flex items-center gap-5">
                <div className="text-3xl sm:text-4xl font-display font-bold text-primary-600">
                  MIGSUN
                </div>
                <span className="h-10 w-px bg-neutral-300" />
                <div className="text-2xl sm:text-3xl font-display font-semibold text-dark-500">
                  LUCKNOW CENTRAL
                </div>
              </div>

              <div className="mt-6 space-y-2">
                <h1 className="text-4xl sm:text-5xl font-display font-bold text-dark-500">
                  Retail Shops &amp; Office Spaces
                </h1>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#0c8b4c]">
                  COMMERCIAL
                </h2>
              </div>

              <div className="mt-6 inline-block rounded-2xl bg-gradient-to-r from-[#0c8b4c] to-[#0a6c8b] px-6 py-3 text-white shadow-lg">
                <p className="text-lg font-semibold">Start From</p>
                <p className="text-3xl font-bold">&#8377; 45 - 55 Lacs*</p>
              </div>

              <p className="mt-6 text-base font-semibold text-dark-500">
                Location: Shaheed Path, Near Lulu Mall, Lucknow
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#cfe7ff] to-[#eaf6ff] p-3 sm:p-4 h-[240px] sm:h-[280px] lg:h-full min-h-0">
              <div className="h-full w-full min-h-0 overflow-hidden rounded-[28px] border-[3px] border-primary-500/60 shadow-xl">
                <img
                  src={heroImage}
                  alt="Migsun Lucknow Central elevation"
                  className="h-full w-full object-cover object-center"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[2fr_1fr] lg:items-start">
          <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-xl">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-4">
                  <img
                    src={migsunLogo}
                    alt="Migsun Lucknow Central logo"
                    className="h-12 w-auto object-contain"
                    loading="lazy"
                  />
                  <h2 className="text-2xl sm:text-3xl font-display font-semibold text-dark-500">
                    Migsun Lucknow Central
                  </h2>
                </div>
                <div className="mt-2 flex items-center gap-2 text-sm text-dark-500">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 text-dark-500">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                      <path d="M12 2.5c-4.1 0-7.5 3.1-7.5 7 0 5.2 6.6 11.7 7.1 12.2.2.2.6.2.8 0 .5-.5 7.1-7 7.1-12.2 0-3.9-3.4-7-7.5-7zm0 9.7c-1.6 0-2.9-1.2-2.9-2.7S10.4 6.8 12 6.8s2.9 1.2 2.9 2.7S13.6 12.2 12 12.2z" />
                    </svg>
                  </span>
                  Shaheed Path, Near Lulu Mall, Lucknow
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button type="button" onClick={openEnquiry} className="btn-primary px-8">Booking Now</button>
                <button className="h-12 w-12 rounded-full border border-neutral-200 bg-white text-dark-500 shadow-sm hover:shadow-md">
                  <svg viewBox="0 0 24 24" className="mx-auto h-5 w-5" fill="currentColor" aria-hidden="true">
                    <path d="M12 3a1 1 0 011 1v8.6l2.2-2.2a1 1 0 011.4 1.4l-3.9 3.9a1 1 0 01-1.4 0l-3.9-3.9a1 1 0 011.4-1.4L11 12.6V4a1 1 0 011-1z" />
                    <path d="M5 19a1 1 0 011-1h12a1 1 0 011 1v1a1 1 0 01-1 1H6a1 1 0 01-1-1v-1z" />
                  </svg>
                </button>
              </div>
            </div>

            <hr className="my-8 border-neutral-200" />

            <h3 className="text-xl font-semibold text-dark-500 mb-4">Description</h3>
            <p className="text-sm sm:text-base text-dark-500 leading-relaxed">
              Migsun Lucknow Central is a premium commercial development offering retail shops and office spaces in a
              prime business location. Designed with modern architecture and high footfall potential, it provides
              excellent opportunities for investors and entrepreneurs. With superior connectivity and contemporary
              infrastructure, Migsun Lucknow Central is set to become a thriving commercial hub in Lucknow.
            </p>

            <div className="mt-6">
              <p className="text-sm font-semibold text-dark-500">Highlights:</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {highlights.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-dark-500">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 text-primary-600">
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

          <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-xl lg:self-start">
            <div className="flex flex-wrap items-center gap-4">
              <img
                src={migsunLogo}
                alt="Migsun Lucknow Central logo"
                className="h-12 w-auto object-contain"
                loading="lazy"
              />
              <h3 className="text-2xl font-display font-semibold text-dark-500">Migsun Lucknow Central</h3>
            </div>
            <div className="mt-4 space-y-2 text-sm text-dark-500">
              <p><span className="font-semibold text-dark-500">Call Us :</span> +91 73070 37497, +91 93366 06233</p>
              <p><span className="font-semibold text-dark-500">Email :</span> info@jivaspace.com</p>
            </div>

            <form
              className="mt-8 space-y-6"
              onSubmit={(event) => {
                event.preventDefault()
                openEnquiry()
              }}
            >
              <div>
                <label className="block text-sm text-dark-500 mb-2">Your Name</label>
                <input type="text" className="input-field" placeholder="Enter your name" />
              </div>
              <div>
                <label className="block text-sm text-dark-500 mb-2">Phone Number</label>
                <input type="tel" className="input-field" placeholder="Enter phone number" />
              </div>
              <div>
                <label className="block text-sm text-dark-500 mb-2">Your Email</label>
                <input type="email" className="input-field" placeholder="Enter email address" />
              </div>
              <button type="submit" className="btn-primary w-full">Send Message</button>
            </form>
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[2fr_1fr] lg:items-start">
          <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-xl">
            <div className="grid gap-6 md:grid-cols-2">
              {units.map((unit) => (
                <div
                  key={unit.title}
                  className="rounded-2xl bg-[#0f2f52] p-6 text-white shadow-lg"
                >
                  <h3 className="text-2xl font-semibold">{unit.title}</h3>
                  <p className="mt-2 text-sm text-white/80">{unit.area}</p>
                  <p className="text-sm text-white/80">{unit.price}</p>
                  <button type="button" onClick={openEnquiry} className="mt-4 w-full rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#0f2f52]">
                    Enquire Now
                  </button>
                </div>
              ))}
            </div>

            <h3 className="mt-10 text-center text-lg font-semibold text-dark-500">
              Our Amenities
            </h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {amenities.map((amenity) => (
                <div
                  key={amenity.label}
                  className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-5 text-center text-sm font-semibold text-dark-500 shadow-sm"
                >
                  {amenity.icon ? (
                    <img src={amenity.icon} alt="" className="h-8 w-8 opacity-80" aria-hidden="true" />
                  ) : (
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 text-primary-600">
                      {fallbackAmenityIcon}
                    </span>
                  )}
                  <span>{amenity.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-xl">
            <h3 className="text-lg font-semibold text-dark-500">Project Site Address</h3>
            <div className="mt-4 space-y-3 text-sm text-dark-500">
              <p>
                <span className="font-semibold text-dark-500">Address :</span> 
                 Lucknow
              </p>
              <p>
                <span className="font-semibold text-dark-500">Call Us :</span> +91 73070 37497, +91 93366 06233
              </p>
              <p>
                <span className="font-semibold text-dark-500">Project RERA :</span> UPRERAPRJ2629 (PH-1)
              </p>
            </div>
            <div className="mt-6 h-32 w-32 rounded-lg border border-neutral-200 bg-neutral-100" />
            <p className="mt-4 text-xs text-dark-500">
              Rera Website: https://www.up-rera.in/
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-xl">
            <h3 className="text-lg font-semibold text-dark-500">Floor Plans</h3>
            <div className="mt-4 space-y-3">
              {[
                'Retail Shop Plan (300 - 800 sq.ft)',
                'Office Space Plan (500 - 1200 sq.ft)',
                'Master Plan',
              ].map((item) => (
                <button
                  key={item}
                  className="w-full rounded-lg bg-neutral-50 px-4 py-3 text-left text-sm font-medium text-dark-500 hover:bg-neutral-100"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-xl">
            <h3 className="text-lg font-semibold text-dark-500 mb-4">Our Gallery</h3>
            <GalleryCarousel images={galleryImages} altPrefix="Migsun Central" compact />
          </div>
        </div>

        <div className="mt-12 rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-xl">
          <h3 className="text-xl sm:text-2xl font-display font-semibold text-center text-dark-500">
            Near By Places
          </h3>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              'Shaheed Path',
              'Lulu Mall',
              'Medanta Hospital',
              'Ekana Stadium',
              'IT City',
              'Airport',
            ].map((place) => (
              <div
                key={place}
                className="rounded-xl bg-[#0f2f52] px-6 py-4 text-center text-sm sm:text-base font-semibold text-white"
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

export default MigsunCentral





