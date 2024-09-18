"use client"
import React, { useState } from 'react'
import Link from 'next/link'
interface NavItem {
  label: string;
  href: string;
}

interface NavbarProps {
  items: NavItem[];
}

const Navbar = ({ items }: NavbarProps) => {
  return (
    <nav className="bg-transparent">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="py-4 px-2">
            <span className="font-semibold text-white text-lg">Veluxe</span>
          </Link>
          <div className="hidden md:flex items-center space-x-1">
            {items.map((item, index) => (
              <Link 
                key={index} 
                href={item.href}
                className="py-4 px-2 text-white font-semibold hover:text-green-300 transition duration-300"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="md:hidden">
            <button className="text-white">Menu</button>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        {items.map((item, index) => (
          <Link 
            key={index} 
            href={item.href}
            className="block py-2 px-4 text-white font-semibold hover:text-green-300 transition duration-300"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Navbar

