import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Landing Page Form GSheet',
  description: 'LLM-friendly landing page with contact form structure.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="cs">
      <body>{children}</body>
    </html>
  )
}
