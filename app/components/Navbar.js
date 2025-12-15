// app/components/Navbar.js
'use client'

import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Problem', href: '#problem' },
    { label: 'Solution', href: '#solution' },
    { label: 'Market', href: '#market' },
    { label: 'Business Model', href: '#business-model' },
    { label: 'Team', href: '#team' },
    { 
      label: 'Invest', 
      href: '#investment',
      isCTA: true
    },
  ]

  const handleNavClick = (href, e) => {
    if (href === '#') {
      e.preventDefault()
      return
    }
    
    setIsMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/98 backdrop-blur-md shadow-sm py-3' : 'bg-white/95 backdrop-blur-sm py-4'} border-b border-gray-200`}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-sm">
                <div className="w-5 h-5 bg-white rounded-sm"></div>
              </div>
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
                  BuyGas
                </span>
                <div className="text-xs text-gray-500 font-medium tracking-wide">Automated Gas Supply</div>
              </div>
            </div>

            {/* Desktop Navigation - HIDDEN ON MOBILE */}
            <nav className="hidden md:block">
              <ul className="flex items-center space-x-1">
                {navItems.map((item) => (
                  <li key={item.label}>
                    {item.isCTA ? (
                      <a
                        href={item.href}
                        onClick={(e) => handleNavClick(item.href, e)}
                        className="ml-4 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
                      >
                        {item.label}
                      </a>
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
            </nav>

            {/* Mobile Menu Button - VISIBLE ON MOBILE */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2.5 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 relative">
                <span className={`absolute left-0 top-1 w-6 h-0.5 bg-gray-800 rounded-full transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`absolute left-0 top-3 w-6 h-0.5 bg-gray-800 rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`absolute left-0 top-5 w-6 h-0.5 bg-gray-800 rounded-full transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Navigation - VISIBLE WHEN MENU IS OPEN */}
          <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
            <div className="pb-4 border-t border-gray-200 pt-4">
              <ul className="space-y-1">
                {navItems.map((item) => (
                  <li key={`mobile-${item.label}`}>
                    {item.isCTA ? (
                      <a
                        href={item.href}
                        onClick={(e) => {
                          handleNavClick(item.href, e)
                          setIsMenuOpen(false)
                        }}
                        className="block w-full text-center px-4 py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-sm"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <button
                        onClick={(e) => {
                          handleNavClick(item.href, e)
                          setIsMenuOpen(false)
                        }}
                        className="w-full text-left px-4 py-3.5 text-base font-medium text-gray-800 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                      >
                        {item.label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </header>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/10 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  )
}