import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="container-fluid d-flex align-items-center h-50">
          <a className="navbar-brand text-white">Shoe Spot</a>
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
          <div class="w-25 d-flex justify-content-between mx-auto">
            <div class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle fs-5 text-white"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Men
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Sneakers
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Slip Ons
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Loafers
                  </a>
                </li>
              </ul>
            </div>
            <div class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle fs-5 text-white"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Women
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Sneakers
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Slip Ons
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Sandals
                  </a>
                </li>
              </ul>
            </div>
            <div class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle fs-5 text-white"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sale
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Shop By Price
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
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
