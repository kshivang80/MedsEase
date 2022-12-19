import React from 'react'
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
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

import { Link } from 'react-router-dom'
// import CartItem from '../../Components/CartItem/CartItem'

const Cart = () => { 
  let data=JSON.parse(localStorage.getItem("checkout-arr"));
  console.log(data);
  const totalcartitem=data.length;
  let sum=0;
  const totalcartprice=data.map((item)=>{
    return Number(item.mrpDecimal-item.discountDecimal)
  })
  for(let i=0;i<totalcartprice.length;i++){
    sum+=totalcartprice[i];
  }
  console.log("price",sum)


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

                    {/* <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href='#'>Contact</BreadcrumbLink>
        </BreadcrumbItem> */}
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
                        <Link to="/Payment">
                        <button style={{padding:"10px",backgroundColor:"#10847e", borderRadius:"8px",width:"100% ",color:"white"}}>Proceed to Checkout</button></Link>
                      </div>
                    </div>
              </div>


            </div>

            
        </div>
    )
}

export default Cart;

