import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-full w-full flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-brand focus:px-3 focus:py-2 focus:text-on-brand"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" className="flex-auto">
        {children}
      </main>
      <Footer />
    </div>
  )
}
