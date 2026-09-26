'use client'

import { useState } from 'react'
import clsx from 'clsx'

import { CheckIcon, CopyIcon } from '@/components/Icons'

export function CopyEmail({
  email,
  inverted = false,
  className,
}: {
  email: string
  inverted?: boolean
  className?: string
}) {
  let [copied, setCopied] = useState(false)

  async function copy() {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${email}`
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className={clsx(
        'group inline-flex items-center gap-2 rounded-full border px-4 py-2 font-mono text-sm transition',
        inverted
          ? 'border-paper/30 text-paper hover:border-paper'
          : 'border-line bg-surface text-ink hover:border-ink',
        className,
      )}
    >
      <span>{email}</span>
      {copied ? (
        <CheckIcon className="h-4 w-4" />
      ) : (
        <CopyIcon className="h-4 w-4 opacity-60 group-hover:opacity-100" />
      )}
      <span className="sr-only" aria-live="polite">
        {copied ? 'Email copied' : 'Copy email'}
      </span>
    </button>
  )
}
