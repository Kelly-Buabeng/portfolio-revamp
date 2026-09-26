import clsx from 'clsx'

export function Tag({
  children,
  tone = 'neutral',
  className,
}: {
  children: React.ReactNode
  tone?: 'neutral' | 'brand' | 'gold'
  className?: string
}) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2.5 py-0.5 font-mono text-[0.72rem] leading-5 tracking-tight',
        tone === 'neutral' && 'border border-line text-muted',
        tone === 'brand' && 'bg-brand-soft text-ink',
        tone === 'gold' && 'bg-gold text-on-gold',
        className,
      )}
    >
      {children}
    </span>
  )
}
