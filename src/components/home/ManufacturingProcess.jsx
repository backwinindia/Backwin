import { motion } from "framer-motion";
import {
  FaSeedling,
  FaIndustry,
  FaClipboardCheck,
  FaBoxOpen,
  FaTruck,
} from "react-icons/fa";

import "../../style/home/manufacturingProcess.css";

const steps = [
  {
    number: "01",
    icon: <FaSeedling />,
    title: "Premium Ingredients",
    description:
      "Only carefully selected raw materials are used to ensure freshness, consistency, and premium taste.",
  },
  {
    number: "02",
    icon: <FaIndustry />,
    title: "Modern Manufacturing",
    description:
      "Produced in advanced manufacturing facilities using hygienic and efficient production processes.",
  },
  {
    number: "03",
    icon: <FaClipboardCheck />,
    title: "Quality Inspection",
    description:
      "Every batch undergoes strict quality checks to maintain international standards before packaging.",
  },
  {
    number: "04",
    icon: <FaBoxOpen />,
    title: "Packaging",
    description:
      "Products are packed with precision to preserve freshness and provide an attractive shelf presence.",
  },
  {
    number: "05",
    icon: <FaTruck />,
    title: "Distribution",
    description:
      "Efficient logistics ensure timely delivery across India and international markets.",
  },
];

const ManufacturingProcess = () => {
  return (
    <section className="process">

      <motion.div
        className="process-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span>HOW WE WORK</span>

        <h2>Manufacturing Process</h2>

        <p>
          Every Back Win beverage is crafted through a carefully controlled
          process that ensures exceptional quality, safety and refreshing taste.
        </p>

      </motion.div>

      <div className="timeline">

        {steps.map((step, index) => (

          <motion.div
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true }}
          >

            <div className="step-number">
              {step.number}
            </div>

            <div className="step-icon">
              {step.icon}
            </div>

            <h3>{step.title}</h3>

            <p>{step.description}</p>

            {index !== steps.length - 1 && (
              <div className="timeline-line"></div>
            )}

          </motion.div>

        ))}

      </div>

    </section>
  );
};

export default ManufacturingProcess;