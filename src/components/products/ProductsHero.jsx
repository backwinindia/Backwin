import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "../../style/products/productsHero.css";
import productsHeroImage from "../../assets/images/allproductimg.png";

const ProductsHero = () => {
  return (
    <section className="products-hero">

      {/* Background */}

      <img
        src={productsHeroImage}
        alt="Back Win Products Banner"
        className="products-hero-image"
      />

      <div className="products-overlay"></div>

      <div className="products-content">

        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          OUR PRODUCTS
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .2 }}
        >
          Premium Beverages For Every Occasion
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .4 }}
        >
          Discover our wide range of refreshing beverages crafted with quality,
          innovation and exceptional taste.
        </motion.p>

        <motion.div
          className="products-breadcrumb"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .6 }}
        >

          <Link to="/">Home</Link> <span>/</span> <strong>Products</strong>

        </motion.div>

      </div>

    </section>
  );
};

export default ProductsHero;