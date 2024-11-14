import "./Navbar.css";
import NavItemOptions from "./NavItemOptions.jsx";

export default function NavItem({ shoeKey, shoeType }) {
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
            <NavItemOptions shoe={shoe} />
          </li>
        ))}
      </ul>
    </div>
  );
}
