import { motion } from "framer-motion";

import products from "../../data/products";

import ProductCard from "./ProductCard";

import "../../style/products/beerSection.css";

const BeerSection = () => {
  const beerProducts = products.filter(
    (product) => product.category === "Beer"
  );

  return (
    <section
      className="product-section"
      id="beer"
    >
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span>NON-ALCOHOLIC BEER</span>

        <h2>
          Premium Malt Beverages
        </h2>

        <p>
          Discover our premium range of non-alcoholic malt beverages,
          crafted to deliver the rich taste and refreshing experience
          that consumers love.
        </p>
      </motion.div>

      <div className="products-grid">
        {beerProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
};

export default BeerSection;