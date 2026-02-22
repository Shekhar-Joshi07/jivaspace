import { Link } from 'react-router-dom'
import logo from '../../assets/jivaSpace_Nav_Logo.png'
import { siteConfig } from '@/data/siteConfig'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: 'Home', href: '/#home' },
    { label: 'About', href: '/about' },
    { label: 'Properties', href: '/properties' },
    { label: 'Amenities', href: '/amenities' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact', href: '/contact' },
  ]
  const socialLinks = [
    {
      label: 'Instagram',
      href: siteConfig.social.instagram,
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
    // {
    //   label: 'YouTube',
    //   href: siteConfig.social.youtube,
    //   icon: (
    //     <svg className="social-card__svg" viewBox="0 0 24 24" aria-hidden="true">
    //       <path d="M21.6 7.2a2.7 2.7 0 0 0-1.9-1.9C18 4.9 12 4.9 12 4.9s-6 0-7.7.4a2.7 2.7 0 0 0-1.9 1.9A28 28 0 0 0 2 12a28 28 0 0 0 .4 4.8 2.7 2.7 0 0 0 1.9 1.9c1.7.4 7.7.4 7.7.4s6 0 7.7-.4a2.7 2.7 0 0 0 1.9-1.9A28 28 0 0 0 22 12a28 28 0 0 0-.4-4.8zM10.2 15.2V8.8l5.4 3.2-5.4 3.2z" />
    //     </svg>
    //   ),
    // },
  ]

  return (
    <footer className="relative border-t border-dark-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img src={logo} alt="JivaSpace Logo" className="h-12 w-auto object-contain rounded-lg" />
            </div>
            <p className="text-dark-600 mb-6 max-w-md">
              Leading the future of real estate with innovation, quality, and customer-first approach.
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

          {/* Quick Links */}
          <div>
            <h4 className="text-dark-900 font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-dark-600 hover:text-primary-500 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-dark-900 font-semibold mb-6">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="text-dark-600">
                <span className="block font-medium text-dark-800">Location</span>
                Sushant Golf City, Lucknow
              </li>
              <li className="text-dark-600">
                <span className="block font-medium text-dark-800">Phone</span>
                +91 000-000-0000
              </li>
              <li className="text-dark-600">
                <span className="block font-medium text-dark-800">Email</span>
                info@jivaspace.com
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-dark-200 flex flex-col md:flex-row items-center justify-between">
          <p className="text-dark-600 text-sm">
            © {currentYear} JivaSpace Realty. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-dark-600 hover:text-primary-500 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-dark-600 hover:text-primary-500 text-sm transition-colors">
              Terms of Service
            </a>
            <span className="text-dark-600 text-sm">
              RERA: UPRERAxxxxxxxxxx
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
