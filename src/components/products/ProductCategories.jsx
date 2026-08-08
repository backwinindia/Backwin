import { motion } from "framer-motion";
import {
  FaBeer,
  FaBolt,
  FaGlassWhiskey,
  FaWineBottle,
  FaAppleAlt,
} from "react-icons/fa";

import "../../style/products/productCategories.css";

const categories = [
  {
    icon: <FaBeer />,
    title: "Non-Alcoholic Beer",
    description: "Premium malt beverages",
    link: "#beer",
  },
  {
    icon: <FaBolt />,
    title: "Energy Drinks",
    description: "Power & performance",
    link: "#energy",
  },
  {
    icon: <FaAppleAlt />,
    title: "Fruit Juices",
    description: "Refreshing fruit beverages",
    link: "#juice",
  },
  {
    icon: <FaGlassWhiskey />,
    title: "Goli Soda",
    description: "Classic refreshing soda",
    link: "#goli-soda",
  },
  {
    icon: <FaWineBottle />,
    title: "Nata De Coco",
    description: "Refreshing coconut drink",
    link: "#nata-de-coco",
  },
];

const ProductCategories = () => {
  return (
    <section className="product-categories">

      <motion.div
        className="category-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >

        <span>EXPLORE PRODUCTS</span>

        <h2>
          Browse By Category
        </h2>

        <p>
          Discover our complete range of premium beverages crafted for
          different tastes and occasions.
        </p>

      </motion.div>

      <div className="category-grid">

        {categories.map((category, index) => (

          <motion.a
            href={category.link}
            key={index}
            className="category-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >

            <div className="category-icon">

              {category.icon}

            </div>

            <h3>{category.title}</h3>

            <p>{category.description}</p>

          </motion.a>

        ))}

      </div>

    </section>
  );
};

export default ProductCategories;