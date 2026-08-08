import { motion } from "framer-motion";
import {
  FaHandshake,
  FaLightbulb,
  FaAward,
  FaUsers,
} from "react-icons/fa";

import "../../style/about/coreValues.css";

const values = [
  {
    icon: <FaAward />,
    title: "Quality",
    description:
      "We never compromise on product quality and maintain strict manufacturing standards.",
  },
  {
    icon: <FaLightbulb />,
    title: "Innovation",
    description:
      "We continuously develop new products and improve existing beverages to satisfy evolving customer needs.",
  },
  {
    icon: <FaHandshake />,
    title: "Integrity",
    description:
      "Honesty, transparency and long-term relationships are the foundation of our business.",
  },
  {
    icon: <FaUsers />,
    title: "Customer First",
    description:
      "Our customers, distributors and partners remain at the center of every decision we make.",
  },
];

const CoreValues = () => {
  return (
    <section className="core-values">

      <motion.div
        className="values-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span>OUR VALUES</span>

        <h2>
          Principles That Drive Everything We Do
        </h2>

        <p>
          Every Back Win product is built upon strong values that define our
          culture, strengthen our relationships and inspire continuous
          excellence.
        </p>

      </motion.div>

      <div className="values-grid">

        {values.map((value, index) => (

          <motion.div
            key={index}
            className="value-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true }}
          >

            <div className="value-icon">
              {value.icon}
            </div>

            <h3>{value.title}</h3>

            <p>{value.description}</p>

          </motion.div>

        ))}

      </div>

    </section>
  );
};

export default CoreValues;