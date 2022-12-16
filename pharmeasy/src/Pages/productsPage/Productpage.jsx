import { Grid, Box, Center, Stack, Select, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { getProduct, getProductUrl } from "../../Redux/Redux-Product/action";

import Filter from "./Comp/Filter";
import ProductCard from "./ProductCard";

export default function ProductPage() {
 
  const dispatch=useDispatch()
const  [option,setOption]=useState('')

 const { data, loading,optionvalue} = useSelector((store) => {
    return {
      data: store.reducer.dataOnfetch,
      loading: store.reducer.isLoading,
      
      
    };
  });

 

  useEffect(()=>{
if(data.length==0){
  dispatch(getProductUrl())
}

  },[data])

  const handelOptionChange=()=>{
  //setOption(e.target.value)

  }
  



  return (
    <>
      <Center>
        <Box display={"flex"} gap="100px">
          <Box mt="30px" w="300px">
            {" "}
            <Filter />
          </Box>
          <Box>
            <Box
              h="100px"
              display={"flex"}
              alignItems="center"
              justifyContent="space-between"
            >
              <Box>
                {" "}
                <Text fontSize={"2xl"} color="grey">
                  Health Care Product
                </Text>
              </Box>

              <Box
                w="300px"
                display="flex"
                gap={10}
                justifyContent="center"
                alignItems={"center"}
              >
                <Text fontSize={"xl"} color="grey">
                  SortBy:
                </Text>
                <Select  onChange={handelOptionChange}  >
                  <option  >Popularity</option>
                  <option value={'asc'} >Price Low to high</option>
                  <option value={'desc'} >Price High to Low</option>
                  <option value={'discountPercent'} >Discount %</option>
                </Select>
              </Box>
            </Box>
            <Grid templateColumns="repeat(3,1fr)" gridGap={10}>
              {data &&
                data.map((elm) => {
                  return (
                    <div key={elm.productId}>
                      <ProductCard key={elm.id} item={elm} />
                    </div>
                  );
                })}
            </Grid>
          </Box>
        </Box>
      </Center>
     
    </>
  );
}
