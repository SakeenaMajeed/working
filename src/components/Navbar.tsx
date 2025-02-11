"use client";

import Link from "next/link";
import { Bell, Search, Settings, Menu } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-full mx-auto px-2 md:px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:h-16 lg:items-center lg:justify-between">
          {/* Logo & Menu Button */}
          <div className="flex justify-between items-center h-16 lg:h-auto w-full lg:w-auto">
            <Link href="/" className="flex-shrink-0 flex flex-col items-center text-center">
              <span className="text-3xl font-extrabold tracking-wide font-poppins">
                <span className="text-[#FFA500]">MO</span>
                <span className="text-[#FF6B00]">MS</span>
              </span>
              <span className="text-xs text-orange-600 mt-[-2px]">
                Bringing Moments to Life
              </span>
            </Link>
            <button
              className="lg:hidden text-gray-600 hover:text-gray-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {/* Search Bar (Mobile View) */}
          <div className="lg:hidden py-3 w-full flex justify-center">
            <div className="relative w-full max-w-[90%]">
              <Input
                type="search"
                placeholder="Search"
                className="w-full pl-3 pr-10 py-1.5 rounded-full bg-gray-50 border-gray-200"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden ${isMenuOpen ? "block" : "hidden"}`}>
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
            {/* Icons in Mobile Menu */}
            <div className="px-3 py-2 flex justify-start space-x-6">
              <button className="text-gray-600 hover:text-gray-900">
                <Bell className="h-5 w-5" />
              </button>
              <button className="text-gray-600 hover:text-gray-900">
                <Settings className="h-5 w-5" />
              </button>
            </div>
            {/* Create Account Button */}
            <div className="px-3 py-2">
              <button className="w-full bg-gradient-to-r from-[#FF6B00] to-[#FFA500] text-white rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 hover:shadow-md">
                Create Account
              </button>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {["ABOUT US", "CATALOG", "PLACES", "BLOG", "CONTACT"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(" ", "-")}`}
                className={`${item === "ABOUT US" ? "text-black" : "text-gray-600"
                  } hover:text-gray-900 text-sm font-medium`}
              >
                {item}
              </Link>

            ))}
          </div>

          {/* Right Section */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="relative w-64">
              <Input
                type="search"
                placeholder="Search"
                className="w-full pl-4 pr-10 py-1.5 rounded-full bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>

            <button className="text-gray-600 hover:text-gray-900">
              <Bell className="h-5 w-5" />
            </button>
            <button className="text-gray-600 hover:text-gray-900">
              <Settings className="h-5 w-5" />
            </button>
            <button className="bg-gradient-to-r from-[#f5b744] to-[#ff5e00] text-white rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 hover:shadow-md">
              Create Account
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
