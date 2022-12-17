import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Landing/Home";
import Offer from "../Pages/Offers/Offer";
import Plus from "../Pages/Plus/Plus";
import ProductPage from "../Pages/productsPage/Productpage";
import SinglePageProduct from "../Pages/productsPage/singlePage/SinglePageProduct";
import NoProduct from "./NoProduct";

const AllRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/Plus" element={<Plus />}></Route>
        <Route path="/Offer" element={<Offer />}></Route>

        <Route path={"/product"} element={<ProductPage />}></Route>
        <Route  path="*" element={<NoProduct/>}   ></Route>
        <Route  path={'/product/:id'}  element={<SinglePageProduct/>} ></Route>
      </Routes>
    </div>
  );
};

export default AllRouter;
