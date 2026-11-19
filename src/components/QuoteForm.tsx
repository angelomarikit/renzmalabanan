import { useState, type FormEvent } from 'react'
import { Mail, MessageCircle, Phone } from 'lucide-react'
import { contactServices } from '../data/siteContent'
import { SERVICE_OPTIONS, SITE, WHATSAPP_HELLO } from '../lib/constants'
import { mailtoQuoteUrl, whatsappQuoteUrl } from '../lib/quote'
import { useQuote } from '../context/QuoteContext'
import { Button } from './Button'
import { Container, Section } from './Section'

const emptyForm = {
  fullName: '',
  contactNumber: '',
  email: '',
  city: '',
  service: '',
  problem: '',
}

const fieldClass =
  'mt-1 w-full rounded-2xl border border-sky-200 bg-white px-3 py-3 text-base font-medium text-ink outline-none focus:border-ocean focus:ring-2 focus:ring-sun sm:text-sm'

export function QuoteForm() {
  const { selectedService, setSelectedService } = useQuote()
  const [form, setForm] = useState(emptyForm)
  const [error, setError] = useState('')
  const [syncedService, setSyncedService] = useState(selectedService)

  if (selectedService !== syncedService) {
    setSyncedService(selectedService)
    if (selectedService) {
      setForm((current) => ({ ...current, service: selectedService }))
    }
  }

  const update = (key: keyof typeof emptyForm, value: string) => {
    setForm((current) => ({ ...current, [key]: value }))
    if (key === 'service') setSelectedService(value)
  }

  const validate = () => {
    if (!form.fullName.trim() || !form.contactNumber.trim() || !form.city.trim() || !form.service || !form.problem.trim()) {
      setError('Please complete your name, contact number, city, service needed, and problem description.')
      return false
    }
    setError('')
    return true
  }

  const onWhatsApp = (event: FormEvent) => {
    event.preventDefault()
    if (!validate()) return
    window.open(whatsappQuoteUrl(form), '_blank', 'noopener,noreferrer')
  }

  const onEmail = () => {
    if (!validate()) return
    window.location.href = mailtoQuoteUrl(form)
  }

  return (
    <Section id="contact" className="bg-mist py-12 sm:py-16">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-citrus sm:text-xs sm:tracking-[0.18em]">
              Contact Renz Malabanan
            </p>
            <h2 className="mt-2 text-2xl font-extrabold leading-tight tracking-tight text-ink sm:text-3xl lg:text-4xl">
              Need Malabanan Service?
            </h2>
            <p className="mt-3 text-base font-semibold text-ocean text-pretty sm:text-lg">
              Barado? Puno ang Pozo Negro? May Problema sa Drainage?
            </p>
            <div className="mt-6 space-y-4 rounded-3xl border border-sky-100 bg-white p-5 shadow-sm sm:p-6">
              <p>
                <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">Phone</span>
                <a className="text-lg font-extrabold text-ink hover:underline sm:text-xl" href={`tel:${SITE.phoneTel}`}>
                  {SITE.phoneDisplay}
                </a>
              </p>
              <p>
                <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">Email</span>
                <a className="break-all text-sm font-semibold text-ocean hover:underline sm:text-base" href={`mailto:${SITE.email}`}>
                  {SITE.email}
                </a>
              </p>
              <p>
                <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">Location</span>
                <a className="font-extrabold text-ink hover:underline" href={SITE.mapLink} target="_blank" rel="noreferrer">
                  {SITE.locationArea}
                </a>
                <span className="mt-1 block text-sm leading-relaxed text-slate-600">{SITE.locationAddress}</span>
              </p>
              <p>
                <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">Facebook</span>
                <a className="font-extrabold text-[#1877F2] hover:underline" href={SITE.facebookUrl} target="_blank" rel="noreferrer">
                  Visit our Facebook page
                </a>
              </p>
              <p>
                <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">WhatsApp</span>
                <a className="font-extrabold text-lagoon hover:underline" href={WHATSAPP_HELLO} target="_blank" rel="noreferrer">
                  Message {SITE.phoneDisplay}
                </a>
              </p>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Services</p>
                <ul className="mt-2 grid grid-cols-1 gap-1 text-sm text-slate-700 sm:grid-cols-2">
                  {contactServices.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <form className="rounded-3xl border border-sky-100 bg-white p-5 shadow-sm sm:p-8" onSubmit={onWhatsApp} noValidate>
            <h3 className="text-lg font-extrabold text-ink sm:text-xl">Request a Quotation</h3>
            <p className="mt-1 text-[13px] text-slate-600 text-pretty sm:text-sm">
              This form opens WhatsApp or email with your details. Nothing is stored on this website.
            </p>
            <div className="mt-5 grid gap-3.5 sm:mt-6 sm:gap-4">
              <label className="block text-sm font-semibold text-ink" htmlFor="fullName">
                Full Name
                <input
                  id="fullName"
                  name="fullName"
                  autoComplete="name"
                  required
                  value={form.fullName}
                  onChange={(event) => update('fullName', event.target.value)}
                  className={fieldClass}
                />
              </label>
              <label className="block text-sm font-semibold text-ink" htmlFor="contactNumber">
                Contact Number
                <input
                  id="contactNumber"
                  name="contactNumber"
                  autoComplete="tel"
                  inputMode="tel"
                  required
                  value={form.contactNumber}
                  onChange={(event) => update('contactNumber', event.target.value)}
                  className={fieldClass}
                />
              </label>
              <label className="block text-sm font-semibold text-ink" htmlFor="email">
                Email Address
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={(event) => update('email', event.target.value)}
                  className={fieldClass}
                />
              </label>
              <label className="block text-sm font-semibold text-ink" htmlFor="city">
                City / Municipality
                <input
                  id="city"
                  name="city"
                  required
                  value={form.city}
                  onChange={(event) => update('city', event.target.value)}
                  className={fieldClass}
                />
              </label>
              <label className="block text-sm font-semibold text-ink" htmlFor="service">
                Service Needed
                <select
                  id="service"
                  name="service"
                  required
                  value={form.service}
                  onChange={(event) => update('service', event.target.value)}
                  className={fieldClass}
                >
                  <option value="">Select a service</option>
                  {SERVICE_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block text-sm font-semibold text-ink" htmlFor="problem">
                Description of Problem
                <textarea
                  id="problem"
                  name="problem"
                  required
                  rows={4}
                  value={form.problem}
                  onChange={(event) => update('problem', event.target.value)}
                  className={fieldClass}
                />
              </label>
            </div>
            {error ? (
              <p className="mt-3 text-sm font-semibold text-red-700" role="alert">
                {error}
              </p>
            ) : null}
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <Button type="submit" className="min-h-12 w-full">
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Send via WhatsApp
              </Button>
              <Button type="button" variant="secondary" className="min-h-12 w-full" onClick={onEmail}>
                <Mail className="h-4 w-4" aria-hidden="true" />
                Send via Email
              </Button>
            </div>
            <a
              href={`tel:${SITE.phoneTel}`}
              className="mt-3 flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-ocean px-4 py-3 text-[13px] font-extrabold uppercase tracking-wide text-white hover:bg-deep sm:px-5 sm:text-sm"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call {SITE.phoneDisplay}
            </a>
          </form>
        </div>
        <div className="mt-6 overflow-hidden rounded-3xl border border-sky-100 bg-white shadow-sm">
          <div className="flex flex-col gap-2 px-5 py-4 sm:flex-row sm:items-end sm:justify-between sm:px-6">
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-citrus sm:text-xs">Find us</p>
              <h3 className="mt-1 text-lg font-extrabold text-ink sm:text-xl">Our location in {SITE.locationArea}</h3>
            </div>
            <a className="text-sm font-bold text-ocean hover:underline" href={SITE.mapLink} target="_blank" rel="noreferrer">
              Open in Google Maps
            </a>
          </div>
          <iframe
            title="Renz Malabanan Siphoning location in Cavite"
            src={SITE.mapEmbedUrl}
            className="h-72 w-full border-0 sm:h-96"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </Container>
    </Section>
  )
}
