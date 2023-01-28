import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Landing/Home";
import Login from "../Components/Login/Login";
import ProductPage from "../Pages/productsPage/Productpage";
import SinglePageProduct from "../Pages/productsPage/singlePage/SinglePageProduct";
import Cart from "../Pages/Cart/Cart";
import Offer from "../Pages/Offers/Offer";
import Plus from "../Pages/Plus/Plus";
import NoProduct from "./NoProduct";
import AdminRoutes from "./AdminRoutes";

import AdminHome from "../Pages/Admin/Home/Home";
import NewProduct from "../Pages/Admin/NewProduct/NewProduct";
import NewUser from "../Pages/Admin/NewUser/NewUser";
import Product from "../Pages/Admin/Product/Product";
import ProductList from "../Pages/Admin/ProductList/ProductList";
import User from "../Pages/Admin/User/User";
import UserList from "../Pages/Admin/UserList/UserList";
import { Payment } from "../Pages/Payment/Payment";

const AllRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/admin" element={<AdminRoutes />}></Route>
        <Route path="/adminHome" element={<AdminHome />}></Route>
        <Route path="/newproduct" element={<NewProduct />}></Route>
        <Route path="/newUser" element={<NewUser />}></Route>
        <Route path="/adminProduct/:productId" element={<Product />}></Route>
        <Route path="/adminProducts" element={<ProductList />}></Route>
        <Route path="/adminUser/:userId" element={<User />}></Route>
        <Route path="/adminUsers" element={<UserList />}></Route>
        
        
        <Route path="/login" element={<Login />}></Route>
        <Route path={"/product"} element={<ProductPage />}></Route>
        <Route path={"/product/:id"} element={<SinglePageProduct />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/plus" element={<Plus />}></Route>
        <Route path="/offer" element={<Offer />}></Route>
        {/* <Route path="*" element={<NoProduct />}></Route> */}
        <Route path="/payment" element={<Payment />}></Route>
      </Routes>
    </div>
  );
};

export default AllRouter;