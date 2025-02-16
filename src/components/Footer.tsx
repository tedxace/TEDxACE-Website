import React from 'react'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <footer className="bg-black  text-white border-t border-gray-800">
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="grid grid-cols-2 gap-8">
          <Link to="/" className="flex items-center space-x-1">
            <span className="text-red-600 font-bold text-2xl">TED</span>
            <span className="text-xl">x</span>
            <span className="text-xl">ACE</span>
          </Link>
          <nav className="space-y-4">
            <Link to="/about" className="block hover:text-gray-300">
              ABOUT US
            </Link>
            <Link to="/speakers" className="block hover:text-gray-300">
              SPEAKERS
            </Link>
            <Link to="/sponsors" className="block hover:text-gray-300">
              SPONSORS
            </Link>
            <Link to="/teams" className="block hover:text-gray-300">
              TEAMS
            </Link>
            <Link to="/tickets" className="block hover:text-gray-300">
              TICKETS
            </Link>
          </nav>
        </div>
        <div className="space-y-4">
          <h3 className="font-semibold">GET LATEST UPDATE ON TEDxACE</h3>
          <div className="flex space-x-2 md:flex-row flex-col gap-4">
            <input type="email" placeholder="ENTER YOUR EMAIL" className="bg-transparent border-gray-700 p-3" />
            <button className="bg-purple-600 hover:bg-purple-700 p-4 rounded">SUBSCRIBE</button>
          </div>
        </div>
      </div>
      <div className="mt-12 text-center text-sm text-gray-500">COPYRIGHTS © 2025 TEDxACE</div>
    </div>
  </footer>
  )
}

export default Footer