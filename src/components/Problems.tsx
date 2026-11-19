import { motion } from 'framer-motion'
import { problems } from '../data/siteContent'
import { useQuote } from '../context/QuoteContext'
import { Button } from './Button'
import { Container, Section, SectionTitle } from './Section'

const tones = [
  'bg-sky-50 text-ocean',
  'bg-teal-50 text-lagoon',
  'bg-orange-50 text-citrus',
  'bg-amber-50 text-amber-600',
]

export function Problems() {
  const { goToQuote } = useQuote()

  return (
    <Section id="problems" className="bg-white py-12 sm:py-16">
      <Container>
        <SectionTitle
          eyebrow="We can help"
          title="Barado? Puno ang Septic Tank?"
          subtitle="Renz Malabanan Siphoning is ready to help — tell us what you are seeing and we will point you to the right service."
        />
        <div className="grid gap-2.5 sm:grid-cols-2 sm:gap-3 lg:grid-cols-5">
          {problems.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.03 }}
                className="flex items-center gap-3 rounded-2xl border border-sky-100 bg-white p-3.5 shadow-sm sm:block sm:p-4"
              >
                <span className={`inline-flex h-10 w-10 items-center justify-center rounded-2xl sm:mb-3 ${tones[index % tones.length]}`}>
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="text-[13px] font-bold leading-snug text-ink sm:text-sm">{item.title}</h3>
              </motion.article>
            )
          })}
        </div>
        <div className="mt-8 flex justify-center">
          <Button className="min-h-12 w-full max-w-xs sm:w-auto sm:min-w-56" onClick={() => goToQuote()}>
            Get a Quotation
          </Button>
        </div>
      </Container>
    </Section>
  )
}
