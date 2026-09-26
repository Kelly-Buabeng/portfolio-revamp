'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

import { usePalette } from '@/components/CommandPalette'
import { CloseIcon, MenuIcon, SearchIcon } from '@/components/Icons'
import { ThemeToggle } from '@/components/ThemeToggle'
import { nav, profile } from '@/lib/data'

export function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-2.5" aria-label={`${profile.name}, home`}>
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-ink font-mono text-sm font-semibold text-paper transition-colors group-hover:bg-brand group-hover:text-on-brand">
        {profile.initials}
      </span>
      <span className="hidden text-[0.95rem] font-semibold tracking-tight sm:block">{profile.name}</span>
    </Link>
  )
}

export function Header() {
  let pathname = usePathname()
  let { open } = usePalette()
  let [menuOpen, setMenuOpen] = useState(false)
  let [scrolled, setScrolled] = useState(false)

  useEffect(() => setMenuOpen(false), [pathname])
  useEffect(() => {
    let onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  let isActive = (href: string) => !href.includes('#') && pathname === href

  return (
    <header
      className={clsx(
        'sticky top-0 z-40 transition-[background-color,border-color] duration-300',
        scrolled || menuOpen
          ? 'border-b border-line bg-paper/85 backdrop-blur-md'
          : 'border-b border-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-4 sm:px-8">
        <Logo />
        <nav className="ml-auto hidden md:block" aria-label="Main">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className={clsx(
                    'rounded-full px-3.5 py-2 text-sm transition-colors',
                    isActive(item.href) ? 'bg-surface-2 text-ink' : 'text-muted hover:text-ink',
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="ml-auto flex items-center gap-2 md:ml-2">
          <button
            type="button"
            onClick={open}
            className="flex h-9 items-center gap-2 rounded-full border border-line bg-surface pr-2 pl-3 text-sm text-muted transition hover:border-ink hover:text-ink"
            aria-label="Open command menu"
          >
            <SearchIcon className="h-4 w-4" />
            <kbd className="hidden rounded-md bg-surface-2 px-1.5 font-mono text-[0.7rem] sm:block">⌘K</kbd>
          </button>
          <ThemeToggle />
          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-full border border-line bg-surface md:hidden"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <CloseIcon className="h-4 w-4" /> : <MenuIcon className="h-4 w-4" />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav id="mobile-nav" className="border-t border-line md:hidden" aria-label="Mobile">
          <ul className="mx-auto max-w-6xl px-4 py-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between py-3 text-lg font-medium"
                >
                  {item.label}
                  <span className="font-mono text-xs text-muted">{item.href}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
