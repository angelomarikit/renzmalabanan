import { motion } from 'framer-motion'
import { whyChooseUs } from '../data/siteContent'
import { Container, Section, SectionTitle } from './Section'

const bubbles = ['bg-sky-100 text-ocean', 'bg-teal-50 text-lagoon', 'bg-orange-50 text-citrus', 'bg-amber-50 text-amber-600']

export function WhyChooseUs() {
  return (
    <Section id="why-us" className="bg-white py-12 sm:py-16">
      <Container>
        <SectionTitle
          eyebrow="Why us"
          title="Why Choose Renz Malabanan Siphoning?"
          subtitle="The same Malabanan service, with a clear next step from the first call to the finished job."
        />
        <div className="grid gap-3.5 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">
          {whyChooseUs.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="rounded-3xl border border-sky-100 bg-gradient-to-br from-white to-sky-50 p-5 shadow-sm sm:p-6"
              >
                <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-2xl sm:mb-4 sm:h-12 sm:w-12 ${bubbles[index % bubbles.length]}`}>
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
                </div>
                <h3 className="text-base font-extrabold text-ink sm:text-lg">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 text-pretty">{item.text}</p>
              </motion.article>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
