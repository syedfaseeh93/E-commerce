import { Button } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const CartItem = () => {
  return (
    <div className="py-4 mb-8 rounded-md border shadow-lg border-gray-300">

      <div className="flex gap-3  p-2 mx-4">
        <div className="w-20 h-20 lg:w-40 lg:h-40">
          <img
            className="w-full h-full object-cover object-top"
            src="https://rukminim1.flixcart.com/image/612/612/xif0q/dress/h/m/h/xl-na-awd-23-yellow-aarvia-original-imagzfs6ykq3z7jw.jpeg?q=70"
            alt=""
          />
        </div>
        <div>
          <h3 className="text-gray-900 font-bold">Aarvia</h3>
          <p className="opacity-60 font-bold text-gray-90">
            Women Bodycon Yellow Dress
          </p>

          <div className="flex gap-3 items-center mt-2">
            <p className="text-gray-900 font-bold">$699</p>
            <p className="line-through opacity-60 text-gray-900">$1999</p>
            <p className="opacity-60 text-green-600">65% off</p>
          </div>
        </div>
      </div>

      <div className="flex items-center mt-2 mx-4 justify-between  pb-2 w-1/3 ">
        <div className="flex items-center  py-2">
          <Button >
            <RemoveCircleOutlineIcon />
          </Button>
          <div className="border border-gray-200 text-center w-14 h-8">2</div>
          <Button >
            <AddCircleOutlineIcon />
          </Button>
        </div>
        <div className="font-bold">
          <Button sx={{color:"white",bgcolor:'red'}}>Remove</Button>
        </div>
      </div>

    </div>
  );
};

export default CartItem;
