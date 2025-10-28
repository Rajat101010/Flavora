
import Header from '../components/header';
import '../components/header.css'

import NavTuesday from '../components/nav_tuesday';
import '../components/nav.css'

import TuesdayContent from '../components/tuesday_content';
import '../components/all_content.css'

import Footer from '../components/footer';
import '../components/footer.css'

import SwipePage from "../SwipePage";

function Tuesday() {
  return (
    <SwipePage>
      <main>
        <div>
          <Header />
          <br />
          <NavTuesday />
          <br />
          <TuesdayContent />
          <br /><br /><br /><br />
          <Footer />
        </div>
      </main>
    </SwipePage>
  );
}

export default Tuesday;
