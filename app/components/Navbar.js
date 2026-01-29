'use client'

import { useState, useEffect } from 'react'
import { auth } from '@/lib/firebase'
import { signOut } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLogout = async () => {
    try {
      await signOut(auth)
      // Delete the auth cookie
      document.cookie = "auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;"
      router.push('/login')
      router.refresh()
    } catch (error) {
      console.error("Logout failed", error)
    }
  }

  const navItems = [
    { label: 'Problem', href: '#problem' },
    { label: 'Solution', href: '#solution' },
    { label: 'Market', href: '#market' },
    { label: 'Business Model', href: '#business-model' },
    { label: 'Team', href: '#team' },
    { label: 'Invest', href: '#investment', isCTA: true },
  ]

  const handleNavClick = (href, e) => {
    if (href === '#') {
      e.preventDefault()
      return
    }
    setIsMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/98 backdrop-blur-md shadow-sm py-3' : 'bg-white/95 backdrop-blur-sm py-4'} border-b border-gray-200`}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center">
            
            {/* Logo Only Section */}
            <div 
              className="flex items-center cursor-pointer" 
              onClick={() => router.push('/')}
            >
              <div className="relative w-10 h-10 md:w-12 md:h-12">
                <Image 
                  src="/logo.png" 
                  alt="Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center">
              <ul className="flex items-center space-x-1">
                {navItems.map((item) => (
                  <li key={item.label}>
                    {item.isCTA ? (
                      <button
                        onClick={(e) => handleNavClick(item.href, e)}
                        className="ml-4 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-sm"
                      >
                        {item.label}
                      </button>
                    ) : (
                      <button
                        onClick={(e) => handleNavClick(item.href, e)}
                        className="px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                      >
                        {item.label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
              {/* Logout Button */}
              <button 
                onClick={handleLogout}
                className="ml-4 text-xs font-bold text-red-600 hover:bg-red-50 px-3 py-2 rounded-lg transition-colors border border-red-100"
              >
                Sign Out
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="md:hidden p-2.5 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="w-6 h-6 relative">
                <span className={`absolute left-0 top-1 w-6 h-0.5 bg-gray-800 rounded-full transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`absolute left-0 top-3 w-6 h-0.5 bg-gray-800 rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`absolute left-0 top-5 w-6 h-0.5 bg-gray-800 rounded-full transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
            <div className="pb-4 border-t border-gray-200 pt-4 space-y-1">
              {navItems.map((item) => (
                <button
                  key={`mobile-${item.label}`}
                  onClick={(e) => { handleNavClick(item.href, e); setIsMenuOpen(false); }}
                  className={`w-full text-left px-4 py-3.5 text-base font-medium rounded-lg ${item.isCTA ? 'bg-blue-600 text-white text-center shadow-sm' : 'text-gray-800 hover:bg-gray-50'}`}
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={handleLogout}
                className="w-full text-center px-4 py-3.5 text-base font-bold text-red-600 bg-red-50 rounded-lg mt-2 transition-colors hover:bg-red-100"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/10 backdrop-blur-sm z-40 md:hidden" 
          onClick={() => setIsMenuOpen(false)} 
        />
      )}
    </>
  )
}