import React from "react";
// import { Routes, Route } from "react-router-dom";
import Sidebar from "../Components/Admin/Sidebar/Sidebar";
import Topbar from "../Components/Admin/Topbar/Topbar";
// import Home from "../Pages/Admin/Home/Home";
// import NewProduct from "../Pages/Admin/NewProduct/NewProduct";
// import NewUser from "../Pages/Admin/NewUser/NewUser";
// import Product from "../Pages/Admin/Product/Product";
// import ProductList from "../Pages/Admin/ProductList/ProductList";
// import User from "../Pages/Admin/User/User";
// import UserList from "../Pages/Admin/UserList/UserList";

const AdminRoutes = () => {
  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        {/* <Routes>
          <Route path="/adminHome" element={<Home />}></Route>
          <Route path="/newproduct" element={<NewProduct />}></Route>
          <Route path="/newUser" element={<NewUser />}></Route>
          <Route path="/adminProducts/:productId" element={<Product />}></Route>
          <Route path="/adminProducts" element={<ProductList />}></Route>
          <Route path="/adminUser/:userId" element={<User />}></Route>
          <Route path="/adminUsers" element={<UserList />}></Route>
        </Routes> */}
      </div>
    </>
  );
};

export default AdminRoutes;
