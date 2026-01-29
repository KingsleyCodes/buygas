import { Inter } from 'next/font/google'
import './globals.css'
import ContentWrapper from './ContentWrapper' // We will create this below

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BuyGas | Gas Supply, Automated',
  description: 'A real-time monitoring and automated replenishment platform for gas cylinders.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-900`}>
        <ContentWrapper>
          {children}
        </ContentWrapper>
      </body>
    </html>
  )
}