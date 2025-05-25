"use client"
import { sportsbooks } from "@/data/sportsbooks"
import SportsbookCard from "@/components/sportsbook-card"
import TopSportsbooksModal from "@/components/top-sportsbooks-modal"
import Footer from "@/components/footer"
import { CheckCircle, Shield, Award, Users } from "lucide-react"

export default function HomePage() {
  const scrollToRankings = () => {
    document.getElementById("rankings")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div
      className="min-h-screen relative bg-cover bg-center bg-fixed bg-no-repeat"
      style={{
        backgroundImage: "url('/bg.jpg')",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/5"></div>
      <div className="relative z-10">
        <TopSportsbooksModal />

        {/* Hero Section - Responsive */}
        <section className="relative min-h-[200px] md:min-h-[250px] lg:min-h-[300px] bg-gradient-to-r from-gray-900/80 to-gray-700/80 flex items-center pt-4 overflow-hidden">
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary-red/10 to-gold/10 animate-pulse"></div>
          <div className="relative max-w-6xl mx-auto px-4 text-center text-white py-4 md:py-6 lg:py-8">
            <p className="text-sm md:text-lg mb-2 text-white">Expert Rating & Reviews</p>
            <p className="text-xs md:text-sm mb-4 md:mb-6 text-white">
              Last Updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>

            <div className="mb-4 md:mb-6">
              <p className="text-sm md:text-lg mb-2 md:mb-4 px-2">
                Explore Ontario's Top-Rated Online Betting Sites: Discover a world of excitement with safe and secure
                betting. Our experts have handpicked the best, ensuring you have a seamless and enjoyable betting
                experience.
              </p>
            </div>

            {/* Responsive badges */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 md:gap-6 lg:gap-8 mt-4 md:mt-6">
              <div className="flex items-center space-x-2">
                <div className="bg-primary-red text-white px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-bold">
                  19+
                </div>
                <span className="text-sm md:text-lg font-semibold">Age Restricted</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 md:w-6 md:h-6 text-gold animate-gentle-float" />
                <span className="text-sm md:text-lg font-semibold">Secured & Trusted</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award
                  className="w-4 h-4 md:w-6 md:h-6 text-gold animate-gentle-float"
                  style={{ animationDelay: "1s" }}
                />
                <span className="text-sm md:text-lg font-semibold">Ontario Licensed</span>
              </div>
            </div>
          </div>
        </section>

        {/* Sportsbook Rankings - Proper spacing from hero */}
        <section id="rankings" className="pt-6 md:pt-8 pb-8 md:pb-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-4 md:p-8 mx-2 md:mx-4">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-black mb-4 md:mb-8 text-center">
                Licensed Ontario Betting Site
              </h2>

              {/* Mobile: Single column with proper spacing */}
              <div className="block md:hidden space-y-4">
                {sportsbooks.map((sportsbook, index) => (
                  <div key={sportsbook.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <SportsbookCard sportsbook={sportsbook} />
                  </div>
                ))}
              </div>

              {/* Tablet: 2 columns */}
              <div className="hidden md:block lg:hidden grid grid-cols-2 gap-4 md:gap-6">
                {sportsbooks.map((sportsbook, index) => (
                  <div key={sportsbook.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <SportsbookCard sportsbook={sportsbook} />
                  </div>
                ))}
              </div>

              {/* Desktop: Single column with better spacing */}
              <div className="hidden lg:block space-y-6">
                {sportsbooks.map((sportsbook, index) => (
                  <div key={sportsbook.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <SportsbookCard sportsbook={sportsbook} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How We Choose Sportsbooks */}
        <section className="py-8 md:py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-4 md:p-8 mx-2 md:mx-4">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-black mb-4 md:mb-8 text-center">
                How We Choose Sportsbooks
              </h2>
              <div className="grid md:grid-cols-2 gap-4 md:gap-8">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-black mb-3 md:mb-4">Our Review Process</h3>
                  <ul className="space-y-2 md:space-y-3 text-black text-sm md:text-base">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Only sites with AGCO/iGaming Ontario licenses</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Competitive odds and betting markets</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>User-friendly interface (desktop & mobile)</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Quality customer support</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Secure payment methods</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Fair and transparent bonus terms</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white/30 backdrop-blur-sm p-4 md:p-6 rounded-lg">
                  <h3 className="text-lg md:text-xl font-semibold text-black mb-3 md:mb-4">Editorial Independence</h3>
                  <p className="text-black mb-3 md:mb-4 text-sm md:text-base">
                    No sportsbook pays for placement in our rankings. Our reviews are based solely on our expert
                    analysis and user experience.
                  </p>
                  <p className="text-black text-sm md:text-base">
                    We maintain complete editorial independence to provide you with honest, unbiased recommendations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Safe & Regulated Play */}
        <section className="py-8 md:py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-4 md:p-8 mx-2 md:mx-4">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-black mb-4 md:mb-8 text-center">
                Safe & Regulated Play
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12">
                <div className="text-center">
                  <Shield className="w-8 h-8 md:w-12 md:h-12 text-primary-red mx-auto mb-3 md:mb-4 animate-gentle-float" />
                  <h3 className="text-lg md:text-xl font-semibold text-black mb-2">AGCO Licensed</h3>
                  <p className="text-black text-sm md:text-base">All listed sportsbooks hold valid AGCO licenses</p>
                </div>
                <div className="text-center">
                  <Award
                    className="w-8 h-8 md:w-12 md:h-12 text-primary-red mx-auto mb-3 md:mb-4 animate-gentle-float"
                    style={{ animationDelay: "1s" }}
                  />
                  <h3 className="text-lg md:text-xl font-semibold text-black mb-2">Independently Audited</h3>
                  <p className="text-black text-sm md:text-base">Regular third-party security and fairness audits</p>
                </div>
                <div className="text-center">
                  <Users
                    className="w-8 h-8 md:w-12 md:h-12 text-primary-red mx-auto mb-3 md:mb-4 animate-gentle-float"
                    style={{ animationDelay: "2s" }}
                  />
                  <h3 className="text-lg md:text-xl font-semibold text-black mb-2">Responsible Gaming</h3>
                  <p className="text-black text-sm md:text-base">Mandatory responsible gambling tools and support</p>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-lg md:text-xl font-semibold text-black mb-3 md:mb-4">Trusted Organizations</h3>
                <div className="flex flex-wrap justify-center gap-3 md:gap-6 text-xs md:text-sm">
                  <a
                    href="https://connexontario.ca/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-red hover:text-gold transition-colors duration-300 hover:underline"
                  >
                    ConnexOntario
                  </a>
                  <a
                    href="https://www.gambleaware.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-red hover:text-gold transition-colors duration-300 hover:underline"
                  >
                    GambleAware
                  </a>
                  <a
                    href="https://igamingontario.ca/en/operator/operators"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-red hover:text-gold transition-colors duration-300 hover:underline"
                  >
                    iGaming Ontario
                  </a>
                  <a
                    href="https://www.gpwa.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-red hover:text-gold transition-colors duration-300 hover:underline"
                  >
                    GPWA
                  </a>
                  <a
                    href="https://ecogra.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-red hover:text-gold transition-colors duration-300 hover:underline"
                  >
                    eCOGRA
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How to Find the Best Online Casino in ON */}
        <section className="py-8 md:py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-4 md:p-8 mx-2 md:mx-4">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-black mb-4 md:mb-8 text-center">
                How to Find the Best Online Betting Site in ON
              </h2>

              <div className="mb-8 md:mb-12">
                <p className="text-sm md:text-lg text-black mb-4 md:mb-6">
                  Navigating Ontario's online betting landscape requires understanding the essential elements that
                  define a quality betting experience. From identifying reputable operators to evaluating betting
                  markets, payment systems, and customer service standards, every detail matters. Our comprehensive
                  analysis helps you make informed decisions about where to invest your time and money in Ontario's
                  regulated online betting market.
                </p>
              </div>

              <div className="mb-8 md:mb-12">
                <h3 className="text-lg md:text-2xl font-semibold text-black mb-4 md:mb-6">
                  Popular Betting Markets in Ontario Online Sportsbooks
                </h3>
                <p className="text-black mb-4 md:mb-6 text-sm md:text-base">
                  Selecting the right sportsbook starts with ensuring they offer the betting markets you're seeking.
                  Ontario's licensed operators typically provide comprehensive betting options featuring these popular
                  categories:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="bg-white/30 backdrop-blur-sm p-4 md:p-6 rounded-lg hover:shadow-lg transition-shadow duration-500">
                    <h4 className="text-lg md:text-xl font-semibold text-black mb-2 md:mb-3">Sports Betting</h4>
                    <p className="text-black text-sm md:text-base">
                      Comprehensive sports coverage including NHL, NBA, NFL, MLB, soccer, tennis, and more. Live
                      betting, pre-game markets, and competitive odds across all major sports and leagues.
                    </p>
                  </div>

                  <div className="bg-white/30 backdrop-blur-sm p-4 md:p-6 rounded-lg hover:shadow-lg transition-shadow duration-500">
                    <h4 className="text-lg md:text-xl font-semibold text-black mb-2 md:mb-3">Live Betting</h4>
                    <p className="text-black text-sm md:text-base">
                      Real-time betting opportunities with constantly updated odds during live games. Experience the
                      excitement of in-play betting with instant updates and dynamic market options.
                    </p>
                  </div>

                  <div className="bg-white/30 backdrop-blur-sm p-4 md:p-6 rounded-lg hover:shadow-lg transition-shadow duration-500">
                    <h4 className="text-lg md:text-xl font-semibold text-black mb-2 md:mb-3">Prop Bets</h4>
                    <p className="text-black text-sm md:text-base">
                      Unique betting opportunities beyond traditional game outcomes. Player props, team props, and
                      special event betting markets provide diverse wagering options for every preference.
                    </p>
                  </div>

                  <div className="bg-white/30 backdrop-blur-sm p-4 md:p-6 rounded-lg hover:shadow-lg transition-shadow duration-500">
                    <h4 className="text-lg md:text-xl font-semibold text-black mb-2 md:mb-3">Futures & Outrights</h4>
                    <p className="text-black text-sm md:text-base">
                      Long-term betting markets including championship winners, season totals, and award betting. Plan
                      ahead with futures betting on major tournaments and league outcomes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-8 md:mb-12">
                <h3 className="text-lg md:text-2xl font-semibold text-black mb-4 md:mb-6">
                  Essential Factors for Choosing Ontario Sportsbooks
                </h3>

                <div className="space-y-4 md:space-y-6">
                  <div className="border-l-4 border-primary-red pl-4 md:pl-6 hover:border-gold transition-colors duration-500">
                    <h4 className="text-lg md:text-xl font-semibold text-black mb-2">Banking & Transactions</h4>
                    <p className="text-black text-sm md:text-base">
                      Evaluate available deposit and withdrawal methods including e-wallets like PayPal, mobile payments
                      such as Apple Pay and Google Pay, traditional banking options, and prepaid solutions. Processing
                      times and fees vary significantly between operators.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary-red pl-4 md:pl-6 hover:border-gold transition-colors duration-500">
                    <h4 className="text-lg md:text-xl font-semibold text-black mb-2">Customer Service Excellence</h4>
                    <p className="text-black text-sm md:text-base">
                      Reliable support channels including live chat, email, and phone assistance ensure help is
                      available when needed. Check availability hours, response times, and language support to match
                      your preferences and schedule.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary-red pl-4 md:pl-6 hover:border-gold transition-colors duration-500">
                    <h4 className="text-lg md:text-xl font-semibold text-black mb-2">Betting Market Variety</h4>
                    <p className="text-black text-sm md:text-base">
                      Comprehensive betting options from leading sportsbook providers ensure variety and competitive
                      odds. Whether you prefer specific sports or want to explore new betting markets, extensive options
                      provide better long-term betting value.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary-red pl-4 md:pl-6 hover:border-gold transition-colors duration-500">
                    <h4 className="text-lg md:text-xl font-semibold text-black mb-2">Platform Performance</h4>
                    <p className="text-black text-sm md:text-base">
                      Smooth, responsive interfaces enhance your betting experience across desktop and mobile devices.
                      Fast loading times, intuitive navigation, and attractive design contribute to enjoyable betting
                      sessions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/30 backdrop-blur-sm p-4 md:p-8 rounded-lg mb-8 md:mb-12 hover:shadow-lg transition-shadow duration-500">
                <h3 className="text-lg md:text-2xl font-semibold text-black mb-3 md:mb-4">
                  AGCO Regulation & Player Protection
                </h3>
                <p className="text-black mb-3 md:mb-4 text-sm md:text-base">
                  The Alcohol and Gaming Commission of Ontario (AGCO) oversees all licensed online sportsbook
                  operations, ensuring operators meet strict standards for fairness, security, and responsible betting
                  practices.
                </p>
                <p className="text-black text-sm md:text-base">
                  This regulatory framework protects players through mandatory security protocols, fair betting audits,
                  and responsible gambling tools. Always verify AGCO licensing before registering with any online
                  sportsbook in Ontario.
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-lg md:text-2xl font-semibold text-black mb-3 md:mb-4">
                  Begin Your Ontario Betting Journey
                </h3>
                <p className="text-sm md:text-lg text-black mb-4 md:mb-6">
                  Armed with this knowledge, you're ready to explore Ontario's regulated online betting market. Every
                  operator listed on our site maintains AGCO compliance and offers unique combinations of betting
                  markets, payment options, and user experiences tailored to different betting preferences.
                </p>
                <p className="text-black text-sm md:text-base">
                  Review our detailed assessments to find the sportsbook that best matches your betting style and
                  requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
