import { motion } from "framer-motion";
import Header from "../components/header";
import "../components/header.css";

import NavMonday from "../components/nav_monday";
import "../components/nav.css";

import MondayContent from "../components/monday_content";
import "../components/all_content.css";

import Footer from "../components/footer";
import "../components/footer.css";

import SwipePage from "../SwipePage";

function Monday() {
  return (
    <SwipePage>
      <main>
        <Header />
        <br />
        <NavMonday />
        <br />

        {/* Animated content transition */}
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -200, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <MondayContent />
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

export default Monday;
