import clsx from 'clsx'

import { ArrowUpRightIcon, GitHubIcon } from '@/components/Icons'
import { Tag } from '@/components/ui/Tag'
import { type Project } from '@/lib/data'

export function ProjectCard({
  project,
  large = false,
  showDetails = false,
  className,
}: {
  project: Project
  large?: boolean
  showDetails?: boolean
  className?: string
}) {
  return (
    <article
      id={project.slug}
      className={clsx(
        'group relative flex scroll-mt-24 flex-col rounded-[var(--radius-card)] border border-line bg-surface p-6 transition duration-300 sm:p-7',
        project.repo && 'hover:-translate-y-0.5 hover:border-ink',
        className,
      )}
    >
      <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-muted">
        <span>{project.year}</span>
        <span aria-hidden="true">/</span>
        <span>{project.categories.join(', ')}</span>
        {project.badge && (
          <Tag tone={project.status === 'Award' ? 'gold' : 'brand'} className="ml-auto">
            {project.badge}
          </Tag>
        )}
        {!project.badge && project.status && (
          <Tag tone="brand" className="ml-auto">
            {project.status}
          </Tag>
        )}
      </div>
      <h3 className={clsx('mt-5 font-semibold tracking-tight', large ? 'text-3xl sm:text-4xl' : 'text-xl')}>
        {project.repo ? (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="after:absolute after:inset-0 after:rounded-[var(--radius-card)]"
          >
            {project.name}
          </a>
        ) : (
          project.name
        )}
      </h3>
      <p className={clsx('mt-3 text-muted', large ? 'max-w-xl text-lg' : 'text-[0.95rem]')}>{project.blurb}</p>
      {(showDetails || large) && project.details.length > 0 && (
        <ul className="mt-5 space-y-2 text-[0.95rem]">
          {project.details.map((d) => (
            <li key={d} className="flex gap-3">
              <span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-brand" aria-hidden="true" />
              <span>{d}</span>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-auto flex items-end justify-between gap-4 pt-6">
        <ul className="flex flex-wrap gap-1.5" aria-label="Tech stack">
          {project.stack.map((s) => (
            <li key={s}>
              <Tag>{s}</Tag>
            </li>
          ))}
        </ul>
        {project.repo ? (
          <span className="flex flex-none items-center gap-1.5 text-sm font-medium text-ink">
            <GitHubIcon className="h-4 w-4" />
            <span className="sr-only sm:not-sr-only">Code</span>
            <ArrowUpRightIcon className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        ) : (
          <span className="flex-none font-mono text-xs text-muted">Private</span>
        )}
      </div>
    </article>
  )
}
