import { faqs } from '../data/faqs.ts'
import { services } from '../data/services.ts'
import { absoluteUrl, SITE } from './constants.ts'

export function buildJsonLd() {
  const businessId = `${absoluteUrl('/')}#business`
  const websiteId = `${absoluteUrl('/')}#website`
  const logoId = `${absoluteUrl('/')}#logo`

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: absoluteUrl(SITE.canonical),
        name: SITE.name,
        description: SITE.description,
        inLanguage: 'en-PH',
        publisher: { '@id': businessId },
      },
      {
        '@type': ['LocalBusiness', 'Plumber'],
        '@id': businessId,
        name: SITE.name,
        alternateName: SITE.shortName,
        url: absoluteUrl(SITE.canonical),
        telephone: SITE.phoneTel,
        email: SITE.email,
        image: absoluteUrl(SITE.ogImage),
        logo: { '@id': logoId },
        description: SITE.description,
        currenciesAccepted: 'PHP',
        hasMap: SITE.mapLink,
        geo: {
          '@type': 'GeoCoordinates',
          latitude: SITE.latitude,
          longitude: SITE.longitude,
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Golden Horizon, Hugo Perez',
          addressLocality: 'Trece Martires',
          postalCode: '4109',
          addressCountry: 'PH',
        },
        sameAs: [SITE.facebookUrl],
        areaServed: [
          { '@type': 'City', name: 'Trece Martires' },
          { '@type': 'AdministrativeArea', name: 'Cavite' },
        ],
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: SITE.phoneTel,
            email: SITE.email,
            contactType: 'customer service',
            availableLanguage: ['English', 'Filipino'],
          },
        ],
        knowsAbout: services.map((service) => service.title),
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Renz Malabanan Siphoning services',
          itemListElement: services.map((service) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: service.title,
              description: service.description,
            },
          })),
        },
      },
      {
        '@type': 'ImageObject',
        '@id': logoId,
        url: absoluteUrl(SITE.logo),
        contentUrl: absoluteUrl(SITE.logo),
        caption: SITE.name,
      },
      ...services.map((service) => ({
        '@type': 'Service',
        name: service.title,
        description: service.description,
        provider: { '@id': businessId },
        areaServed: [
          { '@type': 'City', name: 'Trece Martires' },
          { '@type': 'AdministrativeArea', name: 'Cavite' },
        ],
        serviceType: service.title,
      })),
      {
        '@type': 'FAQPage',
        '@id': `${absoluteUrl('/')}#faq`,
        mainEntity: faqs.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: absoluteUrl(SITE.canonical),
          },
        ],
      },
    ],
  }
}
