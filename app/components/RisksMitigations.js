// app/components/RisksMitigations.js
export default function RisksMitigations() {
  const risks = [
    {
      risk: 'Forex/Inflation Impact',
      severity: 'High',
      description: 'Naira depreciation increases the cost of imported IoT hardware components.',
      mitigation: 'Source forex forward contracts. Explore local assembly partnerships long-term. Factor buffer into unit economics.'
    },
    {
      risk: 'LPG Pricing Volatility',
      severity: 'High',
      description: 'Rapid changes in wholesale LPG price can compress our per-kg margins.',
      mitigation: 'Hedge through fixed-price contracts with suppliers. Implement flexible pricing algorithms in the platform.'
    },
    {
      risk: 'Partnership Reliance',
      severity: 'High',
      description: 'High dependency on third-party filling plants and logistics partners for operations.',
      mitigation: 'Diversify partner network. Build strong SLAs and performance-based incentives. Control customer interface and data.'
    },
    {
      risk: 'Scale Limitation',
      severity: 'Medium',
      description: 'Initial capital (N30M) only funds 250 IoT units, limiting Year 1 revenue potential.',
      mitigation: 'Focus on high-ARPU B2B contracts first to maximize revenue per unit. Use data to secure scale capital in Year 2.'
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl">
          <div className="flex items-center mb-4">
            <div className="w-12 h-0.5 bg-blue-600 mr-4"></div>
            <h2 className="text-3xl font-bold">Risk Assessment & Mitigation</h2>
          </div>
          <h3 className="text-4xl font-bold mb-12">Transparent about challenges, prepared with strategies.</h3>
          
          <div className="overflow-hidden border border-gray-200 rounded-2xl bg-white shadow-sm">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="text-left p-6 font-bold">Risk Factor</th>
                  <th className="text-left p-6 font-bold">Severity</th>
                  <th className="text-left p-6 font-bold">Description</th>
                  <th className="text-left p-6 font-bold">Mitigation Plan</th>
                </tr>
              </thead>
              <tbody>
                {risks.map((item, index) => (
                  <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50">
                    <td className="p-6 font-medium">{item.risk}</td>
                    <td className="p-6">
                      <span className={`inline-flex items-center px-4 py-1 rounded-full text-sm font-bold ${item.severity === 'High' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'}`}>
                        {item.severity}
                      </span>
                    </td>
                    <td className="p-6 text-gray-600">{item.description}</td>
                    <td className="p-6 text-gray-700 font-medium">{item.mitigation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12 bg-blue-50 p-8 rounded-2xl border border-blue-100">
            <h4 className="text-2xl font-bold mb-4">Our Core Strengths Offset Risks</h4>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="font-bold text-lg mb-2">Low CapEx Model</div>
                <p className="text-gray-600">No plant ownership saves &gt;N11M. We are a tech layer on existing infrastructure.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="font-bold text-lg mb-2">B2B Lock-in</div>
                <p className="text-gray-600">Providing cylinders and meters creates high switching costs and retention.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="font-bold text-lg mb-2">First-Mover Tech</div>
                <p className="text-gray-600">Very little competition on the integrated IoT + dual-subscription model.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}