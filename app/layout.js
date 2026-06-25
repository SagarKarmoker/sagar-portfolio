import "./globals.css";
import { ThemeProvider } from "next-themes";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://sagarkarmoker.dev';

export const metadata = {
  title: "Sagar Karmoker | Researcher & Engineer | Blockchain · Distributed Systems",
  description: "Sagar Karmoker — MSc student, Backend & Blockchain Engineer at Core Devs Ltd, former Research Assistant at BRAC University. Building where academic research meets production engineering.",
  keywords: [
    "Sagar Karmoker",
    "Blockchain Engineer",
    "Distributed Systems",
    "Backend Developer",
    "Smart Contract Developer",
    "MSc Researcher",
    "BRAC University",
    "Core Devs Ltd",
    "Blockchain Scalability",
    "DeFi Infrastructure",
    "Multi-chain Wallet",
    "PhD Aspirant",
    "Bangladesh Blockchain Developer",
  ],
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
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Sagar Karmoker Portfolio',
    title: 'Sagar Karmoker | Researcher & Engineer | Blockchain · Distributed Systems',
    description: 'Sagar Karmoker — MSc student, Backend & Blockchain Engineer at Core Devs Ltd, former Research Assistant at BRAC University. Building where academic research meets production engineering.',
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Sagar Karmoker — Researcher & Blockchain Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sagar Karmoker | Researcher & Engineer',
    description: 'MSc student, Backend & Blockchain Engineer. Building where academic research meets production engineering.',
    images: [`${SITE_URL}/og-image.jpg`],
    creator: '@sagarkarmoker',
  },
  alternates: {
    canonical: SITE_URL,
  },
  metadataBase: new URL(SITE_URL),
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#0d0f12',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Sagar Karmoker',
  url: SITE_URL,
  jobTitle: 'Backend & Blockchain Engineer',
  alumniOf: ['BRAC University', 'East West University'],
  knowsAbout: [
    'Blockchain',
    'Distributed Systems',
    'Smart Contract Development',
    'Backend Engineering',
    'Multi-chain Wallet Infrastructure',
    'Blockchain Scalability Research',
    'DeFi Applications',
  ],
  sameAs: [
    'https://github.com/SagarKarmoker',
    'https://www.linkedin.com/in/sagarkarmoker',
    'https://scholar.google.com/citations?user=AOEyXnEAAAAJ&hl=en',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Chelsea+Market&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <div className="grain-overlay" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
