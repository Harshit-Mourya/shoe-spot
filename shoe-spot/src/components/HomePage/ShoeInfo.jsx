import { useLocation } from "react-router-dom";
import "./Home.css";

import AddToCartBtn from "../Cart/AddToCartBtn";

export default function ShoeInfo() {
  const location = useLocation();
  const product = location.state;
  return (
    <>
      <div className="ShoeInfo">
        <div className="product-img">
          <img src={product.imgSrc} alt="product.title" />
        </div>
        <div className="product-info my-auto">
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p className="product-price">Price: $ {product.price}</p>
          <AddToCartBtn product={product} />
        </div>
      </div>
    </>
  );
}
