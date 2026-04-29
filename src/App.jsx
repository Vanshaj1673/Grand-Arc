import { useLenis } from './hooks/useLenis'
import Navbar from './components/Navbar'
import DeckNav from './components/DeckNav'
import Hero from './sections/Hero'
import WhySection from './sections/WhySection'
import RetailSection from './sections/RetailSection'
import DiningSection from './sections/DiningSection'
import EntertainmentSection from './sections/EntertainmentSection'
import EventsSection from './sections/EventsSection'
import CtaSection from './sections/CtaSection'
import Footer from './components/Footer'
import './styles/global.scss'

function App() {
  const lenis = useLenis()

  return (
    <div className="app-container bg-onyx min-h-screen text-white font-sans selection:bg-gold/30 selection:text-white">
      <Navbar lenis={lenis} />
      <DeckNav lenis={lenis} />
      
      <main>
        <Hero />
        <WhySection />
        <RetailSection />
        <DiningSection />
        <EntertainmentSection />
        <EventsSection />
        <CtaSection />
      </main>

      <Footer />
    </div>
  )
}

export default App
