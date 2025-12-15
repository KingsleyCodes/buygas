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
          <h3 className="text-4xl font-bold mb-8">Convergence of technology readiness and market demand.</h3>
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="text-2xl font-bold text-blue-600 mr-6">1</div>
              <div>
                <h4 className="text-xl font-bold mb-2">IoT Maturity</h4>
                <p className="text-gray-600">Low‑power wide‑area networks (LoRaWAN, NB‑IoT) now provide affordable, reliable connectivity for millions of sensors.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-2xl font-bold text-blue-600 mr-6">2</div>
              <div>
                <h4 className="text-xl font-bold mb-2">Supply Chain Digitalization</h4>
                <p className="text-gray-600">Gas distributors are actively seeking technology partners to improve efficiency and customer retention.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-2xl font-bold text-blue-600 mr-6">3</div>
              <div>
                <h4 className="text-xl font-bold mb-2">Economic Pressure</h4>
                <p className="text-gray-600">Rising operational costs force commercial kitchens to eliminate waste and downtime.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-2xl font-bold text-blue-600 mr-6">4</div>
              <div>
                <h4 className="text-xl font-bold mb-2">Regulatory Push</h4>
                <p className="text-gray-600">Governments mandate safer LPG handling and accurate tracking, creating compliance demand.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}