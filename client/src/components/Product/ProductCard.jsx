import { useNavigate } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const navigate=useNavigate();
  const HandleClick=()=>{
    navigate(`/products/${4}`);
  }
  return (
    <div onClick={HandleClick} className="productCard cursor-pointer">
      <div className=" w-60 m-6">
        <div className="productImage h-80">
          <img
            className="h-full w-full object-cover object-top-left"
            src={product.imageUrl}
            alt=""
          />
        </div>

        <div className="productDetails bg-white p-3">
          <div className="textPart">
            <p className="font-bold opacity-60 ">{product.brand}</p>
            <p className="font-semibold opacity-50">{product.title}</p>
          </div>

          <div className="productPrice flex gap-3 ">
            <p className="font-bold">${product.discountedPrice}</p>
            <p className="line-through opacity-60">${product.price}</p>
            <p className="font-bold text-green-500">
              {product.discountPersent} % off
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
