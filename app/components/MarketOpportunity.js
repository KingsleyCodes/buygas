// app/components/MarketOpportunity.js
export default function MarketOpportunity() {
  return (
    <section id="market" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl">
          <div className="flex items-center mb-4">
            <div className="w-12 h-0.5 bg-blue-600 mr-4"></div>
            <h2 className="text-3xl font-bold">Market Opportunity</h2>
          </div>
          <h3 className="text-4xl font-bold mb-8">A $65B global LPG market ready for digital transformation.</h3>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-xl text-gray-600 mb-8">
                Over 1 billion gas cylinders are in circulation worldwide. The transition from manual to automated management represents a multi‑billion dollar service layer opportunity.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  </div>
                  <p><span className="font-bold">TAM:</span> $12.4B serviceable market across commercial kitchens and high‑use households in initial geographies.</p>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  </div>
                  <p><span className="font-bold">SAM:</span> $3.1B focusing on urban commercial kitchens in Southeast Asia and India.</p>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  </div>
                  <p><span className="font-bold">SOM:</span> $78M achievable within 3 years via partnerships with top‑tier distributors.</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-200">
              <h4 className="text-2xl font-bold mb-6">Market Growth Drivers</h4>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">LPG Adoption in Emerging Markets</span>
                    <span className="font-bold">+8% CAGR</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Demand for Operational Efficiency</span>
                    <span className="font-bold">+12% CAGR</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">IoT Adoption in Logistics</span>
                    <span className="font-bold">+15% CAGR</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}