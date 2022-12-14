

import {Box,Container,Image,Text,Grid ,SkeletonCircle,SkeletonText} from "@chakra-ui/react"
import { useSelector } from "react-redux";
import SingleCard from "./SingleCard";


export default function ProductCard({item}){

const loading=useSelector((store)=>store.reducer.isLoading)


  
    return  <>
    
    <Box  >
        
     <SingleCard key={item.id}  item={item}  />
    </Box>
    </>

}