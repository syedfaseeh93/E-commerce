import React from "react";
import Navbar from "../components/Navigation/Navbar";
import Footer from "../components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import HomePage from "../components/pages/Homepage/HomePage";
import Cart from "../components/Cart/Cart";
import Product from "../components/Product/Product";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import OrdersPage from "../components/OrdersPage/OrdersPage";
import OrderDetails from "../components/OrdersPage/OrderDetails";
import DeliveryAddress from "../components/CheckOut/DeliveryAddress";
import LoginForm from "../Auth/LoginForm";
import RegisterForm from "../Auth/RegisterForm";

const CustomerRouter = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/login" element={<HomePage/>}></Route>
        <Route path="/register" element={<HomePage/>}></Route>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/deliveryaddress" element={<DeliveryAddress/>}></Route>
        <Route path="/:levelOne/:levelTwo/:levelThree" element={<Product/>}></Route>
        <Route path="/products/:productId" element={<ProductDetails/>}></Route>
        <Route path="/account/orders" element={<OrdersPage/>}></Route>
        <Route path="/account/orders/:orderId" element={<OrderDetails/>}></Route>
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CustomerRouter;
