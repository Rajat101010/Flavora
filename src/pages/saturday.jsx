import { motion } from "framer-motion";
import Header from "../components/header";
import "../components/header.css";

import NavSaturday from '../components/nav_saturday';
import '../components/nav.css'

import SaturdayContent from '../components/saturday_content';
import '../components/all_content.css'

import Footer from '../components/footer';
import '../components/footer.css'

import SwipePage from "../SwipePage";

function Saturday() {
  return (
    <SwipePage>
      <main>
        <Header />
        <br />
        <NavSaturday />
        <br />

        {/* Animated content transition */}
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -200, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <SaturdayContent />
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

export default Saturday;
