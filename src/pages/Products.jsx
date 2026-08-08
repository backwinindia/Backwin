import ProductsHero from "../components/products/ProductsHero";
import ProductCategories from "../components/products/ProductCategories";

import BeerSection from "../components/products/BeerSection";
import EnergySection from "../components/products/EnergySection";
import JuiceSection from "../components/products/JuiceSection";
import NataDeCocoSection from "../components/products/NataDeCocoSection";
import GoliSodaSection from "../components/products/GoliSodaSection";

import WhyOurProducts from "../components/products/WhyOurProducts";
import ProductsCTA from "../components/products/ProductsCTA";

const Products = () => {
  return (
   <>
    <ProductsHero />

    <ProductCategories />

    <BeerSection />

    <EnergySection />

    <JuiceSection />

    <NataDeCocoSection />

    <GoliSodaSection />

    <WhyOurProducts />

    <ProductsCTA />
  </>
  );
};

export default Products;