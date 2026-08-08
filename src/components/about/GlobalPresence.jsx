import { motion } from "framer-motion";
import {
  FaGlobeAsia,
  FaMapMarkedAlt,
  FaTruck,
  FaHandshake,
} from "react-icons/fa";

import "../../style/about/globalPresence.css";
import globalMap from "../../assets/images/globalmap.png";

const stats = [
  {
    icon: <FaMapMarkedAlt />,
    number: "6+",
    title: "Indian States",
  },
  {
    icon: <FaGlobeAsia />,
    number: "5+",
    title: "Countries Served",
  },
  {
    icon: <FaTruck />,
    number: "1000+",
    title: "Retail Deliveries",
  },
  {
    icon: <FaHandshake />,
    number: "100+",
    title: "Business Partners",
  },
];

const GlobalPresence = () => {
  return (
    <section className="global-presence">

      <motion.div
        className="global-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >

        <span>GLOBAL PRESENCE</span>

        <h2>
          Expanding Across India & International Markets
        </h2>

        <p>
          Through strong manufacturing capabilities and a trusted distribution
          network, Back Win continues to expand its footprint across domestic
          and international markets.
        </p>

      </motion.div>

      <div className="global-container">

        <motion.div
          className="global-map-wrapper"
          initial={{ x: -70, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
        >

          <img
            src={globalMap}
            alt="Back Win Global Presence Map"
            className="global-map"
          />

        </motion.div>

        <motion.div
          className="global-stats"
          initial={{ x: 70, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
        >

          {stats.map((item, index) => (

            <div
              key={index}
              className="global-card"
            >

              <div className="global-icon">

                {item.icon}

              </div>

              <div>

                <h3>{item.number}</h3>

                <p>{item.title}</p>

              </div>

            </div>

          ))}

        </motion.div>

      </div>

    </section>
  );
};

export default GlobalPresence;