import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://peterholic.com'),
  title: {
    default: 'Peter Holic | AI Adopcia pre Malé a Stredné Firmy',
    template: '%s | Peter Holic'
  },
  description: 'Pomáham firmám implementovať umelú inteligenciu do každodenných procesov. AI audit, konzultácie a implementácia pre malé a stredné firmy na Slovensku.',
  keywords: [
    'AI adopcia',
    'umelá inteligencia',
    'AI konzultácie',
    'AI audit',
    'AI implementácia',
    'automatizácia procesov',
    'digitálna transformácia',
    'AI pre firmy',
    'Slovensko',
    'malé a stredné firmy',
    'SME',
    'Peter Holic'
  ],
  authors: [{ name: 'Peter Holic', url: 'https://peterholic.com' }],
  creator: 'Peter Holic',
  publisher: 'Peter Holic',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'sk_SK',
    url: 'https://peterholic.com',
    siteName: 'Peter Holic',
    title: 'Peter Holic | AI Adopcia pre Malé a Stredné Firmy',
    description: 'Pomáham firmám implementovať umelú inteligenciu do každodenných procesov. AI audit, konzultácie a implementácia.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Peter Holic - AI Adopcia pre Malé a Stredné Firmy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Peter Holic | AI Adopcia pre Malé a Stredné Firmy',
    description: 'Pomáham firmám implementovať umelú inteligenciu do každodenných procesov.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here
    // google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://peterholic.com',
    languages: {
      'sk-SK': 'https://peterholic.com',
      'en-US': 'https://peterholic.com/en',
    },
  },
}

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Peter Holic - AI Adopcia',
  description: 'Pomáham firmám implementovať umelú inteligenciu do každodenných procesov. AI audit, konzultácie a implementácia pre malé a stredné firmy.',
  url: 'https://peterholic.com',
  telephone: '+421917393190',
  email: 'peter@peterholic.com',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'SK',
  },
  founder: {
    '@type': 'Person',
    name: 'Peter Holic',
    jobTitle: 'AI Consultant',
    url: 'https://peterholic.com',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Slovakia',
  },
  serviceType: ['AI Consulting', 'AI Implementation', 'AI Audit', 'Business Automation'],
  priceRange: '€€',
  sameAs: [
    'https://linkedin.com/in/peterholic',
    'https://twitter.com/peterholic',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sk">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
