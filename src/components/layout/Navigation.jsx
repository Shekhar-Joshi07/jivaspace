
import { scrollToElement } from '@/lib/utils'

const Navigation = () => {
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Amenities', href: '#amenities' },
    { label: 'Floor Plans', href: '#floor-plans' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Location', href: '#location' },
    { label: 'Contact', href: '#contact' },
  ]

  const handleClick = (e, href) => {
    e.preventDefault()
    const elementId = href.replace('#', '')
    scrollToElement(elementId)
  }

  return (
    <nav>
      <ul className="flex items-center space-x-8">
        {navItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className="text-neutral-700 hover:text-primary-500 font-medium transition-colors duration-200 relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300" />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
