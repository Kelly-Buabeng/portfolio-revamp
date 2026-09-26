import { type Metadata } from 'next'

import { ContactPanel } from '@/components/ContactPanel'
import { Container } from '@/components/Container'
import { GitHubIcon } from '@/components/Icons'
import { ProjectExplorer } from '@/components/ProjectExplorer'
import { Button } from '@/components/ui/Button'
import { Eyebrow } from '@/components/ui/SectionHeading'
import { profile } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Projects by Kelly Buabeng: YOLOv8 pothole detection, NASA Space Apps exoplanet classifier, multi-agent wildfire response, DNS latency modelling and more.',
  alternates: { canonical: '/projects' },
}

export default function Projects() {
  return (
    <>
      <Container className="pt-16 sm:pt-24">
        <Eyebrow>Projects</Eyebrow>
        <div className="mt-5 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
            Things I’ve built, trained and shipped.
          </h1>
          <Button href={`${profile.github}?tab=repositories`} variant="outline" target="_blank" rel="noopener noreferrer">
            <GitHubIcon className="h-4 w-4" /> Everything on GitHub
          </Button>
        </div>
        <p className="mt-6 max-w-2xl text-lg text-muted">
          From computer vision on Ghana’s roads to agents that manage load-shedding. Filter by area or search for a
          technology.
        </p>
      </Container>
      <Container className="pt-12">
        <ProjectExplorer />
      </Container>
      <ContactPanel />
    </>
  )
}
