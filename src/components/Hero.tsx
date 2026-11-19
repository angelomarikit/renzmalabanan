import { motion } from 'framer-motion'
import { CheckCircle2, Phone } from 'lucide-react'
import { SITE } from '../lib/constants'
import { trustItems } from '../data/siteContent'
import { useQuote } from '../context/QuoteContext'
import { Button } from './Button'
import { Container, Section } from './Section'
import { HeroVisual } from './HeroVisual'

export function Hero() {
  const { goToQuote } = useQuote()

  return (
    <Section id="home" className="relative overflow-hidden bg-gradient-to-br from-sky-100 via-white to-amber-50">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="sway absolute -left-16 top-8 h-56 w-56 rounded-full bg-sky-300/50 blur-3xl" />
        <div className="bob absolute right-0 top-24 h-64 w-64 rounded-full bg-citrus/15 blur-3xl" />
        <div className="absolute -bottom-10 left-1/3 h-40 w-72 rounded-full bg-lagoon/15 blur-3xl" />
        <svg className="absolute inset-x-0 bottom-0 h-16 w-full text-white" viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path fill="currentColor" d="M0 40c120 24 240 36 360 28s240-36 360-28 240 36 360 28 240-32 360-24v36H0Z" />
        </svg>
      </div>
      <Container className="relative grid items-center gap-8 py-10 sm:py-14 lg:grid-cols-2 lg:gap-10 lg:py-16">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
          <p className="mb-3 inline-flex rounded-full border border-citrus/30 bg-white px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.14em] text-citrus sm:mb-4 sm:text-[11px] sm:tracking-[0.18em]">
            Same Malabanan Service
          </p>
          <h1 className="text-[27px] font-extrabold leading-[1.15] tracking-tight text-ink text-balance sm:text-4xl sm:leading-tight lg:text-5xl">
            Septic Tank Siphoning, Declogging &amp; Plumbing Service
          </h1>
          <p className="mt-3 max-w-xl text-[15px] font-semibold leading-relaxed text-ocean text-pretty sm:mt-4 sm:text-lg">
            May baradong toilet, mabagal na drainage, umaapaw na septic tank, o mabahong pozo negro?
          </p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600 text-pretty sm:text-base">
            Renz Malabanan Siphoning is the same Malabanan service for septic tank siphoning, sipsip pozo negro,
            declogging, plumbing, grease trap cleaning, STP cleaning, and septic tank work — for homes and businesses
            in Trece Martires, Cavite.
          </p>
          <div className="mt-6 flex flex-col gap-2.5 sm:mt-7 sm:flex-row sm:gap-3">
            <Button className="min-h-12 w-full sm:w-auto" onClick={() => goToQuote()}>
              Request a Free Quotation
            </Button>
            <a href={`tel:${SITE.phoneTel}`} className="w-full sm:w-auto">
              <Button variant="secondary" className="min-h-12 w-full">
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call {SITE.phoneDisplay}
              </Button>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <HeroVisual />
        </motion.div>
      </Container>
      <Container className="relative pb-12">
        <ul className="grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-4">
          {trustItems.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 rounded-2xl border border-sky-100 bg-white px-3 py-2.5 text-xs font-semibold text-ink shadow-sm sm:py-3 sm:text-sm"
            >
              <CheckCircle2 className="h-4 w-4 shrink-0 text-lagoon sm:h-5 sm:w-5" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}
