import "./Home.css";
import defaultImg from "/default.png";
import { Link } from "react-router-dom";
import AddToCartBtn from "../Cart/AddToCartBtn";
export default function ShoeCard({ product }) {
  // const navigate = useNavigate();
  // const handleClick = () => {
  //   navigate("/product-details", { state: product });
  // };

  return (
    <>
      <div className="ShoeCard">
        <Link to="/product-details" state={product}>
          <img
            src={product.imgSrc == "" ? defaultImg : product.imgSrc}
            alt={product.title}
          />
        </Link>
        <div className="cardBody">
          <p className="card-title"> {product.title}</p>
          <p className="card-price">Price: ${product.price.toFixed(2)}</p>

          {/* <p className="card-content">{product.description}</p> */}
          {/* <p>Category: {product.category}</p> */}
          <AddToCartBtn product={product} />
        </div>
      </div>
    </>
  );
}
