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
          <h3 className="text-4xl font-bold mb-12">Seed round: $1.8M for 18 months of runway.</h3>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl border border-gray-200">
              <h4 className="text-2xl font-bold mb-4">Use of Funds</h4>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Hardware Production</span>
                    <span className="font-bold">40%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Team Growth</span>
                    <span className="font-bold">35%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '35%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Market Expansion</span>
                    <span className="font-bold">20%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '20%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Operations</span>
                    <span className="font-bold">5%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '5%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-200 md:col-span-2">
              <h4 className="text-2xl font-bold mb-6">Financial Projections</h4>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-4 font-medium">Metric</th>
                      <th className="text-left py-4 font-medium">Year 1</th>
                      <th className="text-left py-4 font-medium">Year 2</th>
                      <th className="text-left py-4 font-medium">Year 3</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 font-medium">Active Cylinders</td>
                      <td className="py-4">2,500</td>
                      <td className="py-4">25,000</td>
                      <td className="py-4">100,000</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 font-medium">Revenue</td>
                      <td className="py-4">$450k</td>
                      <td className="py-4">$4.2M</td>
                      <td className="py-4">$18.5M</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 font-medium">Gross Margin</td>
                      <td className="py-4">55%</td>
                      <td className="py-4">65%</td>
                      <td className="py-4">70%</td>
                    </tr>
                    <tr>
                      <td className="py-4 font-medium">EBITDA</td>
                      <td className="py-4">-$1.2M</td>
                      <td className="py-4">-$0.4M</td>
                      <td className="py-4">$3.8M</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="bg-blue-50 p-8 rounded-2xl">
            <h4 className="text-2xl font-bold mb-6">Exit Potential</h4>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-sm text-gray-500">Potential Acquirers</div>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span>Gas Distribution Giants</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span>IoT Platform Companies</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span>Industrial Automation Firms</span>
                  </li>
                </ul>
              </div>
              <div>
                <div className="text-sm text-gray-500">Comparable Transactions</div>
                <div className="mt-2 text-2xl font-bold">8‑12x Revenue</div>
                <p className="text-gray-600 text-sm">IoT‑enabled SaaS businesses in industrial logistics</p>
              </div>
              <div>
                <div className="text-sm text-gray-500">Projected Timeline</div>
                <div className="mt-2 text-2xl font-bold">5‑7 years</div>
                <p className="text-gray-600 text-sm">To reach $100M ARR and acquisition interest</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}