import { useState } from 'react'
import './App.css'
import logo from './assets/logopcc.png'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-blue-900 text-white shadow-md x1 rounded-2xl ">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <img src={logo} alt="PCC Logo" className="h-10 w-10 mr-2 md:h-10" />
        <div className="flex items-center mr-4">
          <h1 className="text-xs sm:text-sm md:text-xl font-semibold">POLYTECHNIC COMPUTER CLUB</h1>
        </div>
    
        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#About" className="hover:text-gray-300">About Us</a>
          <a href="#Services" className="hover:text-gray-300">Services</a>
          <a href="#Contact" className="hover:text-gray-300">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-800 px-4 py-2">
          <a href="#" className="block py-2 hover:text-gray-300">Home</a>
          <a href="#" className="block py-2 hover:text-gray-300">About Us</a>
          <a href="#" className="block py-2 hover:text-gray-300">Services</a>
          <a href="#" className="block py-2 hover:text-gray-300">Contact</a>
        </div>
      )}
    </header>
  )
}
