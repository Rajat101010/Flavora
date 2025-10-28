import { motion } from "framer-motion";
import Header from "../components/header";
import "../components/header.css";

import NavFriday from '../components/nav_friday';
import '../components/nav.css'

import FridayContent from '../components/friday_content';
import '../components/all_content.css'

import Footer from '../components/footer';
import '../components/footer.css'

import SwipePage from "../SwipePage";

function Friday() {
  return (
    <SwipePage>
      <main>
        <div>
          <Header />
          <br />
          <NavFriday />
          <br />

          {/* Animated content transition */}
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -200, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <FridayContent />
          </motion.div>

          <br />
          <br />
          <br />
          <br />
          <Footer />
        </div>
      </main>
    </SwipePage>
  );
}

export default Friday;
