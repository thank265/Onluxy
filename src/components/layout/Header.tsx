'use client'

import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Shop', href: '/products' },
  { name: 'Collection', href: '/collection' },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-serif text-[#8B6E4F]">
            Scupy
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-[#8B6E4F] transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Section - Cart & Login */}
          <div className="flex items-center space-x-4">
            <Link href="/cart" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <ShoppingCart className="w-6 h-6 text-gray-700" />
            </Link>
            <Link
              href="/auth/signin"
              className="px-4 py-2 bg-[#8B6E4F] text-white rounded-full hover:bg-[#7A5E3F] transition-colors"
            >
              Login
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
            aria-label="Toggle menu"
          >
            <MenuIcon isOpen={isMenuOpen} />
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 py-4">
            <nav className="flex flex-col space-y-4 px-4">
              {navigation.main.map((item) => (
                <MobileNavLink key={item.name} href={item.href}>
                  {item.name}
                </MobileNavLink>
              ))}
              {user ? (
                <>
                  {navigation.user.map((item) => (
                    <MobileNavLink key={item.name} href={item.href}>
                      {item.name}
                    </MobileNavLink>
                  ))}
                </>
              ) : (
                <>
                  {navigation.auth.map((item) => (
                    <MobileNavLink key={item.name} href={item.href}>
                      {item.name}
                    </MobileNavLink>
                  ))}
                </>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      className="text-sm text-white/80 hover:text-white transition-colors relative group"
    >
      {children}
      <span className="absolute left-0 right-0 bottom-0 h-px bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
    </Link>
  )
}

function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      className="text-white/80 hover:text-white transition-colors block px-4 py-2"
    >
      {children}
    </Link>
  )
}

function MenuIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      {isOpen ? (
        <path d="M6 18L18 6M6 6l12 12" />
      ) : (
        <path d="M4 6h16M4 12h16M4 18h16" />
      )}
    </svg>
  )
}

function CartIcon() {
  return (
    <div className="relative">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth={1.5} 
        stroke="currentColor" 
        className="w-5 h-5"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
      <span className="absolute -top-2 -right-2 bg-white text-black text-xs w-4 h-4 rounded-full flex items-center justify-center">
        2
      </span>
    </div>
  )
}