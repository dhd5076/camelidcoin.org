import './globals.css'
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: 'CamelidCoin',
  description: 'Distributed LLM\'s Powered By The Blockchain.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-screen bg-bgColor">
      <nav className="bg-black/25">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                  <span className="absolute -inset-0.5"></span>
                </button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img className="h-10 w-auto" src="/logoLarge.png"/>
                </div>
                <div className="hidden sm:ml-6 sm:block my-auto">
                  <div className="flex space-x-4">
                    <a href="/" className="text-gray-300 hover:bg-black/25 hover:text-white rounded-md px-3 py-2 text-sm font-bold">Home</a>
                    <a href="#" className="text-gray-300 hover:bg-black/25 hover:text-white rounded-md px-3 py-2 text-sm font-bold">Features</a>
                    <a href="#" className="text-gray-300 hover:bg-black/25 hover:text-white rounded-md px-3 py-2 text-sm font-bold">FAQ</a>
                    <a href="#" className="text-gray-300 hover:bg-black/25 hover:text-white rounded-md px-3 py-2 text-sm font-bold">Contact</a>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="flex space-x-4">
                    <a href="#" className="text-gray-300 hover:bg-black/25 hover:text-white rounded-md px-3 py-2 text-sm font-bold">Sign In</a>
                    <a href="#" className="bg-black/25 text-gray-300 hover:bg-primary/50 hover:text-black rounded-md px-3 py-2 text-sm font-bold">Create Account</a>
                  </div>
              </div>
            </div>
          </div>

          <div className="sm:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <a href="#" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a>
              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Dashboard</a>
              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Features</a>
              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Demo</a>
            </div>
          </div>
        </nav>
        {children}
        <div className="bg-primary text-center w-full text-xs p-2">
          &#169; 2023 CamelCoin | Released under the GPLv3 License
        </div>
      </body>
      <Analytics />
    </html>
  )
}
