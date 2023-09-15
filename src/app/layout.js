import './globals.css'
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: 'CamelidCoin',
  description: 'Distributed LLM\'s Powered By The Blockchain.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-screen, h-screen bg-bgColor">{children}</body>
      <Analytics />
    </html>
  )
}
