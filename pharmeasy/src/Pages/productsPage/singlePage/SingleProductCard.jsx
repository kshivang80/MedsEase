import { Center, Box, Image, Text, Select, Button, useToast } from "@chakra-ui/react";
import DamImages from "./DamImages";
import edit3 from "../img/edit3.jpg";
import "./singlecart.css";
import { settings8 } from "../../../Components/Landing/ResponsiveCard";
import Slider from "react-slick";
import { FeaturedLink } from "../../../Components/Landing/HomeCards";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";


export default function SingleProductCard({ items }) {
  const toast = useToast()
  let navigate = useNavigate(); 
const clearref=useRef()

  let date1 = new Date().toLocaleString();
  

  const handelAddCart = () => {
    let arr1 = JSON.parse(localStorage.getItem('checkout-arr'))||[];
    let previtem = JSON.parse(localStorage.getItem('cart'))

    arr1.push(previtem)
    localStorage.setItem('checkout-arr', JSON.stringify(arr1))

    toast({
      title: 'Item Added Successful',
      // description: "We've created your account for you.",
      status: 'success',
      duration: 2000,
      isClosable: true,
      position: 'top'
    })

    clearref.current=setTimeout(() => {
      navigate("/Cart")
    }, 2000);

  }
  useEffect(()=>{
   return ()=>{
    clearTimeout(clearref.current)
   }
        },[])
       


  return (
    <>
      <Center mt='100px'   >
        <Box w='80%' >
          <Box w='full' display={"flex"} gap={3} p="10px"   className='cart-main'>
            <Box  id="first-box"  w="40%" p={10}  >
             <Box className="item-img" > <img  className="item-img-child" style={{width:"70%",margin:"auto"}}  src={items.images} /></Box>
              <Box mt='30px' >
                <DamImages images={items.damImages} />
              </Box>
              <Box mt="30px" p="10px" display={"flex"} gap={3}  >
                {" "}
                <Text fontSize={"xs"} color="gray.500">
                  5 day return policy
                </Text>
                <Text fontSize={"xs"} fontWeight="medium" color="teal.700">
                  <a href="https://pharmeasy.in/legal/terms-and-conditions#returns">
                    Read More
                  </a>
                </Text>
              </Box>
            </Box>
            <Box

         
              display="flex"
              flexDirection={"column"}
              gap="20px"
              p={10}
              className='second-box'
            
              w='full'
            >
              <Text as="b" color="gray.600">
                {items.name}
              </Text>
              <Box display="flex" gap={3} justifyContent="space-between">
                <Box display="flex" gap={3} w={"500px"} className='inner-box' >
                  <Text as='b' color={'gray.500'} >
                    ₹
                    {(
                      +items.mrpDecimal - Number(items.discountDecimal)
                    ).toFixed(2)}
                  </Text>
                  <Text as="del" color={"gray.500"}>
                    MRP: {items.mrpDecimal}
                  </Text>
                 <Box className="box-img2"   > <Image className="ct-image" w='full'  src={edit3} /></Box>
                  <Text fontSize={"14px"} className="ct-text">
                    {items.discountPercent}% OFF
                  </Text>
                </Box>

                <Box>
                  <Select color={"Green"} fontWeight="bold">
                    {" "}
                    <option>Qty 1</option>
                    <option>Qty 2</option>
                  </Select>
                </Box>
              </Box>

              <Box display={"flex"} gap={2} p="10px">
                {" "}
                <Text color={"gray.500"} fontSize="xs">
                  Inclusive of all taxes
                </Text>
                <Text fontSize={"xs"} color="gray.800">
                  Delivery by
                </Text>{" "}
                <Text fontSize={"xs"}>{date1}</Text>
              </Box>
              <Box w={'80%'} display={'flex'}
                justifyContent='flex-end' m='auto'  > <Button variant={'solid'} colorScheme='teal' bg='teal.600' size='lg' onClick={handelAddCart} >Add To Cart</Button></Box>
            </Box>
          </Box>
          <Box w='80%' bg='grey' m={'auto'} border={'gray'} mt='20px' h='1px'></Box>
          <Box mt='10px'   >

            <Box className="Wellness"  >
              <Box className="LiveTest2-wellness">
                <p
                  style={{
                    fontSize: "26px",
                    color: "#30363C",
                    width: "auto",
                    fontWeight: "bolder",
                  }}>
                  Similar Product
                </p>
                <p
                  style={{
                    fontSize: "18px",
                    color: "#4F585E",
                    width: "auto",
                    fontWeight: "600",
                  }}>
                  Pick from our favourite brands
                </p>
              </Box>

              <div className="FeaturedMain">
                <Slider {...settings8}>
                  {FeaturedLink.map((item) => (


                    <div key={item.productId} className="Featured">

                      <div className="Featuredtop">
                        <img src={item.image} />
                      </div>
                      <div className="Featuredbottom">
                        console.log(item);
                        <p>{item.name}</p>
                        <h5>{item.off}</h5>
                      </div>

                    </div>
                  ))}
                </Slider>
              </div>
            </Box>
          </Box>



        </Box>
      </Center>
    </>
  );
}
