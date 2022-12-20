import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { getProductUrl } from "../../../Redux/Redux-Product/action";
import SingleProductCard from "./SingleProductCard";

export default function SinglePageProduct() {

  const params = useParams();

 

  const data = useSelector((store) => store.reducer.dataOnfetch);
  let arr = JSON.parse(localStorage.getItem('cart'))||[]
   if(data.length!==0){
    arr=data.find((elm)=>elm.productId==params.id)
    localStorage.setItem('cart',JSON.stringify(arr))
   }

  
  //  if (data.length > 0 &&arr.length==0 ) {
  //   arr = data.find((elm) => elm.productId == params.id);
  //   localStorage.setItem("cart", JSON.stringify(arr));
  //  }

  // if(arr.length==0){
   
   
  // }



  return <>

<SingleProductCard key={arr.productId}  items={arr}  />

  </>;



}
