import { useLocation } from "react-router-dom";
import "./Home.css";

export default function ShoeInfo() {
  const location = useLocation();
  const product = location.state;
  return (
    <>
      <div className="ShoeInfo">
        <div className="product-img">
          <img src={product.imgSrc} alt="product.title" />
        </div>
        <div className="product-info">
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p className="product-price">Price: $ {product.price}</p>
        </div>
      </div>
    </>
  );
}
