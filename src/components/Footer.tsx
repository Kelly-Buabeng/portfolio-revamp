import Link from 'next/link'

import { Container } from '@/components/Container'
import { ArrowUpRightIcon, GitHubIcon, LinkedInIcon, MailIcon } from '@/components/Icons'
import { nav, profile } from '@/lib/data'

export function Footer() {
  return (
    <footer className="mt-32 border-t border-line">
      <Container className="grid gap-10 py-12 md:grid-cols-[1fr_auto_auto] md:gap-16">
        <div>
          <p className="text-2xl font-semibold tracking-tight">{profile.name}</p>
          <p className="mt-2 max-w-sm text-sm text-muted">
            {profile.roles.join(' · ')} — based in {profile.location}.
          </p>
        </div>
        <nav aria-label="Footer">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">Pages</p>
          <ul className="mt-4 space-y-2 text-sm">
            {[{ href: '/', label: 'Home' }, { href: '/projects', label: 'Projects' }, ...nav.slice(2)].map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-brand">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">Elsewhere</p>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              { href: profile.github, label: 'GitHub', icon: GitHubIcon },
              { href: profile.linkedin, label: 'LinkedIn', icon: LinkedInIcon },
              { href: `mailto:${profile.email}`, label: 'Email', icon: MailIcon },
            ].map(({ href, label, icon: Icon }) => (
              <li key={label}>
                <a href={href} className="group inline-flex items-center gap-2 hover:text-brand">
                  <Icon className="h-4 w-4" />
                  {label}
                  <ArrowUpRightIcon className="h-3.5 w-3.5 opacity-0 transition group-hover:opacity-100" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <Container className="flex flex-col gap-2 border-t border-line py-6 font-mono text-xs text-muted sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>Built with Next.js & Tailwind · Press ⌘K to navigate</p>
      </Container>
    </footer>
  )
}
