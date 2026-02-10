import Hero from './sections/Hero';
import Appointment from './sections/Appointment';
import Services from './sections/Services';
import ClinicInfo from './sections/ClinicInfo';
import Specialists from './sections/Specialists';
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
    <div>
      <Hero />
      <Appointment/>
      <Services/>
      <Contacts/>
      <ClinicInfo/>
      <Specialists/>
      <Footer/>
    </div>
  )
}

export default App
