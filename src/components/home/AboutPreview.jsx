import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "../../style/home/aboutPreview.css";
import factory from "../../assets/images/factory/factory1.png"

const AboutPreview = () => {
  return (
    <section className="about-preview">

      <div className="about-container">

        {/* Left Side */}

        <motion.div
          className="about-image-wrapper"
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <img
            src={factory}
            alt="Back Win Factory"
            className="about-image"
          />

          <div className="experience-badge">
            <h2>17+</h2>
            <span>Years Experience</span>
          </div>

        </motion.div>

        {/* Right Side */}

        <motion.div
          className="about-preview-content"
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <span className="section-tag">
            ABOUT BACK WIN
          </span>

          <h2>
            Crafting Refreshment With Quality & Passion Since 2009
          </h2>

          <p>
            Back Win is one of India's rapidly growing beverage manufacturers,
            offering a premium range of non-alcoholic beers, energy drinks,
            fruit juices, goli soda and refreshing beverages.
          </p>

          <p>
            Our commitment to innovation, superior quality and customer
            satisfaction has helped us build a trusted brand across India and
            international markets.
          </p>

          <div className="about-features">

            <div className="feature-item">
              ✔ Premium Quality Products
            </div>

            <div className="feature-item">
              ✔ Modern Manufacturing
            </div>

            <div className="feature-item">
              ✔ Export Quality Standards
            </div>

            <div className="feature-item">
              ✔ Trusted Distribution Network
            </div>

          </div>

          <Link to="/about" className="about-btn">
            Read More
          </Link>

        </motion.div>

      </div>

    </section>
  );
};

export default AboutPreview;