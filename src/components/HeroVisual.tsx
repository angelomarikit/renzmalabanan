import { SITE } from '../lib/constants'

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="sway absolute -left-2 top-6 h-16 w-16 rounded-full bg-sky-300/70 blur-xl" aria-hidden="true" />
      <div className="bob absolute -right-2 bottom-10 h-20 w-20 rounded-full bg-citrus/30 blur-xl" aria-hidden="true" />
      <span
        className="bob absolute left-6 top-2 h-4 w-4 rounded-full bg-ocean shadow-sm"
        style={{ animationDelay: '0.2s' }}
        aria-hidden="true"
      />
      <span
        className="bob absolute right-10 top-8 h-3 w-3 rounded-full bg-lagoon"
        style={{ animationDelay: '0.8s' }}
        aria-hidden="true"
      />
      <span
        className="bob absolute bottom-16 left-10 h-2.5 w-2.5 rounded-full bg-sun"
        style={{ animationDelay: '1.2s' }}
        aria-hidden="true"
      />
      <div className="relative overflow-hidden rounded-[32px] bg-white/80 p-3 shadow-[0_24px_60px_rgba(2,132,199,0.18)] ring-4 ring-white sm:p-4">
        <img
          src={SITE.logo}
          alt="Renz Malabanan Siphoning logo with a technician, vacuum truck, and hose"
          width={819}
          height={545}
          fetchPriority="high"
          decoding="async"
          className="h-auto w-full"
        />
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2 sm:gap-3">
        <div className="rounded-2xl border border-sky-100 bg-white px-3 py-2.5 shadow-sm">
          <p className="text-[10px] font-bold uppercase tracking-wider text-citrus">Focus</p>
          <p className="text-sm font-bold text-ink">Sipsip pozo negro</p>
        </div>
        <div className="rounded-2xl border border-sky-100 bg-white px-3 py-2.5 shadow-sm">
          <p className="text-[10px] font-bold uppercase tracking-wider text-lagoon">Response</p>
          <p className="text-sm font-bold text-ink">Request a quote</p>
        </div>
      </div>
    </div>
  )
}
