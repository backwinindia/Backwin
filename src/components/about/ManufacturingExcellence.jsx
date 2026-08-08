import { motion } from "framer-motion";
import {
  FaIndustry,
  FaFlask,
  FaShieldAlt,
  FaTruckMoving,
} from "react-icons/fa";

import "../../style/about/manufacturingExcellence.css";
import factory1 from "../../assets/images/factory/factory1.png";

const features = [
  {
    icon: <FaIndustry />,
    title: "Modern Production Facility",
    description:
      "Advanced machinery and automated manufacturing processes ensure consistent product quality.",
  },
  {
    icon: <FaFlask />,
    title: "Quality Testing",
    description:
      "Every production batch undergoes strict quality control before reaching the market.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Food Safety Standards",
    description:
      "Manufactured following hygiene and safety practices to deliver beverages you can trust.",
  },
  {
    icon: <FaTruckMoving />,
    title: "Efficient Distribution",
    description:
      "Strong logistics network supplying products across India and international markets.",
  },
];

const ManufacturingExcellence = () => {
  return (
    <section className="manufacturing-excellence">

      <div className="manufacturing-container">

        {/* Left Content */}

        <motion.div
          className="manufacturing-content"
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <span className="section-tag">
            MANUFACTURING EXCELLENCE
          </span>

          <h2>
            Built On Quality, Innovation & Reliability
          </h2>

          <p>
            At Back Win, every beverage is produced using advanced manufacturing
            practices, quality ingredients and modern technology to ensure
            consistency, freshness and customer satisfaction.
          </p>

          <p>
            Our commitment to excellence enables us to deliver premium beverages
            that meet the expectations of distributors, retailers and consumers
            across multiple markets.
          </p>

          <div className="manufacturing-features">

            {features.map((feature, index) => (

              <div
                key={index}
                className="manufacturing-feature"
              >

                <div className="feature-icon">
                  {feature.icon}
                </div>

                <div>

                  <h3>{feature.title}</h3>

                  <p>{feature.description}</p>

                </div>

              </div>

            ))}

          </div>

        </motion.div>

        {/* Right Image */}

        <motion.div
          className="manufacturing-image-wrapper"
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <img
            src={factory1}
            alt="Back Win Manufacturing Plant"
            className="manufacturing-image"
          />

        </motion.div>

      </div>

    </section>
  );
};

export default ManufacturingExcellence;