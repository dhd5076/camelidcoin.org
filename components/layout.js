import Link from "next/link";
import { useState } from 'react';

export const metadata = {
  title: 'CamelidCoin',
  description: 'Distributed LLM\'s Powered By The Blockchain.',
}

export default function RootLayout({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-bgColor/75 fixed top-0 w-full z-50 backdrop-blur">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <p
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-black/50 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  )}
                </svg>
              </p>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img className="h-10 w-auto ml-2" src="/logoLarge.png"/>
              </div>
              <div className="hidden sm:flex sm:ml-6 my-auto">
                <div className="flex space-x-2">
                  <Link href="/" className="text-gray-300 hover:bg-black/25 hover:text-white rounded-md px-3 py-2 text-sm font-bold">Home</Link>
                  <Link href="#features" className="text-gray-300 hover:bg-black/25 hover:text-white rounded-md px-3 py-2 text-sm font-bold">Features</Link>
                  <Link href="#faq" className="text-gray-300 hover:bg-black/25 hover:text-white rounded-md px-3 py-2 text-sm font-bold">FAQ</Link>
                  <Link href="#contact" className="text-gray-300 hover:bg-black/25 hover:text-white rounded-md px-3 py-2 text-sm font-bold">Contact</Link>
                </div>
              </div>
            </div>
            <div className="hidden sm:flex absolute inset-y-0 right-0 items-center pr-2">
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:bg-black/25 hover:text-white rounded-md px-3 py-2 text-sm font-bold">Sign In</a>
                <a href="#" className="bg-black/25 text-gray-300 hover:bg-primary/50 hover:text-black rounded-md px-3 py-2 text-sm font-bold">Create Account</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`${
          isMobileMenuOpen ? 'block' : 'hidden'
        } sm:hidden bg-black/75 z-50 backdrop-blur w-full p-4 fixed top-16`}
        id="mobile-menu"
      >
        <div className="flex flex-col space-y-2">
          <Link
            href="/"
            className="text-white font-bold hover:text-primary"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="#features"
            className="text-white font-bold hover:text-primary"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Features
          </Link>
          <Link
            href="#faq"
            className="text-white font-bold hover:text-primary"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            FAQ
          </Link>
          <Link
            href="#contact"
            className="text-white font-bold hover:text-primary"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
      <div className="pt-16">
        {children}
      </div>

      {/* Footer */}
      <div className="bg-primary text-center w-full text-xs p-2">
        &#169; 2023 CamelidCoin | Released under the GPLv3 License
      </div>
    </>
  )
}
