import Header from './components/layout/Header';
import Hero from './sections/Hero';
import Services from './sections/Services';
import ClinicInfo from './sections/ClinicInfo';
import Contacts from './sections/Contacts';
import Footer from './components/layout/Footer';
import { useEffect } from 'react';
import Lenis from 'lenis';

function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-paper text-ink">
      <Header />
      <main>
        <Hero />
        <Services />
        <ClinicInfo />
        <Contacts />
      </main>
      <Footer />
    </div>
  )
}

export default App
