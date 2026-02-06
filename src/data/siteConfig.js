// Site-wide configuration
// This file contains global settings for the website
// Easy for the client to update contact information and social links

export const siteConfig = {
  // Company Information
  company: {
    name: 'JivaSpace',
    tagline: 'Your Dream Home Awaits',
    description: 'Premium real estate solutions for luxury living',
  },

  // Contact Information
  contact: {
    phone: '+91 98765 43210',
    phoneDisplay: '+91 987-654-3210',
    email: 'info@jivaspace.com',
    address: 'Office No. 123, Commercial Tower, Lucknow - 226001',
    whatsapp: '+919876543210', // Without + or spaces for wa.me link
  },

  // Social Media Links
  social: {
    facebook: 'https://facebook.com/jivaspace',
    instagram: 'https://instagram.com/jivaspace',
    linkedin: 'https://linkedin.com/company/jivaspace',
    twitter: 'https://twitter.com/jivaspace',
    youtube: 'https://youtube.com/@jivaspace',
  },

  // Business Hours
  hours: {
    weekdays: '9:00 AM - 6:00 PM',
    saturday: '10:00 AM - 4:00 PM',
    sunday: 'Closed',
  },

  // RERA Information
  rera: {
    number: 'UPRERAPRJ1234567',
    link: 'https://up-rera.in/projects/...',
    qrCode: '/images/rera-qr.png',
  },

  // SEO Settings
  seo: {
    title: 'JivaSpace - Premium Properties in Lucknow',
    description: 'Discover luxury living with JivaSpace. Premium 2BHK, 3BHK, and 4BHK apartments with world-class amenities.',
    keywords: 'real estate, luxury apartments, 2BHK, 3BHK, 4BHK, Lucknow properties, JivaSpace',
    ogImage: '/images/og-image.jpg',
  },
}
