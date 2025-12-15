// app/components/TheProblem.js
export default function TheProblem() {
  return (
    <section id="problem" className="py-20 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <div className="flex items-center mb-4">
            <div className="w-12 h-0.5 bg-blue-600 mr-4"></div>
            <h2 className="text-3xl font-bold">The Problem</h2>
          </div>
          <h3 className="text-4xl font-bold mb-8">Gas cylinder management is inefficient, opaque, and reactive.</h3>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 border border-gray-200 rounded-xl">
              <div className="text-4xl font-bold text-red-600 mb-4">35%</div>
              <p className="font-medium mb-2">Operational Inefficiency</p>
              <p className="text-gray-600">of restaurant kitchen downtime is caused by unexpected gas depletion.</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-xl">
              <div className="text-4xl font-bold text-red-600 mb-4">$2.3k</div>
              <p className="font-medium mb-2">Hidden Costs</p>
              <p className="text-gray-600">Annual waste per commercial kitchen from manual tracking and emergency deliveries.</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-xl">
              <div className="text-4xl font-bold text-red-600 mb-4">0</div>
              <p className="font-medium mb-2">Real-Time Visibility</p>
              <p className="text-gray-600">No existing solution provides accurate, real-time gas level monitoring.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}