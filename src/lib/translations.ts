export type Lang = 'en' | 'id'

const translations = {
  // Nav
  'nav.start': { en: 'Start', id: 'Mulai' },
  'nav.couple': { en: 'The Couple', id: 'Mempelai' },
  'nav.itinerary': { en: 'Itinerary', id: 'Rangkaian' },
  'nav.ceremony': { en: 'Ceremony', id: 'Akad' },
  'nav.rsvp': { en: 'RSVP', id: 'RSVP' },
  'nav.story': { en: 'Our Story', id: 'Kisah Kami' },
  'nav.photos': { en: 'Photos', id: 'Galeri' },
  'nav.map': { en: 'Map', id: 'Peta' },

  // Hero
  'hero.date': { en: 'Sunday, April 5, 2026', id: 'Minggu, 5 April 2026' },

  // Couple
  'couple.bride.name': { en: 'Khansa Nabila Izzati, S.Si.', id: 'Khansa Nabila Izzati, S.Si.' },
  'couple.bride.parents': {
    en: 'Daughter of Mr. Moch. Ali Abdul Fatah & Mrs. Sri Purwianti',
    id: 'Putri Bapak Moch. Ali Abdul Fatah & Ibu Sri Purwianti',
  },
  'couple.groom.name': { en: 'Moch. Imam Zarqoni, S.Kom', id: 'Moch. Imam Zarqoni, S.Kom' },
  'couple.groom.parents': {
    en: 'Son of Mr. Muthohar Amin (late) & Mrs. Fatwiyatun (late)',
    id: 'Putra Bapak Muthohar Amin (Alm) & Ibu Fatwiyatun (Almh)',
  },

  // Countdown
  'countdown.script': { en: 'counting down', id: 'menghitung hari' },
  'countdown.days': { en: 'Days', id: 'Hari' },
  'countdown.hours': { en: 'Hours', id: 'Jam' },
  'countdown.minutes': { en: 'Minutes', id: 'Menit' },
  'countdown.seconds': { en: 'Seconds', id: 'Detik' },
  'countdown.today': { en: 'Today is the day!', id: 'Hari ini adalah harinya!' },

  // Itinerary
  'itinerary.script': { en: 'all about our', id: 'tentang' },
  'itinerary.heading1': { en: 'Wedding', id: 'Pernikahan' },
  'itinerary.heading2': { en: 'Itinerary', id: 'Kami' },
  'itinerary.body': {
    en: 'Here you may find all basic informations about the event.',
    id: 'Temukan semua informasi dasar mengenai acara kami.',
  },

  // Ceremony
  'ceremony.title': { en: 'Ceremony', id: 'Akad Nikah' },
  'reception.title': { en: 'Reception', id: 'Resepsi' },

  // RSVP
  'rsvp.script': { en: 'join us!', id: 'hadirilah!' },
  'rsvp.deadline': { en: 'Please reply by 20th of March.', id: 'Mohon konfirmasi sebelum 20 Maret.' },
  'rsvp.reply': { en: 'Reply Now', id: 'Konfirmasi' },
  'rsvp.form.name': { en: 'Name', id: 'Nama' },
  'rsvp.form.namePlaceholder': { en: 'Enter guest name', id: 'Masukkan nama tamu' },
  'rsvp.form.nameError': { en: 'Please enter your name', id: 'Mohon masukkan nama Anda' },
  'rsvp.form.attending': { en: 'Will you join us?', id: 'Apakah Anda akan hadir?' },
  'rsvp.form.accepts': { en: 'Joyfully Accepts', id: 'Dengan senang hati hadir' },
  'rsvp.form.declines': { en: 'Regretfully Declines', id: 'Maaf tidak bisa hadir' },
  'rsvp.form.totalGuests': { en: 'Total attending', id: 'Jumlah tamu' },
  'rsvp.form.wishes': { en: 'Your wish for us', id: 'Doa & ucapan untuk kami' },
  'rsvp.form.wishesPlaceholder': {
    en: 'Write your warm wishes for the couple...',
    id: 'Tuliskan doa dan ucapan untuk kedua mempelai...',
  },
  'rsvp.form.submit': { en: 'Submit', id: 'Kirim' },
  'rsvp.form.sending': { en: 'Sending...', id: 'Mengirim...' },
  'rsvp.form.error': { en: 'Something went wrong. Please try again.', id: 'Terjadi kesalahan. Silakan coba lagi.' },
  'rsvp.form.thankyou': { en: 'Thank You', id: 'Terima Kasih' },
  'rsvp.form.thankyouMsg': {
    en: 'Your response has been recorded. We look forward to celebrating with you!',
    id: 'Konfirmasi Anda telah kami terima. Kami menantikan kehadiran Anda!',
  },

  // Story
  'story.script': { en: 'our', id: 'kisah' },
  'story.heading': { en: 'Stories', id: 'Kami' },
  'story.2024.title': { en: 'First Met', id: 'Pertama Bertemu' },
  'story.2024.desc': {
    en: 'We met unexpectedly during a quiet moment of togetherness. What started as a simple introduction became the beginning of our story.',
    id: 'Kami bertemu tanpa disangka di momen kebersamaan yang tenang. Yang dimulai dari perkenalan sederhana menjadi awal kisah kami.',
  },
  'story.2025a.title': { en: 'First Date', id: 'Kencan Pertama' },
  'story.2025a.desc': {
    en: 'After months of talking and getting to know each other, we finally had our first date at our favorite restaurant—simple, comfortable, and full of warmth.',
    id: 'Setelah berbulan-bulan saling mengenal, kami akhirnya berkencan pertama kali di restoran favorit kami—sederhana, nyaman, dan penuh kehangatan.',
  },
  'story.2025b.title': { en: 'The Proposal', id: 'Lamaran' },
  'story.2025b.desc': {
    en: 'September 20 — He came to my family with a sincere intention to take the next step. We celebrated an intimate engagement, surrounded by those closest to us.',
    id: '20 September — Dia datang ke keluarga kami dengan niat tulus untuk melangkah ke jenjang berikutnya. Kami merayakan pertunangan yang intim, dikelilingi orang-orang terdekat.',
  },
  'story.2026.title': { en: 'The Wedding', id: 'Pernikahan' },
  'story.2026.desc': {
    en: 'April 5 — The beginning of our forever.',
    id: '5 April — Awal dari selamanya kami.',
  },

  // Gallery
  'gallery.script': { en: 'our', id: 'foto' },
  'gallery.heading': { en: 'Photos', id: 'Kami' },
  'gallery.subtitle': { en: 'Our photo gallery', id: 'Galeri foto kami' },

  // Map
  'map.script': { en: 'find', id: 'temukan' },
  'map.heading': { en: 'On Map', id: 'Lokasi' },
  'map.directions': { en: 'Get Directions', id: 'Petunjuk Arah' },

  // Footer
  'footer.made': { en: 'Made with love', id: 'Dibuat dengan cinta' },

  // Loading
  'loading.wedding': { en: 'The Wedding of', id: 'Pernikahan' },
  'loading.date': { en: 'Sunday, April 5, 2026', id: 'Minggu, 5 April 2026' },
  'loading.open': { en: 'Open Invitation', id: 'Buka Undangan' },

  // Music
  'music.play': { en: 'Play', id: 'Putar' },
  'music.pause': { en: 'Pause', id: 'Jeda' },
} as const

export type TranslationKey = keyof typeof translations

export function t(key: TranslationKey, lang: Lang): string {
  return translations[key][lang]
}

export default translations
