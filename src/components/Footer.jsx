import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import "../style/footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Company */}

        <div className="footer-column">

          <h2 className="footer-logo">
            Back<span>Win</span>
          </h2>

          <p>
            Back Win is committed to delivering premium quality
            non-alcoholic beverages, fruit drinks, energy drinks,
            Goli Soda and Nata De Coco products to customers
            across India and international markets.
          </p>

        </div>

        {/* Quick Links */}

        <div className="footer-column">

          <h3>Quick Links</h3>

          <Link to="/">Home</Link>

          <Link to="/about">About</Link>

          <Link to="/products">Products</Link>

          <Link to="/distributor">Distributor</Link>

          <Link to="/contact">Contact</Link>

        </div>

        {/* Products */}

        <div className="footer-column">

          <h3>Products</h3>

          <Link to="/beer">Beer</Link>

          <Link to="/energy">Energy Drinks</Link>

          <Link to="/juice">Juices</Link>

          <Link to="/goli-soda">Goli Soda</Link>

          <Link to="/nata-de-coco">Nata De Coco</Link>

        </div>

        {/* Contact */}

        <div className="footer-column">

          <h3>Contact</h3>

          <p>
            <FaPhoneAlt /> +91 8160607668
          </p>

          <p>
            <FaEnvelope /> Backwinindia@gmail.com
          </p>

          <p>
            <FaMapMarkerAlt /> Morbi, Gujarat, India
          </p>

          <div className="footer-social">

            <a href="#">
              <FaFacebookF />
            </a>

            <a href="https://www.instagram.com/backwin_company?igsh=MXVqbzhrbGQybGViZA==">
              <FaInstagram />
            </a>

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 Back Win. All Rights Reserved.
        </p>

        <p>
          Designed & Developed by <strong>KouSraTech</strong>
        </p>

      </div>

    </footer>
  );
};

export default Footer;