import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "../../style/contacts/contactHero.css";
import contactHeroImage from "../../assets/images/contactheroimg.png";

const ContactHero = () => {
  return (
    <section className="contact-hero">

      {/* Background Image */}

      <img
        src={contactHeroImage}
        alt="Back Win Contact Banner"
        className="contact-hero-image"
      />

      <div className="contact-overlay"></div>

      <div className="contact-content">

        <motion.span className="hero-tag"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          CONTACT US
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          We'd Love To Hear From You
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Whether you have a business inquiry, product question or partnership
          opportunity, our team is here to help.
        </motion.p>

        <motion.div
          className="contact-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Link
            to="/products"
            className="primary-btn"
          >
            Explore Products
          </Link>

          <Link
            to="/distributor#distributor-form"
            className="secondary-btn"
          >
            Become a Distributor
          </Link>
        </motion.div>

        <motion.div
          className="contact-breadcrumb"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Link to="/">Home</Link>

          <span>/</span>

          <strong>Contact</strong>
        </motion.div>

      </div>

    </section>
  );
};

export default ContactHero;