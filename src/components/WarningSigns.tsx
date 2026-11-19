import { motion } from 'framer-motion'
import { warningSigns } from '../data/siteContent'
import { useQuote } from '../context/QuoteContext'
import { Button } from './Button'
import { Container, Section } from './Section'

export function WarningSigns() {
  const { goToQuote } = useQuote()

  return (
    <Section className="relative overflow-hidden bg-gradient-to-br from-ocean via-sky-500 to-lagoon py-12 text-white sm:py-16">
      <div className="pointer-events-none absolute -left-10 top-10 h-40 w-40 rounded-full bg-white/15 blur-2xl" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-48 w-48 rounded-full bg-sun/20 blur-3xl" aria-hidden="true" />
      <Container className="relative">
        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10">
          <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-balance sm:text-3xl lg:text-4xl">
            Signs You May Need Septic or Drainage Service
          </h2>
        </div>
        <div className="grid gap-3 sm:gap-4 md:grid-cols-2 xl:grid-cols-5">
          {warningSigns.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className="rounded-3xl border border-white/25 bg-white/15 p-4 backdrop-blur-sm sm:p-5"
              >
                <Icon className="mb-2.5 h-5 w-5 text-sun sm:mb-3 sm:h-6 sm:w-6" aria-hidden="true" />
                <h3 className="text-base font-extrabold">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-sky-50 text-pretty sm:mt-2">{item.text}</p>
              </motion.article>
            )
          })}
        </div>
        <div className="mt-8 rounded-3xl bg-sun px-5 py-7 text-center text-ink sm:mt-10 sm:px-6 sm:py-8">
          <p className="text-lg font-extrabold uppercase leading-snug tracking-wide text-balance sm:text-2xl">
            Don&apos;t wait until the problem gets worse
          </p>
          <div className="mt-5 flex justify-center">
            <Button className="min-h-12 w-full max-w-xs sm:w-auto" onClick={() => goToQuote()}>
              Request an Assessment
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
