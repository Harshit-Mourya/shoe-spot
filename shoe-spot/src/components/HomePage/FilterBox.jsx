import "./Home.css";

export default function FilterBox({ filterProducts, toggleFilter }) {
  const handleFilterClick = (filter, cost) => {
    filterProducts(filter, cost);
  };
  const filterToggle = () => {
    console.log("in filter box");

    toggleFilter();
  };
  return (
    <div className="FilterBox">
      <div className="close-filter">
        <i></i>
        <i class="fa-solid fa-xmark" onClick={() => filterToggle()}></i>
      </div>
      <div>
        <div className="filters">
          <h5 onClick={() => handleFilterClick()}>Show All</h5>
        </div>
        <div className="filters">
          <h5>Shop By Price</h5>
          <p
            className="filter-option"
            onClick={() => handleFilterClick("costrange", [0, 100])}
          >
            Less than $100
          </p>
          <p
            className="filter-option"
            onClick={() => handleFilterClick("costrange", [100, 300])}
          >
            $100 - $300
          </p>

          <p
            className="filter-option"
            onClick={() => handleFilterClick("costrange", [300, 500])}
          >
            $300 - $500
          </p>
          <p
            className="filter-option"
            onClick={() => handleFilterClick("costrange", [500, 700])}
          >
            $500 - $700
          </p>
          <p
            className="filter-option"
            onClick={() => handleFilterClick("costrange", [700, 900])}
          >
            $700 - $900
          </p>
          <p
            className="filter-option"
            onClick={() => handleFilterClick("costrange", [900, 1000])}
          >
            $900 - $1000
          </p>
        </div>
      </div>
    </div>
  );
}
