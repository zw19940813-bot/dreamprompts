import { Header } from '@/components/header'
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const googleAnalyticsId =
  process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || "G-2EF22MPE7L";

export const metadata: Metadata = {
  title: "AI Prompt Refinement: Elevate Your AI Video Quality.",
  description:
    "A premium editorial resource for AI prompt refinement, AI video generation, cinematic prompting, and creative workflow systems.",
  icons: {
    icon: "/mark.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleAnalyticsId}');
          `}
        </Script>
      </body>
    </html>
  );
}
