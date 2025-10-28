
import Header from '../components/header';
import '../components/header.css'

import NavSunday from '../components/nav_sunday';
import '../components/nav.css'

import SundayContent from '../components/sunday_content';
import '../components/all_content.css'

import Footer from '../components/footer';
import '../components/footer.css'

import SwipePage from "../SwipePage";

function Sunday() {
  return (
    <SwipePage>
      <main>
        <div>
          <Header />
          <br />
          <NavSunday />
          <br />
          <SundayContent />
          <br /><br /><br /><br />
          <Footer />
        </div>
      </main>
    </SwipePage>
  );
}

export default Sunday;
