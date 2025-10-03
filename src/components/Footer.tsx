import Link from 'next/link'
import { ContainerInner, ContainerOuter } from '@/components/Container'

function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="transition hover:text-teal-500 dark:hover:text-teal-400 font-medium"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32 flex-none">
      <ContainerOuter>
        <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
          <ContainerInner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
                <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                  <NavLink href="/about">About</NavLink>
                  <NavLink href="/projects">Projects</NavLink>
                  <NavLink href="/contact">Contact</NavLink>
                </div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">
                  Built with Next.js & Tailwind CSS
                </div>
              </div>
              <div className="flex flex-col items-center gap-2 text-sm text-zinc-400 dark:text-zinc-500">
                <p>&copy; {new Date().getFullYear()} Kelly Buabeng</p>
                <p className="text-xs">Computer Science Student & Developer</p>
              </div>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}