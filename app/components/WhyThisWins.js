// app/components/WhyThisWins.js
export default function WhyThisWins() {
  const advantages = [
    { title: 'Full‑Stack Control', desc: 'We own the hardware, software, and data layer, creating a defensible moat.' },
    { title: 'Distributor‑Neutral', desc: 'Platform works with any gas supplier, avoiding channel conflict.' },
    { title: 'Low Installation Barrier', desc: 'Device attaches in under a minute—no plumbing or modifications.' },
    { title: 'Predictive First', desc: 'Our algorithms forecast depletion before it becomes a problem.' },
  ]
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl">
          <div className="flex items-center mb-4">
            <div className="w-12 h-0.5 bg-blue-600 mr-4"></div>
            <h2 className="text-3xl font-bold">Why This Wins</h2>
          </div>
          <h3 className="text-4xl font-bold mb-12">A defensible position built on hardware‑software integration.</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {advantages.map((adv) => (
              <div key={adv.title} className="flex items-start">
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
          <div className="mt-16 p-8 bg-white rounded-2xl border border-gray-200">
            <h4 className="text-2xl font-bold mb-6">Competitive Landscape</h4>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-4 font-medium"></th>
                    <th className="text-left py-4 font-medium">BuyGas</th>
                    <th className="text-left py-4 font-medium">Manual Systems</th>
                    <th className="text-left py-4 font-medium">Smart Valves</th>
                    <th className="text-left py-4 font-medium">Weighing Scales</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 font-medium">Real‑Time Monitoring</td>
                    <td className="py-4">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                        <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                      </div>
                    </td>
                    <td className="py-4">
                      <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                        <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                      </div>
                    </td>
                    <td className="py-4">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                        <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                      </div>
                    </td>
                    <td className="py-4">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                        <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 font-medium">Predictive Analytics</td>
                    <td className="py-4">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                        <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                      </div>
                    </td>
                    <td className="py-4">
                      <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                        <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                      </div>
                    </td>
                    <td className="py-4">
                      <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                        <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                      </div>
                    </td>
                    <td className="py-4">
                      <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                        <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 font-medium">No Cylinder Modification</td>
                    <td className="py-4">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                        <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                      </div>
                    </td>
                    <td className="py-4">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                        <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                      </div>
                    </td>
                    <td className="py-4">
                      <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                        <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                      </div>
                    </td>
                    <td className="py-4">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                        <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 font-medium">Automated Replenishment</td>
                    <td className="py-4">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                        <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                      </div>
                    </td>
                    <td className="py-4">
                      <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                        <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                      </div>
                    </td>
                    <td className="py-4">
                      <div className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center">
                        <div className="w-3 h-3 bg-yellow-600 rounded-full"></div>
                      </div>
                    </td>
                    <td className="py-4">
                      <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                        <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}