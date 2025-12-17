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
    'Bratislava',
    'Česko',
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
    addressLocality: 'Bratislava',
  },
  founder: {
    '@type': 'Person',
    name: 'Peter Holic',
    jobTitle: 'AI Consultant',
    url: 'https://peterholic.com',
  },
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 48.1486,
      longitude: 17.1077,
    },
    geoRadius: 400000, // ~400 km pokryje SK + CZ
  },
  serviceType: ['AI Consulting', 'AI Implementation', 'AI Audit', 'Business Automation'],
  priceRange: '€€',
  sameAs: [
    'https://linkedin.com/in/peterholic',
    'https://twitter.com/peterholic',
  ],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Pre aké firmy sú vaše služby vhodné?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pre malé a stredné firmy (10-250 zamestnancov) v službách, výrobe, e-commerce a marketingu.',
      },
    },
    {
      '@type': 'Question',
      name: 'Koľko stojí AI audit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Základný AI audit je zadarmo. Detailný audit s roadmapou je súčasťou konzultačného balíka.',
      },
    },
    {
      '@type': 'Question',
      name: 'Dokážete dodať riešenia v slovenčine/češtine?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Áno, pracujem so slovenskými a českými datasetmi a prispôsobím jazyk aj tone-of-voice.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ako dlho trvá implementácia AI riešení?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Jednoduchá automatizácia 1-2 týždne, komplexné integrácie 2-3 mesiace podľa rozsahu.',
      },
    },
    {
      '@type': 'Question',
      name: 'Aké dáta potrebujem na štart?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Základný prehľad o nástrojoch (CRM/ERP/e-shop), dostupné exporty alebo databázu a zoznam procesov, ktoré chcete automatizovať.',
      },
    },
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
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}

