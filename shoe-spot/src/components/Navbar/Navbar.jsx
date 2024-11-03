import "./Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "/logo.png";
import NavItem from "./NavItem.jsx";

export default function Navbar({
  filterProductsByCategory,
  toggleFilter,
  shoeKeys,
  shoeTypes,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log("menu toggle");
    setIsMenuOpen(!isMenuOpen);
  };

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
        <div className="container-fluid d-flex align-items-center h-50">
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
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
        </div>
        <div className="container-fluid border-top d-flex align-items-center justify-content-between h-50 px-4">
          <div className="nav-options w-50 d-flex justify-content-between mx-auto">
            {shoeKeys.map((shoeKey) => (
              <NavItem
                shoeKey={shoeKey}
                shoeType={shoeTypes[shoeKey]}
                handleFilterClick={handleFilterClick}
              />
            ))}

            {/* <div className="nav-item dropdown">
              <a
                className="nav-a dropdown-toggle fs-5 text-white"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Formals
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    className="dropdown-item"
                    onClick={() => handleFilterClick("Oxfords")}
                  >
                    Oxfords
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    onClick={() => handleFilterClick("Derby")}
                  >
                    Derby Shoes
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    onClick={() => handleFilterClick("Flats")}
                  >
                    Flats
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    onClick={() => handleFilterClick("Heels")}
                  >
                    Heels
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    onClick={() => handleFilterClick("Loafers")}
                  >
                    Loafers
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    onClick={() => handleFilterClick("Mojaris")}
                  >
                    Mojaris (or Juttis)
                  </a>
                </li>
              </ul>
            </div>
            <div className="nav-item dropdown">
              <a
                className="nav-a dropdown-toggle fs-5 text-white"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Athletic Shoes
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    className="dropdown-item"
                    onClick={() => handleFilterClick("Sports")}
                  >
                    Sports
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    onClick={() => handleFilterClick("Walking")}
                  >
                    Walking Shoes
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    onClick={() => handleFilterClick("Court")}
                  >
                    Court Shoes
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    onClick={() => handleFilterClick("Dance")}
                  >
                    Dance Shoes
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    onClick={() => handleFilterClick("Hiking")}
                  >
                    Hiking
                  </a>
                </li>
              </ul>
            </div> */}

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

            <div className="menu-icon" onClick={toggleMenu}>
              <i className="fa-solid fa-bars "></i>
            </div>
          </div>
          <div className="cart">
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
        </div>
      </nav>
    </>
  );
}
