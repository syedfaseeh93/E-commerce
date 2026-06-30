import { Grid } from "@mui/material";
import OrderCard from "./OrderCard";

const OrdersPage = () => {
  const orderStatus = [
    { lable: "On the Way", value: "on_the_way" },
    { lable: "Delivered", value: "delivered" },
    { lable: "Returned", value: "returned" },
    { lable: "Cancelled", value: "cancelled" },
  ];
  return (
    <div className="sm:p-4 lg:px-20">
      <Grid container spacing={4}>
        <Grid
          size={{ sm: 12, lg: 3 }}
          className="p-4 border border-gray-300 shadow-2xl h-90 sticky top-0"
        >
          <div className="h-80 ">
            <h1 className="font-extrabold text-2xl pb-12">Filters</h1>
            <h1 className="font-bold text-2xl mb-2">Order Status</h1>
            {orderStatus.map((option) => (
              <div className="space-x-2">
                <input
                  value={option.value}
                  color="purple"
                  className="bg-gray-400 p-2 my-4"
                  type="checkbox"
                />
                <label htmlFor="{option.value}">{option.lable}</label>
              </div>
            ))}
          </div>
        </Grid>
        <Grid size={{ sm: 12, lg: 9 }}>
          <div className="space-y-4">
            {[1,1,1,1].map((item) => (
              <OrderCard />
            ))}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default OrdersPage;
