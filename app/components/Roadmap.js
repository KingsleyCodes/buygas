// app/components/Roadmap.js
export default function Roadmap() {
  const phases = [
    {
      title: 'Phase 1: Pilot & De-Risking',
      timeframe: 'Year 1 (Pre-Seed)',
      goal: 'Prove unit economics with 75 IoT meters.',
      kpis: ['Deploy pilot fleet of 75 IoT meters', 'Secure 5+ high-value B2B contracts', 'Achieve target B2C/B2B retention rates', 'Generate data for Seed Round'],
      funding: 'N30M Pre-Seed',
      color: 'blue'
    },
    {
      title: 'Phase 2: Hyper-Scale',
      timeframe: 'Years 2-3',
      goal: 'Geographic expansion and volume scaling.',
      kpis: ['Secure N300M+ Seed Round', 'Deploy 5,000+ IoT meters', 'Expand to 3+ urban districts', 'Formalize logistics/filling partnerships'],
      funding: 'N300M+ Seed',
      color: 'green'
    },
    {
      title: 'Phase 3: Expansion & Digitalization',
      timeframe: 'Years 4-5',
      goal: 'Market leadership and new revenue verticals.',
      kpis: ['20,000+ active IoT units', 'Explore fintech integration (micro-credit)', 'Expand to 2nd major Nigerian city', 'Prepare for acquisition/IPO'],
      funding: 'Series A/B',
      color: 'purple'
    },
  ]
  return (
    <section className="py-20 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl">
          <div className="flex items-center mb-4">
            <div className="w-12 h-0.5 bg-blue-600 mr-4"></div>
            <h2 className="text-3xl font-bold">Growth & Scale Strategy</h2>
          </div>
          <h3 className="text-4xl font-bold mb-12">From pilot to market leader in 5 years.</h3>
          <div className="space-y-8">
            {phases.map((phase, idx) => (
              <div key={phase.title} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className={`h-2 ${phase.color === 'blue' ? 'bg-blue-600' : phase.color === 'green' ? 'bg-green-600' : 'bg-purple-600'}`}></div>
                <div className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                    <div>
                      <div className="text-sm font-semibold text-gray-500">{phase.timeframe}</div>
                      <h4 className="text-2xl font-bold mt-1">{phase.title}</h4>
                    </div>
                    <div className="mt-4 md:mt-0 px-4 py-2 bg-gray-100 rounded-full text-sm font-bold">
                      {phase.funding}
                    </div>
                  </div>
                  <p className="text-lg text-gray-700 mb-6"><span className="font-bold">Goal:</span> {phase.goal}</p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="font-medium mb-3">Key Milestones:</p>
                      <ul className="space-y-2">
                        {phase.kpis.map((kpi) => (
                          <li key={kpi} className="flex items-start">
                            <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                            </div>
                            <span className="text-gray-600">{kpi}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <p className="font-medium mb-2">Strategic Focus:</p>
                      <p className="text-gray-600">
                        {idx === 0 && 'Generate proof points for large Seed Round.'}
                        {idx === 1 && 'Aggressive customer acquisition and partnership scaling.'}
                        {idx === 2 && 'Maximize profitability and explore exit opportunities.'}
                      </p>
                    </div>
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