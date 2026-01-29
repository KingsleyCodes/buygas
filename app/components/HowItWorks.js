// app/components/HowItWorks.js
export default function HowItWorks() {
  const steps = [
    { number: '01', title: 'IoT Meter Deployment', desc: 'Smart meter with QR/IoT tag is installed on the cylinder at our partner filling plant, enabling traceability.' },
    { number: '02', title: 'Digital Platform Activation', desc: 'Cylinder is registered on our platform. Customer chooses Prepaid (PAYG) or Postpaid (Smart-as-a-Service) plan.' },
    { number: '03', title: 'Smart Consumption & Payment', desc: 'Meter tracks usage per kg. Prepaid: credit deducts in real-time. Postpaid: usage is logged for invoicing.' },
    { number: '04', title: 'Proactive Alert & Dispatch', desc: 'Platform forecasts depletion and alerts customer. For low credit/empty cylinders, it auto-triggers a refill order.' },
    { number: '05', title: 'Optimized Delivery', desc: 'Our logistics dashboard provides route optimization. Fresh cylinder is delivered, empty unit is collected.' },
    { number: '06', title: 'Data & Analytics', desc: 'Businesses get consumption reports for cost analysis. We gain insights for predictive restocking and network efficiency.' },
  ]
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl">
          <div className="flex items-center mb-4">
            <div className="w-12 h-0.5 bg-blue-600 mr-4"></div>
            <h2 className="text-3xl font-bold">How It Works</h2>
          </div>
          <h3 className="text-4xl font-bold mb-12">A digitized, IoT-enabled LPG delivery ecosystem.</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div key={step.number} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="text-5xl font-bold text-gray-200 mb-4">{step.number}</div>
                <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-gray-700 font-medium">
              <span className="text-blue-600 font-bold">Result:</span> Fewer lost cylinders, 20–30% logistics savings, and consistent customer retention.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}