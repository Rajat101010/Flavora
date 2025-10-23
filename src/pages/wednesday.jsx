
import Header from '../components/header';
import '../components/header.css'

import NavWednesday from '../components/nav_wednesday';
import '../components/nav.css'

import WednesdayContent from '../components/wednesday_content';
import '../components/all_content.css'

import Footer from '../components/footer';
import '../components/footer.css'

function Wednesday() {
  return (
    <main>
        <div>
            <Header />
            <br />
            <NavWednesday />
            <br />
            <WednesdayContent />
            <br /><br /><br /><br />
            <Footer />
        </div>
    </main>
  );
}

export default Wednesday;
