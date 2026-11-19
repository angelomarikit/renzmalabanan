import { Phone } from 'lucide-react'
import { SITE } from '../lib/constants'
import { useQuote } from '../context/QuoteContext'
import { Button } from './Button'
import { Container, Section } from './Section'

export function CTA() {
  const { goToQuote } = useQuote()

  return (
    <Section className="bg-white pb-16 pt-4 md:pb-16">
      <Container>
        <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-r from-ocean via-sky-500 to-lagoon px-5 py-8 text-center text-white sm:px-10 sm:py-10">
          <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-sun/30 blur-2xl" aria-hidden="true" />
          <h2 className="relative text-xl font-extrabold leading-snug text-balance sm:text-3xl">
            Ready for professional Malabanan service?
          </h2>
          <p className="relative mx-auto mt-3 max-w-2xl text-sm text-sky-50 text-pretty sm:text-base">
            Contact Renz Malabanan Siphoning for septic tank siphoning, declogging, drainage, and plumbing help.
          </p>
          <div className="relative mt-6 flex flex-col items-center justify-center gap-2.5 sm:flex-row sm:gap-3">
            <Button className="min-h-12 w-full max-w-xs sm:w-auto sm:min-w-56" onClick={() => goToQuote()}>
              Get a Free Quotation
            </Button>
            <a href={`tel:${SITE.phoneTel}`} className="w-full max-w-xs sm:w-auto">
              <Button variant="light" className="min-h-12 w-full sm:min-w-56">
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call Now
              </Button>
            </a>
          </div>
        </div>
      </Container>
    </Section>
  )
}
