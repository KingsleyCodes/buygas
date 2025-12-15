// app/components/InvestorCTA.js
export default function InvestorCTA() {
  return (
    <section className="py-20 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-0.5 bg-blue-600 mr-4"></div>
            <h2 className="text-3xl font-bold">Investor Call‑To‑Action</h2>
          </div>
          <h3 className="text-4xl font-bold mb-8">Join us in building the future of gas supply automation.</h3>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            We are seeking strategic investors who understand hardware‑software integration and supply chain digitization. The seed round is open with $1.2M already committed.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl border border-gray-200 text-left">
              <h4 className="text-2xl font-bold mb-4">For Investors</h4>
              <p className="text-gray-600 mb-6">Access detailed financial models, technical specifications, and pilot results.</p>
              <a href="mailto:investors@BuyGas.com?subject=Investment%20Inquiry" className="inline-flex items-center text-blue-600 font-medium">
                Request Data Room
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-200 text-left">
              <h4 className="text-2xl font-bold mb-4">For Partners</h4>
              <p className="text-gray-600 mb-6">Gas distributors, restaurant chains, or logistics providers interested in piloting.</p>
              <a href="mailto:partners@BuyGas.com?subject=Partnership%20Inquiry" className="inline-flex items-center text-blue-600 font-medium">
                Discuss Partnership
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-200">
            <p className="text-gray-500 mb-6">Ready to schedule a meeting with the founding team?</p>
            <a href="mailto:ceo@BuyGas.com?subject=Meeting%20Request" className="inline-block bg-blue-600 text-white font-bold py-4 px-12 rounded-xl hover:bg-blue-700 transition">
              Contact the CEO
            </a>
            <p className="text-sm text-gray-500 mt-6">BuyGas Inc. • 123 Innovation Drive • San Francisco, CA</p>
          </div>
        </div>
      </div>
    </section>
  )
}