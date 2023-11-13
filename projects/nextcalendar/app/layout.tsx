import type { Metadata } from 'next'
import { Inter, Space_Grotesk, Space_Mono } from 'next/font/google'
import './globals.css'

const font = Space_Grotesk({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Calendar',
  description: 'Calendar of Code',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
