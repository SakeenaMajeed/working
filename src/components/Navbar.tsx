"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
      className="w-full bg-white/30 backdrop-blur-md border-b border-gray-200 shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="text-[#1a237e] text-4xl font-bold">
            Sakeena
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-[#1a237e] hover:text-[#3949ab] transition-colors duration-300">
              Home
            </Link>
            <Link href="/about" className="text-[#1a237e] hover:text-[#3949ab] transition-colors duration-300">
              About
            </Link>
            <Link href="/projects" className="text-[#1a237e] hover:text-[#3949ab] transition-colors duration-300">
              Projects
            </Link>
            <Link href="/skills" className="text-[#1a237e] hover:text-[#3949ab] transition-colors duration-300">
              Skills
            </Link>
            <Link href="/contact" className="text-[#1a237e] hover:text-[#3949ab] transition-colors duration-300">
              Contact
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger className="text-[#1a237e] hover:text-[#3949ab] font-medium">
                <Menu />
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle className="text-lg font-semibold text-[#1a237e]">Sakeena</SheetTitle>
                </SheetHeader>
                <div className="mt-4 space-y-4">
                  <Link href="/" className="block text-[#1a237e] hover:text-[#3949ab] px-3 py-2 text-base font-medium">
                    Home
                  </Link>
                  <Link href="/about" className="block text-[#1a237e] hover:text-[#3949ab] px-3 py-2 text-base font-medium">
                    About
                  </Link>
                  <Link href="/projects" className="block text-[#1a237e] hover:text-[#3949ab] px-3 py-2 text-base font-medium">
                    Projects
                  </Link>
                  <Link href="/skills" className="block text-[#1a237e] hover:text-[#3949ab] px-3 py-2 text-base font-medium">
                    Skills
                  </Link>
                  <Link href="/contact" className="block text-[#1a237e] hover:text-[#3949ab] px-3 py-2 text-base font-medium">
                    Contact
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
