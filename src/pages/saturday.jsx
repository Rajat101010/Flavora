
import Header from '../components/header';
import '../components/header.css'

import NavSaturday from '../components/nav_saturday';
import '../components/nav.css'

import SaturdayContent from '../components/saturday_content';
import '../components/all_content.css'

import Footer from '../components/footer';
import '../components/footer.css'

function Saturday() {
  return (
    <main>
      <div>
        <Header />
        <br />
        <NavSaturday />
        <br />
        <SaturdayContent />
        <br /><br /><br /><br />
        <Footer />
      </div>
    </main>
  );
}

export default Saturday;
