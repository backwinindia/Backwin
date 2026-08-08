import { motion } from "framer-motion";

import products from "../../data/products";
import ProductCard from "./ProductCard";

import "../../style/products/beerSection.css";

const EnergySection = () => {
  const energyProducts = products.filter(
    (product) => product.category === "Energy Drink"
  );

  return (
    <section
      className="product-section"
      id="energy"
    >
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span>ENERGY DRINKS</span>

        <h2>
          Fuel Your Day
        </h2>

        <p>
          Our premium energy drinks are crafted to deliver refreshing taste,
          bold flavours and the boost you need for an active lifestyle.
        </p>
      </motion.div>

      <div className="products-grid">
        {energyProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
};

export default EnergySection;