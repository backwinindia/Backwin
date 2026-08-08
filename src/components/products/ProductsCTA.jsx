import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "../../style/products/productsCTA.css";
import productsCTAImage from "../../assets/images/partnerimg.png";

const ProductsCTA = () => {
  return (
    <section className="products-cta">

      <div className="products-cta-overlay"></div>

      <div className="products-cta-container">

        <motion.div
          className="products-cta-content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <span>LET'S GROW TOGETHER</span>

          <h2>
            Interested In Our Products?
          </h2>

          <p>
            Whether you're a distributor, wholesaler, retailer or international
            importer, Back Win offers premium beverage solutions backed by
            quality manufacturing and reliable supply.
          </p>

          <div className="products-cta-buttons">

            <Link
              to="/distributor"
              className="primary-btn"
            >
              Become a Distributor
            </Link>

            <Link
              to="/contact"
              className="secondary-btn"
            >
              Contact Sales
            </Link>

          </div>

        </motion.div>

        <motion.div
          className="products-cta-image-wrapper"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <img
            src={productsCTAImage}
            alt="Back Win Beverage Collection"
            className="products-cta-image"
          />

        </motion.div>

      </div>

    </section>
  );
};

export default ProductsCTA;