import "./Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "/logo.png";
import NavItem from "./NavItem.jsx";
import { useContext } from "react";
import { productsContext } from "../../context/productsContext.jsx";
import { cartContext } from "../../context/cartContext";
import { filterContext } from "../../context/filterContext.jsx";

export default function Navbar() {
  const { cartItems } = useContext(cartContext);
  const { toggleFilter } = useContext(filterContext);
  const { filterProductsByCategory, shoeKeys, shoeTypes } =
    useContext(productsContext);

  const handleFilterClick = (category) => {
    filterProductsByCategory(category);
  };
  const filterToggle = () => {
    console.log("in navbar");

    toggleFilter();
  };

  return (
    <>
      <nav className="navbar">
        <div className="container-fluid d-flex align-items-center h-50 nav-1">
          <Link
            to="/"
            className="navbar-brand text-white"
            onClick={() => handleFilterClick()}
          >
            <img src={Logo} alt="Logo" className="logo" />
            Shoe Spot
          </Link>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2 search-input"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
        </div>
        <div className="container-fluid border-top d-flex align-items-center justify-content-between h-50 px-4 nav-2">
          <div className="nav-options w-50 d-flex justify-content-between mx-auto">
            {shoeKeys.map((shoeKey, index) => (
              <NavItem
                shoeKey={shoeKey}
                shoeType={shoeTypes[shoeKey]}
                key={index}
              />
            ))}

            <div className="nav-item dropdown">
              <a
                className="nav-a dropdown-toggle fs-5 text-white"
                role="button"
                aria-expanded="false"
                onClick={() => filterToggle()}
              >
                Filters
              </a>
            </div>
          </div>
          <Link
            to="/my-cart"
            className="cart d-flex justify-content-center align-items-center position-relative"
          >
            <i className="fa-solid fa-cart-shopping"></i>

            {cartItems.length > 0 ? (
              <span className="badge rounded-circle bg-danger position-absolute top-0 start-100 translate-middle text-center">
                {cartItems.length}
              </span>
            ) : null}
          </Link>
        </div>
      </nav>
    </>
  );
}
