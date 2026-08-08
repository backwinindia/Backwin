import { motion } from "framer-motion";
import {
  FaAward,
  FaLeaf,
  FaIndustry,
  FaGlobe,
} from "react-icons/fa";

import "../../style/products/whyOurProducts.css";

const features = [
  {
    icon: <FaAward />,
    title: "Premium Quality",
    description:
      "Every beverage is manufactured with strict quality control to ensure consistent taste and freshness.",
  },
  {
    icon: <FaLeaf />,
    title: "Carefully Selected Ingredients",
    description:
      "We use quality ingredients to deliver beverages with exceptional flavour and refreshing taste.",
  },
  {
    icon: <FaIndustry />,
    title: "Modern Manufacturing",
    description:
      "Produced using advanced manufacturing facilities with hygiene and food safety standards.",
  },
  {
    icon: <FaGlobe />,
    title: "Trusted Worldwide",
    description:
      "Serving customers across multiple Indian states and international markets with premium beverages.",
  },
];

const WhyOurProducts = () => {
  return (
    <section className="why-products">

      <motion.div
        className="why-products-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >

        <span>WHY CHOOSE OUR PRODUCTS</span>

        <h2>
          Crafted With Quality & Passion
        </h2>

        <p>
          Every Back Win beverage is designed to deliver superior taste,
          consistent quality and customer satisfaction through modern
          manufacturing and innovation.
        </p>

      </motion.div>

      <div className="why-products-grid">

        {features.map((feature, index) => (

          <motion.div
            key={index}
            className="why-product-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >

            <div className="why-product-icon">

              {feature.icon}

            </div>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>

          </motion.div>

        ))}

      </div>

    </section>
  );
};

export default WhyOurProducts;