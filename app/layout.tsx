import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Top Ontario Betting Site - Licensed Online Sportsbooks & Betting",
  description:
    "Discover Ontario's top-rated licensed online sportsbooks and betting sites. Expert reviews, exclusive bonuses, and safe betting with AGCO-licensed operators. 19+ only.",
  keywords:
    "Ontario online betting, Ontario sportsbook, AGCO licensed, iGaming Ontario, sports betting Ontario, betting bonuses Ontario, online sportsbook",
  authors: [{ name: "Ontario Betting Site" }],
  creator: "Ontario Betting Site",
  publisher: "Ontario Betting Site",
  robots: "index, follow",
  openGraph: {
    title: "Top Ontario Betting Site - Licensed Online Sportsbooks & Betting",
    description:
      "Discover Ontario's top-rated licensed online sportsbooks and betting sites. Expert reviews, exclusive bonuses, and safe betting with AGCO-licensed operators.",
    url: "https://ontariobettingsite.com",
    siteName: "Ontario Betting Site",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Top Ontario Betting Site - Licensed Online Sportsbooks",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Ontario Betting Site - Licensed Online Sportsbooks & Betting",
    description:
      "Discover Ontario's top-rated licensed online sportsbooks and betting sites. Expert reviews, exclusive bonuses, and safe betting.",
    images: ["/og-image.jpg"],
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#e60023",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="pt-12 md:pt-16">
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  )
}
