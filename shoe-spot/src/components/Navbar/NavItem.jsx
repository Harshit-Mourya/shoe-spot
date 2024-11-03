import "./Navbar.css";
import NavItemOptions from "./NavItemOptions.jsx";

export default function NavItem({ shoeKey, shoeType, handleFilterClick }) {
  console.log(shoeKey);
  console.log(shoeType);

  return (
    <div className="nav-item dropdown">
      <a
        className="nav-a dropdown-toggle fs-5 text-white"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {shoeKey}
      </a>
      <ul className="dropdown-menu">
        {shoeType.map((shoe, index) => (
          <li key={index}>
            <NavItemOptions shoe={shoe} handleFilterClick={handleFilterClick} />
          </li>
        ))}
        {/* <li>
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
            onClick={() => handleFilterClick("Clogs")}
          >
            Clogs
          </a>
        </li>
        <li>
          <a
            className="dropdown-item"
            onClick={() => handleFilterClick("Boots")}
          >
            Boots
          </a>
        </li> */}
      </ul>
    </div>
  );
}
