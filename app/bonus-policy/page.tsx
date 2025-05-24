
import Link from "next/link"

export default function BonusPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="mb-8">
          <Link href="/" className="text-primary-red hover:underline">
            ← Back to Home
          </Link>
        </div>

        <h1 className="text-4xl font-bold text-black mb-4">Bonus Policy</h1>
        <p className="text-gray-600 mb-8">
          Last Updated:{" "}
          {new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-black mb-4">
              Understanding Online Casino and Sportsbook Bonuses
            </h2>
            <p>
              This Bonus Policy provides comprehensive information about the various types of bonuses and promotions
              offered by licensed Ontario online casinos and sportsbooks featured on our website. Understanding bonus
              terms and conditions is crucial for making informed decisions about your online gambling experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-4">Types of Bonuses</h2>

            <h3 className="text-xl font-semibold text-black mb-3">Welcome Bonuses</h3>
            <p className="mb-4">
              Welcome bonuses are promotional offers designed to attract new players to online casinos and sportsbooks.
              Common types include:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Deposit Match Bonuses:</strong> The operator matches a percentage of your first deposit (e.g.,
                100% up to $200)
              </li>
              <li>
                <strong>Free Bets:</strong> Risk-free betting credits for sportsbook customers
              </li>
              <li>
                <strong>Free Spins:</strong> Complimentary spins on selected slot games
              </li>
              <li>
                <strong>No Deposit Bonuses:</strong> Small bonuses awarded without requiring a deposit
              </li>
              <li>
                <strong>Cashback Offers:</strong> Percentage of losses returned as bonus funds
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-black mb-3">Ongoing Promotions</h3>
            <p className="mb-4">Licensed operators also offer regular promotions for existing customers:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Reload bonuses on subsequent deposits</li>
              <li>Loyalty program rewards and VIP benefits</li>
              <li>Seasonal and special event promotions</li>
              <li>Tournament and leaderboard competitions</li>
              <li>Refer-a-friend bonuses</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-4">Eligibility Requirements</h2>
            <p className="mb-4">
              To qualify for bonuses and promotions, players typically must meet specific criteria:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>New Customer Status:</strong> Most welcome bonuses are exclusively for first-time customers
              </li>
              <li>
                <strong>Age Verification:</strong> Must be 19 years or older (Ontario legal gambling age)
              </li>
              <li>
                <strong>Geographic Restrictions:</strong> Must be physically located in Ontario when claiming bonuses
              </li>
              <li>
                <strong>Account Verification:</strong> Complete identity verification process
              </li>
              <li>
                <strong>Single Account Policy:</strong> One bonus per person, household, or IP address
              </li>
              <li>
                <strong>Payment Method Restrictions:</strong> Some bonuses exclude certain deposit methods
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-4">Minimum Deposit Requirements</h2>
            <p className="mb-4">Most bonuses require a minimum deposit to activate. Common requirements include:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Minimum deposits typically range from $10 to $50</li>
              <li>Higher deposit amounts may unlock larger bonus percentages</li>
              <li>Some premium bonuses require deposits of $100 or more</li>
              <li>Deposit methods may affect minimum requirements</li>
              <li>Currency conversion may apply for non-CAD deposits</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-4">Wagering Requirements and Playthrough</h2>
            <p className="mb-4">
              Wagering requirements are conditions that must be met before bonus funds can be withdrawn as cash:
            </p>

            <h3 className="text-xl font-semibold text-black mb-3">How Wagering Requirements Work</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Expressed as a multiple of the bonus amount (e.g., 35x wagering requirement)</li>
              <li>May apply to bonus funds only or bonus plus deposit amount</li>
              <li>Different games contribute different percentages toward requirements</li>
              <li>Slots typically contribute 100%, while table games may contribute 10-20%</li>
              <li>Some games may be excluded entirely from wagering contributions</li>
            </ul>

            <h3 className="text-xl font-semibold text-black mb-3">Game Contribution Rates</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Slots:</strong> Usually 100% contribution
              </li>
              <li>
                <strong>Blackjack:</strong> Typically 10-20% contribution
              </li>
              <li>
                <strong>Roulette:</strong> Often 10-20% contribution
              </li>
              <li>
                <strong>Baccarat:</strong> Usually 10% contribution or excluded
              </li>
              <li>
                <strong>Live Dealer Games:</strong> Varies by operator and game type
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-4">Time Limits and Expiration</h2>
            <p className="mb-4">All bonuses come with time restrictions that players must understand:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Claim Period:</strong> Time limit to claim bonus after account registration (usually 7-30 days)
              </li>
              <li>
                <strong>Wagering Period:</strong> Time to complete wagering requirements (typically 7-90 days)
              </li>
              <li>
                <strong>Bonus Expiry:</strong> Unused bonus funds expire after specified period
              </li>
              <li>
                <strong>Free Spin Validity:</strong> Free spins often expire within 24-72 hours
              </li>
              <li>
                <strong>Extension Policies:</strong> Some operators may extend deadlines upon request
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-4">Betting Limits and Restrictions</h2>
            <p className="mb-4">Bonus funds are subject to various betting restrictions:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Maximum Bet Limits:</strong> Usually $5-$10 per spin/hand while bonus is active
              </li>
              <li>
                <strong>Game Restrictions:</strong> Certain games may be prohibited during bonus play
              </li>
              <li>
                <strong>Feature Buy Restrictions:</strong> Bonus buy features in slots often prohibited
              </li>
              <li>
                <strong>Progressive Jackpot Exclusions:</strong> Bonus funds may not qualify for progressive jackpots
              </li>
              <li>
                <strong>Side Bet Limitations:</strong> Side bets in table games may be restricted
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-4">Withdrawal Conditions</h2>
            <p className="mb-4">Before withdrawing bonus-related winnings, players must typically:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Complete all wagering requirements</li>
              <li>Meet minimum withdrawal amounts</li>
              <li>Verify account identity and payment methods</li>
              <li>Comply with anti-money laundering requirements</li>
              <li>Use the same payment method for deposits and withdrawals when possible</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-4">Bonus Abuse and Fair Play</h2>
            <p className="mb-4">Licensed operators have strict policies against bonus abuse:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Creating multiple accounts to claim bonuses repeatedly</li>
              <li>Colluding with other players to manipulate bonus systems</li>
              <li>Using betting strategies designed to guarantee profits from bonuses</li>
              <li>Exploiting software glitches or errors</li>
              <li>Providing false information during registration</li>
            </ul>
            <p>Violations may result in bonus forfeiture, account closure, and confiscation of winnings.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-4">Reading the Fine Print</h2>
            <p className="mb-4">Before claiming any bonus, always review the complete terms and conditions:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Understand all wagering requirements and time limits</li>
              <li>Check which games contribute to wagering requirements</li>
              <li>Verify maximum bet limits during bonus play</li>
              <li>Confirm eligibility requirements and restrictions</li>
              <li>Review withdrawal conditions and processing times</li>
              <li>Understand consequences of bonus rule violations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-4">Our Recommendation</h2>
            <p>
              While bonuses can enhance your gaming experience, they should not be the primary factor in choosing an
              online casino or sportsbook. Consider the overall quality of the operator, including game selection,
              customer service, payment options, and reputation. Always gamble responsibly and within your means.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-4">Disclaimer</h2>
            <p>
              Bonus terms and conditions are subject to change without notice. The information provided here is for
              educational purposes only. Always verify current bonus terms directly with the operator before making a
              deposit or claiming any promotional offer. We are not responsible for any discrepancies between our
              information and the operator's current terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-4">Questions and Support</h2>
            <p>
              If you have questions about specific bonus terms or need clarification about promotional offers, contact
              the respective operator's customer support team directly. They can provide the most current and accurate
              information about their bonus policies and terms.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
