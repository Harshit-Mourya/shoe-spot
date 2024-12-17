import "./Navbar.css";
import NavItemOptions from "./NavItemOptions.jsx";

export default function NavItem({ shoeKey, filteredShoes }) {
  // console.log(shoeKey);
  // console.log(filteredShoes);

  return (
    <div className="nav-item dropdown">
      <a
        className="nav-a dropdown-toggle fs-5 text-white"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {shoeKey.name}
      </a>
      <ul className="dropdown-menu">
        {filteredShoes.map((shoe) => (
          <li key={shoe._id}>
            <NavItemOptions shoeName={shoe.name} />
          </li>
        ))}
      </ul>
    </div>
  );
}
