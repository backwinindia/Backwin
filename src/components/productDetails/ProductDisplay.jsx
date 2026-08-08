import { motion } from "framer-motion";

import "../../style/productDetails/productDisplay.css";

const ProductDisplay = ({ product }) => {
  return (
    <motion.section
      id={product.slug}
      className="product-display"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Product Name */}

      <h2 className="display-title">
        {product.name}
      </h2>

      <div className="display-container">

        {/* Product Image */}

        <div className="display-image">

          <img
            src={product.descimg}
            alt={product.alt}
          />

        </div>

        {/* Product Details */}

        <div className="display-content">

          <h3>Description</h3>

          <p>
            {product.description}
          </p>

          <div className="variant-section">

            <h3>
              Available Variants
            </h3>

            <div className="variant-grid">

              {product.variants.map((variant, index) => (

                <div
                  key={index}
                  className="variant-card"
                >

                  <h4>
                    {variant.volume}
                  </h4>

                  <p>
                    Pack Quantity : {variant.packQty}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </motion.section>
  );
};

export default ProductDisplay;