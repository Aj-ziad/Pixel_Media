'use client'
import { navLinks } from '@/constants/nav-links'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import MobileNav from './MobileNav'

const MenuBar = () => {
  const pathname = usePathname()

  return (
    <header className="fixed top-6 left-0 w-full flex justify-center z-30">
      {/* Desktop Navbar */}
      <div className="hidden md:flex items-center bg-white bg-opacity-90 backdrop-blur-md rounded-full px-12 py-3 shadow-lg">
        <nav className="flex gap-10">
          {navLinks.map((link, index) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={index}
                href={link.href}
                className={`relative text-sm font-semibold transition-colors duration-300 
                  ${isActive ? "text-[#ffb900]" : "text-gray-700 hover:text-black"}`}
              >
                {link.label}
                {/* underline */}
                <span
                  className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-[3px] rounded-full transition-all duration-300
                    ${isActive ? "w-6 bg-gradient-to-r from-orange-400 to-[#ffb900]" : "w-0"}`}
                />
              </Link>
            )
          })}
        </nav>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden flex items-center bg-white bg-opacity-90 backdrop-blur-md rounded-full px-6 py-3 shadow-lg">
        <MobileNav />
      </div>
    </header>
  )
}

export default MenuBar
