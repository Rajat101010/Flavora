import { motion } from "framer-motion";
import Header from "../components/header";
import "../components/header.css";

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
        <Header />
        <br />
        <NavSunday />
        <br />

        {/* Animated content transition */}
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -200, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <SundayContent />
        </motion.div>

        <br />
        <br />
        <br />
        <br />
        <Footer />
      </main>
    </SwipePage>
  );
}

export default Sunday;
