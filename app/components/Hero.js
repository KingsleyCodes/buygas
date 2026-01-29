// app/components/Hero.js
export default function Hero() {
  return (
    <section id="home" className="min-h-[80vh] flex items-center">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-medium mb-8">
            <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
            Technology-Enabled LPG Distributor
          </div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Never Run Out Of Cooking Gas
          </h1>
          <p className="text-2xl text-gray-600 mb-10 max-w-3xl">
            Buy Gas is disrupting the Nigerian LPG market with IoT smart meters and a dual-subscription model. We provide traceability, transparency, and guaranteed supply for households and businesses.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              <span className="font-medium">Pre-seed Stage | Pilot Launch</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-gray-400 rounded-full"></div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
              <span className="font-medium">Targeting N300M+ Seed Round in Year 2</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}