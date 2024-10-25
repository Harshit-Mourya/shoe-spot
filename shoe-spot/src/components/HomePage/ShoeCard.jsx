import "./Home.css";
import defaultImg from "/default.png";
import { Link } from "react-router-dom";

export default function ShoeCard({ product }) {
  // const navigate = useNavigate();
  // const handleClick = () => {
  //   navigate("/product-details", { state: product });
  // };

  return (
    <>
      <Link className="ShoeCard" to="/product-details" state={product}>
        <img
          src={product.imgSrc == "" ? defaultImg : product.imgSrc}
          alt={product.title}
        />

        <div className="cardBody">
          <p className="card-title"> {product.title}</p>
          <p className="card-price">Price: ${product.price.toFixed(2)}</p>
          {/* <p className="card-content">{product.description}</p> */}
          <p>Category: {product.category}</p>
        </div>
      </Link>
    </>
  );
}
