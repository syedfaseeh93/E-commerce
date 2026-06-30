import { Grid } from "@mui/material";
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from "react-router-dom";

const OrderCard = () => {
  
  const navigate = useNavigate();
  const HandleClick=()=>{navigate(`/account/orders/${4}`)}
  return (
    <div onClick={HandleClick}>
      <Grid
      container
      spacing={2}
      sx={{ justifyContent: "space-between" }}
      className="shadow-lg border border-gray-300 p-6"
    >
      <Grid size={{ sm: 6, lg: 6 }}>
        <div className=" flex gap-3 ">
          <img
            className="w-20 h-20 object-cover object-top"
            src="https://rukminim1.flixcart.com/image/612/612/xif0q/jean/h/y/g/34-jeans-bt008-laheja-original-imagqqbsfgmdhcvn.jpeg?q=70"
            alt=""
          />
          <div>
            <h1 className="font-semibold text-gray-600 ">
              Men Regular Mid Rise Black Jeans
            </h1>
            <p className="opacity-60 font-bold">Size:L</p>
          </div>
        </div>
      </Grid>
      <Grid size={{ sm: 2, lg: 2 }}>
        <p className="text-lg text-center text-gray-600">$999</p>
      </Grid>
      <Grid size={{ sm: 6, lg: 4 }} className="">
        {true && (
          <div>
            <p className="space-x-2">
              <AdjustIcon  className="text-green-500" />
              <span>Delivered on March 6th</span>
            </p>
            <p className="text-sm">Your item has been Delivered</p>
          </div>
        )}
        {false && (
          <h2 className=" text-gray-600">Expected Delivery on March 3rd</h2>
        )}
      </Grid>
    </Grid>
    </div>
  );
};

export default OrderCard;
