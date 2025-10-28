
import Header from '../components/header';
import '../components/header.css'

import NavMonday from '../components/nav_monday';
import '../components/nav.css'

import MondayContent from '../components/monday_content';
import '../components/all_content.css'

import Footer from '../components/footer';
import '../components/footer.css'

import SwipePage from "../SwipePage";

function Monday() {
  return (
    <SwipePage>
      <main>
        <div>
          <Header />
          <br />
          <NavMonday />
          <br />
          <MondayContent />
          <br /><br /><br /><br />
          <Footer />
        </div>
      </main>
    </SwipePage>
  );
}

export default Monday;
