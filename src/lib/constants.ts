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
  facebookUrl: 'https://www.facebook.com/profile.php?id=61595909326179',
  ogImage: '/images/logo-og.jpg',
  logo: '/images/logo.png',
  logoHero: '/images/logo.png',
  title: 'Septic Tank Siphoning in Trece Martires | Renz Malabanan',
  description:
    'Septic tank siphoning, sipsip pozo negro, declogging, and plumbing in Trece Martires, Cavite. Call 0997 932 0621.',
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
