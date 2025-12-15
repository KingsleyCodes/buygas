// app/layout.js
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BuyGas | Gas Supply, Automated',
  description: 'A real-time monitoring and automated replenishment platform for gas cylinders.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-900`}>
        <Navbar />
        <main className="pt-20 md:pt-24">
          {children}
        </main>
        <footer className="border-t border-gray-200 py-8 mt-20">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-blue-600 rounded"></div>
                <span className="font-bold">BuyGas Inc.</span>
              </div>
              <div className="text-sm text-gray-500">
                © {new Date().getFullYear()} Confidential Investor Information
              </div>
              <div className="text-sm text-gray-500">
                <a href="mailto:investors@BuyGas.com" className="hover:text-blue-600">
                  investors@BuyGas.com
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}