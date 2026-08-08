import { motion } from "framer-motion";

import "../../style/contacts/googleMap.css";

const GoogleMap = () => {
  return (
    <section className="google-map">

      <motion.div
        className="google-map-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >

        <span>OUR LOCATION</span>

        <h2>
          Visit Our Office
        </h2>

        <p>
          Find us easily using the interactive Google Map below.
          We look forward to meeting you.
        </p>

      </motion.div>

      <motion.div
        className="map-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <iframe
          title="Back Win Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.0796426651586!2d70.88931487467993!3d22.799512624616693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39598ddcacf71191%3A0xe13403a1298b7e61!2sBackwin%20(%20Jalaram%20sales%20agency%20)!5e0!3m2!1sen!2sin!4v1785656892646!5m2!1sen!2sin"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

      </motion.div>

    </section>
  );
};

export default GoogleMap;