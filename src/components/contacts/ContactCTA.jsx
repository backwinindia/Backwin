import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "../../style/contacts/contactCTA.css";
import contactCTAImage from "../../assets/images/partner.png";

const ContactCTA = () => {
  return (
    <section className="contact-cta">

      <div className="contact-cta-overlay"></div>

      <div className="contact-cta-container">

        {/* Left Content */}

        <motion.div
          className="contact-cta-content"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <span>LET'S CONNECT</span>

          <h2>
            Ready To Work With Back Win?
          </h2>

          <p>
            Whether you're looking for premium beverages, distribution
            opportunities or business partnerships, our team is ready to
            assist you.
          </p>

          <div className="contact-cta-buttons">

            <Link
              to="/products"
              className="primary-btn"
            >
              Explore Products
            </Link>

            <Link
              to="/distributor"
              className="secondary-btn"
            >
              Become A Distributor
            </Link>

          </div>

        </motion.div>

        {/* Right Image */}

        <motion.div
          className="contact-cta-image-wrapper"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <img
            src={contactCTAImage}
            alt="Back Win Contact"
            className="contact-cta-image"
          />

        </motion.div>

      </div>

    </section>
  );
};

export default ContactCTA;