import { Button } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useDispatch } from "react-redux";
import { getcartitems, removecartitem, updatecartitem } from "../../state/Cart/Action";



const CartItem = ({cartitem}) => {

  const dispatch=useDispatch();

  const handleRemoveBtn=()=>{
    dispatch(removecartitem(cartitem.id));
  }

  const handleUpdatebtn=(num)=>{
    const data={cartItemId:cartitem.id,quantity:cartitem.quantity+num}
    dispatch(updatecartitem(data));
  }
  
  return (
    <div className="py-4 mb-8 rounded-md border shadow-lg border-gray-300">

      <div className="flex gap-3  p-2 mx-4">
        <div className="w-20 h-20 lg:w-40 lg:h-40">
          <img
            className="w-full h-full object-cover object-top"
            src={cartitem.product.imageURL}
            alt="image"
          />
        </div>
        <div>
          <h3 className="text-gray-900 font-bold">{cartitem.product.brand}</h3>
          <p className="opacity-60 font-bold text-gray-90">
            {cartitem.product.description}
          </p>

          <div className="flex gap-3 items-center mt-2">
            <p className="text-gray-900 font-bold">${cartitem.product.discountedPrice}</p>
            <p className="line-through opacity-60 text-gray-900">${cartitem.product.price}</p>
            <p className="opacity-60 text-green-600">%{cartitem.product.discountPercent} off</p>
          </div>

          <div>
            <p className="opacity-60 font-bold mt-2 text-gray-90">size:{cartitem.size?.toUpperCase()}</p>
          </div>
        </div>
      </div>

      <div className="flex items-center mt-2 mx-4 justify-between  pb-2 w-1/3 ">
        <div className="flex items-center  py-2">
          <Button onClick={()=>{handleUpdatebtn(-1)}} disabled={cartitem.quantity<=1}>
            <RemoveCircleOutlineIcon />
          </Button>
          <div className="border border-gray-200 text-center w-14 h-8">{cartitem.quantity}</div>
          <Button onClick={()=>{handleUpdatebtn(1)}}>
            <AddCircleOutlineIcon />
          </Button>
        </div>
        <div className="font-bold">
          <Button sx={{color:"white",bgcolor:'red'}} onClick={()=>{handleRemoveBtn(cartitem.id)}}>Remove</Button>
        </div>
      </div>

    </div>
  );
};

export default CartItem;
