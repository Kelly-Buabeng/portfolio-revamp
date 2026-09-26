import { type Metadata, type Viewport } from 'next'
import { JetBrains_Mono, Space_Grotesk } from 'next/font/google'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import { profile } from '@/lib/data'
import { siteUrl } from '@/lib/site'

import '@/styles/tailwind.css'

const grotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-grotesk', display: 'swap' })
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains', display: 'swap' })

const description =
  'Kelly Buabeng — backend engineer, data science & ML and cybersecurity, based in Accra, Ghana. NASA Space Apps 2025 Top 2 (Ghana). Projects, experience and CV.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: '%s · Kelly Buabeng',
    default: 'Kelly Buabeng — Backend Engineer · Data Science & ML · Cybersecurity',
  },
  description,
  keywords: [
    'Kelly Buabeng',
    'backend engineer',
    'software engineer Ghana',
    'data science',
    'machine learning',
    'computer vision',
    'cybersecurity',
    'FastAPI',
    'Python',
    'University of Ghana',
    'Accra',
  ],
  authors: [{ name: profile.name, url: profile.github }],
  creator: profile.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'profile',
    firstName: 'Kelly',
    lastName: 'Buabeng',
    siteName: profile.name,
    title: 'Kelly Buabeng — Backend Engineer · Data Science & ML',
    description,
    locale: 'en_GH',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kelly Buabeng — Backend Engineer · Data Science & ML',
    description,
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f4f2ec' },
    { media: '(prefers-color-scheme: dark)', color: '#0c0f0e' },
  ],
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  url: siteUrl,
  email: `mailto:${profile.email}`,
  jobTitle: 'Backend Engineer',
  address: { '@type': 'PostalAddress', addressLocality: 'Accra', addressCountry: 'GH' },
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'University of Ghana' },
  knowsAbout: ['Backend development', 'Machine learning', 'Computer vision', 'Data science', 'Cybersecurity'],
  sameAs: [profile.github, profile.linkedin],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${grotesk.variable} ${mono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  )
}
