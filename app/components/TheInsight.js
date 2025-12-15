// app/components/TheInsight.js
export default function TheInsight() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <div className="flex items-center mb-4">
            <div className="w-12 h-0.5 bg-blue-600 mr-4"></div>
            <h2 className="text-3xl font-bold">The Insight</h2>
          </div>
          <h3 className="text-4xl font-bold mb-6">Supply chains are being automated—except for last-mile gas delivery.</h3>
          <p className="text-xl text-gray-600 mb-8">
            While food, packages, and even water delivery have been optimized with real-time tracking and predictive logistics, the $65B global LPG market still operates on manual check-ups and emergency calls.
          </p>
          <div className="bg-white p-8 rounded-2xl border border-gray-200 mt-10">
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                <div className="w-6 h-6 bg-blue-600 rounded"></div>
              </div>
              <div>
                <p className="text-lg font-medium">The core inefficiency is information asymmetry.</p>
                <p className="text-gray-600 mt-2">Neither the supplier nor the customer knows exactly when a cylinder will run out, forcing both to operate with costly buffers and reactive logistics.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}