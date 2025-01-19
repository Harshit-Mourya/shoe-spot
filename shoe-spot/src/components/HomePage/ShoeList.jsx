// src/components/ShoeList.jsx
import React, { useEffect, useState } from "react";
import "./Home.css";
import ShoeCard from "./ShoeCard.jsx";
import FilterBox from "./FilterBox.jsx";
import Loading from "../Loading.jsx";

import { useContext } from "react";
import { productsContext } from "../../context/productsContext.jsx";
import { filterContext } from "../../context/filterContext.jsx";

export default function ShoeList() {
  const [error, setError] = useState(null);

  const { isFilterOn, setIsFilterOn, toggleFilter } = useContext(filterContext);
  const { products, filterProducts, loading } = useContext(productsContext);

  if (error) return <div>Error: {error}</div>;

  {
    if (loading) {
      return <Loading />;
    }
  }

  return (
    <div className="ShoeList">
      {isFilterOn && <div className="dull-background"></div>}
      {isFilterOn && <FilterBox />}

      <div className={`ShoeListMain ${isFilterOn ? "blur" : ""}`}>
        {products.length === 0 ? (
          <h3 className="no-products">No products available!</h3>
        ) : (
          products.map((product) => (
            <ShoeCard product={product} key={product._id} />
          ))
        )}
      </div>
    </div>
  );
}
