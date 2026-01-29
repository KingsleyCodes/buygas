// app/components/TheSolution.js
export default function TheSolution() {
  return (
    <section id="solution" className="py-20 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl">
          <div className="flex items-center mb-4">
            <div className="w-12 h-0.5 bg-blue-600 mr-4"></div>
            <h2 className="text-3xl font-bold">The Solution</h2>
          </div>
          <h3 className="text-4xl font-bold mb-12">The Smart Dual-Subscription Model: IoT-powered gas, your way.</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">PAYG</span>
                </div>
                <div>
                  <h4 className="text-2xl font-bold">Prepaid (PAYG)</h4>
                  <p className="text-blue-600 font-medium">For Households & Businesses</p>
                </div>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700"><span className="font-semibold">Micro-Payments:</span> Buy gas credit via app/USSD. Pay per kg used, per cooking session.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700"><span className="font-semibold">Overcomes Barrier:</span> Eliminates the N10,000-N25,000 lump-sum refill cost.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700"><span className="font-semibold">Smart Control:</span> IoT meter deducts credit in real-time. Remote shut-off at zero balance.</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-xl bg-green-600 flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">SaaS</span>
                </div>
                <div>
                  <h4 className="text-2xl font-bold">Postpaid (Smart-as-a-Service)</h4>
                  <p className="text-green-600 font-medium">For Households & Businesses</p>
                </div>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700"><span className="font-semibold">Cost Control:</span> Weekly/monthly invoice for precise kg usage. Track LPG cost per shift or product batch.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700"><span className="font-semibold">Asset Light:</span> We provide & maintain the cylinder fleet. Zero customer CapEx.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700"><span className="font-semibold">Guaranteed Supply:</span> IoT meter triggers automated dispatch. Eliminates downtime risk.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}