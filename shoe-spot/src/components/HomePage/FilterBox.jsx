import "./Home.css";
import { useContext } from "react";
import { productsContext } from "../../context/productsContext";
import { filterContext } from "../../context/filterContext";

export default function FilterBox({}) {
  const { filterProductsByPrice } = useContext(productsContext);
  const handleFilterClick = (costrange) => {
    filterProductsByPrice(costrange);
    toggleFilter();
  };

  const { toggleFilter } = useContext(filterContext);
  const filterToggle = () => {
    // console.log("in filter box");

    toggleFilter();
  };
  return (
    <div className="FilterBox">
      <div className="close-filter">
        <i className="fa-solid fa-xmark" onClick={() => filterToggle()}></i>
      </div>
      <div className="allFilters">
        <div className="filters">
          <h5 onClick={() => handleFilterClick()}>Show All</h5>
        </div>
        <div className="filters">
          <h5>Shop By Price</h5>
          <p
            className="filter-option"
            onClick={() => handleFilterClick([0, 100])}
          >
            Less than $100
          </p>
          <p
            className="filter-option"
            onClick={() => handleFilterClick([100, 300])}
          >
            $100 - $300
          </p>

          <p
            className="filter-option"
            onClick={() => handleFilterClick([300, 500])}
          >
            $300 - $500
          </p>
          <p
            className="filter-option"
            onClick={() => handleFilterClick([500, 700])}
          >
            $500 - $700
          </p>
          <p
            className="filter-option"
            onClick={() => handleFilterClick([700, 900])}
          >
            $700 - $900
          </p>
          <p
            className="filter-option"
            onClick={() => handleFilterClick([900, 1000])}
          >
            $900 - $1000
          </p>
        </div>
      </div>
    </div>
  );
}
