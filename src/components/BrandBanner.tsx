import { SITE } from '../lib/constants'
import { useQuote } from '../context/QuoteContext'
import { Container, Section } from './Section'

export function BrandBanner() {
  const { goToQuote } = useQuote()

  return (
    <Section className="bg-white pb-12 pt-2 sm:pb-16">
      <Container>
        <button
          type="button"
          onClick={() => goToQuote()}
          aria-label="Request a quotation from Renz Malabanan Siphoning"
          className="block w-full overflow-hidden rounded-[28px] bg-gradient-to-r from-sky-100 via-white to-amber-50 p-4 shadow-[0_16px_40px_rgba(2,132,199,0.12)] ring-1 ring-sky-100 transition hover:-translate-y-0.5 hover:shadow-[0_20px_48px_rgba(249,115,22,0.16)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sun sm:rounded-[36px] sm:p-8"
        >
          <img
            src={SITE.logo}
            alt="Renz Malabanan Siphoning logo with a technician, vacuum truck, house, and hose"
            width={819}
            height={545}
            loading="lazy"
            decoding="async"
            className="mx-auto h-auto w-full max-w-xl"
          />
          <p className="mt-2 text-center text-sm font-extrabold uppercase tracking-wide text-ocean sm:text-base">
            Tap to request a quotation
          </p>
        </button>
      </Container>
    </Section>
  )
}
