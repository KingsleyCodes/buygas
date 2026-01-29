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
          <h3 className="text-4xl font-bold mb-8">High upfront costs and operational inefficiency plague Nigeria's LPG market.</h3>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="p-8 border border-gray-200 rounded-2xl bg-white">
              <div className="text-4xl font-bold text-red-600 mb-4">N10,000 – N25,000</div>
              <p className="font-medium text-xl mb-3">Lump-Sum Refill Barrier</p>
              <p className="text-gray-600">The high upfront cost of a 12.5kg LPG refill locks out millions of low-to-middle income households from consistent clean cooking energy.</p>
            </div>
            <div className="p-8 border border-gray-200 rounded-2xl bg-white">
              <div className="text-4xl font-bold text-red-600 mb-4">Zero Visibility & Risk</div>
              <p className="font-medium text-xl mb-3">Inefficiency for SMEs</p>
              <p className="text-gray-600">Restaurants and bakeries lack consumption tracking, forcing them to keep expensive spare cylinders and risk operational downtime due to unexpected gas depletion.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}