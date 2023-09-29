import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Nav from './components/nav/Nav'
import Footer from './components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Teflon Luxury Haven',
  description: 'The Best online store for your luxury Paintings and Artifacts.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='text-slate-700'>
        <div className='flex flex-col min-h-screen'>
          <Nav />
            <main className='flex-grow'>
              {children}
            </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
