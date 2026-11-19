export const SITE = {
  name: 'Renz Malabanan Siphoning',
  shortName: 'Renz Malabanan',
  tagline: 'Siphoning',
  /** Public origin once a domain exists, for example https://example.com. Leave blank until then. */
  url: '',
  canonical: '/',
  email: 'renzmalabananservices@gmail.com',
  phoneDisplay: '0997 932 0621',
  phoneTel: '+639979320621',
  whatsapp: '639979320621',
  locationName: 'Cavite Malabanan Septic Tank Services Siphoning and Declogging Expert',
  locationArea: 'Trece Martires',
  locationAddress: 'Golden Horizon, Hugo Perez, Trece Martires, Philippines, 4109',
  facebookUrl: 'https://www.facebook.com/profile.php?id=61595909326179',
  latitude: 14.2547055,
  longitude: 120.8968813,
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3866.974570177444!2d120.89688129999999!3d14.2547055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd7f9a0eaff17d%3A0x30d1c5095c6de212!2sCAVITE%20MALABANAN%20SEPTIC%20TANK%20SERVICES%20SIPHONING%20AND%20DECLOGGING%20EXPERT!5e0!3m2!1sen!2sph!4v1795087956486!5m2!1sen!2sph',
  mapLink: 'https://www.google.com/maps/search/?api=1&query=14.2547055%2C120.8968813',
  ogImage: '/images/logo-og.jpg',
  logo: '/images/logo.png',
  logoHero: '/images/logo.png',
  title: 'Septic Tank Siphoning in Trece Martires | Renz Malabanan',
  description:
    'Septic tank siphoning, sipsip pozo negro, declogging, and plumbing in Trece Martires, Cavite. Based at Golden Horizon, Hugo Perez. Call 0997 932 0621.',
} as const

export const WHATSAPP_HELLO = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
  `Hello ${SITE.name}, I would like to ask about your service.`,
)}`

export const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#why-us', label: 'Why Us' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
] as const

export const FOOTER_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
] as const

export const SERVICE_OPTIONS = [
  'Septic Tank Siphoning',
  'Declogging',
  'Plumbing',
  'Grease Trap Cleaning',
  'STP Cleaning',
  'Septic Tank Construction',
  'Other',
] as const

export const PRICING_NOTE =
  'Final pricing depends on location, type of service, accessibility, severity of blockage, septic tank size, required equipment, amount of waste, and scope of work.'

export function absoluteUrl(path: string) {
  if (!SITE.url) return path
  return `${SITE.url}${path.startsWith('/') ? path : `/${path}`}`
}
