// app/components/WhoItsFor.js
export default function WhoItsFor() {
  const segments = [
    { name: 'Commercial Kitchens', desc: 'Restaurants, hotels, catering services with 5+ cylinders', arr: '$1,200/yr', color: 'bg-blue-100' },
    { name: 'Households', desc: 'High‑consumption homes using LPG for cooking & heating', arr: '$180/yr', color: 'bg-green-100' },
    { name: 'Industrial Users', desc: 'Small‑scale manufacturing, bakeries, laundries', arr: '$2,400/yr', color: 'bg-purple-100' },
  ]
  return (
    <section className="py-20 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl">
          <div className="flex items-center mb-4">
            <div className="w-12 h-0.5 bg-blue-600 mr-4"></div>
            <h2 className="text-3xl font-bold">Who It’s For</h2>
          </div>
          <h3 className="text-4xl font-bold mb-12">Focus on high‑frequency, high‑pain customers first.</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {segments.map((seg) => (
              <div key={seg.name} className="border border-gray-200 rounded-2xl overflow-hidden">
                <div className={`h-3 ${seg.color}`}></div>
                <div className="p-8">
                  <h4 className="text-2xl font-bold mb-4">{seg.name}</h4>
                  <p className="text-gray-600 mb-6">{seg.desc}</p>
                  <div className="pt-6 border-t border-gray-100">
                    <div className="text-sm text-gray-500">Annual Revenue Per User</div>
                    <div className="text-3xl font-bold">{seg.arr}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}