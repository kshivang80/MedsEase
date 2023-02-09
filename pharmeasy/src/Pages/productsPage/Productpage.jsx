<<<<<<< HEAD
import {
  Grid,
  Box,
  Center,
  Stack,
  Select,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
=======
import { Grid, Box, Center, Stack, Select, Text, useMediaQuery } from "@chakra-ui/react";
>>>>>>> 8fb29ea24a5f485231b586a77fa1ba2e703d8f73
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import {
  getProduct,
  getProductUrl,
  get_url_success_fn,
} from "../../Redux/Redux-Product/action";
import { store } from "../../Redux/store";
import Filter from "./Comp/Filter";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import { Loading } from "./LoadingIndicator/Loding";
import InputSearch from "./Comp/InputSearch";

export default function ProductPage() {
  const [searchparams, setSearchParams] = useSearchParams();
<<<<<<< HEAD
  const [text, setText] = useState("");
=======
  const [text, setText] = useState('')
>>>>>>> 8fb29ea24a5f485231b586a77fa1ba2e703d8f73
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

  const [option, setOption] = useState("");

<<<<<<< HEAD
  const handelSort = (e) => {
    setOption(e.target.value);
  };
=======
  const [option, setOption] = useState('')

  const handelSort = (e) => {
    setOption(e.target.value)
  }

>>>>>>> 8fb29ea24a5f485231b586a77fa1ba2e703d8f73

  useEffect(() => {
    const param = {}
    param._sort = option
    setSearchParams(param)

  }, [option])

<<<<<<< HEAD
  const [show] = useMediaQuery("(min-width: 1200px)");
=======

  const [show] = useMediaQuery('(min-width: 1200px)')
>>>>>>> 8fb29ea24a5f485231b586a77fa1ba2e703d8f73
  const navigate = useNavigate();
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
<<<<<<< HEAD
  };

  return (
    <>
      <Center m="auto">
        <Box display={"flex"} gap="100px">
          {show ? (
            <Box mt="30px" w="300px">
              {" "}
              {show ? <Filter /> : null}
            </Box>
          ) : null}
=======

  };



  useEffect(() => {
    const param = {};
    param._sort = option;
    setSearchParams(param);

  }, [option]);

  return (
    <>
      <Center m='auto' >
        <Box display={"flex"} gap="80px">
          {show ? <Box mt="30px" w="400px" >
            {" "}
            {show ? <Filter /> : null}
          </Box> : null}
>>>>>>> 8fb29ea24a5f485231b586a77fa1ba2e703d8f73
          <Box>
            <Box
              h="100px"
              display={"flex"}
              alignItems="center"
              justifyContent="space-between"
            >
              <Box>
                {" "}
<<<<<<< HEAD
                {show ? (
                  <Box>
                    {" "}
                    <Text fontSize={"2xl"} color="grey">
                      Health Care Product
                    </Text>
                  </Box>
                ) : null}
              </Box>
              <Box>
                {show ? null : (
                  <InputSearch
                    placeholder={"Search"}
                    onchange={(e) => handelChange(e)}
                  />
                )}
=======
                {show ? <Box> <Text fontSize={"2xl"} color="grey">
                  Health Care Product
                </Text></Box> : null}

              </Box>
              <Box>
                {show ? null : <InputSearch placeholder={"Search"} onchange={(e) => handelChange(e)} />}
>>>>>>> 8fb29ea24a5f485231b586a77fa1ba2e703d8f73
              </Box>

              <Box
                w="600px"
               
                display="flex"
<<<<<<< HEAD
                gap={10}
                justifyContent="center"
                alignItems={"center"}
              >
                <Text fontSize={"xl"} color="grey">
                  SortBy:
                </Text>
=======
                gap={8}
                justifyContent="flex-end"
                alignItems={"center"}>
                <Box w="100px" >
                  <Text fontSize={"xl"} color="grey">
                    SortBy:
                  </Text>

                </Box>
                <Box  w="300px" >
>>>>>>> 8fb29ea24a5f485231b586a77fa1ba2e703d8f73
                <Select onChange={handelSort}>
                  <option>Popularity</option>
                  <option value={"asc"}>Price Low to high</option>
                  <option value={"desc"}>Price High to Low</option>
                  <option value={"discountPercent"}>Discount %</option>
                </Select>

                </Box>

               
              </Box>
            </Box>
<<<<<<< HEAD
            {loading ? (
              <Loading />
            ) : (
              <Grid
                templateColumns={{
                  base: "repeat(1,1fr)",
                  md: "repeat(2,1fr)",
                  lg: "repeat(3,1fr)",
                }}
                gridGap={10}
              >
                {data &&
                  data.map((elm) => {
                    return (
                      <Link
                        key={elm.productId}
                        to={`/product/${elm.productId}`}
                      >
                        {" "}
                        <div key={elm.productId}>
                          <ProductCard key={elm.id} item={elm} />
                        </div>
                      </Link>
                    );
                  })}
              </Grid>
            )}
=======
            {loading ? <Loading /> : <Grid  templateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(2,1fr)', lg: 'repeat(3,1fr)' }} gridGap={10}>
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
>>>>>>> 8fb29ea24a5f485231b586a77fa1ba2e703d8f73
          </Box>
        </Box>
      </Center>
    </>
  );
}
