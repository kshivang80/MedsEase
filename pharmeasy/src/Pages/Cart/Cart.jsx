import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    Container,
    Box,
    Flex,Spacer
} from '@chakra-ui/react'

import { ChevronRightIcon } from '@chakra-ui/icons'

import { Link } from 'react-router-dom'
import CartItem from '../../Components/CartItem/CartItem'

const Cart = () => {
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


            {/* body of cart items */}
            {/* <Container display={"flex"} mx="120" border='2px' borderColor='green' w="100%"> */}
            <Box display={"flex"} >


                {/* itemcart */}
                <Container id="itemcart" border='0px' borderColor='gray.200' w="100%" ml="3" borderRadius="8" p={"0"}>
                    <Box id="no_of_items"border='1px' borderColor='gray.200' borderBottomColor="gray.200" borderTopLeftRadius="8" borderTopRightRadius="8" p="0" m="0" >
                        <h3 style={{fontSize:26}}> 4 Item in your Cart</h3>
                    </Box>
                    <Box id='itemList' border='1px' borderColor='gray.200'>
                        <CartItem/>
                    </Box>

                </Container>


                {/* cart Total */}
                <Container id='cartTotal' border='0px' borderColor='gray.200' w="60%" display={"flex"} flexDirection="column" gap={"5"}>
                    <Box bg='tomato' w='100%' p={4} color='white'borderRadius="8">
                        This is the Box
                    </Box>
                    <Box bg='green' w='100%' p={4} color='white' borderRadius="8">
                        This is the Box
                    </Box>

                </Container>

            </Box>
            {/* </Container> */}
        </div>
    )
}

export default Cart;

