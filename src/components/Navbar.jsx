import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";

import "../style/navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [productDropdown, setProductDropdown] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setProductDropdown(false);
  };

  return (
    <>
      {/* Overlay */}

      {menuOpen && (
        <div
          className="nav-overlay"
          onClick={closeMenu}
        />
      )}

      <header className="navbar">
        <div className="container">

          <Link
            to="/"
            className="logo"
          >
            Back<span>Win</span>
          </Link>

          <nav
            className={
              menuOpen
                ? "nav-menu active"
                : "nav-menu"
            }
          >
            <NavLink
              to="/"
              onClick={closeMenu}
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              onClick={closeMenu}
            >
              About
            </NavLink>

            {/* Products */}

            <div className="products-dropdown">

              <NavLink
                to="/products"
                onClick={closeMenu}
              >
                Products
              </NavLink>

              <button
                className="dropdown-btn"
                onClick={() =>
                  setProductDropdown(
                    !productDropdown
                  )
                }
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

            <NavLink
              to="/distributor"
              onClick={closeMenu}
            >
              Distributor
            </NavLink>

            <NavLink
              to="/contact"
              onClick={closeMenu}
            >
              Contact
            </NavLink>

            <div className="dealer-btn-wrapper">
              <button
                className="dealer-btn"
                onClick={() => {
                  closeMenu();
                  window.location.href = "/distributor#distributor-form";
                }}
              >
                Become Dealer
              </button>
            </div>

          </nav>

          <div
            className="menu-icon"
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>

        </div>
      </header>
    </>
  );
};

export default Navbar;