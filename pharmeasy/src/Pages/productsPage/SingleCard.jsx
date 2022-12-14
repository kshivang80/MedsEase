import {Box,Image,Text,SkeletonCircle,SkeletonText} from "@chakra-ui/react"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { reducer } from "../../Redux/Redux-Product/reducer"
import edit3 from "./img/edit3.jpg"





export default function SingleCard({item}){



    return <>
  
    <Box  display={'flex'} flexDirection='column'  alignItems={'center'} boxShadow={'xl'}  w='230px' h='300px' border={'1px solid grey'} borderRadius={15}   >
<Image w='100px' h='150px' src={item.images} mt='10%' />
<Text as='b' color={'grey'} w='200px' noOfLines={1} >{item.name}</Text>
<Text as="del" >{item.mrpDecimal}</Text>
 <Image    w={50} src={edit3}></Image>
    </Box>
   
 
    </>
}