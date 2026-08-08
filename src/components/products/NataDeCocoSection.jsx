import { motion } from "framer-motion";

import products from "../../data/products";
import ProductCard from "./ProductCard";

import "../../style/products/beerSection.css";

const NataDeCocoSection = () => {

  const nataProducts = products.filter(
    (product) => product.category === "Nata De Coco"
  );

  return (
    <section
      className="product-section"
      id="nata-de-coco"
    >

      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >

        <span>NATA DE COCO</span>

        <h2>
          Refreshing With Every Bite
        </h2>

        <p>
          Discover our delicious range of fruit beverages blended with soft
          nata de coco cubes, offering a refreshing taste and unique texture
          in every sip.
        </p>

      </motion.div>

      <div className="products-grid">

        {nataProducts.map((product) => (

          <ProductCard
            key={product.id}
            product={product}
          />

        ))}

      </div>

    </section>
  );
};

export default NataDeCocoSection;