import Hero from './sections/Hero';
import Appointment from './sections/Appointment';
import Services from './sections/Services';
import ClinicInfo from './sections/ClinicInfo';
import Specialists from './sections/Specialists';
import Contacts from './sections/Contacts';

function App() {
  return (
    <div>
      <Hero />
      <Appointment/>
      <Services/>
      <Contacts/>
      <Specialists/>
      <ClinicInfo/>
    </div>
  )
}

export default App
