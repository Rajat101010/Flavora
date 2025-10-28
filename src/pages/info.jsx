import { motion } from "framer-motion";
import HeaderInfo from '../components/header_info';
import '../components/header.css'

import Nav from '../components/nav';
import '../components/nav.css'

import TitleText from '../components/title_text_info';

import InfoBody from '../components/info_body';
import '../components/info_body.css'

import Footer from '../components/footer';
import '../components/footer.css'

function Home() {
  return (
    <main>
      <div>
        <HeaderInfo />
        <br />
        <Nav />
        <br />
        {/* Animated content transition */}
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -200, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <TitleText />
          <InfoBody />
        </motion.div>
        <br /><br /><br /><br />
        <Footer />
      </div>
    </main>
  );
}

export default Home;
