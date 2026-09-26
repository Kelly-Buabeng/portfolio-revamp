'use client'

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Dialog, DialogPanel } from '@headlessui/react'
import { useTheme } from 'next-themes'
import clsx from 'clsx'

import { ArrowRightIcon, SearchIcon } from '@/components/Icons'
import { profile, projects } from '@/lib/data'

type Action = {
  id: string
  label: string
  hint: string
  group: 'Go to' | 'Projects' | 'Connect' | 'Settings'
  keywords?: string
  run: () => void
}

const PaletteContext = createContext<{ open: () => void }>({ open: () => {} })
export const usePalette = () => useContext(PaletteContext)

export function CommandPaletteProvider({ children }: { children: React.ReactNode }) {
  let [isOpen, setIsOpen] = useState(false)
  let open = useCallback(() => setIsOpen(true), [])

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        setIsOpen((v) => !v)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <PaletteContext.Provider value={{ open }}>
      {children}
      <CommandPalette isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </PaletteContext.Provider>
  )
}

function CommandPalette({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  let router = useRouter()
  let { resolvedTheme, setTheme } = useTheme()
  let [query, setQuery] = useState('')
  let [active, setActive] = useState(0)
  let listRef = useRef<HTMLUListElement>(null)

  let actions = useMemo<Action[]>(() => {
    let go = (href: string) => () => router.push(href)
    let external = (href: string) => () => window.open(href, '_blank', 'noopener,noreferrer')
    return [
      { id: 'home', label: 'Home', hint: '/', group: 'Go to', run: go('/') },
      { id: 'work', label: 'Selected work', hint: '/#work', group: 'Go to', run: go('/#work') },
      { id: 'exp', label: 'Experience', hint: '/#experience', group: 'Go to', run: go('/#experience') },
      { id: 'projects', label: 'All projects', hint: '/projects', group: 'Go to', run: go('/projects') },
      { id: 'about', label: 'About me', hint: '/about', group: 'Go to', run: go('/about') },
      { id: 'contact', label: 'Contact', hint: '/contact', group: 'Go to', run: go('/contact') },
      ...projects.map<Action>((p) => ({
        id: p.slug,
        label: p.name,
        hint: p.stack.slice(0, 3).join(' · '),
        group: 'Projects',
        keywords: p.stack.join(' ') + ' ' + p.categories.join(' '),
        run: go(`/projects#${p.slug}`),
      })),
      { id: 'cv', label: 'Download CV', hint: 'PDF', group: 'Connect', keywords: 'resume', run: external(profile.cv) },
      { id: 'email', label: 'Email Kelly', hint: profile.email, group: 'Connect', keywords: 'mail hire', run: () => (window.location.href = `mailto:${profile.email}`) },
      { id: 'gh', label: 'GitHub', hint: 'Kelly-Buabeng', group: 'Connect', run: external(profile.github) },
      { id: 'li', label: 'LinkedIn', hint: 'kellybuabeng', group: 'Connect', run: external(profile.linkedin) },
      {
        id: 'theme',
        label: `Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} theme`,
        hint: 'Appearance',
        group: 'Settings',
        keywords: 'dark light mode',
        run: () => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark'),
      },
    ]
  }, [router, resolvedTheme, setTheme])

  let results = useMemo(() => {
    let q = query.trim().toLowerCase()
    if (!q) return actions
    return actions.filter((a) =>
      q.split(/\s+/).every((word) =>
        `${a.label} ${a.hint} ${a.keywords ?? ''} ${a.group}`.toLowerCase().includes(word),
      ),
    )
  }, [actions, query])

  useEffect(() => setActive(0), [query])
  useEffect(() => {
    if (!isOpen) setQuery('')
  }, [isOpen])
  useEffect(() => {
    listRef.current?.querySelector(`[data-index="${active}"]`)?.scrollIntoView({ block: 'nearest' })
  }, [active])

  function select(action?: Action) {
    if (!action) return
    onClose()
    action.run()
  }

  function onKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      setActive((i) => Math.min(i + 1, results.length - 1))
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      setActive((i) => Math.max(i - 1, 0))
    } else if (event.key === 'Enter') {
      event.preventDefault()
      select(results[active])
    }
  }

  let lastGroup: string | undefined

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-ink/30 backdrop-blur-sm" aria-hidden="true" />
      <div className="fixed inset-0 flex items-start justify-center px-4 pt-[12vh]">
        <DialogPanel className="w-full max-w-xl overflow-hidden rounded-[var(--radius-card)] border border-line bg-surface shadow-2xl">
          <div className="flex items-center gap-3 border-b border-line px-4">
            <SearchIcon className="h-5 w-5 flex-none text-muted" />
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder="Search pages, projects, links…"
              aria-label="Search"
              role="combobox"
              aria-expanded="true"
              aria-controls="palette-list"
              aria-activedescendant={results[active] ? `palette-${results[active].id}` : undefined}
              className="h-14 w-full bg-transparent text-base text-ink outline-none placeholder:text-muted"
            />
            <kbd className="rounded-md border border-line px-1.5 font-mono text-xs text-muted">esc</kbd>
          </div>
          <ul ref={listRef} id="palette-list" role="listbox" className="max-h-[50vh] overflow-y-auto p-2">
            {results.length === 0 && (
              <li className="px-3 py-8 text-center text-sm text-muted">Nothing matches “{query}”.</li>
            )}
            {results.map((action, index) => {
              let header = action.group !== lastGroup ? action.group : null
              lastGroup = action.group
              return (
                <li key={action.id} role="presentation">
                  {header && (
                    <p className="px-3 pt-3 pb-1 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-muted">
                      {header}
                    </p>
                  )}
                  <div
                    id={`palette-${action.id}`}
                    role="option"
                    aria-selected={index === active}
                    data-index={index}
                    onMouseMove={() => setActive(index)}
                    onClick={() => select(action)}
                    className={clsx(
                      'flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5',
                      index === active ? 'bg-brand-soft' : '',
                    )}
                  >
                    <span className="flex-auto truncate text-[0.95rem] text-ink">{action.label}</span>
                    <span className="hidden truncate font-mono text-xs text-muted sm:block">{action.hint}</span>
                    <ArrowRightIcon
                      className={clsx('h-4 w-4 flex-none', index === active ? 'text-ink' : 'text-transparent')}
                    />
                  </div>
                </li>
              )
            })}
          </ul>
          <div className="flex gap-4 border-t border-line px-4 py-2.5 font-mono text-[0.7rem] text-muted">
            <span>↑↓ move</span>
            <span>↵ open</span>
            <span className="ml-auto">⌘K / Ctrl K</span>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  )
}
