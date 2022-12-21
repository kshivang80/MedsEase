import { Grid, Box, Center, Stack, Select, Text,useMediaQuery } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { getProduct, getProductUrl, get_url_success_fn } from "../../Redux/Redux-Product/action";
import { store } from "../../Redux/store";
import Filter from "./Comp/Filter";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import { Loading } from "./LoadingIndicator/Loding";
import InputSearch from "./Comp/InputSearch";


export default function ProductPage() {
  const [searchparams, setSearchParams] = useSearchParams();
  const [text,setText]=useState('')
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


  const [show] = useMediaQuery('(min-width: 1200px)')
  const navigate=useNavigate();
  useEffect(() => {
    // console.log(data);

    let arr = [];
    let textQuery = text.trim().toLowerCase();

    if (textQuery == "") {
      dispatch(getProductUrl());
    }

    arr = data.filter((elm) => {
      return elm.manufacturer.toLowerCase().indexOf(textQuery) !== -1
        ? true
        : false;
    });

    if (arr.length > 0) {
      dispatch(get_url_success_fn(arr));
    }

    if (arr.length == 0) {
      // navigate("*");
    }
  }, [text]);


  const handelChange = (e) => {
    setText(e.target.value);
  
  };
 


  useEffect(() => {
    const param = {};
    param._sort = option;
    setSearchParams(param);
   
  }, [option]);

  return (
    <>
      <Center m='auto' >
        <Box display={"flex"} gap="100px">
        {show? <Box mt="30px" w="300px">
            {" "}
           {show?<Filter/>:null}
          </Box>:null}
          <Box>
            <Box
              h="100px"
              display={"flex"}
              alignItems="center"
              justifyContent="space-between">
              <Box>
                {" "}
              { show? <Box> <Text fontSize={"2xl"} color="grey">
                Health Care Product
              </Text></Box>:null}
               
              </Box>
             <Box>
             {   show?null:<InputSearch  placeholder={"Search"} onchange={(e) => handelChange(e)} />}
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
          { loading?<Loading/>:<Grid    templateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(2,1fr)', lg: 'repeat(3,1fr)' }} gridGap={10}>
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
