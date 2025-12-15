// app/page.js
import Hero from './components/Hero'
import TheProblem from './components/TheProblem'
import TheInsight from './components/TheInsight'
import TheSolution from './components/TheSolution'
import HowItWorks from './components/HowItWorks'
import WhoItsFor from './components/WhoItsFor'
import MarketOpportunity from './components/MarketOpportunity'
import BusinessModel from './components/BusinessModel'
import WhyThisWins from './components/WhyThisWins'
import WhyNow from './components/WhyNow'
import RisksMitigations from './components/RisksMitigations'
import Roadmap from './components/Roadmap'
import InvestmentOpportunity from './components/InvestmentOpportunity'
import InvestorCTA from './components/InvestorCTA'

export default function Home() {
  return (
    <div>
      <Hero />
      <TheProblem />
      <TheInsight />
      <TheSolution />
      <HowItWorks />
      <WhoItsFor />
      <MarketOpportunity />
      <BusinessModel />
      <WhyThisWins />
      <WhyNow />
      <RisksMitigations />
      <Roadmap />
      <InvestmentOpportunity />
      <InvestorCTA />
    </div>
  )
}