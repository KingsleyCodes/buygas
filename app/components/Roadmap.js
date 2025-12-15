// app/components/Roadmap.js
export default function Roadmap() {
  const milestones = [
    { quarter: 'Q3 2024', title: 'Pilot Launch', items: ['First 50 commercial kitchen deployments', 'Initial distributor partnership signed', 'Platform feature complete'] },
    { quarter: 'Q4 2024', title: 'Seed Round', items: ['Close $1.8M seed round', 'Expand team to 10', 'Secure manufacturing partner'] },
    { quarter: 'Q1 2025', title: 'Market Expansion', items: ['Launch in 3 additional cities', '500 active cylinders', 'Achieve 95% prediction accuracy'] },
    { quarter: 'Q2 2025', title: 'Series A Preparation', items: ['10,000 cylinders under management', 'Positive unit economics at scale', 'Begin international pilot'] },
  ]
  return (
    <section className="py-20 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl">
          <div className="flex items-center mb-4">
            <div className="w-12 h-0.5 bg-blue-600 mr-4"></div>
            <h2 className="text-3xl font-bold">Roadmap</h2>
          </div>
          <h3 className="text-4xl font-bold mb-12">Clear milestones for the next 18 months.</h3>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 md:left-1/2 md:-translate-x-1/2"></div>
            {milestones.map((milestone, idx) => (
              <div key={milestone.quarter} className={`relative mb-12 md:flex ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                    <div className="text-blue-600 font-bold mb-2">{milestone.quarter}</div>
                    <h4 className="text-2xl font-bold mb-4">{milestone.title}</h4>
                    <ul className="space-y-2">
                      {milestone.items.map((item) => (
                        <li key={item} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="absolute left-8 top-8 w-4 h-4 bg-blue-600 rounded-full border-4 border-white md:left-1/2 md:-translate-x-1/2"></div>
                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}