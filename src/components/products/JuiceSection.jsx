import { motion } from "framer-motion";

import products from "../../data/products";
import ProductCard from "./ProductCard";

import "../../style/products/beerSection.css";

const JuiceSection = () => {

  const juiceProducts = products.filter(
    (product) => product.category === "Juice"
  );

  return (
    <section
      className="product-section"
      id="juice"
    >

      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >

        <span>FRUIT JUICES</span>

        <h2>
          Refreshingly Delicious
        </h2>

        <p>
          Explore our premium fruit juice collection made with delicious fruit
          flavours, carefully crafted to deliver natural freshness and great
          taste in every sip.
        </p>

      </motion.div>

      <div className="products-grid">

        {juiceProducts.map((product) => (

          <ProductCard
            key={product.id}
            product={product}
          />

        ))}

      </div>

    </section>
  );
};

export default JuiceSection;