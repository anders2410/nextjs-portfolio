import type { Metadata } from 'next'
import { Geist, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const sans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono' })

const description =
  'Software Engineer & Team Lead at Hakio, based in Aarhus. A collection of my work and experience.'

export const metadata: Metadata = {
  metadataBase: new URL('https://anders-holt-portfolio.vercel.app'),
  title: 'Anders Holt Knudsen',
  description,
  openGraph: {
    title: 'Anders Holt Knudsen',
    description,
    images: ['/img/website_preview.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
