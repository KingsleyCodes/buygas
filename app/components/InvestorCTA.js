// app/components/InvestorCTA.js
export default function InvestorCTA() {
  return (
    <section className="py-20 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-0.5 bg-blue-600 mr-4"></div>
            <h2 className="text-3xl font-bold">Join the Transformation</h2>
          </div>
          <h3 className="text-4xl font-bold mb-8">We are raising N30 Million to deploy Nigeria's first IoT-driven LPG network.</h3>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            This pre-seed round will fund the pilot fleet of 75 smart meters, secure high-value B2B contracts, and generate the data needed to secure a N300M+ Seed Round in Year 2.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl border border-gray-200 text-left shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-2xl font-bold mb-4">For Investors</h4>
              <p className="text-gray-600 mb-6">Access our detailed 5-year financial model, IoT hardware specs, pilot design, and market analysis.</p>
              <a href="mailto:chideraimanuel@gmail.com?subject=BIIL%20Gas%20Investment%20Data%20Room%20Request" className="inline-flex items-center text-blue-600 font-bold hover:text-blue-800 transition-colors">
                Request Full Data Room
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-200 text-left shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-2xl font-bold mb-4">For Strategic Partners</h4>
              <p className="text-gray-600 mb-6">Gas filling plants, logistics providers, or corporate SMEs interested in piloting our Smart-as-a-Service model.</p>
              <a href="mailto:chideraimanuel@gmail.com?subject=BIIL%20Gas%20Partnership%20Inquiry" className="inline-flex items-center text-blue-600 font-bold hover:text-blue-800 transition-colors">
                Discuss Pilot Partnership
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-200">
            <p className="text-gray-700 mb-8 font-medium">Ready to discuss the future of clean, smart energy access in Nigeria?</p>
            <a href="mailto:chideraimanuel@gmail.com?subject=Meeting%20Request%20re%20BIIL%20Gas%20Investment" className="inline-block bg-blue-600 text-white font-bold py-4 px-12 rounded-xl hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg">
              Schedule a Meeting with the Founder
            </a>
            <div className="mt-8 text-gray-600">
              <p className="font-bold">Bayview Integrated Industries Limited</p>
              <p>Brand: <span className="font-bold">Buy Gas</span> | Founded: 2010</p>
              <p>Head Office: Abuja, Nigeria | Phone: +234 902 350 5265</p>
              <p>Email: chideraimanuel@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}