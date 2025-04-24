import React from 'react'

const Navbar = () => {
  return (
    <header className="fixed top-0 z-50 w-full bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-2 font-bold text-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-bookmark h-6 w-6"
            >
              <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
            </svg>
            <span>LinkKeeper</span>
          </div>

          {/* Nav Links (hidden on small screens) */}
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#features" className="hover:text-primary transition-colors">Features</a>
            <a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
          </nav>

          {/* Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a href="/dashboard">
              <button className="bg-black text-white h-9 px-5 rounded-md text-sm hover:bg-opacity-90 transition">
                Login
              </button>
            </a>
            <a href="/dashboard">
              <button className="text-black font-bold border h-9 px-5 rounded-md text-sm hover:bg-black hover:text-white transition">
                Get Started
              </button>
            </a>
          </div>

          {/* Mobile Nav Icon (optional future improvement) */}
          <div className="md:hidden">
            {/* You can add a hamburger menu here */}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
