import Link from 'next/link'
import clsx from 'clsx'

const variants = {
  primary: 'bg-ink text-paper hover:bg-brand hover:text-on-brand',
  brand: 'bg-brand text-on-brand hover:opacity-90',
  outline: 'border border-line bg-surface text-ink hover:border-ink',
  ghost: 'text-ink hover:bg-surface-2',
}

type ButtonProps = {
  variant?: keyof typeof variants
  size?: 'md' | 'sm'
  className?: string
} & (
  | React.ComponentPropsWithoutRef<typeof Link>
  | (React.ComponentPropsWithoutRef<'button'> & { href?: undefined })
)

export function Button({ variant = 'primary', size = 'md', className, ...props }: ButtonProps) {
  className = clsx(
    'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-200',
    size === 'md' ? 'h-11 px-5 text-[0.95rem]' : 'h-9 px-4 text-sm',
    variants[variant],
    className,
  )

  return typeof props.href === 'undefined' ? (
    <button className={className} {...(props as React.ComponentPropsWithoutRef<'button'>)} />
  ) : (
    <Link className={className} {...(props as React.ComponentPropsWithoutRef<typeof Link>)} />
  )
}
