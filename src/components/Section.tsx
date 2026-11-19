import type { ReactNode } from 'react'

type Props = {
  id?: string
  className?: string
  children: ReactNode
  as?: 'section' | 'div'
}

export function Section({ id, className = '', children, as: Tag = 'section' }: Props) {
  return (
    <Tag id={id} className={`scroll-mt-36 ${className}`}>
      {children}
    </Tag>
  )
}

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 ${className}`}>{children}</div>
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-ocean sm:text-xs sm:tracking-[0.16em]">
      {children}
    </p>
  )
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  light = false,
}: {
  eyebrow?: string
  title: string
  subtitle?: string
  light?: boolean
}) {
  return (
    <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10">
      {eyebrow ? (
        <div className="mb-3 flex justify-center">
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
      ) : null}
      <h2
        className={`text-2xl font-extrabold leading-tight tracking-tight text-balance sm:text-3xl lg:text-4xl ${
          light ? 'text-white' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`mt-3 text-[15px] leading-relaxed text-pretty sm:text-lg ${
            light ? 'text-sky-50' : 'text-slate-600'
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}
