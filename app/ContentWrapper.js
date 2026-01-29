'use client'

import { usePathname } from 'next/navigation'
import Navbar from './components/Navbar'

export default function ContentWrapper({ children }) {
  const pathname = usePathname()
  const isLoginPage = pathname === '/login'

  return (
    <>
      {/* Only show Navbar if not on login page */}
      {!isLoginPage && <Navbar />}

      <main className={isLoginPage ? "" : "pt-20 md:pt-24"}>
        {children}
      </main>

      {/* Only show Footer if not on login page */}
      {!isLoginPage && (
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
      )}
    </>
  )
}