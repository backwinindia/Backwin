import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "../../style/about/aboutHero.css";
import abouthero from "../../assets/images/about/abouthero.jpg";

const AboutHero = () => {
  return (
    <section className="about-hero">

      <img
        src={abouthero}
        alt="Back Win About Banner"
        className="about-hero-video"
      />

      <div className="about-overlay"></div>

      <div className="about-content">

        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          ABOUT BACK WIN
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .2 }}
        >
          Crafting Premium Beverages Since 2009
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .4 }}
        >
          Delivering quality, innovation and refreshing beverages
          trusted by customers across India and international markets.
        </motion.p>

        <motion.div
          className="breadcrumb"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .6 }}
        >
          <Link to="/">Home</Link>

          <span>/</span>

          <strong>About Us</strong>
        </motion.div>

      </div>

    </section>
  );
};

export default AboutHero;