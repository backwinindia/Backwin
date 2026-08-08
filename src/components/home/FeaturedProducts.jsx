import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../../style/home/featuredProducts.css";

import kingfighter from "../../assets/images/featuredproducts/kingfighter.png";
import kingwiser from "../../assets/images/featuredproducts/kingwiser.png";
import flavoredbeer from "../../assets/images/featuredproducts/flavorbeer.png";
import energydrink from "../../assets/images/featuredproducts/energy.png";
import muskmellonjuice from "../../assets/images/featuredproducts/muskmellon.png";
import golisoda from "../../assets/images/featuredproducts/golisoda.png";
import mangonata from "../../assets/images/featuredproducts/mangonata.png";

const products = [
  {
    name: "Kingfighter",
    category: "Non-Alcoholic Beer",
    volume: "330 ml",
    image: kingfighter,
    route: "/products/beer",
  },
  {
    name: "Kingweiser",
    category: "Non-Alcoholic Beer",
    volume: "330 ml",
    image: kingwiser,
    route: "/products/beer",
  },
  {
    name: "Flavored Beer",
    category: "Non-Alcoholic Beer",
    volume: "330 ml",
    image: flavoredbeer,
    route: "/products/beer",
  },
  {
    name: "Energy Drink",
    category: "Energy Drink",
    volume: "250 ml",
    image: energydrink,
    route: "/products/energy",
  },
  {
    name: "Fruit Juice",
    category: "Fruit Juice",
    volume: "165 ml",
    image: muskmellonjuice,
    route: "/products/juice",
  },
  {
    name: "Goli Soda",
    category: "Traditional Soft Drink",
    volume: "250 ml",
    image: golisoda,
    route: "/products/goli-soda",
  },
  {
    name: "Mango Nata De Coco",
    category: "Nata De Coco",
    volume: "125 ml",
    image: mangonata,
    route: "/products/nata-de-coco",
  },
];

const FeaturedProducts = () => {
  const navigate = useNavigate();

  return (
    <section className="featured">

      <motion.div
        className="featured-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span>OUR PRODUCTS</span>

        <h2>Featured Products</h2>

        <p>
          Explore Back Win's premium collection of refreshing beverages
          crafted with exceptional quality and taste.
        </p>
      </motion.div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop
        spaceBetween={30}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
          1400: {
            slidesPerView: 4,
          },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.name}>
            <motion.div
              className="featured-card"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              onClick={() => navigate(product.route)}
            >
              <div className="featured-image">
                <img
                  src={product.image}
                  alt={product.name}
                />
              </div>

              <div className="featured-content">

                <p className="featured-category">
                  {product.category}
                </p>

                <h3>{product.name}</h3>

                <div className="featured-footer">

                  <span>{product.volume}</span>

                  <button>
                    View Details →
                  </button>

                </div>

              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
};

export default FeaturedProducts;