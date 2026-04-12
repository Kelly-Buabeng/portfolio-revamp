'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import clsx from 'clsx'

import { Container } from '@/components/Container'

function SunIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z" />
      <path
        d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
        fill="none"
      />
    </svg>
  )
}

function MoonIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
         d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
         strokeWidth="1.5"
         strokeLinecap="round"
         strokeLinejoin="round"
      />
    </svg>
  )
}

function ThemeToggle() {
  let { resolvedTheme, setTheme } = useTheme()
  let otherTheme = resolvedTheme === 'dark' ? 'light' : 'dark'
  let [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <button
      type="button"
      aria-label={mounted ? `Switch to ${otherTheme} theme` : 'Toggle theme'}
      className="group rounded-full bg-white/90 p-2 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
      onClick={() => setTheme(otherTheme)}
    >
      <SunIcon className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-teal-50 [@media(prefers-color-scheme:dark)]:stroke-teal-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-teal-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-teal-600" />
      <MoonIcon className="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-teal-500 [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400" />
    </button>
  )
}

function NavItem({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  let isActive = usePathname() === href

  return (
    <li>
      <Link
        href={href}
        className={clsx(
          'relative block px-3 py-2 transition font-medium',
          isActive
            ? 'text-teal-500 dark:text-teal-400'
            : 'hover:text-teal-500 dark:hover:text-teal-400',
        )}
      >
        {children}
        {isActive && (
          <motion.span
            layoutId="active-nav-pill"
            className="absolute inset-x-1 -bottom-px h-px bg-teal-500 dark:bg-teal-400"
            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
          />
        )}
      </Link>
    </li>
  )
}

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-zinc-700 dark:text-zinc-200"
      >
        Menu
      </button>
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 z-50 bg-white dark:bg-zinc-900 shadow-xl border-b border-zinc-100 dark:border-zinc-800 p-4 flex flex-col gap-4">

           <Link href="/about" className="font-medium text-zinc-800 dark:text-zinc-200" onClick={() => setIsOpen(false)}>About</Link>
           <Link href="/projects" className="font-medium text-zinc-800 dark:text-zinc-200" onClick={() => setIsOpen(false)}>Projects</Link>
           <Link href="/kelly@cv.pdf" target="_blank" className="font-medium text-zinc-800 dark:text-zinc-200" onClick={() => setIsOpen(false)}>Resume</Link>
           <Link href="/contact" className="font-medium text-zinc-800 dark:text-zinc-200" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </div>
  )
}

export function Header() {
  let { scrollY } = useScroll()
  let [isScrolled, setIsScrolled] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  return (
    <header
      className={clsx(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md shadow-sm py-4 border-b border-zinc-100 dark:border-zinc-800/50" 
          : "bg-transparent py-6"
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          <Link href="/" className="font-bold text-xl tracking-tight text-zinc-800 dark:text-zinc-100 flex items-center gap-2">
            
            <span>Kelly Buabeng</span>
          </Link>

          <div className="flex items-center gap-6">
            <nav className="hidden md:block">
              <ul className="flex items-center gap-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <NavItem href="/about">About</NavItem>
                <NavItem href="/projects">Projects</NavItem>
              </ul>
            </nav>

            <div className="flex items-center gap-4 border-l border-zinc-200 dark:border-zinc-700 pl-4">
              <ThemeToggle />
              <div className="hidden md:flex gap-3">
                <Link
                  href="/kelly@cv.pdf"
                  target="_blank"
                  className="inline-flex items-center justify-center rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 hover:bg-zinc-50 hover:text-zinc-900 hover:border-zinc-300 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700 transition-all active:scale-95 shadow-sm"
                >
                  Resume
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-zinc-900 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-zinc-900/10 dark:shadow-white/5"
                >
                  Let's Talk
                </Link>
              </div>
              <MobileNav />
            </div>
          </div>
        </div>
      </Container>
    </header>
  )
}
