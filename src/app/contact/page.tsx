import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import {
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/contact.jpg'

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function SocialLink({
  icon: Icon,
  href,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>
  href: string
  children: React.ReactNode
}) {
  return (
    <Link href={href} className="group" target="_blank" rel="noopener noreferrer">
      <div className="flex items-center gap-4 rounded-2xl border border-zinc-100 p-6 transition hover:border-teal-500 dark:border-zinc-700/40 dark:hover:border-teal-400">
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500 dark:fill-zinc-400 dark:group-hover:fill-teal-400" />
        <div className="flex flex-col">
          <h2 className="text-base font-semibold text-zinc-800 transition group-hover:text-teal-500 dark:text-zinc-100 dark:group-hover:text-teal-400">
            {children}
          </h2>
        </div>
      </div>
    </Link>
  )
}

function EmailLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link href={href} className="group">
      <div className="flex items-center gap-4 rounded-2xl border border-zinc-100 p-6 transition hover:border-teal-500 dark:border-zinc-700/40 dark:hover:border-teal-400">
        <MailIcon className="h-6 w-6 flex-none" />
        <div className="flex flex-col">
          <h2 className="text-base font-semibold text-zinc-800 transition group-hover:text-teal-500 dark:text-zinc-100 dark:group-hover:text-teal-400">
            {children}
          </h2>
        </div>
      </div>
    </Link>
  )
}

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with me.',
}

export default function Contact() {
  return (
    <Container className="mt-16 sm:mt-32">
      <FadeIn className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-lg px-2.5 lg:max-w-xl">
            <Image
              src={portraitImage}
              alt="Kelly Buabeng"
              sizes="(min-width: 1024px) 48rem, 32rem"
              className="aspect-square rounded-2xl bg-zinc-100 object-cover object-center dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Let's work together
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I'm always interested in new opportunities and collaborations. Whether you have a project in mind, want to discuss technology, or just want to connect, I'd love to hear from you.
            </p>
            <p>
              As a Computer Science student passionate about backend development and cloud computing, I'm particularly interested in:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Backend development projects using Python</li>
              <li>Cloud infrastructure and automation</li>
              <li>AI and machine learning applications</li>
              <li>Full-stack development opportunities</li>
              <li>Open source contributions</li>
              <li>Internship and job opportunities</li>
            </ul>
            <p>
              Feel free to reach out through any of the channels below. I typically respond within 24 hours.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <div className="space-y-4">
            <EmailLink href="mailto:buabengkelly@gmail.com">
              Send me an email
            </EmailLink>
            <SocialLink
              href="https://github.com/Kelly-Buabeng"
              icon={GitHubIcon}
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/kellybuabeng/"
              icon={LinkedInIcon}
            >
              Connect on LinkedIn
            </SocialLink>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}