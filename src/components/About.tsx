import { SITE } from '../lib/constants'
import { Container, Section } from './Section'

export function About() {
  return (
    <Section id="about" className="bg-mist py-12 sm:py-16">
      <Container className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <div>
          <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-citrus sm:text-xs">About us</p>
          <h2 className="mt-2 text-2xl font-extrabold leading-tight tracking-tight text-ink text-balance sm:text-3xl lg:text-4xl">
            About Renz Malabanan Siphoning
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-600 text-pretty sm:text-base">
            Renz Malabanan Siphoning is the same Malabanan service for septic tank, drainage, plumbing, and sanitation,
            under the Renz Malabanan Siphoning name. The goal is simple: help customers solve barado, septic tank,
            drainage, and plumbing problems through a straightforward assessment and the right service.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-600 text-pretty sm:text-base">
            Whether you need siphoning, sipsip pozo negro, septic tank cleaning, declogging, drainage cleaning,
            plumbing repair, grease trap cleaning, STP cleaning, or septic tank construction, we start with the actual
            condition of the property and recommend the work that fits. We are based at Golden Horizon, Hugo Perez,
            Trece Martires, Cavite.
          </p>
        </div>
        <div className="rounded-[32px] border border-sky-100 bg-white p-4 shadow-[0_16px_40px_rgba(2,132,199,0.12)] sm:p-6">
          <img
            src={SITE.logo}
            alt="Renz Malabanan Siphoning logo with a technician, vacuum truck, house, and hose"
            width={819}
            height={545}
            loading="lazy"
            decoding="async"
            className="mx-auto h-auto w-full"
          />
        </div>
      </Container>
    </Section>
  )
}
