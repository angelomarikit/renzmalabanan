import { Phone } from 'lucide-react'
import { useContact } from '../context/ContactContext'
import { useQuote } from '../context/QuoteContext'
import { WHATSAPP_HELLO } from '../lib/constants'

export function FloatingContact() {
  const { goToQuote } = useQuote()
  const { openContact } = useContact()

  return (
    <>
      <div className="fixed bottom-6 right-6 z-40 hidden flex-col gap-3 lg:flex">
        <a
          href={WHATSAPP_HELLO}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label="WhatsApp Renz Malabanan Siphoning"
        >
          <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden="true">
            <path d="M20.5 3.5A11 11 0 0 0 2.1 16.8L1 23l6.4-1.1A11 11 0 0 0 20.5 3.5zm-8.5 17a9.1 9.1 0 0 1-4.6-1.3l-.3-.2-3.8.7.7-3.7-.2-.3A9.1 9.1 0 1 1 12 20.5zm5-6.8c-.3-.1-1.6-.8-1.8-.9s-.4-.1-.6.1-.7.9-.8 1-.3.2-.6.1a7.4 7.4 0 0 1-2.2-1.4 8.2 8.2 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.4-.5.2-.3a.5.5 0 0 0 0-.5c0-.1-.6-1.4-.8-1.9s-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 12 12 0 0 0 4.5 4 15 15 0 0 0 1.5.6 3.6 3.6 0 0 0 1.7.1 2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.6-.3z" />
          </svg>
        </a>
        <button
          type="button"
          onClick={openContact}
          className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-citrus text-white shadow-lg hover:bg-orange-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label="Call or email Renz Malabanan Siphoning"
        >
          <Phone className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-sky-100 bg-white/95 p-3 backdrop-blur lg:hidden">
        <div className="mx-auto grid max-w-md grid-cols-3 gap-2">
          <button
            type="button"
            onClick={openContact}
            className="inline-flex min-h-12 flex-col items-center justify-center rounded-xl bg-ocean px-2 text-[11px] font-extrabold uppercase tracking-wide text-white sm:flex-row sm:gap-1.5 sm:text-sm"
          >
            <Phone className="mb-0.5 h-4 w-4 sm:mb-0" aria-hidden="true" />
            Call
          </button>
          <a
            href={WHATSAPP_HELLO}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 flex-col items-center justify-center rounded-xl bg-[#25D366] px-2 text-[11px] font-extrabold uppercase tracking-wide text-white sm:flex-row sm:gap-1.5 sm:text-sm"
          >
            WhatsApp
          </a>
          <button
            type="button"
            onClick={() => goToQuote()}
            className="inline-flex min-h-12 flex-col items-center justify-center rounded-xl bg-citrus px-2 text-[11px] font-extrabold uppercase tracking-wide text-white sm:flex-row sm:gap-1.5 sm:text-sm"
          >
            Quote
          </button>
        </div>
      </div>
    </>
  )
}
