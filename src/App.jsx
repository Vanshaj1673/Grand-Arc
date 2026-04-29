import { useState } from 'react'
import { useLenis } from './hooks/useLenis'
import Navbar from './components/Navbar'
import DeckNav from './components/DeckNav'
import CustomCursor from './components/CustomCursor'
import IntroLoader from './components/IntroLoader'
import SpotlightOverlay from './components/SpotlightOverlay'
import Hero from './sections/Hero'
import WhySection from './sections/WhySection'
import FloorplanSection from './sections/FloorplanSection'
import RetailSection from './sections/RetailSection'
import DiningSection from './sections/DiningSection'
import EntertainmentSection from './sections/EntertainmentSection'
import EventsSection from './sections/EventsSection'
import CtaSection from './sections/CtaSection'
import Footer from './components/Footer'
import './styles/global.scss'

function App() {
  const lenis = useLenis()
  const [activeDetail, setActiveDetail] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="app-container bg-onyx min-h-screen text-white font-sans selection:bg-gold/30 selection:text-white">
      {isLoading && <IntroLoader onComplete={() => setIsLoading(false)} />}
      <CustomCursor />
      <Navbar lenis={lenis} />
      <DeckNav lenis={lenis} />
      
      <main>
        <Hero />
        <WhySection />
        <FloorplanSection />
        <RetailSection onZoneClick={setActiveDetail} />
        <DiningSection onVenueClick={setActiveDetail} />
        <EntertainmentSection onExperienceClick={setActiveDetail} />
        <EventsSection />
        <CtaSection />
      </main>

      <SpotlightOverlay 
        zone={activeDetail} 
        onClose={() => setActiveDetail(null)} 
      />

      <Footer />
    </div>
  )
}

export default App
