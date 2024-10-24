import "./Home.css";
import defaultImg from "/default.png";

export default function ShoeCard({ product }) {
  return (
    <>
      <div className="ShoeCard">
        <img
          src={product.imgSrc == "" ? defaultImg : product.imgSrc}
          alt={product.title}
        />

        <div className="cardBody">
          <p className="card-title"> {product.title}</p>
          <p className="card-price">Price: ${product.price.toFixed(2)}</p>
          <p className="card-content">{product.description}</p>
          <p>Category: {product.category}</p>
        </div>
      </div>
    </>
  );
}
