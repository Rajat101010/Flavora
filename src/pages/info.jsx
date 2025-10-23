
import Header from '../components/header';
import '../components/header.css'

import Nav from '../components/nav';
import '../components/nav.css'

import InfoBody from '../components/info_body';
import '../components/info_body.css'

import Footer from '../components/footer';
import '../components/footer.css'

function Home() {
  return (
    <main>
        <div>
            <Header />
            <br />
            <Nav />
            <br />
            <InfoBody />
            <br /><br /><br /><br />
            <Footer />
        </div>
    </main>
  );
}

export default Home;
