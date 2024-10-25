import "./Navbar.css";
import { Link } from "react-router-dom";
import Logo from "/logo.png";

export default function Navbar({ filterProducts, toggleFilter }) {
  const handleFilterClick = (filter) => {
    filterProducts(filter);
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
            onClick={() => handleFilterClick("products")}
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
        <div className="container-fluid border-top d-flex align-items-center h-50">
          <div className="w-50 d-flex justify-content-between mx-auto">
            <div className="nav-item dropdown">
              <a
                className="nav-a dropdown-toggle fs-5 text-white"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Casuals
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    className="dropdown-item"
                    onClick={() => handleFilterClick("Sneakers")}
                  >
                    Sneakers
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
                    onClick={() => handleFilterClick("Sandals")}
                  >
                    Sandals
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    onClick={() => handleFilterClick("Slides")}
                  >
                    Slides
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
                    onClick={() => handleFilterClick("DerbyShoes")}
                  >
                    Derby Shoes
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
                className="nav-a fs-5 dropdown-toggle text-white"
                role="button"
                aria-expanded="false"
                onClick={() => handleFilterClick("Sports")}
              >
                Sports
              </a>
            </div>
            <div className="nav-item dropdown">
              <a
                className="nav-a dropdown-toggle fs-5 text-white"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sale
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    className="dropdown-item "
                    onClick={() => filterToggle("byPrice")}
                  >
                    Shop By Price
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    onClick={() => filterToggle("byDiscount")}
                  >
                    Shop By Discount
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
