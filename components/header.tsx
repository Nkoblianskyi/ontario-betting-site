"use client"

import Link from "next/link"
import { Zap } from "lucide-react"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-black text-white z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-2 md:px-4 text-center text-white py-2 md:py-3">
        <Link
          href="/"
          className="flex items-center justify-center hover:opacity-80 transition-opacity"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div className="flex items-center space-x-2 md:space-x-3">
            <div className="relative">
              <Zap className="w-5 h-5 md:w-8 md:h-8 text-gold transform rotate-45" />
              <Zap className="w-5 h-5 md:w-8 md:h-8 text-white absolute top-0 left-0 transform -rotate-45" />
            </div>
            <h1 className="text-lg md:text-3xl font-bold bg-gradient-to-r from-gold via-yellow-400 to-gold bg-clip-text text-transparent">
              Top Ontario Betting Site
            </h1>
          </div>
        </Link>
      </div>
    </header>
  )
}
