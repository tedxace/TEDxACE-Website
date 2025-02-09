"use client"

import {Link} from "react-router"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed w-full px-5 py-7 z-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-red-600 text-2xl font-bold">
            TED<sup>x</sup>
          </span>
          <span className="text-white text-2xl font-bold">ACE</span>
        </Link>

        {/* Mobile menu button */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-8 text-white">
            <Link to="/" className="hover:text-gray-300 transition-colors">
              HOME
            </Link>
            <Link to="/about" className="hover:text-gray-300 transition-colors">
              ABOUT
            </Link>
            <Link to="/speakers" className="hover:text-gray-300 transition-colors">
              SPEAKERS
            </Link>
            <Link to="/team" className="hover:text-gray-300 transition-colors">
              TEAM
            </Link>
          </div>
          <Link
            to="/tickets"
            className="border-2 border-purple-600 text-purple-600 px-6 py-2 rounded-lg hover:bg-purple-600 hover:text-white transition-colors"
          >
            BUY TICKETS
          </Link>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-black p-4 md:hidden">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-white hover:text-gray-300 transition-colors">
                HOME
              </Link>
              <Link to="/about" className="text-white hover:text-gray-300 transition-colors">
                ABOUT
              </Link>
              <Link to="/speakers" className="text-white hover:text-gray-300 transition-colors">
                SPEAKERS
              </Link>
              <Link to="/team" className="text-white hover:text-gray-300 transition-colors">
                TEAM
              </Link>
              <Link
                to="/tickets"
                className="border-2 border-purple-600 text-purple-600 px-6 py-2 rounded-lg hover:bg-purple-600 hover:text-white transition-colors text-center"
              >
                BUY TICKETS
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

