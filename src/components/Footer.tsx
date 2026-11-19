import { FOOTER_LINKS, SITE } from '../lib/constants'
import { services } from '../data/services'

export function Footer() {
  return (
    <footer className="bg-deep pb-28 pt-14 text-sky-50 lg:pb-10">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 md:grid-cols-4 md:gap-10">
        <div className="md:col-span-1">
          <img
            src={SITE.logo}
            alt=""
            width={819}
            height={545}
            loading="lazy"
            decoding="async"
            className="mb-3 h-24 w-auto rounded-2xl bg-white p-1"
          />
          <p className="text-base font-extrabold text-white sm:text-lg">{SITE.name}</p>
          <p className="mt-3 text-sm leading-relaxed text-pretty">
            The same Malabanan service for septic tank siphoning, declogging, drainage, plumbing, grease trap, STP
            cleaning, and septic tank construction.
          </p>
        </div>
        <div>
          <p className="text-sm font-extrabold uppercase tracking-wider text-sun">Contact</p>
        <address className="mt-3 not-italic">
          <a className="block font-bold text-white hover:underline" href={`tel:${SITE.phoneTel}`}>
            {SITE.phoneDisplay}
          </a>
          <a className="mt-2 block break-all text-sm hover:underline" href={`mailto:${SITE.email}`}>
            {SITE.email}
          </a>
          <a className="mt-2 block text-sm hover:underline" href={SITE.facebookUrl} target="_blank" rel="noreferrer">
            Facebook
          </a>
        </address>
        </div>
        <div>
          <p className="text-sm font-extrabold uppercase tracking-wider text-sun">Quick Links</p>
          <ul className="mt-3 space-y-2 text-sm">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <a className="hover:text-white hover:underline" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-extrabold uppercase tracking-wider text-sun">Services</p>
          <ul className="mt-3 space-y-2 text-sm">
            {services.map((service) => (
              <li key={service.id}>
                <a className="hover:text-white hover:underline" href="#services">
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl border-t border-white/15 px-4 pt-6 text-sm text-sky-100 sm:px-6">
        © 2026 {SITE.name}. All Rights Reserved.
      </p>
    </footer>
  )
}
