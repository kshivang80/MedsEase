import { Grid, Box, Center, Stack, Select, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { getProduct, getProductUrl } from "../../Redux/Redux-Product/action";
import { store } from "../../Redux/store";
import Filter from "./Comp/Filter";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import { Loading } from "./LoadingIndicator/Loding";

export default function ProductPage() {
  const [searchparams, setSearchParams] = useSearchParams();

  const { data, loading } = useSelector((store) => {
    return {
      data: store.reducer.dataOnfetch,
      loading: store.reducer.isLoading,
    };
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, []);


  const [option,setOption]=useState('')

  const handelSort=(e)=>{
setOption(e.target.value)
  }


  useEffect(()=>{
    const param={}
    param._sort=option
    setSearchParams(param)

  },[option])



  useEffect(() => {
    const param = {};
    param._sort = option;
    setSearchParams(param);
    console.log(param, "param");
  }, [option]);

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
              justifyContent="space-between">
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
                alignItems={"center"}>
                <Text fontSize={"xl"} color="grey">
                  SortBy:
                </Text>
                <Select onChange={handelSort}>
                  <option>Popularity</option>
                  <option value={"asc"}>Price Low to high</option>
                  <option value={"desc"}>Price High to Low</option>
                  <option value={"discountPercent"}>Discount %</option>
                </Select>
              </Box>
            </Box>
          { loading?<Loading/>:<Grid templateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(2,1fr)', lg: 'repeat(3,1fr)' }} gridGap={10}>
              {data &&
                data.map((elm) => {
                  return (
                    <Link key={elm.productId} to={`/product/${elm.productId}`}>
                      {" "}
                      <div key={elm.productId}>
                        <ProductCard key={elm.id} item={elm} />
                      </div>
                    </Link>
                  );
                })}
            </Grid>}
          </Box>
        </Box>
      </Center>
    </>
  );
}
