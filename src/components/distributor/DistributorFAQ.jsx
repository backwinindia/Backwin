import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

import "../../style/distributor/distributorFAQ.css";

const faqData = [
  {
    question: "How can I become a Back Win distributor?",
    answer:
      "Simply fill out the distributor inquiry form on this page. Our team will review your application and contact you for further discussion.",
  },
  {
    question: "Do I need prior distribution experience?",
    answer:
      "Experience in FMCG or beverage distribution is preferred, but we also welcome motivated business partners with strong market potential.",
  },
  {
    question: "Which regions can I apply for?",
    answer:
      "We are expanding across India and selected international markets. Availability depends on the region and existing distribution network.",
  },
  {
    question: "What products can I distribute?",
    answer:
      "Distributors can offer our complete beverage portfolio including non-alcoholic beer, energy drinks, fruit juices, Goli Soda and Nata De Coco beverages.",
  },
  {
    question: "Will Back Win provide marketing support?",
    answer:
      "Yes. We provide branding materials and business support to help distributors grow in their local markets.",
  },
];

const DistributorFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="distributor-faq">

      <motion.div
        className="faq-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >

        <span>FREQUENTLY ASKED QUESTIONS</span>

        <h2>
          Have Questions?
        </h2>

        <p>
          Find answers to the most common questions about becoming a Back Win
          distributor.
        </p>

      </motion.div>

      <div className="faq-container">

        {faqData.map((item, index) => (

          <motion.div
            key={index}
            className="faq-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            viewport={{ once: true }}
          >

            <button
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >

              <span>{item.question}</span>

              <FaChevronDown
                className={
                  activeIndex === index
                    ? "faq-icon rotate"
                    : "faq-icon"
                }
              />

            </button>

            {activeIndex === index && (

              <div className="faq-answer">

                <p>{item.answer}</p>

              </div>

            )}

          </motion.div>

        ))}

      </div>

    </section>
  );
};

export default DistributorFAQ;