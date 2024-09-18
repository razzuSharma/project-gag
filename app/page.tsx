"use client";  // Add this at the top of the file

import Image from "next/image";
import Navbar from "@/components/Navbar";
import { Cinzel, Montserrat } from "next/font/google";
import Link from "next/link";
import { motion } from "framer-motion";

const cinzel = Cinzel({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/image-bg.jpg"
          alt="Background"
          fill
          priority
          quality={100}
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar
          items={[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
            { label: "Wardrobe", href: "/wardrobe" },
          ]}
        />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <motion.h1 
              className={`${cinzel.className} text-6xl sm:text-8xl font-bold mb-6 tracking-wider`}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              VELUXE
            </motion.h1>
            <motion.h2 
              className={`${cinzel.className} text-2xl sm:text-4xl font-bold mb-8 tracking-wide`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              VALUE IN EVERY VOGUE
            </motion.h2>
            <motion.p 
              className={`${montserrat.className} text-lg sm:text-xl mb-12 leading-relaxed`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Discover the perfect blend of luxury and affordability. Veluxe brings you high-end fashion that doesn't break the bank. Elevate your style, embrace your uniqueness.
            </motion.p>
            <motion.div 
              className="flex justify-center space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link href="/collection" className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300">
                View Collection
              </Link>
              <Link href="/about" className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition duration-300">
                Learn More
              </Link>
            </motion.div>
          </div>
        </div>
        <footer className="text-white text-center py-4">
          <p className={`${montserrat.className} text-sm`}>
            © 2024 Veluxe. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}