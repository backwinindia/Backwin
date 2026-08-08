import { motion } from "framer-motion";
import {
  FaAward,
  FaLeaf,
  FaGlassCheers,
  FaGlobeAsia,
  FaTruck,
  FaSnowflake,
  FaShieldAlt,
  FaWineBottle,
} from "react-icons/fa";

import bottle from "../../assets/images/multiproduct.png";
import "../../style/home/whyChoose.css";

const leftFeatures = [
  {
    icon: <FaAward />,
    title: "Premium Quality",
    text: "Manufactured with strict quality standards.",
  },
  {
    icon: <FaLeaf />,
    title: "Natural Ingredients",
    text: "Made using carefully selected ingredients.",
  },
  {
    icon: <FaGlassCheers />,
    title: "0% Alcohol",
    text: "Enjoy authentic taste without alcohol.",
  },
  {
    icon: <FaGlobeAsia />,
    title: "Export Quality",
    text: "Trusted by customers across multiple countries.",
  },
];

const rightFeatures = [
  {
    icon: <FaSnowflake />,
    title: "Refreshing Taste",
    text: "Perfect for every season.",
  },
  {
    icon: <FaTruck />,
    title: "Reliable Distribution",
    text: "Fast supply across India.",
  },
  {
    icon: <FaWineBottle />,
    title: "Wide Product Range",
    text: "Beer, juices, energy drinks and more.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Trusted Since 2009",
    text: "Over 17 years of excellence.",
  },
];

const WhyChoose = () => {
  return (
    <section className="why">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Why Choose Back Win
      </motion.h2>

      <div className="why-container">
        {/* Left Features */}
        <div className="feature-column">
          {leftFeatures.map((item, index) => (
            <motion.div
              key={index}
              className="feature-card"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="icon">{item.icon}</div>

              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Center Bottle */}
        <motion.div
          className="center-image"
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img src={bottle} alt="Kingfighter Bottle" />
        </motion.div>

        {/* Right Features */}
        <div className="feature-column">
          {rightFeatures.map((item, index) => (
            <motion.div
              key={index}
              className="feature-card"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="icon">{item.icon}</div>

              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;