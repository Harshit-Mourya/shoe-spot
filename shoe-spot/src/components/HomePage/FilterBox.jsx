import "./Home.css";

export default function FilterBox({ isFilterOn, filterProducts }) {
  const handleFilterClick = (filter, cost) => {
    filterProducts(filter, cost);
  };
  return (
    <div
      className="FilterBox"
      style={{ display: isFilterOn ? "block" : "none" }}
    >
      <div>
        <div className="filters">
          <h5 onClick={() => handleFilterClick("products")}>Show All</h5>
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
            $300 - $500{" "}
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
