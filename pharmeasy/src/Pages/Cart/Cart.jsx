import React, { useState } from 'react'
import "./Cart.css"
import Cartdata from "./Cartdata"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    Container,
    Box,
    Flex,
    Spacer,
    Button,
    ButtonGroup, 
    useToast
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import {useSelector} from "react-redux"


import { Link, Navigate, } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
// import CartItem from '../../Components/CartItem/CartItem'

const Cart = () => { 
  let navigate = useNavigate(); 
  const isAuth=useSelector((a)=>a.AuthReducer.isAuth)

  const toast = useToast()


  let data=JSON.parse(localStorage.getItem("checkout-arr"))||[]
  const [sum1,setSum1]=useState(0)
  const totalcartitem=data.length;
let sum=0;  
  if(data!==null){

    const totalcartprice=data?.map((item)=>{
   return  Number(item.mrpDecimal-item.discountDecimal)
     
    })
    let total=totalcartprice?.reduce((acc,cur)=>{
      return acc+cur
    },0)
    
sum=total.toFixed(2)



}

const handlePayment=()=>{
    
 
  toast({
    title: 'Added Successfully',
    description: "Item is added in Cart",
    status: 'success',
    duration: 9000,
    isClosable: true,
    position: 'top'
  })
  
 setTimeout(() => {
    navigate("/payment")
  }, 1000);

}



  if (!isAuth) {
    toast({
      title: 'Please Login',
      description: "Due to security reasons, please login",
      status: 'success',
      duration: 9000,
      isClosable: true,
      position: 'top'
    })
    return <Navigate to="/"/>
}


    return (
        <div >
            {/* cart bar */}
            <div id='cartbar'>
                <Breadcrumb spacing='8px' m="4" separator={<ChevronRightIcon color='gray.500' />}>
                    <BreadcrumbItem>
                        <Link to="/">
                            <BreadcrumbLink style={{ fontSize: "BOLD" }} color="#10847e">Home</BreadcrumbLink>
                        </Link>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <Link to="/checkout">
                            <BreadcrumbLink>Cart</BreadcrumbLink>
                        </Link>
                    </BreadcrumbItem>

                    <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href='#'>Contact</BreadcrumbLink>
        </BreadcrumbItem>
                </Breadcrumb>
            </div>
            {/* cart page body */}
            <div id='cartcontainer' >

              {/* cart item  */}
              <div id='cartitem' >
                <div id='cartitemcontainer' >
                  <div id='cartitemheader'>
                  <h1 style={{fontWeight:"bold"}}>{totalcartitem} Item in the Cart</h1>
                  </div>
                  <div id='cartaddress' >
                    <h2>Deliver to: <a>Select Pincode</a></h2>
                  </div>
                  <div id='cartItem' >
                    { data.length==0? <div style={{margin:"auto",width:"50%"}}>
                          <img src="https://assets.pharmeasy.in/web-assets/images/emptyCart.png" alt="" width="100%"style={{alignItem:"center",justifyContent:"center",width:"100%" }} />
                          <h3>Your Medicine/Healthcare cart is empty</h3>
                        </div>:
                      //  data.map((item)=><Cartdata data={data} key={item.productId}/>)
                      <Cartdata data={data}/>
                        
                    }
                    {/* get cart item from local storage */}

                  </div>
                  
                </div>
              </div>

              {/* cart Total */}
              <div id='cartTotal'>
                    <div id="cartTotalContainer">
                      <div id="cartTotalbox" style={{padding:"10px",borderBottom:"1px solid gray"}}>
                        <h1>Cart Total:{sum}</h1>
                      </div>
                      <div id='cartTotalButton' style={{padding:"10px"}}>
                        
                       {data.length===0 ? 
                        <button 
                         onClick={() =>navigate("/product")}
                    style={{ padding: "10px", backgroundColor: "#10847e", borderRadius: "8px", width: "100% ", color: "white" }}>Continue Shoping</button>: <Link to="/payment">
                        <button 
                         onClick={handlePayment}
                         disabled={sum=0}
                    style={{ padding: "10px", backgroundColor: "#10847e", borderRadius: "8px", width: "100% ", color: "white" }}>Proceed to Checkout</button></Link>}
                
                      </div>
                    </div>
              </div>


            </div>

            
        </div>
    )
}

export default Cart;

