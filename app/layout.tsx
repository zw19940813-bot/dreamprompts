import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Analytics } from '@/components/analytics'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import './globals.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dreamprompts.net'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'DreamPrompts — Better prompts. Brighter ideas.', template: '%s | DreamPrompts' },
  description: 'Practical AI prompts, creative workflows, and thoughtful guides for ChatGPT, Claude, Midjourney, Sora, and beyond.',
  applicationName: 'DreamPrompts',
  alternates: { canonical: '/' },
  openGraph: { type: 'website', siteName: 'DreamPrompts', title: 'DreamPrompts — Better prompts. Brighter ideas.', description: 'Practical prompts and creative workflows for making better things with AI.', url: siteUrl },
  twitter: { card: 'summary_large_image', title: 'DreamPrompts', description: 'Better prompts. Brighter ideas.' },
  verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
}

export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#ffffff' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const adsEnabled = process.env.NEXT_PUBLIC_ADS_ENABLED === 'true'
  const adsClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT
  return <html lang="en"><body><Header /><main>{children}</main><Footer /><Analytics />{adsEnabled && adsClient && <Script id="adsense" async strategy="afterInteractive" crossOrigin="anonymous" src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsClient}`} />}</body></html>
}
