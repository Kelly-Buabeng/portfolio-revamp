'use client'

import { useMemo, useState } from 'react'
import clsx from 'clsx'

import { SearchIcon } from '@/components/Icons'
import { ProjectCard } from '@/components/ProjectCard'
import { type Category, categories, projects } from '@/lib/data'

export function ProjectExplorer() {
  let [category, setCategory] = useState<Category | 'All'>('All')
  let [query, setQuery] = useState('')

  let visible = useMemo(() => {
    let q = query.trim().toLowerCase()
    return projects.filter(
      (p) =>
        (category === 'All' || p.categories.includes(category)) &&
        (!q || `${p.name} ${p.blurb} ${p.stack.join(' ')}`.toLowerCase().includes(q)),
    )
  }, [category, query])

  return (
    <>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0" role="group" aria-label="Filter by area">
          {(['All', ...categories] as const).map((c) => {
            let count = c === 'All' ? projects.length : projects.filter((p) => p.categories.includes(c)).length
            return (
              <button
                key={c}
                type="button"
                aria-pressed={category === c}
                onClick={() => setCategory(c)}
                className={clsx(
                  'flex flex-none items-center gap-2 rounded-full border px-4 py-2 text-sm transition',
                  category === c
                    ? 'border-ink bg-ink text-paper'
                    : 'border-line bg-surface text-ink hover:border-ink',
                )}
              >
                {c}
                <span className="font-mono text-xs opacity-70">{count}</span>
              </button>
            )
          })}
        </div>
        <label className="flex h-10 items-center gap-2 rounded-full border border-line bg-surface px-4 focus-within:border-ink lg:w-72">
          <SearchIcon className="h-4 w-4 text-muted" />
          <span className="sr-only">Search projects</span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name or tech…"
            className="w-full bg-transparent text-sm outline-none placeholder:text-muted"
          />
        </label>
      </div>
      <p className="mt-6 font-mono text-xs text-muted" aria-live="polite">
        Showing {visible.length} of {projects.length}
      </p>
      <div className="mt-4 grid gap-5 md:grid-cols-2">
        {visible.map((p) => (
          <ProjectCard key={p.slug} project={p} showDetails />
        ))}
      </div>
      {visible.length === 0 && (
        <p className="mt-10 rounded-[var(--radius-card)] border border-dashed border-line p-10 text-center text-muted">
          No projects match that search.
        </p>
      )}
    </>
  )
}
