// app/components/Hero.js
export default function Hero() {
  return (
    <section id="home" className="min-h-[80vh] flex items-center">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-medium mb-8">
            <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
            Hardware + Software Platform
          </div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Gas supply, automated.
          </h1>
          <p className="text-2xl text-gray-600 mb-10 max-w-3xl">
            BuyGas provides real-time monitoring and automated replenishment for gas cylinders, eliminating manual tracking and supply uncertainty for households and businesses.
          </p>
          <div className="flex items-center space-x-4">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="font-medium">Fully operational prototype</span>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <span className="font-medium">Pilot customers in Q3</span>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <span className="font-medium">Seed round open</span>
          </div>
        </div>
      </div>
    </section>
  )
}