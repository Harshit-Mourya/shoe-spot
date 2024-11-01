// src/components/ShoeList.jsx
import React, { useEffect, useState } from "react";
import "./Home.css";
import ShoeCard from "./ShoeCard.jsx";
import FilterBox from "./FilterBox.jsx";

export default function ShoeList({
  products,
  isFilterOn,
  filterProducts,
  toggleFilter,
}) {
  const [error, setError] = useState(null);

  if (error) return <div>Error: {error}</div>;

  return (
    <div className="ShoeList">
      {isFilterOn && (
        <FilterBox
          filterProducts={filterProducts}
          toggleFilter={toggleFilter}
        />
      )}

      <div className="ShoeListMain">
        {products.length === 0 ? (
          <h3 className="no-products">No products available!</h3>
        ) : (
          products.map((product) => (
            <ShoeCard product={product} key={product.id} />
          ))
        )}
      </div>
    </div>
  );
}
