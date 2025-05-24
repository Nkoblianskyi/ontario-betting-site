import Image from "next/image"
import type { Sportsbook } from "@/data/sportsbooks"
import { Star } from "lucide-react"
import Link from "next/link"

interface SportsbookCardProps {
  sportsbook: Sportsbook
}

export default function SportsbookCard({ sportsbook }: SportsbookCardProps) {
  const renderStars = (rating: number) => {
    const stars = []
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star
          key={i}
          className="w-3 h-3 md:w-4 md:h-4 fill-gold text-gold animate-gentle-float"
          style={{ animationDelay: `${i * 0.2}s` }}
        />,
      )
    }
    return stars
  }

  const isTopRated = sportsbook.rating === 9.9

  return (
    <Link href={sportsbook.url} target="_blank" rel="noopener noreferrer" className="block">
      <div
        className={`bg-white border-2 rounded-lg shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer relative transform hover:scale-102 animate-fade-in ${
          isTopRated ? "border-gold animate-gentle-glow" : "border-gray-200"
        }`}
      >
        {/* Mobile Layout - Compact Vertical Card Design */}
        <div className="block md:hidden">
          <div className="relative p-4">
            {isTopRated && (
              <div className="absolute -top-2 -right-2 bg-gold text-black px-2 py-1 rounded-full text-xs font-bold shadow-lg transform rotate-12 animate-gentle-float">
                TOP 1
              </div>
            )}

            {/* Bonus Section */}
            <div className="bg-gold text-black p-3 rounded-lg mb-4 text-center shadow-md animate-gentle-glow relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-subtle-shimmer"></div>
              <div className="text-xs font-medium mb-1">First Deposit Bonus</div>
              <div className="text-sm font-bold">{sportsbook.bonus}</div>
            </div>

            {/* Logo */}
            <div className="text-center mb-3">
              <Image
                src={sportsbook.logo || "/placeholder.svg"}
                alt={`${sportsbook.name} logo`}
                width={80}
                height={60}
                className="mx-auto rounded-lg transform hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Name */}
            <div className="text-center mb-3">
              <h3 className="text-lg font-bold text-black hover:text-primary-red transition-colors duration-300">
                {sportsbook.name}
              </h3>
            </div>

            {/* Rating */}
            <div className="text-center mb-4">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <span className="text-base font-bold text-black">{sportsbook.rating}/10</span>
                <div className="flex space-x-1">{renderStars(10)}</div>
              </div>
            </div>

            {/* Claim Bonus Button */}
            <div className="text-center mb-3">
              <div className="bg-primary-red text-white px-6 py-2 rounded-lg text-sm font-bold transition-all duration-300 inline-block animate-soft-pulse hover:scale-105 transform w-full">
                Claim Bonus
              </div>
            </div>

            {/* Disclaimer */}
            <div className="text-xs text-gray-slate text-center border-t pt-2">
              19+ only. Please play responsibly. Gambling problem? Call 1-866-531-2600 or visit ConnexOntario.ca. T&Cs
              apply.
            </div>
          </div>
        </div>

        {/* Tablet Layout - 2 Column Grid */}
        <div className="hidden md:block lg:hidden p-4 md:p-6">
          {isTopRated && (
            <div className="absolute -top-2 -right-2 md:-top-3 md:-right-3 bg-gold text-black px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-bold shadow-lg transform rotate-12 animate-gentle-float">
              TOP 1
            </div>
          )}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex items-center space-x-3">
              <Image
                src={sportsbook.logo || "/placeholder.svg"}
                alt={`${sportsbook.name} logo`}
                width={120}
                height={80}
                className="rounded-lg transform hover:scale-105 transition-transform duration-300"
              />
              <div>
                <h3 className="text-lg font-bold text-black mb-1 hover:text-primary-red transition-colors duration-300">
                  {sportsbook.name}
                </h3>
                <div className="flex items-center space-x-2">
                  <span className="text-base font-semibold text-black">{sportsbook.rating}/10</span>
                  <div className="flex space-x-1">{renderStars(10)}</div>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="bg-gold text-black px-3 py-2 rounded-lg font-bold mb-2 shadow-md animate-gentle-glow relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-subtle-shimmer"></div>
                {sportsbook.bonus}
              </div>
              <div className="bg-primary-red text-white px-5 py-2 rounded-lg font-semibold transition-all duration-300 inline-block animate-soft-pulse hover:scale-105 transform">
                Claim Bonus
              </div>
            </div>
          </div>
          <div className="text-xs text-gray-slate border-t pt-3">
            19+ only. Please play responsibly. Gambling problem? Call 1-866-531-2600 or visit ConnexOntario.ca. T&Cs
            apply.
          </div>
        </div>

        {/* Desktop Layout - Horizontal */}
        <div className="hidden lg:block p-4 md:p-6">
          {isTopRated && (
            <div className="absolute -top-2 -right-2 md:-top-3 md:-right-3 bg-gold text-black px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-bold shadow-lg transform rotate-12 animate-gentle-float">
              TOP 1
            </div>
          )}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-6 py-2 px-4">
              <Image
                src={sportsbook.logo || "/placeholder.svg"}
                alt={`${sportsbook.name} logo`}
                width={200}
                height={100}
                className="rounded-lg transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="text-center flex-1">
              <h3 className="text-xl font-bold text-black mb-1 hover:text-primary-red transition-colors duration-300">
                {sportsbook.name}
              </h3>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-lg font-semibold text-black">{sportsbook.rating}/10</span>
                <div className="flex space-x-1">{renderStars(10)}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="bg-gold text-black px-4 py-2 rounded-lg font-bold mb-2 shadow-md animate-gentle-glow relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-subtle-shimmer"></div>
                {sportsbook.bonus}
              </div>
              <div className="bg-primary-red text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 inline-block animate-soft-pulse hover:scale-105 transform">
                Claim Bonus
              </div>
            </div>
          </div>
          <div className="text-xs text-gray-slate border-t pt-3">
            19+ only. Please play responsibly. Gambling problem? Call 1-866-531-2600 or visit ConnexOntario.ca. T&Cs
            apply.
          </div>
        </div>
      </div>
    </Link>
  )
}
