import { motion } from "framer-motion";
import { useState } from "react";

import "../../style/distributor/distributorForm.css";

const DistributorForm = () => {

  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    businessType: "",
    experience: "",
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

    // Replace with your company WhatsApp number
    const whatsappNumber = "918160607668";

    const message = `*NEW DISTRIBUTOR INQUIRY*

Hello Back Win Team,

A new distributor inquiry has been submitted.

━━━━━━━━━━━━━━━━━━━━━━

Full Name:
${formData.fullName}

Company:
${formData.companyName}

Email:
${formData.email}

Phone:
${formData.phone}

City:
${formData.city}

State:
${formData.state}

Business Type:
${formData.businessType}

Experience:
${formData.experience} years

Message:
${formData.message}

━━━━━━━━━━━━━━━━━━━━━━

Please contact me regarding distributorship opportunities.

Thank you.`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");

  };

  return (

    <section id="distributor-form" className="distributor-form-section">

      <motion.div
        className="form-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >

        <span>DISTRIBUTOR INQUIRY</span>

        <h2>
          Apply To Become A Distributor
        </h2>

        <p>
          Complete the form below and our team will contact you to discuss
          partnership opportunities.
        </p>

      </motion.div>

      <motion.form
        className="distributor-form"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >

        <div className="form-grid">

          <div className="form-group">

            <label>Full Name</label>

            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />

          </div>

          <div className="form-group">

            <label>Company Name</label>

            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Enter company name"
              required
            />

          </div>

          <div className="form-group">

            <label>Email Address</label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
              required
            />

          </div>

          <div className="form-group">

            <label>Phone Number</label>

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              required
            />

          </div>

          <div className="form-group">

            <label>City</label>

            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Enter city"
              required
            />

          </div>

          <div className="form-group">

            <label>State</label>

            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="Enter state"
              required
            />

          </div>

          <div className="form-group">

            <label>Business Type</label>

            <select
              name="businessType"
              value={formData.businessType}
              onChange={handleChange}
              required
            >

              <option value="">
                Select Business Type
              </option>

              <option value="Distributor">
                Distributor
              </option>

              <option value="Wholesaler">
                Wholesaler
              </option>

              <option value="Retailer">
                Retailer
              </option>

              <option value="Importer">
                Importer
              </option>

              <option value="Exporter">
                Exporter
              </option>

            </select>

          </div>

          <div className="form-group">

            <label>Years Of Experience</label>

            <input
              type="text"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              placeholder="Example: 5 Years"
              required
            />

          </div>

        </div>

        <div className="form-group">

          <label>Message</label>

          <textarea
            rows="6"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your business..."
            required
          />

        </div>

        <button
          type="submit"
          className="submit-btn"
        >
          Submit Inquiry In WhatsApp
        </button>

      </motion.form>

    </section>

  );

};

export default DistributorForm;