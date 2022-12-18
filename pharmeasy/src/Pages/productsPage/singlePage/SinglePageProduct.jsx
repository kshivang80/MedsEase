import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { getProductUrl } from "../../../Redux/Redux-Product/action";
import SingleProductCard from "./SingleProductCard";

export default function SinglePageProduct() {
  const params = useParams();

  const dispatch = useDispatch();

  const data = useSelector((store) => store.reducer.dataOnfetch);
  let arr = [];
  if (data.length > 0) {
    arr = data.find((elm) => elm.productId == params.id);
    localStorage.setItem("cart", JSON.stringify(arr));
  }





  return <>
  

<SingleProductCard items={arr}  />

  
  
  </>;

  //let lsarr = JSON.parse(localStorage.getItem("cart"));

  return (
    <>
      <h1>single page product Card</h1>
    </>
  );

}
