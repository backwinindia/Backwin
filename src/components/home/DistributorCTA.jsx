import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "../../style/home/distributorCTA.css";
import distributorImage from "../../assets/images/distributer1.png";

const DistributorCTA = () => {
  return (
    <section className="distributor">

      <div className="distributor-container">

        {/* Left Content */}

        <motion.div
          className="distributor-content"
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <span>JOIN OUR NETWORK</span>

          <h2>
            Become a Back Win Distributor
          </h2>

          <p>
            Partner with one of India's fastest-growing beverage brands.
            Expand your business with premium products, strong marketing
            support and a trusted distribution network.
          </p>

          <div className="distributor-features">

            <div>✔ Premium Product Portfolio</div>

            <div>✔ High Market Demand</div>

            <div>✔ Marketing & Sales Support</div>

            <div>✔ Attractive Business Opportunity</div>

          </div>

          <div className="distributor-buttons">

            <Link
              to="/distributor"
              className="primary-btn"
            >
              Become Distributor
            </Link>

            <Link
              to="/contact"
              className="secondary-btn"
            >
              Contact Us
            </Link>

          </div>

        </motion.div>

        {/* Right Image */}

        <motion.div
          className="distributor-image-wrapper"
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <img
            src={distributorImage}
            alt="Back Win Distributor Promotion"
            className="distributor-image"
          />

        </motion.div>

      </div>

    </section>
  );
};

export default DistributorCTA;