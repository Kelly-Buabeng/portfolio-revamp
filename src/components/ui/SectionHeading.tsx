import clsx from 'clsx'

export function Eyebrow({ index, children }: { index?: string; children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.14em] text-muted">
      {index && <span className="text-brand">{index}</span>}
      <span className="h-px w-8 bg-line" aria-hidden="true" />
      {children}
    </p>
  )
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  lead,
  className,
  action,
}: {
  index?: string
  eyebrow: string
  title: React.ReactNode
  lead?: React.ReactNode
  className?: string
  action?: React.ReactNode
}) {
  return (
    <div className={clsx('flex flex-col gap-6 md:flex-row md:items-end md:justify-between', className)}>
      <div className="max-w-2xl">
        <Eyebrow index={index}>{eyebrow}</Eyebrow>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">{title}</h2>
        {lead && <p className="mt-4 text-lg text-muted">{lead}</p>}
      </div>
      {action}
    </div>
  )
}
