import { Box, Grid } from "@mui/material";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { deepPurple } from "@mui/material/colors";

const OrderDetails = () => {
  return (
    <div className="lg:px-24">
        <h1 className="font-bold text-xl">Delivery Address</h1>
      <AddressCard />
      <div>
        <OrderTracker activeStep={3} />
      </div>

      <div className="space-y-4 ">
        {[1, 1,].map((i) => (
          <Grid
            container
            className="border border-gray-300 shadow-lg hover:shadow-2xl cursor-pointer"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid container item size={{ sm: 6, lg: 6 }} className="">
              <div className="flex gap-2 p-4 space-x-2">
                <img
                  className="h-25 w-25 object-cover object-top"
                  src="https://rukminim1.flixcart.com/image/612/612/xif0q/jean/z/n/u/32-ecskn-01bb-002-spykar-original-imaghxqwuw67ywfy.jpeg?q=70"
                  alt=""
                />
                <div className="space-y-2">
                  <p className="font-semibold ">
                    Men Skinny Low Rise Black Jeans
                  </p>
                  <p className="text-xs space-x-4 opacity-50">
                    <span>color : black</span>
                    <span>size : L</span>
                  </p>
                  <p className="text-xs">Seller:Lineria</p>
                  <p>$899</p>
                </div>
              </div>
            </Grid>

            <Grid className="px-4 text-sm">
              <Box sx={{ color: deepPurple[500] }} className="space-x-1 ">
                <StarBorderIcon sx={{ fontSize: "20px" }} />
                <span className="cursor-pointer hover:underline">Rate & Review Product</span>
              </Box>
            </Grid>
          </Grid>
        ))}
      </div>
    </div>
  );
};

export default OrderDetails;
