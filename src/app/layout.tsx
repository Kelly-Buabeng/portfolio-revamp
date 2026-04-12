import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import { AnimatedBackground } from '@/components/AnimatedBackground'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Kelly Buabeng',
    default: 'Kelly Buabeng - Computer Science Student & Backend Developer',
  },
  description:
    "I'm Kelly, a Computer Science student from Ghana specializing in backend development and cloud computing. Currently exploring AI/ML and building innovative solutions.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased font-sans" suppressHydrationWarning>
      <body className="flex h-full bg-transparent">
        <Providers>
          <AnimatedBackground />
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
