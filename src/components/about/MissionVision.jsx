import { motion } from "framer-motion";
import { FaBullseye, FaEye } from "react-icons/fa";

import "../../style/about/missionVision.css";

const MissionVision = () => {
  return (
    <section className="mission">

      <motion.div
        className="mission-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >

        <span>OUR PURPOSE</span>

        <h2>
          Driven By Purpose, Inspired By Excellence
        </h2>

        <p>
          Every beverage we create reflects our commitment to quality,
          innovation and long-term customer satisfaction.
        </p>

      </motion.div>

      <div className="mission-container">

        {/* Mission */}

        <motion.div
          className="mission-card"
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
        >

          <div className="mission-icon">

            <FaBullseye />

          </div>

          <h3>Our Mission</h3>

          <p>
            To manufacture premium-quality beverages using modern technology,
            superior ingredients and sustainable practices while creating value
            for customers, distributors and business partners.
          </p>

        </motion.div>

        {/* Vision */}

        <motion.div
          className="mission-card"
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
        >

          <div className="mission-icon">

            <FaEye />

          </div>

          <h3>Our Vision</h3>

          <p>
            To become one of the most trusted global beverage brands by
            continuously delivering innovation, quality and exceptional
            customer experiences across every market we serve.
          </p>

        </motion.div>

      </div>

    </section>
  );
};

export default MissionVision;