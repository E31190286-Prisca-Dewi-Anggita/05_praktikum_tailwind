'use client';

import Link from 'next/link';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-800 hover:text-gray-600">
              Prisca Dewi Anggita
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md">
              Home
            </Link>
            <Link href="/essays" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md">
              Essays
            </Link>
            <Link href="/projects" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md">
              Projects
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
            >
              {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md">
              Home
            </Link>
            <Link href="/essays" className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md">
              Essays
            </Link>
            <Link href="/projects" className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md">
              Projects
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md">
              About
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 