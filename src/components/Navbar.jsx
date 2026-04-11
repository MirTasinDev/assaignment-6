import { useState } from 'react'
import { useCart } from '../context/CartContext'
import cartIcon from '../assets/shopping-cart.png'

export default function Navbar({ onCartClick }) {
  const { items } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = ['Products', 'Features', 'Pricing', 'Testimonials', 'FAQ']

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-2xl font-bold text-purple-600 cursor-pointer">
            DigiTools
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map(link => (
              <a
                key={link}
                href="#"
                className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-4">
            <button
              className="relative p-1"
              onClick={onCartClick}
              aria-label="View Cart"
            >
              <img src={cartIcon} alt="Cart" className="w-6 h-6" />
              {items.length > 0 && (
                <span className="absolute -top-1 -right-1 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold bg-[linear-gradient(88deg,#4f39f6_0%,#9514fa_100%)]">
                  {items.length}
                </span>
              )}
            </button>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
              Login
            </a>
            <button
              className="btn text-white text-sm font-semibold px-5 py-2 rounded-full border-none bg-[linear-gradient(88deg,#4f39f6_0%,#9514fa_100%)]"
            >
              Get Started
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden flex items-center gap-3">
            <button
              className="relative p-1"
              onClick={onCartClick}
              aria-label="View Cart"
            >
              <img src={cartIcon} alt="Cart" className="w-6 h-6" />
              {items.length > 0 && (
                <span className="absolute -top-1 -right-1 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold bg-[linear-gradient(88deg,#4f39f6_0%,#9514fa_100%)]">
                  {items.length}
                </span>
              )}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100 pt-4 flex flex-col gap-3">
            {navLinks.map(link => (
              <a
                key={link}
                href="#"
                className="text-gray-600 hover:text-gray-900 text-sm font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            ))}
            <a href="#" className="text-gray-600 text-sm font-medium">Login</a>
            <button
              className="btn text-white text-sm font-semibold px-5 py-2 rounded-full w-fit border-none bg-[linear-gradient(88deg,#4f39f6_0%,#9514fa_100%)]"
            >
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
