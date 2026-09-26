'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

import { MoonIcon, SunIcon } from '@/components/Icons'

export function ThemeToggle() {
  let { resolvedTheme, setTheme } = useTheme()
  let [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  let next = resolvedTheme === 'dark' ? 'light' : 'dark'

  return (
    <button
      type="button"
      aria-label={mounted ? `Switch to ${next} theme` : 'Toggle theme'}
      onClick={() => setTheme(next)}
      className="grid h-9 w-9 place-items-center rounded-full border border-line bg-surface text-ink transition hover:border-ink"
    >
      <SunIcon className="h-4 w-4 dark:hidden" />
      <MoonIcon className="hidden h-4 w-4 dark:block" />
    </button>
  )
}
