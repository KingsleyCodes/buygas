// app/components/HowItWorks.js
export default function HowItWorks() {
  const steps = [
    { number: '01', title: 'Device Attachment', desc: 'Sensor attaches to any standard LPG cylinder in under 60 seconds.' },
    { number: '02', title: 'Continuous Monitoring', desc: 'Hardware transmits gas level data every 15 minutes.' },
    { number: '03', title: 'Predictive Analytics', desc: 'Platform forecasts depletion based on usage patterns.' },
    { number: '04', title: 'Automated Dispatch', desc: 'System triggers refill order to distributor 3 days before empty.' },
    { number: '05', title: 'Seamless Delivery', desc: 'Fresh cylinder arrives and depleted unit is collected.' },
    { number: '06', title: 'Billing & Analytics', desc: 'Usage data, invoices, and efficiency reports generated automatically.' },
  ]
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl">
          <div className="flex items-center mb-4">
            <div className="w-12 h-0.5 bg-blue-600 mr-4"></div>
            <h2 className="text-3xl font-bold">How It Works</h2>
          </div>
          <h3 className="text-4xl font-bold mb-12">End‑to‑end automation, from sensor to delivery.</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div key={step.number} className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="text-5xl font-bold text-gray-200 mb-4">{step.number}</div>
                <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}