import Image from 'next/image'

import { ContactPanel } from '@/components/ContactPanel'
import { Container } from '@/components/Container'
import { ArrowRightIcon, DownloadIcon, GitHubIcon, LinkedInIcon, PinIcon } from '@/components/Icons'
import { ProjectCard } from '@/components/ProjectCard'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Tag } from '@/components/ui/Tag'
import {
  achievements,
  certifications,
  education,
  experience,
  highlights,
  profile,
  projects,
  skills,
} from '@/lib/data'
import nasaCertificate from '@/images/nasa-certificate.jpg'
import portrait from '@/images/portrait.jpg'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="dot-grid pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
        aria-hidden="true"
      />
      <Container className="relative grid items-center gap-12 pt-12 pb-16 sm:pt-20 lg:grid-cols-[1.35fr_1fr] lg:gap-16 lg:pb-24">
        <div className="rise">
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface py-1 pr-3 pl-2 text-xs sm:text-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand" />
            </span>
            {profile.availability}
          </p>
          <h1 className="mt-7 text-display font-semibold">
            Kelly
            <br />
            Buabeng<span className="text-brand">.</span>
          </h1>
          <p className="mt-6 flex flex-wrap gap-x-3 gap-y-1 font-mono text-sm text-muted">
            {profile.roles.map((r, i) => (
              <span key={r} className="flex items-center gap-3">
                {i > 0 && <span className="h-1 w-1 rounded-full bg-gold" aria-hidden="true" />}
                {r}
              </span>
            ))}
          </p>
          <p className="mt-6 max-w-xl text-xl leading-snug text-balance sm:text-2xl">{profile.headline}</p>
          <p className="mt-4 max-w-xl text-muted">{profile.summary}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href="/#work">
              See my work <ArrowRightIcon className="h-4 w-4" />
            </Button>
            <Button href={profile.cv} variant="outline" target="_blank">
              Download CV <DownloadIcon className="h-4 w-4" />
            </Button>
            <div className="ml-1 flex items-center gap-1">
              <a
                href={profile.github}
                aria-label="GitHub"
                className="grid h-11 w-11 place-items-center rounded-full text-muted transition hover:bg-surface-2 hover:text-ink"
              >
                <GitHubIcon className="h-5 w-5" />
              </a>
              <a
                href={profile.linkedin}
                aria-label="LinkedIn"
                className="grid h-11 w-11 place-items-center rounded-full text-muted transition hover:bg-surface-2 hover:text-ink"
              >
                <LinkedInIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="rise relative mx-auto w-full max-w-sm lg:max-w-none" style={{ animationDelay: '120ms' }}>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-line bg-surface-2">
            <Image
              src={portrait}
              alt="Portrait of Kelly Buabeng"
              priority
              placeholder="blur"
              sizes="(min-width: 1024px) 28rem, 24rem"
              className="h-full w-full object-cover object-[50%_20%]"
            />
            <div className="absolute inset-x-3 bottom-3 flex items-center justify-between rounded-xl bg-paper/85 px-3 py-2 font-mono text-xs backdrop-blur">
              <span className="flex items-center gap-1.5">
                <PinIcon className="h-3.5 w-3.5 text-brand" />
                {profile.location}
              </span>
              <span className="text-muted">5.6°N 0.19°W</span>
            </div>
          </div>
          <div className="absolute -top-4 -left-4 rotate-[-4deg] rounded-2xl bg-gold px-4 py-3 text-on-gold shadow-lg sm:-left-8">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em]">NASA Space Apps 2025</p>
            <p className="text-lg font-semibold leading-tight">Top 2 · Ghana</p>
          </div>
        </div>
      </Container>
    </section>
  )
}

function Highlights() {
  return (
    <Container>
      <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius-card)] border border-line bg-line lg:grid-cols-4">
        {highlights.map((h) => (
          <div key={h.label} className="flex flex-col gap-1 bg-surface p-6 sm:p-8">
            <dt className="order-2 text-sm text-muted">{h.label}</dt>
            <dd className="order-1 text-4xl font-semibold tracking-tight sm:text-5xl">{h.value}</dd>
          </div>
        ))}
      </dl>
    </Container>
  )
}

