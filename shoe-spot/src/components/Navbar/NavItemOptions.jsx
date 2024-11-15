import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";

import { productsContext } from "../../context/productsContext.jsx";
export default function NavItemOptions({ shoe }) {
  const { filterProductsByCategory, setShoeCategory } =
    useContext(productsContext);

  const handleFilterClick = (category) => {
    console.log(category);
    setShoeCategory(category);
    filterProductsByCategory(category);
  };
  return (
    <>
      <Link
        to="/"
        className="dropdown-item"
        onClick={() => handleFilterClick(`${shoe.split(" ")[0]}`)}
      >
        {shoe}
      </Link>
    </>
  );
}
