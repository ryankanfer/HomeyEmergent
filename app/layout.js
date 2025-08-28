import './globals.css'

export const metadata = {
  title: 'HOMEY - AI Real Estate Assistant',
  description: 'Your AI-powered real estate assistant for NYC. In your pocket. On your side.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-gradient-to-br from-cream via-sand to-mint">
        {children}
      </body>
    </html>
  )
}
