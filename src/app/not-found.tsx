import { Container } from '@/components/Container'
import { ArrowRightIcon } from '@/components/Icons'
import { Button } from '@/components/ui/Button'

export default function NotFound() {
  return (
    <Container className="flex flex-col items-start py-32">
      <p className="font-mono text-sm text-brand">404 · route not found</p>
      <h1 className="mt-4 text-5xl font-semibold tracking-tight sm:text-7xl">Nothing lives here.</h1>
      <p className="mt-5 max-w-md text-lg text-muted">
        The page may have moved in the redesign. Try the home page, or press ⌘K to jump anywhere.
      </p>
      <Button href="/" className="mt-8">
        Back home <ArrowRightIcon className="h-4 w-4" />
      </Button>
    </Container>
  )
}
