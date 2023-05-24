import './globals.css'
import {Poppins} from '@next/font/google'
import Head from 'next/head'


const poppins = Poppins({
  weight : ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets : ['latin']
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="stylesheet" href="" />
      </Head>
      <body>{children}</body>
    </html>
  )
}
