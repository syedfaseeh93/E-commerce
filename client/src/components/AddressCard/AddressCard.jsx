import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import { createOrder } from "../../state/Order/Action";

const AddressCard = () => {

  const { user } = useSelector(store => store.auth);


  const navigate = useNavigate();
  const dispatch = useDispatch();

  const HandleAddressCard = (u) => {
    const address =
    {
      firstName: u.firstName,
      lastName: u.lastName,
      streetAddress: u.streetAddress,
      city: u.city,
      state: u.state,
      pin_code: u.pin_code,
      mobile: u.mobile
    }
    console.log(address)
    dispatch(createOrder(address, navigate))
  }

  return (

    <>{false ? (<h2 className="font-semibold text-gray-600">Add Your Address to make Orders</h2>) : (<>{user?.address?.map((u) => (
      <div key={u.id} className='border border-gray-200 shadow-md rounded-md cursor-pointer p-8 space-y-4  my-4'>
        <h1 className='font-bold text-xl py-2'>{u.firstName} {u.lastName}</h1>
        <div>
          <p className='font-semibold text-gray-600 '>{u.streetAddress} {u.pin_code}</p>
          <p className='font-semibold text-gray-600 pb-2'>{u.city} {u.state}</p>
          <p className='font-semibold text-gray-600 '>{u.mobile}</p>
        </div>
        <p className='font-bold'>{u.phoneNumber}</p>
        <Button onClick={() => { HandleAddressCard(u) }} sx={{ bgcolor: "blue", color: "white", px: 4 }}>
          Deliver Here
        </Button>
      </div >
    ))}</>)}

    </>
  )
}

export default AddressCard