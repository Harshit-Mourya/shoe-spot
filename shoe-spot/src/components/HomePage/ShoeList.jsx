// src/components/ShoeList.jsx
import React, { useEffect, useState } from "react";
import "./Home.css";
import ShoeCard from "./ShoeCard.jsx";

export default function ShoeList({ products }) {
  const [error, setError] = useState(null);

  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <h2>All Shoes</h2>
      <div className="ShoeList">
        {products.map((product) => (
          <ShoeCard product={product} />
        ))}
      </div>
    </>
  );
}
