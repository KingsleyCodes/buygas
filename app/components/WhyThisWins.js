// app/components/WhyThisWins.js
export default function WhyThisWins() {
  const advantages = [
    { title: 'Integrated Tech Stack', desc: 'We own the full stack: IoT hardware, dual-billing platform, logistics software, and data analytics. This creates a defensible moat.' },
    { title: 'Dual-Model Flexibility', desc: 'Only platform serving both Prepaid (affordability) and Postpaid (efficiency) markets with the same hardware.' },
    { title: 'Asset-Light & Scalable', desc: 'No filling plant CAPEX. Partner with existing infrastructure. Technology scales linearly with meter deployment.' },
    { title: 'Government Policy Alignment', desc: 'Directly enables Nigeria’s LPG expansion goals. Positions us for grants and strategic partnerships.' },
  ]
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl">
          <div className="flex items-center mb-4">
            <div className="w-12 h-0.5 bg-blue-600 mr-4"></div>
            <h2 className="text-3xl font-bold">Competitive Advantage</h2>
          </div>
          <h3 className="text-4xl font-bold mb-12">Built for the Nigerian market, with defensible barriers to entry.</h3>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {advantages.map((adv) => (
              <div key={adv.title} className="flex items-start bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-6 flex-shrink-0">
                  <div className="w-4 h-4 bg-green-600 rounded-full"></div>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3">{adv.title}</h4>
                  <p className="text-gray-600">{adv.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 p-8 bg-white rounded-2xl border border-gray-200 shadow-sm">
            <h4 className="text-2xl font-bold mb-6">Competitive Landscape</h4>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px]">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-4 font-medium">Feature</th>
                    <th className="text-left py-4 font-medium">Buy Gas (Our Solution)</th>
                    <th className="text-left py-4 font-medium">Traditional Distributors</th>
                    <th className="text-left py-4 font-medium">Basic Cylinder Exchange</th>
                    <th className="text-left py-4 font-medium">Manual Pay-as-you-go</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 font-medium">Prepaid Micro-Payments</td>
                    <td className="py-4">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mx-auto">
                        <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                      </div>
                    </td>
                    <td className="py-4">
                      <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mx-auto">
                        <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                      </div>
                    </td>
                    <td className="py-4">
                      <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mx-auto">
                        <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                      </div>
                    </td>
                    <td className="py-4">
                      <div className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center mx-auto">
                        <div className="w-3 h-3 bg-yellow-600 rounded-full"></div>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 font-medium">B2B Cost Tracking & Analytics</td>
                    <td className="py-4">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mx-auto">
                        <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                      </div>
                    </td>
                    <td className="py-4">
                      <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mx-auto">
                        <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                      </div>
                    </td>
                    <td className="py-4">
                      <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mx-auto">
                        <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                      </div>
                    </td>
                    <td className="py-4">
                      <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mx-auto">
                        <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 font-medium">Automated Guaranteed Supply</td>
                    <td className="py-4">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mx-auto">
                        <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                      </div>
                    </td>
                    <td className="py-4">
                      <div className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center mx-auto">
                        <div className="w-3 h-3 bg-yellow-600 rounded-full"></div>
                      </div>
                    </td>
                    <td className="py-4">
                      <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mx-auto">
                        <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                      </div>
                    </td>
                    <td className="py-4">
                      <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mx-auto">
                        <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 font-medium">IoT Data & Traceability</td>
                    <td className="py-4">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mx-auto">
                        <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                      </div>
                    </td>
                    <td className="py-4">
                      <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mx-auto">
                        <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                      </div>
                    </td>
                    <td className="py-4">
                      <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mx-auto">
                        <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                      </div>
                    </td>
                    <td className="py-4">
                      <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mx-auto">
                        <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-8 text-sm text-gray-600">
              <span className="font-bold">Key Insight:</span> We compete with "inertia" and manual processes. No existing player offers the combined benefits of affordability, control, and automation.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}