function Work() {
  let featured = projects.filter((p) => p.featured)
  let [lead, ...rest] = featured

  return (
    <Container id="work" className="scroll-mt-20 pt-28">
      <SectionHeading
        index="01"
        eyebrow="Selected work"
        title="Systems that see, decide and serve."
        lead="Computer vision in production, ML that placed nationally, and agents that act on their own — mostly Python, always with an API in front."
        action={
          <Button href="/projects" variant="outline" size="sm">
            All {projects.length} projects <ArrowRightIcon className="h-4 w-4" />
          </Button>
        }
      />
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        <ProjectCard project={lead} large className="md:col-span-2" />
        {rest.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </Container>
  )
}

function Experience() {
  return (
    <Container id="experience" className="scroll-mt-20 pt-28">
      <SectionHeading
        index="02"
        eyebrow="Experience"
        title="Four internships across software, infrastructure and security."
        action={
          <Button href={profile.cv} variant="outline" size="sm" target="_blank">
            Full CV <DownloadIcon className="h-4 w-4" />
          </Button>
        }
      />
      <ol className="mt-12 border-t border-line">
        {experience.map((job) => (
          <li
            key={job.company}
            className="grid gap-4 border-b border-line py-8 md:grid-cols-[12rem_1fr] md:gap-10"
          >
            <p className="font-mono text-sm text-muted">
              <time>{job.start}</time> — <time>{job.end}</time>
            </p>
            <div>
              <h3 className="text-xl font-semibold tracking-tight">
                {job.role} <span className="text-muted">· {job.company}</span>
              </h3>
              <ul className="mt-4 grid gap-2 text-[0.95rem] lg:grid-cols-2 lg:gap-x-8">
                {job.points.map((pt) => (
                  <li key={pt} className="flex gap-3">
                    <span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-brand" aria-hidden="true" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
              <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Focus areas">
                {job.tags.map((t) => (
                  <li key={t}>
                    <Tag>{t}</Tag>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Container>
  )
}

function Skills() {
  return (
    <Container id="skills" className="scroll-mt-20 pt-28">
      <SectionHeading index="03" eyebrow="Toolkit" title="What I reach for." />
      <div className="mt-12 grid gap-px overflow-hidden rounded-[var(--radius-card)] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s) => (
          <div key={s.group} className="bg-surface p-6">
            <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-muted">{s.group}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {s.items.map((item) => (
                <li key={item} className="rounded-lg bg-surface-2 px-2.5 py-1 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Container>
  )
}

function Recognition() {
  return (
    <Container id="recognition" className="scroll-mt-20 pt-28">
      <SectionHeading index="04" eyebrow="Recognition & learning" title="Proof, not just claims." />
      <div className="mt-12 grid gap-5 lg:grid-cols-[1.2fr_1fr]">
        <figure className="overflow-hidden rounded-[var(--radius-card)] border border-line bg-surface">
          <Image
            src={nasaCertificate}
            alt="NASA International Space Apps Challenge 2025 Galactic Problem Solver certificate awarded to Kelly Buabeng"
            placeholder="blur"
            sizes="(min-width: 1024px) 36rem, 100vw"
            className="w-full"
          />
          <figcaption className="flex flex-col gap-4 p-6 sm:p-7">
            {achievements.map((a) => (
              <div key={a.title}>
                <p className="flex flex-wrap items-baseline justify-between gap-2">
                  <span className="font-semibold">{a.title}</span>
                  <span className="font-mono text-xs text-muted">{a.date}</span>
                </p>
                <p className="mt-1 text-sm font-medium text-brand">{a.result}</p>
                <p className="mt-1 text-sm text-muted">{a.text}</p>
              </div>
            ))}
          </figcaption>
        </figure>
        <div className="flex flex-col gap-5">
          <div className="rounded-[var(--radius-card)] border border-line bg-surface p-6 sm:p-7">
            <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-muted">Education</h3>
            <ul className="mt-5 space-y-5">
              {education.map((e) => (
                <li key={e.school}>
                  <p className="font-semibold">{e.school}</p>
                  <p className="text-sm text-muted">{e.degree}</p>
                  <p className="mt-1 font-mono text-xs text-muted">{e.years}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[var(--radius-card)] border border-line bg-surface p-6 sm:p-7">
            <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-muted">Certifications</h3>
            <ul className="mt-5 divide-y divide-line">
              {certifications.map((c) => (
                <li key={c.name} className="flex items-baseline justify-between gap-4 py-3 first:pt-0 last:pb-0">
                  <span>
                    <span className="font-semibold">{c.name}</span>
                    <span className="block text-sm text-muted">{c.issuer}</span>
                  </span>
                  {c.note && <span className="flex-none font-mono text-xs text-muted">{c.note}</span>}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <Highlights />
      <Work />
      <Experience />
      <Skills />
      <Recognition />
      <ContactPanel />
    </>
  )
}
