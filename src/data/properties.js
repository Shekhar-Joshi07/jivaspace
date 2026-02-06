// Property data
// This file contains all property information
// Easy for the client to update details, prices, and specifications

export const property = {
  id: 'rishita-mulberry-heights',
  name: 'Rishita Mulberry Heights',
  tagline: 'Luxury Living in the Heart of the City',
  description: 'Experience the epitome of modern living at Rishita Mulberry Heights. Nestled in the prime location of Sushant Golf City, this luxurious residential project offers spacious apartments with world-class amenities and stunning architecture.',

  // Pricing Information
  price: {
    starting: '₹45 Lakhs',
    range: '₹45L - ₹85L',
    note: '*Prices subject to change. Contact for current pricing.',
  },

  // Location Details
  location: {
    address: 'Sushant Golf City, Lucknow, Uttar Pradesh',
    landmark: 'Near Phoenix Palassio Mall',
    city: 'Lucknow',
    state: 'Uttar Pradesh',
    pincode: '226030',
    mapLink: 'https://maps.google.com/?q=Sushant+Golf+City+Lucknow',
  },

  // Property Highlights
  highlights: [
    'Prime location in Sushant Golf City',
    'RERA approved project',
    '24/7 security with CCTV surveillance',
    'World-class amenities',
    'Spacious apartments with modern design',
    'Excellent connectivity to major landmarks',
    'Green & eco-friendly environment',
    'Ready to move / Under construction units available',
  ],

  // Property Specifications
  specifications: [
    {
      id: '2bhk',
      type: '2 BHK',
      area: '1050 sq.ft',
      carpet: '850 sq.ft',
      price: '₹45 Lakhs',
      bedrooms: 2,
      bathrooms: 2,
      balconies: 1,
      floorPlan: '/images/floor-plans/2bhk.jpg',
      features: [
        'Master bedroom with attached bathroom',
        'Spacious living and dining area',
        'Modular kitchen with chimney',
        'Large balcony with beautiful views',
        'Ample storage space',
      ],
    },
    {
      id: '3bhk',
      type: '3 BHK',
      area: '1450 sq.ft',
      carpet: '1150 sq.ft',
      price: '₹65 Lakhs',
      bedrooms: 3,
      bathrooms: 3,
      balconies: 2,
      floorPlan: '/images/floor-plans/3bhk.jpg',
      features: [
        'Master bedroom with attached bathroom and walk-in closet',
        'Two additional bedrooms with attached bathrooms',
        'Spacious living and dining area',
        'Premium modular kitchen',
        'Two balconies',
        'Servant room with separate entrance',
      ],
    },
    {
      id: '4bhk',
      type: '4 BHK',
      area: '1850 sq.ft',
      carpet: '1500 sq.ft',
      price: '₹85 Lakhs',
      bedrooms: 4,
      bathrooms: 4,
      balconies: 3,
      floorPlan: '/images/floor-plans/4bhk.jpg',
      features: [
        'Luxurious master bedroom with attached bathroom',
        'Three additional bedrooms with attached bathrooms',
        'Grand living and dining area',
        'Premium modular kitchen with utility area',
        'Three spacious balconies',
        'Servant room with separate entrance',
        'Study room',
      ],
    },
  ],

  // Construction & Development Details
  development: {
    builder: 'Rishita Builders',
    launchDate: 'January 2023',
    possessionDate: 'December 2025',
    projectStatus: 'Under Construction',
    totalTowers: 4,
    totalUnits: 240,
    totalAcres: 5.5,
  },

  // Gallery Images
  gallery: [
    {
      id: 1,
      url: '/images/properties/exterior-front.jpg',
      alt: 'Rishita Mulberry Heights Exterior View',
      category: 'exterior',
    },
    {
      id: 2,
      url: '/images/properties/lobby.jpg',
      alt: 'Grand Lobby with Modern Design',
      category: 'interior',
    },
    {
      id: 3,
      url: '/images/properties/swimming-pool.jpg',
      alt: 'Luxurious Swimming Pool',
      category: 'amenities',
    },
    {
      id: 4,
      url: '/images/properties/gym.jpg',
      alt: 'State-of-the-art Gym Facility',
      category: 'amenities',
    },
    {
      id: 5,
      url: '/images/properties/garden.jpg',
      alt: 'Landscaped Garden',
      category: 'outdoor',
    },
    {
      id: 6,
      url: '/images/properties/clubhouse.jpg',
      alt: 'Premium Clubhouse',
      category: 'amenities',
    },
    {
      id: 7,
      url: '/images/properties/sample-flat.jpg',
      alt: 'Sample Apartment Interior',
      category: 'interior',
    },
    {
      id: 8,
      url: '/images/properties/kids-play-area.jpg',
      alt: "Children's Play Area",
      category: 'outdoor',
    },
  ],

  // Nearby Places
  nearbyPlaces: [
    {
      id: 1,
      name: 'Phoenix Palassio Mall',
      distance: '2 km',
      time: '5 min',
      type: 'shopping',
      icon: 'shopping',
    },
    {
      id: 2,
      name: 'Apollo Hospital',
      distance: '3 km',
      time: '7 min',
      type: 'hospital',
      icon: 'hospital',
    },
    {
      id: 3,
      name: 'DPS School',
      distance: '1.5 km',
      time: '4 min',
      type: 'school',
      icon: 'school',
    },
    {
      id: 4,
      name: 'Metro Station',
      distance: '1 km',
      time: '3 min',
      type: 'transport',
      icon: 'metro',
    },
    {
      id: 5,
      name: 'Sahara Ganj Mall',
      distance: '4 km',
      time: '10 min',
      type: 'shopping',
      icon: 'shopping',
    },
    {
      id: 6,
      name: 'International Airport',
      distance: '15 km',
      time: '25 min',
      type: 'transport',
      icon: 'airport',
    },
    {
      id: 7,
      name: 'IT Park',
      distance: '5 km',
      time: '12 min',
      type: 'office',
      icon: 'office',
    },
    {
      id: 8,
      name: 'Fun Republic Mall',
      distance: '3.5 km',
      time: '8 min',
      type: 'entertainment',
      icon: 'entertainment',
    },
  ],

  // RERA Compliance
  rera: {
    number: 'UPRERAPRJ1234567',
    link: 'https://up-rera.in/projects/...',
    website: 'https://up-rera.in',
    status: 'Registered',
    validTill: '31 December 2025',
  },

  // Documents Available
  documents: {
    brochure: '/documents/rishita-mulberry-brochure.pdf',
    floorPlans: '/documents/floor-plans.pdf',
    specifications: '/documents/specifications.pdf',
  },
}
