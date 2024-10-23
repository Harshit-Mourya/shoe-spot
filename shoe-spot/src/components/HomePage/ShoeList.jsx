// src/components/ShoeList.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ShoeList({ products }) {
  const [error, setError] = useState(null);

  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Shoe List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <p>Price: ${product.price.toFixed(2)}</p>
            <p>{product.description}</p>
            <p>Category: {product.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
