import React from "react";
import Chart from "../../../Components/Admin/Chart/Chart.js";
import FeaturedInfo from "../../../Components/Admin/FeaturedInfo/FeaturedInfo";
import WidgetSm from "../../../Components/Admin/WidgetSm/WidgetSm";
import WidgetLg from "../../../Components/Admin/WidgetLg/WidgetLg";
import "./Home.css";
import {userData} from "../dummyData";

const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;
