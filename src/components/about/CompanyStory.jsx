import { motion } from "framer-motion";

import "../../style/about/companyStory.css";
import factory2 from "../../assets/images/factory/factory2.png";


const CompanyStory = () => {
  return (
    <section className="company-story">

      <div className="story-container">

        {/* Left Side */}

        <motion.div
          className="story-image-wrapper"
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <img
            src={factory2}
            alt="Back Win Manufacturing Facility"
            className="story-image"
          />

          <div className="story-badge">
            <h2>17+</h2>
            <span>Years of Excellence</span>
          </div>

        </motion.div>

        {/* Right Side */}

        <motion.div
          className="story-content"
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <span className="story-tag">
            OUR STORY
          </span>

          <h2>
            Building A Trusted Beverage Brand Since 2009
          </h2>

          <p>
            Since our establishment in 2009, Back Win has focused on
            producing premium quality beverages that combine refreshing taste,
            modern manufacturing and uncompromising quality standards.
          </p>

          <p>
            Over the years, we have expanded our portfolio to include
            non-alcoholic beers, fruit juices, energy drinks, goli soda and
            many other beverages that are enjoyed by customers across India
            and international markets.
          </p>

          <p>
            Every product reflects our dedication to innovation, customer
            satisfaction and continuous improvement while maintaining the
            highest manufacturing standards.
          </p>

          <div className="story-stats">

            <div className="stat-box">
              <h3>28+</h3>
              <p>Products</p>
            </div>

            <div className="stat-box">
              <h3>6+</h3>
              <p>States</p>
            </div>

            <div className="stat-box">
              <h3>5+</h3>
              <p>Countries</p>
            </div>

            <div className="stat-box">
              <h3>100%</h3>
              <p>Quality Focused</p>
            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default CompanyStory;