import { motion } from "framer-motion";

import {
  FaHandshake,
  FaChartLine,
  FaTruck,
  FaGlobeAsia,
} from "react-icons/fa";

import "../../style/distributor/partnerBenefits.css";

const benefits = [
  {
    icon: <FaHandshake />,
    title: "Strong Business Partnership",
    description:
      "We believe in building long-term relationships with our distributors through trust, transparency and continuous support.",
  },
  {
    icon: <FaChartLine />,
    title: "Growing Market Demand",
    description:
      "Our expanding beverage portfolio helps distributors serve diverse customer preferences and grow their business.",
  },
  {
    icon: <FaTruck />,
    title: "Reliable Supply Chain",
    description:
      "Efficient production and logistics ensure timely product availability and smooth business operations.",
  },
  {
    icon: <FaGlobeAsia />,
    title: "Expanding Brand Presence",
    description:
      "Join a brand that continues to grow across India and international markets with a strong product portfolio.",
  },
];

const PartnerBenefits = () => {
  return (
    <section className="partner-benefits">

      <motion.div
        className="partner-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >

        <span>WHY PARTNER WITH US</span>

        <h2>
          Grow Your Business With Back Win
        </h2>

        <p>
          Back Win is committed to helping distributors succeed through
          premium beverages, dependable supply and long-term business
          relationships.
        </p>

      </motion.div>

      <div className="partner-grid">

        {benefits.map((item, index) => (

          <motion.div
            key={index}
            className="partner-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >

            <div className="partner-icon">

              {item.icon}

            </div>

            <h3>{item.title}</h3>

            <p>{item.description}</p>

          </motion.div>

        ))}

      </div>

    </section>
  );
};

export default PartnerBenefits;