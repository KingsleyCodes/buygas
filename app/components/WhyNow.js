// app/components/WhyNow.js
export default function WhyNow() {
  return (
    <section className="py-20 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <div className="flex items-center mb-4">
            <div className="w-12 h-0.5 bg-blue-600 mr-4"></div>
            <h2 className="text-3xl font-bold">Why Now</h2>
          </div>
          <h3 className="text-4xl font-bold mb-8">Perfect alignment with national policy, market need, and technological feasibility.</h3>
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="text-2xl font-bold text-blue-600 mr-6 flex-shrink-0">1</div>
              <div>
                <h4 className="text-xl font-bold mb-2">Government Policy Push</h4>
                <p className="text-gray-600">Nigeria's National LPG Expansion Plan (5M MT by 2030) and Clean Cooking Policy create unprecedented regulatory tailwinds and addressable market growth.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-2xl font-bold text-blue-600 mr-6 flex-shrink-0">2</div>
              <div>
                <h4 className="text-xl font-bold mb-2">Critical Unmet Need</h4>
                <p className="text-gray-600">The high upfront refill cost remains the primary adoption barrier for households. SMEs lack tools for LPG cost tracking. No solution addresses both.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-2xl font-bold text-blue-600 mr-6 flex-shrink-0">3</div>
              <div>
                <h4 className="text-xl font-bold mb-2">Technology Readiness</h4>
                <p className="text-gray-600">IoT hardware costs have fallen. Mobile money/USSD penetration enables our Prepaid model. Cloud platforms allow scalable, real-time data management.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-2xl font-bold text-blue-600 mr-6 flex-shrink-0">4</div>
              <div>
                <h4 className="text-xl font-bold mb-2">First-Mover Advantage</h4>
                <p className="text-gray-600">Very little to no competition on the integrated IoT + dual-subscription model in Nigeria. The time to build a dominant tech-enabled network is now.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}