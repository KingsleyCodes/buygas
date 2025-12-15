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
          <h3 className="text-4xl font-bold mb-12">A closed-loop hardware & software platform that automates gas inventory management.</h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <div className="w-6 h-6 bg-white rounded"></div>
                </div>
                <h4 className="text-2xl font-bold">Hardware Device</h4>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span>Patent-pending non-invasive sensor attaches to any standard gas cylinder</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span>Measures real-time gas level via pressure and temperature compensation</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span>LoRaWAN & cellular connectivity for reliable data transmission</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span>2-year battery life, ruggedized for commercial environments</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <div className="w-6 h-6 bg-white rounded"></div>
                </div>
                <h4 className="text-2xl font-bold">Software Platform</h4>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span>Real-time dashboard showing cylinder levels across all locations</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span>Predictive algorithms forecast depletion 3-5 days in advance</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span>Automated replenishment triggers delivery to arrive just in time</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span>API integration with existing distributors and logistics providers</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}