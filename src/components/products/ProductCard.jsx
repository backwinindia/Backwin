import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "../../style/products/productCard.css";

const categoryRoutes = {
  Beer: "beer",
  "Energy Drink": "energy",
  "Goli Soda": "goli-soda",
  Juice: "juice",
  "Nata De Coco": "nata-de-coco",
};

const ProductCard = ({ product }) => {
  return (
    <motion.div
      className="product-card"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="product-image-wrapper">
        <img
          src={product.image}
          alt={product.alt}
          className="product-image"
        />
      </div>

      <div className="product-content">
        <span className="product-category">
          {product.category}
        </span>

        <h3>{product.name}</h3>

        <p>{product.description}</p>

        <div className="product-footer">
          <span className="product-volume">
            {product.variants[0].volume}
          </span>

          <Link
            to={`/products/${categoryRoutes[product.category]}#${product.slug}`}
            className="view-product-btn"
          >
            View Product
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;