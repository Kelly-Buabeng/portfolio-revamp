import { type Metadata } from 'next'

import { ContactForm } from '@/components/ContactForm'
import { Container } from '@/components/Container'
import { ArrowUpRightIcon, DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon } from '@/components/Icons'
import { CopyEmail } from '@/components/ui/CopyEmail'
import { Eyebrow } from '@/components/ui/SectionHeading'
import { profile } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Kelly Buabeng about backend, data science, ML or cybersecurity roles and projects.',
  alternates: { canonical: '/contact' },
}

const channels = [
  { href: `mailto:${profile.email}`, label: 'Email', value: profile.email, icon: MailIcon },
  { href: profile.linkedin, label: 'LinkedIn', value: 'in/kellybuabeng', icon: LinkedInIcon },
  { href: profile.github, label: 'GitHub', value: '@Kelly-Buabeng', icon: GitHubIcon },
  { href: profile.cv, label: 'CV', value: 'Download PDF', icon: DownloadIcon },
]

export default function Contact() {
  return (
    <Container className="grid gap-14 pt-16 sm:pt-24 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
      <div>
        <Eyebrow>Contact</Eyebrow>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-balance sm:text-6xl">Let’s build something useful.</h1>
        <p className="mt-6 max-w-lg text-lg text-muted">
          I’m open to graduate and junior roles in backend engineering, data science & ML, computer vision and
          cybersecurity — hybrid or remote. Collaborations and hackathon teams welcome too.
        </p>
        <CopyEmail email={profile.email} className="mt-8" />
        <ul className="mt-10 divide-y divide-line border-y border-line">
          {channels.map(({ href, label, value, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith('http') || href.endsWith('.pdf') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="group flex items-center gap-4 py-4"
              >
                <span className="grid h-10 w-10 place-items-center rounded-full bg-surface-2">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="flex-auto">
                  <span className="block font-mono text-xs uppercase tracking-[0.14em] text-muted">{label}</span>
                  <span className="block">{value}</span>
                </span>
                <ArrowUpRightIcon className="h-5 w-5 text-muted transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink" />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <ContactForm />
    </Container>
  )
}
