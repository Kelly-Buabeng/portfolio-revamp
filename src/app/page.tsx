'use client'

import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'

// Icons for the details section
function ServerIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M4 10h16v4H4zM4 18h16v4H4zM4 2h16v4H4z" fill="currentColor" opacity="0.5"/>
      <path d="M4 6h16v2H4zM4 14h16v2H4z" fill="currentColor"/>
    </svg>
  )
}

function CloudIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M18.42 9.22a5.98 5.98 0 00-10.84 0A6.98 6.98 0 007 23h11a5.99 5.99 0 00.42-11.97v-.01c-.33-.53-.78-.99-1.32-1.34l-.68-.46z" fill="currentColor" />
    </svg>
  )
}

function ChipIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M7 16V8l5-3 5 3v8l-5 3-5-3z" fill="currentColor"/>
    </svg>
  )
}

function ArrowRightIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6.75 3.25L10.25 8l-3.5 4.75"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

// Hero Section
function Hero() {
  return (
    <Container className="mt-28 sm:mt-40 md:mt-48 text-center">
      <FadeInStagger className="max-w-3xl mx-auto">
        <FadeIn>
          <h1 className="font-display text-5xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-7xl leading-tight">
            Building Scalable Backends & Cloud Solutions.
          </h1>
        </FadeIn>
        
        <FadeIn>
          <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            I'm Kelly, a Computer Science student and Backend Developer. I verify business logic, architect cloud infrastructure, and build robust APIs that power modern applications.
          </p>
        </FadeIn>

        <FadeIn>
          <div className="mt-10 flex justify-center gap-x-6">
            <Link
              href="/kelly@cv.pdf"
              target="_blank"
              className="group inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 shadow-lg shadow-zinc-800/20 dark:shadow-white/10"
            >
              Download Resume
              <ArrowRightIcon className="h-4 w-4 stroke-white dark:stroke-zinc-900 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800"
            >
              Contact Me
            </Link>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mt-12 flex justify-center gap-6 opacity-60 hover:opacity-100 transition-opacity">
            <Link href="https://github.com/Kelly-Buabeng" target="_blank">
              <GitHubIcon className="h-6 w-6 fill-zinc-500 dark:fill-zinc-400 hover:fill-zinc-900 dark:hover:fill-zinc-100 transition-colors" />
            </Link>
            <Link href="https://www.linkedin.com/in/kellybuabeng/" target="_blank">
              <LinkedInIcon className="h-6 w-6 fill-zinc-500 dark:fill-zinc-400 hover:fill-teal-600 dark:hover:fill-teal-400 transition-colors" />
            </Link>
          </div>
        </FadeIn>
      </FadeInStagger>
    </Container>
  )
}

function Feature({
  name,
  description,
  icon: Icon,
}: {
  name: string
  description: string
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <FadeIn>
      <div className="relative pl-16 group">
        <div className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900/5 dark:bg-white/5 ring-1 ring-zinc-900/10 dark:ring-white/10 group-hover:ring-teal-500/50 transition-all">
          <Icon className="h-6 w-6 text-zinc-700 dark:text-zinc-300 group-hover:text-teal-500 transition-colors" />
        </div>
        <h3 className="text-base font-semibold leading-7 text-zinc-900 dark:text-white">
          {name}
        </h3>
        <p className="mt-2 text-base leading-7 text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
      </div>
    </FadeIn>
  )
}

function WhatIDo() {
  return (
    <Container className="mt-32 sm:mt-40">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
              What I Do
            </h2>
            <p className="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Transforming complex problems into efficient, scalable software solutions.
            </p>
          </div>
        </FadeIn>
        
        <FadeInStagger faster className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
             <Feature 
               name="Backend Development" 
               description="Designing robust APIs and data architectures using Python (Django, Flask, FastAPI) and Node.js." 
               icon={ServerIcon}
             />
             <Feature 
               name="Cloud Infrastructure" 
               description="Deploying and managing scalable applications using AWS, Azure, and modern DevOps practices." 
               icon={CloudIcon}
             />
             <Feature 
               name="System Optimization" 
               description="Enhancing performance and security for tailored solutions, from ML integrations to expert systems." 
               icon={ChipIcon}
             />
        </FadeInStagger>
      </div>
    </Container>
  )
}

