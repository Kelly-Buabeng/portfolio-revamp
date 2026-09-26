import { type Metadata } from 'next'
import Image, { type StaticImageData } from 'next/image'
import clsx from 'clsx'

import { ContactPanel } from '@/components/ContactPanel'
import { Container } from '@/components/Container'
import { DownloadIcon } from '@/components/Icons'
import { Button } from '@/components/ui/Button'
import { Eyebrow } from '@/components/ui/SectionHeading'
import { Tag } from '@/components/ui/Tag'
import { profile } from '@/lib/data'
import campus from '@/images/gallery/campus.jpg'
import concert from '@/images/gallery/concert.jpg'
import culture from '@/images/gallery/culture.jpg'
import family from '@/images/gallery/family.jpg'
import mumAndMe from '@/images/gallery/mum-and-me.jpg'
import nightOut from '@/images/gallery/night-out.jpg'
import portrait from '@/images/portrait.jpg'

export const metadata: Metadata = {
  title: 'About',
  description:
    'About Kelly Buabeng — a Computer Science with Statistics student at the University of Ghana working across backend engineering, machine learning and cybersecurity.',
  alternates: { canonical: '/about' },
}

const principles = [
  {
    title: 'Secure by default',
    text: 'Time in aviation and energy IT taught me that uptime and security are features, not afterthoughts.',
  },
  {
    title: 'Measure, then optimise',
    text: 'Whether it’s a slow SQL query or DNS latency, I profile first and let the numbers pick the fix.',
  },
  {
    title: 'Local problems, real data',
    text: 'Potholes, dumsor, galamsey — I like building for the challenges people around me actually face.',
  },
]

const gallery: { src: StaticImageData; alt: string; className?: string }[] = [
  { src: campus, alt: 'Walking along a tree-lined road on campus', className: 'row-span-2' },
  { src: mumAndMe, alt: 'Childhood photo: baby Kelly with mum' },
  { src: concert, alt: 'Crowd at a concert with a neon stage set', className: 'row-span-2' },
  { src: family, alt: 'Family photo from childhood' },
  { src: culture, alt: 'Outdoor cultural event under a draped canopy', className: 'md:row-span-2' },
  { src: nightOut, alt: 'A warm-lit evening out with friends' },
]

export default function About() {
  return (
    <>
      <Container className="grid gap-12 pt-16 sm:pt-24 lg:grid-cols-[1fr_22rem] lg:gap-20">
        <div>
          <Eyebrow>About</Eyebrow>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
            Curious about how things work — then building my own.
          </h1>
          <div className="mt-8 max-w-2xl space-y-5 text-lg text-muted">
            <p>
              I’m Kelly, a final-year Computer Science with Statistics student at the University of Ghana, living in
              Accra. I started by taking things apart to see how they worked; programming let me put them back together
              as tools that actually help.
            </p>
            <p>
              Most of my work lives on the backend: Python services, REST APIs and the databases underneath them. The
              statistics half of my degree pulled me into data science and machine learning, and internships at
              TotalEnergies and the Ghana Civil Aviation Authority grounded me in infrastructure and security.
            </p>
            <p>
              Right now I’m finishing a YOLOv8 pothole-detection system for Ghana’s roads, studying applied data science
              with WorldQuant University, and looking for a team where I can build secure, scalable, data-driven
              products.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={profile.cv} target="_blank">
              Download CV <DownloadIcon className="h-4 w-4" />
            </Button>
            <Button href="/projects" variant="outline">
              Browse projects
            </Button>
          </div>
        </div>
        <aside className="lg:pt-10">
          <div className="overflow-hidden rounded-[1.75rem] border border-line">
            <Image
              src={portrait}
              alt="Portrait of Kelly Buabeng"
              placeholder="blur"
              sizes="22rem"
              className="aspect-[4/5] w-full object-cover object-[50%_20%]"
            />
          </div>
          <dl className="mt-6 space-y-4 text-sm">
            {[
              ['Based in', profile.location],
              ['Studying', 'BSc Computer Science with Statistics, University of Ghana'],
              ['Speaks', profile.languages.join(', ')],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between gap-6 border-b border-line pb-4">
                <dt className="font-mono text-xs uppercase tracking-[0.14em] text-muted">{k}</dt>
                <dd className="text-right">{v}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-6 flex flex-wrap gap-1.5">
            {['Backend', 'ML & CV', 'Cybersecurity', 'Data Science'].map((t) => (
              <Tag key={t} tone="brand">
                {t}
              </Tag>
            ))}
          </div>
        </aside>
      </Container>

      <Container className="pt-28">
        <Eyebrow index="→">How I work</Eyebrow>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {principles.map((p, i) => (
            <div key={p.title} className="rounded-[var(--radius-card)] border border-line bg-surface p-7">
              <p className="font-mono text-sm text-brand">0{i + 1}</p>
              <h2 className="mt-6 text-xl font-semibold tracking-tight">{p.title}</h2>
              <p className="mt-2 text-muted">{p.text}</p>
            </div>
          ))}
        </div>
      </Container>

      <Container className="pt-28">
        <Eyebrow index="→">Away from the keyboard</Eyebrow>
        <h2 className="mt-5 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Family, campus walks, live music and Accra nights.
        </h2>
        <div className="mt-10 grid grid-flow-dense auto-rows-[9rem] grid-cols-2 gap-3 sm:auto-rows-[12rem] md:grid-cols-3">
          {gallery.map((g) => (
            <div key={g.alt} className={clsx('relative overflow-hidden rounded-2xl bg-surface-2', g.className)}>
              <Image
                src={g.src}
                alt={g.alt}
                placeholder="blur"
                fill
                sizes="(min-width: 768px) 22rem, 50vw"
                className="object-cover transition duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </Container>

      <ContactPanel />
    </>
  )
}
