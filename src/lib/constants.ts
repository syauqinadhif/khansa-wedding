export const WEDDING = {
  couple: {
    person1: { firstName: 'Khansa', lastName: 'Nabila Izzati, S.Si.' },
    person2: { firstName: 'Moch. Imam', lastName: 'Zarqoni, S.Kom' },
    monogram: 'K + I',
    monogramShort: 'K+I',
  },
  date: {
    full: 'April 5, 2026',
    display: 'APRIL 5, 2026',
    iso: '2026-04-05T08:00:00+07:00',
    day: 'Sunday',
  },
  rsvp: {
    deadline: '20th of March',
    deadlineDate: '2026-03-20',
  },
  ceremony: {
    venue: 'Islamic Center Bojonegoro',
    address: 'Jl. Panglima Polim No.45, Sumbang Kidul, Sumbang',
    city: 'Kec. Bojonegoro, Kabupaten Bojonegoro',
    time: '08.00 WIB',
    mapUrl: 'https://maps.google.com/?q=-7.16610498234112,111.8764428958938',
    coordinates: { lat: -7.16610498234112, lng: 111.8764428958938 },
  },
  reception: {
    venue: 'Islamic Center Bojonegoro',
    address: 'Jl. Panglima Polim No.45, Sumbang Kidul, Sumbang',
    city: 'Kec. Bojonegoro, Kabupaten Bojonegoro',
    time: '10.00 - 13.00 WIB',
    mapUrl: 'https://maps.google.com/?q=-7.16610498234112,111.8764428958938',
    coordinates: { lat: -7.16610498234112, lng: 111.8764428958938 },
  },
  entreeOptions: ['Fish', 'Chicken', 'Beef', 'Vegetarian'],
} as const

export const NAV_ITEMS = [
  { label: 'Start', href: '#hero' },
  { label: 'The Couple', href: '#couple' },
  { label: 'Itinerary', href: '#itinerary' },
  { label: 'Ceremony', href: '#ceremony' },
  { label: 'Our Story', href: '#story' },
  { label: 'Photos', href: '#photos' },
  { label: 'Map', href: '#map' },
  { label: 'RSVP', href: '#rsvp' },
] as const

export const TIMELINE = [
  { year: '2024', titleKey: 'story.2024.title', descKey: 'story.2024.desc' },
  { year: '2025', titleKey: 'story.2025a.title', descKey: 'story.2025a.desc' },
  { year: '2025', titleKey: 'story.2025b.title', descKey: 'story.2025b.desc' },
  { year: '2026', titleKey: 'story.2026.title', descKey: 'story.2026.desc' },
] as const

export const GALLERY_IMAGES = [
  { src: '/images/gallery/photo-1.jpg', alt: 'Khansa & Izar - intimate moment' },
  { src: '/images/gallery/photo-2.jpg', alt: 'Khansa & Izar - joyful laughter' },
  { src: '/images/gallery/photo-3.jpg', alt: 'Khansa & Izar - showing rings' },
  { src: '/images/gallery/photo-4.jpg', alt: 'Khansa & Izar - seated together' },
  { src: '/images/gallery/photo-5.jpg', alt: 'Khansa & Izar - elegant pose' },
  { src: '/images/gallery/photo-6.jpg', alt: 'Khansa & Izar - romantic bouquet' },
] as const
