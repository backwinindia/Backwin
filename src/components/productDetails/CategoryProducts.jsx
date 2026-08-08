import { useEffect } from "react";

import products from "../../data/products";

import ProductDisplay from "./ProductDisplay";

const CategoryProducts = ({ category }) => {

  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  useEffect(() => {

    const hash = window.location.hash;

    if (hash) {

      const id = hash.replace("#", "");

      setTimeout(() => {

        const element = document.getElementById(id);

        if (element) {

          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });

        }

      }, 200);

    }

  }, []);

  return (
    <>
      {filteredProducts.map((product) => (
        <ProductDisplay
          key={product.id}
          product={product}
        />
      ))}
    </>
  );
};

export default CategoryProducts;