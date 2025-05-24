
import Link from "next/link"

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="mb-8">
          <Link href="/" className="text-primary-red hover:underline">
            ← Back to Home
          </Link>
        </div>

        <h1 className="text-4xl font-bold text-black mb-4">Terms of Service</h1>
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
            <h2 className="text-2xl font-semibold text-black mb-4">Agreement to Terms</h2>
            <p>
              Welcome to OntarioBettingSite.com. These Terms of Service ("Terms") govern your use of our website and
              services. By accessing or using our website, you agree to be bound by these Terms. If you do not agree to
              these Terms, please do not use our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-4">Description of Service</h2>
            <p className="mb-4">OntarioBettingSite.com is an informational website that provides:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Reviews and information about licensed Ontario sportsbooks and online casinos</li>
              <li>Educational content about online gambling in Ontario</li>
              <li>Comparison tools and rankings of licensed operators</li>
              <li>Information about bonuses, promotions, and terms and conditions</li>
              <li>Responsible gambling resources and support information</li>
            </ul>
            <p>
              <strong>Important:</strong> We are NOT a gambling operator. We do not offer gambling services, accept
              bets, or process gambling transactions. We are an independent review and information website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-4">Age Requirements and Eligibility</h2>
            <p className="mb-4">You must meet the following requirements to use our website:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Be at least 19 years of age (the legal gambling age in Ontario)</li>
              <li>Be legally permitted to access gambling-related information in your jurisdiction</li>
              <li>Not be prohibited from using our services under applicable laws</li>
              <li>Provide accurate and truthful information when requested</li>
            </ul>
            <p>
              We reserve the right to verify your age and identity at any time. If you do not meet these requirements,
              you must not use our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-4">Acceptable Use Policy</h2>
            <p className="mb-4">When using our website, you agree to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Use the website only for lawful purposes</li>
              <li>Respect intellectual property rights</li>
              <li>Not attempt to gain unauthorized access to our systems</li>
              <li>Not transmit harmful code, viruses, or malware</li>
              <li>Not engage in fraudulent or deceptive activities</li>
              <li>Not harass, abuse, or harm other users</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-4">Information Accuracy and Disclaimers</h2>
            <p className="mb-4">While we strive to provide accurate and up-to-date information, please note:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>All information is provided "as is" without warranties of any kind</li>
              <li>Sportsbook terms, conditions, and bonuses may change without notice</li>
              <li>We are not responsible for the accuracy of third-party information</li>
              <li>Users should verify current terms directly with operators before making decisions</li>
              <li>Our reviews and rankings reflect our editorial opinions and analysis</li>
            </ul>
            <p>
              We disclaim all warranties, express or implied, including but not limited to warranties of
              merchantability, fitness for a particular purpose, and non-infringement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-4">Third-Party Links and Services</h2>
            <p>
              Our website contains links to third-party websites and services, including licensed sportsbooks and
              casinos. We are not responsible for the content, privacy practices, or terms of service of these
              third-party sites. Your interactions with third-party operators are governed by their respective terms and
              conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-4">Intellectual Property Rights</h2>
            <p className="mb-4">
              All content on our website, including but not limited to text, graphics, logos, images, and software, is
              protected by intellectual property laws. You may:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>View and print content for personal, non-commercial use</li>
              <li>Share links to our content on social media and other platforms</li>
            </ul>
            <p className="mb-4">You may not:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Reproduce, distribute, or republish our content without permission</li>
              <li>Use our content for commercial purposes without authorization</li>
              <li>Modify, adapt, or create derivative works from our content</li>
              <li>Remove or alter copyright notices or proprietary markings</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-4">Responsible Gambling</h2>
            <p className="mb-4">We are committed to promoting responsible gambling practices:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Gambling should be viewed as entertainment, not as a way to make money</li>
              <li>Never gamble more than you can afford to lose</li>
              <li>Set time and money limits before you start gambling</li>
              <li>Do not chase losses or gamble when upset or under the influence</li>
              <li>Seek help if gambling becomes a problem</li>
            </ul>
            <p>
              If you or someone you know has a gambling problem, contact ConnexOntario at 1-866-531-2600 or visit
              ConnexOntario.ca for support and resources.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-4">Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, OntarioBettingSite.com and its affiliates shall not be liable for
              any direct, indirect, incidental, special, consequential, or punitive damages arising from your use of our
              website or services, including but not limited to lost profits, data loss, or business interruption.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-4">Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless OntarioBettingSite.com and its affiliates from any
              claims, damages, losses, or expenses arising from your use of our website, violation of these Terms, or
              infringement of any third-party rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-4">Governing Law and Jurisdiction</h2>
            <p>
              These Terms are governed by the laws of Ontario, Canada. Any disputes arising from these Terms or your use
              of our website shall be subject to the exclusive jurisdiction of the courts of Ontario.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-4">Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting
              on our website. Your continued use of our website after changes are posted constitutes acceptance of the
              modified Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-4">Contact Information</h2>
            <p>
              If you have questions about these Terms of Service, please contact us through our website contact form. We
              will respond to your inquiry in a timely manner.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
