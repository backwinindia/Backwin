import { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";

import {
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";

import "../style/navbar.css";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [productDropdown, setProductDropdown] = useState(false);

  const navigate = useNavigate();

  const closeMenu = () => {
    setMenuOpen(false);
    setProductDropdown(false);
  };

  const handleDealerClick = () => {

    closeMenu();

    navigate("/distributor");

    setTimeout(() => {
        document.getElementById("distributor-form").scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

    }, 100);

};

  return (
    <>
      {/* ===========================
          Overlay
      =========================== */}

      {menuOpen && (
        <div
          className="nav-overlay"
          onClick={closeMenu}
        />
      )}

      {/* ===========================
          Navbar
      =========================== */}

      <header className="navbar">

        <div className="container">

          {/* ===========================
              Logo
          =========================== */}

          <Link
            to="/"
            className="logo"
            onClick={closeMenu}
          >
            Back<span>Win</span>
          </Link>


          {/* ===========================
              Navigation
          =========================== */}

          <nav
            className={
              menuOpen
                ? "nav-menu active"
                : "nav-menu"
            }
          >

            {/* Home */}

            <NavLink
              to="/"
              onClick={closeMenu}
            >
              Home
            </NavLink>


            {/* About */}

            <NavLink
              to="/about"
              onClick={closeMenu}
            >
              About
            </NavLink>


            {/* ===========================
                Products
            =========================== */}

            <div className="products-dropdown">

              <NavLink
                to="/products"
                onClick={closeMenu}
              >
                Products
              </NavLink>


              <button
                type="button"
                className="dropdown-btn"
                onClick={() =>
                  setProductDropdown(!productDropdown)
                }
                aria-label="Toggle product menu"
              >
                <FaChevronDown />
              </button>


              <div
                className={
                  productDropdown
                    ? "dropdown-menu show"
                    : "dropdown-menu"
                }
              >

                <NavLink
                  to="/products/beer"
                  onClick={closeMenu}
                >
                  Beer
                </NavLink>

                <NavLink
                  to="/products/energy"
                  onClick={closeMenu}
                >
                  Energy Drink
                </NavLink>

                <NavLink
                  to="/products/juice"
                  onClick={closeMenu}
                >
                  Juice
                </NavLink>

                <NavLink
                  to="/products/goli-soda"
                  onClick={closeMenu}
                >
                  Goli Soda
                </NavLink>

                <NavLink
                  to="/products/nata-de-coco"
                  onClick={closeMenu}
                >
                  Nata De Coco
                </NavLink>

              </div>

            </div>


            {/* Distributor */}

            <NavLink
              to="/distributor"
              onClick={closeMenu}
            >
              Distributor
            </NavLink>


            {/* Contact */}

            <NavLink
              to="/contact"
              onClick={closeMenu}
            >
              Contact
            </NavLink>


            {/* ===========================
                Become Dealer
            =========================== */}

            <div className="dealer-btn-wrapper">

              <button
                type="button"
                className="dealer-btn"
                onClick={handleDealerClick}
              >
                Become Dealer
              </button>

            </div>

          </nav>


          {/* ===========================
              Mobile Menu
          =========================== */}

          <button
            type="button"
            className="menu-icon"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={
              menuOpen
                ? "Close menu"
                : "Open menu"
            }
          >

            {menuOpen ? (
              <FaTimes />
            ) : (
              <FaBars />
            )}

          </button>

        </div>

      </header>
    </>
  );
};

export default Navbar;