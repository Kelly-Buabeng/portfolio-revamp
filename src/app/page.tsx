import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import image1 from '@/images/photos/IMG_1252.jpeg'
import image2 from '@/images/photos/IMG_4933.jpeg'
import image3 from '@/images/photos/NASA Space Apps Challenge_page-0001.jpg'
import image4 from '@/images/photos/IMG_4076.jpeg'
import image5 from '@/images/photos/IMG_4078.jpeg'

function WrenchScrewdriverIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
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
        d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" 
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowOutIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path 
        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
        strokeWidth="1.5"
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </svg>
  )
}

function BriefcaseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
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

function ArrowDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="m4.75 8.75 3.25 3.25 3.25-3.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Resume() {
  let resume = [
    {
      company: 'Ghana Civil Aviation Authority',
      title: 'IT/Cybersecurity Intern',
      logo: null,
      start: 'November 2025',
      end: 'Present',
    },
    {
      company: 'Zavs Labs',
      title: 'Software Engineering Full Stack Intern',
      logo: null,
      start: 'September 2025',
      end: 'Present',
    },
    {
      company: 'Total Energies Ghana',
      title: 'System Administrator / IT Intern',
      logo: null,
      start: 'March 2024',
      end: 'June 2024',
    },
    {
      company: 'Zormor',
      title: 'Software Engineering Intern and Researcher',
      logo: null,
      start: 'November 2023',
      end: 'March 2024',
    },
  ]

  return (
    <div className="rounded-3xl border border-zinc-100 p-6 dark:border-zinc-700/40 bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-800/50 dark:to-zinc-900/50">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none text-teal-500 dark:text-teal-400" />
        <span className="ml-3">Work Experience</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4 group">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 group-hover:ring-teal-500/20 transition-all">
              <div className="h-7 w-7 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">{role.company.charAt(0)}</span>
              </div>
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start} until ${role.end}`}
              >
                <time dateTime={role.start}>{role.start}</time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end}>{role.end}</time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Link
        href="/kelly@cv.pdf"
        className="group mt-6 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-teal-500 px-3 py-2 text-sm font-medium text-white outline-offset-2 transition hover:bg-teal-600 active:bg-teal-600 shadow-sm hover:shadow-md"
        target="_blank"
      >
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-white transition" />
      </Link>
    </div>
  )
}

function Projects() {
  const projects = [
    {
      name: 'Exoplanet Classification ML Model',
      description: 'Machine learning model using NASA datasets to identify and classify exoplanets with advanced data processing techniques',
      link: { href: 'https://github.com/Kelly-Buabeng/NASA-SpaceApps-Hack-ml-exoplanets-Backend-Optimisation', label: 'github.com' },
      tech: 'FastAPI, Jupyter Notebook, NASA Kepler Dataset, ML',
    },
    {
      name: 'Expert System - Illegal Mining',
      description: 'AI system using React, Python (Flask), and Prolog to assess pollution risks from illegal mining activities',
      link: { href: 'https://github.com/Kelly-Buabeng/expert-system--illegal-mining-', label: 'github.com' },
      tech: 'React, Python, Flask, Prolog',
    },
    {
      name: 'ChatBot Application',
      description: 'Real-time chatbot with Node.js backend and React frontend integrated with ChatEngine API',
      link: { href: 'https://github.com/Kelly-Buabeng/ChatBot', label: 'github.com' },
      tech: 'Node.js, Express, React, Axios',
    },
    {
      name: 'NHIS Redesign Project',
      description: 'HCI project redesigning Ghana\'s NHIS system for improved user experience and accessibility',
      link: { href: 'https://github.com/Kelly-Buabeng/DCIT302-HCIPROJECT-myNHISredesign', label: 'github.com' },
      tech: 'TypeScript, React, UX/UI Design',
    }
  ]

  return (
    <div className="rounded-3xl border border-zinc-100 p-6 dark:border-zinc-700/40 bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-800/50 dark:to-zinc-900/50">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <WrenchScrewdriverIcon className="h-6 w-6 flex-none text-teal-500 dark:text-teal-400" />
        <span className="ml-3">Recent Projects</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {projects.map((project, projectIndex) => (
          <li className="flex gap-4 group" key={projectIndex}>
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 group-hover:ring-teal-500/20 transition-all">
              <div className="h-7 w-7 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">{project.name.charAt(0)}</span>
              </div>
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Project</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {project.link.href === '#' ? (
                  <span className="text-zinc-600 dark:text-zinc-400">
                    {project.name} <span className="text-xs text-zinc-400 dark:text-zinc-500">(Repository coming soon)</span>
                  </span>
                ) : (
                  <Link 
                    href={project.link.href}
                    className="hover:text-teal-500 dark:hover:text-teal-400 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.name}
                  </Link>
                )}
              </dd>
              <dt className="sr-only">Description</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {project.description}
              </dd>
              <dt className="sr-only">Tech</dt>
              <dd className="text-xs text-zinc-400 dark:text-zinc-500" aria-label={project.tech}>
                {project.tech}
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Link 
        href="https://github.com/Kelly-Buabeng?tab=repositories"
        className="group mt-6 w-full inline-flex items-center justify-center gap-2 rounded-xl border border-teal-500/20 px-3 py-2 text-sm font-medium text-teal-600 dark:text-teal-400 outline-offset-2 transition hover:bg-teal-500/10 hover:border-teal-500/30 shadow-sm"
        target="_blank"
        rel="noopener noreferrer"
      >
        View All Projects
        <ArrowOutIcon className="h-4 w-4 stroke-teal-600 dark:stroke-teal-400 transition" />
      </Link>
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-2xl bg-zinc-100 sm:w-72 sm:rounded-3xl dark:bg-zinc-800',
              'ring-2 ring-teal-500/10 dark:ring-teal-400/10',
              'hover:ring-teal-500/30 dark:hover:ring-teal-400/30 transition-all duration-300',
              'hover:scale-105',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className={
                clsx(
                  "absolute inset-0 h-full w-full object-cover",
                  image === image4 && "object-center"
                )
              }
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100 bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent">
            Computer Science Student, Backend Developer, and Cloud Enthusiast
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            I'm Kelly, a Computer Science student in Accra, Ghana, passionate about backend development and cloud computing. I love building scalable solutions and exploring how technology can make complex processes more accessible to everyday users.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://github.com/Kelly-Buabeng"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/kellybuabeng/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            <Projects />
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}