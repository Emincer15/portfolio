import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Etan Mincer — Portfolio',
  description: 'Engineering Portfolio of Etan Mincer, Princeton ECE student',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap" rel="stylesheet" />
      </head>
      <body style={{ margin: 0, padding: 0, background: '#111110', height: '100vh', overflow: 'hidden' }}>
        {children}
      </body>
    </html>
  )
}
