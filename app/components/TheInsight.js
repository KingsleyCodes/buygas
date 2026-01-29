// app/components/TheInsight.js
export default function TheInsight() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <div className="flex items-center mb-4">
            <div className="w-12 h-0.5 bg-blue-600 mr-4"></div>
            <h2 className="text-3xl font-bold">The Core Insight</h2>
          </div>
          <h3 className="text-4xl font-bold mb-6">LPG adoption in Nigeria isn't limited by demand—it's crippled by payment and supply frictions.</h3>
          <p className="text-xl text-gray-600 mb-8">
            The market has two parallel problems: <span className="font-bold">Households can't afford the lump-sum refill</span>, and <span className="font-bold">Businesses can't track or guarantee their supply</span>. Existing solutions address neither.
          </p>
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm mt-10">
            <div className="flex items-start">
              <div className="bg-blue-100 p-4 rounded-xl mr-6 flex-shrink-0">
                <div className="w-8 h-8 bg-blue-600 rounded-lg"></div>
              </div>
              <div>
                <p className="text-2xl font-bold mb-3">The solution is a single technology platform that enables two models.</p>
                <p className="text-gray-600">
                  Our IoT smart meter and digital platform solve both sides: it becomes a <span className="font-bold">micro-payment device for households</span> and a <span className="font-bold">cost-tracking & automated supply tool for businesses</span>. This dual approach unlocks the entire market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}