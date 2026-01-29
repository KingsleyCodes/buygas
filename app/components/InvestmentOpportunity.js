// app/components/InvestmentOpportunity.js
export default function InvestmentOpportunity() {
  return (
    <section id="investment" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl">
          <div className="flex items-center mb-4">
            <div className="w-12 h-0.5 bg-blue-600 mr-4"></div>
            <h2 className="text-3xl font-bold">Investment Opportunity</h2>
          </div>
          <h3 className="text-4xl font-bold mb-12">Pre-seed: N30 Million to de-risk technology and launch the pilot.</h3>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
              <h4 className="text-2xl font-bold mb-6">Use of Funds (N30M)</h4>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">IoT Hardware & Software (63%)</span>
                    <span className="font-bold">N18.875M</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '63%' }}></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">75 IoT meters & platform development</p>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Working Capital & Ops (30%)</span>
                    <span className="font-bold">N9.125M</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '30%' }}></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">Gas inventory, salaries, logistics, launch</p>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Physical Assets (7%)</span>
                    <span className="font-bold">N2M</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '7%' }}></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">Cylinders for B2B/B2C contracts</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm md:col-span-2">
              <h4 className="text-2xl font-bold mb-6">5-Year Financial Projections (Naira)</h4>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-4 font-medium">Metric</th>
                      <th className="text-left py-4 font-medium">Year 1</th>
                      <th className="text-left py-4 font-medium">Year 2</th>
                      <th className="text-left py-4 font-medium">Year 3</th>
                      <th className="text-left py-4 font-medium">Year 4</th>
                      <th className="text-left py-4 font-medium">Year 5</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 font-medium">Active IoT Units</td>
                      <td className="py-4 font-bold">75</td>
                      <td className="py-4 font-bold">5,250</td>
                      <td className="py-4 font-bold">10,500</td>
                      <td className="py-4 font-bold">15,750</td>
                      <td className="py-4 font-bold">20,475</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 font-medium">Total Revenue</td>
                      <td className="py-4">N15.66M</td>
                      <td className="py-4">N565.5M</td>
                      <td className="py-4">N1,131M</td>
                      <td className="py-4">N1,696.5M</td>
                      <td className="py-4">N2,205.45M</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 font-medium">Gross Profit (15%)</td>
                      <td className="py-4">N2.35M</td>
                      <td className="py-4">N84.8M</td>
                      <td className="py-4">N169.7M</td>
                      <td className="py-4">N254.5M</td>
                      <td className="py-4">N330.8M</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-4 font-medium">Net Profit Before Tax</td>
                      <td className="py-4 text-red-600">-N10.15M</td>
                      <td className="py-4 text-green-600">N39.8M</td>
                      <td className="py-4 text-green-600">N94.7M</td>
                      <td className="py-4 text-green-600">N154.5M</td>
                      <td className="py-4 text-green-600">N200.8M</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
            <h4 className="text-2xl font-bold mb-6">Investor Returns (35% Equity for N30M)</h4>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-sm text-gray-500 mb-2">Cumulative Cash Returns (5 Years)</div>
                <div className="text-3xl font-bold text-gray-800">N42.6M</div>
                <p className="text-gray-600 text-sm mt-2">Projected dividends and profit share.</p>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-2">Exit Value (Year 5, 30% Equity)</div>
                <div className="text-3xl font-bold text-gray-800">N180.7M</div>
                <p className="text-gray-600 text-sm mt-2">Based on revenue multiples at scale.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border">
                <div className="text-sm text-gray-500 mb-2">Total Investor Return</div>
                <div className="text-3xl font-bold text-green-700">N223.4M</div>
                <div className="text-lg font-bold text-green-700 mt-1">744.5% ROI</div>
                <p className="text-gray-600 text-sm mt-2">Over 5 years.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}