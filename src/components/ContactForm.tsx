'use client'

import { useState } from 'react'
import clsx from 'clsx'

import { ArrowRightIcon } from '@/components/Icons'
import { Button } from '@/components/ui/Button'
import { profile } from '@/lib/data'

const reasons = ['Job opportunity', 'Freelance project', 'Collaboration', 'Just saying hi']

const field =
  'w-full rounded-xl border border-line bg-paper px-4 py-3 text-ink outline-none transition placeholder:text-muted focus:border-ink'

export function ContactForm() {
  let [reason, setReason] = useState(reasons[0])

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    let data = new FormData(event.currentTarget)
    let name = String(data.get('name') ?? '').trim()
    let org = String(data.get('org') ?? '').trim()
    let message = String(data.get('message') ?? '').trim()
    let subject = `${reason}${org ? ` — ${org}` : ''}`
    let body = `${message}\n\n— ${name}${org ? `, ${org}` : ''}`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <form
      onSubmit={onSubmit}
      className="h-fit rounded-[1.75rem] border border-line bg-surface p-6 sm:p-9"
      aria-label="Write to Kelly"
    >
      <fieldset>
        <legend className="font-mono text-xs uppercase tracking-[0.14em] text-muted">What’s this about?</legend>
        <div className="mt-4 flex flex-wrap gap-2">
          {reasons.map((r) => (
            <button
              key={r}
              type="button"
              aria-pressed={reason === r}
              onClick={() => setReason(r)}
              className={clsx(
                'rounded-full border px-4 py-2 text-sm transition',
                reason === r ? 'border-ink bg-ink text-paper' : 'border-line hover:border-ink',
              )}
            >
              {r}
            </button>
          ))}
        </div>
      </fieldset>
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium">Your name</span>
          <input name="name" required autoComplete="name" className={clsx(field, 'mt-2')} />
        </label>
        <label className="block">
          <span className="text-sm font-medium">
            Company <span className="text-muted">(optional)</span>
          </span>
          <input name="org" autoComplete="organization" className={clsx(field, 'mt-2')} />
        </label>
      </div>
      <label className="mt-5 block">
        <span className="text-sm font-medium">Message</span>
        <textarea
          name="message"
          required
          rows={6}
          placeholder="A bit about the role or project…"
          className={clsx(field, 'mt-2 resize-y')}
        />
      </label>
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm text-muted">Opens your email app with this drafted.</p>
        <Button type="submit" variant="brand">
          Draft email <ArrowRightIcon className="h-4 w-4" />
        </Button>
      </div>
    </form>
  )
}
