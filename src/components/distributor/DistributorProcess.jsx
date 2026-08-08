import { motion } from "framer-motion";

import {
  FaClipboardCheck,
  FaComments,
  FaFileSignature,
  FaTruckLoading,
} from "react-icons/fa";

import "../../style/distributor/distributorProcess.css";

const steps = [
  {
    icon: <FaClipboardCheck />,
    step: "Step 1",
    title: "Submit Your Inquiry",
    description:
      "Fill out the distributor inquiry form with your business and contact details.",
  },
  {
    icon: <FaComments />,
    step: "Step 2",
    title: "Business Discussion",
    description:
      "Our team will contact you to understand your market, business goals and requirements.",
  },
  {
    icon: <FaFileSignature />,
    step: "Step 3",
    title: "Approval & Agreement",
    description:
      "After evaluation, we finalize the partnership and complete the onboarding process.",
  },
  {
    icon: <FaTruckLoading />,
    step: "Step 4",
    title: "Start Distribution",
    description:
      "Receive your first order and begin growing your business with Back Win products.",
  },
];

const DistributorProcess = () => {
  return (
    <section className="distributor-process">

      <motion.div
        className="process-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span>HOW IT WORKS</span>

        <h2>
          Become A Distributor In Four Simple Steps
        </h2>

        <p>
          We've designed a straightforward onboarding process to help you
          become a Back Win distributor quickly and efficiently.
        </p>

      </motion.div>

      <div className="process-grid">

        {steps.map((step, index) => (

          <motion.div
            key={index}
            className="process-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true }}
          >

            <div className="process-icon">
              {step.icon}
            </div>

            <span className="step-number">
              {step.step}
            </span>

            <h3>{step.title}</h3>

            <p>{step.description}</p>

          </motion.div>

        ))}

      </div>

    </section>
  );
};

export default DistributorProcess;