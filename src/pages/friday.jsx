
import Header from '../components/header';
import '../components/header.css'

import NavFriday from '../components/nav_friday';
import '../components/nav.css'

import FridayContent from '../components/friday_content';
import '../components/all_content.css'

import Footer from '../components/footer';
import '../components/footer.css'

function Friday() {
  return (
    <main>
      <div>
        <Header />
        <br />
        <NavFriday />
        <br />
        <FridayContent />
        <br /><br /><br /><br />
        <Footer />
      </div>
    </main>
  );
}

export default Friday;
