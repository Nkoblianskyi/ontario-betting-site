import Link from "next/link"
import Image from "next/image"
import { Zap } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 md:py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-6 md:mb-8 text-center md:text-left">
          <Link href="/" className="inline-flex items-center hover:opacity-80 transition-opacity">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Zap className="w-6 h-6 md:w-8 md:h-8 text-gold transform rotate-45" />
                <Zap className="w-6 h-6 md:w-8 md:h-8 text-white absolute top-0 left-0 transform -rotate-45" />
              </div>
              <h3 className="text-lg md:text-2xl font-bold bg-gradient-to-r from-gold via-yellow-400 to-gold bg-clip-text text-transparent">
                Top Ontario Betting Site
              </h3>
            </div>
          </Link>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 mb-6 md:mb-8 text-sm">
          <Link href="/privacy-policy" className="hover:text-gray-300 transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="hover:text-gray-300 transition-colors">
            Terms
          </Link>
          <Link href="/bonus-policy" className="hover:text-gray-300 transition-colors">
            Bonus Policy
          </Link>
        </div>

        {/* Organization Logos Section */}
        <div className="mb-6 md:mb-8">
          <div className="bg-gray-800 p-4 md:p-6 rounded-lg">
            {/* Responsible Gaming Notice */}
            <div className="text-center mb-4 md:mb-6">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-3">
                <span className="inline-flex items-center bg-primary-red text-white px-3 py-1 rounded-full text-sm font-semibold">
                  19+
                </span>
                <a
                  href="https://connexontario.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-primary-red transition-colors underline text-sm md:text-base"
                >
                  Play Responsibly ConnexOntario.ca
                </a>
              </div>
              <span className="text-gray-300 text-sm">1-866-531-2600</span>
            </div>

            {/* Organization Logos Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-6 items-center justify-items-center mb-4 md:mb-6">
              <a
                href="https://igamingontario.ca/en/operator/operators"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/igaming.webp"
                  alt="iGaming Ontario"
                  width={120}
                  height={40}
                  className="bg-white rounded p-1 md:w-[120px] md:h-[60px]"
                />
              </a>

              <a
                href="https://www.gambleaware.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/gamble-aware-logo.svg"
                  alt="GambleAware"
                  width={120}
                  height={40}
                  className="rounded p-1 md:w-[120px] md:h-[60px]"
                />
              </a>

              <a
                href="https://www.responsiblegambling.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/check.webp"
                  alt="RG Check"
                  width={140}
                  height={40}
                  className="bg-white rounded p-1 md:w-[140px] md:h-[80px]"
                />
              </a>

              <a
                href="https://connexontario.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/ConnexOntario_Logo_Transparent.png"
                  alt="ConnexOntario"
                  width={120}
                  height={40}
                  className="rounded p-1 md:w-[120px] md:h-[60px]"
                />
              </a>
              <a
                href="https://www.gpwa.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/approved_portal.gif"
                  alt="GPWA"
                  width={120}
                  height={40}
                  className="rounded p-1 md:w-[120px] md:h-[60px]"
                />
              </a>

              <a
                href="https://ecogra.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/ecogra_newlogo-01.png"
                  alt="Ecogra"
                  width={120}
                  height={40}
                  className="rounded p-1 md:w-[120px] md:h-[60px]"
                />
              </a>

              <div className="flex items-center bg-white rounded p-1 col-span-2 sm:col-span-1 justify-center">
                <Image
                  src="/secure.png"
                  alt="Secure Site"
                  width={120}
                  height={40}
                  className="md:w-[120px] md:h-[60px]"
                />
              </div>
            </div>

            {/* ConnexOntario and 19+ Badge */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">


              <div className="flex items-center bg-primary-red text-white px-4 py-2 rounded-full">
                <span className="text-xl md:text-2xl font-bold">19+</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Text */}
        <div className="border-t border-gray-700 pt-6 md:pt-8">
          <div className="text-xs md:text-sm text-gray-300 space-y-3 md:space-y-4">
            <p className="text-center md:text-left">
              This site's operations are regulated by the Alcohol Gaming Commission of Ontario (AGCO) and is operated by
              SkillOnNet Ltd, Office 1/5297 Level G, Quantum House, 75, Abate Rigord Street, Ta' Xbiex, XBX 1120, Malta,
              under an AGCO Internet Gaming license and pursuant to an agreement with{" "}
              <a
                href="https://igamingontario.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-red hover:underline"
              >
                iGaming Ontario
              </a>
              .
            </p>
            <p className="text-center md:text-left">
              OntarioBettingSite.com operates under Ontario law and follows all AGCO and iGaming Ontario regulations.
            </p>
            <p className="text-blue-400 text-center md:text-left font-medium">
              Gambling can be addictive, please play responsibly.
            </p>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="border-t border-gray-700 pt-4 mt-6">
          <p className="text-center text-sm text-gray-400">© 2025 OntarioBettingSite. Alle rettigheter reservert.</p>
        </div>
      </div>
    </footer>
  )
}
