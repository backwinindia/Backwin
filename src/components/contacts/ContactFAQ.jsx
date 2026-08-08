import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

import "../../style/contacts/contactFAQ.css";

const faqData = [
  {
    question: "How can I contact Back Win?",
    answer:
      "You can reach us through the contact form, phone number, email address, or by visiting our office during business hours.",
  },
  {
    question: "How quickly will I receive a response?",
    answer:
      "Our team aims to respond to all inquiries within 24 to 48 business hours.",
  },
  {
    question: "Do you export your products internationally?",
    answer:
      "Yes. We supply selected international markets. Please contact our sales team for export-related inquiries.",
  },
  {
    question: "Can I become a distributor?",
    answer:
      "Absolutely. Visit our Distributor page or contact us directly to learn more about partnership opportunities.",
  },
  {
    question: "Where can I purchase Back Win products?",
    answer:
      "Our products are available through our distribution network. Contact us and we'll help you locate the nearest distributor or retailer.",
  },
];

const ContactFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="contact-faq">

      <motion.div
        className="contact-faq-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >

        <span>FREQUENTLY ASKED QUESTIONS</span>

        <h2>
          Need More Information?
        </h2>

        <p>
          Here are answers to some of the questions we receive most often.
        </p>

      </motion.div>

      <div className="contact-faq-container">

        {faqData.map((item, index) => (

          <motion.div
            key={index}
            className="contact-faq-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            viewport={{ once: true }}
          >

            <button
              className="contact-faq-question"
              onClick={() => toggleFAQ(index)}
            >

              <span>{item.question}</span>

              <FaChevronDown
                className={
                  activeIndex === index
                    ? "contact-faq-icon rotate"
                    : "contact-faq-icon"
                }
              />

            </button>

            {activeIndex === index && (

              <div className="contact-faq-answer">

                <p>{item.answer}</p>

              </div>

            )}

          </motion.div>

        ))}

      </div>

    </section>
  );
};

export default ContactFAQ;