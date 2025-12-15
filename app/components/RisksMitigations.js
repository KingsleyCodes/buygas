// app/components/RisksMitigations.js
export default function RisksMitigations() {
  const risks = [
    {
      risk: 'Hardware Scaling',
      severity: 'Medium',
      mitigation: 'Partner with established EMS provider; design for DFM from day one.'
    },
    {
      risk: 'Distributor Partnerships',
      severity: 'High',
      mitigation: 'Pilot with regional distributors first; demonstrate clear ROI before national rollout.'
    },
    {
      risk: 'Regulatory Compliance',
      severity: 'Low',
      mitigation: 'Device is non‑invasive and does not modify pressure vessel; already cleared in initial markets.'
    },
    {
      risk: 'Price Sensitivity',
      severity: 'Medium',
      mitigation: 'Focus on commercial users where value proposition is strongest; offer financing options.'
    },
  ]
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl">
          <div className="flex items-center mb-4">
            <div className="w-12 h-0.5 bg-blue-600 mr-4"></div>
            <h2 className="text-3xl font-bold">Risks & Mitigations</h2>
          </div>
          <h3 className="text-4xl font-bold mb-12">Transparent assessment of challenges and our strategies.</h3>
          <div className="overflow-hidden border border-gray-200 rounded-2xl bg-white">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="text-left p-6 font-bold">Risk Factor</th>
                  <th className="text-left p-6 font-bold">Severity</th>
                  <th className="text-left p-6 font-bold">Mitigation Plan</th>
                </tr>
              </thead>
              <tbody>
                {risks.map((item) => (
                  <tr key={item.risk} className="border-b border-gray-100 last:border-0">
                    <td className="p-6 font-medium">{item.risk}</td>
                    <td className="p-6">
                      <span className={`inline-flex items-center px-4 py-1 rounded-full text-sm font-medium ${item.severity === 'High' ? 'bg-red-100 text-red-800' : item.severity === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}`}>
                        {item.severity}
                      </span>
                    </td>
                    <td className="p-6 text-gray-600">{item.mitigation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}