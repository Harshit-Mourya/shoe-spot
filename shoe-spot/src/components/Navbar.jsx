import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar({ fetchProductsByCategory }) {
  const handleCategoryClick = (category) => {
    fetchProductsByCategory(category);
  };
  return (
    <>
      <nav className="navbar">
        <div className="container-fluid d-flex align-items-center h-50">
          <Link to="/" className="navbar-brand text-white">
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
                    onClick={() => handleCategoryClick("Sneakers")}
                  >
                    Sneakers
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    onClick={() => handleCategoryClick("Loafers")}
                  >
                    Loafers
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    onClick={() => handleCategoryClick("Sandals")}
                  >
                    Sandals
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    onClick={() => handleCategoryClick("Slides")}
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
                    onClick={() => handleCategoryClick("Oxfords")}
                  >
                    Oxfords
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    onClick={() => handleCategoryClick("DerbyShoes")}
                  >
                    Derby Shoes
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    onClick={() => handleCategoryClick("Loafers")}
                  >
                    Loafers
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    onClick={() => handleCategoryClick("Mojaris")}
                  >
                    Mojaris (or Juttis)
                  </a>
                </li>
              </ul>
            </div>
            <div className="nav-item dropdown">
              <a
                className="nav-a fs-5 text-white"
                role="button"
                aria-expanded="false"
                onClick={() => handleCategoryClick("Sports")}
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
                  <a className="dropdown-item" href="#">
                    Shop By Price
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
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
