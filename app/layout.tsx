import type { Metadata } from 'next'
import { EB_Garamond, JetBrains_Mono, Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import Nav from '@/lib/components/Nav'

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  display: 'block',
  variable: '--font-eb-garamond',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'block',
  variable: '--font-jetbrains-mono',
})

const inter = Inter({
  subsets: ['latin'],
  display: 'block',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Dennis Eum',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          ebGaramond.variable,
          jetbrainsMono.variable,
          inter.variable,
        )}
      >
        <Nav />
        <div className="h-full pt-16">
          <main className="h-main overflow-y-scroll">{children}</main>
        </div>
      </body>
    </html>
  )
}
