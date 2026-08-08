import { motion } from "framer-motion";
import { useState } from "react";

import "../../style/contacts/contactForm.css";

const ContactForm = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    // Replace with your company's WhatsApp number
    const whatsappNumber = "916290906402";

    const message = `Hello Back Win Team,

I would like to contact you regarding your products.

Name: ${formData.name}

Email: ${formData.email}

Phone: ${formData.phone}

Subject: ${formData.subject}

Message:
${formData.message}

Thank you.`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");

  };

  return (

    <section id="contact-form" className="contact-form-section">

      <motion.div
        className="contact-form-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >

        <span>SEND US A MESSAGE</span>

        <h2>
          We'd Love To Hear From You
        </h2>

        <p>
          Fill out the form below and our team will get back to you as soon as
          possible.
        </p>

      </motion.div>

      <motion.form
        className="contact-form"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >

        <div className="contact-form-grid">

          <div className="contact-form-group">

            <label>Full Name</label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />

          </div>

          <div className="contact-form-group">

            <label>Email Address</label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />

          </div>

          <div className="contact-form-group">

            <label>Phone Number</label>

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
            />

          </div>

          <div className="contact-form-group">

            <label>Subject</label>

            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Enter subject"
              required
            />

          </div>

        </div>

        <div className="contact-form-group">

          <label>Message</label>

          <textarea
            rows="7"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here..."
            required
          />

        </div>

        <button
          type="submit"
          className="contact-submit-btn"
        >
          Send Message in WhatsApp
        </button>

      </motion.form>

    </section>

  );

};

export default ContactForm;