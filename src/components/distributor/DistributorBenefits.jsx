import { motion } from "framer-motion";

import {
  FaBoxes,
  FaBullhorn,
  FaPercentage,
  FaHeadset,
  FaWarehouse,
  FaMedal,
} from "react-icons/fa";

import "../../style/distributor/distributorBenefits.css";

const benefits = [
  {
    icon: <FaBoxes />,
    title: "Wide Product Portfolio",
    description:
      "Offer customers a diverse range of premium beverages including non-alcoholic beer, juices, energy drinks and Goli Soda.",
  },
  {
    icon: <FaPercentage />,
    title: "Competitive Margins",
    description:
      "Benefit from attractive business opportunities with competitive pricing and sustainable growth.",
  },
  {
    icon: <FaBullhorn />,
    title: "Marketing Support",
    description:
      "Receive promotional materials and branding support to help increase product visibility.",
  },
  {
    icon: <FaWarehouse />,
    title: "Reliable Inventory",
    description:
      "Consistent production capacity ensures dependable product availability throughout the year.",
  },
  {
    icon: <FaHeadset />,
    title: "Dedicated Support",
    description:
      "Our team works closely with distributors to ensure smooth business operations and timely assistance.",
  },
  {
    icon: <FaMedal />,
    title: "Trusted Brand",
    description:
      "Partner with an established beverage manufacturer known for quality and customer satisfaction.",
  },
];

const DistributorBenefits = () => {
  return (
    <section className="distributor-benefits">

      <motion.div
        className="benefits-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >

        <span>DISTRIBUTOR BENEFITS</span>

        <h2>
          Everything You Need To Grow
        </h2>

        <p>
          We provide the resources, support and product portfolio needed
          to help our distributors build a successful business.
        </p>

      </motion.div>

      <div className="benefits-grid">

        {benefits.map((benefit, index) => (

          <motion.div
            key={index}
            className="benefit-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >

            <div className="benefit-icon">

              {benefit.icon}

            </div>

            <h3>{benefit.title}</h3>

            <p>{benefit.description}</p>

          </motion.div>

        ))}

      </div>

    </section>
  );
};

export default DistributorBenefits;