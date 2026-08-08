import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "../../style/distributor/distributorHero.css";
import distributorHeroImage from "../../assets/images/distrebutorheroimg1.png";

const DistributorHero = () => {
  return (
    <section className="distributor-hero">

      {/* Background Image */}

      <img
        src={distributorHeroImage}
        alt="Back Win Distributor Banner"
        className="distributor-hero-image"
      />

      <div className="distributor-overlay"></div>

      <div className="distributor-content">

        <motion.span
          className="hero-tag"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          BUSINESS OPPORTUNITY
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Become a Back Win Distributor
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Join our growing distribution network and bring premium beverages
          to retailers and consumers across India and international markets.
        </motion.p>

        <motion.div
          className="distributor-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Link
            to="/contact#contact-form"
            className="primary-btn"
          >
            Apply Now
          </Link>

          <Link
            to="/products"
            className="secondary-btn"
          >
            Explore Products
          </Link>
        </motion.div>

        <motion.div
          className="distributor-breadcrumb"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Link to="/">Home</Link>

          <span>/</span>

          <strong>Distributor</strong>
        </motion.div>

      </div>

    </section>
  );
};

export default DistributorHero;