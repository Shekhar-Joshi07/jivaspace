// Amenities data
// This file contains all amenities information
// Easy for the client to add or remove amenities

export const amenities = [
  {
    id: 1,
    name: 'Swimming Pool',
    icon: 'pool',
    description: 'Temperature-controlled swimming pool with separate kids pool',
    category: 'sports',
  },
  {
    id: 2,
    name: 'Gym & Fitness Center',
    icon: 'gym',
    description: 'Fully equipped modern gym with latest equipment',
    category: 'fitness',
  },
  {
    id: 3,
    name: 'Children Play Area',
    icon: 'playground',
    description: 'Safe and colorful play area for kids',
    category: 'kids',
  },
  {
    id: 4,
    name: '24/7 Security',
    icon: 'security',
    description: 'Round-the-clock security with CCTV surveillance',
    category: 'safety',
  },
  {
    id: 5,
    name: 'Covered Parking',
    icon: 'parking',
    description: 'Ample covered parking space for residents',
    category: 'convenience',
  },
  {
    id: 6,
    name: 'Power Backup',
    icon: 'power',
    description: '100% power backup for all common areas and lifts',
    category: 'convenience',
  },
  {
    id: 7,
    name: 'Landscaped Gardens',
    icon: 'garden',
    description: 'Beautifully maintained gardens with walking paths',
    category: 'outdoor',
  },
  {
    id: 8,
    name: 'Club House',
    icon: 'club',
    description: 'Premium clubhouse with party hall and lounge',
    category: 'social',
  },
  {
    id: 9,
    name: 'Yoga & Meditation',
    icon: 'yoga',
    description: 'Dedicated space for yoga and meditation',
    category: 'fitness',
  },
  {
    id: 10,
    name: 'Indoor Games Room',
    icon: 'games',
    description: 'Indoor games room with table tennis, chess, and carrom',
    category: 'entertainment',
  },
  {
    id: 11,
    name: 'Jogging Track',
    icon: 'running',
    description: 'Well-maintained jogging and cycling track',
    category: 'fitness',
  },
  {
    id: 12,
    name: 'Community Hall',
    icon: 'community',
    description: 'Spacious community hall for events and gatherings',
    category: 'social',
  },
  {
    id: 13,
    name: 'Intercom Facility',
    icon: 'intercom',
    description: 'Video intercom facility in all apartments',
    category: 'safety',
  },
  {
    id: 14,
    name: 'Water Treatment Plant',
    icon: 'water',
    description: 'RO water treatment plant for pure drinking water',
    category: 'convenience',
  },
  {
    id: 15,
    name: 'Rainwater Harvesting',
    icon: 'rain',
    description: 'Eco-friendly rainwater harvesting system',
    category: 'eco',
  },
  {
    id: 16,
    name: 'Waste Management',
    icon: 'recycle',
    description: 'Modern waste management and disposal system',
    category: 'eco',
  },
]

// Amenities grouped by category for easier display
export const amenitiesByCategory = {
  fitness: amenities.filter(a => a.category === 'fitness'),
  sports: amenities.filter(a => a.category === 'sports'),
  safety: amenities.filter(a => a.category === 'safety'),
  convenience: amenities.filter(a => a.category === 'convenience'),
  social: amenities.filter(a => a.category === 'social'),
  outdoor: amenities.filter(a => a.category === 'outdoor'),
  entertainment: amenities.filter(a => a.category === 'entertainment'),
  kids: amenities.filter(a => a.category === 'kids'),
  eco: amenities.filter(a => a.category === 'eco'),
}
