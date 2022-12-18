import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import Sidebar from "../Components/Admin/Sidebar/Sidebar";
import Topbar from "../Components/Admin/Topbar/Topbar";
import Home from "../Pages/Admin/Home/Home";
import NewProduct from "../Pages/Admin/NewProduct/NewProduct";
import NewUser from "../Pages/Admin/NewUser/NewUser";
import Product from "../Pages/Admin/Product/Product";
import ProductList from "../Pages/Admin/ProductList/ProductList";
import User from "../Pages/Admin/User/User";
import UserList from "../Pages/Admin/UserList/UserList";

const AdminRoutes = () => {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/adminHome">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default AdminRoutes;
