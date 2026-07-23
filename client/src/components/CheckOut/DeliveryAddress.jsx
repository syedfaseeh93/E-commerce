import Grid from "@mui/material/Grid";
import AddressCard from "../AddressCard/AddressCard";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createOrder, getOrderById } from "../../state/Order/Action";

const DeliveryAddress = () => {

  const dispatch=useDispatch();
  const navigate = useNavigate()

  const HandleSubmit = (e) => {
    e.preventDefault()

    const data = new FormData(e.currentTarget)

    const address = {
      firstName: data.get('FirstName'),
      lastName: data.get('LastName'),
      streetAddress: data.get('Address'),
      city: data.get('City'),
      state: data.get('State'),
      pin_code: data.get('pin-code'),
      mobile: data.get('phoneNumber'),
    }
    console.log(address,navigate)
    dispatch(createOrder(address,navigate));
  };


  return (
    <div className="px-6 shadow-md pb-18 rounded-md">
      <h1 className="font-bold m-4 text-xl">Delivery Address</h1>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 5 }} className="rounded-md">
          <div className=" mx-2 overflow-y-scroll h-140 p-4 mb-4">
            {<AddressCard />}
          </div>
        </Grid>

        <Grid
          size={{ xs: 12, md: 7 }}
          className="border border-gray-200 shadow-xl  rounded-md "
        >
          <form onSubmit={HandleSubmit}>
            <h1 className="font-bold m-4 text-xl">Add New Address</h1>
            <Grid container spacing={4} className="p-6 ">
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  required
                  id="FirstName"
                  name="FirstName"
                  label="First Name"
                  fullWidth
                />
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  required
                  id="LastName"
                  name="LastName"
                  label="Last Name"
                  fullWidth
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TextField
                  required
                  id="Address"
                  name="Address"
                  label="Address"
                  fullWidth
                  multiline
                  rows={4}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  required
                  id="City"
                  name="City"
                  label="City"
                  fullWidth
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  required
                  id="State"
                  name="State"
                  label="State"
                  fullWidth
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  required
                  id="pin-code"
                  name="pin-code"
                  label="Pin-code"
                  fullWidth
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  required
                  id="PhoneNumber"
                  name="phoneNumber"
                  label="Phone Number"
                  fullWidth
                />
              </Grid>
              <Button type="submit" sx={{ bgcolor: "blue", color: "white", px: 4, py: 1.5 }}>
                Add Address
              </Button>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeliveryAddress;
