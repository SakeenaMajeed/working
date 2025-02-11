"use client"

import Link from "next/link"
import { Bell, Search, Settings, Menu } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useState } from "react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:h-16 md:items-center md:justify-between">
          {/* Top section for mobile: Logo and Menu Button */}
          <div className="flex justify-between items-center h-16 md:h-auto">
          <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap"
          rel="stylesheet"
        />
          <Link href="/" className="flex-shrink-0 flex flex-col items-center text-center">
            <span className="text-3xl font-extrabold tracking-wide text-transparent  font-poppins">
              <span className="text-[#FF6B00]">MO</span>
              <span className="text-[#FFA500]">MS</span>
            </span>
            <span className="text-xs text-orange-600 mt-[-2px]">Bringing Moments to Life</span>
          </Link>
            <button className="md:hidden text-gray-600 hover:text-gray-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {/* Search Bar for mobile - always visible */}
          <div className="md:hidden py-4">
            <div className="flex items-center relative">
              <Input
                type="search"
                placeholder="Search"
                className="w-full pl-3 pr-10 py-1.5 rounded-full bg-gray-50 border-gray-200"
              />
              <Search className="absolute right-3 h-4 w-4 text-gray-400" />
            </div>
          </div>

          {/* Mobile menu */}
          <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
            <div className="pt-2 pb-3 space-y-1">
              {["ABOUT US", "CATALOG", "PLACES", "BLOG", "CONTACT"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase().replace(" ", "-")}`}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </div>
            {/* Icons in mobile menu */}
            <div className="px-3 py-2 flex justify-start space-x-6">
              <button className="text-gray-600 hover:text-gray-900">
                <Bell className="h-5 w-5" />
              </button>
              <button className="text-gray-600 hover:text-gray-900">
                <Settings className="h-5 w-5" />
              </button>
            </div>
            {/* Create Account Button in mobile menu */}
            <div className="px-3 py-2">
              <button className="w-full bg-gradient-to-r from-[#FF6B00] to-[#FFA500] text-white rounded-full px-6 py-2 text-sm font-medium transition-all duration-200 hover:shadow-md">
                Create Account
              </button>
            </div>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-black hover:text-gray-900 text-sm font-semibold">
              ABOUT US
            </Link>
            <Link href="/catalog" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
              CATALOG
            </Link>
            <Link href="/places" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
              PLACES
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
              BLOG
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
              CONTACT
            </Link>
          </div>

          {/* Right Section for desktop */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center relative">
              <Input
                type="search"
                placeholder="Search"
                className="w-80 pl-3 pr-10 py-1.5 rounded-full bg-gray-50 border-gray-200"
              />
              <Search className="absolute right-3 h-4 w-4 text-gray-400" />
            </div>
            <button className="text-gray-600 hover:text-gray-900">
              <Bell className="h-5 w-5" />
            </button>
            <button className="text-gray-600 hover:text-gray-900">
              <Settings className="h-5 w-5" />
            </button>
            <button className="bg-gradient-to-r from-[#FF6B00] to-[#FFA500] text-white rounded-full px-6 py-2 text-sm font-medium transition-all duration-200 hover:shadow-md">
              Create Account
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

