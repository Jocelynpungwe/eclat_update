import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Roboto } from 'next/font/google'
import { Lato } from 'next/font/google'
import { Open_Sans } from 'next/font/google'

import './globals.css'
import Providers from './providers'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Sidebar from '@/components/Sidebar'

const poppins = Poppins({
  subsets: ['latin'], // Include the appropriate subsets
  weight: ['400', '600'], // Specify the weights you need
  variable: '--font-poppins', // Optional: Create a CSS variable for the font
})

const roboto = Roboto({
  subsets: ['latin'], // Include the appropriate subsets
  weight: ['400', '500', '700'], // Specify the weights you need
  variable: '--font-roboto', // Optional: Create a CSS variable for the font
})

const lato = Lato({
  subsets: ['latin'], // Include appropriate subsets
  weight: ['400', '700'], // Specify the weights you need
  variable: '--font-lato', // Optional: Create a CSS variable for the font
})

const openSans = Open_Sans({
  subsets: ['latin'], // Include appropriate subsets
  weight: ['400', '600', '700'], // Specify the weights you need
  variable: '--font-open-sans', // Optional: Create a CSS variable for the font
})

export const metadata: Metadata = {
  title: 'Eclat Service De Nettoyage',
  description:
    'Eclat Services de Nettoyage, a trusted name in professional cleaning solutions for apartments, shopping centers, and offices across the Gatineau and Ottawa region.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${roboto.variable} ${lato.variable} ${openSans.variable}`}
      >
        <Providers>
          <Header />
          <Sidebar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
