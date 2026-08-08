import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import heroVideo from "../../assets/videos/homeheroback.mp4";

import "../../style/home/hero.css";

const Hero = () => {
  return (
    <section className="hero">

      {/* Background Video */}

      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}

      <div className="hero-overlay"></div>

      {/* Content */}

      <div className="hero-content">

        <motion.h3
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          PREMIUM BEVERAGES
        </motion.h3>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Refreshing Every
          <br />
          Moment of Life
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Premium non-alcoholic beers, energy drinks,
          fruit juices and goli soda crafted for every occasion.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Link
            to="/products"
            className="primary-btn"
          >
            Explore Products
          </Link>

          <Link
            to="/distributor#distributor-form"
            className="secondary-btn"
          >
            Become Distributor
          </Link>
        </motion.div>

      </div>

    </section>
  );
};

export default Hero;