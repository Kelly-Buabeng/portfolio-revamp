import clsx from 'clsx'

export function Container({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div className={clsx('mx-auto w-full max-w-6xl px-4 sm:px-8', className)} {...props}>
      {children}
    </div>
  )
}
