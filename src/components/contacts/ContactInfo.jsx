import { motion } from "framer-motion";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

import "../../style/contacts/contactInfo.css";

const contactDetails = [
  {
    icon: <FaMapMarkerAlt />,
    title: "Office Address",
    value: 'Balaji Enterprise Shop no. 16, Krishna Chamber 3, Behind Shakti Chember 2, Near Radhe Hotel, 8A National Highway, Morbi 2, MORBI, Gujarat-363642'
  },
  {
    icon: <FaPhoneAlt />,
    title: "Phone Number",
    value: "+91 8160607668",
  },
  {
    icon: <FaEnvelope />,
    title: "Email Address",
    value: " Backwinindia@gmail.com",
  },
  {
    icon: <FaClock />,
    title: "Business Hours",
    value: "Monday - Saturday | 9:00 AM - 6:00 PM",
  },
];

const ContactInfo = () => {
  return (
    <section className="contact-info">

      <motion.div
        className="contact-info-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >

        <span>GET IN TOUCH</span>

        <h2>
          Contact Information
        </h2>

        <p>
          Have questions about our products or business opportunities?
          Reach out to us using the information below.
        </p>

      </motion.div>

      <div className="contact-info-grid">

        {contactDetails.map((item, index) => (

          <motion.div
            key={index}
            className="contact-info-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >

            <div className="contact-info-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.value}</p>

          </motion.div>

        ))}

      </div>

    </section>
  );
};

export default ContactInfo;