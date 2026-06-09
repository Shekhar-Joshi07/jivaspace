import { Link } from 'react-router-dom'
import logo from '../../assets/branding/jivaspaceupdatedlogo.png'
import { siteConfig } from '@/data/siteConfig'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const openPropertiesMenu = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('open-properties-menu'))
    }
  }

  const quickLinks = [
    { label: 'Home', href: '/#home' },
    { label: 'About', href: '/about' },
    { label: 'Properties', href: '/properties' },
    { label: 'Amenities', href: '/amenities' },
    { label: 'Gallery', href: '/gallery' },
  ]

  const socialLinks = [
    {
      label: 'Instagram',
      href: `https://www.instagram.com/jivaspacerealty?igsh=MTRuajZ5aHBzcDQzbw%3D%3D&utm_source=qr`,
      icon: (
        <svg className="social-card__svg" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 8.4a3.6 3.6 0 1 0 0 7.2 3.6 3.6 0 0 0 0-7.2zm0 5.9a2.3 2.3 0 1 1 0-4.6 2.3 2.3 0 0 1 0 4.6zM16.9 6.9a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8z" />
          <path d="M16.6 3H7.4A4.4 4.4 0 0 0 3 7.4v9.2A4.4 4.4 0 0 0 7.4 21h9.2a4.4 4.4 0 0 0 4.4-4.4V7.4A4.4 4.4 0 0 0 16.6 3zm2.1 13.6a2.1 2.1 0 0 1-2.1 2.1H7.4a2.1 2.1 0 0 1-2.1-2.1V7.4a2.1 2.1 0 0 1 2.1-2.1h9.2a2.1 2.1 0 0 1 2.1 2.1v9.2z" />
        </svg>
      ),
    },
    {
      label: 'Facebook',
      href: siteConfig.social.facebook,
      icon: (
        <svg className="social-card__svg" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M22 12.1C22 6.5 17.5 2 11.9 2 6.4 2 2 6.5 2 12.1c0 5 3.6 9.1 8.3 9.9v-7H7.8v-2.9h2.5V9.4c0-2.5 1.5-3.9 3.7-3.9 1.1 0 2.3.2 2.3.2v2.6h-1.3c-1.2 0-1.6.8-1.6 1.5v1.8h2.8l-.4 2.9h-2.4v7c4.7-.8 8.3-4.9 8.3-9.9z" />
        </svg>
      ),
    },
    {
      label: 'LinkedIn',
      href: siteConfig.social.linkedin,
      icon: (
        <svg className="social-card__svg" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM3.5 9h3v11h-3zM9 9h2.9v1.5h.1c.4-.8 1.4-1.7 3-1.7 3.2 0 3.8 2.1 3.8 4.9v7.3h-3v-6.4c0-1.5 0-3.4-2.1-3.4-2.1 0-2.4 1.6-2.4 3.3v6.5H9z" />
        </svg>
      ),
    },
  ]

  return (
    <footer className="relative mt-20 overflow-hidden border-t border-primary-200/20 bg-gradient-to-br from-dark-50 via-dark-100 to-primary-700 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,248,242,0.12),_transparent_35%)]" />
      <div className="pointer-events-none absolute -right-20 top-12 h-72 w-72 rounded-full bg-white/8 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-12 h-80 w-80 rounded-full bg-primary-300/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center space-x-3">
              <img src={logo} alt="Jiva Space Realty logo" className="h-20 w-auto rounded-2xl object-contain shadow-lg" />
            </div>
            <p className="mb-6 max-w-md text-white/78">
              {siteConfig.company.description}. {siteConfig.company.tagline}.
            </p>
            <div className="social-card" aria-label="Social media">
              <div className="social-card__background" />
              <div className="social-card__logo">
                <span>Follow Us</span>
              </div>
              {socialLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`social-card__box social-card__box--${index + 1}`}
                  aria-label={link.label}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="social-card__icon">{link.icon}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-6 font-semibold text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  {link.href === '/properties' ? (
                    <button
                      type="button"
                      onClick={openPropertiesMenu}
                      className="text-sm text-white/75 transition-colors hover:text-white"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-sm text-white/75 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-semibold text-white">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="text-white/75">
                <span className="block font-medium text-white">Location</span>
                {siteConfig.contact.address}
              </li>
              <li className="text-white/75">
                <span className="block font-medium text-white">Phone</span>
                {siteConfig.contact.phoneDisplay}
              </li>
              <li className="text-white/75">
                <span className="block font-medium text-white">Email</span>
                {siteConfig.contact.email}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/12 pt-8 md:flex-row">
          <p className="text-sm text-white/68">
            © {currentYear} Jiva Space Realty. All rights reserved.
          </p>
          <div className="mt-4 flex items-center space-x-6 md:mt-0">
            <a href="#" className="text-sm text-white/68 transition-colors hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-white/68 transition-colors hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
