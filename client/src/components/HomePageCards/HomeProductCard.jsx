import { useNavigate } from "react-router-dom";
import "./HomeProductCard.css";
const HomePageCard = ({ product }) => {
 const navigate=useNavigate();
  const HandleClick=()=>{
    navigate(`/products/${3}`);
  }
  return (
    <div onClick={HandleClick} className="productCard flex flex-col h-100 p-5 w-60 shadow-2xl m-4 cursor-pointer rounded-xl">
      <div className="h-60">
        <img
          className="object-cover h-full object-top-left  w-full "
          src={product.imageUrl}
          alt=""
        />
      </div>

      <div className="p-4 productText bg-white">
        <div>
          <h3 className="text-md font-bold text-gray-800">{product.brand}</h3>
        </div>
        <div>
          <p className="">{product.title}</p>
        </div>
      </div>
    </div>
  );
};

export default HomePageCard;
