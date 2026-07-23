import { useDispatch, useSelector } from "react-redux";
import AddressCard from "../AddressCard/AddressCard";
import CartItem from "../Cart/CartItem";
import { useEffect } from "react";
import { getOrderById } from "../../state/Order/Action";
import { useLocation } from "react-router-dom";
import { createPayment } from "../../state/Payment/Action";

const OrderSummary = () => {

  const dispatch = useDispatch();

  const { order } = useSelector(store => store.order)
  console.log(order?.orderitems)

  const location = useLocation()
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get("order_id")

  const HandleCheckOut=()=>{
    dispatch(createPayment(orderId))
  }

  useEffect(() => {
    dispatch(getOrderById(orderId))
  }, [])

  return (
    <div >
      <div >
        <div className="grid grid-cols-2  w-full h-full">
          <div className="">
            <div className='border border-gray-200 shadow-md rounded-md cursor-pointer p-8 space-y-4 mx-4'>
              <h2 className="font-bold text-2xl underline">SHIPPING ADDRESS:</h2>
              <h1 className='font-bold text-xl py-2'>{order?.shippingAddress?.firstName} {order?.shippingAddress?.lastName}</h1>
              <div>
                <p className='font-semibold text-gray-600 '>{order?.shippingAddress?.streetAddress} </p>
                <p className='font-semibold text-gray-600 '>{order?.shippingAddress?.pin_code} </p>
                <p className='font-semibold text-gray-600 pb-2'>{order?.shippingAddress?.city} {order?.shippingAddress?.state}</p>
              </div>
              <p className='font-bold'>{order?.shippingAddress?.mobile}</p>
            </div >
          </div>
          <div className="sticky ml-4 h-100 top-0 p-4 rounded-md border shadow-lg mb-8 border-gray-300">
            <div className="my-2">
              <h2 className="font-bold text-2xl my-4">Price Details</h2>
            </div>
            <hr />
            <div className="my-3">
              <div className="flex items-center justify-between my-2">
                <p className="font-bold opacity-60">Price {order?.totalItems} items</p>
                <p className="font-bold ">${order?.totalPrice}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-bold opacity-60">Discount</p>
                <p className="font-bold text-green-600">-${order?.discount}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-bold opacity-60">Delivery Charges</p>
                <p className="font-bold text-green-600">Free</p>
              </div>
            </div>
            <hr />
            <div className="flex items-center my-2 mt-4 justify-between">
              <h2 className="font-bold text-2xl ">Total Amount</h2>
              <p className="font-bold text-green-600 text-xl">${order?.totalDiscountedPrice}</p>
            </div>
            <hr />
            <div className="flex items-center mt-6 justify-between">
              <h2 className="font-bold text-gray-600 text-xl ">ORDER STATUS </h2>
              <p className="font-bold text-red-600 text-xl">{order?.orderStatus}</p>
            </div>
            <div>
              <button
                onClick={HandleCheckOut}
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
              >
                Check out
              </button>
            </div>
          </div>

        </div>
      </div>

      <div className="py-4 mb-8 mx-4 rounded-md border shadow-lg border-gray-300">
        <h2 className="font-bold text-2xl p-2 mx-4 mb-4">Your Orders :</h2>
        {order?.orderitems?.map((item) => {
          return <div key={item.id} className="flex gap-3 my-2 p-2 mx-4">
            <div className="w-20 h-20 lg:w-40 lg:h-40">
              <img
                className="w-full h-full object-cover object-top"
                src={item.product.imageURL}
                alt="image"
              />
            </div>
            <div>
              <h3 className="text-gray-900 font-bold">{item.product.brand}</h3>
              <p className="opacity-60 font-bold text-gray-90">
                {item.product.description}
              </p>

              <div className="flex gap-3 items-center mt-2">
                <p className="text-gray-900 font-bold">${item.product.discountedPrice}</p>
                <p className="line-through opacity-60 text-gray-900">${item.product.price}</p>
                <p className="opacity-60 text-green-600">%{item.product.discountPercent} off</p>
              </div>
              <div>
                <p className="opacity-60 font-bold mt-2 text-gray-90">size:{item.size.toUpperCase()}</p>
              </div>
            </div>
          </div>
        })}
      </div>

    </div>
  );
};

export default OrderSummary;
