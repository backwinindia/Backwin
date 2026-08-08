import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

import "../../style/distributor/eligibility.css";
import partnerImage from "../../assets/images/partnerimg.png";

const requirements = [
  "Established distributor, wholesaler or retailer",
  "Experience in FMCG or beverage distribution is preferred",
  "Strong local market knowledge",
  "Storage space for product inventory",
  "Efficient sales and delivery network",
  "Commitment to long-term business partnership",
];

const Eligibility = () => {
  return (
    <section className="eligibility">

      <div className="eligibility-container">

        {/* Left Image */}

        <motion.div
          className="eligibility-image-wrapper"
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <img
            src={partnerImage}
            alt="Back Win Distributor"
            className="eligibility-image"
          />

        </motion.div>

        {/* Right Content */}

        <motion.div
          className="eligibility-content"
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <span>ELIGIBILITY</span>

          <h2>
            Who Can Become A Distributor?
          </h2>

          <p>
            We welcome passionate business partners who are committed to
            delivering quality products and building long-term relationships
            with retailers and consumers.
          </p>

          <div className="eligibility-list">

            {requirements.map((item, index) => (

              <div
                key={index}
                className="eligibility-item"
              >

                <FaCheckCircle className="check-icon" />

                <span>{item}</span>

              </div>

            ))}

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default Eligibility;