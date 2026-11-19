import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'deep' | 'ghost' | 'light'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
  children: ReactNode
}

const styles: Record<Variant, string> = {
  primary: 'bg-citrus text-white shadow-[0_10px_24px_rgba(249,115,22,0.32)] hover:bg-orange-500',
  secondary: 'border-2 border-ocean bg-white text-ocean hover:bg-mist',
  deep: 'bg-ocean text-white hover:bg-deep',
  ghost: 'border border-white/40 bg-white/15 text-white hover:bg-white/25',
  light: 'bg-white text-ocean shadow-sm hover:bg-mist',
}

export function Button({ variant = 'primary', className = '', children, type = 'button', ...props }: Props) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-center text-[13px] font-extrabold uppercase leading-tight tracking-wide transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sun focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 sm:px-5 sm:text-sm ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
