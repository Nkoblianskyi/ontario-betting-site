"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { sportsbooks } from "@/data/sportsbooks"
import Image from "next/image"
import Link from "next/link"

export default function TopSportsbooksModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 700)

    return () => clearTimeout(timer)
  }, [])

  if (!isOpen) return null

  const availableItems = Math.min(sportsbooks.length, 3)
  const topItems = sportsbooks.slice(0, availableItems)

  // Dynamic width classes based on number of items
  const getModalWidth = () => {
    switch (availableItems) {
      case 1:
        return "max-w-md"
      case 2:
        return "max-w-2xl"
      case 3:
      default:
        return "max-w-5xl"
    }
  }

  const getGridCols = () => {
    switch (availableItems) {
      case 1:
        return "grid-cols-1"
      case 2:
        return "grid-cols-2"
      case 3:
      default:
        return "grid-cols-3"
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2">
      {/* Mobile: Full width, compact height */}
      <div className="bg-white rounded-lg w-full mx-2 p-4 relative md:hidden">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-base font-bold text-black mb-3 text-center pr-6">Top Ontario Betting Site</h2>

        <div className="space-y-4">
          {topItems.map((sportsbook, index) => (
            <Link key={sportsbook.id} href={sportsbook.url} target="_blank" rel="noopener noreferrer" className="block">
              <div className="relative flex items-center p-4 border border-gray-200 rounded-lg hover:border-primary-red transition-all duration-300 bg-white cursor-pointer">
                {index === 0 && (
                  <div className="absolute -top-1 -right-1 bg-gold text-black px-1.5 py-0.5 rounded-full text-xs font-bold">
                    TOP 1
                  </div>
                )}

                <div className="flex items-center w-full">
                  <span className="text-sm font-bold text-primary-red mr-2">#{index + 1}</span>

                  <Image
                    src={sportsbook.logo || "/placeholder.svg"}
                    alt={`${sportsbook.name} logo`}
                    width={68}
                    height={68}
                    className="rounded mr-3"
                  />

                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-black">{sportsbook.name}</h3>
                    <div className="text-xs text-gray-600">{sportsbook.rating}/10</div>
                  </div>

                  <div className="text-right flex-shrink-0">
                    <div className="bg-gold text-black px-3 py-2 rounded-lg text-xs font-bold mb-2 min-w-[120px] text-center">
                      {sportsbook.bonus}
                    </div>
                    <div className="bg-primary-red text-white px-4 py-2 rounded-lg text-xs font-bold min-w-[120px] text-center">
                      Claim Bonus
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-xs text-gray-500 text-center mt-2 pt-2 border-t">19+ only. Play responsibly.</div>
      </div>

      {/* Tablet: Dynamic layout based on items */}
      <div className={`bg-white rounded-lg w-full ${getModalWidth()} p-4 relative hidden md:block lg:hidden`}>
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 z-10"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-xl font-bold text-black mb-4 text-center pr-8">Top Ontario Betting Site</h2>

        <div className={`grid ${getGridCols()} gap-4 mb-4`}>
          {topItems.map((sportsbook, index) => (
            <Link key={sportsbook.id} href={sportsbook.url} target="_blank" rel="noopener noreferrer" className="block">
              <div className="relative p-3 border-2 border-gray-200 rounded-lg hover:border-primary-red transition-all duration-300 bg-white cursor-pointer h-full">
                {index === 0 && (
                  <div className="absolute -top-2 -right-2 bg-gold text-black px-2 py-1 rounded-full text-sm font-bold">
                    TOP 1
                  </div>
                )}

                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <span className="text-lg font-bold text-primary-red mr-2">#{index + 1}</span>
                    <Image
                      src={sportsbook.logo || "/placeholder.svg"}
                      alt={`${sportsbook.name} logo`}
                      width={65}
                      height={65}
                      className="rounded"
                    />
                  </div>

                  <h3 className="text-base font-bold text-black mb-1">{sportsbook.name}</h3>
                  <div className="text-sm text-gray-600 mb-2">Rating: {sportsbook.rating}/10</div>

                  <div className="bg-gold text-black px-3 py-2 rounded-lg mb-2">
                    <div className="text-xs font-medium">BONUS</div>
                    <div className="text-sm font-bold">{sportsbook.bonus}</div>
                  </div>

                  <div className="bg-primary-red text-white px-4 py-2 rounded-lg font-bold text-sm">Claim Bonus</div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-sm text-gray-500 text-center mt-3 pt-3 border-t">
          19+ only. Play responsibly. Problem? Call 1-866-531-2600
        </div>
      </div>

      {/* Desktop: Dynamic layout based on items */}
      <div className={`bg-white rounded-lg w-full ${getModalWidth()} p-6 relative hidden lg:block`}>
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-bold text-black mb-6 text-center pr-8">Top Ontario Betting Site – Updated</h2>

        <div className={`grid ${getGridCols()} gap-6 justify-items-center`}>
          {topItems.map((sportsbook, index) => (
            <Link
              key={sportsbook.id}
              href={sportsbook.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full max-w-sm"
            >
              <div
                className={`relative p-5 border-2 rounded-lg hover:border-primary-red transition-all duration-300 bg-gradient-to-br from-white to-gray-50 cursor-pointer transform hover:scale-105 hover:shadow-lg ${
                  index === 0 ? "border-gold" : "border-gray-200"
                }`}
              >
                {index === 0 && (
                  <div className="absolute -top-3 -right-3 bg-gold text-black px-3 py-1 rounded-full text-sm font-bold shadow-lg transform rotate-12">
                    TOP 1
                  </div>
                )}

                <div className="text-center">
                  <div className="flex items-center justify-center mb-3">
                    <span className="text-xl font-bold text-primary-red mr-3">#{index + 1}</span>
                    <Image
                      src={sportsbook.logo || "/placeholder.svg"}
                      alt={`${sportsbook.name} logo`}
                      width={78}
                      height={78}
                      className="rounded"
                    />
                  </div>

                  <h3 className="text-lg font-bold text-black mb-2">{sportsbook.name}</h3>
                  <div className="text-base font-semibold text-black mb-4">Rating: {sportsbook.rating}/10</div>

                  <div className="bg-gold text-black px-4 py-3 rounded-lg mb-4 shadow-md">
                    <div className="text-sm font-medium">BONUS OFFER</div>
                    <div className="text-base font-bold">{sportsbook.bonus}</div>
                  </div>

                  <div className="w-full bg-primary-red text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors animate-pulse">
                    Claim Bonus
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-sm text-gray-slate text-center mt-6 border-t pt-4">
          19+ only. Please play responsibly. Gambling problem? Call 1-866-531-2600 or visit ConnexOntario.ca. T&Cs
          apply.
        </div>
      </div>
    </div>
  )
}
