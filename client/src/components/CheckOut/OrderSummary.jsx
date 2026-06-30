import AddressCard from "../AddressCard/AddressCard";
import CartItem from "../Cart/CartItem";

const OrderSummary = () => {
  return (
    <div>
      <div className="p-4 mb-6 shadow-md">
        <AddressCard />
      </div>
      <div className="grid grid-cols-3 ">
        <div className="col-span-2  ">
          {[1,1,1].map((item) => (
            <CartItem />
          ))}
        </div>

        <div className="sticky ml-4 h-100 top-0 p-8 rounded-md border shadow-lg mb-8 border-gray-300">
          <div className="my-2">
            <h2 className="font-bold text-2xl my-4">Price Details</h2>
          </div>
          <hr />
          <div className="my-3">
            <div className="flex items-center justify-between my-2">
              <p className="font-bold opacity-60">Price (5 items)</p>
              <p className="font-bold ">$5399</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="font-bold opacity-60">Discount</p>
              <p className="font-bold text-green-600">-$1299</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="font-bold opacity-60">Delivery Charges</p>
              <p className="font-bold text-green-600">Free</p>
            </div>
          </div>
          <hr />
          <div className="flex items-center my-2 mt-4 justify-between">
            <h2 className="font-bold text-2xl ">Total Amount</h2>
            <p className="font-bold text-green-600 text-xl">$4100</p>
          </div>
          <div>
            <button
              type="submit"
              className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
            >
              Check out
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default OrderSummary;
