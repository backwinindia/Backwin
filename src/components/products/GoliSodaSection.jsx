import { motion } from "framer-motion";

import products from "../../data/products";
import ProductCard from "./ProductCard";

import "../../style/products/beerSection.css";

const GoliSodaSection = () => {
  const goliProducts = products.filter(
    (product) => product.category === "Goli Soda"
  );

  return (
    <section
      className="product-section"
      id="goli-soda"
    >
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span>GOLI SODA</span>

        <h2>
          India's Classic Refreshment
        </h2>

        <p>
          Experience the authentic taste of traditional Goli Soda with
          refreshing modern flavours, crafted for every generation.
        </p>
      </motion.div>

      <div className="products-grid">

        {goliProducts.map((product) => (

          <ProductCard
            key={product.id}
            product={product}
          />

        ))}

      </div>

    </section>
  );
};

export default GoliSodaSection;