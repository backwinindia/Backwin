import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "../../style/distributor/distributorCTA.css";
import distributorCTAImage from "../../assets/images/partner.png";

const DistributorCTA = () => {
  return (
    <section className="distributor-cta">

      <div className="distributor-cta-overlay"></div>

      <div className="distributor-cta-container">

        {/* Left Content */}

        <motion.div
          className="distributor-cta-content"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <span>START YOUR JOURNEY</span>

          <h2>
            Ready To Grow With Back Win?
          </h2>

          <p>
            Become a trusted distribution partner and bring premium beverages
            to your market. Together, let's build long-term business success.
          </p>

          <div className="distributor-cta-buttons">

            <Link
              to="/contact"
              className="primary-btn"
            >
              Apply Now
            </Link>

            <Link
              to="/products"
              className="secondary-btn"
            >
              View Products
            </Link>

          </div>

        </motion.div>

        {/* Right Image */}

        <motion.div
          className="distributor-cta-image-wrapper"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <img
            src={distributorCTAImage}
            alt="Back Win Distribution Network"
            className="distributor-cta-image"
          />

        </motion.div>

      </div>

    </section>
  );
};

export default DistributorCTA;