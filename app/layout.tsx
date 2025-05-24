import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Top Ontario Betting Site - Licensed Online Casinos & Sportsbooks",
  description:
    "Discover Ontario's top-rated licensed online casinos and sportsbooks. Expert reviews, exclusive bonuses, and safe gaming with AGCO-licensed operators. 19+ only.",
  keywords:
    "Ontario online casino, Ontario sportsbook, AGCO licensed, iGaming Ontario, online betting Ontario, casino bonuses Ontario",
  authors: [{ name: "Ontario Betting Site" }],
  creator: "Ontario Betting Site",
  publisher: "Ontario Betting Site",
  robots: "index, follow",
  openGraph: {
    title: "Top Ontario Betting Site - Licensed Online Casinos & Sportsbooks",
    description:
      "Discover Ontario's top-rated licensed online casinos and sportsbooks. Expert reviews, exclusive bonuses, and safe gaming with AGCO-licensed operators.",
    url: "https://ontariobettingsite.com",
    siteName: "Ontario Betting Site",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "/bg.jpg",
        width: 1200,
        height: 630,
        alt: "Top Ontario Betting Site - Licensed Online Casinos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Ontario Betting Site - Licensed Online Casinos & Sportsbooks",
    description:
      "Discover Ontario's top-rated licensed online casinos and sportsbooks. Expert reviews, exclusive bonuses, and safe gaming.",
    images: ["/bg.jpg"],
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
