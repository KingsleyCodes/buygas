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
          <h3 className="text-4xl font-bold mb-12">Asset-light technology distributor with multiple recurring revenue streams.</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
              <div className="text-4xl font-bold text-blue-600 mb-4">1</div>
              <h4 className="text-2xl font-bold mb-4">Gas Sales & Distribution</h4>
              <p className="text-gray-600 mb-6">Margin on every kg of LPG sold through our platform to Prepaid (B2C) and Postpaid (B2B) customers.</p>
              <div className="text-sm text-gray-500">Core Revenue Driver</div>
              <div className="text-2xl font-bold">Per kg Margin + Volume</div>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
              <div className="text-4xl font-bold text-blue-600 mb-4">2</div>
              <h4 className="text-2xl font-bold mb-4">Subscription & Service Fees</h4>
              <p className="text-gray-600 mb-6">
                <span className="font-semibold">B2B:</span> Monthly Smart-as-a-Service fee.<br/>
                <span className="font-semibold">B2C:</span> Prepaid subscription charges.
              </p>
              <div className="text-sm text-gray-500">Recurring Revenue</div>
              <div className="text-2xl font-bold">High Retention</div>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
              <div className="text-4xl font-bold text-blue-600 mb-4">3</div>
              <h4 className="text-2xl font-bold mb-4">Platform & Data Monetization</h4>
              <p className="text-gray-600 mb-6">Licensing fees to B2B partners, data analytics subscriptions, and delivery commissions from the ecosystem.</p>
              <div className="text-sm text-gray-500">High-Margin Streams</div>
              <div className="text-2xl font-bold">Platform Leverage</div>
            </div>
          </div>
          <div className="mt-12 bg-blue-50 p-8 rounded-2xl border border-blue-100">
            <h4 className="text-2xl font-bold mb-6 text-gray-800">Strategic Capital Efficiency</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl">
                <div className="text-sm text-gray-500 mb-2">Low Initial CapEx</div>
                <div className="text-2xl font-bold">No Plant Ownership</div>
                <p className="text-gray-600 text-sm mt-2">Saves over N11M. Partner with existing filling plants.</p>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <div className="text-sm text-gray-500 mb-2">B2B Lock-in</div>
                <div className="text-2xl font-bold">Asset Provision</div>
                <p className="text-gray-600 text-sm mt-2">Providing cylinders & meters creates strong customer retention.</p>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <div className="text-sm text-gray-500 mb-2">Superior Unit Economics</div>
                <div className="text-2xl font-bold">Target Model</div>
                <p className="text-gray-600 text-sm mt-2">Designed to achieve strong LTV/CAC, attracting scale capital.</p>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <div className="text-sm text-gray-500 mb-2">Green Capital Access</div>
                <div className="text-2xl font-bold">Grant Eligibility</div>
                <p className="text-gray-600 text-sm mt-2">Clean energy tech focus opens non-dilutive funding avenues.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}