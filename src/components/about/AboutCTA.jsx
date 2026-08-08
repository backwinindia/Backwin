import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "../../style/about/aboutCTA.css";
import partnershipImage from "../../assets/images/partner.png";

const AboutCTA = () => {
  return (
    <section className="about-cta">

      <div className="about-cta-container">

        {/* Left Content */}

        <motion.div
          className="about-cta-content"
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <span>LET'S GROW TOGETHER</span>

          <h2>
            Ready To Partner With Back Win?
          </h2>

          <p>
            Whether you're looking to become a distributor, expand your
            beverage portfolio or build a long-term business relationship,
            Back Win is ready to grow with you.
          </p>

          <div className="about-cta-buttons">

            <Link
              to="/distributor"
              className="cta-primary-btn"
            >
              Become a Distributor
            </Link>

            <Link
              to="/contact"
              className="cta-secondary-btn"
            >
              Contact Us
            </Link>

          </div>

        </motion.div>

        {/* Right Image */}

        <motion.div
          className="about-cta-image-wrapper"
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <img
            src={partnershipImage}
            alt="Back Win Business Partnership"
            className="about-cta-image"
          />

        </motion.div>

      </div>

    </section>
  );
};

export default AboutCTA;