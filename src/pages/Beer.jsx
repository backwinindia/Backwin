import CategoryDescription from "../components/productDetails/CategoryDescription";
import CategoryProducts from "../components/productDetails/CategoryProducts";

const Beer = () => {
  return (
    <>
      <CategoryDescription category="Beer" />

      <CategoryProducts category="Beer" />
    </>
  );
};

export default Beer;