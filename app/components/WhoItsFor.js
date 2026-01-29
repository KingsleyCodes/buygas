// app/components/WhoItsFor.js
export default function WhoItsFor() {
  const segments = [
    {
      name: 'Households (B2C)',
      desc: 'Low-to-middle income families seeking affordable, flexible access to clean cooking gas without the lump-sum refill burden.',
      model: 'Prepaid PAYG',
      benefit: 'Pay-per-use, no large upfront cost.',
      color: 'bg-blue-100'
    },
    {
      name: 'SMEs & Restaurants (B2B)',
      desc: 'Bakeries, restaurants, and commercial kitchens requiring cost control, guaranteed supply, and operational efficiency.',
      model: 'Postpaid Smart-as-a-Service',
      benefit: 'Eliminates cylinder CapEx, provides precise consumption tracking.',
      color: 'bg-green-100'
    },
  ]
  return (
    <section className="py-20 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl">
          <div className="flex items-center mb-4">
            <div className="w-12 h-0.5 bg-blue-600 mr-4"></div>
            <h2 className="text-3xl font-bold">Target Segments</h2>
          </div>
          <h3 className="text-4xl font-bold mb-12">Dual-market focus for maximum impact and unit economics.</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {segments.map((seg) => (
              <div key={seg.name} className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className={`h-3 ${seg.color}`}></div>
                <div className="p-8">
                  <h4 className="text-2xl font-bold mb-2">{seg.name}</h4>
                  <div className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 mb-4">
                    {seg.model}
                  </div>
                  <p className="text-gray-600 mb-6">{seg.desc}</p>
                  <div className="pt-6 border-t border-gray-100">
                    <div className="text-sm text-gray-500">Primary Benefit</div>
                    <div className="text-xl font-bold text-gray-800">{seg.benefit}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-gray-50 p-8 rounded-2xl border border-gray-200">
            <h4 className="text-2xl font-bold mb-4">Market Entry Strategy</h4>
            <p className="text-gray-700">
              <span className="font-bold">Phase 1 (Pilot):</span> Secure high-value B2B contracts to prove unit economics and generate reliable cash flow. Simultaneously, deploy Prepaid model to build volume and brand in targeted communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}