export const WEDDING = {
  couple: {
    person1: { firstName: 'Khansa', lastName: '' },
    person2: { firstName: 'Izzar', lastName: '' },
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
  { label: 'Itinerary', href: '#itinerary' },
  { label: 'Ceremony', href: '#ceremony' },
  { label: 'RSVP', href: '#rsvp' },
  { label: 'Our Story', href: '#story' },
  { label: 'Photos', href: '#photos' },
  { label: 'Map', href: '#map' },
] as const

export const TIMELINE = [
  { year: '2019', title: 'First Met', description: "At a friend's dinner party in downtown Manhattan." },
  { year: '2020', title: 'First Date', description: 'Coffee turned into dinner, then a walk along the river.' },
  { year: '2023', title: 'The Proposal', description: 'Under the cherry blossoms in Central Park.' },
  { year: '2026', title: 'The Wedding', description: 'April 5 — The beginning of forever.' },
] as const

export const GALLERY_IMAGES = [
  { src: '/images/gallery/photo-1.jpg', alt: 'Khansa & Izzar - intimate moment' },
  { src: '/images/gallery/photo-2.jpg', alt: 'Khansa & Izzar - joyful laughter' },
  { src: '/images/gallery/photo-3.jpg', alt: 'Khansa & Izzar - showing rings' },
  { src: '/images/gallery/photo-4.jpg', alt: 'Khansa & Izzar - seated together' },
  { src: '/images/gallery/photo-5.jpg', alt: 'Khansa & Izzar - elegant pose' },
  { src: '/images/gallery/photo-6.jpg', alt: 'Khansa & Izzar - romantic bouquet' },
] as const
