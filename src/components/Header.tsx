import { useEffect, useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import { NAV_LINKS, SITE } from '../lib/constants'
import { useContact } from '../context/ContactContext'
import { useQuote } from '../context/QuoteContext'
import { Button } from './Button'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { goToQuote } = useQuote()
  const { openContact } = useContact()

  const showContact = () => {
    setOpen(false)
    openContact()
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-sun focus:px-4 focus:py-2 focus:font-bold focus:text-ink"
      >
        Skip to content
      </a>
      <header
        className={`sticky top-0 z-50 border-b transition ${
          scrolled ? 'border-sky-100 bg-white/95 shadow-sm backdrop-blur' : 'border-transparent bg-white'
        }`}
      >
        <div className="bg-gradient-to-r from-citrus via-ocean to-lagoon text-white">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-1.5 text-[11px] sm:px-6 sm:text-sm">
            <p className="min-w-0 truncate font-semibold">Same Malabanan service — siphoning, declogging &amp; plumbing</p>
            <div className="flex shrink-0 items-center gap-3 sm:gap-4">
              <a
                href={SITE.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-extrabold tracking-wide hover:text-sun focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sun"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current sm:h-5 sm:w-5" aria-hidden="true">
                  <path d="M14.5 8.5V6.8c0-.7.5-1 1.2-1h1.3V3h-2.2C11.9 3 11 4.6 11 6.6v1.9H9v2.7h2V21h3.5v-9.8h2.3l.4-2.7h-2.7z" />
                </svg>
                Facebook
              </a>
              <button
                type="button"
                className="font-extrabold tracking-wide text-sun hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sun"
                onClick={showContact}
              >
                Call {SITE.phoneDisplay}
              </button>
            </div>
          </div>
        </div>

        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2 sm:px-6">
          <a href="#home" className="flex min-w-0 items-center gap-2" aria-label={`${SITE.name} home`}>
            <img
              src={SITE.logo}
              alt=""
              width={819}
              height={545}
              className="h-14 w-auto shrink-0 sm:h-16"
            />
            <span className="min-w-0 leading-tight">
              <span className="block truncate text-[15px] font-extrabold tracking-tight text-ink sm:text-lg">
                Renz Malabanan
              </span>
              <span className="block text-[10px] font-extrabold uppercase tracking-[0.16em] text-citrus sm:text-[11px]">
                Siphoning
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-ink hover:text-ocean focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sun"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <Button variant="deep" className="min-h-11" onClick={showContact}>
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call Now
            </Button>
            <Button className="min-h-11" onClick={() => goToQuote()}>
              Request Quotation
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-sky-200 text-ocean lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open ? (
          <div id="mobile-nav" className="border-t border-sky-100 bg-white px-4 py-4 lg:hidden">
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-xl px-3 py-3 text-base font-semibold text-ink hover:bg-mist"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="mt-4 grid grid-cols-1 gap-2">
              <Button variant="deep" className="min-h-12 w-full" onClick={showContact}>
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call {SITE.phoneDisplay}
              </Button>
              <Button
                className="min-h-12 w-full"
                onClick={() => {
                  setOpen(false)
                  goToQuote()
                }}
              >
                Request Quotation
              </Button>
            </div>
          </div>
        ) : null}
      </header>
    </>
  )
}
