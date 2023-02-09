import {
  Box,
  Heading,
  Checkbox,
  Text,
  Spacer,
  Input,
  Image,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

import { getProductUrl } from "../../../Redux/Redux-Product/action";
import CheckBox from "../checkBox/CheckBox";
import InputSearch from "../Comp/InputSearch";

import "../pro.css";
import { get_url_success_fn } from "../../../Redux/Redux-Product/action";

export default function Filter() {
  const [text, setText] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();
  const intcatagorie = searchParams.getAll("categoryId");

  const [catagorie, setCatogorie] = useState(intcatagorie || []);
  const location = useLocation();
  const handelFilter = (e) => {
    let newCatagorie = [...catagorie];

    if (newCatagorie.includes(e.target.value)) {
      newCatagorie.splice(newCatagorie.indexOf(e.target.value));
    } else {
      newCatagorie.push(e.target.value);
    }
    setCatogorie(newCatagorie);
  };

  useEffect(() => {
    let param = {};
    param.categoryId = catagorie;
    param._sort = searchParams.get("_sort");
    setSearchParams(param);
    //console.log(param, "paramsssss");
  }, [catagorie, searchParams]);

  const dispatch = useDispatch();

  useEffect(() => {
    if (data.length || location) {
      let sort = searchParams.get("_sort");
      let x;
      sort == "discountPercent"
        ? (x = "discountPercent")
        : (x = "salePriceDecimal");

      // console.log(sort, "sprt");
      let _order;
      const getparams = {
        params: {
          categoryId: intcatagorie,
          _sort: sort && x,
          _order: sort && sort == "discountPercent" ? (_order = "desc") : sort,
        },
      };

      dispatch(getProductUrl(getparams));
    }
  }, [location, dispatch]);

  let data = useSelector((store) => store.reducer.dataOnfetch);

  //const [suggestion, setSuggestion] = useState([]);
  const handelChange = (e) => {
    setText(e.target.value);
  };
  const navigate = useNavigate();

  const cata1 = data.filter((elm) => elm.categoryId == "medicine");
  const cata2 = data.filter((elm) => elm.categoryId == "personalNeed");
  const cata3 = data.filter((elm) => elm.categoryId == "immunityBooster");

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
  }, [text]);

  return (
    <Box>
      <Text as="b" color="grey" fontSize={"3xl"}>
        Filter
      </Text>

      <Box>
        <Text fontWeight={"bold"} color="grey" mt="40px" fontSize="xl">
          Category
        </Text>
        <Box display={"flex"} justifyContent="space-between" mt="20px">
          <Text>Personal Care</Text>
          <CheckBox def={true} />
        </Box>
        <Box border={"1px solid grey"} mt="20px"></Box>

        <Box mt="20px">
          <Text as={"b"} color="gray.600" fontSize="xl">
            Sub Categories
          </Text>
          <Box mt="20px" border={"1px solid grey"}></Box>
          <Box display={"flex"} flexDirection="column" gap={10} mt="30px">
            <Box display={"flex"} justifyContent="space-evenly">
              <Text fontSize={"16px"} as="b" color={"grey"}>
                Medicine
              </Text>
              <Text pl="200px" color={"grey"}>
                ({cata1.length})
              </Text>
              <CheckBox
                ckvalue={catagorie.includes("medicine")}
                value="medicine"
                onchange={handelFilter}
              />
            </Box>
            <Box display={"flex"} justifyContent="space-evenly">
              <Text fontSize={"16px"} as="b" color={"grey"}>
                Personal Care
              </Text>
              <Text pl="160px" color={"grey"}>
                ({cata2.length})
              </Text>
              <CheckBox
                ckvalue={catagorie.includes("personalNeed")}
                value="personalNeed"
                onchange={handelFilter}
              />
            </Box>
            <Box display={"flex"} justifyContent="space-between">
              <Text fontSize={"16px"} as="b" color={"grey"}>
                {" "}
                Immunity Booster
              </Text>
              <Text pl="130px" color={"grey"}>
                ({cata3.length})
              </Text>
              <CheckBox
                ckvalue={catagorie.includes("immunityBooster")}
                value="immunityBooster"
                onchange={handelFilter}
              />
            </Box>
          </Box>
        </Box>
        <Box border="1px solid grey" bg="grey" mt="20px"></Box>

        <Box mt="20px">
          <Text color={"gray.700"} as="b" fontSize={"20px"}>
            Brand
          </Text>
        </Box>

        {/* <Box className="search-parent" border={"1px solid red"}> */}
          <Box className="searchbar">
            {" "}
            <InputSearch onchange={(e) => handelChange(e)} />
          </Box>
          {/* <Box className="lense-img" marginTop="20px"> */}{" "}
          {/* <Image src={magnifyLense} w="40px" /> */}
          {/* </Box> */}
        {/* </Box> */}

        <Box mt="50px" bg="grey" border={"1px solid grey"}></Box>

        <Box mt="30px">
          <Text as="b" color={"gray.600"} fontSize={"20px"}>
            Price
          </Text>
        </Box>

        <Box display={"flex"} flexDirection="column" gap={10} mt="30px">
          <Box display={"flex"} justifyContent="space-between">
            <Text fontSize={"16px"} as="b" color={"grey"}>
              100-199
            </Text>
            <CheckBox />
          </Box>
          <Box display={"flex"} justifyContent="space-between">
            <Text fontSize={"16px"} as="b" color={"grey"}>
              200-299
            </Text>
            <CheckBox />
          </Box>
          <Box display={"flex"} justifyContent="space-between">
            <Text fontSize={"16px"} as="b" color={"grey"}>
              {" "}
              300-above
            </Text>
            <CheckBox />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
