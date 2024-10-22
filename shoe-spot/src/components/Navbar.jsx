import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
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
                className="nav-link dropdown-toggle fs-5 text-white"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Casuals
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/sneakers">
                    Sneakers
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/loafers">
                    Loafers
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/sandals">
                    Sandals
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/slides">
                    Slides
                  </Link>
                </li>
              </ul>
            </div>
            <div className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle fs-5 text-white"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Formals
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/oxfords">
                    Oxfords
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/derby-shoes">
                    Derby Shoes
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/loafers">
                    Loafers
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/mojaris">
                    Mojaris (or Juttis)
                  </Link>
                </li>
              </ul>
            </div>
            <div className="nav-item dropdown">
              <Link
                className="nav-link fs-5 text-white"
                to="/sports"
                role="button"
                aria-expanded="false"
              >
                Sports
              </Link>
            </div>
            <div className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle fs-5 text-white"
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
