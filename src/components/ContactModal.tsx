import { useEffect, useId, useRef } from 'react'
import { Mail, MessageCircle, Phone, X } from 'lucide-react'
import { SITE, WHATSAPP_HELLO } from '../lib/constants'
import { useContact } from '../context/ContactContext'

export function ContactModal() {
  const { contactOpen, closeContact } = useContact()
  const titleId = useId()
  const closeRef = useRef<HTMLButtonElement>(null)
  const dialogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!contactOpen) return

    const previous = document.activeElement as HTMLElement | null
    closeRef.current?.focus()
    document.body.style.overflow = 'hidden'

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeContact()
        return
      }
      if (event.key !== 'Tab' || !dialogRef.current) return
      const focusable = dialogRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')
      if (!focusable.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      previous?.focus()
    }
  }, [contactOpen, closeContact])

  if (!contactOpen) return null

  return (
    <div className="fixed inset-0 z-[70] flex items-end justify-center p-4 sm:items-center">
      <button
        type="button"
        className="absolute inset-0 bg-deep/50 backdrop-blur-[2px]"
        aria-label="Close contact options"
        onClick={closeContact}
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative w-full max-w-md rounded-3xl bg-white p-5 shadow-2xl sm:p-6"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={closeContact}
          className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-xl text-slate-500 hover:bg-mist hover:text-ink"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>
        <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-citrus">Contact</p>
        <h2 id={titleId} className="mt-1 pr-10 text-xl font-extrabold text-ink sm:text-2xl">
          Call, message, or email
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          Reach Renz Malabanan Siphoning directly. We will confirm if we can serve your city.
        </p>

        <div className="mt-5 grid gap-3">
          <a
            href={`tel:${SITE.phoneTel}`}
            className="flex items-center gap-3 rounded-2xl border border-sky-100 bg-mist p-4 hover:border-ocean hover:bg-white"
          >
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ocean text-white">
              <Phone className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="min-w-0">
              <span className="block text-[11px] font-extrabold uppercase tracking-wide text-slate-500">Phone</span>
              <span className="block truncate text-lg font-extrabold text-ink">{SITE.phoneDisplay}</span>
              <span className="block text-sm font-semibold text-ocean">Tap to call</span>
            </span>
          </a>

          <a
            href={WHATSAPP_HELLO}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-2xl border border-sky-100 bg-mist p-4 hover:border-lagoon hover:bg-white"
          >
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#25D366] text-white">
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="min-w-0">
              <span className="block text-[11px] font-extrabold uppercase tracking-wide text-slate-500">WhatsApp</span>
              <span className="block truncate text-lg font-extrabold text-ink">{SITE.phoneDisplay}</span>
              <span className="block text-sm font-semibold text-lagoon">Tap to message</span>
            </span>
          </a>

          <a
            href={SITE.facebookUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-2xl border border-sky-100 bg-mist p-4 hover:border-[#1877F2] hover:bg-white"
          >
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#1877F2] text-white">
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                <path d="M14.5 8.5V6.8c0-.7.5-1 1.2-1h1.3V3h-2.2C11.9 3 11 4.6 11 6.6v1.9H9v2.7h2V21h3.5v-9.8h2.3l.4-2.7h-2.7z" />
              </svg>
            </span>
            <span className="min-w-0">
              <span className="block text-[11px] font-extrabold uppercase tracking-wide text-slate-500">Facebook</span>
              <span className="block text-lg font-extrabold text-ink">Renz Malabanan Siphoning</span>
              <span className="block text-sm font-semibold text-[#1877F2]">Visit our page</span>
            </span>
          </a>

          <a
            href={`mailto:${SITE.email}`}
            className="flex items-center gap-3 rounded-2xl border border-sky-100 bg-mist p-4 hover:border-citrus hover:bg-white"
          >
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-citrus text-white">
              <Mail className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="min-w-0">
              <span className="block text-[11px] font-extrabold uppercase tracking-wide text-slate-500">Email</span>
              <span className="block break-all text-[13px] font-extrabold leading-snug text-ink">{SITE.email}</span>
              <span className="block text-sm font-semibold text-citrus">Tap to email</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}
