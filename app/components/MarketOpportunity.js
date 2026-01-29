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
          <h3 className="text-4xl font-bold mb-8">Riding Nigeria's aggressive push for 5 million MT LPG consumption by 2030.</h3>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-xl text-gray-600 mb-8">
                Aligned with the National LPG Expansion Plan and Clean Cooking Policy (NCCP 2023), Buy Gas directly addresses the key barriers to adoption: upfront cost and supply uncertainty.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <p className="font-bold">Government Target:</p>
                    <p className="text-gray-600">5 million metric tonnes domestic consumption & conversion of 30 million households by 2030.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <p className="font-bold">Our Target Segments:</p>
                    <p className="text-gray-600"><span className="font-semibold">B2C:</span> Low-to-middle income households.<br/><span className="font-semibold">B2B:</span> Restaurants, bakeries, and high-consumption SMEs.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <p className="font-bold">Unique Position:</p>
                    <p className="text-gray-600">First-mover with a fully integrated IoT platform for both <span className="font-semibold">Prepaid (Affordability)</span> and <span className="font-semibold">Postpaid (Efficiency)</span> markets.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
              <h4 className="text-2xl font-bold mb-6">Revenue Streams</h4>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">LPG Sales (Per kg Margin)</span>
                    <span className="font-bold text-blue-700">Primary</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Subscription & Platform Fees</span>
                    <span className="font-bold text-blue-700">Recurring</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Data Analytics & Licensing</span>
                    <span className="font-bold text-blue-700">High Margin</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '50%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Cylinder & Asset Lease</span>
                    <span className="font-bold text-blue-700">B2B Lock-in</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '60%' }}></div>
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