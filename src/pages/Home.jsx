import Hero from "../components/home/Hero";
import Counter from "../components/Counter";
import AboutPreview from "../components/home/AboutPreview";
import FeaturedProducts from "../components/home/FeaturedProducts";
import WhyChoose from "../components/home/WhyChoose";
import ManufacturingProcess from "../components/home/ManufacturingProcess";
import DistributorCTA from "../components/home/DistributorCTA";

const Home = () => {
  return (
    <>
      <Hero />

      <Counter />

      <AboutPreview />

      <FeaturedProducts />

      <WhyChoose />

      <ManufacturingProcess />

      <DistributorCTA />
    </>
  );
};

export default Home;