import './globals.css'

export const metadata = {
  title: 'Armt website',
  description: 'official website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      {children}
      </body>
    </html>
  )
}
