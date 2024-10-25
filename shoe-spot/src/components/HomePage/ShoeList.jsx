// src/components/ShoeList.jsx
import React, { useEffect, useState } from "react";
import "./Home.css";
import ShoeCard from "./ShoeCard.jsx";
import FilterBox from "./FilterBox.jsx";

export default function ShoeList({ products, isFilterOn }) {
  const [error, setError] = useState(null);

  if (error) return <div>Error: {error}</div>;

  return (
    <div className="ShoeList">
      <FilterBox isFilterOn={isFilterOn} />

      <div className="ShoeListMain">
        {products.map((product) => (
          <ShoeCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
