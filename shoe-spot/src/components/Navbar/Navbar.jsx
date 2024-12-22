import "./Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "/logo.png";
import NavItem from "./NavItem.jsx";
import CircleMenu from "./CircleMenu.jsx"
import { useContext } from "react";
import { productsContext } from "../../context/productsContext.jsx";
import { cartContext } from "../../context/cartContext";
import { filterContext } from "../../context/filterContext.jsx";

export default function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const { cartItems } = useContext(cartContext);
  const { toggleFilter, setIsFilterOn } = useContext(filterContext);
  const {
    filterProductsByCategory,
    shoeKeys,
    shoeTypes,
    searchProduct,
    setShoeCategory,
  } = useContext(productsContext);

  const handleLogoClick = (category) => {
    // console.log("To Home Button");
    setIsFilterOn(false);
    setShoeCategory("all");
    filterProductsByCategory(category);
  };
  const filterToggle = () => {
    // console.log("in navbar");

    toggleFilter();
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value); // Update the search term in state
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault(); // Prevent page reload
    searchProduct(searchTerm); // Call the search function with the search term
  };

  return (
    <>
      <nav className="navbar">
        <CircleMenu/>
        <div className="container-fluid d-flex align-items-center h-50 nav-1">
          <Link
            to="/"
            className="navbar-brand text-white"
            onClick={() => handleLogoClick()}
          >
            <img src={Logo} alt="Logo" className="logo" />
            Shoe Spot
          </Link>
          <form
            className="d-flex align-items-center search-form"
            role="search"
            onSubmit={handleSearchSubmit}
          >
            <input
              className="form-control me-2 search-input"
              type="search"
              placeholder="Search"
              value={searchTerm}
              aria-label="Search"
              onChange={handleSearchChange}
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
        </div>
        <div className="container-fluid border-top d-flex align-items-center justify-content-between h-50 px-4 nav-2">
          <div className="nav-options w-50 d-flex justify-content-between mx-auto">
            {shoeKeys.map((shoeKey) => (
              <NavItem
                shoeKey={shoeKey}
                filteredShoes={shoeTypes.filter(
                  (shoeType) => shoeType.shoeKey === shoeKey._id
                )}
                key={shoeKey._id}
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
              <span className="badge rounded-circle d-flex align-items-center position-absolute top-0 start-100 translate-middle text-center">
                {cartItems.length}
              </span>
            ) : null}
          </Link>
        </div>
      </nav>
    </>
  );
}
