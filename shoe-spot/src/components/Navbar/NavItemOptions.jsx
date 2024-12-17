import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";

import { productsContext } from "../../context/productsContext.jsx";
export default function NavItemOptions({ shoeName }) {
  const { filterProductsByCategory, setShoeCategory } =
    useContext(productsContext);

  const handleFilterClick = (category) => {
    // console.log(category);
    setShoeCategory(category);
    filterProductsByCategory(category);
  };
  return (
    <>
      <Link
        to="/"
        className="dropdown-item"
        onClick={() => handleFilterClick(`${shoeName.split(" ")[0]}`)}
      >
        {shoeName}
      </Link>
    </>
  );
}
