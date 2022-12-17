import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Landing/Home";
import Offer from "../Pages/Offers/Offer";
import Plus from "../Pages/Plus/Plus";

import SinglePageProduct from "../Pages/productsPage/singlePage/SinglePageProduct";
import NoProduct from "./NoProduct";
import Cart from "../Pages/Cart/Cart"
import Login from "../Components/Login/Login"
import ProductPage from "../Pages/productsPage/Productpage"
const AllRouter = () => {
  return (
    <div>

        <Routes>
            
            <Route   path='/' element={<Home/>} ></Route>

        <Route path={"/product"} element={<ProductPage/>}></Route>
        <Route  path="*" element={<NoProduct/>}   ></Route>
        <Route  path={'/product/:id'}  element={<SinglePageProduct/>} ></Route>
            <Route   path='/Plus' element={<Plus/>} ></Route>
            <Route   path='/Offer' element={<Offer/>} ></Route>
            <Route   path='/Login' element={<Login/>} ></Route>
            <Route   path='/Cart' element={<Cart/>} ></Route>



   


      
      </Routes>
    </div>
  );
};

export default AllRouter;
