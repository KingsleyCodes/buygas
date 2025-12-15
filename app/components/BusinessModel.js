// app/components/BusinessModel.js
export default function BusinessModel() {
  return (
    <section id="business-model" className="py-20 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl">
          <div className="flex items-center mb-4">
            <div className="w-12 h-0.5 bg-blue-600 mr-4"></div>
            <h2 className="text-3xl font-bold">Business Model</h2>
          </div>
          <h3 className="text-4xl font-bold mb-12">Hardware margin + recurring SaaS fees + transaction revenue.</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-200">
              <div className="text-4xl font-bold text-blue-600 mb-4">1</div>
              <h4 className="text-2xl font-bold mb-4">Hardware Sale</h4>
              <p className="text-gray-600 mb-6">One‑time purchase of sensor device at ~$120 with 45% gross margin.</p>
              <div className="text-sm text-gray-500">Revenue Stream</div>
              <div className="text-2xl font-bold">$54 margin/unit</div>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-200">
              <div className="text-4xl font-bold text-blue-600 mb-4">2</div>
              <h4 className="text-2xl font-bold mb-4">SaaS Subscription</h4>
              <p className="text-gray-600 mb-6">Monthly platform fee of $5‑$15 per cylinder for monitoring, analytics, and predictive features.</p>
              <div className="text-sm text-gray-500">Annual Recurring Revenue</div>
              <div className="text-2xl font-bold">$60‑$180/cylinder</div>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-200">
              <div className="text-4xl font-bold text-blue-600 mb-4">3</div>
              <h4 className="text-2xl font-bold mb-4">Transaction Fee</h4>
              <p className="text-gray-600 mb-6">2‑3% commission on each gas refill ordered through our platform.</p>
              <div className="text-sm text-gray-500">Take Rate</div>
              <div className="text-2xl font-bold">2.5% per refill</div>
            </div>
          </div>
          <div className="mt-12 bg-blue-50 p-8 rounded-2xl">
            <h4 className="text-2xl font-bold mb-4">Unit Economics (Year 1)</h4>
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <div className="text-sm text-gray-500">CAC</div>
                <div className="text-2xl font-bold">$85</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">LTV</div>
                <div className="text-2xl font-bold">$420</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Payback Period</div>
                <div className="text-2xl font-bold">10 months</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Gross Margin</div>
                <div className="text-2xl font-bold">68%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}