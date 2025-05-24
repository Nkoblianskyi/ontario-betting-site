export interface Sportsbook {
  id: string
  name: string
  url: string
  bonus: string
  rating: number
  logo: string
}

export const sportsbooks: Sportsbook[] = [
  {
    id: "tooniebet",
    name: "Tooniebet",
    url: "https://tooniebet.com/ca/sport",
    bonus: "First Deposit Bonus 100% up to $150",
    rating: 9.9,
    logo: "/tooniebet.png",
  },
  // {
  //   id: "bet365",
  //   name: "Bet365",
  //   url: "https://bet365.com",
  //   bonus: "Up to $200 in Bet Credits",
  //   rating: 9.8,
  //   logo: "/placeholder.svg?height=60&width=60&text=Bet365",
  // },
  // {
  //   id: "betway",
  //   name: "Betway",
  //   url: "https://betway.com",
  //   bonus: "100% up to $250",
  //   rating: 9.7,
  //   logo: "/placeholder.svg?height=60&width=60&text=Betway",
  // },
]
