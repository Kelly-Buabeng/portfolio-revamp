import { Container } from '@/components/Container'
import { ArrowRightIcon } from '@/components/Icons'
import { Button } from '@/components/ui/Button'
import { CopyEmail } from '@/components/ui/CopyEmail'
import { profile } from '@/lib/data'

export function ContactPanel() {
  return (
    <Container className="pt-28">
      <div className="relative overflow-hidden rounded-[1.75rem] bg-ink px-6 py-14 text-paper sm:px-12 sm:py-20">
        <div className="absolute -top-40 -right-40 h-72 w-72 rounded-full bg-brand sm:-top-24 sm:-right-24" aria-hidden="true" />
        <div className="absolute top-24 right-40 hidden h-24 w-24 rounded-full bg-gold lg:block" aria-hidden="true" />
        <div className="relative max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.14em] opacity-70">Let’s talk</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            Hiring for backend, data or security? I’d like to hear about it.
          </h2>
          <p className="mt-5 max-w-lg opacity-80">
            Open to graduate and junior roles in fintech, health-tech, govtech, telecoms — anywhere these
            skills make a difference, across Africa and beyond.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href={`mailto:${profile.email}`} variant="brand">
              Email me <ArrowRightIcon className="h-4 w-4" />
            </Button>
            <CopyEmail email={profile.email} inverted />
          </div>
        </div>
      </div>
    </Container>
  )
}