function ProjectCard({ project }: { project: any }) {
  return (
    <FadeIn className="flex flex-col overflow-hidden rounded-3xl bg-white/50 backdrop-blur-sm dark:bg-zinc-800/50 shadow-sm ring-1 ring-zinc-900/5 dark:ring-white/10 hover:ring-teal-500/50 dark:hover:ring-teal-400/50 transition-all duration-300 hover:shadow-md">
      <div className="flex flex-1 flex-col p-8">
        <h3 className="mt-2 text-xl font-semibold text-zinc-900 dark:text-white">
          <Link href={project.link.href} target="_blank">
            <span className="absolute inset-0" />
            {project.name}
          </Link>
        </h3>
        <p className="mt-4 flex flex-auto text-base text-zinc-600 dark:text-zinc-400">
          {project.description}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
           {project.tech.split(', ').map((t: string) => (
             <span key={t} className="inline-flex items-center rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-600 ring-1 ring-inset ring-zinc-500/10 dark:bg-zinc-700/50 dark:text-zinc-300 dark:ring-zinc-400/20">
               {t}
             </span>
           ))}
        </div>
        <div className="mt-6 flex items-center gap-x-2 text-sm font-semibold text-teal-600 dark:text-teal-400">
          View Project <ArrowRightIcon className="h-4 w-4 stroke-current" />
        </div>
      </div>
    </FadeIn>
  )
}

function SelectedProjects() {
  const projects = [
    {
      name: 'Exoplanet Classification ML Model',
      description: 'Machine learning model using NASA datasets to identify and classify exoplanets with advanced data processing.',
      link: { href: 'https://github.com/Kelly-Buabeng/NASA-SpaceApps-Hack-ml-exoplanets-Backend-Optimisation' },
      tech: 'FastAPI, Jupyter, ML',
    },
    {
      name: 'Expert System - Illegal Mining',
      description: 'AI system determining pollution risks from illegal mining using logic programming and web technologies.',
      link: { href: 'https://github.com/Kelly-Buabeng/expert-system--illegal-mining-' },
      tech: 'React, Python, Prolog',
    },
    {
      name: 'ChatBot Application',
      description: 'Real-time conversational agent built with Node.js and React, integrated with ChatEngine API.',
      link: { href: 'https://github.com/Kelly-Buabeng/ChatBot' },
      tech: 'Node.js, React, Axios',
    }
  ]
  
  return (
    <Container className="mt-32 sm:mt-40">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <FadeIn>
          <div className="flex items-center justify-between border-b border-zinc-100 pb-8 dark:border-zinc-800">
             <div>
                <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
                  Selected Work
                </h2>
                <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
                  Projects that define my journey.
                </p>
             </div>
             <Link href="/projects" className="hidden sm:flex text-sm font-semibold text-teal-600 dark:text-teal-400 hover:text-teal-500">
                View all projects <span aria-hidden="true">→</span>
             </Link>
          </div>
        </FadeIn>
        <div className="mx-auto mt-16 max-w-2xl lg:mx-0 lg:max-w-none">
          <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </FadeInStagger>
        </div>
        <div className="mt-10 flex justify-center sm:hidden">
           <Link href="/projects" className="text-sm font-semibold text-teal-600 dark:text-teal-400 hover:text-teal-500">
              View all projects <span aria-hidden="true">→</span>
           </Link>
        </div>
      </div>
    </Container>
  )
}

function CTA() {
  return (
    <Container className="mt-32 sm:mt-40 mb-32">
       <FadeIn className="relative isolate overflow-hidden bg-zinc-900 dark:bg-zinc-800 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
         <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
           Ready to collaborate on something great?
         </h2>
         <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-zinc-300">
           Whether it's open source, a freelance project, or a full-time role, I'm always open to discussing new opportunities.
         </p>
         <div className="mt-10 flex items-center justify-center gap-x-6">
           <Link
             href="/contact"
             className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
           >
             Get in touch
           </Link>
           <Link href="/about" className="text-sm font-semibold leading-6 text-white hover:text-zinc-200">
             Read more about me <span aria-hidden="true">→</span>
           </Link>
         </div>
         <svg
           viewBox="0 0 1024 1024"
           className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
           aria-hidden="true"
         >
           <circle cx={512} cy={512} r={512} fill="url(#gradient)" fillOpacity="0.15" />
           <defs>
             <radialGradient id="gradient">
               <stop stopColor="#14b8a6" />
               <stop offset={1} stopColor="#14b8a6" />
             </radialGradient>
           </defs>
         </svg>
       </FadeIn>
    </Container>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <WhatIDo />
      <SelectedProjects />
      <CTA />
    </>
  )
}
