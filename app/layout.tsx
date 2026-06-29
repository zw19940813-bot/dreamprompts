import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Analytics } from '@/components/analytics'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import './globals.css'

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://dreamprompts.net'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: 'AI Prompts, Strategies & Creative Workflows | DreamPrompts',
    template: '%s | DreamPrompts'
  },

  description:
    'Discover practical AI prompts, proven prompting strategies, and clear creative workflows designed to help you think better, work faster, and achieve stronger results.',

  keywords: [
    'AI prompts',
    'prompt engineering',
    'prompt strategies',
    'prompt writing',
    'creative prompts',
    'AI workflows',
    'prompt library'
  ],

  applicationName: 'DreamPrompts',

  alternates: {
    canonical: '/'
  },

  openGraph: {
    type: 'website',
    siteName: 'DreamPrompts',
    title: 'AI Prompts, Strategies & Creative Workflows | DreamPrompts',
    description:
      'Discover practical AI prompts, proven prompting strategies, and clear creative workflows for stronger results.',
    url: siteUrl
  },

  twitter: {
    card: 'summary_large_image',
    title: 'AI Prompts, Strategies & Creative Workflows | DreamPrompts',
    description:
      'Practical AI prompts, prompting strategies, and creative workflows for stronger results.'
  },

  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const adsEnabled = process.env.NEXT_PUBLIC_ADS_ENABLED === 'true'
  const adsClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT

  return (
    <html lang="en">
      <body>
        <Header />

        <main>{children}</main>

        <Footer />

        <Analytics />

        {adsEnabled && adsClient && (
          <Script
            id="adsense"
            async
            strategy="afterInteractive"
            crossOrigin="anonymous"
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsClient}`}
          />
        )}
      </body>
    </html>
  )
}
